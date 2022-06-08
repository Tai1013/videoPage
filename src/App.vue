<template lang="pug">
TheHeader
div.flex.flex-wrap(class="sm:py-3 sm:px-1.5")
    VideoBox(class="w-full sm:w-1/2 sm:px-1.5 md:w-1/3 lg:w-1/4" v-for="(video, index) in toRaw(videoList)" :key="index" :videoData="video")
TheFooter
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import VideoBox from "./components/video.vue"
import TheFooter from "./components/TheFooter.vue"
import { ref, computed, toRaw } from "vue";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("GET_VIDEO");

let videoList = ref([]);
videoList = computed(() => store.getters.videoList);
</script>

<style>
</style>
