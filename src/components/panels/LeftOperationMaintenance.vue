<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ThirdLevelTitle from "../common/ThirdLevelTitle.vue";
import PipeChart from "../charts/pipeChart.vue";
import Bar3dChartOMFirst from "../charts/Bar3dChartOMFirst.vue";
import BarRowChartTow from "../charts/barRowChartTow.vue";
import Pie3dChartOMFirst from "../charts/Pie3dChartOMFirst.vue";

import { useGlobalStore } from "@/store";

const problems = ref([
  {
    name: "燃气",
    number: 100
  },
  {
    name: "供水",
    number: 100
  },
  {
    name: "污水",
    number: 100
  },
  {
    name: "道路",
    number: 100
  },
  {
    name: "桥梁",
    number: 100
  },
  {
    name: "路灯",
    number: 100
  }
]);

const completionRate = ref([
  {
    name: "燃气",
    rate: "68%"
  },
  {
    name: "供水",
    rate: "68%"
  },
  {
    name: "污水",
    rate: "68%"
  },
  {
    name: "道路",
    rate: "68%"
  },
  {
    name: "桥梁",
    rate: "68%"
  },
  {
    name: "路灯",
    rate: "68%"
  }
]);

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
    value: 10000
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
  yData: [90, 50, 20, 30, 80, 60, 50]
});

const Pie3DChartData = ref([
  { name: "燃气", value: 60, color: "#FF6384" },
  { name: "供水", value: 23, color: "#FFCE56" },
  { name: "雨水", value: 25, color: "#36A2EB" },
  { name: "污水", value: 99, color: "#FFA07A" },
  { name: "道路", value: 60, color: "#0F7C7C" },
  { name: "桥梁", value: 23, color: "#0F7C7C" },
  { name: "路灯", value: 25, color: "#3B40A2" }
]);
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="巡检巡查"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="巡检次数"></ThirdLevelTitle>
        <Pie3dChartOMFirst class="w-full h-full flex" :pieChartData="Pie3DChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="上报问题数量"></ThirdLevelTitle>
        <div class="w-full flex">
          <div
            class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 flex items-center"
            v-for="(item, index) in problems"
            :key="index"
          >
            <div class="icon w-4 h-4 bg-slate-500"></div>
            <div class>
              <div class="name">{{ item.name }}(个)</div>
              <div class="pipe-point">{{ item.number }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-60">
        <ThirdLevelTitle title="巡检及时率"></ThirdLevelTitle>
        <Bar3dChartOMFirst :barData="barChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="巡检完成率"></ThirdLevelTitle>
        <div class="w-full flex">
          <div class="chart-container w-full h-60 flex">
            <div
              class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 flex flex-col items-center"
              v-for="(item, index) in completionRate"
              :key="index"
            >
              <div class="pipe-point">{{ item.rate }}</div>
              <div class="name">{{ item.name }}</div>
              <div class="icon w-4 h-4 bg-slate-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FristLevelTitle title="设施管养"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="管养次数"></ThirdLevelTitle>
        <Pie3dChartOMFirst class="w-full h-full flex" :pieChartData="Pie3DChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="发现问题数量"></ThirdLevelTitle>
        <div class="w-full flex">
          <div
            class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 flex items-center"
            v-for="(item, index) in problems"
            :key="index"
          >
            <div class="icon w-4 h-4 bg-slate-500"></div>
            <div class>
              <div class="name">{{ item.name }}(个)</div>
              <div class="pipe-point">{{ item.number }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-60">
        <ThirdLevelTitle title="管养及时率"></ThirdLevelTitle>
        <Bar3dChartOMFirst :barData="barChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <ThirdLevelTitle class="w-full" title="管养完成率"></ThirdLevelTitle>
        <div class="w-full flex">
          <div class="chart-container w-full h-60 flex">
            <div
              class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 flex flex-col items-center"
              v-for="(item, index) in completionRate"
              :key="index"
            >
              <div class="pipe-point">{{ item.rate }}</div>
              <div class="name">{{ item.name }}</div>
              <div class="icon w-4 h-4 bg-slate-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>