<script setup>
import { ref} from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ThirdLevelTitle from "../common/ThirdLevelTitle.vue";
import PipeChart from "../charts/pipeChart.vue";
import BarRowChartTow from "../charts/barRowChartTow.vue";
import Bar3dChartOMSecond from "../charts/Bar3dChartOMSecond.vue";
import DoubleBarChart from "../charts/DoubleBarChart.vue";
import pipeChart from "../charts/pipeChart.vue";
import LiquidChart from "../charts/LiquidChart.vue";

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

const barChartData = ref({
  xData: ["燃气", "供水", "雨水", "污水", "道路", "桥梁", "路灯"],
  yData: [9, 5, 2, 3, 8, 6, 5]
});

const doubleBarData = ref({
  xData: ["燃气", "供水", "雨水", "污水", "道路", "桥梁", "路灯"],
  y1Data: [28, 28, 28, 28, 28, 28, 28],
  y2Data: [24, 24, 24, 24, 24, 24, 24]
});

const liquidChartData = ref([
  {
    name: "燃气",
    number: 0.6,
    color: "rgba(37,144,245, 1)"
  },
  {
    name: "供水",
    number: 0.6,
    color: "rgba(3,153,180, 1)"
  },
  {
    name: "雨水",
    number: 0.6,
    color: "rgba(112,120,247, 1)"
  },
  {
    name: "污水",
    number: 0.6,
    color: "rgba(173,124,54, 1)"
  },
  {
    name: "道路",
    number: 0.6,
    color: "rgba(37,144,245, 1)"
  },
  {
    name: "桥梁",
    number: 0.6,
    color: "rgba(4,161,187, 1)"
  },
  {
    name: "路灯",
    number: 0.6,
    color: "rgba(113,121,249,1)"
  }
]);
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="安全专项检查"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <ThirdLevelTitle class="w-full" title="检查次数"></ThirdLevelTitle>
        <Pipe3dChartTwo class="w-full h-full flex" :legend="pipeChartdata" />
      </div>

      <div class="8k:w-1/2 4k:w-full h-80">
        <ThirdLevelTitle title="上报问题数量"></ThirdLevelTitle>
        <Bar3dChartOMSecond :barData="barChartData" />
      </div>
    </div>
    <div class="flex w-full h-1/3 flex-wrap justify-between">
      <ThirdLevelTitle title="整改已完成/未完成数量"></ThirdLevelTitle>
      <DoubleBarChart :barData="doubleBarData" />
    </div>

    <FristLevelTitle title="维护维修  次数/频率"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <Pipe3dChartTwo class="w-full h-full flex" :legend="pipeChartdata" />
      </div>
      <div class="8k:w-1/2 4k:w-full h-80 flex flex-wrap">
        <div v-for="(item, index) in liquidChartData" :key="index">
          <LiquidChart :liquidData="item" />
        </div>        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>