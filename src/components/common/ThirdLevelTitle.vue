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
    <div class="third-level-title flex justify-between border-b  items-center">
        <div class="title bg-sky-400 flex items-center">
            {{ title }}
        </div>
    </div>
</template>

<style scoped lang="scss"></style>