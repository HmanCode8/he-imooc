<script setup>
import { ref } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import ThirdLevelTitle from "../common/ThirdLevelTitle.vue";
import Pie3dChartOMFirst from "../charts/Pie3dChartOMFirst.vue";
import WarningHBarChart from "../charts/WarningHBarChart.vue";
import WarningConeBarChart from "../charts/WarningConeBarChart.vue";
import WarningBarRowChart from "../charts/WarningBarRowChart.vue";
import WarningMedalTableChart from "../charts/WarningMedalTableChart.vue";

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
  { name: "已解除", value: 89, color: "#FF6384", unit: "个" },
  { name: "处置中", value: 65, color: "#FFCE56", unit: "个" },
  { name: "已办结", value: 100, color: "#36A2EB", unit: "个" }
]);

const barChartData = ref({
  xData: ["燃气", "供水", "阀门井"],
  yData: [1.5, 2.0, 0.7],
  unit: "h",
  max: "2",
  grid: {
    containLabel: true,
    left: "6%",
    top: "15%",
    bottom: "16%",
    right: "6%"
  }
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
        <!-- <SecondLevelTitle title="响应处置分析"></SecondLevelTitle> -->

        <SecondLevelTitle class="w-full" title="响应处置分析">
          <template v-slot:title-slot>
            <div
              class="bg-[url('assets/imgs/warning/warningtotal.png')] bg-cover bg-center w-70 h-7 flex items-center justify-center"
            >
              <div>
                <span class="warninglevel text-xl font-extrabold">及时响应处置率</span>
              </div>
              <div>
                <span class="warningtotal text-xl font-extrabold ml-4">93.0</span>
                <span class="warningtotal font-bold">%</span>
              </div>
            </div>
          </template>
        </SecondLevelTitle>

        <div class="w-full flex">
          <div class="chart-container w-full h-60">
            <WarningBarRowChart />
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="响应时长">
          <template v-slot:title-slot>
            <div
              class="bg-[url('assets/imgs/warning/warningtotal.png')] bg-cover bg-center w-70 h-7 flex items-center justify-center"
            >
              <div>
                <span class="warninglevel text-xl font-extrabold">平均响应时长</span>
              </div>
              <div>
                <span class="warningtotal text-xl font-extrabold ml-4">2.39</span>
                <span class="warningtotal font-bold">h</span>
              </div>
            </div>
          </template>
        </SecondLevelTitle>
        <Bar3dChartOMFirst :barData="barChartData" />
      </div>

      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="处置时长">
          <template v-slot:title-slot>
            <div
              class="bg-[url('assets/imgs/warning/warningtotal.png')] bg-cover bg-center w-70 h-7 flex items-center justify-center"
            >
              <div>
                <span class="warninglevel text-xl font-extrabold">平均处置时长</span>
              </div>
              <div>
                <span class="warningtotal text-xl font-extrabold ml-4">2.39</span>
                <span class="warningtotal font-bold">h</span>
              </div>
            </div>
          </template>
        </SecondLevelTitle>
        <div class="w-full h-full flex">
          <WarningConeBarChart />
        </div>
      </div>
    </div>

    <SecondLevelTitle title="平均效率"></SecondLevelTitle>
    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
      <WarningMedalTableChart/>
        <!-- <div class="w-full h-full">
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
        </div> -->
      </div>

      <div class="8k:w-1/2 4k:w-full h-80 flex flex-wrap">
      
        <div
          class="bg-[url('assets/imgs/warning/average4.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-20 "
        >
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#1AFCFF;">72个</span>
          </div>
          <div class>待签收</div>
        </div>

        <div
          class="bg-[url('assets/imgs/warning/average2.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-20 "
        >
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#FFAE00;">0个</span>
          </div>
          <div class="pipe-point">处置中</div>
        </div>

      

        <div
          class="bg-[url('assets/imgs/warning/average3.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-20"
        >
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#0BFFC3;">7个</span>
          </div>
          <div class="pipe-point">已办结</div>
        </div>

        <div
          class="bg-[url('assets/imgs/warning/average1.png')] bg-cover bg-center w-32 h-28 flex flex-col items-center ml-20"
        >
          <div class="mt-5 text-2xl font-bold">
            <span style="color:#1AFCFF;">100%</span>
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
  color: transparent; /* 将文字颜色设置为透明，使背景渐变显示出来 */
}

.warningtotal {
  background: linear-gradient(0deg, #ffba00 0%, #ffffff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>