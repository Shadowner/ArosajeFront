<script lang="ts" setup>
definePageMeta({
    layout: 'home'
})

const isModifyinDescription = ref(false);
const description = ref('J\'ai une superbe description ok ?!');

async function handleDescriptionModification() {
    if (isModifyinDescription.value) {
        isModifyinDescription.value = false;
        return;
    }
    isModifyinDescription.value = true;
}

</script>

<template>
    <div class="flex w-full h-full flex-col p-5 items-center justify-center">
        <div class="flex w-full items-center flex-col">
            <div class="avatar mb-4">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://picsum.photos/200" />
                </div>
            </div>
            <h1 class="text-primary font-bold text-3xl">Lucas Oulieu</h1>
            <div class="flex space-x-2 mt-3">
                <div class="badge badge-secondary">Administrateur</div>
                <div class="badge badge-primary">Botaniste</div>
                <div class="badge badge-accent">Utilisateur</div>

            </div>


        </div>
        <div class="flex w-1/2 items-center">

            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text text-secondary">Ma description</span>
                    <button class="btn btn-xs" @click="handleDescriptionModification">{{ isModifyinDescription ? "Envoyer" :
                        "Modifier" }}</button>

                </label>
                <textarea class="textarea textarea-bordered h-24 " :disabled="!isModifyinDescription" placeholder="Bio"
                    v-model="description"></textarea>
            </div>

        </div>

        <div class="stats stats-vertical lg:stats-horizontal shadow w-1/2 m-3 ">
            <div class="stat">
                <div class="stat-title">Plantes déjà gardées</div>
                <div class="stat-value">3</div>
            </div>

            <div class="stat">
                <div class="stat-title">Plantes enregistrées</div>
                <div class="stat-value">4</div>
            </div>

            <div class="stat">
                <div class="stat-title">Notes</div>
                <div class="rating rating-lg rating-half">
                    <input disabled type="radio" name="rating-10" class="rating-hidden" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" checked />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                    <input disabled type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                </div>
            </div>

        </div>

    </div>
</template>
