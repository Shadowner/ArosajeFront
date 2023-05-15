<script lang="ts" setup>
import { useUserStore } from '../store/UserStore';
const router = useRouter();

useFetch("http://localhost:8080/user/logout", {
    method: 'POST',
    headers: {
        'x-access-token': useUserStore().JWT
    }
}).catch((err) => {
    console.error(err);
}).then((res) => {
    useUserStore().remove();
    router.push('/');
});

definePageMeta({
    layout: 'content-centered'
})

</script>

<template>
    <div>
        <h1 class="text-3xl font-semibold">Déconnexion en cours...</h1>
    </div>
</template>
