<script lang="ts" setup>

const emits = defineEmits(["next"])

type RoleType = {
    name: string,
    description: string
}

const roles: RoleType[] = [
    {
        name: "Administrateur",
        description: "Administrateur du site, il peut tout faire"
    },
    {
        name: "Botaniste",
        description: "Botaniste, il peut ajouter des plantes"
    },
    {
        name: "Utilisateur",
        description: "Utilisateur, il peut voir les plantes"
    }
]

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

    await new Promise((resolve) => setTimeout(resolve, 1000));

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
                    <p>{{ role.description }}</p>
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
