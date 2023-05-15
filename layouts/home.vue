import { HomeHeader } from '../.nuxt/components';
<script lang="ts" setup>

</script>

<template>
    <div class="flex w-screen h-screen">
        <HomeNavbar />
        <div class="flex flex-col w-full m-3">
            <HomeHeader />
            <div class="bg-base-content w-full h-full max-h-full mt-3 overflow-hidden rounded-xl">
                <NuxtPage />
            </div>
        </div>

    </div>
</template>
