<script setup>
const props = defineProps({ "legendGroup": { type: Array, default: [] } })
</script>

<template>
  <div class="legend-content">
    <div class="px-2 flex flex-row justify-center">图例</div>
    <div class="px-1 overflow-auto flex flex-col legend-item" style="padding: 0 0 10px 0">
      <div v-for="item in legendGroup" :key="item.source + item.label"
        class="flex flex-row justify-center items-center p-2">
        <img class="w-5 h-5" :src="item.img" :alt="item.source + item.label" />
        <div class="legend-item-label">{{ item.label }}</div>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.legend-content {
  background: linear-gradient(to bottom, #0a234a, #305fad);

  .legend-item {
    max-height: 560px;
    width: 300px;

    .legend-item-label {
      margin: 0 0 0 10px;
      font-family: "Microsoft YaHei";
      font-weight: 400;
      font-size: 36px;
      color: #FFFFFF;
      line-height: 24px;
    }
  }
}
</style>