<template lang="pug">
div
  div(v-if="videoLoveList.length > 0")
    LoveList(v-for="(video, index) in videoLoveList" :key="video.title" :videoIndex="index" :videoData="video")
  div.fixed.inset-0.flex.justify-center.items-center(v-else)
    p.text-white.bg-gray-600.px-4.py-1.rounded-full 查無資料，請先新增我的最愛
</template>

<script setup>
import LoveList from "@/components/LoveList.vue"
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
store.dispatch("GET_LOVE_VIDEO");

let videoLoveList = ref([]);
videoLoveList = computed(() => store.getters.videoLoveList)

</script>

<style>
</style>
