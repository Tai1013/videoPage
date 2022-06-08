<template lang="pug">
div.flex.items-center.border-b(class="last:border-none")
    div.px-3 {{ videoIndex + 1 }}
    div.flex-1.flex.items-start.py-3
        div(class="w-1/5 min-w-[7.5rem]")
            div.relative.overflow-hidden.videoSize
                img.absolute.inset-0.m-auto.brightness-90.w-full(:src="videoImg")
                div.absolute.bottom-0.right-0.m-1.rounded-sm
                    span.py-px.px-1.text-xs.text-white.bg-black.bg-opacity-80 10:00    
        div.ml-3.flex-1
            h3.mb-1.videoTitle {{ videoTitle }}
            p.text-xs.font-medium.text-black.opacity-60 {{ channelTitle }}
    button.mx-3.px-3.bg-red-600.text-white.text-sm.rounded(class="py-1.5" @click="delLoveVideo()") 移除
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useStore } from "vuex";
const store = useStore();

const props = defineProps({
    videoIndex: Number,
    videoData: Object,
});
const snippet = props.videoData
const videoImg = ref(snippet.thumbnails.high.url)
const videoTitle = ref(snippet.title)
const channelTitle = ref(snippet.channelTitle);

const delLoveVideo = () => {
    store.dispatch("DEL_LOVE_VIDEO", snippet);
}

</script>

<style lang="scss" scoped>
.videoSize {
    @apply before:block w-full pt-[56.25%]
}
.videoTitle {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 480px){
        -webkit-line-clamp: 2;
    }
    @apply font-semibold text-sm leading-tight break-all
}
</style>
