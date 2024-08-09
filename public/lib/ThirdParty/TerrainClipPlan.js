(function () {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(SceneGIS, "__esModule", {
        value: !0
    }),
        SceneGIS.TerrainClipPlan = void 0;
    var n = function () {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function (t, i, a) {
            return i && e(t.prototype, i), a && e(t, a), t
        }
    }();
    SceneGIS.TerrainClipPlan = function () {
        function e(t, i) {
            a(this, e),
                this.viewer = t,
                this.options = i || {},
                this._positions = i.positions,
                this._height = this.options.height || 0,
                this.bottomImg = i.bottomImg,
                this.wallImg = i.wallImg,
                this.splitNum = SceneGIS.defaultValue(i.splitNum, 50),
                this._positions && this._positions.length > 0 && this.updateData(this._positions)
        }
        return n(e, [{
            key: "updateData",
            value: function (e) {
                this.clear();
                var t = [],
                    i = e.length,
                    a = new SceneGIS.Cartesian3;
                    if (i==0) {
                        return;
                    }
                  ///var  n = SceneGIS.Cartesian3.subtract(e[0], e[1], a);
              //  n = n.x > 0, 
                this.excavateMinHeight = 9999;
            //求ab bc向量的点积计算顺时针、逆时针
               var n= (e[0].x*e[1].y+e[1].x*e[2].y+e[2].x*e[0].y-e[0].y*e[1].x-e[1].y*e[2].x-e[2].y*e[0].x)<0//为正时，p1-p2-p3  路径的走向为逆时针，
 

                for (var r = 0; r < i; ++r) {
                    var s = (r + 1) % i, 
                        l = SceneGIS.Cartesian3.midpoint(e[r], e[s], new SceneGIS.Cartesian3),//r和r+1取中点
                        u = SceneGIS.Cartographic.fromCartesian(e[r]),
                        c =   this.viewer.scene.globe.getHeight(u) || u.height ;//拾取r高程c
                    c < this.excavateMinHeight && (this.excavateMinHeight = c);
                    var d, h = SceneGIS.Cartesian3.normalize(l, new SceneGIS.Cartesian3);//求中点的单位向量
                    //d是否与n相等，若相等则d=起点与中点的方向向量，若不相等则为终点与中点的方向向量
                    //确定顺时针逆时针
                    d = n ? SceneGIS.Cartesian3.subtract(e[r], l, new SceneGIS.Cartesian3) : SceneGIS.Cartesian3.subtract(e[s], l, new SceneGIS.Cartesian3),
                    d = SceneGIS.Cartesian3.normalize(d, d);//将方向向量标准化
                    var f = SceneGIS.Cartesian3.cross(d, h, new SceneGIS.Cartesian3);//计算两个坐标点的交叉乘积
                    f = SceneGIS.Cartesian3.normalize(f, f);
                    var p = new SceneGIS.Plane(f, 0),
                        m = SceneGIS.Plane.getPointDistance(p, l);
                      
                       

                    t.push(new SceneGIS.ClippingPlane(f, m))
                }
                 
                this.viewer.scene.globe.clippingPlanes = new SceneGIS.ClippingPlaneCollection({
                    planes: t,
                    edgeWidth: 0,
                    edgeColor: SceneGIS.Color.WHITE,
                    enabled: !0
                }), this._prepareWell(e), this._createWell(this.wellData)
            }
        }, {
            key: "clear",
            value: function () {
                if(this.viewer.scene.globe.clippingPlanes){
                    this.viewer.scene.globe.clippingPlanes && (
                        this.viewer.scene.globe.clippingPlanes.enabled = !1, 
                        this.viewer.scene.globe.clippingPlanes.removeAll(), 
                        this.viewer.scene.globe.clippingPlanes.isDestroyed()
                    ), 
                    this.viewer.scene.globe.clippingPlanes = void 0, 
                    this.bottomSurface && this.viewer.scene.primitives.remove(this.bottomSurface), 
                    this.wellWall && this.viewer.scene.primitives.remove(this.wellWall), 
                    delete this.bottomSurface, 
                    delete this.wellWall, 
                    this.viewer.scene.render()
                }
            }
        }, {
            key: "_prepareWell",
            value: function (e) {
                var t = this.splitNum,
                    i = e.length;
                if (0 != i) {
                    for (var a = this.excavateMinHeight - this.height , n = [], r = [], s = [], l = 0; l < i; l++) {
                        var u = l == i - 1 ? 0 : l + 1,
                            c = SceneGIS.Cartographic.fromCartesian(e[l]),
                            d = SceneGIS.Cartographic.fromCartesian(e[u]),
                            h = [c.longitude, c.latitude],
                            f = [d.longitude, d.latitude];

                        0 == l && (
                            s.push(new SceneGIS.Cartographic(h[0], h[1])),
                            r.push(SceneGIS.Cartesian3.fromRadians(h[0], h[1], a)),
                            n.push(SceneGIS.Cartesian3.fromRadians(h[0], h[1], 0)));

                        for (var p = 1; p <= t; p++) {
                            var m = SceneGIS.Math.lerp(h[0], f[0], p / t),
                                g = SceneGIS.Math.lerp(h[1], f[1], p / t);
                            l == i - 1 && p == t || (
                                s.push(new SceneGIS.Cartographic(m, g)),
                                r.push(SceneGIS.Cartesian3.fromRadians(m, g, a)),
                                n.push(SceneGIS.Cartesian3.fromRadians(m, g, 0)))
                        }
                    }
                    this.wellData = {
                        lerp_pos: s,
                        bottom_pos: r,
                        no_height_top: n
                    }
                }
            }
        }, {
            key: "_createWell",
            value: function (e) {
                if (Boolean(this.viewer.terrainProvider._layers)) {
                    var t = this;
                    this._createBottomSurface(e.bottom_pos);
                    const promise = SceneGIS.sampleTerrainMostDetailed(this.viewer.terrainProvider, e.lerp_pos);
                    if(promise){
                        Promise.resolve(promise).then(function(updatedPositions){
                            for (var a = updatedPositions.length, n = [], r = 0; r < a; r++) {
                                var s = SceneGIS.Cartesian3.fromRadians(updatedPositions[r].longitude, updatedPositions[r].latitude, updatedPositions[r].height);
                                n.push(s)
                            }
                            t._createWellWall(e.bottom_pos, n)
                        });
                    }
                } else {
                    this._createBottomSurface(e.bottom_pos);
                    this._createWellWall(e.bottom_pos, e.no_height_top)
                }
            }
        }, {
            key: "_getMinHeight",
            value: function (e) {
                let minHeight = 5000000;
                let minPoint = null;
                for (let i = 0; i < e.length; i++) {
                    let height = e[i]['z'];
                    if (height < minHeight) {
                        minHeight = height;
                        minPoint = this._ellipsoidToLonLat(e[i]);
                    }
                }
                return minPoint.altitude;
            }
        }, {
            key: "_ellipsoidToLonLat",
            value: function (c) {
                let ellipsoid = this.viewer.scene.globe.ellipsoid;
                let cartesian3 = new SceneGIS.Cartesian3(c.x, c.y, c.z);
                let cartographic = ellipsoid.cartesianToCartographic(cartesian3);
                let lat = SceneGIS.Math.toDegrees(cartographic.latitude);
                let lng = SceneGIS.Math.toDegrees(cartographic.longitude);
                let alt = cartographic.height;
                return {
                    longitude: lng,
                    latitude: lat,
                    altitude: alt
                }
            }
        }, {
            key: "_createWellWall",
            value: function (e, t) {
                 e.push(e[0]);
                t.push(t[0]);
                //自动补齐闭合墙壁
                let minHeight = this._getMinHeight(e);
                let maxHeights = [];
                let minHeights = [];
                
                for (let i = 0; i < t.length; i++) {
                    maxHeights.push(this._ellipsoidToLonLat(t[i]).altitude);
                    minHeights.push(minHeight);
                }
                let wall = new SceneGIS.WallGeometry({
                    positions: t,
                    maximumHeights: maxHeights,
                    minimumHeights: minHeights,
                });
                let geometry = SceneGIS.WallGeometry.createGeometry(wall);
                var a = new SceneGIS.Material({
                    fabric: {
                        type: "Image",
                        uniforms: {
                            image: this.wallImg
                        }
                    }
                }),
                    n = new SceneGIS.MaterialAppearance({
                        translucent: !1,
                        flat: !0,
                        material: a
                    });
                this.wellWall = new SceneGIS.Primitive({
                    geometryInstances: new SceneGIS.GeometryInstance({
                        geometry: geometry,
                        attributes: {
                            color: SceneGIS.ColorGeometryInstanceAttribute.fromColor(SceneGIS.Color.GREY)
                        },
                        id: "PitWall"
                    }),
                    appearance: n,
                    asynchronous: !1
                }), this.viewer.scene.primitives.add(this.wellWall)
            }
        }, {
            key: "_createBottomSurface",
            value: function (e) {
                if (e.length) {
                    let minHeight = this._getMinHeight(e);
                    let positions = [];
                    for (let i = 0; i < e.length; i++) {
                        let p = this._ellipsoidToLonLat(e[i]);
                        positions.push(p.longitude);
                        positions.push(p.latitude);
                        positions.push(minHeight);
                    }

                    let polygon = new SceneGIS.PolygonGeometry({
                        polygonHierarchy: new SceneGIS.PolygonHierarchy(
                            SceneGIS.Cartesian3.fromDegreesArrayHeights(positions)
                        ),
                        perPositionHeight : true
                    });
                    let geometry = SceneGIS.PolygonGeometry.createGeometry(polygon);


                    var i = new SceneGIS.Material({
                        fabric: {
                            type: "Image",
                            uniforms: {
                                image: this.bottomImg
                            }
                        }
                    }),
                        a = new SceneGIS.MaterialAppearance({
                            translucent: !1,
                            flat: !0,
                            material: i
                        });
                    this.bottomSurface = new SceneGIS.Primitive({
                        geometryInstances: new SceneGIS.GeometryInstance({
                            geometry: geometry
                        }),
                        appearance: a,
                        asynchronous: !1
                    }), this.viewer.scene.primitives.add(this.bottomSurface)
                }
            }
        }, {
            key: "_switchExcavate",
            value: function (e) {
                e ? (this.viewer.scene.globe.material = SceneGIS.Material.fromType("WaJue"), this.wellWall.show = !0, this.bottomSurface.show = !0) : (this.viewer.scene.globe.material = null, this.wellWall.show = !1, this.bottomSurface.show = !1)
            }
        }, {
            key: "_updateExcavateDepth",
            value: function (e) {
                this.bottomSurface && this.viewer.scene.primitives.remove(this.bottomSurface), this.wellWall && this.viewer.scene.primitives.remove(this.wellWall);
                for (var t = this.wellData.lerp_pos, i = [], a = t.length, n = 0; n < a; n++) i.push(SceneGIS.Cartesian3.fromRadians(t[n].longitude, t[n].latitude, this.excavateMinHeight - e));
                this.wellData.bottom_pos = i, this._createWell(this.wellData), this.viewer.scene.primitives.add(this.bottomSurface), this.viewer.scene.primitives.add(this.wellWall)
            }
        }, {
            key: "show",
            get: function () {
                return this._show
            },
            set: function (e) {
                this._show = e, this.viewer.scene.globe.clippingPlanes && (this.viewer.scene.globe.clippingPlanes.enabled = e), this._switchExcavate(e)
            }
        }, {
            key: "height",
            get: function () {
                return this._height
            },
            set: function (e) {
                this._height = e, this._updateExcavateDepth(e)
            }
        }]), e
    }()
})()