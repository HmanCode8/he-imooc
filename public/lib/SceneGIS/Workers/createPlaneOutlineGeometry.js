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
define(["./defaultValue-192c850d","./Transforms-c38817cd","./Matrix3-a45402cf","./ComponentDatatype-f194b981","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./Math-be2c8494","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./WebGLConstants-1bcc99d3"],(function(e,t,n,r,a,i,o,c,u,s,m,y){"use strict";function b(){this._workerName="createPlaneOutlineGeometry"}b.packedLength=0,b.pack=function(e,t){return t},b.unpack=function(t,n,r){return e.defined(r)?r:new b};const p=new n.Cartesian3(-.5,-.5,0),f=new n.Cartesian3(.5,.5,0);return b.createGeometry=function(){const e=new i.GeometryAttributes,o=new Uint16Array(8),c=new Float64Array(12);return c[0]=p.x,c[1]=p.y,c[2]=p.z,c[3]=f.x,c[4]=p.y,c[5]=p.z,c[6]=f.x,c[7]=f.y,c[8]=p.z,c[9]=p.x,c[10]=f.y,c[11]=p.z,e.position=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),o[0]=0,o[1]=1,o[2]=1,o[3]=2,o[4]=2,o[5]=3,o[6]=3,o[7]=0,new a.Geometry({attributes:e,indices:o,primitiveType:a.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=b.unpack(t,n)),b.createGeometry(t)}}));
