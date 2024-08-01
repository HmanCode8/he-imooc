<script setup>
import { ref, onMounted } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import LineAreaChart from "../charts/LineAreaChart.vue";
import { projectManageData } from "@/assets/chartData/data";
import BarRowChart from "../charts/BarRowChart.vue";
import Tablechart from "../charts/Tablechart.vue";

import Pipe3dLengendChart from "../charts/Pipe3dLengendChart.vue";

const { projectSituation, areaConstruction, statisticDestroy, pipeDestroyColumns, pipeDestroyTableData, inspectionData } = projectManageData;



const patrolData = ref(inspectionData);
const lineAreaData = ref([]);
onMounted(() => {
  let chartData = inspectionData[2];
  let xArray = [];
  let yArray = [];

  for (let i = chartData.length - 1; i >= 0; i--) {
    let element = chartData[i];
    xArray.push(getPastDate(element.flag));
    yArray.push(element.value);

  }
  lineAreaData.value.push(xArray);
  lineAreaData.value.push(yArray);
});

const getPastDate = daysAgo => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="第三方施工项目"></FristLevelTitle>
    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="施工项目情况" />

        <div class="w-full h-full flex justify-around flex-wrap">
          <div
            class="w-1/4 flex flex-col justify-around h-40 bg-[url('assets/imgs/project/project-item-2.png')] bg-size">
            <div class="flex justify-center items-center mt-4 text-2xl font-extrabold cityStyle">
              {{ projectSituation[0].value }}</div>
            <div class="flex flex-col items-center">
              <div class="text-2xl font-extrabold italic">{{ projectSituation[0].name }}</div>
              <div>({{ projectSituation[0].unit }})</div>
            </div>
          </div>
          <div
            class="w-1/4 flex flex-col justify-around items-center h-40 bg-[url('assets/imgs/project/project-item-1.png')] bg-size"
            v-for="(item) in projectSituation[0].children" :key="item.name">
            <div class="text-center mt-4 text-2xl font-extrabold countryStyle">{{ item.value }}</div>
            <div class="flex flex-col items-center">
              <div class="text-2xl font-extrabold italic">{{ item.name }}</div>
              <div>({{ item.unit }})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="区域在建" />
        <BarRowChart class=" w-full h-60" :data="areaConstruction" :baseSum="true" />
      </div>
    </div>

    <div class="w-full">
      <SecondLevelTitle class="w-full" title="巡检巡查">
        <!-- <template v-slot:title-slot>
          <Tab :data="timeTabs" @onTabOnchage="onTabChange" />
        </template> -->
      </SecondLevelTitle>

      <div class="flex justify-center items-center">
        <div class="px-2">{{ patrolData[0].name }}:{{ patrolData[0].value }}</div>
        <div class="px-2 flex items-center">
          {{ patrolData[1].name }}:
          <span>{{ patrolData[1].value }}</span>
          <i class="w-2 h-4 ml-2 bg-[url('assets/imgs/project/down.png')] bg-size"></i>
        </div>
      </div>
      <LineAreaChart class="h-60 w-full" :data="lineAreaData" />

    </div>

    <div class="flex flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="管线破坏事件" />
        <div class="chart-container w-full h-60">
          <Pipe3dLengendChart class="w-full h-full" :data="statisticDestroy" />
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <!-- <BarRowChart /> -->
            <Tablechart :columns="pipeDestroyColumns" :tableData="pipeDestroyTableData" scrollable class="h-40 mt-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.cityStyle {
  font-family: "PingFangSC, PingFang SC";
  background-image: linear-gradient(to top, #42bbd9, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.countryStyle {
  font-family: "PingFangSC, PingFang SC";
  background-image: linear-gradient(to top, #00a2ff, #e4feff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>