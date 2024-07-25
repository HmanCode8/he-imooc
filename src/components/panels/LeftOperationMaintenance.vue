<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ThirdLevelTitle from "../common/ThirdLevelTitle.vue";
import PipeChart from "../charts/pipeChart.vue";
import BarRowChart from "../charts/BarRowChart.vue";
import Bar3dChartOMFirst from "../charts/Bar3dChartOMFirst.vue";
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
    name: "雨水",
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
    name: "雨水",
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
  xData: ['燃气', '供水', '雨水', '污水', '道路', '桥梁', '路灯'],
  yData: [90, 50, 20, 30, 80, 60, 50],
  // grid:{
  //     containLabel: true,
  //     left: "6%",
  //     top: "5%",
  //     bottom: "20%",
  //     right: "6%"
  //   },

});

const Pie3DChartData = ref([
  { name: "燃气", value: 60, color: "#FF6384" },
  { name: "供水", value: 23, color: "#FFCE56" },
  { name: "雨水", value: 25, color: "#36A2EB" },
  { name: "污水", value: 99, color: "#FFA07A" },
  { name: "道路", value: 60, color: "#0F7C7C" },
  { name: "桥梁", value: 23, color: "#0F7C7C" },
  { name: "路灯", value: 25, color: "#3B40A2" },
]);
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="巡检巡查"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-40">
        <SecondLevelTitle class="w-full" title="巡检次数"></SecondLevelTitle>
        <Pie3dChartOMFirst class="w-full h-full flex" :pieChartData="Pie3DChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="上报问题数量"></SecondLevelTitle>
        <div class="w-full flex flex-wrap">
          <div class="pipe-item 4k:w-[45%] 8k:w-[20%] m-2 flex" v-for="(item, index) in problems" :key="index">
            <div :class="`inspection_${index + 1}  w-20 h-16 bg-cover bg-center`"></div>
            <div class="ml-4">
              <div class="problemType">{{ item.name }}(个)</div>
              <div class="problemNumber">{{ item.number }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-40">
        <SecondLevelTitle title="巡检及时率"></SecondLevelTitle>
        <Bar3dChartOMFirst :barData="barChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="巡检完成率"></SecondLevelTitle>
        <div class="w-full flex">
          <div class="chart-container w-full h-60 flex flex-wrap">
            <div
              :class="`inspection_success_${(index + 1) % 2} m-2 flex flex-col items-center bg-cover bg-center w-28 h-20`"
              v-for="(item, index) in completionRate" :key="index">
              <div class="pipe-point">{{ item.rate }}</div>
              <div class="name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FristLevelTitle title="设施管养"></FristLevelTitle>
    <div class="flex w-full h-60 flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="管养次数"></SecondLevelTitle>
        <Pie3dChartOMFirst class="w-full h-full flex" :pieChartData="Pie3DChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="发现问题数量"></SecondLevelTitle>
        <div class="w-full flex flex-wrap">
          <div class="pipe-item 4k:w-[45%] 8k:w-[20%] m-2 flex" v-for="(item, index) in problems" :key="index">
            <div :class="`inspection_${index + 1}  w-20 h-16 bg-cover bg-center`"></div>
            <div class="ml-4">
              <div class="problemType">{{ item.name }}(个)</div>
              <div class="problemNumber">{{ item.number }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-40">
        <SecondLevelTitle title="管养及时率"></SecondLevelTitle>
        <Bar3dChartOMFirst :barData="barChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle class="w-full" title="管养完成率"></SecondLevelTitle>
        <div class="w-full flex">
          <div class="chart-container w-full h-60 flex flex-wrap">
            <div
              :class="`inspection_success_${(index + 1) % 2} m-2 flex flex-col items-center bg-cover bg-center w-28 h-20`"
              v-for="(item, index) in completionRate" :key="index">
              <div class="pipe-point">{{ item.rate }}</div>
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
@for $i from 0 through 7 {
.inspection_success_#{$i} {
    background-image: url('@/assets/imgs/operation/inspection-success-#{$i%2+1}.png');
}
}

@for $i from 0 through 7 {
  .inspection_success_#{$i} {
    background-image: url('@/assets/imgs/inspection-success-#{$i%2+1}.png');
  }
}
</style>