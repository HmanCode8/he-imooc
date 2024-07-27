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
  //管径分析
  // >1000mm\1000mm-600mm\600mm-300mm\300mm-75mm\<75mm）
  // 169km\691km\1139km\4627km\1834km
  diameterData: [
    {
      name: "燃气",
      data: [],
    },
    {
      name: "供水",
      data: [
        {
          name: ">1000mm",
          value: "169",
          unit: "km",
        },
        {
          name: "1000mm-600mm",
          value: "691",
          unit: "km",
        },
        {
          name: "600mm-300mm",
          value: "1139",
          unit: "km",
        },
        {
          name: "300mm-75mm",
          value: "4627",
          unit: "km",
        },
        {
          name: "<75mm",
          value: "1834",
          unit: "km",
        },
      ],
    },
    {
      name: "排水",
      data: [],
    },
    {
      name: "电力",
      data: [],
    },
    {
      name: "通讯",
      data: [],
    },
    {
      name: "热力",
      data: [],
    },
  ],
  // 管龄分析
  pipeAgeData: [
    {
      name: "燃气",
      data: [],
    },
    {
      name: "供水",
      data: [],
    },
    {
      name: "排水",
      data: [],
    },
    {
      name: "电力",
      data: [],
    },
    {
      name: "通讯",
      data: [],
    },
    {
      name: "热力",
      data: [],
    },
  ],
  //管材分析
  // 供水（球墨铸铁、灰口铸铁、塑料、钢筋混凝土、钢、镀锌、其它)
  // 169km\691km\1139km\4627km\1834km
  pipeTextureData: [
    {
      name: "燃气",
      data: [],
    },
    {
      name: "供水",
      data: [
        {
          name: "球墨铸铁",
          value: "169",
          unit: "km",
        },
        {
          name: "灰口铸铁",
          value: "691",
          unit: "km",
        },
        {
          name: "塑料",
          value: "1139",
          unit: "km",
        },
        {
          name: "钢筋混凝土",
          value: "4627",
          unit: "km",
        },
        {
          name: "钢",
          value: "1834",
          unit: "km",
        },
        {
          name: "镀锌",
          value: "0",
          unit: "km",
        },
        {
          name: "其它",
          value: "0",
          unit: "km",
        },
      ],
    },
    {
      name: "排水",
      data: [],
    },
    {
      name: "电力",
      data: [],
    },
    {
      name: "通讯",
      data: [],
    },
    {
      name: "热力",
      data: [],
    },
  ],
  naturalColumns: [
    { title: "区域", key: "area" },
    { title: "供气管道长度(km)", key: "length" },
    { title: "储气能力(万立方米)", key: "gas" },
    { title: "供气总量合计(万立方米)", key: "total" },
    { title: "用气户数(户)", key: "home" },
    { title: "用气人口(万人)", key: "user" },
    { title: "汽车加气站(座)", key: "natural" },
  ],
  liquefiedColumns: [
    { title: "区域", key: "area" },
    { title: "供气管道长度(公里)", key: "length" },
    { title: "储气能力(吨)", key: "gas" },
    { title: "供气总量合计(吨)", key: "total" },
    { title: "用气户数(户)", key: "home" },
    { title: "用气人口(万人)", key: "user" },
    { title: "汽车加气站(座)", key: "natural" },
  ],

  naturalTableData: [
    {
      area: "盐城市",
      length: 3242,
      gas: 60,
      total: 28932,
      home: 506070,
      user: 132,
      natural: 5,
    },
    {
      area: "东台市",
      length: 505,
      gas: 10,
      total: 5653,
      home: 82960,
      user: 29,
      natural: 2,
    },
    {
      area: "响水县",
      length: 108,
      gas: 15,
      total: 1081,
      home: 33052,
      user: 12,
      natural: 1,
    },
    {
      area: "滨海县",
      length: 204,
      gas: 35,
      total: 3011,
      home: 60183,
      user: 24,
      natural: 0,
    },
    {
      area: "阜宁县",
      length: 237,
      gas: 46,
      total: 3488,
      home: 62381,
      user: 19,
      natural: 2,
    },
    {
      area: "射阳县",
      length: 339,
      gas: 7,
      total: 2893,
      home: 63256,
      user: 20,
      natural: 2,
    },
    {
      area: "建湖县",
      length: 625,
      gas: 1,
      total: 4600,
      home: 81330,
      user: 16,
      natural: 3,
    },
    {
      area: "市+县城合计",
      length: 5259,
      gas: 174,
      total: 49658,
      home: 889232,
      user: 251,
      natural: 15,
    },
  ],
  liquefiedTableData: [
    {
      area: "盐城市",
      length: 82,
      gas: 1369,
      total: 28821,
      home: 93457,
      user: 14,
      natural: 1,
    },
    {
      area: "东台市",
      length: 0,
      gas: 120,
      total: 2543,
      home: 23029,
      user: 8,
      natural: 0,
    },
    {
      area: "响水县",
      length: 0,
      gas: 50,
      total: 3600,
      home: 31607,
      user: 1,
      natural: 0,
    },
    {
      area: "滨海县",
      length: 0,
      gas: 237,
      total: 2465,
      home: 37862,
      user: 3,
      natural: 0,
    },
    {
      area: "阜宁县",
      length: 0,
      gas: 1335,
      total: 11255,
      home: 82700,
      user: 12,
      natural: 1,
    },
    {
      area: "射阳县",
      length: 0,
      gas: 1064,
      total: 2915,
      home: 14311,
      user: 6,
      natural: 0,
    },
    {
      area: "建湖县",
      length: 0,
      gas: 687,
      total: 6948,
      home: 50100,
      user: 8,
      natural: 0,
    },
    {
      area: "市+县城合计",
      length: 82,
      gas: 4862,
      total: 58547,
      home: 333066,
      user: 52,
      natural: 2,
    },
  ],
  roadData: [
    {
      name: "道路",
      value: "131",
      unit: "条",
    },
    {
      name: "公里数",
      value: "3204",
      unit: "km",
    },
    {
      name: "路灯",
      value: "53905",
      unit: "个",
    },
    {
      name: "总功率",
      value: "19003.694",
      unit: "瓦",
    },
  ],
  // 主干路、次干路、支路、快速路、街坊路、境内公路
  // 1450km\765km\504km\263km\197km\24km
  typeAlysisData: [
    {
      name: "主干路",
      value: "1450",
      unit: "km",
    },
    {
      name: "次干路",
      value: "765",
      unit: "km",
    },
    {
      name: "支路",
      value: "504",
      unit: "km",
    },
    {
      name: "快速路",
      value: "263",
      unit: "km",
    },
    {
      name: "街坊路",
      value: "197",
      unit: "km",
    },
    {
      name: "境内公路",
      value: "24",
      unit: "km",
    },
  ],
  densityData: [
    { name: "亭湖区", value: "255", unit: "%" },
    { name: "盐都区", value: "233", unit: "%" },
    { name: "大丰区", value: "230", unit: "%" },
    { name: "建湖县", value: "169", unit: "%" },
    { name: "射阳县", value: "157", unit: "%" },
    { name: "阜宁县", value: "185", unit: "%" },
    { name: "滨海县", value: "128", unit: "%" },
    { name: "响水县", value: "144", unit: "%" },
    { name: "东台市", value: "222", unit: "%" },
  ],
  bridgeData: [
    {
      name: "桥梁",
      value: "850",
      unit: "座",
    },
    {
      name: "视频监控",
      value: "18",
      unit: "个",
    },
    {
      name: "特大桥",
      value: "1",
      unit: "座",
    },
    {
      name: "特殊结构桥梁",
      value: "36",
      unit: "座",
    },
  ],
  bridgeColumns: [
    { title: "区域", key: "area" },
    { title: "底数(座)", key: "base" },
    { title: "养护类别I类(座)", key: "typeI" },
    { title: "养护类别II类(座)", key: "typeII" },
    { title: "养护类别III类(座)", key: "typeIII" },
    { title: "养护类别IV类(座)", key: "typeIV" },
    { title: "养护类别V类(座)", key: "typeV" },
  ],
  bridgeTableData: [
    {
      area: "市直",
      base: 207,
      typeI: 2,
      typeII: 78,
      typeIII: 67,
      typeIV: 28,
      typeV: 32,
    },
    {
      area: "盐都区",
      base: 69,
      typeI: 0,
      typeII: 0,
      typeIII: 43,
      typeIV: 9,
      typeV: 17,
    },
    {
      area: "亭湖区",
      base: 34,
      typeI: 1,
      typeII: 17,
      typeIII: 12,
      typeIV: 4,
      typeV: 0,
    },
    {
      area: "大丰区",
      base: 66,
      typeI: 0,
      typeII: 24,
      typeIII: 39,
      typeIV: 3,
      typeV: 0,
    },
    {
      area: "开发区",
      base: 43,
      typeI: 1,
      typeII: 3,
      typeIII: 7,
      typeIV: 31,
      typeV: 1,
    },
    {
      area: "城南新区",
      base: 167,
      typeI: 0,
      typeII: 1,
      typeIII: 44,
      typeIV: 117,
      typeV: 5,
    },
    {
      area: "建湖县",
      base: 46,
      typeI: 0,
      typeII: 0,
      typeIII: 1,
      typeIV: 45,
      typeV: 0,
    },
    {
      area: "射阳县",
      base: 18,
      typeI: 0,
      typeII: 0,
      typeIII: 16,
      typeIV: 1,
      typeV: 1,
    },
    {
      area: "阜宁县",
      base: 25,
      typeI: 2,
      typeII: 0,
      typeIII: 23,
      typeIV: 0,
      typeV: 0,
    },
    {
      area: "滨海县",
      base: 19,
      typeI: 0,
      typeII: 0,
      typeIII: 12,
      typeIV: 7,
      typeV: 0,
    },
    {
      area: "响水县",
      base: 16,
      typeI: 0,
      typeII: 0,
      typeIII: 9,
      typeIV: 7,
      typeV: 0,
    },
    {
      area: "东台市",
      base: 140,
      typeI: 4,
      typeII: 0,
      typeIII: 86,
      typeIV: 31,
      typeV: 19,
    },
    {
      area: "合计",
      base: 850,
      typeI: 10,
      typeII: 123,
      typeIII: 359,
      typeIV: 283,
      typeV: 75,
    },
  ],
};

