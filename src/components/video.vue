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
                    span {{ publishTime }}
            div
                button.block.-mt-3.-mr-3.p-3
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                button.block.-mt-3.-mr-3.p-3(@click="updateLoveVideo()")
                    <svg v-if="isLove" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-red-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>
                    <svg v-if="!isLove" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    videoData: Object,
});
const snippet = props.videoData.snippet
const videoImg = ref(snippet.thumbnails.high.url)
const videoTitle = ref(snippet.title)
const channelTitle = ref(snippet.channelTitle)
const publishTime = ref(0)
const isLove = ref(false)

const timeDifference = (time) => {
    const now = new Date();
    const videoTime = new Date(time)
    const difference = now.getTime()-videoTime.getTime()
    
    const month = Math.floor(difference/(30*24*3600*1000))
    if(month > 0) return publishTime.value = month + '個月前'

    const day = Math.floor(difference/(24*3600*1000))
    if(day > 0) return publishTime.value = day + '天前'

    const hours = Math.floor(difference/(3600*1000))
    if(hours > 0) return publishTime.value = hours + '小時前'

    const minutes = Math.floor(difference/(60*1000))
    if(minutes > 0) return publishTime.value = minutes + '分鐘前'

    const second = Math.floor(difference/(1000))
    if(second > 0) return publishTime.value = minutes + '秒前'
}

const updateLoveVideo = () => {
    isLove.value = !isLove.value
    if (isLove.value) store.dispatch("ADD_LOVE_VIDEO", snippet);
    else store.dispatch("DEL_LOVE_VIDEO", snippet);
}

const loveLocal = JSON.parse(localStorage.getItem("loveList"));
if (loveLocal) {
    for (let i = 0; i < loveLocal.length; i++) {
        if (snippet.channelTitle == loveLocal[i].channelTitle) isLove.value = true
    }
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
