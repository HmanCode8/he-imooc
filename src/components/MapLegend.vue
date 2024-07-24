<script setup>
import { ref } from 'vue';
import _ from 'lodash'

const emits = defineEmits(['update:checked'])
const checked = ref([])
const legendData = ref([
    {
        name: '管线',
        color: '#4fabf5'
    },
    {
        name: '设施',
        color: '#4aa32e'
    },
    {
        name: '设备',
        color: '#b9a13e'
    },
    {
        name: '物流',
        color: '#b06924'
    },
    {
        name: '物流1',
        color: '#c52927'
    }
])
const onChange = (k) => {
    _.includes(checked.value, k) ? checked.value = _.without(checked.value, k) : checked.value.push(k)
    emits('update:checked', _.cloneDeep(checked.value));
}
</script>

<template>
    <div class="legend-content">
        <div class="legend-title px-2 ">图例</div>
        <div class="px-1">
            <div v-for="item in legendData" :key="item.name" class="flex items-center p-2">
                <div @click="onChange(item.name)"
                    class="legend-item-color w-4 h-4 border border-[#6189ca] hover:cursor-pointer flex justify-center items-center">
                    <div v-show="checked.includes(item.name)" class="h-1/2 w-1/2 bg-[#6eedfc]"></div>
                </div>
                <div :style="{ backgroundColor: item.color }" class="legend-item-name mx-4 w-16 h-1"></div>
                <div class="legend-item-desc">80~83%</div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.legend-content {
    background: linear-gradient(to bottom, #0a234a, #305fad);
}
</style>