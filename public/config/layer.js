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
            children: [{
              name: "示范区",
              type: "layer",
              source: "demonstratedArea",
              layer: "0",
              remark: "sfq",
              detailLayer: "",
              legendLayer: "sfq"
            }]
          },
          {
            name: "建成区",
            remark: "jianchengqu",
            children: [{
              name: "建成区",
              type: "layer",
              source: "builtArea",
              layer: "0",
              remark: "jcq",
              detailLayer: "",
              legendLayer: "jcq"
            }]
          }]
      },
      {
        name: "综合",
        remark: "zonghe",
        type: "mainClass",
        children: [
          {
            name: "给水",
            children: [{
              name: "给水",
              type: "layer",
              source: "pipe",
              layer: "2,3",
              remark: "zh_js",
              detailLayer: "2,3",
              legendLayer: "2,3"
            }]
          },
          {
            name: "排水",
            children: [{
              name: "污水",
              type: "layer",
              source: "pipe",
              layer: "6,7",
              remark: "zh_ps"
            },{
              name: "雨水",
              type: "layer",
              source: "pipe",
              layer: "9,10",
              remark: "zh_ys"
            },{
              name: "雨污合流",
              type: "layer",
              source: "pipe",
              layer: "12,13",
              remark: "zh_hs"
            }]
          },
          {
            name: "燃气",
            children: [{
              name: "天然气",
              type: "layer",
              source: "pipe",
              layer: "16,17",
              remark: "zh_rq"
            }]
          },
          {
            name: "电力",
            children: [{
              name: "供电",
              type: "layer",
              source: "pipe",
              layer: "20.21",
              remark: "zh_gd"
            },{
              name: "路灯",
              type: "layer",
              source: "pipe",
              layer: "23,24",
              remark: "zh_ld"
            },{
              name: "信号",
              type: "layer",
              source: "pipe",
              layer: "26,27",
              remark: "zh_xh"
            }]
          },
          {
            name: "通讯",
            children: [{
              name: "电视",
              type: "layer",
              source: "pipe",
              layer: "30,31",
              remark: "zh_ds"
            },{
              name: "电力通讯",
              type: "layer",
              source: "pipe",
              layer: "33,34",
              remark: "zh_ex"
            },{
              name: "移动",
              type: "layer",
              source: "pipe",
              layer: "36,37",
              remark: "zh_yd"
            },{
              name: "联通",
              type: "layer",
              source: "pipe",
              layer: "39,40",
              remark: "zh_lt"
            },{
              name: "电信",
              type: "layer",
              source: "pipe",
              layer: "42,43",
              remark: "zh_dx"
            }]
          }
        ]
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "桥梁",
              type: "layer",
              source: "bridge",
              layer: "0",
              remark: "bridge"
            }]
          }
        ]
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "道路中线",
              type: "layer",
              source: "road",
              layer: "0",
              remark: "road"
            }]
          }
        ]
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "管线",
              type: "layer",
              source: "ld",
              layer: "2,3",
              remark: "ld_pipe"
            }]
          }
        ]
      },
      {
        name: "项目",
        remark: "xiangmu",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "范围",
              type: "layer",
              source: "program",
              layer: "0",
              remark: "program"
            }]
          }
        ]
      },
      {
        name: "监测",
        remark: "ranqi",
        type: "mainClass",
        children: [{
          name: "监测",
          remark: "jiance_duixiang",
          children: [{
            name: "监测对象",
            type: "layer",
            source: "rq",
            layer: "2",
            remark: "jcdx_rq",
            detailLayer: "",
            legendLayer: ""
          }]
        }, {
          name: "设备",
          remark: "shebei_fenbu",
          children: [{
            name: "设备分布",
            type: "layer",
            source: "rq",
            layer: "7",
            remark: "device_dis_rq",
            detailLayer: "",
            legendLayer: ""
          }]
        },
          {
            name: "风险",
            remark: "fengxian_fenbu",
            children: [
              {
                name: "风险分布",
                type: "layer",
                source: "rq",
                layer: "2,3",
                remark: "js",
                detailLayer: "3",
                legendLayer: "3",
              }
            ]
          },
          {
            name: "隐患",
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
      }
    ],
    infrastructure: [
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "管点管线",
            children: [
              {
                name: "管点",
                remark: "rqpoint",
                type: "layer",
                source: "rq",
                layer: "11",
                detailLayer: "11",
                legendLayer: "",
              },
              {
                name: "管线",
                remark: "rqline",
                type: "layer",
                source: "rq",
                layer: "12",
                detailLayer: "12",
                legendLayer: "",
              }
            ]
          },
          {
            name: "管线分布",
            children: [
              {
                name: "按管龄分布",
                remark: "rq_glfb",
                type: "layer",
                source: "rq",
                layer: "9",
                detailLayer: "9",
                legendLayer: "9",
              },
              {
                name: "按管径分布",
                remark: "rq_gjfb",
                type: "layer",
                source: "rq",
                layer: "10",
                detailLayer: "10",
                legendLayer: "10",
              }
            ],
          },
          {
            name: "燃气场站",
            remark: "ranqi_changzhan",
            children: [{
              name: "场站",
              remark: "rq_cz",
              type: "layer",
              source: "rq",
              layer: "1",
              detailLayer: "1"
            }]
          }
        ]
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: []
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: []
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [
          {
            name: "管点管线",
            children: [
              {
                name: "管点",
                remark: "yspoint",
                type: "layer",
                source: "ys",
                layer: "5",
                detailLayer: "5",
                legendLayer: "",
              },
              {
                name: "管线",
                remark: "ysline",
                type: "layer",
                source: "ys",
                layer: "6",
                detailLayer: "6",
                legendLayer: "",
              }
            ]
          },
          {
            name: "管线分布",
            children: [
              {
                name: "按管龄分布",
                remark: "ys_glfb",
                type: "layer",
                source: "ys",
                layer: "3",
                detailLayer: "3",
                legendLayer: "3",
              },
              {
                name: "按管径分布",
                remark: "ys_gjfb",
                type: "layer",
                source: "ys",
                layer: "2",
                detailLayer: "2",
                legendLayer: "2",
              }
            ],
          }
        ]
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "道路中线",
              type: "layer",
              source: "road",
              layer: "0",
              remark: "road"
            }]
          }
        ]
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "桥梁",
              type: "layer",
              source: "bridge",
              layer: "0",
              remark: "bridge"
            }]
          }
        ]
      },
      {
        name: "综合",
        remark: "zonghe",
        type: "mainClass",
        children: [
          {
            name: "给水",
            children: [{
              name: "给水",
              type: "layer",
              source: "pipe",
              layer: "2,3",
              remark: "zh_js"
            }]
          },
          {
            name: "排水",
            children: [{
              name: "污水",
              type: "layer",
              source: "pipe",
              layer: "6,7",
              remark: "zh_ps"
            },{
              name: "雨水",
              type: "layer",
              source: "pipe",
              layer: "9,10",
              remark: "zh_ys"
            },{
              name: "雨污合流",
              type: "layer",
              source: "pipe",
              layer: "12,13",
              remark: "zh_hs"
            }]
          },
          {
            name: "燃气",
            children: [{
              name: "天然气",
              type: "layer",
              source: "pipe",
              layer: "16,17",
              remark: "zh_rq"
            }]
          },
          {
            name: "电力",
            children: [{
              name: "供电",
              type: "layer",
              source: "pipe",
              layer: "20.21",
              remark: "zh_gd"
            },{
              name: "路灯",
              type: "layer",
              source: "pipe",
              layer: "23,24",
              remark: "zh_ld"
            },{
              name: "信号",
              type: "layer",
              source: "pipe",
              layer: "26,27",
              remark: "zh_xh"
            }]
          },
          {
            name: "通讯",
            children: [{
              name: "电视",
              type: "layer",
              source: "pipe",
              layer: "30,31",
              remark: "zh_ds"
            },{
              name: "电力通讯",
              type: "layer",
              source: "pipe",
              layer: "33,34",
              remark: "zh_ex"
            },{
              name: "移动",
              type: "layer",
              source: "pipe",
              layer: "36,37",
              remark: "zh_yd"
            },{
              name: "联通",
              type: "layer",
              source: "pipe",
              layer: "39,40",
              remark: "zh_lt"
            },{
              name: "电信",
              type: "layer",
              source: "pipe",
              layer: "42,43",
              remark: "zh_dx"
            }]
          }
        ]
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "管线",
              type: "layer",
              source: "ld",
              layer: "2,3",
              remark: "ld_pipe"
            }]
          }
        ]
      }
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
            name: "安全专项",
            remark: "weixiu_anquanzhuanxiang",
            children: [],
          },
          {
            name: "维修",
            remark: "jiancha_weixiu",
            children: [],
          },
        ],
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: []
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: []
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: []
      },
      {
        name: "道路",
        remark: "daolu",
        type: "mainClass",
        children: []
      },
      {
        name: "桥梁",
        remark: "qiaoliang",
        type: "mainClass",
        children: []
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: []
      },
    ],
    "project-management": [
      {
        name: "项目",
        remark: "xiangmu",
        type: "mainClass",
        children: [
          {
            name: "基础",
            remark: "base",
            children: [{
              name: "项目分布",
              type: "layer",
              source: "program",
              layer: "0",
              remark: "xmfb",
              detailLayer: "0"
            }]
          }
        ],
      },
      {
        name: "综合",
        remark: "zonghe",
        type: "mainClass",
        children: [
          {
            name: "给水",
            children: [{
              name: "给水",
              type: "layer",
              source: "pipe",
              layer: "2,3",
              remark: "zh_js"
            }]
          },
          {
            name: "排水",
            children: [{
              name: "污水",
              type: "layer",
              source: "pipe",
              layer: "6,7",
              remark: "zh_ps"
            },{
              name: "雨水",
              type: "layer",
              source: "pipe",
              layer: "9,10",
              remark: "zh_ys"
            },{
              name: "雨污合流",
              type: "layer",
              source: "pipe",
              layer: "12,13",
              remark: "zh_hs"
            }]
          },
          {
            name: "燃气",
            children: [{
              name: "天然气",
              type: "layer",
              source: "pipe",
              layer: "16,17",
              remark: "zh_rq"
            }]
          },
          {
            name: "电力",
            children: [{
              name: "供电",
              type: "layer",
              source: "pipe",
              layer: "20.21",
              remark: "zh_gd"
            },{
              name: "路灯",
              type: "layer",
              source: "pipe",
              layer: "23,24",
              remark: "zh_ld"
            },{
              name: "信号",
              type: "layer",
              source: "pipe",
              layer: "26,27",
              remark: "zh_xh"
            }]
          },
          {
            name: "通讯",
            children: [{
              name: "电视",
              type: "layer",
              source: "pipe",
              layer: "30,31",
              remark: "zh_ds"
            },{
              name: "电力通讯",
              type: "layer",
              source: "pipe",
              layer: "33,34",
              remark: "zh_ex"
            },{
              name: "移动",
              type: "layer",
              source: "pipe",
              layer: "36,37",
              remark: "zh_yd"
            },{
              name: "联通",
              type: "layer",
              source: "pipe",
              layer: "39,40",
              remark: "zh_lt"
            },{
              name: "电信",
              type: "layer",
              source: "pipe",
              layer: "42,43",
              remark: "zh_dx"
            }]
          }
        ]
      }
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
    overview: ["zh_js"],
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
      url: "https://jiangsu.tianditu.gov.cn/mapjs2/rest/services/MapJS/js_yxdt_latest/MapServer/WMTS",
      type: "WMTS",
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
      url: "https://jiangsu.tianditu.gov.cn/mapjs2/rest/services/MapJS/js_yxzj_latest/MapServer/WMTS",
      type: "WMTS",
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
      name: "demonstratedArea",
      url: "https://gx128.portal.com/server/rest/services/sfq/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "builtArea",
      url: "https://gx128.portal.com/server/rest/services/jcq/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "sampleRoad",
      url: "https://gx128.portal.com/server/rest/services/dzl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "sampleArea",
      url: "https://gx128.portal.com/server/rest/services/dsj/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "pipe",
      url: "https://gx128.portal.com/server/rest/services/pipe_cgcs2000/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "bridge",
      url: "https://gx128.portal.com/server/rest/services/ql/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "road",
      url: "https://gx128.portal.com/server/rest/services/dl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "waterLoggingPoint",
      url: "https://gx128.portal.com/server/rest/services/yld/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "gs",
      url: "https://gx128.portal.com/server/rest/services/gs/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "rq",
      url: "https://gx128.portal.com/server/rest/services/rq_full/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "ys",
      url: "https://gx128.portal.com/server/rest/services/ys_full/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "ws",
      url: "https://gx128.portal.com/server/rest/services/ws_full/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "js",
      url: "https://gx128.portal.com/server/rest/services/js_full/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "ld",
      url: "https://gx128.portal.com/server/rest/services/ld_full/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "program",
      url: "https://gx128.portal.com/server/rest/services/xm/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    }
  ],
};
