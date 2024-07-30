// 1.	总览
// 2.	基础设施
// 3.	项目管理
// 4.	运维管养
// 5.	运行监测
// 6.	预警处置

// 总览
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
      source: 3,
    },
    {
      name: "道路",
      value: "3204",
      unit: "km",
      source: 2,
    },
    {
      name: "场站",
      value: "135",
      unit: "个",
      source: 8,
    },
    {
      name: "桥梁",
      value: "850",
      unit: "座",
      source: 5,
    },
    {
      name: "设备",
      value: "7575",
      unit: "个",
      source: 6,
    },
    {
      name: "项目",
      value: "534",
      unit: "个",
      source: 7,
    },
    {
      name: "路灯",
      value: "53905",
      unit: "个",
      source: 4,
    },
  ],
  combinedData: [
    {
      name: "燃气",
      completed: 270,
      planned: 270,
      rate: 100,
      unit: "%",
    },
    {
      name: "供水",
      completed: 140,
      planned: 152,
      rate: 92,
      unit: "%",
    },
    {
      name: "雨水",
      completed: 104,
      planned: 105,
      rate: 99,
      unit: "%",
    },
    {
      name: "污水",
      completed: 175,
      planned: 182,
      rate: 96,
      unit: "%",
    },
    {
      name: "道路",
      completed: 206,
      planned: 216,
      rate: 95,
      unit: "%",
    },
    {
      name: "桥梁",
      completed: 83,
      planned: 83,
      rate: 100,
      unit: "%",
    },
    {
      name: "第三方施工",
      completed: 172,
      planned: 180,
      rate: 95,
      unit: "%",
    },
    {
      name: "路灯",
      completed: 216,
      planned: 230,
      rate: 94,
      unit: "%",
    },
  ],
  inspectionDetails: [
    {
      name: "燃气",
      iconIndex: 8,
      children: [
        {
          name: "燃气管网巡检完成率",
          value: 100,
          unit: "%",
        },
        {
          name: "燃气场站巡检完成率",
          value: 100,
          unit: "%",
        },
      ],
    },
    {
      name: "供水",
      iconIndex: 1,
      children: [
        {
          name: "供水取水口巡检完成率",
          value: 95,
          unit: "%",
        },
        {
          name: "供水厂巡检完成率",
          value: 96,
          unit: "%",
        },
      ],
    },
    {
      name: "雨水",
      iconIndex: 2,
      children: [
        {
          name: "雨水易涝点梳理",
          value: 32,
          unit: "个",
        },
        {
          name: "雨水管网巡检完成率",
          value: 99,
          unit: "%",
        },
      ],
    },
    {
      name: "污水",
      iconIndex: 9,
      children: [
        {
          name: "污水水质达标率",
          value: 94,
          unit: "%",
        },
        {
          name: "污水管网巡检完成率",
          value: 96,
          unit: "%",
        },
      ],
    },
    {
      name: "道路",
      iconIndex: 3,
      children: [
        {
          name: "道路巡检计划完成率",
          value: 95,
          unit: "%",
        },
        {
          name: "道路养护计划完成率",
          value: 100,
          unit: "%",
        },
      ],
    },
    {
      name: "桥梁",
      iconIndex: 4,
      children: [
        {
          name: "桥梁定期检查完成率",
          value: 100,
          unit: "%",
        },
        {
          name: "桥梁养护维修完成率",
          value: 100,
          unit: "%",
        },
      ],
    },
    {
      name: "三破",
      iconIndex: 5,
      children: [
        {
          name: "三破巡检计划完成率",
          value: 94,
          unit: "%",
        },
        {
          name: "三破四方交汇处完成率",
          value: 96,
          unit: "%",
        },
      ],
    },
    {
      name: "综合管线",
      iconIndex: 6,
      children: [
        {
          name: "地下管线交互风险数",
          value: 36,
          unit: "个",
        },
        {
          name: "交互风险整改完成率",
          value: 95,
          unit: "%",
        },
      ],
    },
    {
      name: "路灯",
      iconIndex: 7,
      children: [
        {
          name: "路灯计划巡检率",
          value: 100,
          unit: "%",
        },
        {
          name: "路灯巡检完成率",
          value: 94,
          unit: "%",
        },
      ],
    },
  ],
  oldRenovation: [
    {
      name: "燃气",
      value: 100,
      unit: "%",
    },
    {
      name: "污水",
      value: 100,
      unit: "%",
    },
    {
      name: "雨水",
      value: 100,
      unit: "%",
    },
    {
      name: "供水",
      value: 100,
      unit: "%",
    },
  ],
  riskTotalData: {
    name: "风险总数",
    total: 58,
    unit: "件",
    high: 4,
    medium: 15,
    low: 39,
    data: [
      {
        name: "待处置",
        value: 6,
        unit: "件",
      },
      {
        name: "处理中",
        value: 4,
        unit: "件",
      },
      {
        name: "已完成",
        value: 43,
        unit: "件",
      },
      {
        name: "已逾期",
        value: 5,
        unit: "件",
      },
    ],
  },
  hideTotalData: {
    name: "隐患总数",
    total: 42,
    unit: "件",
    high: 4,
    medium: 10,
    low: 28,
    data: [
      {
        name: "待处置",
        value: 3,
        unit: "件",
      },
      {
        name: "处理中",
        value: 2,
        unit: "件",
      },
      {
        name: "已完成",
        value: 23,
        unit: "件",
      },
      {
        name: "已逾期",
        value: 0,
        unit: "件",
      },
    ],
  },
  warningColumns: [
    { title: "类型", key: "type" },
    { title: "报警数(次)", key: "warningNum" },
    { title: "已核查(件)", key: "checkedNum" },
    { title: "已签收(件)", key: "signedNum" },
    { title: "已办结(件)", key: "completedNum" },
  ],
  warningTableData: [
    {
      type: "燃气报警",
      warningNum: 39,
      checkedNum: 2,
      signedNum: 2,
      completedNum: 29,
    },
    {
      type: "供水报警",
      warningNum: 64,
      checkedNum: 3,
      signedNum: 2,
      completedNum: 20,
    },
    {
      type: "雨水报警",
      warningNum: 74,
      checkedNum: 3,
      signedNum: 1,
      completedNum: 23,
    },
    {
      type: "污水报警",
      warningNum: 55,
      checkedNum: 4,
      signedNum: 2,
      completedNum: 10,
    },
    {
      type: "道路报警",
      warningNum: 39,
      checkedNum: 1,
      signedNum: 3,
      completedNum: 9,
    },
    {
      type: "桥梁报警",
      warningNum: 29,
      checkedNum: 0,
      signedNum: 3,
      completedNum: 10,
    },
  ],
  deviceData: [
    {
      name: "已核查",
      value: 13,
      unit: "件",
      change: "up",
      percent: "2.15%",
    },
    {
      name: "已签收",
      value: 13,
      unit: "件",
      change: "up",
      percent: "0.00%",
    },
    {
      name: "已核查",
      value: 101,
      unit: "件",
      change: "up",
      percent: "5.28%",
    },
  ],
};

