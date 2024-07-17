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
    <div class="first-level-title flex items-center bg-[#3f63a2]">
        <div class="icon w-4 h-4 mr-2 bg-[#76c8fa]"></div>
        <div class="title text-sm">{{ title }}</div>
    </div>
</template>

<style scoped lang="scss"></style>