<script lang="ts" setup>
import { useUserStore } from '~/store/UserStore';

const userStore = useUserStore();
</script>

<template>
    <div class="flex flex-col justify-between bg-base-200 w-1/6 rounded-xl m-3 shadow-md">
        <div class="flex items-center m-5 mt-8 space-x-4">
            <img src="https://picsum.photos/50" alt="">
            <h1 class="font-bold text-2xl">Arosaje</h1>
        </div>
        <div class="flex-1 mt-24">

            <ul v-if="$nuxt._route.fullPath.startsWith('/home')" class="menu p-4 text-base-content space-y-1 self-start">
                <!-- Sidebar content here -->
                <li>
                    <NuxtLink to="/home" :class="{ 'active': $nuxt._route.fullPath === '/home' }" class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'home']" />
                        <p>Accueil</p>
                    </NuxtLink>
                </li>


                <li tabindex="0">
                    <span :class="{ 'active': $nuxt._route.fullPath?.startsWith('/home/plants/') }"
                        class="flex justify-between">
                        <div clqss="flex">
                            <font-awesome-icon class=" mr-2" :icon="['fas', 'leaf']" />
                            Plantes
                        </div>
                        <font-awesome-icon class=" " :icon="['fas', 'angles-right']" />
                    </span>
                    <ul class="rounded-box p-2 bg-base-100">
                        <li>
                            <NuxtLink to="/home/plants/mine"
                                :class="{ 'active': $nuxt._route.fullPath === '/home/plants/mine' }">Mes plantes
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/home/plants/incharge"
                                :class="{ 'active': $nuxt._route.fullPath === '/home/plants/incharge' }">Plantes dont j'ai
                                la
                                responsabilité</NuxtLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NuxtLink to="/home/conversations"
                        :class="{ 'active': $nuxt._route.fullPath === '/home/conversations' }" class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'comments']" />
                        <p>Mes conversations</p>
                    </NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/home/me" :class="{ 'active': $nuxt._route.fullPath === '/home/me' }"
                        class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'user']" />
                        <p>Mon profil</p>
                    </NuxtLink>
                </li>
                <li v-if="userStore.isBotanist">
                    <NuxtLink to="/home/botaniste" :class="{ 'active': $nuxt._route.fullPath === '/home/botaniste' }"
                        class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'plant-wilt']" />
                        <p>Botaniste</p>
                    </NuxtLink>
                </li>
            </ul>
            <ul v-else class="menu p-4 text-base-content space-y-1 self-start">

                <li>
                    <NuxtLink to="/admin/roles" :class="{ 'active': $nuxt._route.fullPath === '/admin/roles' }"
                        class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'hat-wizard']" />
                        <p>Rôles existants</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/admin/users" :class="{ 'active': $nuxt._route.fullPath === '/admin/users' }"
                        class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'users']" />
                        <p>Les utilisateurs</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/admin/plantes" :class="{ 'active': $nuxt._route.fullPath === '/admin/plantes' }"
                        class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'leaf']" />
                        <p>Les plantes</p>
                    </NuxtLink>
                </li>

            </ul>
        </div>


        <div>
            <ul class="menu p-4  text-base-content space-y-1 self-start">
                <!-- Sidebar content here -->
                <li v-if="userStore.isAdmin">
                    <NuxtLink :to="$nuxt._route.fullPath?.includes('admin') ? '/home' : '/admin'"
                        :class="{ 'active': $nuxt._route.fullPath?.includes('admin') }" class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'toolbox']" />
                        <p>{{ $nuxt._route.fullPath?.includes('admin') ? "Quitter le mode admin" : "Administration" }}</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/home/settings" :class="{ 'active': $nuxt._route.fullPath === '/home/settings' }"
                        class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'gear']" />
                        <p>Configuration</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/logout" class="flex items-center">
                        <font-awesome-icon class=" " :icon="['fas', 'right-from-bracket']" />
                        <p>Se déconnecter</p>
                    </NuxtLink>
                </li>
            </ul>
        </div>

    </div>
</template>
