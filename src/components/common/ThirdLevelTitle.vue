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
    <!-- 有插槽传tabs -->
    <div class="third-level-title flex items-center">
        <div class="icon w-4 h-4 mr-2 bg-[#76c8fa]"></div>
        <div class="title text-sm">{{ title }}</div>
        <slot name="tabs"></slot>
    </div>
</template>

<style scoped lang="scss"></style>