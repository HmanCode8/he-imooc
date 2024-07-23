<script setup lang="ts">
import { ref, defineProps } from 'vue';

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
    <div class="first-level-title my-2 bg-[url('assets/imgs/main/title-h.png')] h-8 bg-cover flex items-center ">
        <!-- <div class="icon w-4 h-4 mr-2 bg-[#76c8fa]"></div> -->
        <h2 class="title text-white 4k:ml-12 8k:ml-20 font-bold text-md font-[PangMenZhengDao]">{{ title }}</h2>
    </div>
</template>

<style scoped lang="scss"></style>