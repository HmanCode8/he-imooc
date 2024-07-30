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
define(["./Matrix3-a45402cf","./defaultValue-192c850d","./EllipseOutlineGeometry-658e53e4","./Math-be2c8494","./Transforms-c38817cd","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./EllipseGeometryLibrary-890b3716","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryOffsetAttribute-817c59a7","./IndexDatatype-1ff811be"],(function(e,i,t,r,l,n,s,o,a,c,u,d,m,p,y,f){"use strict";function G(e){const r=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,l={center:e.center,semiMajorAxis:r,semiMinorAxis:r,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new t.EllipseOutlineGeometry(l),this._workerName="createCircleOutlineGeometry"}G.packedLength=t.EllipseOutlineGeometry.packedLength,G.pack=function(e,i,r){return t.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,r)};const _=new t.EllipseOutlineGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),b={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return G.unpack=function(r,l,n){const s=t.EllipseOutlineGeometry.unpack(r,l,_);return b.center=e.Cartesian3.clone(s._center,b.center),b.ellipsoid=e.Ellipsoid.clone(s._ellipsoid,b.ellipsoid),b.height=s._height,b.extrudedHeight=s._extrudedHeight,b.granularity=s._granularity,b.numberOfVerticalLines=s._numberOfVerticalLines,i.defined(n)?(b.semiMajorAxis=s._semiMajorAxis,b.semiMinorAxis=s._semiMinorAxis,n._ellipseGeometry=new t.EllipseOutlineGeometry(b),n):(b.radius=s._semiMajorAxis,new G(b))},G.createGeometry=function(e){return t.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(t,r){return i.defined(r)&&(t=G.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),G.createGeometry(t)}}));
