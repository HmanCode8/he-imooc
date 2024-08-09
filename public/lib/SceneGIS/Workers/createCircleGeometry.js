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
define(["./Matrix3-a45402cf","./defaultValue-192c850d","./EllipseGeometry-983e9af1","./VertexFormat-d2271f13","./Math-be2c8494","./Transforms-c38817cd","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./EllipseGeometryLibrary-890b3716","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryInstance-6a82712b","./GeometryOffsetAttribute-817c59a7","./GeometryPipeline-be1ab56a","./AttributeCompression-cb62dc59","./EncodedCartesian3-43036f0c","./IndexDatatype-1ff811be","./IntersectionTests-f861e6a9","./Plane-f4b01105"],(function(e,t,i,r,o,n,a,l,s,m,d,c,u,p,y,_,x,G,f,h,g,b,w){"use strict";function E(e){const r=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume,planeView:e.planeView};this._ellipseGeometry=new i.EllipseGeometry(o),this._workerName="createCircleGeometry"}E.packedLength=i.EllipseGeometry.packedLength,E.pack=function(e,t,r){return i.EllipseGeometry.pack(e._ellipseGeometry,t,r)};const V=new i.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),v={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new r.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return E.unpack=function(o,n,a,l){const s=i.EllipseGeometry.unpack(o,n,V);return v.center=e.Cartesian3.clone(s._center,v.center),v.ellipsoid=e.Ellipsoid.clone(s._ellipsoid,v.ellipsoid),v.height=s._height,v.extrudedHeight=s._extrudedHeight,v.granularity=s._granularity,v.vertexFormat=r.VertexFormat.clone(s._vertexFormat,v.vertexFormat),v.stRotation=s._stRotation,v.shadowVolume=s._shadowVolume,v.planeView=t.defaultValue(l,!1),t.defined(a)?(v.semiMajorAxis=s._semiMajorAxis,v.semiMinorAxis=s._semiMinorAxis,a._ellipseGeometry=new i.EllipseGeometry(v),a):(v.radius=s._semiMajorAxis,new E(v))},E.createGeometry=function(e){return i.EllipseGeometry.createGeometry(e._ellipseGeometry)},E.createShadowVolume=function(e,t,i,o){const n=e._ellipseGeometry._granularity,a=e._ellipseGeometry._ellipsoid,l=t(n,a),s=i(n,a);return new E({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:a,stRotation:e._ellipseGeometry._stRotation,granularity:n,extrudedHeight:l,height:s,vertexFormat:r.VertexFormat.POSITION_ONLY,shadowVolume:!0,planeView:o})},Object.defineProperties(E.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(i,r,o){return t.defined(r)&&(i=E.unpack(i,r,void 0,o)),i._ellipseGeometry._center=e.Cartesian3.clone(i._ellipseGeometry._center),i._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(i._ellipseGeometry._ellipsoid),E.createGeometry(i)}}));
