<script lang="ts" setup>
definePageMeta({
    layout: 'home'
})

const seeConversation = ref(true);
</script>

<template>
    <div class="flex flex-col h-full w-full rounded-xl">
        <div class="flex w-full h-[8%]">
            <div class="bg-neutral-focus w-1/5 flex items-center justify-center">
                <h1 class="text-xl font-bold text-accent">Mes plantes</h1>
            </div>
            <div class="flex-1 bg-neutral flex items-center justify-between">
                <div class="flex px-4 items-center justify-between">
                    <h1 class="font-bold text-accent text-xl mr-5">Mon bangala</h1>
                </div>
                <div class="flex px-5">
                    <div>
                        <font-awesome-icon class="cursor-pointer" size="lg" :icon="['fas', 'comments']"
                            @click="seeConversation = !seeConversation" />

                    </div>
                </div>
            </div>
        </div>

        <div class="flex h-[92%] ">
            <div class=" flex w-1/5 bg-base-content justify-between flex-col h-full">
                <div class="flex flex-col h-full">
                    <div class="flex flex-col">

                        <PlantsCard :plant="{
                                name: 'Mon bangala',
                                lastActivity: new Date(),
                                imageURL: 'https://picsum.photos/200',
                            }" selected />

                    </div>
                </div>
                <div class="flex bg-neutral-focus">

                </div>
            </div>

            <PlantsProfile :see-conversation="seeConversation" />
        </div>
    </div>
</template>
