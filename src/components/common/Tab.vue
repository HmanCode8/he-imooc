<script setup>
import { ref, toRef } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    data: {
        type: Array,
        default: () => [
            {
                name: '近一周',
                value: 'week'
            },
            {
                name: '近一月',
                value: 'month'
            },
        ]
    }
})
const active = ref(props.data[0].value)
const emits = defineEmits(['onTabOnchage'])

const onChage = (value) => {
    // emits('onTabOnchage', value)
    emits('update:modelValue', value)
    active.value = value
}
</script>
<!-- <Tab v-model="active" :data="titletab1" @onTabOnchage="onTabChange" /> -->
<template>
    <div class="tabs text-[#A9D4E6] flex">
        <div :class="`px-4 ${active === t.value ? 'tab-item-active' : 'tab-item'} hover:cursor-pointer  bg-size h-6 w-32 mx-1 ${active === t.value ? 'text-white' : ''}`"
            @click="() => onChage(t.value)" v-for="t in data" :key="t.value">{{
                t.name }}</div>
    </div>
</template>

<style scoped lang="scss">
.tab-item {
    background-image: url('@/assets/imgs/infrastructure/title-tab.png');
}

.tab-item-active {
    background-image: url('@/assets/imgs/infrastructure/title-tab-active.png');
}
</style>