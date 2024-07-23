<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const active = ref('week')
const emits = defineEmits(['onTabOnchage'])
defineProps({
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
const onChage = (value) => {
    emits('onTabOnchage', value)
    active.value = value
}
</script>

<template>
    <div class="tabs text-[#A9D4E6] flex">
        <div :class="`px-4 hover:cursor-pointer bg-[#20376c] mx-1 border-[#0d2853] ${active === t.value ? 'text-white' : ''}`"
            @click="() => onChage(t.value)" v-for="t in data" :key="t.value">{{
                t.name }}</div>
    </div>
</template>

<style scoped lang="scss"></style>