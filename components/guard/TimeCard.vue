<script lang="ts" setup>
defineProps<{
    guard: {
        guardDateStart: Date,
        duration: number,
    },
}>()
</script>

<template>
    <div
        class="flex m-1 p-3 space-x-2 items-center select-none cursor-pointer bg-neutral-focus hover:bg-neutral rounded-2xl">
        <div class="flex flex-col">
            <h1 class="font-semibold">Le {{ guard.guardDateStart.toLocaleDateString() }}
            </h1>
            <h1>Juste pour les aroser</h1>
        </div>
    </div>
</template>
