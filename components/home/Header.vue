<script lang="ts" setup>
import { useUserStore } from '../../store/UserStore';
import { JWT_TYPE } from '../../types/JWT/JWT_TYPE';
const store = useUserStore();
</script>

<template>
    <div class="flex justify-between overflow-x-hidden bg-base-200 min-h-[8%] h-[8%] rounded-xl ">
        <div class="flex items-center px-3">
            <div class="avatar online mr-3">
                <div class="h-auto w-full max-w-[50px] rounded-full">
                    <img src="https://picsum.photos/200" />
                </div>
            </div>
            <div class="flex flex-col">
                <h2 class="text-primary font-bold uppercase">{{ store.JWTPayload.type === JWT_TYPE.USER ?
                    `${store.JWTPayload.firstname} ${store.JWTPayload.lastname}` : 'Comment t\'es arrivé la ??' }}</h2>
                <div class="flex space-x-2">

                    <p class="badge" v-for="role in store.JWTPayload.type === JWT_TYPE.USER ? store.JWTPayload.roles : []">
                        {{ role.name }}</p>
                </div>
            </div>
        </div>

        <div class=" h-full w-1/2 flex items-center justify-end px-4 space-x-2">
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Rechercher..." class="input input-bordered" />
                    <button class="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <NuxtLink to="/home/conversations">

                <button class="btn rounded-full"
                    :disabled="$nuxt._route.fullPath === '/home/conversations'"><font-awesome-icon class=" "
                        :icon="['fas', 'comments']" /></button>
            </NuxtLink>
            <div class="indicator">
                <span class="indicator-item indicator-bottom badge badge-secondary">5</span>
                <button class="btn rounded-full"><font-awesome-icon class=" " :icon="['fas', 'bell']" /></button>
            </div>

        </div>
    </div>
</template>
