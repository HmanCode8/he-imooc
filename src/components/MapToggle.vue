<script setup>
import { onMounted, ref } from 'vue'
import useRootFontSize from '@/hooks/useRootFontSize';

const props = defineProps({
    modelValue: {
        type: String,
        default: 'img'
    }
})
const emits = defineEmits(['update:modelValue'])

const types = [
    { name: "全景", value: "scene" },
    { name: "影像", value: "raster" },
    { name: "矢量", value: "vector" },

]
const mapTypes = ref(types)
const typeTo = ref('leave')

const onMouse = (type) => {
    typeTo.value = type === 'enter' ? 'leave' : 'enter'
    const item1 = document.querySelector('.wrap-item-0')
    const item2 = document.querySelector('.wrap-item-1')
    const width1 = item1.offsetWidth
    const width2 = item2.offsetWidth
    item1.style.right = `${type === 'enter' ? width1 * 2 : 30}px`
    item2.style.right = `${type === 'enter' ? width2 : 15}px`
}

/**
 * 为了适配浏览器的仿真模式的hover事件效果，生产需要去掉
 */
const onMapTypeClick = () => {
    onMouse(typeTo.value)
}

onMounted(() => {
    onMouse('leave')
})
</script>

<template>
    <div class="">
        <div class="map-type relative bg-1 4k:w-24 4k:h-16  8k:w-36 8k:h-20 flex" @mouseenter="onMouse('enter')"
            @mouseleave="onMouse('leave')" @click="onMapTypeClick">
            <div :class="`wrap-item-${index} group absolute duration-300 ease-in-out px-1 rounded-sm 4k:w-24 4k:h-16 8k:w-36 8k:h-20 ${modelValue === type.value ? 'active' : ''}`"
                @click="emits('update:modelValue', type.value)" v-for="(type, index) in mapTypes" :key="type.value">
                <div
                    :class="`map-type-item-${index} rounded-sm w-full h-full px-1 bg-size relative hover:cursor-pointer`">
                    <div
                        :class="`absolute ${modelValue === type.value ? 'bg-[#0089fa]' : ''} group-hover:bg-[#0089fa] text-sm p-1 text-center text-white bottom-0 right-0`">
                        {{ type.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrap-item-0,
.wrap-item-1,
.wrap-item-2 {
    // border: 1px solid #0799d5;

    &:hover {
        // border-color: #5ae758;
    }
}

.active {
    // border: 3px solid #0799d5;
}

.map-type {

    .map-type-item-0 {
        background-image: url('@/assets/imgs/main/map-panorama.png');

    }

    .map-type-item-2 {
        background-image: url('@/assets/imgs/main/map-default.png');
    }

    .map-type-item-1 {
        background-image: url('@/assets/imgs/main/map-image.png');

    }

}
</style>