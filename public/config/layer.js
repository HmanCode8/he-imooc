window.layerConfig = {
  customProjections: {
    "EPSG:4490": "+proj=longlat +ellps=GRS80 +no_defs +type=crs +axis=neu",
  },
  systemProjection: "EPSG:4490",
  baseLayer: {
    vector: ["vectorBase"],
    raster: ["rasterBase", "rasterLabelBase"],
  },
  layerTrees: {
    overview: [
      {
        name: "基础",
        remark: "jichu",
        type: "mainClass",
        children: [
          {
            name: "示范区",
            remark: "shifanqu",
            children: [],
          },
          {
            name: "建成区",
            remark: "jianchengqu",
            children: [],
          },
        ],
      },
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [],
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "风险分布",
            remark: "fengxian_fenbu",
            children: [
              {
                name: "风险分布",
                type: "layer",
                source: "pipe",
                layer: "2,3",
                remark: "js",
                detailLayer: "3",
                legendLayer: "3",
              },
              {
                name: "风险事件详情",
                type: "layer",
                source: "pipe",
                layer: "9,10",
                remark: "ys",
                detailLayer: "10",
                legendLayer: "",
              },
            ],
          },
          {
            name: "隐患分布",
            remark: "yinhuan_fenbu",
            children: [
              {
                name: "隐患分布",
                type: "layer",
                source: "pipe",
                layer: "6,7",
                remark: "ws",
                detailLayer: "11",
                legendLayer: "",
              },
              {
                name: "隐患事件详情",
                type: "layer",
                source: "pipe",
                layer: "9,10",
                remark: "ys",
                detailLayer: "10",
                legendLayer: "",
              },
            ],
          },
        ],
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: [
          {
            name: "供水",
            remark: "gongshui_child",
            children: [],
          },
        ],
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "污水",
            remark: "wushui_child",
            children: [],
          },
        ],
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [
          {
            name: "雨水",
            remark: "yushui_child",
            children: [],
          },
        ],
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: [
          {
            name: "道路",
            remark: "daolu_child",
            children: [],
          },
        ],
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [
          {
            name: "桥梁",
            remark: "qiaoliang_child",
            children: [],
          },
        ],
      },
      {
        name: "项目",
        remark: "xiangmu",
        type: "mainClass",
        children: [
          {
            name: "项目",
            remark: "xiangmu_child",
            children: [],
          },
        ],
      },
      {
        name: "综合",
        remark: "zonghe",
        type: "mainClass",
        children: [
          {
            name: "默认",
            remark: "moren",
            children: [],
          },
        ],
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "路灯",
            remark: "ludeng_child",
            children: [],
          },
        ],
      },
    ],
    infrastructure: [
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "燃气管点管线",
            remark: "ranqi_guandianguanxian",
            children: [
              {
                name: "燃气管点管线详细",
                remark: "ranqiguandianguanxianxiangxi",
                type: "layer",
                source: "pipe",
                layer: "danchuang",
                detailLayer: "11",
                legendLayer: "",
              },
              {
                name: "燃气管点管线详细含管龄",
                remark: "ranqiguandianguanxianxiangxihanguanling",
                type: "layer",
                source: "pipe",
                layer: "danchuang",
                detailLayer: "10",
                legendLayer: "",
              },
            ],
          },
          {
            name: "管径分布",
            remark: "guanjing_fenbu",
            children: [],
          },
          {
            name: "压力分布",
            remark: "yali_fenbu",
            children: [],
          },
          {
            name: "燃气场站",
            remark: "ranqi_changzhan",
            children: [],
          },
        ],
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "污水管点管线",
            remark: "wushui_guandianguanxian",
            children: [
              {
                name: "污水管点管线详细",
                type: "layer",
                source: "pipe",
                layer: "9,10",
                remark: "ys",
                detailLayer: "10",
                legendLayer: "",
              },
            ],
          },
        ],
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [
          {
            name: "雨水管点管线",
            remark: "yushui_guandianguanxian",
            children: [],
          },
          {
            name: "管径分布",
            remark: "guanjing_fenbu",
            children: [],
          },
          {
            name: "压力分布",
            remark: "yali_fenbu",
            children: [],
          },
          {
            name: "雨水场站",
            remark: "yushui_changzhan",
            children: [],
          },
        ],
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [
          {
            name: "桥梁",
            remark: "qiaoliang_child",
            children: [],
          },
          {
            name: "视频监控",
            remark: "shipin_jiankong",
            children: [],
          },
          {
            name: "特大桥",
            remark: "tedaqiao",
            children: [],
          },
          {
            name: "特殊结构桥梁",
            remark: "teshujiegou_qiaoliang",
            children: [],
          },
          {
            name: "养护分析",
            remark: "yanghu_fenxi",
            children: [
              {
                name: "区城",
                remark: "qucheng",
                type: "layer",
                source: "pipe",
                layer: "11",
                detailLayer: "11",
                legendLayer: "",
              },
              {
                name: "底数",
                type: "layer",
                source: "pipe",
                layer: "12",
                remark: "底数",
                detailLayer: "12",
                legendLayer: "",
              },
              {
                name: "养护类别",
                type: "layer",
                source: "pipe",
                layer: "13",
                remark: "养护类别",
                detailLayer: "13",
                legendLayer: "",
              },
            ],
          },
        ],
      },
      {
        name: "项目",
        remark: "xiangmu",
        type: "mainClass",
        children: [
          {
            name: "项目",
            remark: "xiangmu_child",
            children: [],
          },
        ],
      },
      {
        name: "综合管线",
        remark: "zongheguanxian",
        type: "mainClass",
        children: [
          {
            name: "综合管线",
            remark: "zongheguanxian_child",
            children: [],
          },
        ],
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "路灯",
            remark: "ludeng_child",
            children: [],
          },
        ],
      },
    ],
    "running-monitoring": [
      {
        name: "覆盖率",
        remark: "fugaillv",
        type: "mainClass",
        children: [
          {
            name: "所有类型设备的覆盖率按行政区划划分",
            remark: "shebeifugaillv",
            children: [],
          },
        ],
      },
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [
              {
                name: "管点管线",
                remark: "guandianguanxian",
                children: [],
              },
              {
                name: "燃气场站",
                remark: "ranqi_changzhan",
                children: [],
              },
            ],
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: [
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [
              {
                name: "雨水管网",
                remark: "yushui_guanwang",
                children: [],
              },
              {
                name: "液位计",
                remark: "yewei_ji",
                children: [],
              },
            ],
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: [
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [],
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [],
          },
        ],
      },
    ],
    "operation-maintenance": [
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "巡检",
            remark: "xunjian",
            children: [
              {
                name: "巡检对象",
                remark: "xunjian_duixiang",
                children: [],
              },
              {
                name: "巡检完成率",
                remark: "xunjian_wanchenglv",
                children: [],
              },
              {
                name: "巡检及时率",
                remark: "xunjian_jishilv",
                children: [],
              },
            ],
          },
          {
            name: "管养",
            remark: "guanyang",
            children: [
              {
                name: "管养对象",
                remark: "guanyang_duixiang",
                children: [],
              },
              {
                name: "管养完成率",
                remark: "guanyang_wanchenglv",
                children: [],
              },
              {
                name: "管养及时率",
                remark: "guanyang_jishilv",
                children: [],
              },
            ],
          },
          {
            name: "维修对象",
            remark: "weixiu_duixiang",
            children: [],
          },
          {
            name: "检查对象",
            remark: "jiancha_duixiang",
            children: [],
          },
        ],
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: [
          {
            name: "供水",
            remark: "gongshui_child",
            children: [],
          },
        ],
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [
          {
            name: "雨水",
            remark: "yushui_child",
            children: [],
          },
        ],
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "污水",
            remark: "wushui_child",
            children: [],
          },
        ],
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: [
          {
            name: "道路",
            remark: "daolu_child",
            children: [],
          },
        ],
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [
          {
            name: "桥梁",
            remark: "qiaoliang_child",
            children: [],
          },
        ],
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "路灯",
            remark: "ludeng_child",
            children: [],
          },
        ],
      },
    ],
    "project-management": [
      {
        name: "项目",
        remark: "xiangmu",
        type: "mainClass",
        children: [
          {
            name: "项目分布",
            remark: "xiangmu_fenbu",
            children: [],
          },
          {
            name: "项目详情",
            remark: "xiangmu_xiangqing",
            children: [],
          },
        ],
      },
      {
        name: "综合管线",
        remark: "zongheguanxian",
        type: "mainClass",
        children: [],
      },
    ],
    "warning-disposal": [
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [],
          },
          {
            name: "燃气场站",
            remark: "ranqi_changzhan",
            children: [
              {
                name: "窨井",
                remark: "yanjing",
                children: [],
              },
              {
                name: "管线",
                remark: "guanxian",
                children: [],
              },
              {
                name: "终端用户",
                remark: "zhongduanyonghu",
                children: [],
              },
              {
                name: "阀门井",
                remark: "famengjing",
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: [],
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [],
          },
          {
            name: "管线",
            remark: "guanxian",
            children: [
              {
                name: "污水厂",
                remark: "wushuichang",
                children: [],
              },
              {
                name: "污水泵站",
                remark: "wushuibengzhan",
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [],
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: [],
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [],
      },
      // {
      //   name: "三破",
      //   remark: "sanpo",
      //   type: "mainClass",
      //   children: [],
      // },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [],
      },
    ],
  },
  defaultLayers: {
    overview: ["js"],
  },
  detailFields: [],
  layerList: [
    {
      name: "vectorBase",
      url: "https://jiangsu.tianditu.gov.cn/historyraster/rest/services/historyVector/js_sldt_blue/MapServer/WMTS",
      type: "WMTS",
      projection: "ESPG:4490",
      layer: "historyVector_js_sldt_blue",
      matrixSet: "default",
      style: "default",
      format: "image/png",
      origin: [-180, 90],
      extent: [
        116.10358013377254, 30.710719079012677, 122.09030402444137,
        35.21265930204362,
      ],
      resolutions: [
        1.406250026231578, 0.703125013115789, 0.3515625065578945,
        0.17578125327894775, 0.08789062663947399, 0.043945313319736994,
        0.021972656659868472, 0.010986328329934226, 0.005493164164967124,
        0.0027465820824835504, 0.0013732910412417797, 0.0006866455206208899,
        0.0003433227603104438, 0.0001716613801552224, 0.00008583069007761132,
        0.00004291534503880566, 0.000021457672519402802,
        0.000010728836259701401, 0.000005364418129850712,
        0.000002682209064925356, 0.000001341104532462678,
      ],
    },
    {
      name: "rasterBase",
      url: "https://jiangsu.tianditu.gov.cn/mapjs2/rest/services/MapJS/js_yxdt_latest/MapServer",
      type: "arcgis_WMTS",
      projection: "ESPG:4490",
      layer: "MapJS_js_yxdt_latest",
      matrixSet: "default",
      style: "default",
      format: "image/png32",
      origin: [-180, 90],
      size: [1024, 1024],
      extent: [
        116.10358013377254, 30.710719079012677, 122.09030402444137,
        35.21265930204362,
      ],
      resolutions: [
        1.406250026231578, 0.703125013115789, 0.3515625065578945,
        0.17578125327894775, 0.08789062663947399, 0.043945313319736994,
        0.021972656659868472, 0.010986328329934226, 0.005493164164967124,
        0.0027465820824835504, 0.0013732910412417797, 0.0006866455206208899,
        0.0003433227603104438, 0.0001716613801552224, 0.00008583069007761132,
        0.00004291534503880566, 0.000021457672519402802,
        0.000010728836259701401, 0.000005364418129850712,
        0.000002682209064925356, 0.000001341104532462678,
      ],
    },
    {
      name: "rasterLabelBase",
      url: "https://jiangsu.tianditu.gov.cn/mapjs2/rest/services/MapJS/js_yxzj_latest/MapServer",
      type: "arcgis_WMTS",
      projection: "ESPG:4490",
      layer: "MapJS_js_yxzj_latest",
      matrixSet: "default",
      style: "default",
      format: "image/png32",
      origin: [-180, 90],
      size: [512, 512],
      extent: [
        116.10358013377254, 30.710719079012677, 122.09030402444137,
        35.21265930204362,
      ],
      resolutions: [
        1.406250026231578, 0.703125013115789, 0.3515625065578945,
        0.17578125327894775, 0.08789062663947399, 0.043945313319736994,
        0.021972656659868472, 0.010986328329934226, 0.005493164164967124,
        0.0027465820824835504, 0.0013732910412417797, 0.0006866455206208899,
        0.0003433227603104438, 0.0001716613801552224, 0.00008583069007761132,
        0.00004291534503880566, 0.000021457672519402802,
        0.000010728836259701401, 0.000005364418129850712,
        0.000002682209064925356, 0.000001341104532462678,
      ],
    },
    {
      name: "pipe",
      url: "https://gx128.portal.com/server/rest/services/pipe_cgcs2000/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32",
      opacity: 1,
    },
    {
      name: "js",
      url: "https://gx128.portal.com/server/rest/services/gs/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32",
      opacity: 1,
    },
  ],
};
