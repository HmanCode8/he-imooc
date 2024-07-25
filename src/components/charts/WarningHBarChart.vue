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
  mChart.resize();
};


let bjlxChartData = {
  areaName: ["窨井", "管线", "终端用户", "阀门井", "燃气场站"],
  eventCount: [65, 99, 100, 30, 30]
};
let max = Math.max(...bjlxChartData.eventCount);
var maxArr = [];
for (var i = 0; i < bjlxChartData.eventCount.length; i++) {
  maxArr.push(max);
}

const renderChart = () => {
  const option = {
    // backgroundColor: "#07284d",
    grid: {
      left: "15%",
      top: "0%",
      right: "5%",
      bottom: "13%",
      containLabel: true
    },
    xAxis: [
      {
        show: false
      }
    ],
    yAxis: [
      {
        axisTick: "none",
        axisLine: "none",
        inverse: true,
        offset: "10",
        // max:100,
        axisLabel: {
          inside: true,
          textStyle: {
            color: "white",
            fontSize: 16,
            verticalAlign: "middle",
            align: "right",
            padding: [0, 10, 0, 0]
          },
          formatter: function (value) {
            return `{warnValue|}{value|${value}}`;
          },
          rich: {
            //这里的rich，下面有解释
            warnValue: {
              //这里的warnValue对应上面的标签名
              height: 60,
              width: 80,
              align: "left",
              color: "white",
              // backgroundColor: {
              //   image: tick //这个warnImg是上面定义的图片var warnImg = "img/warn.png";
              // }
            },
            value: {
              color: "white",
              fontSize: 12
            }
          }
        },
        data: bjlxChartData.areaName
      },
      {
        axisTick: "none",
        axisLine: "none",
        inverse: true,
        axisLabel: {
          textStyle: {
            color: "white",
            fontSize: 4,
            verticalAlign: "middle",
            padding: [0, -60, 0, 0],
            align: "right"
          },
          formatter: function (value, index) {
            return `{value|${value}%}`;
          },
          rich: {
            value: {
              align: "right",
              color: "white",
              marginLeft: 105,
              fontSize: 14
            }
          }
        },
        data: bjlxChartData.eventCount
      },
      {
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,0)"
          }
        },
        data: []
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        stack: "圆",
        yAxisIndex: 0,
        data: bjlxChartData.eventCount,
        barWidth: 2,
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#054B60" // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00FCFF" // 100% 处的颜色
                }
              ]
            },
            barBorderRadius: 2
          }
        },
        z: 2
      },
      {
        name: "XXX",
        type: "pictorialBar",
        symbol:
          "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABC1BMVEUA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7QA/7SO/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/86O/85K/8IT/7gM/7YP/7cs/7wB/7QH/7Vl/8cZ/7kA/7QH/7WJ/80C/7Qk/7st/7wM/7aO/84g/7oI/7Y8/78N/7aO/84E/7UA/7Q1/76O/84q/7wB/7QN/7Yp/7wD/7UB/7QR/7ct/7wa/7kg/7pr/8iO/86O/86O/86O/84A/7QAAAAmnbE7AAAAV3RSTlMAAwsQFBcYFhINBgkaDgIHGREFDwEKBAwIFRMHDRETEg8KAgsXGhkQAxUJBRgELnSThkT0riNl/rIb4U5CkhRUpTeIBs77OwFH9opI1PF6Q2NTIQgWDA6QHRcgAAAAAWJLR0RY7bXEjgAAAAd0SU1FB+ULEBQKJQdQcX4AAAITSURBVDjLbVRnY5swEBVmCMxhC2MgdrwdPJK46d5N2roJ3Stt/f//SXUnbFbeF3THk+54pwdjBWgN3TAtk9tOk90N14AcpteqM9ocQPiNptbSOm6AgdMtM7o6AA8LyaYtE1GR0jJAxJVtTQ7iqEDpgdmpVe/6RVIfuKZWx4PhaDyZzlQUgNhvdcBUlPlJorBYrijhA1cdRAJIjtU6ybE4pXIcPOLYEODj7DwpYUCNg8ASHRAo1+okqeBUVQuoMTpmVKUkiw2dYMmOLMDej7MX9y7uP3iYrce4twdtFoFZOObi0U7i8RMV4cd5smsXfLmaqeTTZzvCcxXOcY7Ql+I4h1IvXu4yvKJ4iPdF1gmgIVdTyr3eU3ZvKL5EiUAwHUJUmHJXB85bitfYKUDpnHcHznuKRzhvsGQ/qPZWNfkho1zfULjESQGX32XLVbqg5MdPivM5Vxrfa/IsiaHKfvkqGd++Z0KnNAb53VwKydhmP4EfP3/9zpYT3GzipXBIRDapzet8RhLiGDQBeLfTy+pIt7jVgBgfulQbx7EuU27JczR2qYBFErF0WaD8OSPjWqQwkYXy7na8Z8xTuqqGKqHuv5UZfHb7999gusnMI/2SO1o6Kaz5K+qBVXRqAGBrZQfGomJmFgoQeu7VVmwC+BV3M83HP4oeu2039PAvw49YHZFnHX4/wr6LQeg0Ar/v63G7VOU/Y9Ve2lDCOJ4AAAAASUVORK5CYII=",
        symbolSize: [20, 20],
        symbolPosition: "end",
        symbolOffset: [10, 0],
        z: 5,
        itemStyle: {
          normal: {
            color: "#fff"
          }
        },
        data: bjlxChartData.eventCount
      },
      {
        name: "背景",
        type: "bar",
        barWidth: 2,
        barGap: "-100%",
        data: maxArr,
        itemStyle: {
          normal: {
            color: "rgba(28, 128, 213, 0.19)",
            barBorderRadius: 2
          }
        }
      }
    ]
  };
  mChart.setOption(option);
};
</script>
