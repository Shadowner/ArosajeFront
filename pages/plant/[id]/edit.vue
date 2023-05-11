<script lang="ts" setup>
const route = useRoute();

const id = route.params.id;

</script>

<template>
    <div>
        <p>{{ id }}</p>
    </div>
</template>
