<script setup>
const props = defineProps({ "legendGroup": { type: Array, default: [] } })
</script>

<template>
  <div class="legend-content font-[Microsoft YaHei]">
    <div class="px-3 pt-2 pb-2 flex flex-row text-left text-xl">图例</div>
    <div class="max-h-80 w-32 pb-1 overflow-auto flex flex-col">
      <div v-for="item in legendGroup" :key="item.source + item.label" class="flex flex-row justify-center m-2">
        <img class="w-6 h-6" :src="item.img" :alt="item.source + item.label" />
        <div class="ml-3 text-sm self-center">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.legend-content {
  background: linear-gradient(to bottom, #0a234a, #305fad);
}
</style>