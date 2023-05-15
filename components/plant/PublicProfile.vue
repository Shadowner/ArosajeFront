<script lang="ts" setup>

const isModifyinDescription = ref(false);
const description = ref('J\'ai une superbe plante ok ?!');
const seeConversation = ref(false);
const test = {
    center: { lat: 48.8773406, lng: 2.327774 },
    markers: [
        {
            description: "Google France",
            id: "1",
            position: {
                lat: 48.8773406,
                lng: 2.327774,
            },
        },]
}

async function handleDescriptionModification() {
    if (isModifyinDescription.value) {
        isModifyinDescription.value = false;
        return;
    }
    isModifyinDescription.value = true;
}
</script>

<template>
    <div class="flex flex-col justify-between bg-base-200 flex-1 ">
        <div class="flex overflow-auto flex-1">
            <div class="flex flex-1 flex-col p-3 overflow-auto">
                <div class="flex w-full items-center flex-col ">
                    <div class="avatar mb-4">
                        <div class="w-24 rounded ring ring-warning ring-offset-base-100 ring-offset-2">
                            <img src="https://picsum.photos/200" />
                        </div>
                    </div>
                    <h1 class="text-accent font-bold text-3xl">Mon bangala</h1>

                    <div class="flex flex-wrap space-x-5 mt-5 select-none items-center justify-center">
                        <p class="m-1">Taille : <span class="badge badge-lg">80cm</span></p>
                        <p class="m-1">Date d'acquisition : <span class="badge badge-lg">10/03/2022</span></p>
                        <p class="m-1">Dernier utilisateur en charge : <NuxtLink to="/home/user/Lucas%20Oulieu">
                                <span class="badge badge-lg text-accent">Lucas Oulieu</span>
                            </NuxtLink>
                        </p>
                    </div>
                </div>

                <div class="flex w-full justify-around items-center flex-wrap space-x-3 mt-10">
                    <div class="form-control flex-1 max-h-full min-w-[500px]">
                        <label class="label">
                            <span class="label-text text-accent font-bold text-xl">Description de la
                                plante</span>

                        </label>
                        <textarea class="textarea textarea-bordered h-full disabled:bg-base-300"
                            :disabled="!isModifyinDescription" placeholder="Bio" v-model="description"></textarea>
                    </div>

                    <div class="form-control flex-1 min-w-[500px]">
                        <label class=" label">
                            <span class="label-text text-accent font-bold text-xl">Position de la plante</span>
                        </label>
                        <div class="flex rounded-2xl bg-base-100 p-1 h-full  ">
                            <iframe class="rounded-2xl h-full w-full" style="border:0" loading="lazy" allowfullscreen
                                referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAuof10-mL5jUykxOjEFMqe7Lg5RG0h6L8&q=Space+Needle,Seattle+WA">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="flex  flex-wrap space-x-2">
                    <div class="form-control flex-1 ">
                        <label class=" label">
                            <span class="label-text text-accent font-bold text-xl">Historique de guardiennage</span>
                        </label>
                        <div class="flex rounded-2xl bg-base-100 p-1 h-full  ">
                            <GuardUserCard :user="{
                                    username: 'Lucas Oulieu',
                                    avatarURL: 'https://picsum.photos/200',
                                    guardDate: new Date(),
                                    online: true,
                                }" />
                        </div>
                    </div>
                    <div class="form-control flex-1 ">
                        <label class=" label">
                            <span class="label-text text-accent font-bold text-xl">Créneaux disponible pour garder la
                                plante</span>
                        </label>
                        <div class="flex rounded-2xl bg-base-100 p-1 h-full  ">
                            <GuardTimeCard :guard="{
                                    guardDateStart: new Date(),
                                    duration: 20,
                                }" />
                        </div>
                    </div>
                </div>
            </div>



            <div class="flex flex-col transition-all justify-between h-full w-0 overflow-hidden bg-base-content shadow-2xl"
                :class="{
                        'min-w-[50%]': seeConversation,
                        'min-w-0': !seeConversation,
                    }">
                <div>

                </div>
                <div class="flex sticky bottom-0 w-full p-2 space-x-4 bg-base-300">
                    <input type="text" class="flex-1 border-none rounded-xl p-3 text-black"
                        placeholder="Votre message..." />
                    <button class="btn">Envoyer</button>
                </div>
            </div>
        </div>


    </div>
</template>
