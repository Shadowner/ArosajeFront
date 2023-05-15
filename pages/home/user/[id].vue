<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;

definePageMeta({
    layout: 'home'
})
//TODO: faire en sorte que les roles soient dynamiques
</script>

<template>
    <div class="flex w-full h-full flex-col p-5 items-center justify-center">
        <div class="flex w-full items-center flex-col">
            <div class="avatar mb-4">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://picsum.photos/203" />
                </div>
            </div>
            <h1 class="text-primary font-bold text-3xl">{{ id }}</h1>
            <div class="flex space-x-2 mt-3">
                <div class="badge badge-secondary">Administrateur</div>
                <div class="badge badge-primary">Botaniste</div>
                <div class="badge badge-accent">Utilisateur</div>

            </div>


        </div>
        <div class="flex w-full items-center justify-around">

            <div class="form-control w-1/2">
                <label class="label">
                    <span class="label-text text-secondary">Description</span>
                </label>
                <textarea class="textarea textarea-bordered h-24 disabled:text-accent bg-base-100 disabled:bg-base-300 "
                    disabled placeholder="Bio">Salut moi c'est la description de {{ id }} !</textarea>
            </div>

            <div class="form-control ">
                <label class="label">
                    <span class="label-text ">.</span>
                </label>
                <div class="stats stats-vertical lg:stats-horizontal shadow">
                    <div class="stat">
                        <div class="stat-title">Plantes déjà gardées</div>
                        <div class="stat-value">3</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Plantes enregistrées</div>
                        <div class="stat-value">4</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">Scores</div>
                        <div class="rating rating-lg rating-half">
                            <input disabled type="radio" name="rating-10" class="rating-hidden" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2"
                                checked />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                            <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                        </div>

                    </div>
                </div>
            </div>


        </div>



        <div class="flex space-x-4 flex-wrap">
            <div class="flex flex-col w-1/2 h-full">
                <h1 class="text-secondary text-3xl font-bold mt-4 underline">Les plantes a garder de {{ id }}</h1>
                <div class="carousel carousel-center max-w-full p-4 bg-neutral rounded-box w-full mt-4 h-full flex-wrap">
                    <div class="carousel-item" v-for="i in 8">
                        <NuxtLink :to="`/home/plant/${i}`">
                            <PlantCard :plant="{
                                    name: 'Plante ' + i,
                                    description: 'Description de la plante 1',
                                    imageURL: 'https://picsum.photos/500/300'
                                }" />
                        </NuxtLink>
                    </div>


                </div>
            </div>
            <div class="flex flex-col flex-1 h-full">
                <h1 class="text-secondary text-3xl font-bold mt-4 underline">Les plantes gardé par {{ id }}</h1>
                <div class="carousel carousel-center max-w-full p-4 bg-neutral rounded-box w-full mt-4 h-full flex-wrap">

                    <div class="carousel-item" v-for="i in 8">
                        <PlantCard :plant="{
                                name: 'Plante ' + i,
                                description: 'Description de la plante 1',
                                imageURL: 'https://picsum.photos/500/300'
                            }" />
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
