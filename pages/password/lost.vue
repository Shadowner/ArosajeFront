<script lang="ts" setup>

const mail = ref('')
const sending = ref(false)
const sended = ref(false)

async function recover() {
    sending.value = true
    //TODO: Send mail
    await new Promise(resolve => setTimeout(resolve, 1000))
    sending.value = false
    sended.value = true
}

</script>

<template>
    <div class="flex w-screen h-screen items-center justify-center">
        <div class="card bg-white shadow-xl  ">
            <div class="card-body" v-if="!sended">
                <h2 class="card-title text-black">Réinitialisez votre mot de passe!</h2>
                <p class="text-gray-500">Pour cela, il va nous falloir votre adress email.</p>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-gray-500">Email</span>
                    </label>
                    <input type="text" v-model="mail" placeholder="Votre Email"
                        class="input input-bordered w-full max-w-xs" />

                </div>
                <div class="card-actions justify-end ">
                    <button class="btn btn-primary" :class="{ loading: sending }" @click="recover">Réinitialiser mon mot de
                        passe</button>
                </div>
            </div>
            <div class="card-body  text-black items-center " v-else>
                <h1 class="text-3xl">Un lien vous a été envoyé !</h1>
                <p class="w-1/2 text-gray-600">Un lien de réinitialistion vous a été envoyé si un compte est lié à cette
                    adresse mail.
                    Merci de regarder votre adresse mail et cliquer sur le lien join. N'oubliez de vérifier votre dossier
                    spamm.</p>
                <NuxtLink to="/">
                    <button class="btn btn-primary" :class="{ loading: sending }" @click="recover">Retour à la page
                        d'acceuil</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
