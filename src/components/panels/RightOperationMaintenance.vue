<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import Bar3dChart from "../charts/Bar3dChart.vue";
import DoubleBarChart from "../charts/DoubleBarChart.vue";
import LiquidChart from "../charts/LiquidChart.vue";
import Pipe3dLengendChart from "../charts/Pipe3dLengendChart.vue";
import _ from "lodash";

import { operationMaintenanceData } from '@/assets/chartData/data'
import { useGlobalStore } from "@/store/index.js";

const global = useGlobalStore();
const { inspectionCounts, reportedIssues, completedRectifications, pendingRectifications, maintenanceCounts, maintenanceFrequencies } = operationMaintenanceData

const totalNum = _.get(_.find(inspectionCounts, { name: "总数" }), 'value', 0)
const inspectionChartData = _.filter(inspectionCounts, (item) => item.name !== "总数")

const mainTotalNum = _.get(_.find(maintenanceCounts, { name: "总数" }), 'value', 0)
const mainChartData = _.filter(maintenanceCounts, (item) => item.name !== "总数")

// const freqTotalNum = _.get(_.find(frequNums, { name: "总数" }), 'value', 0)
// const freqChartData = _.filter(frequNums, (item) => item.name !== "总数")

const doubleBarData = ref({
  xData: _.map(completedRectifications, c => c.name),
  y1Data: _.map(completedRectifications, c => c.value),
  y2Data: _.map(pendingRectifications, c => c.value),
  unit: '个'
});

const colors = [
  "rgba(37,144,245, 1)",
  "rgba(3,153,180, 1)",
  "rgba(112,120,247, 1)",
  "rgba(173,124,54, 1)",
  "rgba(37,144,245, 1)",
  "rgba(4,161,187, 1)",
  "rgba(113,121,249,1)",
]

const maintenanceChartData = _.map(maintenanceFrequencies, (m, index) => ({ ...m, value: Number(m.value) / 100, color: colors[index % 6] }))
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="安全专项检查" class="hover:cursor-pointer" @click="global.setCurrentModule('安全专项检查')" />
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="检查次数"></SecondLevelTitle>
        <Pipe3dChart class="h-60" :data="inspectionChartData" :total="totalNum" :haveTotal="true" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="上报问题数量"></SecondLevelTitle>
        <Bar3dChart class="h-60" :data="reportedIssues" :colors="['#FF9C11', '#873D0A']" />
      </div>
    </div>

    <div class="">
      <SecondLevelTitle class="w-full" title="整改已完成/未完成数量"></SecondLevelTitle>
      <DoubleBarChart class="h-80" :data="doubleBarData" :legendData="['整改已完成', '未完成']" />
    </div>

    <FristLevelTitle title="维护维修  次数/频率" class="hover:cursor-pointer" @click="global.setCurrentModule('维护维修')" />
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full flex">
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
        <!-- <Pipe3dChart class="h-full w-full" :data="mainChartData" :total="mainTotalNum" :haveTotal="true" /> -->
        <Pipe3dLengendChart class="h-80 mt-4 w-full" :data="mainChartData" :total="mainTotalNum" :haveTotal="true" />
      </div>

      <div class="8k:w-1/2 4k:w-full flex">
        <div class="longstrip h-40 flex flex-col items-center pt-2">

          <div class="text h-full text-xs mt-3">
            维修频率
          </div>
        </div>
        <div class="flex w-full flex-wrap">
          <div class="w-1/3" v-for="(m, index) in maintenanceChartData" :key="index">
            <LiquidChart class="w-full h-20" :liquidData="m" />
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