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

//项目管理
const projectManageData = {
  overviewData: [
    {
      projectNum: {
        name: "项目总数",
        value: 534,
        unit: '个'
      },
      children: [
        {
          name: "较去年",
          value: "140",
          unit: '个'
        },
        {
          name: "同比",
          value: "35",
          unit: '%'
        },
        {
          name: "工业数量",
          value: null,
          unit: null
        },
        {
          name: "占比",
          value: null,
          unit: null
        }
      ]
    },
    {
      projectNum: {
        name: "项目总投资",
        value: 2280.65,
        unit: '亿元'

      },
      children: [
        {
          name: "较去年",
          value: 31,
          unit: '亿元'
        },
        {
          name: "同比",
          value: "1.38",
          unit: '%'
        },
        {
          name: "工业项目投资额度",
          value: "1.38",
          unit: '%'
        },
        {
          name: "占比",
          value: 47.84,
          unit: '%'
        }
      ]
    }

  ],
  strategicIndustry: [
    {
      name: "绿色低碳产业",
      children: [
        {
          name: "个数",
          value: 106,
          unit: "个"
        },
        {
          name: "投资",
          value: 604.2,
          unit: "亿元"
        }
      ]
    },
    {
      name: "新一代信息技术产业",
      children: [
        {
          name: "个数",
          value: 42,
          unit: "个"
        },
        {
          name: "投资",
          value: 106.8,
          unit: "亿元"
        }
      ]
    },
    {
      name: "新材料产业",
      children: [
        {
          name: "个数",
          value: 37,
          unit: "个"
        },
        {
          name: "投资",
          value: 116.6,
          unit: "亿元"
        }
      ]
    },
    {
      name: "高端装备产业",
      children: [
        {
          name: "个数",
          value: 73,
          unit: "个"
        },
        {
          name: "投资",
          value: 146.9,
          unit: "亿元"
        }
      ]
    },
    {
      name: "大健康产业",
      children: [
        {
          name: "个数",
          value: 4,
          unit: "个"
        },
        {
          name: "投资",
          value: 11.2,
          unit: "亿元"
        }
      ]
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
    }
  ],
  projectDistribution: [
    {
      name: "盐都区",
      construction: 86,
      completion: null
    },
    {
      name: "阜宁县",
      construction: 45,
      completion: null
    },
    {
      name: "滨海县",
      construction: 132,
      completion: null
    },
    {
      name: "东台市",
      construction: 73,
      completion: null
    }
  ],
  projectSituation: [
    {
      name: "项目总数",
      value: 926,
      unit: "个"
    },
    {
      name: "市在建",
      value: 25,
      unit: "个"
    },
    {
      name: "区在建",
      value: 465,
      unit: "个"
    },
    {
      name: "县在建",
      value: 436,
      unit: "个"
    }
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
    }
  ]
}

export { overviewData, basicFacilitiesData, projectManageData };
