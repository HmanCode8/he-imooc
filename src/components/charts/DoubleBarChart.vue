<template>
  <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
import { Label } from "cesium";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  barData: {
    type: Object,
    required: true
  }
});

const target = ref(null);
let mChart = null;
onMounted(() => {
  mChart = echarts.init(target.value);
  renderChart();
});

const handleResize = size => {
  console.log("resize", size);
  mChart.resize();
};

const renderChart = () => {
  const option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["已完成数量", "未完成数量"],
      textStyle: {
        color: "#fff"
      },
      itemHeight: 3,      
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: props.barData.xData
      }
    ],
    yAxis: [
      {
        type: "value",
        max: 40,
        splitLine: {
          lineStyle: {
            // 使用深浅的间隔色
            color: ["#B5B5B5"],
            type: "dashed",
            opacity: 0.5
          }
        }
      }
    ],
    series: [
      {
        name: "已完成数量",
        type: "bar",
        data: props.barData.y1Data,
        label: {
          show: true, // 显示数值
          position: "top", // 在柱状图顶部显示
          fontSize: 12,
          color: "#fff"
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#248ff7"
            },
            {
              offset: 1,
              color: "rgba(22,75,247,0.1)"
            }
          ])
        }
      },
      {
        name: "未完成数量",
        type: "bar",
        data: props.barData.y2Data,
        label: {
          show: true, // 显示数值
          position: "top", // 在柱状图顶部显示
          fontSize: 12,
          color: "#fff"
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#957D1E"
            },
            {
              offset: 1,
              color: "rgba(149,125,30,0.1)"
            }
          ])
        }
      }
    ]
  };
  mChart.setOption(option);
};
</script>
