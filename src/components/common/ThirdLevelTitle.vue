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
    <div
        class="first-level-title my-2 px-2 bg-[url('assets/imgs/main//title-h-third.png')] h-4 bg-cover flex items-center ">
        <div class="title mt-[-14px] flex items-center">
            {{ title }}
        </div>
    </div>
</template>

<style scoped lang="scss"></style>