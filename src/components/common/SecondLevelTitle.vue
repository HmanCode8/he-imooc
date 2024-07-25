<script setup>

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
    <div class="my-4 bg-[url('assets/imgs/main/title-h-two.png')] h-8 bg-size">
        <div class="flex items-center justify-between">
            <h2 class="title text-white 4k:ml-6 8k:ml-12">{{ title }}</h2>
            <div class="slot-container">
                <slot name="title-slot"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>