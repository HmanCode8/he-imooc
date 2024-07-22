<template>
  <div ref="target" v-resize-ob="handleResize" class="w-40 h-20"></div>
</template>

<script setup>
import { h, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import "echarts-gl";
import "echarts-liquidfill";
import { Label } from "cesium";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  liquidData: {
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
    title: {
          text: props.liquidData.name,
          textStyle: {
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.7)",
            rich: {
              a: {
                fontSize: 30,
              },
            },
          },
          x: "center",
          y: "60%",
        },
    series: [
      {
        type: "liquidFill",
        radius: "100%",
        data: [props.liquidData.number],
        color: [props.liquidData.color],
        label: {
            normal: {
                textStyle: {
                    fontSize:28,       // 字体大小
                    color: '#fff',   // 字体颜色
                    fontFamily: 'Arial',// 字体系列
                    fontWeight: 'bold', // 字体粗细
                    textShadowColor: 'rgba(0, 0, 0, 0.5)', // 文字阴影颜色
                    textShadowBlur: 10  // 文字阴影模糊半径
                },
                formatter: function(param) {
                    return (param.value * 100).toFixed(2);  // 格式化数值
                }
            }
        },
        

        backgroundStyle: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0,24,55, 0)"
              },
              {
                offset: 0.75,
                color: "rgba(0,24,55, 0)"
              },
              {
                offset: 1,
                color: props.liquidData.color
              }
            ],
            globalCoord: false
          }
        },

        outline: {
          borderDistance: 0,
          itemStyle: {
            borderWidth: 0,
            borderColor: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(50,115,256, 1)"
                },
                {
                  offset: 0.5,
                  color: "rgba(50,115,233, .75)"
                },
                {
                  offset: 1,
                  color: props.liquidData.color
                }
              ],
              globalCoord: false
            }
          }
        }
      }
    ]
  };
  mChart.setOption(option);
};
</script>
