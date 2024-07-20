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
    <div class="third-level-title flex justify-between border-b bg-gray-500 items-center">
        <div class="flex items-center w-1/3">
            <div class="icon w-2 h-2 mr-2 bg-[#76c8fa]"></div>
            <div class="title text-sm">{{ title }}</div>
        </div>
        <div>
            <slot name="tabs"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>