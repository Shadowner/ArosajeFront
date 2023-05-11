<script lang="ts" setup>
setTimeout(() => {
    useRouter().push('/home');
}, (1000 * 7));
</script>

<template>
    <div class="flex w-full  flex-col justify-center items-center">
        <h1 class="font-bold text-zinc-900 text-3xl self-center">Bienvenue dans cette grande famille</h1>
        <p class="text-start text-zinc-500">Bravo, vous avez réussi à créer votre compte ! Toutes l'équipe de Arosaje vous
            souhaites la bienvenue parmis nous !
        </p>
        <p class="text-start text-zinc-500">Nous allons vous rediriger dans un instant sur votre page personnelle 😀</p>

        <NuxtLink to="/home">
            <button class="btn bg-primary border-none text-white disabled:text-zinc-500 mt-5">Continuer</button>
        </NuxtLink>
    </div>
</template>
