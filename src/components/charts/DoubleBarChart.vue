<template>
  <div class="">
    <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>

  </div>
</template>

<script setup>
import { h, onMounted, ref, watch, onUnmounted } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
// import { Label } from "cesium";
import useRootFontSize from "@/hooks/useRootFontSize";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  legendData: {
    type: Array,
    default: () => ["已完成数量", "未完成数量"]
  }
});

const rootFontSize = useRootFontSize();

const target = ref(null);
let mChart = null;
onMounted(() => {
  mChart = echarts.init(target.value);
});

onUnmounted(() => {
  mChart.dispose();
})


watch([props.data, rootFontSize], ([newChartData, newFontSize]) => {
  renderChart(newFontSize);
  mChart && mChart.resize();

});

const handleResize = () => {
  const rootFontSize = useRootFontSize();
  renderChart(rootFontSize.value);
  if (mChart) {
    mChart.resize();
  }
};

const renderChart = fontSize => {
  const { xData, y1Data, y2Data } = props.data
  const option = {
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        return params.map(function (param) {
          return param.name + " : " + param.value + " " + props.data.unit;
        }).join("<br/>");
      },
    },
    title: {
      text: `单位：${props.data.unit}`,
      right: 0,
      textStyle: {
        fontSize,
        color: "#fff"
      }
    },
    legend: {
      data: props.legendData,
      textStyle: {
        color: "#fff",
        fontSize
      },
      itemHeight: 3
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: xData,
        axisLabel: {
          textStyle: {
            fontSize,
            color: "#fff"
          }
        }
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
        },
        axisLabel: {
          textStyle: {
            fontSize,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: props.legendData[0],
        type: "bar",
        data: y1Data,
        label: {
          show: true, // 显示数值
          position: "top", // 在柱状图顶部显示
          fontSize,
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
        name: props.legendData[1],
        type: "bar",
        data: y2Data,
        label: {
          show: true, // 显示数值
          position: "top", // 在柱状图顶部显示
          fontSize,
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
