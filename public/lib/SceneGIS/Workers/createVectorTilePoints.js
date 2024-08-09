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
define(["./AttributeCompression-cb62dc59","./Matrix3-a45402cf","./Math-be2c8494","./Matrix2-bce7772b","./createTaskProcessorWorker","./ComponentDatatype-f194b981","./defaultValue-192c850d","./WebGLConstants-1bcc99d3","./RuntimeError-ca280330"],(function(e,t,a,r,n,o,i,s,c){"use strict";const u=32767,p=new t.Cartographic,l=new t.Cartesian3,f=new r.Rectangle,b=new t.Ellipsoid,m={min:void 0,max:void 0};return n((function(n,o){const i=new Uint16Array(n.positions);!function(e){e=new Float64Array(e);let a=0;m.min=e[a++],m.max=e[a++],r.Rectangle.unpack(e,a,f),a+=r.Rectangle.packedLength,t.Ellipsoid.unpack(e,a,b)}(n.packedBuffer);const s=f,c=b,d=m.min,h=m.max,C=i.length/3,g=i.subarray(0,C),w=i.subarray(C,2*C),k=i.subarray(2*C,3*C);e.AttributeCompression.zigZagDeltaDecode(g,w,k);const y=new Float64Array(i.length);for(let e=0;e<C;++e){const r=g[e],n=w[e],o=k[e],i=a.CesiumMath.lerp(s.west,s.east,r/u),f=a.CesiumMath.lerp(s.south,s.north,n/u),b=a.CesiumMath.lerp(d,h,o/u),m=t.Cartographic.fromRadians(i,f,b,p),C=c.cartographicToCartesian(m,l);t.Cartesian3.pack(C,y,3*e)}return o.push(y.buffer),{positions:y.buffer}}))}));
