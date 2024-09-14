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
define(["./Matrix3-a45402cf","./defaultValue-192c850d","./EllipseOutlineGeometry-658e53e4","./Math-be2c8494","./Transforms-c38817cd","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./EllipseGeometryLibrary-890b3716","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryOffsetAttribute-817c59a7","./IndexDatatype-1ff811be"],(function(e,t,r,i,n,c,o,a,l,s,b,f,u,m,d,p){"use strict";return function(i,n){return t.defined(n)&&(i=r.EllipseOutlineGeometry.unpack(i,n)),i._center=e.Cartesian3.clone(i._center),i._ellipsoid=e.Ellipsoid.clone(i._ellipsoid),r.EllipseOutlineGeometry.createGeometry(i)}}));
