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
define(["./defaultValue-192c850d","./Matrix3-a45402cf","./EllipsoidGeometry-a14baa76","./VertexFormat-d2271f13","./Math-be2c8494","./Transforms-c38817cd","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryOffsetAttribute-817c59a7","./IndexDatatype-1ff811be"],(function(e,t,i,r,a,o,n,s,c,l,d,m,u,p,f,y){"use strict";function G(r){const a=e.defaultValue(r.radius,1),o={radii:new t.Cartesian3(a,a,a),stackPartitions:r.stackPartitions,slicePartitions:r.slicePartitions,vertexFormat:r.vertexFormat};this._ellipsoidGeometry=new i.EllipsoidGeometry(o),this._workerName="createSphereGeometry",this._planeView=e.defaultValue(r.planeView,!1)}G.packedLength=i.EllipsoidGeometry.packedLength,G.pack=function(e,t,r){return i.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};const b=new i.EllipsoidGeometry,k={radius:void 0,radii:new t.Cartesian3,vertexFormat:new r.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return G.unpack=function(a,o,n,s){const c=i.EllipsoidGeometry.unpack(a,o,b,s);return k.vertexFormat=r.VertexFormat.clone(c._vertexFormat,k.vertexFormat),k.stackPartitions=c._stackPartitions,k.slicePartitions=c._slicePartitions,k.planeView=e.defaultValue(s,!1),e.defined(n)?(t.Cartesian3.clone(c._radii,k.radii),n._ellipsoidGeometry=new i.EllipsoidGeometry(k),n):(k.radius=c._radii.x,new G(k))},G.createGeometry=function(e){return i.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i,r){return e.defined(i)&&(t=G.unpack(t,i,void 0,r)),G.createGeometry(t)}}));
