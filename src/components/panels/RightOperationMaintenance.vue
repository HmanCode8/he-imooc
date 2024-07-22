<script setup lang="ts">
import { ref,useEffct } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ThirdLevelTitle from "../common/ThirdLevelTitle.vue";
import PipeChart from "../charts/pipeChart.vue";
import BarRowChartTow from "../charts/barRowChartTow.vue";
import pipeChart from "../charts/pipeChart.vue";

import { useGlobalStore } from "@/store";

const global = useGlobalStore();

const changeStore = () => {
  console.log(global.navActive);
  global.setNavActive("/dashboard");
};
const arr1 = [
  {
    name: "示范区",
    value: 1000
  },
  {
    name: "建成区",
    value: 100
  }
];

const pipeChartdata = ref([
  { name: "燃气", percentage: 24, distance: "25km", color: "#FF6384" },
  { name: "盐都区", percentage: 24, distance: "25km", color: "#FFCE56" },
  { name: "大丰区", percentage: 24, distance: "15km", color: "#36A2EB" },
  { name: "建湖县", percentage: 24, distance: "25km", color: "#FFA07A" },
  { name: "阜宁县", percentage: 24, distance: "25km", color: "#4BC0C0" },
  { name: "滨海县", percentage: 24, distance: "25km", color: "#FF6384" },
  { name: "响水县", percentage: 24, distance: "25km", color: "#FFCE56" },
  { name: "东台市", percentage: 24, distance: "45km", color: "#36A2EB" },
  { name: "射阳县", percentage: 24, distance: "25km", color: "#FFA07A" }
]);
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="安全专项检查"></FristLevelTitle>
    <div class="flex w-full h-1/3  flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="检查次数"></ThirdLevelTitle>
        <Pipe3dChartTwo class="w-full h-full flex" :legend="pipeChartdata" />
      </div>

      <div class="8k:w-1/2 4k:w-full ">
        <ThirdLevelTitle title="上报问题数量"></ThirdLevelTitle>
        <Bar3dChart />
      </div>
    </div>
    <div class="flex w-full h-1/3  flex-wrap justify-between">
      <ThirdLevelTitle title="整改已完成/未完成数量"></ThirdLevelTitle>
      <Bar3dChart />
    </div>

    <FristLevelTitle title="维护维修  次数/频率"></FristLevelTitle>
    <div class="flex w-full h-1/3 flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <Pipe3dChartTwo class="w-full h-full flex" :legend="pipeChartdata" />
      </div>

      <div class="8k:w-1/2 4k:w-full ">
        <Bar3dChart />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>