//基础设施
const basicFacilitiesData = {
  name: "基础设施",
  totleSize: [
    {
      name: "管线总长",
      value: 30563,
      unit: "km",
    },
    {
      name: "管点总数",
      value: 1098433,
      unit: "个",
    },
  ],
  facilities: [
    {
      name: "燃气",
      iconIndex: 1,
      children: [
        {
          name: "管线",
          value: 5259,
          unit: "km",
        },
        {
          name: "管点",
          value: 21626,
          unit: "个",
        },
      ],
    },
    {
      name: "供水",
      iconIndex: 3,
      children: [
        {
          name: "管线",
          value: "9460",
          unit: "km",
        },
        {
          name: "管点",
          value: 86317,
          unit: "个",
        },
      ],
    },
    {
      name: "排水",
      iconIndex: 5,
      children: [
        {
          name: "管线",
          value: "6854",
          unit: "km",
        },
        {
          name: "管点",
          value: 240205,
          unit: "个",
        },
      ],
    },
    {
      name: "电力",
      iconIndex: 2,
      children: [
        {
          name: "管线",
          value: 6625.61,
          unit: "km",
        },
        {
          name: "管点",
          value: 399934,
          unit: "个",
        },
      ],
    },
    {
      name: "通讯",
      iconIndex: 4,
      children: [
        {
          name: "管线",
          value: 2362.02,
          unit: "km",
        },
        {
          name: "管点",
          value: 349987,
          unit: "个",
        },
      ],
    },
    {
      name: "热力",
      iconIndex: 2,
      children: [
        {
          name: "管线",
          value: 2.37,
          unit: "km",
        },
        {
          name: "管点",
          value: 164,
          unit: "个",
        },
      ],
    },
  ],
  stationData: [
    {
      name: "供水气场站",
      key: "supply",
      data: [
        { name: "水厂", value: 18, unit: "座" },
        { name: "增压泵站", value: 13, unit: "座" },
        { name: "二次供水设施", value: 1055, unit: "个" },
        { name: "市政消火栓", value: 9566, unit: "个" },
      ],
    },
    {
      name: "排水场站",
      key: "drainage",
      data: [
        { name: "排涝泵站", value: 19, unit: "座" },
        { name: "排水检查井", value: 31015, unit: "个" },
        { name: "排水应急排口", value: 5, unit: "个" },
        { name: "污水检查井", value: 19076, unit: "个" },
        { name: "污水泵站", value: 23, unit: "座" },
        { name: "闸站", value: 37, unit: "座" },
        { name: "污水厂", value: 3, unit: "个" },
        { name: "河道标记排口", value: 140, unit: "个" },
      ],
    },
  ],
  baseData: [
    {
      name: "燃气",
      diameterData: [
        { name: ">1000mm", value: "52", unit: "km" },
        { name: "1000mm-600mm", value: "390", unit: "km" },
        { name: "600mm-300mm", value: "772", unit: "km" },
        { name: "300mm-75mm", value: "2960", unit: "km" },
        { name: "<75mm", value: "1085", unit: "km" },
      ],
      pipeAgeData: [
        { name: "5年以下", value: 630, unit: "km" },
        { name: "5-10年", value: 690, unit: "km" },
        { name: "10-15年", value: 1565, unit: "km" },
        { name: "15-20年", value: 1485, unit: "km" },
        { name: "20年以上", value: 889, unit: "km" },
      ],
      pipeTextureData: [
        { name: "G", value: "286", unit: "km" },
        { name: "PE", value: "4200", unit: "km" },
        { name: "钢", value: "506", unit: "km" },
        { name: "镀锌", value: "60", unit: "km" },
        { name: "其它", value: "168", unit: "km" },
      ],
    },
    {
      name: "供水",
      diameterData: [
        { name: ">1000mm", value: "169", unit: "km" },
        { name: "1000mm-600mm", value: "691", unit: "km" },
        { name: "600mm-300mm", value: "1139", unit: "km" },
        { name: "300mm-75mm", value: "4627", unit: "km" },
        { name: "<75mm", value: "1834", unit: "km" },
      ],
      pipeAgeData: [
        { name: "5年以下", value: 1294, unit: "km" },
        { name: "5-10年", value: 2650, unit: "km" },
        { name: "10-15年", value: 2890, unit: "km" },
        { name: "15-20年", value: 1416, unit: "km" },
        { name: "20年以上", value: 1120, unit: "km" },
      ],
      pipeTextureData: [
        { name: "球墨铸铁", value: "2497", unit: "km" },
        { name: "灰口铸铁", value: "918", unit: "km" },
        { name: "塑料", value: "1601", unit: "km" },
        { name: "钢筋混凝土", value: "1133", unit: "km" },
        { name: "钢", value: "309", unit: "km" },
        { name: "镀锌", value: "2379", unit: "km" },
        { name: "其它", value: "513", unit: "km" },
      ],
    },
    {
      name: "排水",
      diameterData: [
        { name: ">1000mm", value: "69", unit: "km" },
        { name: "1000mm-600mm", value: "402", unit: "km" },
        { name: "600mm-300mm", value: "865", unit: "km" },
        { name: "300mm-75mm", value: "3877", unit: "km" },
        { name: "<75mm", value: "1371", unit: "km" },
      ],
      pipeAgeData: [
        { name: "1年以下", value: "1254", unit: "km" },
        { name: "5-10年", value: "2021", unit: "km" },
        { name: "10-15年", value: "1895", unit: "km" },
        { name: "15-20年", value: "783", unit: "km" },
        { name: "20年以上", value: "901", unit: "km" },
      ],
      pipeTextureData: [
        { name: "PE", value: "759", unit: "km" },
        { name: "PVC", value: "3026", unit: "km" },
        { name: "铸铁", value: "521", unit: "km" },
        { name: "砼", value: "1825", unit: "km" },
        { name: "塑料", value: "560", unit: "km" },
        { name: "其它", value: "163", unit: "km" },
      ],
    },
    {
      name: "电力",
      diameterData: [],
      pipeAgeData: [],
      pipeTextureData: [],
    },
    {
      name: "通讯",
      diameterData: [],
      pipeAgeData: [],
      pipeTextureData: [],
    },
    {
      name: "热力",
      diameterData: [],
      pipeAgeData: [],
      pipeTextureData: [],
    },
  ],
  naturalColumns: [
    { title: "区域", key: "area" },
    // { title: "供气管道长度(km)", key: "length" },
    { title: "储气能力(万立方米)", key: "gas" },
    { title: "供气总量合计(万立方米)", key: "total" },
    { title: "用气户数(户)", key: "home" },
    // { title: "用气人口(万人)", key: "user" },
    { title: "汽车加气站(座)", key: "natural" },
  ],
  liquefiedColumns: [
    { title: "区域", key: "area" },
    // { title: "供气管道长度(公里)", key: "length" },
    { title: "储气能力(吨)", key: "gas" },
    { title: "供气总量合计(吨)", key: "total" },
    { title: "用气户数(户)", key: "home" },
    // { title: "用气人口(万人)", key: "user" },
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
      area: "合计",
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
      area: "合计",
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
  typeAlysisData: [
    {
      name: "总汇聚率",
      value: 96,
      unit: "%",
    },
    {
      name: "亭湖区",
      value: 96.01,
      unit: "%",
    },
    {
      name: "盐都区",
      value: 94.2,
      unit: "%",
    },
    {
      name: "大丰区",
      value: 95.5,
      unit: "%",
    },
    {
      name: "建湖县",
      value: 93.6,
      unit: "%",
    },
    {
      name: "射阳县",
      value: 96.72,
      unit: "%",
    },
    {
      name: "阜宁县",
      value: 95.25,
      unit: "%",
    },
    {
      name: "滨海县",
      value: 95.76,
      unit: "%",
    },
    {
      name: "响水县",
      value: 96.3,
      unit: "%",
    },
    {
      name: "东台市",
      value: 97.62,
      unit: "%",
    },
  ],
  convergenceRate: [
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
          value: "35.53",
          unit: "%",
        },
        {
          name: "工业数量",
          value: 0,
          unit: "%",
        },
        {
          name: "占比",
          value: 0,
          unit: "%",
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
          value: 1.38,
          unit: "%",
        },
        {
          name: "工业项目投资额度",
          value: 1091,
          unit: "亿元",
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
      value: 0,
      unit: "万",
    },
    {
      name: "100-500万",
      value: 0,
      unit: "万",
    },
    {
      name: "500-1000万",
      value: 0,
      unit: "万",
    },
    {
      name: "1000万以上",
      value: 0,
      unit: "万",
    },
  ],
  projectDistributionColumns: [
    { title: "县区", key: "name" },
    { title: "在建项目/个", key: "construction" },
    // { title: "已完成项目/个", key: "completion" },
  ],
  projectDistributionTableData: [
    {
      name: "盐都区",
      construction: 86,
      completion: 0,
    },
    {
      name: "阜宁县",
      construction: 45,
      completion: 0,
    },
    {
      name: "滨海县",
      construction: 132,
      completion: 0,
    },
    {
      name: "东台市",
      construction: 73,
      completion: 0,
    },
  ],
  projectSituation: [
    {
      name: "项目总数",
      value: 926,
      unit: "个",
      children: [
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
    },
  ],
  areaConstruction: [
    {
      name: "市级",
      value: 25,
      unit: "个",
    },
    {
      name: "盐都区",
      value: 58,
      unit: "个",
    },
    {
      name: "亭湖区",
      value: 63,
      unit: "个",
    },
    {
      name: "大丰区",
      value: 90,
      unit: "个",
    },
    {
      name: "盐城经济技术开发区",
      value: 48,
      unit: "个",
    },
    {
      name: "盐南高新技术产业开发区",
      value: 66,
      unit: "个",
    },
    {
      name: "东台市",
      value: 140,
      unit: "个",
    },
    {
      name: "建湖县",
      value: 26,
      unit: "个",
    },
    {
      name: "射阳县",
      value: 111,
      unit: "个",
    },
    {
      name: "阜宁县",
      value: 139,
      unit: "个",
    },
    {
      name: "滨海县",
      value: 119,
      unit: "个",
    },
    {
      name: "响水县",
      value: 41,
      unit: "个",
    },
  ],
  inspectionData: [
    {
      name: "异常问题总数",
      value: 10,
      unit: "个",
    },
    {
      name: "同比",
      value: -1.19,
      unit: "%",
    },
    [
      {
        flag: 0,
        value: 0,
      },
      {
        flag: 1,
        value: 1,
      },
      {
        flag: 2,
        value: 0,
      },
      {
        flag: 3,
        value: 0,
      },
      {
        flag: 4,
        value: 2,
      },
      {
        flag: 5,
        value: 4,
      },
      {
        flag: 6,
        value: 3,
      },
    ],
  ],
  statisticDestroy: [
    {
      name: "待签收",
      value: 2,
      percent: "20%",
      color: "#3796FF",
    },
    {
      name: "处置中",
      value: 1,
      percent: "10%",
      color: "#FFF500",
    },
    {
      name: "已办结",
      value: 7,
      percent: "70%",
      unit: "个",
      color: "#23FF5F",
    },
  ],

  pipeDestroyColumns: [
    { title: "序号", key: "id" },
    { title: "名称", key: "name" },
    { title: "区域", key: "district" },
    { title: "状态", key: "status" },
  ],
  pipeDestroyTableData: [
    {
      id: "1",
      name: "排水管线挖断事件",
      district: "盐都区",
      status: "已办结",
    },
    {
      id: "2",
      name: "给水管线挖断事件",
      district: "大丰区",
      status: "已办结",
    },
    {
      id: "3",
      name: "违法占压事件",
      district: "大丰区",
      status: "已办结",
    },
    {
      id: "4",
      name: "电力管线挖断事件",
      district: "射阳县",
      status: "已办结",
    },
    {
      id: "5",
      name: "给水管线挖断事件",
      district: "亭湖区",
      status: "已办结",
    },
  ],
};

// 运维管养
const operationMaintenanceData = {
  name: "运维管养",
  inspectionNum: [
    {
      name: "总数",
      value: "16393",
      unit: "次",
    },
    {
      name: "燃气",
      value: "3240",
      unit: "次",
    },
    {
      name: "供水",
      value: "1677",
      unit: "次",
    },
    {
      name: "雨水",
      value: "1247",
      unit: "次",
    },
    {
      name: "污水",
      value: "2104",
      unit: "次",
    },
    {
      name: "道路",
      value: "2478",
      unit: "次",
    },
    {
      name: "桥梁",
      value: "996",
      unit: "次",
    },
    {
      name: "第三方施工",
      value: "2063",
      unit: "次",
    },
    {
      name: "路灯",
      value: "2588",
      unit: "次",
    },
  ],
  problems: [
    {
      name: "燃气",
      value: "15",
      unit: "个",
    },
    {
      name: "供水",
      value: "9",
      unit: "个",
    },
    {
      name: "雨水",
      value: "12",
      unit: "个",
    },
    {
      name: "污水",
      value: "6",
      unit: "个",
    },
    {
      name: "道路",
      value: "3",
      unit: "个",
    },
    {
      name: "桥梁",
      value: "2",
      unit: "个",
    },
    {
      name: "第三方施工",
      value: "10",
      unit: "个",
    },
    {
      name: "路灯",
      value: "18",
      unit: "个",
    },
  ],
  findProblems: [
    {
      name: "燃气",
      value: "0",
      unit: "个",
    },
    {
      name: "供水",
      value: "3",
      unit: "个",
    },
    {
      name: "雨水",
      value: "1",
      unit: "个",
    },
    {
      name: "污水",
      value: "1",
      unit: "个",
    },
    {
      name: "道路",
      value: "6",
      unit: "个",
    },
    {
      name: "桥梁",
      value: "0",
      unit: "个",
    },
    {
      name: "路灯",
      value: "8",
      unit: "个",
    },
  ],
  timelinesRate: [
    {
      name: "燃气",
      value: "98",
      unit: "%",
    },
    {
      name: "供水",
      value: "89",
      unit: "%",
    },
    {
      name: "雨水",
      value: "95",
      unit: "%",
    },
    {
      name: "污水",
      value: "91",
      unit: "%",
    },
    {
      name: "道路",
      value: "87",
      unit: "%",
    },
    {
      name: "桥梁",
      value: "96",
      unit: "%",
    },
    {
      name: "第三方施工",
      value: "94",
      unit: "%",
    },
    {
      name: "路灯",
      value: "89",
      unit: "%",
    },
  ],
  completionRate: [
    {
      name: "燃气",
      value: "100",
      unit: "%",
    },
    {
      name: "供水",
      value: "92",
      unit: "%",
    },
    {
      name: "雨水",
      value: "99",
      unit: "%",
    },
    {
      name: "污水",
      value: "96",
      unit: "%",
    },
    {
      name: "道路",
      value: "95",
      unit: "%",
    },
    {
      name: "桥梁",
      value: "100",
      unit: "%",
    },
    {
      name: "第三方施工",
      value: "95",
      unit: "%",
    },
    {
      name: "路灯",
      value: "94",
      unit: "%",
    },
  ],
  custodyTimeRate: [
    {
      name: "燃气",
      value: "100",
      unit: "%",
    },
    {
      name: "供水",
      value: "92",
      unit: "%",
    },
    {
      name: "雨水",
      value: "95",
      unit: "%",
    },
    {
      name: "污水",
      value: "92",
      unit: "%",
    },
    {
      name: "道路",
      value: "97",
      unit: "%",
    },
    {
      name: "桥梁",
      value: "99",
      unit: "%",
    },
    {
      name: "路灯",
      value: "94",
      unit: "%",
    },
  ],
  custodycompletioRate: [
    {
      name: "燃气",
      value: "100",
      unit: "%",
    },
    {
      name: "供水",
      value: "95",
      unit: "%",
    },
    {
      name: "雨水",
      value: "95",
      unit: "%",
    },
    {
      name: "污水",
      value: "95",
      unit: "%",
    },
    {
      name: "道路",
      value: "100",
      unit: "%",
    },
    {
      name: "桥梁",
      value: "96",
      unit: "%",
    },
    {
      name: "路灯",
      value: "96",
      unit: "%",
    },
  ],
  frequNums: [
    {
      name: "总数",
      value: "431",
      unit: "次",
    },
    {
      name: "燃气",
      value: "96",
      unit: "次",
    },
    {
      name: "供水",
      value: "101",
      unit: "次",
    },
    {
      name: "雨水",
      value: "57",
      unit: "次",
    },
    {
      name: "污水",
      value: "51",
      unit: "次",
    },
    {
      name: "道路",
      value: "66",
      unit: "次",
    },
    {
      name: "桥梁",
      value: "13",
      unit: "次",
    },
    {
      name: "路灯",
      value: "47",
      unit: "次",
    },
  ],
  // 检查次数数据
  inspectionCounts: [
    {
      name: "总数",
      value: "8808",
      unit: "次",
    },
    {
      name: "燃气",
      value: "4712",
      unit: "次",
    },
    {
      name: "供水",
      value: "614",
      unit: "次",
    },
    {
      name: "雨水",
      value: "936",
      unit: "次",
    },
    {
      name: "污水",
      value: "711",
      unit: "次",
    },
    {
      name: "道路",
      value: "566",
      unit: "次",
    },
    {
      name: "桥梁",
      value: "247",
      unit: "次",
    },
    {
      name: "路灯",
      value: "1022",
      unit: "次",
    },
  ],
  // 上报问题数量数据
  reportedIssues: [
    {
      name: "燃气",
      value: "39",
      unit: "个",
    },
    {
      name: "供水",
      value: "9",
      unit: "个",
    },
    {
      name: "雨水",
      value: "17",
      unit: "个",
    },
    {
      name: "污水",
      value: "6",
      unit: "个",
    },
    {
      name: "道路",
      value: "18",
      unit: "个",
    },
    {
      name: "桥梁",
      value: "2",
      unit: "个",
    },
    {
      name: "路灯",
      value: "12",
      unit: "个",
    },
  ],
  // 整改完成数量数据
  completedRectifications: [
    {
      name: "燃气",
      value: "39",
      unit: "个",
    },
    {
      name: "供水",
      value: "8",
      unit: "个",
    },
    {
      name: "雨水",
      value: "12",
      unit: "个",
    },
    {
      name: "污水",
      value: "6",
      unit: "个",
    },
    {
      name: "道路",
      value: "10",
      unit: "个",
    },
    {
      name: "桥梁",
      value: "1",
      unit: "个",
    },
    {
      name: "路灯",
      value: "10",
      unit: "个",
    },
  ],
  // 未整改数量数据
  pendingRectifications: [
    {
      name: "燃气",
      value: "0",
      unit: "个",
    },
    {
      name: "供水",
      value: "1",
      unit: "个",
    },
    {
      name: "雨水",
      value: "5",
      unit: "个",
    },
    {
      name: "污水",
      value: "0",
      unit: "个",
    },
    {
      name: "道路",
      value: "8",
      unit: "个",
    },
    {
      name: "桥梁",
      value: "1",
      unit: "个",
    },
    {
      name: "路灯",
      value: "2",
      unit: "个",
    },
  ],
  // 维修次数数据
  maintenanceCounts: [
    {
      name: "总数",
      value: "170",
      unit: "次",
    },
    {
      name: "燃气",
      value: "7",
      unit: "次",
    },
    {
      name: "供水",
      value: "1",
      unit: "次",
    },
    {
      name: "雨水",
      value: "29",
      unit: "次",
    },
    {
      name: "污水",
      value: "31",
      unit: "次",
    },
    {
      name: "道路",
      value: "34",
      unit: "次",
    },
    {
      name: "桥梁",
      value: "1",
      unit: "次",
    },
    {
      name: "路灯",
      value: "67",
      unit: "次",
    },
  ],
  // 维修频率数据
  maintenanceFrequencies: [
    {
      name: "燃气",
      value: "4.12",
      unit: "%",
    },
    {
      name: "供水",
      value: "0.59",
      unit: "%",
    },
    {
      name: "雨水",
      value: "17.06",
      unit: "%",
    },
    {
      name: "污水",
      value: "18.24",
      unit: "%",
    },
    {
      name: "道路",
      value: "20",
      unit: "%",
    },
    {
      name: "桥梁",
      value: "0.59",
      unit: "%",
    },
    {
      name: "第三方施工",
      value: "0.59",
      unit: "%",
    },
    {
      name: "路灯",
      value: "39.41",
      unit: "%",
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
        { name: "覆盖率", value: 99.47, unit: "%" },
        { name: "设备总数", value: 1002, unit: "台" },
        { name: "在线率", value: 99.71, unit: "%" },
      ],
      sensorData: [
        { name: "可燃气体探测器", value: 1002, unit: "台" },
        { name: "视频监控", value: 0, unit: "台" },
        { name: "燃气压力设备", value: 0, unit: "台" },
        { name: "流量计", value: 0, unit: "台" },
      ],
      coverageData: [
        { name: "亭湖区", value: 100.0, unit: "%" },
        { name: "盐都区", value: 99.5, unit: "%" },
        { name: "大丰区", value: 98.56, unit: "%" },
        { name: "建湖县", value: 98.86, unit: "%" },
        { name: "阜宁县", value: 100.0, unit: "%" },
        { name: "滨海县", value: 100.0, unit: "%" },
        { name: "响水县", value: 100.0, unit: "%" },
        { name: "东台市", value: 99.14, unit: "%" },
      ],
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
        { name: "液位仪", value: 195, unit: "台" },
        { name: "电子水尺", value: 34, unit: "台" },
        { name: "水质监测传感器", value: 49, unit: "台" },
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
        { name: "压力计", value: "83", unit: "台" },
        { name: "流量计", value: 46, unit: "台" },
        { name: "噪声监测仪", value: "103", unit: "台" },
        { name: "水质温度仪", value: "23", unit: "台" },
        { name: "智能消火栓", value: "20", unit: "台" },
        { name: "智能井盖", value: "20", unit: "台" },
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
        { name: "压力计", value: 42, unit: "台" },
        { name: "液位计", value: 3, unit: "台" },
        { name: "流量计", value: 158, unit: "台" },
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
        { name: "光纤感知终端分析系统", value: 1, unit: "台" },
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

//预警处置
const warningDisposalData = {
  name: "预警处置",
  warningSourceData: [
    {
      name: "燃气",
      value: 18,
      unit: "个",
    },
    {
      name: "雨水",
      value: 22,
      unit: "个",
    },
    {
      name: "污水",
      value: 26,
      unit: "个",
    },
    {
      name: "供水",
      value: 14,
      unit: "个",
    },
    {
      name: "道路",
      value: 17,
      unit: "个",
    },
    {
      name: "桥梁",
      value: 9,
      unit: "个",
    },
    {
      name: "第三方施工",
      value: 10,
      unit: "个",
    },
    {
      name: "路灯",
      value: 29,
      unit: "个",
    },
  ],
  warningLevelData: [
    {
      name: "总数",
      value: 145,
      children: [
        {
          name: "一级",
          value: 5,
          percent: 3.45,
        },
        {
          name: "二级",
          value: 49,
          percent: 33.79,
        },
        {
          name: "三级",
          value: 91,
          percent: 62.76,
        },
      ],
    },
    {
      name: "燃气",
      value: 18,
      children: [
        {
          name: "一级",
          value: 0,
          percent: 0,
        },
        {
          name: "二级",
          value: 5,
          percent: 27.78,
        },
        {
          name: "三级",
          value: 13,
          percent: 72.22,
        },
      ],
    },
    {
      name: "雨水",
      value: 22,
      children: [
        {
          name: "一级",
          value: 2,
          percent: 9.09,
        },
        {
          name: "二级",
          value: 8,
          percent: 36.36,
        },
        {
          name: "三级",
          value: 12,
          percent: 54.54,
        },
      ],
    },
  ],
  warningTrendData: [
    {
      name: "总数",
      children: [
        {
          name: "总事件数",
          value: 16,
        },
        {
          name: "同比",
          value: -5.56,
        },
        {
          name: "预警事件趋势",
          children: [
            {
              flag: 0,
              value: 0,
            },
            {
              flag: 1,
              value: 2,
            },
            {
              flag: 2,
              value: 1,
            },
            {
              flag: 3,
              value: 0,
            },
            {
              flag: 4,
              value: 3,
            },
            {
              flag: 5,
              value: 5,
            },
            {
              flag: 6,
              value: 4,
            },
          ],
        },
      ],
    },
    {
      name: "燃气",
      children: [
        {
          name: "总事件数",
          value: 1,
        },
        {
          name: "同比",
          value: -3.47,
        },
        {
          name: "预警事件趋势",
          children: [
            {
              flag: 0,
              value: 0,
            },
            {
              flag: 1,
              value: 1,
            },
            {
              flag: 2,
              value: 0,
            },
            {
              flag: 3,
              value: 0,
            },
            {
              flag: 4,
              value: 0,
            },
            {
              flag: 5,
              value: 0,
            },
            {
              flag: 6,
              value: 0,
            },
          ],
        },
      ],
    },
    {
      name: "雨水",
      children: [
        {
          name: "总事件数",
          value: 7,
        },
        {
          name: "同比",
          value: -1.04,
        },
        {
          name: "预警事件趋势",
          children: [
            {
              flag: 0,
              value: 0,
            },
            {
              flag: 1,
              value: 1,
            },
            {
              flag: 2,
              value: 1,
            },
            {
              flag: 3,
              value: 0,
            },
            {
              flag: 4,
              value: 2,
            },
            {
              flag: 5,
              value: 1,
            },
            {
              flag: 6,
              value: 2,
            },
          ],
        },
      ],
    },
  ],
  warningTypeData: [
    {
      name: "总数",
      children: [
        {
          name: "天然气汽车加气站",
          value: 7,
          percent: 4.83,
        },
        {
          name: "液化气汽车加气站",
          value: 11,
          percent: 7.59,
        },
        {
          name: "水厂",
          value: 22,
          percent: 15.17,
        },
        {
          name: "增压泵站",
          value: 15,
          percent: 10.34,
        },
        {
          name: "排涝泵站",
          value: 1,
          percent: 0.59,
        },
        {
          name: "排水检查井",
          value: 15,
          percent: 10.34,
        },
        {
          name: "排水应急排口",
          value: 1,
          percent: 0.59,
        },
        {
          name: "闸站",
          value: 2,
          percent: 1.38,
        },
        {
          name: "河道标记排口",
          value: 3,
          percent: 2.07,
        },
      ],
    },
    {
      name: "燃气",
      children: [
        {
          name: "天然气汽车加气站",
          value: 7,
          percent: 38.89,
        },
        {
          name: "液化气汽车加气站",
          value: 11,
          percent: 61.11,
        },
      ],
    },
    {
      name: "雨水",
      children: [
        {
          name: "排涝泵站",
          value: 1,
          percent: 4.55,
        },
        {
          name: "排水检查井",
          value: 15,
          percent: 68.18,
        },
        {
          name: "排水应急排口",
          value: 1,
          percent: 4.55,
        },
        {
          name: "闸站",
          value: 2,
          percent: 9.09,
        },
        {
          name: "河道标记排口",
          value: 3,
          percent: 13.64,
        },
      ],
    },
  ],
  warningSpaceFeaturesData: [
    {
      name: "总数",
      children: [
        {
          name: "亭湖区",
          value: 20,
          percent: 13.79,
        },
        {
          name: "盐都区",
          value: 19,
          percent: 13.1,
        },
        {
          name: "大丰区",
          value: 24,
          percent: 16.55,
        },
        {
          name: "建湖县",
          value: 31,
          percent: 21.38,
        },
        {
          name: "射阳县",
          value: 29,
          percent: 20,
        },
        {
          name: "阜宁县",
          value: 22,
          percent: 15.17,
        },
      ],
    },
    {
      name: "燃气",
      children: [
        {
          name: "亭湖区",
          value: 2,
          percent: 11.11,
        },
        {
          name: "盐都区",
          value: 1,
          percent: 5.56,
        },
        {
          name: "大丰区",
          value: 3,
          percent: 16.67,
        },
        {
          name: "建湖县",
          value: 4,
          percent: 22.22,
        },
        {
          name: "射阳县",
          value: 3,
          percent: 16.67,
        },
        {
          name: "阜宁县",
          value: 5,
          percent: 27.78,
        },
      ],
    },
    {
      name: "雨水",
      children: [
        {
          name: "亭湖区",
          value: 3,
          percent: 13.64,
        },
        {
          name: "盐都区",
          value: 0,
          percent: 0.0,
        },
        {
          name: "大丰区",
          value: 4,
          percent: 18.18,
        },
        {
          name: "建湖县",
          value: 6,
          percent: 27.27,
        },
        {
          name: "射阳县",
          value: 6,
          percent: 27.27,
        },
        {
          name: "阜宁县",
          value: 3,
          percent: 13.64,
        },
      ],
    },
  ],
  disposalStageData: [
    {
      name: "待签收",
      value: 31,
    },
    {
      name: "处置中",
      value: 13,
    },
    {
      name: "已办结",
      value: 101,
    },
  ],
  disposalReactData: {
    name: "及时响应处置率",
    value: 96.62,
    children: [
      {
        name: "亭湖区",
        value: 98.14,
        unit: "%",
      },
      {
        name: "盐都区",
        value: 96.0,
        unit: "%",
      },
      {
        name: "大丰区",
        value: 95.22,
        unit: "%",
      },
      {
        name: "建湖县",
        value: 94.17,
        unit: "%",
      },
      {
        name: "射阳县",
        value: 97.58,
        unit: "%",
      },
      {
        name: "阜宁县",
        value: 98.66,
        unit: "%",
      },
    ],
  },
  reactTimeData: {
    name: "平均响应时长",
    value: 1.85,
    children: [
      {
        name: "燃气",
        value: 0.5,
        unit: "h",
      },
      {
        name: "雨水",
        value: 1.54,
        unit: "h",
      },
      {
        name: "污水",
        value: 1.24,
        unit: "h",
      },
      {
        name: "供水",
        value: 1.88,
        unit: "h",
      },
      {
        name: "道路",
        value: 1.67,
        unit: "h",
      },
      {
        name: "桥梁",
        value: 1.98,
        unit: "h",
      },
      {
        name: "第三方施工",
        value: 2.88,
        unit: "h",
      },
      {
        name: "路灯",
        value: 2.79,
        unit: "h",
      },
    ],
  },
  disposalTimeData: {
    name: "平均处置时长",
    value: 6.49,
    children: [
      {
        name: "燃气",
        value: 3.99,
        unit: "h",
      },
      {
        name: "雨水",
        value: 8.25,
        unit: "h",
      },
      {
        name: "污水",
        value: 6.14,
        unit: "h",
      },
      {
        name: "供水",
        value: 5.66,
        unit: "h",
      },
      {
        name: "道路",
        value: 8.95,
        unit: "h",
      },
      {
        name: "桥梁",
        value: 4.21,
        unit: "h",
      },
      {
        name: "第三方施工",
        value: 6.21,
        unit: "h",
      },
      {
        name: "路灯",
        value: 8.27,
        unit: "h",
      },
    ],
  },
  averageEfficiencyData: [
    [
      {
        name: "亭湖区",
        value1: 1.12,
        value2: 6.87,
      },
      {
        name: "阜宁县",
        value1: 1.22,
        value2: 6.89,
      },
      {
        name: "盐都区",
        value1: 1.66,
        value2: 6.94,
      },
      {
        name: "射阳县",
        value1: 1.95,
        value2: 7.14,
      },
      {
        name: "大丰区",
        value1: 2.47,
        value2: 7.58,
      },
      {
        name: "建湖县",
        value1: 2.68,
        value2: 8.01,
      },
    ],
    [
      {
        name: "待签收",
        value: 31,
        percent: 21.38,
      },
      {
        name: "处置中",
        value: 13,
        percent: 8.97,
      },
      {
        name: "已办结",
        value: 101,
        percent: 69.66,
      },
      {
        name: "按时办结率",
        percent: 98.14,
      },
    ],
  ],
};

export {
  overviewData,
  basicFacilitiesData,
  operationMaintenanceData,
  runningMonitoringData,
  projectManageData,
  warningDisposalData,
};
