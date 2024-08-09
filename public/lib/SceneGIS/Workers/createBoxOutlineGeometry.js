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
define(["./Transforms-c38817cd","./Matrix3-a45402cf","./ComponentDatatype-f194b981","./defaultValue-192c850d","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryOffsetAttribute-817c59a7","./Math-be2c8494","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./WebGLConstants-1bcc99d3"],(function(e,t,n,a,i,r,o,u,s,m,c,f,d){"use strict";const b=new t.Cartesian3;function p(e){const n=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).minimum,i=e.maximum;this._min=t.Cartesian3.clone(n),this._max=t.Cartesian3.clone(i),this._offsetAttribute=e.offsetAttribute,this._workerName="createBoxOutlineGeometry"}p.fromDimensions=function(e){const n=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).dimensions,i=t.Cartesian3.multiplyByScalar(n,.5,new t.Cartesian3);return new p({minimum:t.Cartesian3.negate(i,new t.Cartesian3),maximum:i,offsetAttribute:e.offsetAttribute})},p.fromAxisAlignedBoundingBox=function(e){return new p({minimum:e.minimum,maximum:e.maximum})},p.packedLength=2*t.Cartesian3.packedLength+1,p.pack=function(e,n,i){return i=a.defaultValue(i,0),t.Cartesian3.pack(e._min,n,i),t.Cartesian3.pack(e._max,n,i+t.Cartesian3.packedLength),n[i+2*t.Cartesian3.packedLength]=a.defaultValue(e._offsetAttribute,-1),n};const l=new t.Cartesian3,y=new t.Cartesian3,C={minimum:l,maximum:y,offsetAttribute:void 0};return p.unpack=function(e,n,i){n=a.defaultValue(n,0);const r=t.Cartesian3.unpack(e,n,l),o=t.Cartesian3.unpack(e,n+t.Cartesian3.packedLength,y),u=e[n+2*t.Cartesian3.packedLength];return a.defined(i)?(i._min=t.Cartesian3.clone(r,i._min),i._max=t.Cartesian3.clone(o,i._max),i._offsetAttribute=-1===u?void 0:u,i):(C.offsetAttribute=-1===u?void 0:u,new p(C))},p.createGeometry=function(u){const s=u._min,m=u._max;if(t.Cartesian3.equals(s,m))return;const c=new r.GeometryAttributes,f=new Uint16Array(24),d=new Float64Array(24);d[0]=s.x,d[1]=s.y,d[2]=s.z,d[3]=m.x,d[4]=s.y,d[5]=s.z,d[6]=m.x,d[7]=m.y,d[8]=s.z,d[9]=s.x,d[10]=m.y,d[11]=s.z,d[12]=s.x,d[13]=s.y,d[14]=m.z,d[15]=m.x,d[16]=s.y,d[17]=m.z,d[18]=m.x,d[19]=m.y,d[20]=m.z,d[21]=s.x,d[22]=m.y,d[23]=m.z,c.position=new i.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d}),f[0]=4,f[1]=5,f[2]=5,f[3]=6,f[4]=6,f[5]=7,f[6]=7,f[7]=4,f[8]=0,f[9]=1,f[10]=1,f[11]=2,f[12]=2,f[13]=3,f[14]=3,f[15]=0,f[16]=0,f[17]=4,f[18]=1,f[19]=5,f[20]=2,f[21]=6,f[22]=3,f[23]=7;const p=t.Cartesian3.subtract(m,s,b),l=.5*t.Cartesian3.magnitude(p);if(a.defined(u._offsetAttribute)){const e=d.length,t=u._offsetAttribute===o.GeometryOffsetAttribute.NONE?0:1,a=new Uint8Array(e/3).fill(t);c.applyOffset=new i.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}return new i.Geometry({attributes:c,indices:f,primitiveType:i.PrimitiveType.LINES,boundingSphere:new e.BoundingSphere(t.Cartesian3.ZERO,l),offsetAttribute:u._offsetAttribute})},function(e,t){return a.defined(t)&&(e=p.unpack(e,t)),p.createGeometry(e)}}));
