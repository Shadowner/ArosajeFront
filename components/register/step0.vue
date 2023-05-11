<script lang="ts" setup>
const emits = defineEmits(['next']);


</script>

<template>
    <div class=" space-y-2">
        <div class="flex w-full  flex-col justify-center items-center">
            <h1 class="font-bold text-zinc-900 text-3xl self-center">Vous n'avez pas encore de compte ?</h1>
            <p class="text-zinc-500">Alors créons le votre ensemble en moins de 5 minutes !</p>
        </div>
        <button class="btn bg-primary border-none text-white  w-full mt-3 disabled:text-zinc-500"
            @click="$emit('next')">Créer son compte</button>
    </div>
</template>
