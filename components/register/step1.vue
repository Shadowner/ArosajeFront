<script lang="ts" setup>
import { useUserStore } from '../../store/UserStore';

const emits = defineEmits(['next']);
const userStore = useUserStore();
const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const day = ref('Merci de choisir');
const month = ref('Merci de choisir');
const year = ref('Merci de choisir');

const sending = ref(false);

async function next() {
    if (!areDatasValide.value) {
        return;
    }
    sending.value = true;
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        birthdate: new Date(`${day.value}/${month.value}/${year.value}`)
    };


    type ResType = { needConfirmation: boolean, message: string, jwt: string };

    const res = await useFetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const resData = res.data.value as ResType;
    if (!resData.jwt) {
        sending.value = false;
        return alert(resData.message);
    }

    userStore.update(resData.jwt);

    emits('next');
}

const areDatasValide = computed(() => {
    if (!firstname.value) {
        return false;
    }
    if (!lastname.value) {
        return false;
    }
    if (!email.value) {
        return false;
    }
    if (!password.value) {
        return false;
    }
    if (!password_confirmation.value) {
        return false;
    }
    if (password.value != password_confirmation.value) {
        return false;
    }
    if (!day.value) {
        return false;
    }
    if (!month.value) {
        return false;
    }
    if (!year.value) {
        return false;
    }

    if (Number(day.value) > 31) {
        return false;
    }
    if (Number(month.value) > 12) {
        return false;
    }
    if (Number(year.value) > new Date().getFullYear()) {
        return false;
    }

    return true;
});

</script>

<template>
    <div class=" space-y-2">

        <div class="flex space-x-4  w-full">
            <input v-model="firstname" type="text" placeholder="Votre Prénom"
                class="input input-bordered rounded-md w-full" />
            <input v-model="lastname" type="text" placeholder="Votre Nom de famille"
                class="input input-bordered rounded-md w-full" />
        </div>

        <div class="form-control w-full">
            <input v-model="email" type="text" placeholder="Votre Email" class="input input-bordered rounded-md w-full" />
        </div>

        <div class="flex space-x-4 w-full">
            <input v-model="password" type="password" placeholder="Votre mot de passe"
                class="input input-bordered rounded-md w-full" />
            <input v-model="password_confirmation" type="password" placeholder="Confirmer votre mot de passe"
                class="input input-bordered rounded-md w-full" />
        </div>

        <div class="form-control w-full ">
            <label class="label">
                <span class="label-text text-black text-bold">Date de naissance</span>
            </label>
            <div class="flex space-x-3">

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text text-black">Jour</span>
                    </label>

                    <select v-model="day" class="select select-bordered rounded-sm  ">
                        <option disabled selected>Merci de choisir</option>
                        <option v-for="i in 31">{{ i }}</option>
                    </select>
                </div>

                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text text-black">Mois</span>
                    </label>

                    <select v-model="month" class="select select-bordered rounded-sm  ">
                        <option disabled selected>Merci de choisir</option>
                        <option v-for="i in 12" :value="i">{{ new Date(new Date().setMonth(i - 1)).toLocaleString('default',
                            {
                                month:
                                    'long'
                            })
                        }}
                        </option>
                    </select>
                </div>
                <div class="form-control w-full ">
                    <label class="label">
                        <span class="label-text text-black">Années</span>
                    </label>

                    <select v-model="year" class="select select-bordered rounded-sm  ">
                        <option disabled selected>Merci de choisir</option>
                        <option v-for="i in 100">{{ new Date().getFullYear() - i }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="form-control w-full ">
            <label class="label">
                <span class="label-text text-black">Genre</span>
            </label>
            <select class="select select-bordered rounded-sm  ">
                <option disabled selected>Merci de choisir</option>
                <option>Homme</option>
                <option>Femme</option>
                <option>Autre</option>
            </select>
        </div>
        <button :disabled="!areDatasValide"
            class="btn bg-primary border-none text-white  w-full mt-3 disabled:text-zinc-500" @click="next">Suivant</button>
    </div>
</template>
