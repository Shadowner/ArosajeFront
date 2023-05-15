<script lang="ts" setup>
definePageMeta({
    layout: 'home'
});

const route = useRoute();
const id = route.params.id;

</script>

<template>
    <div class="flex h-full w-full">
        <PlantPublicProfile see-conversation></PlantPublicProfile>
    </div>
</template>
