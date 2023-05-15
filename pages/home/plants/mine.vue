<script lang="ts" setup>
import { usePlantsStore } from '~/store/PlantStore';
import { useUserStore } from '~/store/UserStore';
import { Plant } from '~/types/PLANT';

definePageMeta({
    layout: 'home'
})
const plantsStore = usePlantsStore();
const userStore = useUserStore();

const selectedPlant = ref<Plant | null>(null);

const seeConversation = ref(false);
const isCreatingPlant = ref(false);

(async () => {
    const myPlants = await useFetch("http://localhost:8080/plant/get/all", {
        headers: {
            'x-access-token': userStore.JWT
        }
    })

    const data = myPlants.data.value as Plant[];
    if (!data) return;
    data.forEach(x => plantsStore.add(x));
})();

</script>

<template>
    <div class="flex flex-col h-full w-full rounded-xl">
        <div class="flex w-full h-[8%]">
            <div class="bg-neutral-focus w-1/5 flex items-center justify-center">
                <h1 class="text-xl font-bold text-accent">Mes plantes</h1>
            </div>
            <div class="flex-1 bg-neutral flex items-center justify-between">
                <div class="flex px-4 items-center justify-between" v-if="selectedPlant && !isCreatingPlant">
                    <h1 class="font-bold text-accent text-xl mr-5">{{ selectedPlant?.name }}</h1>
                    <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                </div>
                <div v-else-if="isCreatingPlant" class="flex px-4">
                    <h1 class="font-bold text-accent text-xl mr-5">Nouvelle plante</h1>
                </div>
                <div class="flex px-5">
                    <div>
                        <font-awesome-icon v-if="!isCreatingPlant && selectedPlant" class="cursor-pointer" size="lg"
                            :icon="['fas', 'comments']" @click="seeConversation = !seeConversation" />

                    </div>
                </div>
            </div>
        </div>

        <div class="flex h-[92%] ">
            <div class=" flex w-1/5 bg-base-content justify-between flex-col h-full">
                <div class="flex flex-col h-full" :class="{
                        ' opacity-30 bg-black': isCreatingPlant
                    }">
                    <div class="flex flex-col" v-if="!isCreatingPlant">

                        <PlantsCard v-for="plant in plantsStore.plants" :plant="plant" :selected="selectedPlant === plant"
                            @click="selectedPlant = plant" />

                    </div>
                    <div v-else class="flex h-full text-center justify-center items-center flex-col opacity-100 ">
                        <h3 class="text-accent text-2xl">Impossible d'accèder à vos plantes, vous êtes en train d'en créer
                            une.</h3>
                    </div>
                </div>
                <div class="flex bg-neutral-focus">
                    <button class="w-full h-full btn rounded-none" @click="isCreatingPlant = !isCreatingPlant">{{
                        isCreatingPlant ? "Annuler la création" : "Créer une nouvelle plante" }}
                        <font-awesome-icon v-if="!isCreatingPlant" class="ml-3" :icon="['fas', 'plus']" />
                        <font-awesome-icon v-else class="ml-3" :icon="['fas', 'minus']" />
                    </button>
                </div>
            </div>

            <PlantsProfile v-if="!isCreatingPlant && selectedPlant" :plant="selectedPlant"
                :see-conversation="seeConversation" />
            <PlantCreation v-else-if="isCreatingPlant" @created="isCreatingPlant = false" />
            <div v-else class="bg-base-200 flex flex-1">

            </div>
        </div>
    </div>
</template>
