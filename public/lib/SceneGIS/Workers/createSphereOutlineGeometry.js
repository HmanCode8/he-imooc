/**
 * @license
 * SceneGIS - https://github.com/CesiumGS/cesium
 * Version 1.97
 *
 * Copyright 2011-2022 SceneGIS Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["./defaultValue-192c850d","./Matrix3-a45402cf","./EllipsoidOutlineGeometry-52382112","./Math-be2c8494","./Transforms-c38817cd","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryOffsetAttribute-817c59a7","./IndexDatatype-1ff811be"],(function(e,i,t,n,o,a,r,s,l,c,d,u,p,m,f){"use strict";function y(n){const o=e.defaultValue(n.radius,1),a={radii:new i.Cartesian3(o,o,o),stackPartitions:n.stackPartitions,slicePartitions:n.slicePartitions,subdivisions:n.subdivisions,planeView:n.planeView};this._ellipsoidGeometry=new t.EllipsoidOutlineGeometry(a),this._workerName="createSphereOutlineGeometry",this._planeView=e.defaultValue(n.planeView,!1)}y.packedLength=t.EllipsoidOutlineGeometry.packedLength,y.pack=function(e,i,n){return t.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,n)};const b=new t.EllipsoidOutlineGeometry,G={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return y.unpack=function(n,o,a,r){const s=t.EllipsoidOutlineGeometry.unpack(n,o,b,r);return G.stackPartitions=s._stackPartitions,G.slicePartitions=s._slicePartitions,G.subdivisions=s._subdivisions,G.planeView=e.defaultValue(r,!1),e.defined(a)?(i.Cartesian3.clone(s._radii,G.radii),a._ellipsoidGeometry=new t.EllipsoidOutlineGeometry(G),a):(G.radius=s._radii.x,new y(G))},y.createGeometry=function(e){return t.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t,n){return e.defined(t)&&(i=y.unpack(i,t,void 0,n)),y.createGeometry(i)}}));
