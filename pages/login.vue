<script lang="ts" setup>
definePageMeta({
    layout: false
})

const mail = ref("");
const password = ref("");
const connecting = ref(false);

async function connect() {
    if (!mail.value || !password.value) return alert("Veuillez remplir tous les champs");

    connecting.value = true;

    await new Promise(resolve => setTimeout(resolve, 1000));
    // const response = await fetch("http://localhost:3000/api/auth/login", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         mail: mail.value,
    //         password: password.value
    //     })
    // });
    // const data = await response.json();
    // if (data.error) {
    //     alert(data.error);
    // } else {
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //     window.location.href = "/";
    // }
    connecting.value = false;
    useRouter().push("/home");
}
</script>

<template>
    <div class="flex w-screen h-screen items-center justify-center space-x-52">
        <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div class="self-start hidden lg:flex flex-col  ">
                <img src="" class="mb-3">
                <h1 class="mb-3 font-bold text-5xl">Bonjour ? Ravi de vous revoir </h1>
                <p class="pr-3">Vos plantes sont entre de bonnes mains sur notre réseau de partage ! </p>
            </div>
        </div>
        <div class="flex justify-center self-center  z-10">
            <div class="p-12 bg-white mx-auto rounded-2xl w-100 shadow-2xl ">
                <div class="mb-4">
                    <h3 class="font-semibold text-2xl text-gray-800  ">Se connecter </h3>
                    <p class="text-gray-500">Merci de vous connecter à votre compte.</p>
                </div>

                <div class="space-y-5">
                    <div class="space-y-2">
                        <label class="text-sm font-medium text-base-300 tracking-wide">Email</label>
                        <input v-model="mail" :disabled="connecting"
                            class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                            type="" placeholder="mail@gmail.com">
                    </div>
                    <div class="space-y-2">
                        <label class="mb-5 text-sm font-medium text-base-300 tracking-wide">
                            Mot de passe
                        </label>
                        <input v-model="password" :disabled="connecting"
                            class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                            type="" placeholder="Entrez votre mot de passe">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" :disabled="connecting"
                                class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded">
                            <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                Se rappeler de moi
                            </label>
                        </div>
                        <div class="text-sm">
                            <NuxtLink to="/password/lost">

                                <a href="" class="text-primary hover:text-green-secondary">
                                    Mot de passe oublié ?
                                </a>
                            </NuxtLink>
                        </div>
                    </div>
                    <div>
                        <button type="submit" @click="connect" :class="{ loading: connecting }"
                            :disabled="!mail || !password"
                            class="w-full flex justify-center btn btn-primary disabled:text-zinc-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                            {{ connecting ? 'Connexion' : "Se connecter" }}
                        </button>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="divider text-gray-600 after:bg-gray-300 before:bg-gray-300">Pas de compte ?</div>
                    <NuxtLink to="/register">
                        <button class="btn bg-primary border-none text-white hover:bg-primary w-full"> Créer un
                            compte</button>
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
