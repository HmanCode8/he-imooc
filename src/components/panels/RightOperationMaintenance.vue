<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import Bar3dChart from "../charts/Bar3dChart.vue";
import DoubleBarChart from "../charts/DoubleBarChart.vue";
import LiquidChart from "../charts/LiquidChart.vue";
import Pie3dChartOMFirst from "../charts/Pie3dChartOMFirst.vue";
import Pipe3dChart from "../charts/Pipe3dChart.vue";
import _ from "lodash";

import { operationMaintenanceData } from '@/assets/chartData/data'

const { inspectionCounts, reportedIssues, completedRectifications, pendingRectifications } = operationMaintenanceData

const totalNum = _.get(_.find(inspectionCounts, { name: "总数" }), 'value', 0)
const inspectionChartData = _.filter(inspectionCounts, (item) => item.name !== "总数")

// const freqTotalNum = _.get(_.find(frequNums, { name: "总数" }), 'value', 0)
// const freqChartData = _.filter(frequNums, (item) => item.name !== "总数")

import { useGlobalStore } from "@/store";

const global = useGlobalStore();


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
    <FristLevelTitle title="安全专项检查"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle class="w-full" title="检查次数"></SecondLevelTitle>
        <Pipe3dChart class="h-full" :data="inspectionChartData" :total="totalNum" :haveTotal="true" />
      </div>

      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="上报问题数量"></SecondLevelTitle>
        <Bar3dChart class="h-60" :data="reportedIssues" :colors="['#FF9C11', '#873D0A']" />
      </div>
    </div>

    <div class="">
      <SecondLevelTitle class="w-full" title="整改已完成/未完成数量"></SecondLevelTitle>
      <DoubleBarChart class="h-60" :barData="doubleBarData" />
    </div>

    <FristLevelTitle title="维护维修  次数/频率"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80 flex">
        <div class="longstrip h-40 flex flex-col items-center pt-2">
          <div class="star w-1 h-2">
          </div>
          <div class="text h-40 text-xs mt-3">
            维修次数
          </div>
          <div class="star w-1 h-2">
          </div>
          <div class="line h-40">
          </div>
        </div>
        <Pie3dChartOMFirst class="w-full h-full flex" :pieChartData="Pie3DChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full h-80 flex">
        <div class="longstrip h-40 flex flex-col items-center pt-2">
          <div class="star w-1 h-2">
          </div>
          <div class="text h-40 text-xs mt-3">
            维修频率
          </div>
          <div class="star w-1 h-2">
          </div>
          <div class="line h-40">
          </div>
        </div>
        <div class="flex flex-wrap">
          <div v-for="(item, index) in liquidChartData" :key="index">
            <LiquidChart :liquidData="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.longstrip {
  margin: 10px;
  background: linear-gradient(rgba(0, 202, 255, 0.43) 0%, rgba(0, 201, 255, 0) 100%);

  .star {
    background: #00D9FF;
    border: 1px solid #FFFFFF;
    transform: rotate(45deg);
  }

  .text {
    writing-mode: vertical-rl;
    /* 从右到左的垂直书写模式 */
    text-orientation: mixed;
    /* 文字方向 */
  }

  .line {
    border: 1px solid;
    border-image: linear-gradient(180deg, rgba(0, 219, 255, 1), rgba(151, 151, 151, 0)) 2 2;
  }
}
</style>