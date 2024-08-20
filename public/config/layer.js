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
              legendLayer: "0"
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
              legendLayer: "0"
            }]
          }]
      },
      {
        name: "综合",
        remark: "zonghe",
        type: "mainClass",
        children: [
          {
            name: "综合",
            children: [{
              name: "管线",
              type: "layer",
              source: "pipe",
              layer: "2,3,6,7,12,13,16,17,20,21,23,24,16,27,30,31,33,34,36,37,39,40,42,43",
              remark: "zh_pipe",
              detailLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43",
              legendLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43"
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
            name: "桥梁",
            children: [{
              name: "桥梁数据",
              type: "layer",
              source: "bridge",
              layer: "2",
              remark: "bridge",
              detailLayer: "2",
              legendLayer: "2"
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
            name: "道路",
            children: [{
              name: "路网分布",
              type: "layer",
              source: "road",
              layer: "2",
              remark: "road",
              detailLayer: "2",
              legendLayer: "2"
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
              name: "路灯管点",
              type: "layer",
              source: "ld",
              layer: "2",
              remark: "ld_point",
              detailLayer: "2"
            },{
              name: "路灯管线",
              type: "layer",
              source: "ld",
              layer: "3",
              remark: "ld_line",
              detailLayer: "3",
              legendLayer: "3"
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
              name: "项目分布",
              type: "layer",
              source: "program",
              layer: "0",
              remark: "program",
              detailLayer: "0",
              legendLayer: "0"
            }]
          }
        ]
      },
      {
        name: "监测",
        remark: "jiance",
        type: "mainClass",
        children: [{
          name: "场站",
          children: [{
            name: "场站分布",
            type: "layer",
            source: "cz",
            layer: "0",
            remark: "jc_cz",
            detailLayer: "0",
            legendLayer: "0"
          }]
        }, {
          name: "设备",
          remark: "shebei_fenbu",
          children: [{
            name: "设备分布",
            type: "layer",
            source: "sb",
            layer: "0",
            remark: "device",
            detailLayer: "0",
            legendLayer: "0"
          }]
        },
          {
            name: "隐患",
            remark: "fengxian_fenbu",
            children: [
              {
                name: "隐患分布",
                type: "layer",
                source: "yh",
                layer: "0",
                remark: "jc_yh",
                detailLayer: "0",
                legendLayer: "0",
              }
            ]
          }
        ]
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
            children: [{
                name: "管点管线",
                remark: "rq_pipe",
                type: "layer",
                source: "rq",
                layer: "13,14",
                detailLayer: "13,14",
                legendLayer: "14"
              }, {
                name: "管龄分布",
                remark: "rq_glfb",
                type: "layer",
                source: "rq",
                layer: "11",
                detailLayer: "11",
                legendLayer: "11"
              }, {
                name: "管径分布",
                remark: "rq_gjfb",
                type: "layer",
                source: "rq",
                layer: "12",
                detailLayer: "12",
                legendLayer: "12"
              }, {
              name: "管材分布",
              remark: "rq_gcfb",
              type: "layer",
              source: "rq",
              layer: "10",
              detailLayer: "10",
              legendLayer: "10"
            }]
          },
          {
            name: "燃气场站",
            remark: "ranqi_changzhan",
            children: [{
              name: "场站",
              remark: "rq_cz",
              type: "layer",
              source: "rq",
              layer: "3",
              detailLayer: "3",
              legendLayer: "3"
            }]
          }
        ]
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: [
          {
            name: "管点管线",
            children: [{
              name: "管点管线",
              remark: "js_pipe",
              type: "layer",
              source: "pipe",
              layer: "2,3",
              detailLayer: "2,3",
              legendLayer: "2"
            }]
          }
        ]
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "管点管线",
            children: [{
              name: "管点管线",
              remark: "ws_pipe",
              type: "layer",
              source: "ws",
              layer: "4,5",
              detailLayer: "4,5",
              legendLayer: "5"
            }]
          }
        ]
      },
      {
        name: "雨水",
        remark: "yushui",
        type: "mainClass",
        children: [
          {
            name: "管点管线",
            children: [{
              name: "管点管线",
              remark: "ys_pipe",
              type: "layer",
              source: "ys",
              layer: "5,6",
              detailLayer: "5,6",
              legendLayer: "6"
            }, {
              name: "管龄分布",
              remark: "ys_glfb",
              type: "layer",
              source: "ys",
              layer: "2",
              detailLayer: "2",
              legendLayer: "2"
            }, {
              name: "管径分布",
              remark: "ys_gjfb",
              type: "layer",
              source: "ys",
              layer: "3",
              detailLayer: "3",
              legendLayer: "3"
            }, {
              name: "管材分布",
              remark: "ys_gcfb",
              type: "layer",
              source: "ys",
              layer: "3",
              detailLayer: "4",
              legendLayer: "4"
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
            name: "道路",
            children: [{
              name: "路网分布",
              type: "layer",
              source: "road",
              layer: "2",
              remark: "road",
              detailLayer: "2",
              legendLayer: "2"
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
            name: "桥梁",
            children: [{
              name: "桥梁数据",
              type: "layer",
              source: "bridge",
              layer: "2",
              remark: "bridge",
              detailLayer: "2",
              legendLayer: "2"
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
            name: "综合",
            children: [{
              name: "管线",
              type: "layer",
              source: "pipe",
              layer: "2,3,6,7,12,13,16,17,20,21,23,24,16,27,30,31,33,34,36,37,39,40,42,43",
              remark: "zh_pipe",
              detailLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43",
              legendLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43"
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
              name: "路灯管点",
              type: "layer",
              source: "ld",
              layer: "2",
              remark: "ld_point",
              detailLayer: "2"
            },{
              name: "路灯管线",
              type: "layer",
              source: "ld",
              layer: "3",
              remark: "ld_line",
              detailLayer: "3"
            }]
          }
        ]
      }
    ],
    "running-monitoring": [
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [{
              name: "管点管线",
              remark: "rq_pipe",
              type: "layer",
              source: "rq",
              layer: "13,14",
              detailLayer: "",
              legendLayer: "14"
            }, {
              name: "燃气场站",
              remark: "rq_cz",
              type: "layer",
              source: "rq",
              layer: "3",
              detailLayer: "3",
              legendLayer: "3"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "rq_sb",
              type: "layer",
              source: "rq",
              layer: "9",
              detailLayer: "9",
              legendLayer: "9"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "报警情况",
              remark: "rq_bj",
              type: "layer",
              source: "rq",
              layer: "8",
              detailLayer: "8",
              legendLayer: "8"
            }]
          }
        ]
      },
      {
        name: "供水",
        remark: "gongshui",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [{
              name: "管点管线",
              remark: "gs_pipe",
              type: "layer",
              source: "pipe",
              layer: "2,3",
              detailLayer: "",
              legendLayer: "3"
            }, {
              name: "供水场站",
              remark: "gs_cz",
              type: "layer",
              source: "js",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "gs_sb",
              type: "layer",
              source: "js",
              layer: "2",
              detailLayer: "2",
              legendLayer: "2"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "设备分布",
              remark: "gs_bj",
              type: "layer",
              source: "js",
              layer: "1",
              detailLayer: "1",
              legendLayer: "1"
            }]
          }
        ]
      },
      {
        name: "污水",
        remark: "wushui",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [{
              name: "管点管线",
              remark: "ws_pipe",
              type: "layer",
              source: "ws",
              layer: "4,5",
              detailLayer: "",
              legendLayer: "5"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "ws_sb",
              type: "layer",
              source: "ws",
              layer: "3",
              detailLayer: "3",
              legendLayer: "3"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "报警情况",
              remark: "ws_bj",
              type: "layer",
              source: "ws",
              layer: "2",
              detailLayer: "2",
              legendLayer: "2"
            }]
          }
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
            children: [{
              name: "管点管线",
              remark: "ys_pipe",
              type: "layer",
              source: "ys",
              layer: "5,6",
              detailLayer: "",
              legendLayer: "6"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "ys_sb",
              type: "layer",
              source: "ys",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "报警情况",
              remark: "ys_bj",
              type: "layer",
              source: "ys",
              layer: "1",
              detailLayer: "1",
              legendLayer: "1"
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
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [{
              name: "路网分布",
              remark: "dl",
              type: "layer",
              source: "road",
              layer: "2",
              detailLayer: "2",
              legendLayer: "2"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "dl_sb",
              type: "layer",
              source: "road",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "报警情况",
              remark: "dl_bj",
              type: "layer",
              source: "road",
              layer: "1",
              detailLayer: "1",
              legendLayer: "1"
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
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [{
              name: "桥梁分布",
              remark: "ql",
              type: "layer",
              source: "bridge",
              layer: "2",
              detailLayer: "2",
              legendLayer: "2"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "ql_sb",
              type: "layer",
              source: "bridge",
              layer: "1",
              detailLayer: "1",
              legendLayer: "1"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "报警情况",
              remark: "ql_bj",
              type: "layer",
              source: "bridge",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            }]
          }
        ],
      },
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [
          {
            name: "监测对象",
            remark: "jiance_duixiang",
            children: [{
              name: "管点管线",
              remark: "ld_pipe",
              type: "layer",
              source: "ld",
              layer: "2,3",
              detailLayer: "",
              legendLayer: "3"
            }]
          },
          {
            name: "设备分布",
            remark: "shebei_fenbu",
            children: [{
              name: "设备分布",
              remark: "ld_sb",
              type: "layer",
              source: "ld",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            }]
          },
          {
            name: "报警情况",
            remark: "baojing_qingkuang",
            children: [{
              name: "报警情况",
              remark: "ld_bj",
              type: "layer",
              source: "ld",
              layer: "1",
              detailLayer: "1",
              legendLayer: "1"
            }]
          }
        ]
      },
      {
        name: "监测",
        remark: "jiance",
        type: "mainClass",
        children:[
          {
            name:"设备覆盖率",
            children:[{
              name: "设备覆盖率",
              remark: "sb_fgl",
              type: "layer",
              source: "deviceRatio",
              layer: "0",
              detailLayer: "",
              legendLayer: "0"
            }]
          }
        ]
      }
    ],
    "operation-maintenance": [
      {
        name: "基础",
        remark: "jichu",
        type: "mainClass",
        children: [
          {
            name: "基础",
            children: [{
              name: "大数据产业园",
              type: "layer",
              source: "sampleArea",
              layer: "0",
              remark: "dsj",
              detailLayer: "",
              legendLayer: "0"
            },{
              name: "戴庄路",
              type: "layer",
              source: "sampleRoad",
              layer: "0",
              remark: "dzl",
              detailLayer: "",
              legendLayer: "0"
            }]
          }
        ]
      },
      {
        name: "燃气",
        remark: "ranqi",
        type: "mainClass",
        children: [
          {
            name: "巡检",
            remark: "xunjian",
            children: [{
              name: "巡检对象",
              type: "layer",
              source: "rq",
              layer: "2",
              remark: "rq_xj",
              detailLayer: "2",
              legendLayer: "2"
            }, {
              name: "巡检及时率",
              type: "layer",
              source: "checkInTime",
              layer: "0",
              remark: "rq_xj_jsl",
              legendLayer: "0"
            }, {
              name: "巡检完成率",
              type: "layer",
              source: "checkCompletion",
              layer: "0",
              remark: "rq_xj_wcl",
              legendLayer: "0"
            }]
          },
          {
            name: "管养",
            remark: "guanyang",
            children: [{
              name: "管养对象",
              type: "layer",
              source: "rq",
              layer: "5",
              remark: "rq_gy",
              detailLayer: "5",
              legendLayer: "5"
            }, {
              name: "管养及时率",
              type: "layer",
              source: "maintenanceInTime",
              layer: "0",
              remark: "rq_gy_jsl",
              legendLayer: "0"
            }, {
              name: "管养完成率",
              type: "layer",
              source: "maintenanceCompletion",
              layer: "0",
              remark: "rq_gy_wcl",
              legendLayer: "0"
            }]
          },
          {
            name: "安全专项",
            remark: "weixiu_anquanzhuanxiang",
            children: [{
              name: "检查对象",
              type: "layer",
              source: "rq",
              layer: "0",
              remark: "rq_jc",
              detailLayer: "0",
              legendLayer: "0"
            }]
          },
          {
            name: "维修",
            remark: "jiancha_weixiu",
            children: [{
              name: "维修对象",
              type: "layer",
              source: "rq",
              layer: "1",
              remark: "rq_wx",
              detailLayer: "1",
              legendLayer: "1"
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
            name: "项目分布",
            remark: "base",
            children: [{
              name: "项目分布",
              type: "layer",
              source: "program",
              layer: "0",
              remark: "xmfb",
              detailLayer: "0",
              legendLayer:"0"
            },{
              name: "第三方施工项目",
              type: "layer",
              source: "thirdProgram",
              layer: "0",
              remark: "dsf",
              detailLayer: "",
              legendLayer:"0"
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
            name: "综合",
            children: [{
              name: "管线",
              type: "layer",
              source: "pipe",
              layer: "2,3,6,7,12,13,16,17,20,21,23,24,16,27,30,31,33,34,36,37,39,40,42,43",
              remark: "zh_pipe",
              detailLayer: "",
              legendLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43"
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
            children: [{
              name: "燃气场站",
              remark: "rq_station",
              type: "layer",
              source: "rq",
              layer: "3",
              detailLayer: "3",
              legendLayer: "3"
            },{
              name: "管点管线",
              remark: "rq_pipe",
              type: "layer",
              source: "rq",
              layer: "13,14",
              detailLayer: "",
              legendLayer: "14"
            }]
          },
          {
            name: "预警事件",
            children: [{
              name: "预警等级",
              remark: "rq_yj",
              type: "layer",
              source: "rq",
              layer: "6",
              detailLayer: "6",
              legendLayer: "6"
            },{
              name: "处置阶段",
              remark: "rq_cz",
              type: "layer",
              source: "rq",
              layer: "7",
              detailLayer: "7",
              legendLayer: "7"
            }]
          }
        ]
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
            children: [{
              name: "管点管线",
              remark: "ws_pipe",
              type: "layer",
              source: "ws",
              layer: "4,5",
              detailLayer: "",
              legendLayer: "5"
            },{
              name: "污水厂",
              remark: "ws_factory"
            },{
              name: "污水泵站",
              remark: "ws_pump"
            }]
          },
          {
            name: "预警事件",
            children: [{
              name: "预警等级",
              remark: "ws_yj",
              type: "layer",
              source: "ws",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            },{
              name: "处置阶段",
              remark: "ws_cz",
              type: "layer",
              source: "ws",
              layer: "1",
              detailLayer: "1",
              legendLayer: "1"
            }]
          }
        ]
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
      {
        name: "路灯",
        remark: "ludeng",
        type: "mainClass",
        children: [],
      },
      {
        name: "综合",
        remark: "zonghe",
        type: "mainClass",
        children: [
          {
            name: "综合",
            children: [{
              name: "管线",
              type: "layer",
              source: "pipe",
              layer: "2,3,6,7,12,13,16,17,20,21,23,24,16,27,30,31,33,34,36,37,39,40,42,43",
              remark: "zh_pipe",
              detailLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43",
              legendLayer: "3,7,10,13,17,21,24,27,31,34,37,40,43"
            }]
          }
        ]
      },
      {
        name: "监测",
        remark: "jiance",
        type: "mainClass",
        children: [
          {
            name: "预警事件汇总",
            children: [{
              name: "预警等级",
              remark: "yj_dj",
              type: "layer",
              source: "yj",
              layer: "0",
              detailLayer: "0",
              legendLayer: "0"
            }]
          }
        ]
      }
    ]
  },
  defaultLayers: {
    overview: ["sfq"],
    infrastructure: ["rq_pipe"],
    "project-management": ["zh_pipe", "xmfb"],
    "operation-maintenance": ["dsj", "dzl", "rq_xj"],
    "running-monitoring": ["sb_fgl"],
    "warning-disposal": ["zh_pipe", "yj_dj"],
    "overview-demonstratedArea": ["sfq"],
    "overview-示范区": ["sfq"],
    "overview-建成区": ["jcq"],
    "overview-管线": ["zh_pipe"],
    "overview-场站": ["jc_cz"],
    "overview-设备": ["device"],
    "overview-项目": ["program"],
    "overview-桥梁": ["bridge"],
    "overview-道路": ["road"],
    "overview-路灯": ["ld_point", "ld_line"],
    "overview-隐患": ["jc_yh"],
    "infrastructure-燃气管线": ["rq_pipe"],
    "infrastructure-供水管线": ["js_pipe"],
    "infrastructure-排水管线": ["ys_pipe"],
    "infrastructure-燃气管龄": ["rq_glfb"],
    "infrastructure-排水管龄": ["ys_glfb"],
    "infrastructure-燃气管径": ["rq_gjfb"],
    "infrastructure-排水管径": ["ys_gjfb"],
    "infrastructure-燃气管材": ["rq_gcfb"],
    "infrastructure-排水管材": ["ys_gcfb"],
    "infrastructure-场站分析": ["rq_cz"],
    "infrastructure-道路分析": ["road"],
    "infrastructure-桥梁分析": ["bridge"],
    "project-management-第三方施工项目": ["dsf"],
    "operation-maintenance-巡检巡查": ["dsj", "dzl", "rq_xj"],
    "operation-maintenance-巡检及时率": ["rq_xj_jsl"],
    "operation-maintenance-巡检完成率": ["rq_xj_wcl"],
    "operation-maintenance-设施管养": ["dsj", "dzl", "rq_gy"],
    "operation-maintenance-管养及时率": ["rq_gy_jsl"],
    "operation-maintenance-管养完成率": ["rq_gy_wcl"],
    "operation-maintenance-安全专项检查": ["dsj", "dzl", "rq_jc"],
    "operation-maintenance-维护维修": ["dsj", "dzl", "rq_wx"],
    "running-monitoring-燃气": ["rq_pipe", "rq_sb"],
    "running-monitoring-供水": ["gs_pipe", "gs_sb"],
    "running-monitoring-雨水": ["ys_pipe", "ys_sb"],
    "running-monitoring-污水": ["ws_pipe", "ws_sb"],
    "running-monitoring-道路": ["dl", "dl_sb"],
    "running-monitoring-桥梁": ["ql", "ql_sb"],
    "running-monitoring-路灯": ["ld_pipe", "ld_sb"],
    "running-monitoring-布设分析": ["sb_fgl"],
    "running-monitoring-燃气报警": ["rq_bj"],
    "running-monitoring-供水报警": ["gs_bj"],
    "running-monitoring-排水报警": ["ys_bj", "ws_bj"],
    "running-monitoring-道路报警": ["dl_bj"],
    "running-monitoring-桥梁报警": ["ql_bj"],
    "warning-disposal-燃气": ["rq_pipe", "rq_yj"],
    "warning-disposal-污水": ["ws_pipe", "ws_yj"],
    "warning-disposal-处置阶段分析": ["rq_cz"]
  },
  getEnglishKey: false,
  staticPopLayers:["ws_yj"],
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
      url: "https://gx128.portal.com/server/rest/services/ql_full/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "road",
      url: "https://gx128.portal.com/server/rest/services/dl_full/MapServer",
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
      name: "rq",
      url: "https://gx128.portal.com/server/rest/services/rq_full/MapServer",
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
      name: "fx",
      url: "https://gx128.portal.com/server/rest/services/fx/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "yh",
      url: "https://gx128.portal.com/server/rest/services/yh/MapServer",
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
    },
    {
      name: "thirdProgram",
      url: "https://gx128.portal.com/server/rest/services/dsfsg/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "deviceRatio",
      url: "https://gx128.portal.com/server/rest/services/fgl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "checkCompletion",
      url: "https://gx128.portal.com/server/rest/services/xjwcl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "checkInTime",
      url: "https://gx128.portal.com/server/rest/services/xjjsl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "maintenanceCompletion",
      url: "https://gx128.portal.com/server/rest/services/gywcl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "maintenanceInTime",
      url: "https://gx128.portal.com/server/rest/services/gyjsl/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "cz",
      url: "https://gx128.portal.com/server/rest/services/zx_cz/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "sb",
      url: "https://gx128.portal.com/server/rest/services/zx_device/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    },
    {
      name: "yj",
      url: "https://gx128.portal.com/server/rest/services/zx_yj/MapServer",
      type: "arcgis_WMS",
      projection: "EPSG:4490",
      format: "image/png32"
    }
  ]
};
window.map3dServer = "http://gx128.portal.com:8090"
window.thirdPartySys = ""
