<script lang="ts" setup>
defineProps<{
    user: {
        username: string,
        online: boolean,
        avatarURL: string,
    },
}>()
</script>

<template>
    <NuxtLink :to="`/home/user/${user.username}`">
        <div class="flex p-3 space-x-2 items-center select-none cursor-pointer hover:bg-neutral-focus">
            <div class="avatar" :class="{
                    'online': user.online,
                    'offline': !user.online
                }">
                <div class="w-10 rounded-full">
                    <img :src="user.avatarURL" />
                </div>
            </div>
            <h1 class="font-semibold">{{ user.username }}</h1>
        </div>
    </NuxtLink>
</template>
