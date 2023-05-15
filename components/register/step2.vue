<script lang="ts" setup>
import { useUserStore } from '~/store/UserStore';

const emits = defineEmits(['next']);

const code = ref('');

async function sendCode() {
    if (!isCodeValide.value) {
        return;
    }

    const res = await useFetch(`http://localhost:8080/user/email/confirm/${code.value}`, {
        method: "GET",
    });
    const data = res.data.value as { jwt: string };

    console.log(data)
    if (!data) {
        return alert("Le code est invalide");
    }

    useUserStore().update(data.jwt);

    emits('next');
}

async function resendCode() {
    const res = await useFetch(`http://localhost:8080/user/email/resend`, {
        method: "GET",
        headers: {
            'x-access-token': useUserStore().JWT
        }
    });
    const data = res.data.value as { jwt: string };

    console.log(data)
    if (!data) {
        return alert("Impossible de renvoyer le code pour le moment");
    }

    useUserStore().update(data.jwt);
}

const isCodeValide = computed(() => {
    if (!code.value) {
        return false;
    }
    if (code.value.length != 6) {
        return false;
    }
    return true;
});
</script>

<template>
    <div class="flex w-full  flex-col justify-center items-center">
        <h1 class="font-bold text-zinc-900 text-3xl self-center">Vérification de votre E-mail</h1>
        <p class="text-start text-zinc-500">Vous avez du recevoir un code dans votre mail, merci de le rentrer en dessous.
        </p>
        <div class="flex items-center space-x-2 my-7">
            <input type="text" placeholder="Le code" v-model="code"
                class="input input-bordered w-full max-w-xs font-bold uppercase text-center " maxlength="6" />

            <button class="btn bg-primary border-none text-white disabled:text-zinc-500" :disabled="!isCodeValide"
                @click="sendCode">Valider</button>
        </div>
        <p class=" text-zinc-400">Vous n'avez pas reçu de code ? <span class="text-primary select-none cursor-pointer"
                @click="resendCode">Renvoyer le
                code</span></p>
    </div>
</template>
