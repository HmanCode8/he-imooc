<script setup>
defineProps({
    data: {
        type: Array,
        required: true,
        default: () => [
            { name: '学习', value: 70 },
            { name: '休息', value: 20 },
            { name: '工作', value: 10 },
            { name: '娱乐', value: 10 }
        ]
    }
})
</script>

<template>
    <div class="flex w-full items-center" v-for="item in data" :key="item.name">
        <div class="w-1/4 text-center">{{ item.name }}</div>
        <div class="w-2/4 bg-[#30518d] h-6 rounded-2xl">
            <div :style="{ width: `${item.value}%` }" class="bar h-full bg-gradient rounded-2xl"></div>
        </div>
        <div class="w-1/4 text-center gradient-text font-bold text-xl">{{ item.value }}%</div>
    </div>
</template>

<style scoped lang="scss">
.bg-gradient {
    /* 背景渐变 */
    background: linear-gradient(to right, #6291b2, #6ae3f0);
    transition: all 0.3s ease-in-out;
}

.gradient-text {
    background: linear-gradient(to bottom, #ffffff, #f6c44a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>