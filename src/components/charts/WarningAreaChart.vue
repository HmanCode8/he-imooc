<template>
  <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
import { Label } from "cesium";
import useRootFontSize from "@/hooks/useRootFontSize";

const props = defineProps({
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
  const fontSize = useRootFontSize();
  renderChart(fontSize.value);
  mChart.resize();
};

const renderChart = fontSize => {
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["07-06", "07-08", "07-10", "07-12", "07-14"],
      axisLabel: {
        interval: 0, // 强制显示每个标签
        textStyle: {
          fontSize
        }
      }
    },
    yAxis: {
      type: "value",
      max: 2,
      // name: "事件数/件",
      // nameLocation: "end",
      // nameTextStyle: {
      //   align: "left",
      //   padding: [0, 0, 0, 100]
      // },
      axisLabel: {
        textStyle: {
          fontSize
        }
      }
    },
    series: [
      {
        data: [0.5, 0.6, 1.1, 0.9, 1.7],
        type: "line",
        areaStyle: {
          // 使用线性渐变色
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0.6, color: "rgba(1,88,136,1)" }, // 0% 处的颜色
              { offset: 1, color: "rgba(1,1,1,0)" } // 100% 处的颜色
            ],
            global: false // 缺省为 false
          }
        },
        // 设置折线的颜色
        lineStyle: {
          color: "#00ABD8" // 在这里设置线的颜色
        },
        // 可选：设置拐点（点）的样式
        itemStyle: {
          color: "#00ABD8" // 设置点的颜色，保持一致
        }
      }
    ],
    graphic: [
        {
          type: "text",
          right: "5%",
          top: "5%",
          style: {
            text: "事件数/件",
            textAlign: "center",
            fill: "#A8B1AF",
            fontSize
          }
        }
      ],
    grid: {
      top: "20%", // 上边距
      right: "10%", // 右边距
      bottom: "10%", // 下边距
      left: "5%", // 左边距
      containLabel: true // 是否包含轴标签
    }
  };
  mChart.setOption(option);
};
</script>
