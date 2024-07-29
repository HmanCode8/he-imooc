<script setup>
import {ref} from 'vue';
import _ from "lodash";

const currentBaseMap = ref("vector");
const mapTypeArr = [
  {name: "矢量", type: "vector"},
  {name: "影像", type: "raster"},
  {name: "全景", type: "scene"}];
const emits = defineEmits(['update:baseMap']);
const onUpdateBaseMap = mapType => {
  if (_.some(mapTypeArr, v => mapType === v.type)) {
    if(mapType!==currentBaseMap.value){
      currentBaseMap.value = mapType;
      emits('update:baseMap', mapType);
    }
  }
};
</script>

<template>
  <div class="basemap-block flex flex-row justify-between">
    <div :class="`map-type-wrapper flex justify-end items-end map-type-bg-${item.type} hover:cursor-pointer`"
         :style="`border: 8px solid ${currentBaseMap===item.type?'rgba(41, 236, 241, 1)':'rgba(41, 131, 241, 1)'}`"
         v-for="item in mapTypeArr" @click="onUpdateBaseMap(item.type)">
      <div class="map-type-text">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basemap-block {
  width: 660px;
  height: 135px;

  .map-type-wrapper {
    height: 135px;
    width: 210px;

    .map-type-text {
      overflow-wrap: break-word;
      color: rgba(255, 255, 255, 1);
      font-size: 32px;
      letter-spacing: 2px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      text-align: right;
      white-space: nowrap;
      line-height: 45px;
      margin: 0 10px 7px 0;
    }
  }
}

$layers: vector, raster, scene;
@each $layer in $layers {
  .map-type-bg-#{$layer} {
    // 在这里定义你的 CSS 属性
    background-image: url("@/assets/imgs/main/map-base-#{$layer}.png");
  }
}
</style>