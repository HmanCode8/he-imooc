var CoreEX = (function (exports) {
  'use strict';

  /**
   * Returns the first parameter if not undefined, otherwise the second parameter.
   * Useful for setting a default value for a parameter.
   *
   * @function
   *
   * @param {*} a
   * @param {*} b
   * @returns {*} Returns the first parameter if not undefined, otherwise the second parameter.
   *
   * @example
   * param = defaultValue(param, 'default');
   */
  function defaultValue(a, b) {
    if (a !== undefined && a !== null) {
      return a;
    }
    return b;
  }

  /**
   * A frozen empty object that can be used as the default value for options passed as
   * an object literal.
   * @type {Object}
   * @memberof defaultValue
   */
  defaultValue.EMPTY_OBJECT = Object.freeze({});

  /**
   * @function
   *
   * @param {*} value The object.
   * @returns {Boolean} Returns true if the object is defined, returns false otherwise.
   *
   * @example
   * if (defined(positions)) {
   *      doSomething();
   * } else {
   *      doSomethingElse();
   * }
   */
  function defined(value) {
    return value !== undefined && value !== null;
  }

  /**
   * Constructs an exception object that is thrown due to a developer error, e.g., invalid argument,
   * argument out of range, etc.  This exception should only be thrown during development;
   * it usually indicates a bug in the calling code.  This exception should never be
   * caught; instead the calling code should strive not to generate it.
   * <br /><br />
   * On the other hand, a {@link RuntimeError} indicates an exception that may
   * be thrown at runtime, e.g., out of memory, that the calling code should be prepared
   * to catch.
   *
   * @alias DeveloperError
   * @constructor
   * @extends Error
   *
   * @param {String} [message] The error message for this exception.
   *
   * @see RuntimeError
   */
  function DeveloperError(message) {
    /**
     * 'DeveloperError' indicating that this exception was thrown due to a developer error.
     * @type {String}
     * @readonly
     */
    this.name = "DeveloperError";

    /**
     * The explanation for why this exception was thrown.
     * @type {String}
     * @readonly
     */
    this.message = message;

    //Browsers such as IE don't have a stack property until you actually throw the error.
    let stack;
    try {
      throw new Error();
    } catch (e) {
      stack = e.stack;
    }

    /**
     * The stack trace of this exception, if available.
     * @type {String}
     * @readonly
     */
    this.stack = stack;
  }

  if (defined(Object.create)) {
    DeveloperError.prototype = Object.create(Error.prototype);
    DeveloperError.prototype.constructor = DeveloperError;
  }

  DeveloperError.prototype.toString = function () {
    let str = `${this.name}: ${this.message}`;

    if (defined(this.stack)) {
      str += `\n${this.stack.toString()}`;
    }

    return str;
  };

  /**
   * @private
   */
  DeveloperError.throwInstantiationError = function () {
    throw new DeveloperError(
      "This function defines an interface and should not be called directly."
    );
  };

  /**
   * 字典表
   * @alias Dictionary
   * @constructor
   */
  function Dictionary(){
      this.dirctionary = {};
  }

  /**
   * 添加键值对
   * @param {String} key 键
   * @param {Object} value 值
   */
  Dictionary.prototype.add = function(key,value) {
      this.dirctionary[key] = value;
  };
  /**
   * 删除键值对
   * @param {String} key 键
   * @returns {Boolean} 包含返回true,否则返回false
   */
  Dictionary.prototype.remove =function(key) {
      if(this.dirctionary.hasOwnProperty(key)) {
          delete this.dirctionary[key];
          return true;
      }
      return false;
  };

  /**
   * 是否包含键
   * @param {String} key 键
   * @returns {Boolean} 包含返回true,否则返回false
   */
  Dictionary.prototype.contain=function(key) {
      if(this.dirctionary.hasOwnProperty(key)) {
          return true
      }
      return false;
  };

  /**
   * 删除字典表
   * @param {String} key 键
   * @returns {Boolean} 包含返回true,否则返回false
   */
  Dictionary.prototype.removeAll =function(key) {
      this.dirctionary={};
      
  };

  Object.defineProperties(Dictionary.prototype,{
      /**
       * 字典表长度
       * @memberof Dictionary.prototype
       * @type {Number}
       * @readonly
       * @default 0
       */
      length:{
          get:function(){
              return Object.getOwnPropertyNames(this.dirctionary).length
          }
      }
  });

  /**
   * 遍历字典表
   * @param {Function} fun 回调函数
   */
  Dictionary.prototype.forEach=function(fun){
      for(var key in this.dirctionary){
          fun(key,this.dirctionary[key]);
      }
  };

  /**
   * 获取键值对
   * @param {String} key 键
   * @returns {Object} 值
   */
  Dictionary.prototype.get = function(key) {
      return this.dirctionary.hasOwnProperty(key)?  this.dirctionary[key] : undefined;
  };


  Dictionary.prototype.toString = function(){
      for (const iterator in this.dirctionary) {
          console.log(this.dirctionary[iterator]);
      }
  };

  /**
   * 转成数组
   * @returns {Array} 数组
   */
  Dictionary.prototype.toArray = function(){
      var valArr = Object.keys(this.dirctionary).map((i)=> this.dirctionary[i]);
      return valArr;
  };

  const SceneGISEXScriptRegex = /((?:.*\/)|^)SceneGISEX(\.min)?\.js(?:\?|\#|$)/;
  let baseUrl;

  function getBaseUrl() {
      const scripts = document.getElementsByTagName("script");
      for (let i = 0, len = scripts.length; i < len; ++i) {
          const src = scripts[i].getAttribute("src");
          const result = SceneGISEXScriptRegex.exec(src);
          if (result !== null) {
              return result[1] + "Assets/";
          }
      }
  }

  function getAssetUrl(offsetUrl) {
      if (!baseUrl) {
          baseUrl = getBaseUrl();
      }
      return baseUrl + offsetUrl;
  }

  var global_dic = new Dictionary();

  function getData(response,resFormat){ //支持以下常用的几种格式
    var newres = response;
    if(resFormat==false){ //避免万一踩坑，返回的是保留属性，又想拿到原始数据的情况
      return newres;
    }
    if (resFormat) {
      let pros=resFormat.split(".");
      for(let i=0;i<pros.length;i++){
        newres=newres[pros[i]];
      }
      return newres;
    }
    if (response.body&&response.body.length) {
      newres = response.body;
    } else if (response.result&&response.result.length) {
      newres = response.result;
    } else if (response.data&&response.data.length) {
        newres = response.data;  
    } else if (response.source) {
      if (response.source.length) {
        newres = response.source;
      } else if (response.source.data&&response.source.data.length) {
        newres = response.source.data;
      }
    }
    return newres;
  }
  //ajax 解析器
  function urlResolve(url, option={}) {
    var _opt = {};
    var _obj = JSON.stringify(option);
    _opt = JSON.parse(_obj);

    //id赋值判断
    var id_ = option.method;
    for (let key in option.body) {
      id_ = id_ + key + "=" + option.body[key] + "&";
    }

    if (option.method == "get" && option.body) {
      url = url + "?";
      for (let key in option.body) {
        url = url + key + "=" + option.body[key] + "&";
        //?action=getantifireequip&
      }
      url = url.slice(0, url.length - 1);
      _opt = {
        method: 'get'
      };
    }
    if (_opt.method == "post") {//post 传参有以下几种情况
      switch(option.contentType){
        case "multipart/form-data":
          let formData = new FormData();
          for (var key in _opt.body) {
            formData.append(key, _opt.body[key]);
            
          }
          _opt.body = formData;
          break;
        case "application/json":
          break;
        case "application/x-www-form-urlencoded":
          let urlSw="";
          for (let key in option.body) {
            urlSw = urlSw + key + "=" + option.body[key] + "&";
           
          }
          urlSw = urlSw.slice(0, urlSw.length - 1);
          _opt.body=urlSw;
          //_opt.body=qs.stringify(_opt.body);//qs.stringify({ 'bar': 123 });//'bar=123'
          break;
      }
    }
    id_ = id_ + url;
    var curTime = new Date();
    var pre = global_dic.get(id_);
    if (pre) { //这里需要把之前的删掉
      var timedis = curTime.getTime() - pre.time.getTime();
      if (timedis < 5000) { //如果小于10秒
        return pre.data;
      }
      else {//如果大于10秒，则删除,后面继续添加
        global_dic.remove(id_);
      }

    }
    var isAuth = option.isAuth;//走专用代理授权
    var _p = new Promise((resolve, reject) => {
      if (isAuth && window.$axios) {
        
        window.$axios({
          url: url,
          ..._opt
        }).then((response) => {
          var newres = getData(response,_opt.resFormat);
          resolve(newres);
        });
      } else {
        fetch(url, _opt).then(res => res.json())
          .then(response => {
            var newres = getData(response,_opt.resFormat);
            resolve(newres);
          })
          .catch(error => {
            resolve([]);
            console.log('Error:', error);
          });
      }

    });
    var data_ = {
      time: curTime,
      data: _p
    };
    global_dic.add(id_, data_);

    return _p;
  }

  String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
      if (arguments.length == 1 && typeof args == "object") {
        for (var key in args) {
          if (args[key] != undefined) {
            var reg = new RegExp("({" + key + "})", "g");
            //result = result.replace(reg, args[key]);
            if (args[key] instanceof Object) {
              reg = new RegExp('("{' + key + '}")', "g");
              var argstring = JSON.stringify(args[key]);
              result = result.replace(reg, argstring);
            } else {
              result = result.replace(reg, args[key]);
            }
          }
        }
      } else {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] != undefined) {
            var reg = new RegExp("({)" + i + "(})", "g");
            //result = result.replace(reg, arguments[i]);
            if (arguments[i] instanceof Object) {
              reg = new RegExp('("{' + key + '}")', "g");
              var argstring = JSON.stringify(arguments[i]);
              result = result.replace(reg, argstring);
            } else {
              result = result.replace(reg, arguments[i]);
            }
          }
        }
      }
    }
    return result;
  };

  var string = {};

  /**
   *  扩展函数,有三维独立函数，只在三维中使用
   * @exports MathEX
   * @alias MathEX
   */
  const MathEX = {};

  /**
   * 创建唯一标识码
   * @returns {String} 标识码字符串
   *
   */
  MathEX.createUID = function () {
    return "xxxx-xxxx-xxxx-xxxx-xxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };


  /**
   * 贝塞尔基点
   * @param {Array} anchorpoints 基点数组
   * @param {Number} pointsAmount 基点数量
   * @returns {Array} 坐标数组
   *
   */
  MathEX.CreateBezierPoints = function (anchorpoints, pointsAmount) {
    var points = [];
    for (var i = 0; i < pointsAmount; i++) {
      var xyzs = MultiPointBezier(anchorpoints, i / pointsAmount);
      points.push(xyzs[0], xyzs[1], xyzs[2]);
    }
    return points;
  };

  function MultiPointBezier(points, t) {
    var len = points.length / 3;

    var lon = 0,
      lat = 0,
      alt = 0;

    var erxiangshi = function (start, end) {
      var cs = 1,
        bcs = 1;

      while (end > 0) {
        cs *= start;

        bcs *= end;

        start--;

        end--;
      }

      return cs / bcs;
    };

    for (var i = 0; i < len; i++) {
      lon +=
        points[0 + i * 3] *
        Math.pow(1 - t, len - 1 - i) *
        Math.pow(t, i) *
        erxiangshi(len - 1, i);

      lat +=
        points[1 + i * 3] *
        Math.pow(1 - t, len - 1 - i) *
        Math.pow(t, i) *
        erxiangshi(len - 1, i);

      alt +=
        points[2 + i * 3] *
        Math.pow(1 - t, len - 1 - i) *
        Math.pow(t, i) *
        erxiangshi(len - 1, i);
    }

    return [lon, lat, alt];
  }

  /**
   * 局部坐标转经纬度
   * @param {Number} x 笛卡尔x坐标
   * @param {Number} x 笛卡尔y坐标
   * @param {Number} z 笛卡尔z坐标
   * @param {Object} center 带有lon(经度)，lat（纬度），alt（高度） 属性的对象
   * @returns {Object} 带有lon(经度)，lat（纬度），alt（高度） 属性的对象
   *
   */
  MathEX.convertJBToJW = function (x, y, z, center) {
    var position = new SceneGIS.Cartesian3.fromDegrees(
      center.lon,
      center.lat,
      center.alt
    );
    var mat = SceneGIS.Transforms.eastNorthUpToFixedFrame(position);
    var rotationX = SceneGIS.Matrix4.fromRotationTranslation(
      SceneGIS.Matrix3.fromRotationZ(SceneGIS.Math.toRadians(center.angle))
    );
    SceneGIS.Matrix4.multiply(mat, rotationX, mat);
    var realPos = new SceneGIS.Cartesian3();
    var teppos = new SceneGIS.Cartesian3(x, y, z);
    SceneGIS.Matrix4.multiplyByPoint(mat, teppos, realPos);
    var cartographic = SceneGIS.Cartographic.fromCartesian(realPos);
    // // 将弧度转为度的十进制度表示
    var lon = SceneGIS.Math.toDegrees(cartographic.longitude);
    var lat = SceneGIS.Math.toDegrees(cartographic.latitude);
    var h_ = cartographic.height;
    return {
      lon: lon,
      lat: lat,
      alt: h_,
    };
  };

  /**
   * 笛卡尔转局部坐标
   * @param {Number} x 笛卡尔x坐标
   * @param {Number} x 笛卡尔y坐标
   * @param {Number} z 笛卡尔z坐标
   * @param {Object} center 带有lon(经度)，lat（纬度），alt（高度） 属性的对象
   * @returns {Cartesian3} 返回Cartesian3对象
   *
   */
  MathEX.convertCarToJB = function (x, y, z, center) {
    var position = new SceneGIS.Cartesian3.fromDegrees(
      center.lon,
      center.lat,
      center.alt
    );
    var mat = SceneGIS.Transforms.eastNorthUpToFixedFrame(position);
    var rotationX = SceneGIS.Matrix4.fromRotationTranslation(
      SceneGIS.Matrix3.fromRotationZ(SceneGIS.Math.toRadians(center.angle))
    );
    SceneGIS.Matrix4.multiply(mat, rotationX, mat);
    SceneGIS.Matrix4.inverse(mat, mat);
    var realPos = new SceneGIS.Cartesian3();
    var teppos = new SceneGIS.Cartesian3(x, y, z);
    SceneGIS.Matrix4.multiplyByPoint(mat, teppos, realPos);
    return realPos;
  };

  /**
   * 经纬度转局部坐标
   * @param {Number} lon 经度
   * @param {Number} lat 纬度
   * @param {Number} alt 高度
   * @param {Object} center 带有lon(经度)，lat（纬度），alt（高度） 属性的对象
   * @returns {Cartesian3} 返回Cartesian3对象
   *
   */
  MathEX.convertJWToJB = function (lon, lat, alt, center) {
    var position = new SceneGIS.Cartesian3.fromDegrees(
      center.lon,
      center.lat,
      center.alt
    );
    var mat = SceneGIS.Transforms.eastNorthUpToFixedFrame(position);
    var rotationX = SceneGIS.Matrix4.fromRotationTranslation(
      SceneGIS.Matrix3.fromRotationZ(SceneGIS.Math.toRadians(center.angle))
    );
    SceneGIS.Matrix4.multiply(mat, rotationX, mat);
    SceneGIS.Matrix4.inverse(mat, mat);
    var realPos = new SceneGIS.Cartesian3();
    var teppos = new SceneGIS.Cartesian3.fromDegrees(lon, lat, alt);
    SceneGIS.Matrix4.multiplyByPoint(mat, teppos, realPos);
    return realPos;
  };

  /**
   * wkt转数组，只有wkt字符串可以转为数组时才生效，部分多面体无法转换
   * @param {String} fieldvalue wkt字符串
   * @param {Number} alt 高度
   * @returns {Array} 返回数组，转换失败，返回空数组
   */
  MathEX.wktToArray = function (fieldvalue, alt = 0) {
    if (fieldvalue.indexOf("POINT") > -1) {
      var posstrarr = fieldvalue
        .replace(/POINT/g, "")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .split(",");
      var posarr = [];
      for (var s = 0; s < posstrarr.length; s++) {
        var tmparr = posstrarr[s].split(" ");
        var tmparr1 = [];
        for (var t of tmparr) {
          if (t != "") {
            tmparr1.push(t);
          }
        }
        posarr.push(parseFloat(tmparr1[0]));
        posarr.push(parseFloat(tmparr1[1]));
        var alt_ = alt != undefined ? alt : alt;
        posarr.push(alt_ ? alt_ : 0);
      }

      return posarr;
    }
    if (fieldvalue.indexOf("LINESTRING") > -1) {
      var posstrarr = fieldvalue
        .replace(/LINESTRING/g, "")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .split(",");
      var posarr = [];

      for (var s = 0; s < posstrarr.length; s++) {
        var tmparr = posstrarr[s].split(" ");
        var tmparr1 = [];
        for (var t of tmparr) {
          if (t != "") {
            tmparr1.push(t);
          }
        }

        var alt_ = alt;

        posarr.push(parseFloat(tmparr1[0]));
        posarr.push(parseFloat(tmparr1[1]));
        posarr.push(alt_ ? parseFloat(alt_) : 0);
      }

      return posarr;
    }
    if (fieldvalue.indexOf("POLYGON Z") > -1) {
      var posstrarr = fieldvalue
        .replace(/POLYGON Z/g, "")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .split(",");
      var posarr = [];
      for (var s = 0; s < posstrarr.length; s++) {
        var tmparr = posstrarr[s].split(" ");
        var tmparr1 = [];
        for (var t of tmparr) {
          if (t != "") {
            tmparr1.push(t);
          }
        }

        //var alt_=alt[altIndex]!=undefined?alt[altIndex]:(alt[0]!=undefined?alt[0]:alt);

        posarr.push(parseFloat(tmparr1[0]));
        posarr.push(parseFloat(tmparr1[1]));
        posarr.push(parseFloat(tmparr1[2]));
      }

      return posarr;
    } else if (fieldvalue.indexOf("POLYGON") > -1) {
      var posstrarr = fieldvalue
        .replace(/POLYGON/g, "")
        .replace(/\(/g, "")
        .replace(/\)/g, "")
        .split(",");
      var posarr = [];
      for (var s = 0; s < posstrarr.length; s++) {
        var tmparr = posstrarr[s].split(" ");
        var tmparr1 = [];
        for (var t of tmparr) {
          if (t != "") {
            tmparr1.push(t);
          }
        }

        var alt_ = alt;

        posarr.push(parseFloat(tmparr1[0]));
        posarr.push(parseFloat(tmparr1[1]));
        posarr.push(alt_ ? parseFloat(alt_) : 20);
      }

      return posarr;
    }
    return [];
  };

  //symbol 的保留字段,这个类写的很不好，需要重构

  let symbolKeys = [
    "id",
    "positions",
    "defaultAlt",
    "geoType",
    "nearDistance",
    "farDistance",
    "wkts",
    "rule",
  ];

  function symbolRuleResolve(node, option = {}) {
    let layerid = option.id;
    let symbol = option.symbol;
    if (!symbol || symbol == "") {
      //没有symbol 不解译
      return {};
    }

    SceneGIS.Check.typeOf.object("node", node);
    var rule = symbol.rule;
    var dataNew = {};
    var data = undefined;
    let templete = symbol.templete;

    //#region  以下代码是为了兼容之前的场景文件.只要symbol配置了geo_就认为沿用老版本
    let ispre = false;
    if (symbol.geo_point) {
      var shp = geoResolve(symbol.geo_point, "point", symbol.defaultAlt, node);
      node.geo_point = shp;
      node.geo_lon = node.geo_point[0];
      node.geo_lat = node.geo_point[1];
      node.geo_alt = node.geo_point[2];
      ispre = true;
    }
    if (symbol.geo_polyLine) {
      var shp = geoResolve(
        symbol.geo_polyLine,
        "polyLine",
        symbol.defaultAlt,
        node
      );
      node.geo_polyLine = shp;
      ispre = true;
    }
    if (symbol.geo_polygon) {
      var shp = geoResolve(
        symbol.geo_polygon,
        "polygon",
        symbol.defaultAlt,
        node
      );
      node.geo_polygon = shp;
      ispre = true;
    }
    //#endregion

    if (!SceneGIS.defined(rule) || rule == "") {
      data = symbol;

      if (!data) return undefined;
      dataNew = data;
    } else if (rule != "" && templete) {
      //如果rule存在，根据rule和templete解析
      for (var key in symbol) {
        if (key != "templete") {
          dataNew[key] = symbol[key];
        }
      }
      const f = new Function("node", rule);
      var id = f(node);
      if (!SceneGIS.defined(id)) {
        throw new DeveloperError(`图层${layerid}的symbol的rule解析出错,返回为空`);
      }
      if (templete[id]) {
        for (var key in templete[id]) {
          if (symbolKeys.indexOf(key) == -1) {
            //不能覆盖保留字段
            dataNew[key] = templete[id][key];
          }
        }
      }
    }
    //#region id 兼容
    if (
      dataNew.id &&
      dataNew.id.indexOf("{") == -1 &&
      dataNew.id.indexOf("}") == -1
    ) {
      if (!node.id) {
        //如果id已经存在，不可以修改id
        let id_ = node[dataNew.id] ? node[dataNew.id] : MathEX.createUID();
        node.id = layerid + "*" + id_;
      }
    }

    //#endregion
    //注意不能修改原Options。
    var _obj = JSON.stringify(dataNew);
    _obj = _obj.format(node); //最重要的解析语句
    dataNew = JSON.parse(_obj);
    delete dataNew.templete;
    //#region  以下代码为兼容
    if (ispre && !dataNew.positions) {
      if (dataNew.geo_point && dataNew.geo_point.length == 3) {
        dataNew.positions = dataNew.geo_point;
      }
      if (dataNew.geo_polyLine && dataNew.geo_polyLine.length > 5) {
        dataNew.positions = dataNew.geo_polyLine;
      }
      if (dataNew.geo_polygon && dataNew.geo_polygon.length > 5) {
        dataNew.positions = dataNew.geo_polygon;
      }
    }
    //#endregion

    /*
     *解译完成，还有一些重要工作需要做，
     *1: 计算合适的对象lod。
     *2：如果数据没有高度，找到合适的高度字段
     *3：需要重新解译positions。
     *4: 新版本的id赋值
     */
    node.nearDistance = dataNew.nearDistance ? dataNew.nearDistance : 0;
    node.farDistance = dataNew.farDistance ? dataNew.farDistance : Infinity;
    if (dataNew.id) {
      //#region  兼容
      let dws = dataNew.id.split("*");
      if (dws.length > 1 && dws[0] == layerid) ;
      //#endregion
      else {
        dataNew.id = layerid + "*" + dataNew.id;
      }
    } else {
      dataNew.id = layerid + "*" + (node.id ? node.id : MathEX.createUID());
    }
    //新方法处理地理字段
    let wktsValue = dataNew.positions;
    if (
      SceneGIS.defined(wktsValue) &&
      (wktsValue.indexOf("POINT") > -1 ||
        wktsValue.indexOf("LINESTRING") > -1 ||
        wktsValue.indexOf("POLYGON") > -1)
    ) {
      //是wkts，特殊处理
      dataNew.positions = MathEX.wktToArray(wktsValue, dataNew.defaultAlt);
    }

    //暂时没用
    for (var prop in wktsValue) {
      //其他可能的扩展函数
      if (prop.indexOf("_") == 0) {
        node[prop] = wktsValue[prop];
      }
    }
    //#endregion
    return dataNew;
  }

  var geoType = {
    point: "point",
    polyline: "polyline",
    polygon: "polygon",
  };

  /**
   * 数组解析器
   */
  function dataResolve(option) {
    let dataoption = option.data;
    if (dataoption instanceof Array) {
      //数组不需要请求，直接返回
      if (dataoption.length > -1) {
        return new Promise((resolve, reject) => {
          resolve(dataoption);
        });
      }
    } else {
      if (dataoption.hasOwnProperty("url")) {
        return new Promise((resolve, reject) => {
          urlResolve(dataoption.url, dataoption.parm).then((data) => {
            //请求到数据直接返回
            resolve(data);
          });
        }).then((res) => {
          return res;
        });
      } else if (dataoption.hasOwnProperty("relation")) {
        if (dataoption.parm.length >= 2) {
          var promise1 = urlResolve(
            dataoption.parm[0].url,
            dataoption.parm[0].parm ? dataoption.parm[0].parm : {}
          );
          var promise2 = urlResolve(
            dataoption.parm[1].url,
            dataoption.parm[1].parm ? dataoption.parm[1].parm : {}
          );
          return Promise.all([promise1, promise2]).then((result) => {
            //我们只允许有两个请求地址，一般来说不存在三个或更多的后台，如果存在也应该由后台统一去处理，不应该交给前端。
            //不应该在这里拼数组，我们不想执行两遍数组遍历
            if (result[0] instanceof Array) ; else {
              throw new DeveloperError("在有relation时，请求结果必须是数组");
            }
            if (result[1] instanceof Array) ; else {
              throw new DeveloperError("在有relation时，请求结果必须是数组");
            }
            return result;
          });
        }
      } else {
        //即不是数组，也不具备url和relation的请求属性，则认为是一个对象，也是直接返回
        return new Promise((resolve, reject) => {
          resolve(dataoption);
        });
      }
    }
  }

  //地理字段解析,老的兼容使用，新的不在使用
  function geoResolve(fieldName, type, alt, node) {
    alt = SceneGIS.defaultValue(alt, 0); //alt 需要默认值
    if (type == geoType.point) {
      //点的地理字段解析
      if (fieldName.length == 0) {
        if (node.geo_point) {
          return node.geo_point;
        } else {
          return [];
        }
      } else if (fieldName.length == 1) {
        var fieldvalue = node[fieldName[0]];
        if (fieldvalue instanceof Array) {
          return [fieldvalue[0], fieldvalue[1], fieldvalue[2]];
        } else if (fieldvalue.indexOf("POINT") > -1) {
          var posarr = MathEX.wktToArray(fieldvalue, alt);

          return posarr;
        }
      } else if (fieldName.length == 3) {
        var lon_ = isNaN(Number(fieldName[0]))
          ? node[fieldName[0]]
          : parseFloat(fieldName[0]);
        var lat_ = isNaN(Number(fieldName[1]))
          ? node[fieldName[1]]
          : parseFloat(fieldName[1]);
        alt = alt[0] != undefined ? alt[0] : alt;
        var alt_ = isNaN(Number(fieldName[2]))
          ? node[fieldName[2]]
            ? node[fieldName[2]]
            : alt
            ? alt
            : 0
          : parseFloat(fieldName[2]);
        return [parseFloat(lon_), parseFloat(lat_), parseFloat(alt_)];
      } else {
        var posArray = [];
        alt = alt[0] != undefined ? alt[0] : alt;
        for (var i = 0; i < fieldName.length; i++) {
          var v_ = isNaN(Number(fieldName[i]))
            ? node[fieldName[i]]
              ? node[fieldName[i]]
              : alt
              ? alt
              : 0
            : parseFloat(fieldName[i]);
          posArray.push(parseFloat(v_));
        }
        return posArray;
      }
    } else if (type == geoType.polyline || type == "polyLine") {
      //线的地理字段解析
      if (fieldName.length == 0) {
        if (node.geo_polyLine) {
          return node.geo_polyLine;
        } else {
          return [];
        }
      } else if (fieldName.length == 1) {
        var fieldvalue = node[fieldName[0]];
        if (fieldvalue instanceof Array) {
          return fieldvalue;
        } else if (fieldvalue.indexOf("LINESTRING") > -1) {
          var posarr = MathEX.wktToArray(fieldvalue, alt);

          return posarr;
        } else {
          return fieldvalue;
        }
      } else if (fieldName.length == 3) ; else {
        var posArray = [];
        var altIndex = 0;
        for (var i = 0; i < fieldName.length; i++) {
          var alt_ = 0;
          if (i % 3 === 0) {
            alt_ =
              alt[altIndex] != undefined
                ? alt[altIndex]
                : alt[0] != undefined
                ? alt[0]
                : alt;
            altIndex++;
          }

          var v_ = isNaN(Number(fieldName[i]))
            ? node[fieldName[i]]
              ? node[fieldName[i]]
              : alt_
              ? alt_
              : 0
            : parseFloat(fieldName[i]);
          posArray.push(parseFloat(v_));
        }
        return posArray;
      }
    } else if (type == geoType.polygon) {
      if (fieldName.length == 0) {
        if (node.geo_polygon) {
          return node.geo_polygon;
        } else {
          return [];
        }
      } else if (fieldName.length == 1) {
        var fieldvalue = node[fieldName[0]];
        if (fieldvalue instanceof Array) {
          return fieldvalue;
        } else if (fieldvalue.indexOf("POLYGON Z") > -1) {
          var posarr = MathEX.wktToArray(fieldvalue, alt);

          return posarr;
        } else if (fieldvalue.indexOf("POLYGON") > -1) {
          var posarr = MathEX.wktToArray(fieldvalue, alt);
          return posarr;
        } else {
          return fieldvalue;
        }
      } else if (fieldName.length == 3) ; else {
        var posArray = [];
        var altIndex = 0;
        for (var i = 0; i < fieldName.length; i++) {
          var alt_ = 0;
          if (i % 3 === 0) {
            alt_ =
              alt[altIndex] != undefined
                ? alt[altIndex]
                : alt[0] != undefined
                ? alt[0]
                : alt;
            altIndex++;
          }
          var v_ = isNaN(Number(fieldName[i]))
            ? node[fieldName[i]]
              ? node[fieldName[i]]
              : alt_
              ? alt_
              : 0
            : parseFloat(fieldName[i]);
          posArray.push(parseFloat(v_));
        }
        return posArray;
      }
    }
  }

  /**
   * 符号化准备解析，主要是拼接地理数据和业务数据
   * @param {Array} datageo 带地理字段的数组
   * @param {Object} data 纯业务数组
   * @param {Object} option 数据对象
   * @return {Boolean} 成功返回true,否则返回false
   */
  function dataPrepare(datageo, data, option) {
    //var symbol = this.option.symbol;
    let dataoption = option.data;
    if (datageo) {
      var res = datageo.find(
        (item) =>
          item[dataoption["relation"][1]] === data[dataoption["relation"][0]]
      );
      if (res) {
        data = Object.assign(data, res); //在这里将业务层次的数组与地理数据拼接起来，将地理字段拷贝到业务对象
      } else {
        return false;
      }
    }
    return true;
  }

  /*
   * 检查数据源类型
   * array2:二维数据
   * array:一维数据
   * object:对象
   * geojson:geojson数据
   * czml:czml数据
   * echarts:echarts数据
   */
  function checkData(result) {
    let dataType = "";
    //检查业务数据和地理数据
    if (result instanceof Array) {
      if (result.length == 0) return;
      if (result[0] instanceof Array) {
        if (result[1] instanceof Array) ; else {
          throw new CoreEX.DeveloperError(
            `图层${option.id}的 数据源二 is not Array`
          );
        }
        dataType = "array2";
      } else {
        if (result[0].id == "document") {
          dataType = "czml";
        } else {
          dataType = "array";
        }
      }
    } else {
      if (
        SceneGIS.defined(result.type) &&
        (result.type != "FeatureCollection" || result.type != "Feature")
      ) {
        dataType = "geojson";
      } else if (SceneGIS.defined(result.series)) {
        dataType = "echarts";
      } else {
        dataType = "object";
      }
    }
    return dataType;
  }

  //兼容处理
  function symbolCompatibility(option) {
    let proproty = [
      "polygon",
      "polyline",
      "label",
      "billboard",
      "ellipse",
      "corridor",
      "wall",
    ];

    let symbol = option.symbol;
    let rule = symbol.rule;
    let templete = symbol.templete;
    let data = option.symbol;

    if (!SceneGIS.defined(rule) || rule == "") {
      if (symbol.templete) {
        //不能覆盖保留字段
        //#region 以下是兼容代码
        if (data.templete.temp1) {
          let isczml = false;
          for (let pkey of proproty) {
            if (data.templete.temp1[pkey]) {
              isczml = true;
            }
          }
          if (isczml) {
            data.czml = data.templete.temp1;
          } else {
            data.custom = data.templete.temp1;
          }
        } else {
          let isczml = false;
          for (let pkey of proproty) {
            if (data.templete[pkey]) {
              isczml = true;
            }
          }
          if (isczml) {
            data.czml = data.templete;
          } else {
            data.custom = data.templete;
          }
        }
        //#endregion
      }
    } else if (rule != "" && templete) {
      //如果rule存在，根据rule和templete解析
      let targetType = ["geojson", "czml", "custom", "echarts"];
      for (let keyt in templete) {
        let obj = templete[keyt];
        let isczml = false;
        let isorigin = false;
        targetType.forEach((item) => {
          if (obj[item]) {
            isorigin = true;
          }
        });
        if (!isorigin) {
          for (var key in obj) {
            //#region 以下是兼容代码
            if (proproty.indexOf(key) > -1) {
              isczml = true;
            }
          }
          if (isczml) {
            let czml = obj;
            templete[keyt] = {};
            templete[keyt].czml = czml;
          } else {
            let custom = obj;
            templete[keyt] = {};
            templete[keyt].custom = custom;
          }
        }
      }
    }
  }

  /*
   * 检查样式类型
   * czml:czml样式
   * custom:自定义样式
   * geojson:geojson样式
   * echarts:echarts样式
   * undefined
   */
  function checkSymbol(option) {
    symbolCompatibility(option);
    let symbol = option.symbol;
    //#region 老版本的默认兼容用于geojson的转换
    if (symbol.geo_point) {
      symbol.geoType = SceneGIS.defaultValue(symbol.geoType, "Point"); //默认是点
    } else if (symbol.geo_polyLine) {
      symbol.geoType = SceneGIS.defaultValue(symbol.geoType, "polyLine"); //默认是点
    } else if (symbol.geo_polygon) {
      symbol.geoType = SceneGIS.defaultValue(symbol.geoType, "Polygon"); //默认是点
    }
    //#endregion

    //判断symbol,有优先顺序
    if (SceneGIS.defined(symbol.czml)) {
      return "czml";
    }
    if (SceneGIS.defined(symbol.custom)) {
      return "custom";
    }
    if (SceneGIS.defined(symbol.geojson)) {
      return "geojson";
    }
    if (SceneGIS.defined(symbol.mapEcharts)) {
      symbol.geojson = symbol.mapEcharts; //兼容调整
      delete symbol.mapEcharts;
      return "geojson";
    }
    if (SceneGIS.defined(symbol.echarts)) {
      return "echarts";
    }
    return undefined;
  }

  /*private*/
  //场景管理类
  class SceneJson {
    constructor() {
      this.scenes = {};
    }
    //添加场景  准备阶段，这一块代码暂时在SceneEX 中
    load(option) {}

    //数据检查  第二步 数据检查 result是解译后的数据
    static dataCheck(result) {
      return checkData(result);
    }

    //数据解译 第一步 数据解译
    static dataResolve(option) {
      return dataResolve(option);
    }

    //数据准备 第四步 数据准备 datageo, data 均为解译后的数据
    static dataPrepare(datageo, data, dataoption) {
      return dataPrepare(datageo, data, dataoption);
    }

    //符号检查 第三步 符号检查
    static symbolCheck(option) {
      return checkSymbol(option);
    }

    //符号解译 第五步 符号解译,这里会对symbol 做更改，深度拷贝后返回
    static symbolResolve(node, option = {}) {
      return symbolRuleResolve(node, option);
    }
  }

  /**
   * 通用事件
   * @alias GisEvent
   * @constructor
   */
  class GisEvent {
      constructor() {
          this.events = {};
      }

      /**
       * 添加事件
       * @param {String}  type 事件类型
       * @return {Function}  fun  事件函数
       */
      add(type, fun) {
          if(!this.events[type]){
              this.events[type]=[];
          }
          this.events[type].push(fun);
      }

      /**
       * 触发事件
       * @param {String}  type 事件类型
       * @param {Object}  parm  事件参数
       */
      raise(type, parm) {

          var ev = this.events[type];
          if(ev instanceof Array){
              for (let f of ev) {
                  if (f.innerId) {
                      f.fun(parm);
                  } else {
                      f(parm);
                  }
      
              }
          }
         
      }

     /**
      * 删除事件
      * @param {String}  type 事件类型
      * @param {Function}  fun  事件函数
      */
      remove(type, fun) {
          var eves = this.events[type];
          for (var i = 0; i < eves.length; i++) {
              if (eves[i] == fun) {
                  break;
              } else if (eves[i].innerId && fun.innerId && eves[i].innerId == fun.innerId) {
                  break;
              }
          }
          eves = eves.splice(i, 1); //删除掉
      }
      /**
       * 删除所有事件
       */
      removeAll() {
          for (var prop in this.events) {
              this.events[prop] = [];
          }
          this.events={};
      }
      /**
       * 事件绑定
       * @param {String}  type 事件类型
       * @param {Function}  fun  事件函数
       */
      addEvent(type,fun){
          this.add(type,fun);
      }
      
      /**
       * 触发事件
       * @param {String}  type 事件类型
       * @param {Object}  parm  事件参数
       */
      raiseEvent(type,parm){
          this.raise(type,parm);
      }
      
      /**
       * 删除事件
       * @param {String}  type 事件类型
       * @param {Function}  fun  事件函数
       */
      removeEvent(type,fun){
          this.remove(type,fun);
      }
      /**
       * 删除所有事件
       */
      removeAllEventfunction(){
         this.removeAll();
      }

  }

  /** 所有图层基类，一般不主动创建
   * @alias GisBaseLayer
   * @constructor
   * @param {view} view
   * @param {Object} option
   */
  function GisBaseLayer(view, option) {
    SceneGIS.Check.typeOf.object("view", view);
    this._view = view;
    this.option=option;

    if(!defined(option.id)) {
      throw new DeveloperError("GisBaseLayer:option.id is required");
    }
    // if(!defined(option.data)&& !defined(option.attributeTable)) {
    //   throw new DeveloperError("GisBaseLayer:option.data is required");
    // }
    //默认值处理
    this._features = new Dictionary(); //用于定位和查询
    this._visible = option ? defaultValue(option.visible, true) : true;
    this._show = true;
    this._children = [];
    this._dataReadPromise = undefined; //记录数据读取的promise
    this._owner = undefined;
    this._event = new GisEvent();
    this._featureReadyPromise=undefined;

    //
    this.symbolChange=false;
    this.dataChange=false;
  }

  //定义属性
  Object.defineProperties(GisBaseLayer.prototype, {
    /**
     * 获取parameter 图层名称
     * @memberof GisBaseLayer.prototype
     *
     * @type {String}
     * @readonly
     */
    name: {
      get: function () {
        return defined(this.option) ? this.option.name : undefined;
      },
    },
    /**
     * 获取parameter 图层id
     * @memberof GisBaseLayer.prototype
     *
     * @type {String}
     * @readonly
     */
    id: {
      get: function () {
        return defined(this.option) ? this.option.id : undefined;
      },
    },
    /**
     * 图层是否打开
     * @memberof GisBaseLayer.prototype
     * @type {Boolean}
     */
    visible: {
      get: function () {
        return this._visible ;
      },
      set: function (value) {
        this._visible = value;
        this.show=value;
      }
    },
     /**
     * 图层是否显示
     * @memberof GisBaseLayer.prototype
     * @type {Boolean}
     */
     show: {
      get: function () {
        return this._show ;
      },
      set: function (value) {
        if(this._visible==false&&value==true){
          return;
        }
        this._show = value;
      }
    },
    /**
     * 要素Promise
     * @memberof GisBaseLayer.prototype
     * @type {Promise}
     * @readonly
     */
    featureReadyPromise:{
      get:function(){
        return defined(this._featureReadyPromise) ? this._featureReadyPromise : undefined;
      }
    },
    /**
     * 获取view
     * @memberof GisBaseLayer.prototype
     *
     * @type {view}
     * @readonly
     */
    view: {
      get: function () {
        return defined(this._view) ? this._view : undefined;
      },
    },
    /**
     * 获取viewer 这个在三维模式下使用的别名
     * @memberof GisBaseLayer.prototype
     *
     * @type {view}
     * @readonly
     */
    viewer: {
      get: function () {
        return defined(this._view) ? this._view : undefined;
      },
    },
    /**
     * 获取图层参数
     * @memberof GisBaseLayer.prototype
     * @type {Object}
     * @readonly
     */
    symbol: {
      get: function () {
        return defined(this.option) ? this.option.symbol : undefined;
      },
    },

    /**
     * 图层透明
     * @memberof GisBaseLayer.prototype
     * @type {Number}
     */
    alpha: {
      get: function () {
        return defined(this.option) ? this.option.alpha : undefined;
      },
      set: function (value) {
        DeveloperError.throwInstantiationError();
      }
    },

    /**
     * 获取图层要素
     * @memberof GisBaseLayer.prototype
     * @type {Dictionary}
     * @readonly
     */
    features: {
      get: function () {
        return defined(this._features) ? this._features : undefined;
      },
    },

    /**
     * 获取子图层
     * @memberof GisBaseLayer.prototype
     *
     * @type {Array}
     * @readonly
     */
    children: {
      get: function () {
        return defined(this._children) ? this._children : undefined;
      },
    },
    /**
     * 获取事件
     * @memberof GisBaseLayer.prototype
     * @type {GisEvent}
     * @readonly
     */
    event: {
      get: function () {
        return defined(this._event) ? this._event : undefined;
      },
    },
    /**
     * 获取所属对象
     * @memberof GisBaseLayer.prototype
     *
     * @type {Object}
     */
    owner: {
      get: function () {
        return defined(this._owner) ? this._owner : undefined;
      },
      set: function (value) {
        this._owner = value;
      },
    },
  });

  /**
   * 获取参数
   * @param {String} name 参数名称
   * @return {Object} 返回对应的参数值
   */
  GisBaseLayer.prototype.getParam = function (name) {
    return this.option[name];
  };

  /**
   *  获取数据
   * @return {Promise} 返回一个promise对象
   */
  GisBaseLayer.prototype.getData = function () {
    //兼容之前的attributeTable 属性
    if(!this.option.data) return undefined;
    this._dataReadPromise = SceneJson.dataResolve( this.option);
  };

  /*private*/
  //数据检查
  GisBaseLayer.prototype.dataCheck=function(result){
    return SceneJson.dataCheck(result);
  };
  /*private*/
  //样式检查
  GisBaseLayer.prototype.symbolCheck=function(){
    return SceneJson.symbolCheck(this.option);
  };


  //样式检查
  GisBaseLayer.prototype.symbolResolve=function(data){
    return SceneJson.symbolResolve(data,this.option);
  };


  /**
   * 针对某个对象样式格式化
   * @param {Array} geo 带地理字段的数组
   * @param {Object} data 具体的业务对象
   * @return {Boolean} 返回是否成功
   */
  /*private*/
  GisBaseLayer.prototype.dataPrepare = function (geo, data) {
    return SceneJson.dataPrepare(
      geo,
      data,
      this.option
    );
  };

  /**
   * 加载要素，增加或者修改
   * @param {Array|Object} data 对象或者对象数据
   */
  GisBaseLayer.prototype.load=function(option) {
    DeveloperError.throwInstantiationError();
  };


  /**
  * 加载要素，本质调用的load方法
  * @param {Array|Object} data 对象或者对象数据
  */
  GisBaseLayer.prototype.add=function(data) {
    DeveloperError.throwInstantiationError();
  };

  /**
  * 根据id获取要素
  * @param {String} id 要素id
  * @return {Feature} 要素
  */
  GisBaseLayer.prototype.getById=function(id) {
    DeveloperError.throwInstantiationError();
  };

  /**
  * 根据id删除要素
  * @param {String} id 要素id
  * @return {Boolean} 删除成功返回true,否则返回false
  */
  GisBaseLayer.prototype.removeById=function(id) {
    DeveloperError.throwInstantiationError();
  };

  /**
  * 定位要素
  * @param {String} id 要素id
  */
  GisBaseLayer.prototype.zoomById=function(id) {
    DeveloperError.throwInstantiationError();
  };

  /**
  * 高亮要素
  * @param {String} id 要素id
  */
  GisBaseLayer.prototype.highLightById=function(id) {
    DeveloperError.throwInstantiationError();
  };

  /**
  * 定位并高亮要素
  * @param {String} id 要素id
  */
  GisBaseLayer.prototype.zoomAndHLById=function(id) {
    DeveloperError.throwInstantiationError();
  };
  /**
  * 销毁图层
  * @return {boolean} 销毁成功返回true,否则返回false
  */
  GisBaseLayer.prototype.destroy=function() {
    
  };

  /**
   * lod类型
   *
   * @enum {Number}
   */
  var GisLodType = {
      /**
       * 加载固定模板得切边影像,如在线影像
       *
       * @type {String}
       * @constant
       */
      Height: 0,
    
      /**
         * 单张地图影像
         
         *
         * @type {String}
         * @constant
         */
      Distance: 1
    
      
    };
    
    var GisLodType$1 = Object.freeze(GisLodType);

  /**
   * lod 机制类，一个场景只有一个lod机制，一般从json读取创建
   * @alias GisLod
   * @constructor
   * @param {SceneEX} sceneEx 场景
   * @param {Object} option 参数
   * @param {String|Array} option.url json文件路径,或者直接是lod数组
   * @param {GisLodType} option.type lod类型,目前仅支持地面高度
   * @example
   * 
   * var lod=new GisLod(sceneEx,{
   *     url:"./data/lod.json",
   * });
   * var lod=new GisLod(sceneEx,{
   *     url:  [{
              "nearDistance":3000,
              "farDistance":1000000,
              "level":1,
              "label":"一级",
              "dataSet":[]
          },
          {
              "nearDistance":50,
              "farDistance":3000,
              "level":2,
              "dataSet":[],
              "label":"二级"

          }],
   * });
   */
  function GisLod(sceneEx, option) {
    this._lodNodes = [];
    this._url = option.url;
    this._readyPromise = undefined;
    this._viewer = sceneEx.viewer;
    this._scene = sceneEx;
    this._type = GisLodType$1.Height;
    var self = this;
    this._event = new GisEvent();
    if (this._url && (this._url instanceof String || typeof this._url == "string")) {
      this._readyPromise = urlResolve(this._url, { method: "get" }).then(
        (data) => {
          self._lodNodes = data;
          return self;
        }
      );
    } else {
      this._readyPromise = new Promise((resolve) => {
        self._lodNodes = this._url;
        resolve(self);
      });
    }

  }



  Object.defineProperties(GisLod.prototype, {});

  /**
   * @param {Object} node 增加lod节点
   */
  GisLod.prototype.addLevel = function (node) {
    this._lodNodes.push(node);
  };

  /**
   * 实时更新lod机制
   * @param {Number} dis 当前相机距离地面的高度
   */
  GisLod.prototype.update = function (dis) {
    for (var lodnode of this._lodNodes) {
      for (var data of lodnode.dataSet) {//data 是图层
        if (dis > lodnode.nearDistance && dis < lodnode.farDistance) {
          if(this._event.events["replace"]&&this._event.events["replace"].length>0){
              this._event.raiseEvent("replace", {layer:data,show:true,level:lodnode.level});
          }else {
            if(!data.show)
              data.show = true;
          }
           //更新要素状态，当图层可见时，需要根据距离更新要素的显示状态
           if(data.features.length>0){
            data.features.forEach((key,value)=>{
              if(data.option.hasOwnProperty("lodLevel")&&data.option.lodLevel!=-1
              &&defined(value._row)&&defined(value._row.nearDistance)
              &&defined(value._row)&&defined(value._row.farDistance)){
                var dis=value.distanceToCamera(data.viewer,value);
                if(dis>value._row.nearDistance&&dis<value._row.farDistance){
                  if(!value.show){
                    value.show=data.show;
                  }
                }
                else { //超过范围，永远false
                  if(value.show){
                    value.show=false;
                  } 
                }
              }
              else {
                value.show=data.show;
              }
            });
          }
          this._event.raiseEvent("change", {show:true,level:lodnode.level});
        } else {
          if(this._event.events["replace"]&&this._event.events["replace"].length>0){
              this._event.raiseEvent("replace", {layer:data,show:false,level:lodnode.level});
          }else {
            if(data.show)
              data.show = false;
          }
          //更新要素状态
          if(data.features.length>0){
            data.features.forEach((key,value)=>{
                if(value.show){
                  value.show=data.show;
                }
            });
          }
          this._event.raiseEvent("change", {show:false,level:lodnode.level});
        }
      }
    }
  };

  /**
   * @param {Number} index 删除lod节点
   */
  GisLod.prototype.removeLevel = function (index) {
    this._lodNodes.splice(index, 1);
  };
  const event={
      "change":"change",
      "replace":"replace"
  };

  /**
   * 增加图层显示时触发的事件
   * @param {String} type 事件类型,只有两种事件类型会生效,change(在图层显示和隐藏切换时)和replace（替换原来的显隐函数）
   * @param {Function} fun 回调函数
   */
  GisLod.prototype.addEventListener = function (type,fun) {
    if(type!==event.change&&type!==event.replace){
     throw new DeveloperError("事件类型错误,只支持change和replace事件");
    }
    this._event.add(type, fun);
  };
  /**
   * 删除图层显示时触发的事件
   * @param {Function} fun 回调函数
   */
  GisLod.prototype.removeEventListener = function (type,fun) {
  if(type!==event.change&&type!==event.replace){
    throw new DeveloperError("事件类型错误,只支持change和replace事件");
      }
    this._event.remove(type, fun);
  };
  /**
   * 增加对应lod级别的图层
   * @param {Object} layer 图层
   * @param {Number} level 对应lod级别
   */
  GisLod.prototype.addData = function (layer, level) {
    var index = this._lodNodes.findIndex(
      (node) => node.level.toString() === level.toString()
    );
    if (index > -1) {
      this._lodNodes[index].dataSet.push(layer);
    }
  };

  /**
   * 删除对应lod级别的图层
   * @param {Object} layer 图层
   * @param {Number} level 对应lod级别
   */
  GisLod.prototype.removeData = function (layer, level) {
    var index = this._lodNodes.findIndex(
      (node) => node.level.toString() === level.toString()
    );
    if (index > -1) {
      var dataindex = -1;
      for (var i = 0; i < this._lodNodes[index].dataSet.length; i++) {
        if (this._lodNodes[index].dataSet[i] == layer) {
          dataindex = i;
          break;
        }
      }
      if (dataindex > -1) {
        this._lodNodes[index].dataSet.splice(dataindex, 1);
      }
    }
  };

  /**
   * 销毁
   */
  GisLod.prototype.destroy = function () {
    this._lodNodes = [];
    //this._viewer.scene.preUpdate.removeEventListener(this._preUpdate);
  };

  /**
   * 这个是所有分析方法和基础功能EX的接口,所有分析方法和基础功能EX都要继承这个接口(除飞行路线外)。
   * @alias IAnalysisEX
   * @see ToolsEX
   * @see StaticObservationEX
   * @see RoadExcavationEX
   * @see BuildingClipEX
   * @see KeyboardCameraControlEX
   * @see MeasureDistanceEX
   * @see MeasureHDistanceEX
   * @see MeasureVDistanceEX
   * @see MeasureAreaEX
   * @see BufferAnalysisEX
   * @see VisibilityAnalysisEX
   * @see VisibleAreaAnalysisEX
   * @see SkylineEX
   * @see SlopeAspectEX
   * @see YmAnalysisEX
   * @see VolumeAnalysisEX
   * @see LimitHeightEX
   **/
  class IAnalysisEX{
      /**
      * @constructor
      * @param {object} options 传入入的参数
      * @param {Viewer}  viewer viewer的对象
      */
      constructor(options,viewer){
          /**
           * viewer
           * @readonly
           * @type {Viewer}
          */
          this._viewer=viewer;
          /**
           * 功能是否开启
           * @readonly
           * @type {Bool}
          */
          this.isrunning = undefined;
          /**
           * 回调函数
           * @type {Bool}
          */
          this.callback = undefined;
      }
      /**
       * 开始功能
       */
      start(){
          DeveloperError.throwInstantiationError();
      }
      /**
       * 暂停功能
       */
      stop(){
          DeveloperError.throwInstantiationError();
      }
      /**
       * 清除结果
       */
      clear(){
          DeveloperError.throwInstantiationError();
      }
      /**
       * 销毁操作，销毁内部事件和临时对象
       */ 
      destroy(){
          DeveloperError.throwInstantiationError();
      }
  }

  /**
   * 这个是所有Ex图层的接口,所有Ex图层都要继承这个接口。
   * @alias ILayerEX
   **/
  class ILayerEX {
      /**
      * @constructor
      * @param {Viewer} viewer viewer对象
      * @param {option}  option 传入入的参数
      */
      constructor(viewer,option) {
          this._show = false;
          /**
           * 数据Promise
           * @readonly
           * @type {Promise}
           * @default undefined
          */
          this.featureReadyPromise=undefined;
           /**
           * 图层是否打开
           * @type {Object}
           * @default undefined
          */
          this.visible=fasle;

          /**
           * 图层所有要素
           * @readonly
           * @type {Dictionary}
          */
          this.features=undefined;

          /**
           * 图层名称
           * @readonly
           * @type {String}
          */
          this.name=undefined;

          /**
           * 图层id
           * @type {String}
          */
          this.id=undefined;

          /**
           * 图层id
           * @readonly
           * @type {Viewer}
          */
          this.viewer=undefined;

          /**
           * 图层全局渲染器
           * @readonly
           * @type {Object}
          */
          this.symbol=undefined;

           /**
           * 图层透明度 取值范围为[0-1]
           * @type {Number}
          */
          this.alpha=1;

          /**
           * 子图层
           * @type {Array<ILayerEX>}
           */
          this.children=[];

          /**
           * 获取所属对象
           */
          this.owner=undefined;

          /**
           * 图层事件
           * @type {GisEvent}
           */
          this.event=new GisEvent();
          
      }
      /**
       * 图层显隐控制
       * @type {Boolean}
       * @default false
      */
      get show() {
  		return this._show;
  	}
  	set show(value) {
  		this._show=value;
  	}
    
      /**
       * 加载要素，增加或者删除
       * @param {Array|Object} data 对象或者对象数据
       */
      load(data) {
          throw new DeveloperError('error');
      }
       /**
       * 加载要素，本质调用的load方法
       * @param {Array|Object} data 对象或者对象数据
       */
      add(data) {
          throw new DeveloperError('error');
      }

      /**
       * 根据id获取要素
       * @param {String} id 要素id
       * @return {Feature} 要素
       */
      getById(id) {
          throw new DeveloperError('error');
      }

      /**
       * 根据id删除要素
       * @param {String} id 要素id
       * @return {Boolean} 删除成功返回true,否则返回false
       */
      removeById(id) {
          throw new DeveloperError('error');
      }

      /**
       * 删除所有要素
       * @return {Boolean} 删除成功返回true,否则返回false
       */
      removeAll() {  
          throw new DeveloperError('error');
      }
      /**
       * 定位要素
       * @param {String} id 要素id
       */
      zoomById(id,option={}) {
          throw new DeveloperError('error');
      }

      /**
       * 高亮要素
       * @param {String} id 要素id
       */
      highLightById(id,option={}) {
          throw new DeveloperError('error');
      }

      /**
       * 定位并高亮要素
       * @param {String} id 要素id
      */
      zoomAndHLById(id,option={}) {
          throw new DeveloperError('error');
      }
      /**
       * 销毁图层
       * @return {boolean} 销毁成功返回true,否则返回false
       */
      destroy() {
          throw new DeveloperError('error');
      }
  }

  const olcsCore = {};
  olcsCore.pickCenterPoint = function (scene) {
      const canvas = scene.canvas;
      const center = new SceneGIS.Cartesian2(
          canvas.clientWidth / 2,
          canvas.clientHeight / 2);
      
      const ray = scene.camera.getPickRay(center);
      const target = scene.globe.pick(ray, scene);
      return target || scene.camera.pickEllipsoid(center);    
  };

  olcsCore.pickOnTerrainOrEllipsoid = function (scene,pixel) {
      const ray = scene.camera.getPickRay(pixel);
      const target = scene.globe.pick(ray, scene);
      return target || scene.camera.pickEllipsoid(pixel);
  };

  /**
   * calculate the distance between camera and centerpoint based on the resolution and latitude value
   * @param {number} resolution Number of map units per pixel.
   * @param {number} latitude Latitude in radians.
   * @param {import('cesium').Scene} scene.
   * @param {import('ol/proj/Projection').default} projection View projection.
   * @return {number} The calculated distance.
   * @api
   */
  olcsCore.calcDistanceForResolution = function (resolution, latitude, scene, projection) {
      const canvas = scene.canvas;
      const camera = scene.camera;
      const fovy = camera.frustum.fovy; // vertical field of view
      // console.assert(!isNaN(fovy));
      const metersPerUnit = 1;

      // number of "map units" visible in 2D (vertically)
      const visibleMapUnits = resolution * canvas.clientHeight;

      // The metersPerUnit does not take latitude into account, but it should
      // be lower with increasing latitude -- we have to compensate.
      // In 3D it is not possible to maintain the resolution at more than one point,
      // so it only makes sense to use the latitude of the "target" point.
      const relativeCircumference = Math.cos(Math.abs(latitude));

      // how many meters should be visible in 3D
      const visibleMeters = visibleMapUnits * metersPerUnit * relativeCircumference;

      // distance required to view the calculated length in meters
      //
      //  fovy/2
      //    |\
      //  x | \
      //    |--\
      // visibleMeters/2
      const requiredDistance = (visibleMeters / 2) / Math.tan(fovy / 2);

      // NOTE: This calculation is not absolutely precise, because metersPerUnit
      // is a great simplification. It does not take ellipsoid/terrain into account.

      return requiredDistance;
  };



  /**
   * calculate the resolution based on a distance(camera to position) and latitude value
   * @param {number} distance
   * @param {number} latitude
   * @param {import('cesium').Scene} scene.
   * @param {import('ol/proj/Projection').default} projection View projection.
   * @return {number} The calculated resolution.
   * @api
   */
  olcsCore.calcResolutionForDistance = function(distance, latitude, scene, projection) {
      // See the reverse calculation (calcDistanceForResolution) for details
      const canvas = scene.canvas;
      const camera = scene.camera;
      const fovy = camera.frustum.fovy; // vertical field of view
      console.assert(!isNaN(fovy));
      const metersPerUnit = 1;//projection.getMetersPerUnit();

      const visibleMeters = 2 * distance * Math.tan(fovy / 2);
      const relativeCircumference = Math.cos(Math.abs(latitude));
      const visibleMapUnits = visibleMeters / metersPerUnit / relativeCircumference;
      const resolution = visibleMapUnits / canvas.clientHeight;

      return resolution;
  };
  let test = 0.0254000508;
  olcsCore.calcScaleFromResolution = function(resolution){

      //var scale=resolution*_metersPerUnit*96/0.0254000508;
      var scale=resolution*96/test;
      return scale;
  };

  olcsCore.calcResolutionFromScale = function(scale){

      //var scale=resolution*_metersPerUnit*96/0.0254000508;
      var resolution=scale*test/96;
      //resolution*96/0.0254000508;
      return resolution;
  };

  /**
   *  扩展函数
   * @exports UtilEX
   * @alias UtilEX
   */
  const UtilEX = {};
  //表单序列化
  UtilEX.serialize = data => {
    let list = [];
    Object.keys(data).forEach(ele => {
      list.push(`${ele}=${data[ele]}`);
    });
    return list.join('&');
  };

  UtilEX.getObjType = obj => {
    var toString = Object.prototype.toString;
    var map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
    if (obj instanceof Element) {
      return 'element';
    }
    return map[toString.call(obj)];
  };

  UtilEX.getViewDom = () => {
    return window.document.getElementById('avue-view').getElementsByClassName('el-scrollbar__wrap')[0]
  };
  /**
   * 对象深拷贝
   */
  UtilEX.deepClone = data => {
    var type = UtilEX.getObjType(data);
    var obj;
    if (type === 'array') {
      obj = [];
    } else if (type === 'object') {
      obj = {};
    } else {
      //不再具有下一层次
      return data;
    }
    if (type === 'array') {
      for (var i = 0, len = data.length; i < len; i++) {
        obj.push(UtilEX.deepClone(data[i]));
      }
    } else if (type === 'object') {
      for (var key in data) {
        obj[key] = UtilEX.deepClone(data[key]);
      }
    }
    return obj;
  };
  /**
   * 设置灰度模式
   */
  UtilEX.toggleGrayMode = (status) => {
    if (status) {
      document.body.className = document.body.className + ' grayMode';
    } else {
      document.body.className = document.body.className.replace(' grayMode', '');
    }
  };
  /**
   * 设置主题
   */
  UtilEX.setTheme = (name) => {
    document.body.className = name;
  };

  /**
   * 加密处理
   */
  UtilEX.encryption = (params) => {
    let {
      data,
      type,
      param,
      key
    } = params;
    let result = JSON.parse(JSON.stringify(data));
    if (type == 'Base64') {
      param.forEach(ele => {
        result[ele] = btoa(result[ele]);
      });
    } else if (type == 'Aes') {
      param.forEach(ele => {
        result[ele] = window.CryptoJS.AES.encrypt(result[ele], key).toString();
      });

    }
    return result;
  };


  /**
   * 浏览器判断是否全屏
   */
  UtilEX.fullscreenToggel = () => {
    if (fullscreenEnable()) {
      exitFullScreen();
    } else {
      reqFullScreen();
    }
  };
  /**
   * esc监听全屏
   */
  UtilEX.listenfullscreen = (callback) => {
    function listen() {
      callback();
    }

    document.addEventListener("fullscreenchange", function () {
      listen();
    });
    document.addEventListener("mozfullscreenchange", function () {
      listen();
    });
    document.addEventListener("webkitfullscreenchange", function () {
      listen();
    });
    document.addEventListener("msfullscreenchange", function () {
      listen();
    });
  };
  /**
   * 浏览器判断是否全屏
   */
  UtilEX.fullscreenEnable = () => {
    var isFullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
    return isFullscreen;
  };

  /**
   * 浏览器全屏
   */
  UtilEX.reqFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    }
  };

  /**
   * 浏览器退出全屏
   */
  UtilEX.exitFullScreen = () => {
    if (document.documentElement.requestFullScreen) {
      document.exitFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.mozCancelFullScreen();
    }
  };

  /**
   * 递归寻找子类的父类
  */
  UtilEX.findParent = (menu, id) => {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].children.length != 0) {
        for (let j = 0; j < menu[i].children.length; j++) {
          if (menu[i].children[j].id == id) {
            return menu[i];
          } else {
            if (menu[i].children[j].children.length != 0) {
              return findParent(menu[i].children[j].children, id);
            }
          }
        }
      }
    }
  };

  /**
   * 判断2个对象属性和值是否相等
   */

  /**
   * 动态插入css
   */

  UtilEX.loadStyle = url => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
  };
  /**
   * 判断路由是否相等
   */
  UtilEX.diff = (obj1, obj2) => {
    delete obj1.close;
    var o1 = obj1 instanceof Object;
    var o2 = obj2 instanceof Object;
    if (!o1 || !o2) { /*  判断不是对象  */
      return obj1 === obj2;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
      //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
    }

    for (var attr in obj1) {
      var t1 = obj1[attr] instanceof Object;
      var t2 = obj2[attr] instanceof Object;
      if (t1 && t2) {
        return diff(obj1[attr], obj2[attr]);
      } else if (obj1[attr] !== obj2[attr]) {
        return false;
      }
    }
    return true;
  };
  /**
   * 根据字典的value显示label
   */
  UtilEX.findByvalue = (dic, value) => {
    let result = '';
    if (validatenull(dic)) return value;
    if (typeof (value) == 'string' || typeof (value) == 'number' || typeof (value) == 'boolean') {
      let index = 0;
      index = findArray(dic, value);
      if (index != -1) {
        result = dic[index].label;
      } else {
        result = value;
      }
    } else if (value instanceof Array) {
      result = [];
      let index = 0;
      value.forEach(ele => {
        index = findArray(dic, ele);
        if (index != -1) {
          result.push(dic[index].label);
        } else {
          result.push(value);
        }
      });
      result = result.toString();
    }
    return result;
  };
  /**
   * 根据字典的value查找对应的index
   */
  UtilEX.findArray = (dic, value) => {
    for (let i = 0; i < dic.length; i++) {
      if (dic[i].value == value) {
        return i;
      }
    }
    return -1;
  };
  /**
   * 生成随机len位数字
   */
  UtilEX.randomLenNum = (len, date) => {
    let random = '';
    random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len ? len : 4);
    if (date) random = random + Date.now();
    return random;
  };
  /**
   * 打开小窗口
   */
  UtilEX.openWindow = (url, title, w, h) => {
    // Fixes dual-screen position                            Most browsers       Firefox
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;
    const newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }
  };

  /**
   * 获取顶部地址栏地址
   */
  UtilEX.getTopUrl = () => {
    return window.location.href.split("/#/")[0];
  };

  /**
   * 获取url参数
   * @param name 参数名
   */
  UtilEX.getQueryString = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2]));
    return null;
  };

  /**
   * 下载文件
   * @param {String} path - 文件地址
   * @param {String} name - 文件名,eg: test.png
   */
  UtilEX.downloadFileBlob = (path, name) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', path);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function () {
      if (this.status === 200 || this.status === 304) {
        // 如果是IE10及以上，不支持download属性，采用msSaveOrOpenBlob方法，但是IE10以下也不支持msSaveOrOpenBlob
        if ('msSaveOrOpenBlob' in navigator) {
          navigator.msSaveOrOpenBlob(this.response, name);
          return;
        }
        const url = URL.createObjectURL(this.response);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
  };

  /**
   * 下载文件
   * @param {String} path - 文件地址
   * @param {String} name - 文件名,eg: test.png
   */
  UtilEX.downloadFileBase64 = (path, name) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', path);
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function () {
      if (this.status === 200 || this.status === 304) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.response);
        fileReader.onload = function () {
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = this.result;
          a.download = name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        };
      }
    };
  };

  /**
   * 下载excel
   * @param {blob} fileArrayBuffer 文件流
   * @param {String} filename 文件名称
   */
  UtilEX.downloadXls = (fileArrayBuffer, filename) => {
    let data = new Blob([fileArrayBuffer], {type: 'application/vnd.ms-excel,charset=utf-8'});
    if (typeof window.chrome !== 'undefined') {
      // Chrome
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(data);
      link.download = filename;
      link.click();
    } else if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // IE
      var blob = new Blob([data], {type: 'application/force-download'});
      window.navigator.msSaveBlob(blob, filename);
    } else {
      // Firefox
      var file = new File([data], filename, {type: 'application/force-download'});
      window.open(URL.createObjectURL(file));
    }
  };

  //转geojson
  UtilEX.objectToGeoJson=(coordinates,properties,type,options)=>{
    return feature(
      {
        type:type,
        coordinates:coordinates
      },
      properties)

  };

  //转geojson
  UtilEX.arrayToGeoJson=(array,option)=>{
     var geojson=[];
     
     switch(option.type){
      case "PolygonPg":{
        
        for(let d of array){
          var p=[];
          if( d.range){//暂时写死
            for(let point of d.range.points){
                p.push([point.x,point.y]);
              }
              //cos.push(p);
              var json=objectToGeoJson([p],d,"Polygon");
              geojson.push(json);
          }
          
        }
        
        break;
      }
      default:{
        for(let a of array){
          var c=[parseFloat(a[option.xfield]) ,parseFloat(a[option.yfield])];
          var json=objectToGeoJson(c,a,"Point");
          geojson.push(json);
         }
      }
     }
    

     return featureCollection(geojson);

  };

  function feature(geometry,properties,options){
    var fc={type:"Feature"};
    fc.properties=properties||{};
    fc.geometry=geometry;
    return fc;
  }
  function featureCollection(features,options){
    var fc={type:"FeatureCollection"};
    fc.features=features;
    return fc;
  }

  const VERSION = '1.0';

  exports.DeveloperError = DeveloperError;
  exports.Dictionary = Dictionary;
  exports.GisBaseLayer = GisBaseLayer;
  exports.GisEvent = GisEvent;
  exports.GisLod = GisLod;
  exports.GisLodType = GisLodType$1;
  exports.IAnalysisEX = IAnalysisEX;
  exports.ILayerEX = ILayerEX;
  exports.MathEX = MathEX;
  exports.SceneJson = SceneJson;
  exports.UtilEX = UtilEX;
  exports.VERSION = VERSION;
  exports.defaultValue = defaultValue;
  exports.defined = defined;
  exports.getAssetUrl = getAssetUrl;
  exports.olcsCore = olcsCore;
  exports.string = string;
  exports.urlResolve = urlResolve;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=CoreEX.js.map
