<template lang="pug">
header.h-24
    div.fixed.top-0.z-20.w-full.flex.justify-between.items-center.border-b.bg-white.shadow.delay-75(:class="{out:!isHeader}")
        router-link.p-3(to="/")
            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" viewBox="0 0 381 85"><g><path fill="red" d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"/><path fill="#fff" d="M48.6 24.3v36.4l31.6-18.2z"/></g><g><g><path d="M176.3 77.4c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4 2.4 1.6 4.1 4.2 5.2 7.6 1.1 3.4 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.2-.1-7.6-.9-10-2.5zm13.5-8.4c.7-1.7 1-4.6 1-8.5V43.9c0-3.8-.3-6.6-1-8.4-.7-1.8-1.8-2.6-3.5-2.6-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.6 0 2.7-.8 3.4-2.6z"/><path d="M360.9 56.3V59c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11-2.7 2.4-6.5 3.6-11.4 3.6-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5 2.5-3.7 6.7-5.5 12.6-5.5 4.1 0 7.3.8 9.5 2.3 2.2 1.5 3.7 3.9 4.6 7 .9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1zm1.5-22.4c-.6.8-1 2-1.2 3.7-.2 1.7-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.4-.1-2.3.3-2.9 1.1z"/><path d="M147.1 55.3L133.5 6h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.3v23.6h-11.8V55.3z"/><path d="M241.6 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z"/><path d="M303.1 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z"/><path d="M274.2 15.7h-11.9v63.2h-11.7V15.7h-11.9V6h35.5z"/><path d="M342.8 34.2c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.3h-11.6v75.6h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c-.1-6.1-.4-10.8-1.1-14.1zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.1c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6v7z"/></g></g></svg>
        div.flex.items-center
            router-link(to="/love") 我的最愛
            button.p-3(@click="toggleSearch()")
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            button.p-3
                div.w-6.h-6.rounded-full.text-white.bg-green-900
                    p.flex.justify-center.items-center.h-full.text-xs T
    div.fixed.top-12.z-10.w-full.scrollbar-none.whitespace-nowrap.h-12.overflow-x-auto.overflow-y-hidden.border-b.bg-white(:class="{out:!isHeader}")
        button.tab-list(v-for="(item, index) in tablist" :key="index" :class="{active:index == 0}") {{ item.name }}
    div.fixed.inset-0.z-20(v-if="isSearch")
        div.absolute.inset-0.-z-10.bg-black.bg-opacity-80(@click="toggleSearch()")
        div.relative.h-12.bg-white.flex
            button.p-3(@click="toggleSearch()")
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"></path></svg>
            form.flex-1.flex.items-center
                input.flex-1.border-b.border-black.text-sm.h-6(class="focus:border-b-2" name="search" placeholder="搜尋 YouTube" autocomplete="off" autocorrect="off" type="text")
                button.p-3
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></svg>
            button.p-3
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3c-1.66,0-3,1.37-3,3.07v5.86c0,1.7,1.34,3.07,3,3.07s3-1.37,3-3.07V6.07C15,4.37,13.66,3,12,3L12,3z M18.5,12h-1 c0,3.03-2.47,5.5-5.5,5.5S6.5,15.03,6.5,12h-1c0,3.24,2.39,5.93,5.5,6.41V21h2v-2.59C16.11,17.93,18.5,15.24,18.5,12z"></path></svg>   
</template>

<script setup>
    import { ref } from "vue";
    const tablist = [
        {
            name: '全部',
        },
        {
            name: '直播中',
        },
        {
            name: '遊戲',
        },
        {
            name: '音樂',
        },
        {
            name: '動畫',
        },
        {
            name: '烹飪',
        },
        {
            name: '寵物',
        },
        {
            name: '動作冒險遊戲',
        },
        {
            name: '最新上傳',
        },
        {
            name: '已觀看',
        },
        {
            name: '讓你耳目一新的影片',
        },
    ]
    const isHeader = ref(true)
    const isSearch = ref(false)
    const toggleSearch = () => {
        isSearch.value = !isSearch.value
    };

    window.onscroll = () => {
        let windowScrollTop = document.documentElement.scrollTop
        if (windowScrollTop <= 48) isHeader.value = true
        else isHeader.value = false
    }

    
</script>

<style lang="scss" scoped>
.scrollbar-none {
    -ms-overflow-style: none;
    overflow: -moz-hidden-unscrollable;
    &::-webkit-scrollbar {
        display: none;
    }
}
.tab-list {
    @apply mr-3 first:ml-3 my-2 px-3 h-8 border rounded-full bg-gray-100 text-xs;
    &.active {
        @apply text-white bg-gray-600
    }
}
header {
    .out {
        @apply -top-24 duration-500
    }
}

</style>
