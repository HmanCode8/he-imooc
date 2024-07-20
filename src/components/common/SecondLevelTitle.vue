<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '二级标题'
    },
    description: {
        type: String,
        default: '是的'
    }
});
</script>

<template>
    <div class="first-level-title ml-2 flex items-center border-b border-gray-300 pb-1 mb-4">
        <div class="icon w-2 h-2 mr-2 bg-[#76c8fa]"></div>
        <div class="title text-sm">{{ title }}</div>
    </div>
</template>

<style scoped lang="scss"></style>