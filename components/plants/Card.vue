<script lang="ts" setup>
defineProps<{
    plant: {
        name: string,
    },
    selected?: boolean,
}>()
</script>

<template>
    <div class="flex items-center select-none cursor-pointer transition-colors hover:bg-accent p-2" :class="{
        'bg-accent': selected,
        'bg-base-content': !selected
    }">

        <div class="avatar pr-3">
            <div class="w-10 h-10 rounded ">
                <img src='https://picsum.photos/200' />
            </div>
        </div>
        <div class="flex flex-col w-full items-start justify-center  ">
            <h1 class="text-primary font-semibold text-2xl">{{ plant.name }}</h1>
            <div class="flex flex-col w-[90%]">
                <p class="text-secondary whitespace-nowrap overflow-hidden text-ellipsis w-[90%]">Dernière activité </p>
                <p class="text-secondary">Aucune</p>
            </div>
        </div>
    </div>
</template>
