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
    <div class="">
        <div class="w-full flex items-center">
            <div class="my-4 w-2/3 px-2 bg-[url('assets/imgs/main//title-h-third.png')] h-4  bg-size">
                <div class="flex items-center justify-between">
                    <div class="mt-[-4%] flex items-center">
                        {{ title }}
                    </div>
                </div>
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