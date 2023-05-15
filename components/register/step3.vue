<script lang="ts" setup>
import { useUserStore } from '~/store/UserStore';


const emits = defineEmits(["next"])

type RoleType = {
    name: string,
    description: string,
    id?: number
}

const fetchRoles = await fetch("http://localhost:8080/role/public/all", {
    method: "GET"
});

const serverRoles: RoleType[] = await fetchRoles.json() as RoleType[];
if (!serverRoles) {
    throw alert("Impossible de récupérer les rôles");
}
const roles: RoleType[] = [
    {
        name: "ADMIN",
        description: "Administrateur du site, il peut tout faire"
    },
    {
        name: "BOTANISTE",
        description: "Botaniste, il peut ajouter des plantes"
    },
    {
        name: "USER",
        description: "Utilisateur, il peut voir les plantes"
    }
]

roles.map(x => {
    const serverRole = serverRoles.find(y => y.name === x.name)
    if (serverRole) {
        x.id = serverRole.id
    }
});



const selectedRoles: Ref<RoleType[]> = ref([])

function handleRoleClick(role: RoleType) {
    if (selectedRoles.value.includes(role)) {
        selectedRoles.value.splice(selectedRoles.value.indexOf(role), 1)
    } else {
        selectedRoles.value.push(role)
    }
}

async function sendRoles() {
    if (selectedRoles.value.length <= 0) {
        return
    }

    const sendRoles = await useFetch('http://localhost:8080/user/register/finish', {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": useUserStore().JWT
        },
        method: "POST",
        body: JSON.stringify({ roles: selectedRoles.value.map(x => x.id) })
    });

    const res = await sendRoles.data.value as { jwt: string }

    if (!res || !res.jwt) {
        return alert("Impossible de récupérer le token")
    }

    useUserStore().update(res.jwt)

    emits('next')
}

</script>

<template>
    <div class="flex w-full  flex-col justify-center items-center">
        <h1 class="font-bold text-zinc-900 text-3xl self-center">Choisissez vos rôles</h1>
        <p class="text-start text-zinc-500">Super ! Maintenant que votre compte est créé, vous pouvez choisir les rôles qui
            y seront attaché.
        </p>

        <div class="flex space-x-4 my-5">
            <div class="card w-96 bg-primary text-primary-content select-none cursor-pointer" @click="handleRoleClick(role)"
                v-for="role in roles" :key="role.name">
                <div class="card-body">
                    <h2 class="card-title text-white">{{ role.name }}</h2>
                    <p>{{ role.description }} ({{ role.id }})</p>
                    <div class="card-actions justify-end">
                        <input type="checkbox" class="toggle toggle-warning" :checked="selectedRoles.includes(role)" />
                    </div>
                </div>
            </div>
        </div>


        <button class="btn bg-primary border-none text-white disabled:text-zinc-500" :disabled="selectedRoles.length <= 0"
            @click="sendRoles">Valider</button>
    </div>
</template>
