<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import Bar3dChart from "../charts/Bar3dChart.vue";
import Pipe3dChart from "../charts/Pipe3dChart.vue";
import _ from "lodash";

import { operationMaintenanceData } from '@/assets/chartData/data'

const { inspectionNum, frequNums, problems, findProblems, timelinesRate, completionRate, custodyTimeRate, custodycompletioRate } = operationMaintenanceData

const totalNum = _.get(_.find(inspectionNum, { name: "总数" }), 'value', 0)
const inspectionChartData = _.filter(inspectionNum, (item) => item.name !== "总数")

const freqTotalNum = _.get(_.find(frequNums, { name: "总数" }), 'value', 0)
const freqChartData = _.filter(frequNums, (item) => item.name !== "总数")
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="巡检巡查"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full ">
        <div class="h-60 mb-8">
          <SecondLevelTitle class="w-full" title="巡检次数"></SecondLevelTitle>
          <Pipe3dChart class="h-full" :data="inspectionChartData" :total="totalNum" :haveTotal="true" />
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="上报问题数量"></SecondLevelTitle>
        <div class="w-full flex flex-wrap justify-between">
          <div class="pipe-item m-2 flex" v-for="(item, index) in problems" :key="index">
            <div :class="`inspection_${(index + 1) > 6 ? 6 : index + 1}  w-20 h-16 bg-size`"></div>
            <div class="ml-4 flex flex-col justify-center items-center">
              <div class="problemType">{{ item.name }}({{ item.unit }})</div>
              <div class="problemNumber">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="巡检及时率"></SecondLevelTitle>
        <Bar3dChart :data="timelinesRate" class="h-60" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="巡检完成率"></SecondLevelTitle>
        <div class="w-full flex">
          <div class="chart-container w-full h-60 flex flex-wrap justify-between">
            <div :class="`inspection_success_1 m-2 flex flex-col items-center w-1/5 h-20 bg-size`"
              v-for="(item, index) in completionRate" :key="index">
              <div class="pipe-point">{{ item.value }}</div>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FristLevelTitle title="设施管养"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">

      <div class="8k:w-1/2 4k:w-full ">
        <div class="h-60  mb-14">
          <SecondLevelTitle class="w-full" title="营养次数"></SecondLevelTitle>
          <Pipe3dChart class="h-full" :data="freqChartData" :total="freqTotalNum" :haveTotal="true" />
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="发现问题数量"></SecondLevelTitle>
        <div class="w-full flex flex-wrap">
          <div class="w-full flex flex-wrap justify-between">
            <div class="pipe-item m-2 flex" v-for="(item, index) in findProblems" :key="index">
              <div :class="`inspection_${(index + 1) === 6 ? 6 : index + 1}  w-20 h-16 bg-size`"></div>
              <div class="ml-4 flex flex-col justify-center items-center">
                <div class="problemType">{{ item.name }}({{ item.unit }})</div>
                <div class="problemNumber">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="管养及时率"></SecondLevelTitle>
        <Bar3dChart :data="custodyTimeRate" class="h-60" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="管养完成率"></SecondLevelTitle>
        <div class="w-full flex">
          <div class="chart-container w-full h-60 flex flex-wrap justify-between">
            <div :class="`inspection_success_1 m-2 flex flex-col items-center w-1/5 h-20 bg-size`"
              v-for="(item, index) in custodycompletioRate" :key="index">
              <div class="pipe-point">{{ item.value }}</div>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@for $i from 1 through 7 {
  .inspection_#{$i} {
    background-image: url('@/assets/imgs/operation/inspection_#{$i}.png');
  }
}

.problemNumber {
  // font-size:14px;
  font-family: "PingFangSC, PingFang SC";
  font-weight: 800;
  background-image: linear-gradient(to top, #42BBD9, #FFFFFF);
  /* 渐变色 */
  -webkit-background-clip: text;
  /* 只剪裁文本 */
  -webkit-text-fill-color: transparent;
  /* 填充颜色透明，以显示背景 */
}

.problemType {
  // font-size:16px;
  font-family: "PingFangSC, PingFang SC";
  font-weight: 800;
}

@for $i from 1 through 7 {
  .inspection_success_#{$i} {
    background-image: url('@/assets/imgs/operation/inspection-success-#{$i%2+1}.png');
  }
}
</style>