<script lang="ts" setup>
import { useUserStore } from '~/store/UserStore';
import { JWT_TYPE } from '~/types/JWT/JWT_TYPE';
import { getCookie } from '../util/cookie';

definePageMeta({
})


const step = ref(0);

onMounted(() => {
    const potentialCookie = getCookie('jwt');
    if (potentialCookie) {
        useUserStore().update(potentialCookie);
        const type = useUserStore().JWTPayload.type
        if (type === JWT_TYPE.USER) {
            useRouter().push("/home");
        } else if (type === JWT_TYPE.VALIDATING) {
            step.value = 2;
        } else if (type === JWT_TYPE.REGISTERING) {
            step.value = 3;
        }
    }
})



function next() {
    step.value++;
}

function previous() {
    step.value--;
}
</script>

<template>
    <div class="flex w-screen h-screen items-center justify-center space-x-52">
        <div class="flex justify-center items-center self-center z-10">
            <button>
                <font-awesome-icon class="text-primary text-5xl m-3" v-show="step != 0" :icon="['fas', 'arrow-left']"
                    @click="previous" />
            </button>

            <div class="p-12 bg-white  rounded-2xl">

                <ul class="steps pb-5 transition-all ease-in-out self-center w-full" :class="{ 'opacity-50': step == 0 }">
                    <li class="text-gray-600 step" :class="{ 'step-primary': step >= 1 }">Information de base</li>
                    <li class="text-gray-600 step" :class="{ 'step-primary': step >= 2 }">Vérification</li>
                    <li class="text-gray-600 step" :class="{ 'step-primary': step >= 3 }">Roles</li>
                    <li class="text-gray-600 step" :class="{ 'step-primary': step >= 4 }">Bienvenue !</li>
                </ul>


                <div class="flex flex-col ">
                    <RegisterStep0 @next="next" v-if="step === 0" />
                    <RegisterStep1 @next="next" v-if="step === 1" />
                    <RegisterStep2 @next="next" v-if="step === 2" />
                    <RegisterStep3 @next="next" v-if="step === 3" />
                    <RegisterStep4 @next="next" v-if="step === 4" />
                </div>



                <div class="flex flex-col" v-show="step === 0">
                    <div class="divider text-gray-600 after:bg-gray-300 before:bg-gray-300">Déjà un compte ?</div>
                    <NuxtLink to="/login">
                        <button class="btn bg-primary border-none text-white w-full">Se
                            connecter</button>
                    </NuxtLink>
                </div>
                <div class="pt-5 text-center text-gray-400 text-xs">
                    <span>
                        Copyright Arosaje © 2022-{{ new Date().getFullYear() }}
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>
