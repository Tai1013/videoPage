<template lang="pug">
TheHeader
PugPage 
VideoBox(v-for="(video, index) in toRaw(videoList)" :key="index" :videoData="video")
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import PugPage from "./components/pug.vue";
import VideoBox from "./components/video.vue"
import { ref, computed, toRaw } from "vue";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("GET_VIDEO");

let videoList = ref([]);
videoList = computed(() => store.getters.videoList);
</script>

<style>
</style>
