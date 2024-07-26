<script setup>
import { ref } from 'vue';
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
    <div class="my-2 px-2 bg-[url('assets/imgs/main//title-h-third.png')] h-6  bg-size">
        <div class="flex items-center justify-between">
            <div class="title flex items-center">
                {{ title }}
            </div>
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