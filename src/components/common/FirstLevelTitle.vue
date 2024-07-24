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
    <div class="first-level-title my-2 bg-[url('assets/imgs/main/title-h.png')] h-8 bg-container">

        <div class="flex items-center justify-between">
            <h2 class="title text-white 4k:ml-8 8k:ml-14 font-bold text-xl font-[PangMenZhengDao]">{{ title }}</h2>
            <div class="slot-container">
                <slot name="title-slot"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.bg-container {
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>