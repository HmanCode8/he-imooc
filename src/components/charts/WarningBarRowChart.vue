<template>
  <div ref="target" v-resize-ob="handleResize" class="w-full h-full"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import useRootFontSize from "@/hooks/useRootFontSize";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    default: () => [
      { name: "阜宁县", value: 20 },
      { name: "射阳县", value: 20 },
      { name: "建湖县", value: 35 },
      { name: "大丰区", value: 15 },
      { name: "盐都区", value: 40 },
      { name: "亭湖区", value: 30 }
    ]
  }
});

const target = ref(null);
let mChart = null;
onMounted(() => {
  mChart = echarts.init(target.value);
});

const handleResize = size => {
  const fontSize = useRootFontSize();
  renderChart(fontSize);
  mChart.resize();
};
// const data = [
//     { name: '阜宁县', value: 20 },
//     { name: '射阳县', value: 20 },
//     { name: '建湖县', value: 35 },
//     { name: '大丰区', value: 15 },
//     { name: '盐都区', value: 40 },
//     { name: '亭湖区', value: 30 },
// ];

const renderChart = fontSize => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function(parms) {
        var str =
          "处置率:" +
          parms[0].value+"%";
        return str;
      }
    },
    grid: {
      left: "3%",
      right: "15%",
      top: "3%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      show: false,
      type: "value",
      max: 46.04
    },
    yAxis: {
      type: "category",
      data: props.data.map(item => item.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#fff",
        fontSize
      }
    },
    series: [
      {
        type: "bar",
        data: props.data.map((item, index) => ({
          value: item.value,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: index % 2 === 0 ? "#408391" : "#8c8441" },
              { offset: 1, color: index % 2 === 0 ? "#71f4e3" : "#e6c443" }
            ])
          }
        })),
        barWidth: "20%"
      },
      {
        type: "bar",
        data: props.data.map(() => 100),
        barGap: "-100%",
        barWidth: "20%",
        itemStyle: {
          color: "rgba(255, 255, 255, 0.1)"
        },
        label: {
          show: true,
          position: "right",
          formatter: props.data.map(item => ({
            value: "212"
          })),
          color: "#fff",
          fontSize
        }
      }
    ]
  };
  mChart.setOption(option);
};
</script>
