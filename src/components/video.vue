<template lang="pug">
div
    div
        img(:src="videoImg")
        div
            span {{ videoTitle }}
            span {{ channelTitle }}
            span(v-if="publishDay > 0") {{ publishDay }}天前
            span(v-if="publisHours > 0") {{ publisHours }}小時前
            span(v-if="publishMinutes > 0") {{ publishMinutes }}分鐘前
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
    videoData: Object,
});
const snippet = props.videoData.snippet
console.log(props.videoData)
const videoImg = ref(snippet.thumbnails.high.url)
const videoTitle = ref(snippet.title)
const channelTitle = ref(snippet.channelTitle)
const publishDay = ref(0)
const publisHours = ref(0)
const publishMinutes = ref(0)

function timeDifference(time) {
    const now = new Date();
    const videoTime = new Date(time)
    const difference = now.getTime()-videoTime.getTime()
    const day = Math.floor(difference/(24*3600*1000))
    const hours = Math.floor(difference/(3600*1000))
    const minutes = Math.floor(difference/(60*1000))
    if(day > 0) return publishDay.value = day
    if(hours > 0) return publisHours.value = hours
    if(minutes > 0) return publishMinutes.value = minutes
}

timeDifference(snippet.publishTime);



</script>

<style lang="scss" scoped>

</style>
