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
            children: [],
          },
          {
            name: "建成区",
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
            children: [],
          },
          {
            name: "设备分布",
            children: [],
          },
          {
            name: "风险分布",
            children: [
              {
                name: "风险分布",
                type: "layer",
                source: "pipe",
                layer: "6,7",
                remark: "ws",
                detailLayer: "11",
                legendLayer: "",
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
            name: "--",
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
            name: "--",
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
            name: "--",
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
            name: "--",
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
            name: "--",
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
            name: "--",
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
            name: "--",
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
            children: [
              {
                name: "燃气管点管线详细",
                type: "layer",
                source: "pipe",
                layer: "弹窗",
                remark: "弹窗",
                detailLayer: "11",
                legendLayer: "",
              },
              {
                name: "燃气管点管线详细含管龄",
                type: "layer",
                source: "pipe",
                layer: "弹窗，下同理",
                remark: "弹窗",
                detailLayer: "10",
                legendLayer: "",
              },
            ],
          },
          {
            name: "管径分布",
            children: [],
          },
          {
            name: "压力分布",
            children: [],
          },
          {
            name: "燃气场站",
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
            children: [],
          },
          {
            name: "管径分布",
            children: [],
          },
          {
            name: "压力分布",
            children: [],
          },
          {
            name: "雨水场站",
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
            children: [],
          },
          {
            name: "视频监控",
            children: [],
          },
          {
            name: "特大桥",
            children: [],
          },
          {
            name: "特殊结构桥梁",
            children: [],
          },
          {
            name: "养护分析",
            // 区城、底数、养护类别（I类、II类、III类、IV类、V类）
            children: [
              {
                name: "区城",
                type: "layer",
                source: "pipe",
                layer: "11",
                remark: "区城",
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
        children: [],
      },
      {
        name: "综合管线",
        remark: "zonghe",
        type: "mainClass",
        children: [],
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [],
      },
    ],
    "running-monitoring": [],
    "operation-maintenance": [],
    "project-management": [],
    "warning-disposal": [],
  },
  defaultLayers: {
    //overview: ["gs_js"],
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
      size: [1024,1024],
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
      size: [1024,1024],
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