//项目管理
const projectManageData = {
  overviewData: [
    {
      projectNum: {
        name: "项目总数",
        value: 534,
        unit: "个",
      },
      children: [
        {
          name: "较去年",
          value: "140",
          unit: "个",
        },
        {
          name: "同比",
          value: "35",
          unit: "%",
        },
        {
          name: "工业数量",
          value: null,
          unit: null,
        },
        {
          name: "占比",
          value: null,
          unit: null,
        },
      ],
    },
    {
      projectNum: {
        name: "项目总投资",
        value: 2280.65,
        unit: "亿元",
      },
      children: [
        {
          name: "较去年",
          value: 31,
          unit: "亿元",
        },
        {
          name: "同比",
          value: "1.38",
          unit: "%",
        },
        {
          name: "工业项目投资额度",
          value: "1.38",
          unit: "%",
        },
        {
          name: "占比",
          value: 47.84,
          unit: "%",
        },
      ],
    },
  ],
  strategicIndustry: [
    {
      name: "绿色低碳产业",
      children: [
        {
          name: "数量",
          value: 106,
          unit: "个",
        },
        {
          name: "投资",
          value: 604.2,
          unit: "亿元",
        },
      ],
    },
    {
      name: "新一代信息技术产业",
      children: [
        {
          name: "数量",
          value: 42,
          unit: "个",
        },
        {
          name: "投资",
          value: 106.8,
          unit: "亿元",
        },
      ],
    },
    {
      name: "新材料产业",
      children: [
        {
          name: "数量",
          value: 37,
          unit: "个",
        },
        {
          name: "投资",
          value: 116.6,
          unit: "亿元",
        },
      ],
    },
    {
      name: "高端装备产业",
      children: [
        {
          name: "数量",
          value: 73,
          unit: "个",
        },
        {
          name: "投资",
          value: 146.9,
          unit: "亿元",
        },
      ],
    },
    {
      name: "大健康产业",
      children: [
        {
          name: "数量",
          value: 4,
          unit: "个",
        },
        {
          name: "投资",
          value: 11.2,
          unit: "亿元",
        },
      ],
    },
  ],
  projectSize: [
    {
      name: "0-100万",
      value: null,
    },
    {
      name: "100-500万",
      value: null,
    },
    {
      name: "500-1000万",
      value: null,
    },
    {
      name: "1000万以上",
      value: null,
    },
  ],
  projectDistribution: {
    titles: [
      "县区",
      "在建项目/个",
      "已完成项目/个"
    ],
    tableData: [
      {
        name: "盐都区",
        construction: 86,
        completion: null,
      },
      {
        name: "阜宁县",
        construction: 45,
        completion: null,
      },
      {
        name: "滨海县",
        construction: 132,
        completion: null,
      },
      {
        name: "东台市",
        construction: 73,
        completion: null,
      },
      {
        name: "盐都区",
        construction: 86,
        completion: null,
      },
      {
        name: "阜宁县",
        construction: 45,
        completion: null,
      },
      {
        name: "滨海县",
        construction: 132,
        completion: null,
      },
      {
        name: "东台市",
        construction: 73,
        completion: null,
      },
      {
        name: "盐都区",
        construction: 86,
        completion: null,
      },
      {
        name: "阜宁县",
        construction: 45,
        completion: null,
      },
      {
        name: "滨海县",
        construction: 132,
        completion: null,
      },
      {
        name: "东台市",
        construction: 73,
        completion: null,
      }],
  },
  projectSituation: [
    {
      name: "项目总数",
      value: 926,
      unit: "个",
    },
    {
      name: "市在建",
      value: 25,
      unit: "个",
    },
    {
      name: "区在建",
      value: 465,
      unit: "个",
    },
    {
      name: "县在建",
      value: 436,
      unit: "个",
    },
  ],
  areaConstruction: [
    {
      name: "市级",
      value: 25,
    },
    {
      name: "盐都区",
      value: 58,
    },
    {
      name: "亭湖区",
      value: 63,
    },
    {
      name: "大丰区",
      value: 90,
    },
    {
      name: "盐城经济技术开发区",
      value: 48,
    },
    {
      name: "盐南高新技术产业开发区",
      value: 66,
    },
    {
      name: "东台市",
      value: 140,
    },
    {
      name: "建湖县",
      value: 26,
    },
    {
      name: "射阳县",
      value: 111,
    },
    {
      name: "阜宁县",
      value: 139,
    },
    {
      name: "滨海县",
      value: 119,
    },
    {
      name: "响水县",
      value: 41,
    },
  ],
};

