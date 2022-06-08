<template lang="pug">
div
    div
        div.relative.overflow-hidden.videoSize
            img.absolute.inset-0.m-auto.brightness-90.w-full(:src="videoImg")
            div.absolute.bottom-0.right-0.m-1.rounded-sm
                span.py-px.px-1.text-xs.text-white.bg-black.bg-opacity-80 10:00
        div.p-3.flex.items-start
            div.w-10.h-10.rounded-full.overflow-hidden
                img.w-full(src="https://picsum.photos/80")
            div.flex-1.mx-3
                h3.mb-1.videoTitle {{ videoTitle }}
                div.text-xs.font-medium.text-black.opacity-60
                    span {{ channelTitle }}
                    span.mx-1 •
                    span 觀看次數：12萬次
                    span.mx-1 •
                    span(v-if="publishDay > 0") {{ publishDay }}天前
                    span(v-if="publisHours > 0") {{ publisHours }}小時前
                    span(v-if="publishMinutes > 0") {{ publishMinutes }}分鐘前
            button.-mt-3.-mr-3.p-3
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
    videoData: Object,
});
const snippet = props.videoData.snippet
const videoImg = ref(snippet.thumbnails.high.url)
const videoTitle = ref(snippet.title)
const channelTitle = ref(snippet.channelTitle)
const publishDay = ref(0)
const publisHours = ref(0)
const publishMinutes = ref(0)

const timeDifference = (time) => {
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
.videoSize {
    @apply before:block w-full pt-[56.25%]
}
.videoTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    @apply font-semibold text-sm leading-tight break-all
}
</style>
