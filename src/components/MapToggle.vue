<script setup>
import { ref } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: 'img'
    }
})
const emits = defineEmits(['update:modelValue'])

const types = [
    { name: "矢量", value: "vector" },
    { name: "影像", value: "raster" },
    { name: "全景", value: "scene" }
]
const mapTypes = ref(types)
</script>

<template>
    <div class="">
        <div class="map-type relative flex">
            <div :class="`wrap-item rounded-sm 4k:w-20 4k:h-16 8k:w-32 8k:h-20 ${modelValue === type.value ? 'active' : ''}`"
                @click="emits('update:modelValue', type.value)" v-for="(type, index) in mapTypes" :key="type.value">
                <div :class="`map-type-item-${index} rounded-sm w-full h-full bg-size relative hover:cursor-pointer`">
                    <div class="absolute bottom-0 right-1">{{ type.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrap-item {
    border: 2px solid #124842;

    &:hover {
        border-color: #3d89c9;
    }
}

.active {
    border-color: #3d89c9;
}

.map-type {
    // width: 0;

    .map-type-item-0 {
        background-image: url('@/assets/imgs/main/map-default.png');
    }

    .map-type-item-1 {
        background-image: url('@/assets/imgs/main/map-image.png');

    }

    .map-type-item-2 {
        background-image: url('@/assets/imgs/main/map-panorama.png');

    }
}
</style>