//运行监测
const runningMonitoringData = {
  name: "运行监测",
  internetDevices: [
    {
      name: "物联网设备",
      value: 7575,
      unit: "台",
    },
    {
      name: "在线设备",
      value: 7430,
      unit: "台",
    },
    {
      name: "在线率",
      value: 98.09,
      unit: "%",
    },
  ],
  analyDeatailData: [
    {
      name: "燃气",
      onLine: 1000,
      offLine: 2,
      total: 1002,
    },
    {
      name: "供水",
      onLine: 285,
      offLine: 10,
      total: 295,
    },
    {
      name: "雨水",
      onLine: 220,
      offLine: 17,
      total: 237,
    },
    {
      name: "污水",
      onLine: 624,
      offLine: 30,
      total: 654,
    },
    {
      name: "桥梁",
      onLine: 636,
      offLine: 36,
      total: 669,
    },
    {
      name: "道路",
      onLine: 2,
      offLine: 0,
      total: 2,
    },
    {
      name: "第三方施工破坏",
      onLine: 45,
      offLine: 3,
      total: 48,
    },
    {
      name: "路灯",
      onLine: 4618,
      offLine: 50,
      total: 4668,
    },
  ],
  monitorData: [
    {
      name: "总数",
      layRates: [
        { name: "覆盖率", value: 96.28, unit: "%" },
        { name: "设备总数", value: 7575, unit: "台" },
        { name: "在线率", value: 98.09, unit: "%" },
      ],
      sensorData: [
        { name: "单灯控制器", value: 3200, unit: "台" },
        { name: "可燃气体探测器", value: 1002, unit: "台" },
        { name: "“三遥”监控终端", value: 838, unit: "台" },
        { name: "COD传感器", value: 396, unit: "台" },
        { name: "振弦式应变传感器", value: 248, unit: "台" },
      ],
      coverageData: [
        { name: "亭湖区", value: 98.12, unit: "%" },
        { name: "盐都区", value: 99.24, unit: "%" },
        { name: "大丰区", value: 97.56, unit: "%" },
        { name: "建湖县", value: 98.99, unit: "%" },
        { name: "阜宁县", value: 86.17, unit: "%" },
        { name: "滨海县", value: 81.23, unit: "%" },
        { name: "响水县", value: 94.22, unit: "%" },
        { name: "东台市", value: 95.14, unit: "%" },
      ],
    },
    {
      name: "燃气",
      layRates: [
        { name: "覆盖率", value: 96.44, unit: "%" },
        { name: "设备总数", value: 654, unit: "台" },
        { name: "在线率", value: 95.01, unit: "%" },
      ],
      sensorData: [
        { name: "可燃气体探测器", value: 1002, unit: "台" },
        { name: "视频监控", value: null, unit: null },
        { name: "燃气压力设备", value: null, unit: null },
        { name: "流量计", value: null, unit: null },
      ],
      coverageData: [],
    },
    {
      name: "污水",
      layRates: [
        { name: "覆盖率", value: 96.44, unit: "%" },
        { name: "设备总数", value: 654, unit: "台" },
        { name: "在线率", value: 95.01, unit: "%" },
      ],
      sensorData: [
        { name: "COD传感器", value: 396, unit: "台" },
        { name: "浊度仪", value: 195, unit: "台" },
        { name: "电子水尺", value: 34, unit: "台" },
        { name: "水质温度传感器", value: 49, unit: "台" },
        { name: "水位计", value: 10, unit: "台" },
      ],
      coverageData: [],
    },
    {
      name: "供水",
      layRates: [
        { name: "覆盖率", value: 95.41, unit: "%" },
        { name: "设备总数", value: 295, unit: "台" },
        { name: "在线率", value: 98.24, unit: "%" },
      ],
      sensorData: [
        { name: "压力计", value: "83 80+3", unit: "台" },
        { name: "流量计", value: 46, unit: "台" },
        { name: "噪声监测仪", value: "103 90+13", unit: "台" },
        { name: "水质温度仪", value: "23 22+1", unit: "台" },
        { name: "智能消火栓", value: "20 0+20", unit: "台" },
        { name: "智能井盖", value: "11 无现状", unit: "台" },
      ],
      coverageData: [],
    },
    {
      name: "桥梁",
      layRates: [
        { name: "覆盖率", value: 94.17, unit: "%" },
        { name: "设备总数", value: 669, unit: "台" },
        { name: "在线率", value: 96.22, unit: "%" },
      ],
      sensorData: [
        { name: "温湿度计", value: 11, unit: "台" },
        { name: "超声波风速风向仪", value: 3, unit: "台" },
        { name: "动态称重系统", value: 24, unit: "台" },
        { name: "振弦式应变传感器", value: 248, unit: "台" },
        { name: "电阻应变计", value: 13, unit: "台" },
        { name: "三向加速度计", value: 3, unit: "台" },
        { name: "变形监测传感器", value: 33, unit: "台" },
        { name: "位移计", value: 48, unit: "台" },
        { name: "加速度传感器", value: 124, unit: "台" },
        { name: "裂缝计", value: 130, unit: "台" },
        { name: "高温球机", value: 28, unit: "台" },
      ],
      coverageData: [],
    },

    {
      name: "雨水",
      layRates: [
        { name: "覆盖率", value: "96.90", unit: "%" },
        { name: "设备总数", value: 237, unit: "台" },
        { name: "在线率", value: "92.82", unit: "%" },
      ],
      sensorData: [
        { name: "电子水尺", value: 34, unit: "台" },
        { name: "压力计", value: 44, unit: "台" },
        { name: "液位计", value: 41, unit: "台" },
        { name: "流量计", value: 138, unit: "台" },
      ],
      coverageData: [
        { name: "亭湖区", value: "89.22", unit: "%" },
        { name: "盐都区", value: "99.12", unit: "%" },
        { name: "大丰区", value: "82.11", unit: "%" },
        { name: "建湖县", value: "94.19", unit: "%" },
        { name: "阜宁县", value: "97.12", unit: "%" },
        { name: "滨海县", value: "100.00", unit: "%" },
        { name: "响水县", value: "100.00", unit: "%" },
        { name: "东台市", value: "89.55", unit: "%" },
      ],
    },
    {
      name: "道路",
      layRates: [
        { name: "覆盖率", value: 94.47, unit: "%" },
        { name: "设备总数", value: 2, unit: "台" },
        { name: "在线率", value: 100, unit: "%" },
      ],
      sensorData: [
        { name: "探地雷达", value: "1", unit: "台" },
        { name: "路政AI巡检", value: "1", unit: "台" },
      ],
      coverageData: [],
    },
    {
      name: "第三方施工破坏",
      layRates: [
        { name: "覆盖率", value: 97.32, unit: "%" },
        { name: "设备总数", value: 49, unit: "台" },
        { name: "在线率", value: 96.14, unit: "%" },
      ],
      sensorData: [
        { name: "光纤传感设备", value: "1", unit: "台" },
        { name: "光纤感知终端分析系统", value: null, unit: null },
        { name: "摄像头", value: 28, unit: "台" },
        { name: "精密水准仪", value: 18, unit: "台" },
        { name: "全站仪", value: 1, unit: "台" },
      ],
      coverageData: [],
    },
    {
      name: "路灯",
      layRates: [
        { name: "覆盖率", value: 99.12, unit: "%" },
        { name: "设备总数", value: 4668, unit: "台" },
        { name: "在线率", value: 98.43, unit: "%" },
      ],
      sensorData: [
        { name: "“三遥”监控终端", value: 838, unit: "台" },
        { name: "单灯控制器", value: 3200, unit: "台" },
        { name: "漏电设备", value: "210", unit: "台" },
        { name: "门禁系统设备", value: "210", unit: "台" },
        { name: "除湿设备", value: "210", unit: "台" },
      ],
      coverageData: [],
    },
  ],
  profileData: [
    {
      name: "数据总量",
      total: 34517,
      description: "较昨日",
      key: "down",
      change: "-4.5",
      unit: "%",
    },
    {
      name: "报警总数",
      total: 8,
      description: "较昨日",
      key: "down",
      change: "-6.56",
      unit: "%",
    },
    {
      name: "报警准确率",
      total: "97.66",
      description: "较昨日",
      key: "up",
      change: "1.10",
      unit: "%",
    },
  ],
  alarmData: [
    {
      name: "燃气报警",
      children: [
        { name: "终端用户", value: 2, unit: "次" },
        { name: "燃气场站", value: 1, unit: "次" },
        { name: "窨井", value: 0, unit: "次" },
      ],
    },
    {
      name: "供水报警",
      children: [
        { name: "二次泵房", value: 1, unit: "次" },
        { name: "供水场站", value: 0, unit: "次" },
        { name: "供水泵站", value: 0, unit: "次" },
      ],
    },
    {
      name: "排水报警",
      children: [
        { name: "污水管网", value: 10, unit: "次" },
        { name: "雨水管网", value: 4, unit: "次" },
        { name: "污水泵站", value: 9, unit: "次" },
      ],
    },
    {
      name: "综合报警",
      children: [
        { name: "管线间距不足", value: 16, unit: "次" },
        { name: "建筑物占压", value: 8, unit: "次" },
        { name: "交叉穿越", value: 12, unit: "次" },
      ],
    },
    {
      name: "道路报警",
      children: [
        { name: "沉降报警", value: 0, unit: "次" },
        { name: "裂缝报警", value: 0, unit: "次" },
        { name: "地下空洞", value: 0, unit: "次" },
      ],
    },
    {
      name: "第三方施工报警",
      children: [
        { name: "三破光纤震动", value: 4, unit: "次" },
        { name: "视频监控", value: 0, unit: "次" },
        { name: "三破光纤震动-小型机械施", value: 2, unit: "次" },
      ],
    },
    {
      name: "桥梁报警",
      children: [
        { name: "位移报警", value: 0, unit: "次" },
        { name: "挠度报警", value: 0, unit: "次" },
        { name: "裂缝报警", value: 0, unit: "次" },
      ],
    },
    {
      name: "路灯报警",
      children: [
        { name: "漏电监测", value: 0, unit: "次" },
        { name: "故障监测", value: 0, unit: "次" },
      ],
    },
  ],
};

export {
  overviewData,
  basicFacilitiesData,
  runningMonitoringData,
  projectManageData,
};
