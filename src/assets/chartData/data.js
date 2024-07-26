// 1.	总览
// 2.	基础设施
// 3.	项目管理
// 4.	运维管养
// 5.	运行监测
// 6.	预警处置

const overviewData = {
  basicOverview: [
    {
      name: "示范区",
      value: "169",
    },
    {
      name: "建成区",
      value: "108",
    },
  ],
  basicData: [
    {
      name: "管线",
      value: "30763",
      unit: "km",
      source: "2",
    },
    {
      name: "道路",
      value: "3204",
      unit: "km",
      source: "3",
    },
    {
      name: "场站",
      value: "850",
      unit: "座",
      source: "4",
    },
    {
      name: "设备",
      value: "534",
      unit: "个",
      source: "5",
    },
    {
      name: "项目",
      value: "1",
      unit: "个",
      source: "6",
    },
    {
      name: "路灯",
      value: "53905",
      unit: "个",
      source: "7",
    },
  ],
  inspectionData: [
    "燃气",
    "供水",
    "污水",
    "雨水",
    "道路",
    "桥梁",
    "第三方施工",
    "综合管线",
    "路灯",
  ],
  inspectionDetails: [
    {
      name: "燃气",
      children: [
        {
          name: "燃气管网巡检完成率",
          value: 1,
        },
        {
          name: "燃气场站巡检完成率",
          value: 1,
        },
      ],
    },
    {
      name: "供水",
      children: [
        {
          name: "供水取水口巡检完成率",
          value: null,
        },
        {
          name: "供水水厂巡检完成率",
          value: null,
        },
      ],
    },
    {
      name: "雨水",
      children: [
        {
          name: "雨水易涝点梳理",
          value: null,
        },
        {
          name: "雨水管网巡检完成率",
          value: null,
        },
      ],
    },
    {
      name: "污水",
      children: [
        {
          name: "污水水质达标率",
          value: null,
        },
        {
          name: "污水管网巡检完成率",
          value: null,
        },
      ],
    },
    {
      name: "道路",
      children: [
        {
          name: "道路巡检计划完成率",
          value: null,
        },
        {
          name: "道路养护计划完成率",
          value: null,
        },
      ],
    },
    {
      name: "桥梁",
      children: [
        {
          name: "桥梁定期检查完成率",
          value: null,
        },
        {
          name: "桥梁养护维修完成率",
          value: null,
        },
      ],
    },
    {
      name: "三破",
      children: [
        {
          name: "三破巡检巡查完成率",
          value: null,
        },
        {
          name: "三破四方交底完成率",
          value: null,
        },
      ],
    },
    {
      name: "综合管线",
      children: [
        {
          name: "地下管线交互风险数",
          value: null,
        },
        {
          name: "交互风险整改完成率",
          value: null,
        },
      ],
    },
    {
      name: "路灯",
      children: [
        {
          name: "路灯计划巡检率",
          value: null,
        },
        {
          name: "路灯巡检完成率",
          value: null,
        },
      ],
    },
  ],
  operatingData: [
    {
      name: "燃气",
      value: null, // 这里需要填入实际数据
    },
    {
      name: "污水",
      value: null, // 这里需要填入实际数据
    },
    {
      name: "雨水",
      value: null, // 这里需要填入实际数据
    },
    {
      name: "供水",
      value: null, // 这里需要填入实际数据
    },
  ],
};

//基础设施
const basicFacilitiesData = {
  name: "基础设施",
  facilities: [
    {
      name: "燃气",
      children: [
        {
          name: "管线",
          value: "5259",
          unit: "km",
        },
        {
          name: "管点",
          value: null,
          unit: null,
        },
      ],
    },
    {
      name: "供水",
      children: [
        {
          name: "管线",
          value: "9460",
          unit: "km",
        },
        {
          name: "管点",
          value: null,
          unit: null,
        },
      ],
    },
    {
      name: "排水",
      children: [
        {
          name: "管线",
          value: "6854",
          unit: "km",
        },
        {
          name: "管点",
          value: null,
          unit: null,
        },
      ],
    },
    {
      name: "电力",
      children: [
        {
          name: "管线",
          value: null,
          unit: null,
        },
        {
          name: "管点",
          value: null,
          unit: null,
        },
      ],
    },
    {
      name: "通讯",
      children: [
        {
          name: "管线",
          value: null,
          unit: null,
        },
        {
          name: "管点",
          value: null,
          unit: null,
        },
      ],
    },
    {
      name: "热力",
      children: [
        {
          name: "管线",
          value: null,
          unit: null,
        },
        {
          name: "管点",
          value: null,
          unit: null,
        },
      ],
    },
  ],
};

export { overviewData, basicFacilitiesData };
