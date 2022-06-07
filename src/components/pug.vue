<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});

const count = ref(0);
</script>

<template lang="pug">
div Hello World
</template>

<style scoped>
</style>
