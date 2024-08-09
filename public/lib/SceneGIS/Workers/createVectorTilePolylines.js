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
define(["./Matrix3-a45402cf","./combine-b9b48e3c","./AttributeCompression-cb62dc59","./Math-be2c8494","./IndexDatatype-1ff811be","./Matrix2-bce7772b","./createTaskProcessorWorker","./defaultValue-192c850d","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./RuntimeError-ca280330"],(function(e,t,a,n,r,s,i,o,c,u,f){"use strict";const p=32767,b=new e.Cartographic,d=new e.Cartesian3;const l=new s.Rectangle,C=new e.Ellipsoid,w=new e.Cartesian3,h={min:void 0,max:void 0};const y=new e.Cartesian3,k=new e.Cartesian3,m=new e.Cartesian3,A=new e.Cartesian3,g=new e.Cartesian3;return i((function(i,o){const c=new Uint16Array(i.positions),u=new Uint16Array(i.widths),f=new Uint32Array(i.counts),x=new Uint16Array(i.batchIds);!function(t){t=new Float64Array(t);let a=0;h.min=t[a++],h.max=t[a++],s.Rectangle.unpack(t,a,l),a+=s.Rectangle.packedLength,e.Ellipsoid.unpack(t,a,C),a+=e.Ellipsoid.packedLength,e.Cartesian3.unpack(t,a,w)}(i.packedBuffer);const D=C,E=w,I=function(t,r,s,i,o){const c=t.length/3,u=t.subarray(0,c),f=t.subarray(c,2*c),l=t.subarray(2*c,3*c);a.AttributeCompression.zigZagDeltaDecode(u,f,l);const C=new Float64Array(t.length);for(let t=0;t<c;++t){const a=u[t],c=f[t],w=l[t],h=n.CesiumMath.lerp(r.west,r.east,a/p),y=n.CesiumMath.lerp(r.south,r.north,c/p),k=n.CesiumMath.lerp(s,i,w/p),m=e.Cartographic.fromRadians(h,y,k,b),A=o.cartographicToCartesian(m,d);e.Cartesian3.pack(A,C,3*t)}return C}(c,l,h.min,h.max,D),P=I.length/3,U=4*P-4,M=new Float32Array(3*U),R=new Float32Array(3*U),T=new Float32Array(3*U),F=new Float32Array(2*U),N=new Uint16Array(U);let L,S=0,_=0,v=0,G=0,W=f.length;for(L=0;L<W;++L){const t=f[L],a=u[L],n=x[L];for(let r=0;r<t;++r){let s;if(0===r){const t=e.Cartesian3.unpack(I,3*G,y),a=e.Cartesian3.unpack(I,3*(G+1),k);s=e.Cartesian3.subtract(t,a,m),e.Cartesian3.add(t,s,s)}else s=e.Cartesian3.unpack(I,3*(G+r-1),m);const i=e.Cartesian3.unpack(I,3*(G+r),A);let o;if(r===t-1){const a=e.Cartesian3.unpack(I,3*(G+t-1),y),n=e.Cartesian3.unpack(I,3*(G+t-2),k);o=e.Cartesian3.subtract(a,n,g),e.Cartesian3.add(a,o,o)}else o=e.Cartesian3.unpack(I,3*(G+r+1),g);e.Cartesian3.subtract(s,E,s),e.Cartesian3.subtract(i,E,i),e.Cartesian3.subtract(o,E,o);const c=r===t-1?2:4;for(let t=0===r?2:0;t<c;++t){e.Cartesian3.pack(i,M,S),e.Cartesian3.pack(s,R,S),e.Cartesian3.pack(o,T,S),S+=3;const r=t-2<0?-1:1;F[_++]=t%2*2-1,F[_++]=r*a,N[v++]=n}}G+=t}const B=r.IndexDatatype.createTypedArray(U,6*P-6);let O=0,z=0;for(W=P-1,L=0;L<W;++L)B[z++]=O,B[z++]=O+2,B[z++]=O+1,B[z++]=O+1,B[z++]=O+2,B[z++]=O+3,O+=4;o.push(M.buffer,R.buffer,T.buffer),o.push(F.buffer,N.buffer,B.buffer);let H={indexDatatype:2===B.BYTES_PER_ELEMENT?r.IndexDatatype.UNSIGNED_SHORT:r.IndexDatatype.UNSIGNED_INT,currentPositions:M.buffer,previousPositions:R.buffer,nextPositions:T.buffer,expandAndWidth:F.buffer,batchIds:N.buffer,indices:B.buffer};if(i.keepDecodedPositions){const e=function(e){const t=e.length,a=new Uint32Array(t+1);let n=0;for(let r=0;r<t;++r)a[r]=n,n+=e[r];return a[t]=n,a}(f);o.push(I.buffer,e.buffer),H=t.combine(H,{decodedPositions:I.buffer,decodedPositionOffsets:e.buffer})}return H}))}));
