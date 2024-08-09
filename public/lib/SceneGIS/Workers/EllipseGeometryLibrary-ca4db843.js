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
define(["exports","./Matrix3-fe947601","./defaultValue-192c850d","./Math-be2c8494","./Transforms-38ce56dd"],(function(a,e,t,n,i){"use strict";const r={},s=new e.Cartesian3,o=new e.Cartesian3,l=new i.Quaternion,c=new e.Matrix3;function C(a,n,r,C,y,u,d,m,x,f,h,M){const _=a+n;e.Cartesian3.multiplyByScalar(C,Math.cos(_),s),e.Cartesian3.multiplyByScalar(r,Math.sin(_),o),e.Cartesian3.add(s,o,s);let z=Math.cos(a);z*=z;let w=Math.sin(a);w*=w;const p=u/Math.sqrt(d*z+y*w);if(t.defined(h)&&!0===h&&t.defined(M)){const a=new e.Cartesian3;return a.x=s.y,a.y=s.x,e.Cartesian3.multiplyByScalar(a,p,a),e.Cartesian3.add(M,a,f),f}const O=p/m;return i.Quaternion.fromAxisAngle(s,O,l),e.Matrix3.fromQuaternion(l,c),e.Matrix3.multiplyByVector(c,x,f),e.Cartesian3.normalize(f,f),e.Cartesian3.multiplyByScalar(f,m,f),f}const y=new e.Cartesian3,u=new e.Cartesian3,d=new e.Cartesian3,m=new e.Cartesian3;r.raisePositionsToHeight=function(a,n,i,r){const s=n.ellipsoid,o=n.height,l=n.extrudedHeight,c=i?a.length/3*2:a.length/3,C=new Float64Array(3*c),x=a.length,f=i?x:0;for(let n=0;n<x;n+=3){const c=n+1,x=n+2,h=e.Cartesian3.fromArray(a,n,y);t.defined(r)&&!1!==r||s.scaleToGeodeticSurface(h,h);const M=e.Cartesian3.clone(h,u);let _=new e.Cartesian3;t.defined(r)&&!1!==r?(_=new e.Cartesian3(0,0,1),_.clone(m)):_=s.geodeticSurfaceNormal(h,m);const z=e.Cartesian3.multiplyByScalar(_,o,d);e.Cartesian3.add(h,z,h),i&&(e.Cartesian3.multiplyByScalar(_,l,z),e.Cartesian3.add(M,z,M),C[n+f]=M.x,C[c+f]=M.y,C[x+f]=M.z),C[n]=h.x,C[c]=h.y,C[x]=h.z}return C};const x=new e.Cartesian3,f=new e.Cartesian3,h=new e.Cartesian3;r.computeEllipsePositions=function(a,i,r){const s=a.semiMinorAxis,o=a.semiMajorAxis,l=a.rotation,c=a.center,m=a.planeView,M=8*a.granularity,_=s*s,z=o*o,w=o*s,p=e.Cartesian3.magnitude(c);let O,T,I;t.defined(m)&&!0===m?(O=e.Cartesian3.UNIT_Z,T=e.Cartesian3.UNIT_X,I=e.Cartesian3.UNIT_Y):(O=e.Cartesian3.normalize(c,x),T=e.Cartesian3.cross(e.Cartesian3.UNIT_Z,c,f),T=e.Cartesian3.normalize(T,T),I=e.Cartesian3.cross(O,T,h));let P=1+Math.ceil(n.CesiumMath.PI_OVER_TWO/M);const V=n.CesiumMath.PI_OVER_TWO/(P-1);let g=n.CesiumMath.PI_OVER_TWO-P*V;g<0&&(P-=Math.ceil(Math.abs(g)/V));const E=i?new Array(3*(P*(P+2)*2)):void 0;let A=0,R=y,S=u;const W=4*P*3;let B=W-1,N=0;const U=r?new Array(W):void 0;let b,v,Q,G,H;for(g=n.CesiumMath.PI_OVER_TWO,R=C(g,l,I,T,_,w,z,p,O,R,m,c),i&&(E[A++]=R.x,E[A++]=R.y,E[A++]=R.z),r&&(U[B--]=R.z,U[B--]=R.y,U[B--]=R.x),g=n.CesiumMath.PI_OVER_TWO-V,b=1;b<P+1;++b){if(R=C(g,l,I,T,_,w,z,p,O,R,m,c),S=C(Math.PI-g,l,I,T,_,w,z,p,O,S,m,c),i){for(E[A++]=R.x,E[A++]=R.y,E[A++]=R.z,Q=2*b+2,v=1;v<Q-1;++v)G=v/(Q-1),H=e.Cartesian3.lerp(R,S,G,d),E[A++]=H.x,E[A++]=H.y,E[A++]=H.z;E[A++]=S.x,E[A++]=S.y,E[A++]=S.z}r&&(U[B--]=R.z,U[B--]=R.y,U[B--]=R.x,U[N++]=S.x,U[N++]=S.y,U[N++]=S.z),g=n.CesiumMath.PI_OVER_TWO-(b+1)*V}for(b=P;b>1;--b){if(g=n.CesiumMath.PI_OVER_TWO-(b-1)*V,R=C(-g,l,I,T,_,w,z,p,O,R,m,c),S=C(g+Math.PI,l,I,T,_,w,z,p,O,S,m,c),i){for(E[A++]=R.x,E[A++]=R.y,E[A++]=R.z,Q=2*(b-1)+2,v=1;v<Q-1;++v)G=v/(Q-1),H=e.Cartesian3.lerp(R,S,G,d),E[A++]=H.x,E[A++]=H.y,E[A++]=H.z;E[A++]=S.x,E[A++]=S.y,E[A++]=S.z}r&&(U[B--]=R.z,U[B--]=R.y,U[B--]=R.x,U[N++]=S.x,U[N++]=S.y,U[N++]=S.z)}g=n.CesiumMath.PI_OVER_TWO,R=C(-g,l,I,T,_,w,z,p,O,R,m,c);const Z={};return i&&(E[A++]=R.x,E[A++]=R.y,E[A++]=R.z,Z.positions=E,Z.numPts=P),r&&(U[B--]=R.z,U[B--]=R.y,U[B--]=R.x,Z.outerPositions=U),Z};var M=r;a.EllipseGeometryLibrary=M}));
