<script setup>
import { ref } from "vue";
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

const warningDataLeft = ref([
  { name: "燃气", value: 157 },
  { name: "供水", value: 1137 },
  { name: "雨水", value: 10000 },
  { name: "污水", value: 10000 }
]);

const warningDataRight = ref([
  { name: "道路", value: 1350 },
  { name: "桥梁", value: 10000 },
  { name: "路灯", value: 861 },
  { name: "三破", value: 3 }
]);

const warningType = ref([
  { name: "燃气场站", value: 60, percent: "40" },
  { name: "窨井", value: 23, percent: "40" },
  { name: "管线", value: 25, percent: "40" },
  { name: "终端用户", value: 99, percent: "40" },
  { name: "阀门井", value: 60, percent: "40" }
]);
</script>

<template>
  <div class="pipe-analy">
    <FristLevelTitle title="预警事件分析"></FristLevelTitle>
    <SecondLevelTitle title="预警来源"></SecondLevelTitle>
    <div class="w-full h-60 flex justify-around">
      <!-- 左边 -->
      <div class="flex flex-wrap justify-end">
        <div class="pipe-item 4k:w-[15%] 8k:w-[30%] m-2 items-center" v-for="(item, index) in warningDataLeft"
          :key="index">
          <div
            class="bg-[url('assets/imgs/yj-source-type-left.png')] bg-cover w-30 h-17 text-center flex items-center justify-center">
            <div>{{ item.name }}</div>
          </div>
          <div class="haha">
            <div class="text-2xl">{{ item.value }}个</div>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="bg-[url('assets/imgs/yj-source1.png')] bg-cover bg-center w-80 h-60 flex items-center justify-center">
        <div class="bg-[url('assets/imgs/alarm.png')] bg-cover bg-center w-12 h-12"></div>
      </div>
      <!-- 右边 -->
      <div class="flex flex-wrap justify-start">
        <div class="pipe-item 4k:w-[15%] 8k:w-[30%] m-2 items-center" v-for="(item, index) in warningDataRight"
          :key="index">
          <div
            class="bg-[url('assets/imgs/yj-source-type-right.png')] bg-cover w-30 h-17 text-center flex items-center justify-center">
            <div>{{ item.name }}</div>
          </div>
          <div class>
            <div class="text-2xl">{{ item.value }}个</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-40">
        <SecondLevelTitle title="预警等级"></SecondLevelTitle>
        <div class="w-full flex items-center justify-center">
          <div
            class="bg-[url('assets/imgs/yjlevel.png')] bg-cover bg-center w-28 h-28 flex flex-col items-center justify-around">
            <div class>
              <span class="warninglevel text-[28px] font-extrabold">157</span>
              <span>个</span>
            </div>
            <div class="mb-5">持续任务时长</div>
          </div>

          <div class="ml-10">
            <div
              class="bg-[url('assets/imgs/firstwarning.png')] bg-cover bg-center w-80 h-8 flex items-center justify-around">
              一级预警
              <div>
                <span class="text-[14px] font-bold ml-8">37</span>个
              </div>
              <div>
                <span class="text-[14px] font-bold ml-8">24</span>%
              </div>
            </div>
            <div
              class="bg-[url('assets/imgs/secondwarning.png')] bg-cover bg-center w-80 mt-4 mb-4 h-8 flex items-center justify-around">
              二级预警
              <div>
                <span class="text-[14px] font-bold">120</span>个
              </div>
              <div>
                <span class="text-[14px] font-bold">76</span>%
              </div>
            </div>
            <div class="bg-[url('assets/imgs/thirdwarning.png')] bg-cover w-80 h-8 flex items-center justify-around">
              三级预警
              <div>
                <span class="text-[14px] font-bold">120</span>个
              </div>
              <div>
                <span class="text-[14px] font-bold">75</span>%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <div
          class="first-level-title my-4 bg-[url('assets/imgs/main/title-h-two.png')] h-8 bg-cover flex items-center justify-between">
          <h2 class="title text-white 4k:ml-8 8k:ml-16 mt-[-14px]">预警事件趋势</h2>
          <div class="flex">
            <div
              class="bg-[url('assets/imgs/buttonactive.png')] bg-cover w-20 title text-white 4k:ml-8 8k:ml-16 mt-[-14px] flex items-center justify-center">
              7天</div>
            <div
              class="bg-[url('assets/imgs/buttoninactive.png')] bg-cover w-20 title text-white 4k:ml-8 8k:ml-16 mt-[-14px] flex items-center justify-center">
              30天</div>
          </div>
        </div>
        <div class="w-full h-full flex">
          <div class="w-full h-full">
            <div class="bg-[url('assets/imgs/warningtotal.png')] bg-cover w-90 flex items-center justify-center">
              <span class="warninglevel text-[24px] font-bold">总事件数</span>
            </div>
            <div class="flex flex-col justify-center items-center">
              <div class>
                <span class="warningtotal text-[20px] font-bold">23</span>
                <span class="warningtotal font-bold">件</span>
              </div>
              <div class>
                <span class="warningtotal text-[20px] font-bold">4.5</span>
                <span class="warningtotal font-bold">%</span>同比
              </div>
            </div>
          </div>
          <WarningAreaChart />
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap justify-between">
      <div class="8k:w-1/2 4k:w-full h-80">
        <SecondLevelTitle title="预警类型"></SecondLevelTitle>
        <div class="flex flex-wrap justify-around">
          <div class="flex bg-[url('assets/imgs/waringtype1.png')] bg-cover  mt-2 w-40 h-32 flex  justify-center"
            v-for="(item, index) in warningType" :key="index">
            <div :class="`warningtype_${index + 1} bg-cover mt-2 w-8 h-8`"></div>
            <div class="mt-3">
              <div class="name">{{ item.name }}</div>
              <div class="pipe-point"><span class="text-[18px] font-bold">{{ item.value }}</span>个</div>
              <div class="pipe-point"><span class="text-[18px] font-bold">{{ item.percent }}</span>%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="8k:w-1/2 4k:w-full">
        <SecondLevelTitle title="预警事件空间特征"></SecondLevelTitle>
        <div class="w-full h-full">
          <div class="grid grid-cols-4 bg-[#081f51] px-3 justify-between text-center  mb-2 w-full">
            <div class></div>
            <div class>区域</div>
            <div class>数量/个</div>
            <div class>占比/%</div>
          </div>
          <div class="table-body">
            <div class="item grid grid-cols-4 px-3 items-center justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/TOP1.png')] bg-cover h-4 w-12">1</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/TOP2.png')] bg-cover h-4 w-12">2</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/TOP3.png')] bg-cover h-4 w-12">3</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/TOP4.png')] bg-cover h-4 w-12">4</div>
              <div class>盐城市盐都区</div>
              <div class>18</div>
              <div class>24%</div>
            </div>
            <div class="item grid grid-cols-4 px-3 justify-between text-center mb-2 w-full">
              <div class="bg-[url('assets/imgs/TOP4.png')] bg-cover h-4 w-12">5</div>
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
  background-color: #053B66;
}

.item:nth-child(even) {
  background-color: #012451;
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

@for $i from 0 through 5 {
  .warningtype_#{$i} {
    background-image: url('@/assets/imgs/ic_#{$i}.png');
  }
}

// .haha{
//   position: relative;
//     width: 200px;
//     height: 100px;
//     // background-color: #fff;

//     overflow: hidden;

// }

// .haha::before {
//       content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     // background-color: #000;
//     border: 10px solid #ff0000;
//     transform: skewY(-120deg);
//     transform-origin: left;
//     }

// .textBg {
//   background: linear-gradient(-18deg, #1890ff, #1ee7e7);
//   border-radius: 2px;
//   border: 1px solid #02b6ea;
// }</style>