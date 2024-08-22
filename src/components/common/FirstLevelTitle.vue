<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '一级标题'
    },
    description: {
        type: String,
        default: '是的'
    }
});
</script>

<template>
    <div class="first-level-title  bg-[url('assets/imgs/main/title-h.png')] h-10 bg-size">
        <div class="flex items-center justify-between">
            <h2 class="title text-white 4k:ml-8 8k:ml-12 font-bold text-2xl font-[pengmenzhengdao]">{{ title }}</h2>
            <div class="slot-container">
                <slot name="title-slot"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>