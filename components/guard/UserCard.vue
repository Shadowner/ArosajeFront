<script lang="ts" setup>
defineProps<{
    user: {
        username: string,
        online: boolean,
        avatarURL: string,
        guardDate: Date,
    },
}>()
</script>

<template>
    <NuxtLink :to="`/home/user/${user.username}`">
        <div
            class="flex m-1 p-3 space-x-2 items-center select-none cursor-pointer bg-neutral-focus hover:bg-neutral rounded-2xl">
            <div class="avatar" :class="{
                    'online': user.online,
                    'offline': !user.online
                }">
                <div class="w-10 rounded-full">
                    <img :src="user.avatarURL" />
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="font-semibold">{{ user.username }}</h1>
                <h1>Le {{ user.guardDate.toLocaleDateString() }}</h1>
            </div>
        </div>
    </NuxtLink>
</template>
