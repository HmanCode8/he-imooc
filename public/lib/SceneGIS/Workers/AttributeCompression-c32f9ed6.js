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
define(["exports","./Matrix2-dca1b63d","./Matrix3-fe947601","./ComponentDatatype-f194b981","./defaultValue-192c850d","./Math-be2c8494"],(function(t,e,n,o,a,c){"use strict";const r={SCALAR:"SCALAR",VEC2:"VEC2",VEC3:"VEC3",VEC4:"VEC4",MAT2:"MAT2",MAT3:"MAT3",MAT4:"MAT4",getMathType:function(t){switch(t){case r.SCALAR:return Number;case r.VEC2:return e.Cartesian2;case r.VEC3:return n.Cartesian3;case r.VEC4:return e.Cartesian4;case r.MAT2:return e.Matrix2;case r.MAT3:return n.Matrix3;case r.MAT4:return e.Matrix4}},getNumberOfComponents:function(t){switch(t){case r.SCALAR:return 1;case r.VEC2:return 2;case r.VEC3:return 3;case r.VEC4:case r.MAT2:return 4;case r.MAT3:return 9;case r.MAT4:return 16}},getAttributeLocationCount:function(t){switch(t){case r.SCALAR:case r.VEC2:case r.VEC3:case r.VEC4:return 1;case r.MAT2:return 2;case r.MAT3:return 3;case r.MAT4:return 4}},getGlslType:function(t){switch(t){case r.SCALAR:return"float";case r.VEC2:return"vec2";case r.VEC3:return"vec3";case r.VEC4:return"vec4";case r.MAT2:return"mat2";case r.MAT3:return"mat3";case r.MAT4:return"mat4"}}};var s=Object.freeze(r);const u=1/256,i={octEncodeInRange:function(t,e,n){if(n.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),n.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0){const t=n.x,e=n.y;n.x=(1-Math.abs(e))*c.CesiumMath.signNotZero(t),n.y=(1-Math.abs(t))*c.CesiumMath.signNotZero(e)}return n.x=c.CesiumMath.toSNorm(n.x,e),n.y=c.CesiumMath.toSNorm(n.y,e),n},octEncode:function(t,e){return i.octEncodeInRange(t,255,e)}},C=new e.Cartesian2,M=new Uint8Array(1);function f(t){return M[0]=t,M[0]}i.octEncodeToCartesian4=function(t,e){return i.octEncodeInRange(t,65535,C),e.x=f(C.x*u),e.y=f(C.x),e.z=f(C.y*u),e.w=f(C.y),e},i.octDecodeInRange=function(t,e,o,a){if(a.x=c.CesiumMath.fromSNorm(t,o),a.y=c.CesiumMath.fromSNorm(e,o),a.z=1-(Math.abs(a.x)+Math.abs(a.y)),a.z<0){const t=a.x;a.x=(1-Math.abs(a.y))*c.CesiumMath.signNotZero(t),a.y=(1-Math.abs(t))*c.CesiumMath.signNotZero(a.y)}return n.Cartesian3.normalize(a,a)},i.octDecode=function(t,e,n){return i.octDecodeInRange(t,e,255,n)},i.octDecodeFromCartesian4=function(t,e){const n=256*t.x+t.y,o=256*t.z+t.w;return i.octDecodeInRange(n,o,65535,e)},i.octPackFloat=function(t){return 256*t.x+t.y};const d=new e.Cartesian2;function m(t){return t>>1^-(1&t)}i.octEncodeFloat=function(t){return i.octEncode(t,d),i.octPackFloat(d)},i.octDecodeFloat=function(t,e){const n=t/256,o=Math.floor(n),a=256*(n-o);return i.octDecode(o,a,e)},i.octPack=function(t,e,n,o){const a=i.octEncodeFloat(t),c=i.octEncodeFloat(e),r=i.octEncode(n,d);return o.x=65536*r.x+a,o.y=65536*r.y+c,o},i.octUnpack=function(t,e,n,o){let a=t.x/65536;const c=Math.floor(a),r=65536*(a-c);a=t.y/65536;const s=Math.floor(a),u=65536*(a-s);i.octDecodeFloat(r,e),i.octDecodeFloat(u,n),i.octDecode(c,s,o)},i.compressTextureCoordinates=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},i.decompressTextureCoordinates=function(t,e){const n=t/4096,o=Math.floor(n);return e.x=o/4095,e.y=(t-4096*o)/4095,e},i.zigZagDeltaDecode=function(t,e,n){const o=t.length;let c=0,r=0,s=0;for(let u=0;u<o;++u)c+=m(t[u]),r+=m(e[u]),t[u]=c,e[u]=r,a.defined(n)&&(s+=m(n[u]),n[u]=s)},i.dequantize=function(t,e,n,a){const c=s.getNumberOfComponents(n);let r;switch(e){case o.ComponentDatatype.BYTE:r=127;break;case o.ComponentDatatype.UNSIGNED_BYTE:r=255;break;case o.ComponentDatatype.SHORT:r=32767;break;case o.ComponentDatatype.UNSIGNED_SHORT:r=65535;break;case o.ComponentDatatype.INT:r=2147483647;break;case o.ComponentDatatype.UNSIGNED_INT:r=4294967295}const u=new Float32Array(a*c);for(let e=0;e<a;e++)for(let n=0;n<c;n++){const o=e*c+n;u[o]=Math.max(t[o]/r,-1)}return u},i.decodeRGB565=function(t,e){const n=t.length;a.defined(e)||(e=new Float32Array(3*n));const o=1/31,c=1/63;for(let a=0;a<n;a++){const n=t[a],r=n>>11,s=n>>5&63,u=31&n,i=3*a;e[i]=r*o,e[i+1]=s*c,e[i+2]=u*o}return e};var y=i;t.AttributeCompression=y}));
