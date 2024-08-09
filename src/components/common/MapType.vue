<script setup>
import { ref, onMounted } from 'vue';
// import mapDefault from '@/assets/imgs/main/map-default.png';
// import mapImage from '@/assets/imgs/main/map-image.png';
// import mapPanorama from '@/assets/imgs/main/map-panorama.png';

const mapList = [
    {
        name: '地图',
        key: 'map-default',
    },
    {
        name: '地球',
        key: 'map-image',
    },
    {
        name: '全景',
        key: 'map-panorama',
    },
];

const expandMapType = () => {
    document.querySelector('.map-type').classList.add('expand');
}

const collapseMapType = () => {
    document.querySelector('.map-type').classList.remove('expand');
}



onMounted(() => {
});
</script>

<template>
    <div class="map-container w-full h-full">
        <div class="map-type w-full h-full bg-white p-2 rounded-md relative">
            <div v-for="item in mapList" :key="item.key"
                class=" rounded-md absolute w-40 h-40 bg-[url('assets/imgs/main/map-default.png')] bg-size"></div>
            <!-- <div class="map-type-item absolute w-40 h-40 border-r-4" v-for="item in mapList" :key="item.key"
                @mouseover="expandMapType" @mouseleave="collapseMapType" @click="switchMapType(item.key)">
                <img class="w-full h-full object-cover border-r-4" :src="item.src" alt="">
                <div class="map-type-name">{{ item.name }}</div>
            </div> -->
        </div>
    </div>
</template>


<style scoped lang="scss"></style>