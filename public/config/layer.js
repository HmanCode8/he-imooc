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
        name: "管线",
        remark: "1",
        children: [
          {
            name: "给水",
            children: [
              {
                name: "给水",
                type: "layer",
                source: "pipe",
                layer: "2,3",
                remark: "js",
                detailLayer: "3",
                legendLayer: "3"
              },
            ],
          },
          {
            name: "排水",
            type: "subClass",
            children: [
              {
                name: "污水",
                type: "layer",
                source: "pipe",
                layer: "6,7",
                remark: "ws",
                detailLayer: "11",
                legendLayer: ""
              },
              {
                name: "雨水",
                type: "layer",
                source: "pipe",
                layer: "9,10",
                remark: "ys",
                detailLayer: "10",
                legendLayer: ""
              },
              {
                name: "雨污合流",
                type: "layer",
                source: "pipe",
                layer: "12,13",
                remark: "hs",
                detailLayer: "13",
                legendLayer: ""
              },
            ],
          },
        ],
      },
      {
        name: "供水",
        remark: "2",
        children: [
          {
            name: "管网",
            children: [
              {
                name: "给水",
                type: "layer",
                source: "js",
                layer: "0",
                remark: "gs_js",
                detailLayer: "0",
                legendLayer: "0"
              },
              {
                name: "统计结果",
                type: "layer",
                source: "boundary",
                defaultLoad: false,
                showDetail: false,
                showLegend: false,
                properties:{
                  "":""
                },
                legend:{
                  "":""
                }
              },
            ],
          },
        ],
      },
    ],
    infrastructure: [],
    "running-monitoring": [],
    "operation-maintenance": [],
    "project-management": [],
    "warning-disposal": [],
  },
  defaultLayers:{
    overview:["gs_js"],

  },
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
      url: "https://jiangsu.tianditu.gov.cn/mapjs2/rest/services/MapJS/js_yxdt_latest/MapServer/WMTS",
      type: "WMTS",
      projection: "ESPG:4490",
      layer: "MapJS_js_yxdt_latest",
      matrixSet: "default",
      style: "default",
      format: "image/jpgpng",
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
      name: "rasterLabelBase",
      url: "https://jiangsu.tianditu.gov.cn/mapjs2/rest/services/MapJS/js_yxzj_latest/MapServer/WMTS",
      type: "WMTS",
      projection: "ESPG:4490",
      layer: "MapJS_js_yxzj_latest",
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
      name: "pipe",
      url: "https://gx128.portal.com/server/rest/services/pipe_cgcs2000/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32",
      opacity: 1
    },
    {
      name: "js",
      url: "https://gx128.portal.com/server/rest/services/gs/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32",
      opacity: 1
    }
  ],
};
