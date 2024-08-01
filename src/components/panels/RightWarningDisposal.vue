<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ConeBarChart from '../charts/ConeBarChart.vue'
import WarningMedalTableChart from "../charts/WarningMedalTableChart.vue";
import Bar3dChart from "../charts/Bar3dChart.vue";
import BarRowChart from "../charts/BarRowChart.vue";
import { warningDisposalData } from "@/assets/chartData/data";
import _ from "lodash";
import {useGlobalStore} from "@/store/index.js";

const global = useGlobalStore();
const {
  disposalStageData,
  disposalReactData,
  reactTimeData,
  disposalTimeData,
  averageEfficiencyData
} = warningDisposalData;

const Pie3DChartData = ref([]);
disposalStageData.forEach(element => {
  // element.color = getRandomHexColor();
  element.unit = "个";
});
Pie3DChartData.value = disposalStageData;

const totalNum = ref(0);
disposalStageData.forEach(element => {
  // element.color = getRandomHexColor();
  totalNum.value += element.value;
});

//-------响应时长
let xArray = [];
let yArray = [];

reactTimeData.children.forEach(item => {
  xArray.push(item.name);
  yArray.push(item.value);
})

const topColors = ['#f00', '#0f0', '#0ff', '#f0f', '#ff0', '#00f', '#f00', '#0f0', '#0ff', '#f0f', '#ff0', '#00f']

const barChartData = disposalReactData.children.sort((a, b) => Number(a.value) - Number(b.value))
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="事件处置分析"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle title="处置阶段分析" class="hover:cursor-pointer" @click="global.setCurrentModule('处置阶段分析')"/>
        <Pipe3dChart class="h-full" :data="Pie3DChartData" :total="totalNum" :haveTotal="true" />
      </div>

      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle class="w-full" title="响应处置分析">
          <template v-slot:title-slot>
            <div
              class="bg-[url('assets/imgs/warning/warningtotal.png')] bg-size bg-center w-70 h-7 flex items-center justify-center">
              <div>
                <span class="warninglevel text-xl font-extrabold">{{ disposalReactData.name }}</span>
              </div>
              <div>
                <span class="warningtotal text-xl font-extrabold ml-4">{{ disposalReactData.value }}</span>
                <span class="warningtotal font-bold">%</span>
              </div>
            </div>
          </template>
        </SecondLevelTitle>

        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <BarRowChart :data="barChartData" :haveTop="true" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle title="响应时长">
          <template v-slot:title-slot>
            <div
              class="bg-[url('assets/imgs/warning/warningtotal.png')] bg-size bg-center w-70 h-7 flex items-center justify-center">
              <div>
                <span class="warninglevel text-xl font-extrabold">{{ reactTimeData.name }}</span>
              </div>
              <div>
                <span class="warningtotal text-xl font-extrabold ml-4">{{ reactTimeData.value }}</span>
                <span class="warningtotal font-bold">h</span>
              </div>
            </div>
          </template>
        </SecondLevelTitle>
        <Bar3dChart :data="reactTimeData.children" seriesName="响应时长" title="响应时长" class="h-64" />
      </div>

      <div class="8k:w-[48%] 4k:w-full">
        <SecondLevelTitle title="处置时长">
          <template v-slot:title-slot>
            <div
              class="bg-[url('assets/imgs/warning/warningtotal.png')] bg-size bg-center w-70 h-7 flex items-center justify-center">
              <div>
                <span class="warninglevel text-xl font-extrabold">{{ disposalTimeData.name }}</span>
              </div>
              <div>
                <span class="warningtotal text-xl font-extrabold ml-4">{{ disposalTimeData.value }}</span>
                <span class="warningtotal font-bold">h</span>
              </div>
            </div>
          </template>
        </SecondLevelTitle>

        <!-- <WarningConeBarChart :chartData="disposalTimeData.children" class="h-80" /> -->
        <ConeBarChart :data="disposalTimeData.children" title="处置时长" class="h-64 w-full" />

      </div>
    </div>

    <SecondLevelTitle title="平均效率"></SecondLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-[48%] 4k:w-full">
        <WarningMedalTableChart :tableData="averageEfficiencyData[0]" />
      </div>

      <div class="8k:w-[48%] 4k:w-full flex justify-around flex-wrap">
        <div class="bg-[url('assets/imgs/warning/average4.png')] bg-size w-[40%] h-32 flex flex-col items-center  ">
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#1AFCFF;">{{ averageEfficiencyData[1][0].percent }}%</span>
          </div>
          <div class>待签收</div>
        </div>

        <div class="bg-[url('assets/imgs/warning/average2.png')] bg-size w-[40%] h-32 flex flex-col items-center  ">
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#FFAE00;">{{ averageEfficiencyData[1][1].percent }}%</span>
          </div>
          <div class="pipe-point">处置中</div>
        </div>
        <div class="bg-[url('assets/imgs/warning/average3.png')] bg-size w-[40%] h-32 flex flex-col items-center mt-2">
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#0BFFC3;">{{ averageEfficiencyData[1][2].percent }}%</span>
          </div>
          <div class="pipe-point">已办结</div>
        </div>

        <div class="bg-[url('assets/imgs/warning/average1.png')] bg-size  w-[40%] h-32 flex flex-col items-center ">
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#1AFCFF;">{{ averageEfficiencyData[1][3].percent }}%</span>
          </div>
          <div class="pipe-point">按时办结率</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item:nth-child(odd) {
  background-color: #142d5d;
}

.item:nth-child(even) {
  background-color: #012451;
}

.signfor {
  width: 105px;
  height: 80px;
  margin: 20px;
  background-image: url("@/assets/imgs/warning/average1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.warninglevel {
  font-family: "PangMenZhengDao";
  background: linear-gradient(to top, #d5dcfe, #82a8ee, #f3f3ff, #f3f3ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* 将文字颜色设置为透明，使背景渐变显示出来 */
}

.warningtotal {
  background: linear-gradient(0deg, #ffba00 0%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>