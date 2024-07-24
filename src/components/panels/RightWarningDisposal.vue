<script setup>
import { ref, defineProps } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ThirdLevelTitle from "../common/ThirdLevelTitle.vue";
import Pie3dChartOMFirst from "../charts/Pie3dChartOMFirst.vue";
import WarningHBarChart from "../charts/WarningHBarChart.vue";
import WarningConeBarChart from "../charts/WarningConeBarChart.vue";

const list = ref([
  {
    name: "官网",
    value: 100
  },
  {
    name: "微信",
    value: 30
  },
  {
    name: "微博",
    value: 20
  },
  {
    name: "官网",
    value: 100
  },
  {
    name: "微信",
    value: 30
  },
  {
    name: "其他",
    value: 10
  }
]);

const tabs = ref([
  {
    name: "类型",
    value: "type"
  },
  {
    name: "分区",
    value: "partition"
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

const barChartData = ref({
  xData: ["燃气", "供水", "阀门井"],
  yData: [1.5, 2.0, 0.7],
  unit: "h",
  max: "2",
  grid:{
      containLabel: true,
      left: "6%",
      top: "15%",
      bottom: "16%",
      right: "6%"
    },
});
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="事件处置分析"></FristLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="处置阶段分析"></SecondLevelTitle>
        <Pie3dChartOMFirst class="w-full h-full flex" :pieChartData="Pie3DChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="完成情况分析"></SecondLevelTitle>
        <div class="w-full h-full flex">
          <WarningHBarChart />
        </div>
      </div>
    </div>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="响应时长"></SecondLevelTitle>
        <Bar3dChartOMFirst :barData="barChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="处置时长"></SecondLevelTitle>
        <div class="w-full h-full flex">
          <WarningConeBarChart />
        </div>
      </div>
    </div>


    <SecondLevelTitle title="平均效率"></SecondLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      
      <div class="8k:w-1/2 4k:w-full h-80">
        
        <div class="w-full h-full">
          <div class="grid grid-cols-4 bg-[#081f51] px-3 justify-between text-center w-full">
            <div class></div>
            <div class>区域</div>
            <div class>数量/个</div>
            <div class>占比/%</div>
          </div>
          <div class="table-body">
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class>1</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class>2</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class>3</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class>4</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class>5</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full h-80 flex flex-wrap">
          <div class="bg-[url('assets/imgs/average4.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-10">
            <div class="mt-5 text-2xl font-bold"><span style="color:#1AFCFF;">72个</span></div>
            <div class="">待签收</div>
          </div>

          <div class="bg-[url('assets/imgs/average2.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-10">
            <div class="mt-5 text-2xl font-bold"><span style="color:#FFAE00;">0个</span></div>
            <div class="pipe-point">处置中</div>
          </div>

          <div class="bg-[url('assets/imgs/average3.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-10">
            <div class="mt-5 text-2xl font-bold"><span style="color:#0BFFC3;">7个</span></div>
            <div class="pipe-point">已办结</div>
          </div>

          <div class="bg-[url('assets/imgs/average1.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-10">
            <div class="mt-5 text-2xl font-bold"><span style="color:#1AFCFF;">100%</span></div>
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

.signfor{
  width:105px;
  height:80px;
  margin:20px;
  background-image: url('@/assets/imgs/average1.png');
  background-size:cover;
  background-position: center;
  display:flex;
  flex-direction:column;
  align-items:  center;               
  justify-content: center;
}
</style>