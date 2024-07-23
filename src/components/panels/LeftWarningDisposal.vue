<script setup>
import { ref, defineProps } from "vue";
import FristLevelTitle from "../common/FirstLevelTitle.vue";
import SecondLevelTitle from "../common/SecondLevelTitle.vue";
import WarningAreaChart from "../charts/WarningAreaChart.vue";

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

const warningData = ref([
  { name: "燃气", value: 157 },
  { name: "供水", value: 1137 },
  { name: "雨水", value: 10000 },
  { name: "污水", value: 10000 },
  { name: "道路", value: 1350 },
  { name: "桥梁", value: 10000 },
  { name: "路灯", value: 861 },
  { name: "三破", value: 3 }
]);

const warningType = ref([
  { name: "燃气场站", value: 60, percent: "40%" },
  { name: "窨井", value: 23, percent: "40%" },
  { name: "管线", value: 25, copercentlor: "40%" },
  { name: "终端用户", value: 99, copercentlor: "40%" },
  { name: "阀门井", value: 60, percent: "40%" }
]);
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="预警事件分析"></FristLevelTitle>
    <SecondLevelTitle title="预警来源"></SecondLevelTitle>
    <div class="w-full h-60 flex">
      <div class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 items-center" v-for="(item, index) in warningData" :key="index">
        <div class="icon w-4 h-4 bg-slate-500"></div>
        <div class>
          <div class="name">{{ item.name }}</div>
          <div class="pipe-point">{{ item.value }}(个)</div>
        </div>
        </div>
      </div>   

      <div>pppppppppppppp</div>

      <div
        class="pipe-item 4k:w-[45%] 8k:w-[30%] m-2 items-center"
        v-for="(item, index) in warningData"
        :key="index"
      >
      <div v-show="index%2!==0">
        <div class="icon w-4 h-4 bg-slate-500"></div>
        <div class>
          <div class="name">{{ item.name }}</div>
          <div class="pipe-point">{{ item.value }}(个)</div>
        </div>
        </div>
      </div>    
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-60">
        <SecondLevelTitle title="预警等级"></SecondLevelTitle>
        <div>
          <div class>
            <div class="name">157个</div>
            <div class="pipe-point">持续任务时长</div>
            <div class="icon w-4 h-4 bg-slate-500"></div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="预警事件趋势"></SecondLevelTitle>
        <div class="w-full h-full flex">
          <div>
            <div class="name">总事件</div>
            <div class="pipe-point">23件</div>
            <div class="pipe-point">4.5%同比</div>
          </div>
          <WarningAreaChart />
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-60">
        <SecondLevelTitle title="预警类型"></SecondLevelTitle>
        <div class="flex flex-wrap">
          <div class="flex" v-for="(item, index) in warningType" :key="index">
            <div class="icon w-4 h-4 bg-slate-500"></div>
            <div class>
              <div class="name">{{ item.name }}</div>
              <div class="pipe-point">{{ item.value }}(个)</div>
              <div class="pipe-point">{{ item.percent }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="预警事件空间特征"></SecondLevelTitle>
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
</style>