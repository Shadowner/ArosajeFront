<script lang="ts" setup>
import { useUserStore } from '~/store/UserStore';
import { usePlantsStore } from '~/store/PlantStore';
import { Plant } from '~/types/PLANT';

const emit = defineEmits(['created']);

const userStore = useUserStore();
const plantStore = usePlantsStore();
const date = ref();
const name = ref("");
const type = ref("");
const size = ref("");
const description = ref("");

const isLoading = ref(false);

async function createPlant() {
    console.log(name.value, type.value, size.value, description.value)
    if (!name.value || !type.value || !size.value || !description.value) {
        return alert('Veuillez remplir tous les champs')
    }
    isLoading.value = true;

    const request = await useFetch("http://localhost:8080/plant/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': userStore.JWT
        },
        body: JSON.stringify({
            name: name.value,
            type: type.value,
            size: size.value,
            date: date.value,
            description: description.value
        })
    });

    const data = request.data.value as Plant;
    isLoading.value = false;
    if (!data) return alert('Une erreur est survenue lors de la création de la plante');
    plantStore.add(data);
    emit('created');
}
</script>

<template>
    <div class="flex flex-col justify-center items-center bg-base-200 flex-1">
        <h1 class="text-2xl font-bold text-accent">Création d'une nouvelle plantes</h1>
        <div class="flex w-1/2 flex-col">
            <p>Nom de la plante</p>
            <input :disabled="isLoading" v-model="name" type="text" placeholder="Nom de la plante"
                class="input input-bordered rounded-md w-full" />
        </div>
        <div class="flex w-1/2">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Espèce de la plante</span>
                </label>
                <input :disabled="isLoading" v-model="type" type="text" class="input input-bordered" placeholder='Espèce' />
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">Taille</span>
                </label>
                <label class="input-group">
                    <input :disabled="isLoading" v-model="size" type="number" placeholder="0.01"
                        class="input input-bordered" />
                    <span>cm</span>
                </label>
            </div>

        </div>

        <div class="form-control w-1/2">
            <label class="label">
                <span class="label-text">Description</span>
            </label>
            <textarea class="textarea textarea-bordered h-24" v-model="description"
                placeholder="Ma plante......"></textarea>
        </div>
        <div class="flex w-1/2  justify-between mt-2">
            <div class="flex flex-col">
                <p>Image de la plante</p>
                <input :disabled="isLoading" type="file" class="file-input w-full max-w-xs" />
            </div>
            <div class="flex flex-col flex-1 items-center">
                <p>Preview</p>
                <img class="w-16 avatar rounded" src="https://picsum.photos/200" alt="">
            </div>
        </div>

        <div class="form-control flex w-1/2 mt-3 rounded-2xl bg-base-300">
            <label class="label cursor-pointer">
                <span class="label-text">Souhaitez-vous faire garder cette plante ?</span>
                <input :disabled="isLoading" type="checkbox" class="toggle" checked />
            </label>
        </div>

        <button @click="createPlant" class="btn mt-5" :class="{
                'loading': isLoading
            }" :disabled="isLoading"> {{ isLoading ? 'Création en cours' : "Valider" }} </button>
    </div>
</template>
