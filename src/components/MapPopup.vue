<script setup>
const props = defineProps({
  popupObject: {
    type: Object,
    default: { layerName: "", properties: [] }
  }
});
const emit = defineEmits(["update:closePop"]);
const closePop = () => {
  emit('update:closePop');
}
</script>

<template>
  <div class="popup w-96 h-64 bg-size">
    <div class="h-16 pt-6 ml-9 flex flex-row justify-between text-2xl text-left font-[YouSheBiaoTiHei]">
      <div class="text-white ">{{ popupObject.layerName }}</div>
      <div class="mt-1 mr-7 text-gray-200 cursor-pointer" @click="closePop">✖</div>
    </div>
    <div class="info-wrapper overflow-auto ml-9 max-h-40 text-sm text-left font-[PingFangSC]">
      <div class="min-h-7 break-words flex flex-row justify-start self-center"
        v-for="(value, key) in popupObject.properties">
        <div class="w-5 text-[#ffcf00]">&gt</div>
        <div class="w-20 text-[#cde4f8] border-r border-r-[#2e6a91]">{{ key }} :</div>
        <div class="w-60 ml-3 text-white">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popup {
  background-image: url("@/assets/imgs/main/map-popup-bg.png");
}
</style>