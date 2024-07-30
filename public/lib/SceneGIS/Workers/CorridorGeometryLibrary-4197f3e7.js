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
define(["exports","./Matrix3-fe947601","./PolylineVolumeGeometryLibrary-38d07e7b","./defaultValue-192c850d","./Math-be2c8494","./PolylinePipeline-3066be24","./Transforms-38ce56dd"],(function(a,e,n,t,r,i,s){"use strict";const o={},l=new e.Cartesian3,C=new e.Cartesian3,u=new e.Cartesian3,c=new e.Cartesian3,y=[new e.Cartesian3,new e.Cartesian3],d=new e.Cartesian3,p=new e.Cartesian3,m=new e.Cartesian3,f=new e.Cartesian3,g=new e.Cartesian3,w=new e.Cartesian3,h=new e.Cartesian3,x=new e.Cartesian3,z=new e.Cartesian3,A=new e.Cartesian3,P=new s.Quaternion,B=new e.Matrix3;function b(a,i,o,u,c,y){const d=e.Cartesian3.angleBetween(e.Cartesian3.subtract(i,a,l),e.Cartesian3.subtract(o,a,C)),p=u===n.CornerType.BEVELED?1:Math.ceil(d/r.CesiumMath.toRadians(5))+1;y=t.defaultValue(y,!1);const m=3*p,f=new Array(m);let g;f[m-3]=o.x,f[m-2]=o.y,f[m-1]=o.z,c?g=!0===y?e.Matrix3.fromQuaternion(s.Quaternion.fromAxisAngle(new e.Cartesian3(0,0,-1),d/p,P),B):e.Matrix3.fromQuaternion(s.Quaternion.fromAxisAngle(e.Cartesian3.negate(a,l),d/p,P),B):(g=e.Matrix3.fromQuaternion(s.Quaternion.fromAxisAngle(a,d/p,P),B),!0===y&&(g=e.Matrix3.fromQuaternion(s.Quaternion.fromAxisAngle(new e.Cartesian3(0,0,1),d/p,P),B)));let w=0;i=e.Cartesian3.clone(i,l);for(let n=0;n<p;n++)!0===y&&e.Cartesian3.subtract(i,a,i),i=e.Matrix3.multiplyByVector(g,i,i),!0===y&&e.Cartesian3.add(i,a,i),f[w++]=i.x,f[w++]=i.y,f[w++]=i.z;return f}function E(a,n,t,r){let i=l;return r||(n=e.Cartesian3.negate(n,n)),i=e.Cartesian3.add(a,n,i),[i.x,i.y,i.z,t.x,t.y,t.z]}function S(a,n,t,r){const i=new Array(a.length),s=new Array(a.length),o=e.Cartesian3.multiplyByScalar(n,t,l),y=e.Cartesian3.negate(o,C);let d=0,p=a.length-1;for(let n=0;n<a.length;n+=3){const t=e.Cartesian3.fromArray(a,n,u),r=e.Cartesian3.add(t,y,c);i[d++]=r.x,i[d++]=r.y,i[d++]=r.z;const l=e.Cartesian3.add(t,o,c);s[p--]=l.z,s[p--]=l.y,s[p--]=l.x}return r.push(i,s),r}o.addAttribute=function(a,e,n,r){const i=e.x,s=e.y,o=e.z;t.defined(n)&&(a[n]=i,a[n+1]=s,a[n+2]=o),t.defined(r)&&(a[r]=o,a[r-1]=s,a[r-2]=i)};const M=new e.Cartesian3,D=new e.Cartesian3;o.computePositions=function(a){let s=a.granularity;const o=a.positions,C=a.ellipsoid,u=a.width/2,c=a.cornerType,P=a.saveAttributes,B=a.planeView;let V=d,T=p,N=m,Q=f,L=g,O=w,R=h,U=x,v=z,G=A,I=[];const q=P?[]:void 0,j=P?[]:void 0;let k,F=o[0],H=o[1];!0===B&&(s=111e3),T=e.Cartesian3.normalize(e.Cartesian3.subtract(H,F,T),T),V=!0===B?new e.Cartesian3(0,0,1):C.geodeticSurfaceNormal(F,V),Q=e.Cartesian3.normalize(e.Cartesian3.cross(V,T,Q),Q),P&&(q.push(Q.x,Q.y,Q.z),j.push(V.x,V.y,V.z)),R=e.Cartesian3.clone(F,R),F=H,N=e.Cartesian3.negate(T,N);const J=[];let K;const W=o.length;for(K=1;K<W-1;K++){V=!0===B?new e.Cartesian3(0,0,1):C.geodeticSurfaceNormal(F,V),H=o[K+1],T=e.Cartesian3.normalize(e.Cartesian3.subtract(H,F,T),T),L=e.Cartesian3.add(T,N,L),0===L.x&&0===L.y&&0===L.z||(L=e.Cartesian3.normalize(L,L));const a=e.Cartesian3.multiplyByScalar(V,e.Cartesian3.dot(T,V),M);e.Cartesian3.subtract(T,a,a),e.Cartesian3.normalize(a,a);const t=e.Cartesian3.multiplyByScalar(V,e.Cartesian3.dot(N,V),D);e.Cartesian3.subtract(N,t,t),e.Cartesian3.normalize(t,t);if(!r.CesiumMath.equalsEpsilon(Math.abs(e.Cartesian3.dot(a,t)),1,r.CesiumMath.EPSILON7)){L=e.Cartesian3.cross(L,V,L),L=e.Cartesian3.cross(V,L,L),L=e.Cartesian3.normalize(L,L);let a=u/Math.max(.25,e.Cartesian3.magnitude(e.Cartesian3.cross(L,N,l)));!0===B&&(a=u);const t=n.PolylineVolumeGeometryLibrary.angleIsGreaterThanPi(T,N,F,C,B);L=e.Cartesian3.multiplyByScalar(L,a,L),t?(U=e.Cartesian3.add(F,L,U),G=e.Cartesian3.add(U,e.Cartesian3.multiplyByScalar(Q,u,G),G),v=e.Cartesian3.add(U,e.Cartesian3.multiplyByScalar(Q,2*u,v),v),y[0]=e.Cartesian3.clone(R,y[0]),y[1]=e.Cartesian3.clone(G,y[1]),k=i.PolylinePipeline.generateArc({positions:y,granularity:s,ellipsoid:C,planeView:B}),I=S(k,Q,u,I),P&&(q.push(Q.x,Q.y,Q.z),j.push(V.x,V.y,V.z)),O=e.Cartesian3.clone(v,O),Q=e.Cartesian3.normalize(e.Cartesian3.cross(V,T,Q),Q),v=e.Cartesian3.add(U,e.Cartesian3.multiplyByScalar(Q,2*u,v),v),R=e.Cartesian3.add(U,e.Cartesian3.multiplyByScalar(Q,u,R),R),c===n.CornerType.ROUNDED||c===n.CornerType.BEVELED?J.push({leftPositions:b(U,O,v,c,t,B)}):J.push({leftPositions:E(F,e.Cartesian3.negate(L,L),v,t)})):(v=e.Cartesian3.add(F,L,v),G=e.Cartesian3.add(v,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(Q,u,G),G),G),U=e.Cartesian3.add(v,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(Q,2*u,U),U),U),y[0]=e.Cartesian3.clone(R,y[0]),y[1]=e.Cartesian3.clone(G,y[1]),k=i.PolylinePipeline.generateArc({positions:y,granularity:s,ellipsoid:C,planeView:B}),I=S(k,Q,u,I),P&&(q.push(Q.x,Q.y,Q.z),j.push(V.x,V.y,V.z)),O=e.Cartesian3.clone(U,O),Q=e.Cartesian3.normalize(e.Cartesian3.cross(V,T,Q),Q),U=e.Cartesian3.add(v,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(Q,2*u,U),U),U),R=e.Cartesian3.add(v,e.Cartesian3.negate(e.Cartesian3.multiplyByScalar(Q,u,R),R),R),c===n.CornerType.ROUNDED||c===n.CornerType.BEVELED?J.push({rightPositions:b(v,O,U,c,t,B)}):J.push({rightPositions:E(F,L,U,t)})),N=e.Cartesian3.negate(T,N)}F=H}let X;return V=!0===B?new e.Cartesian3(0,0,1):C.geodeticSurfaceNormal(F,V),y[0]=e.Cartesian3.clone(R,y[0]),y[1]=e.Cartesian3.clone(F,y[1]),k=i.PolylinePipeline.generateArc({positions:y,granularity:s,ellipsoid:C,planeView:B}),I=S(k,Q,u,I),P&&(q.push(Q.x,Q.y,Q.z),j.push(V.x,V.y,V.z)),c===n.CornerType.ROUNDED&&(X=function(a,r){r=t.defaultValue(r,!1);let i=d,s=p,o=m,l=a[1];s=e.Cartesian3.fromArray(a[1],l.length-3,s),o=e.Cartesian3.fromArray(a[0],0,o),i=e.Cartesian3.midpoint(s,o,i);const C=b(i,s,o,n.CornerType.ROUNDED,!1,r),u=a.length-1,c=a[u-1];return l=a[u],s=e.Cartesian3.fromArray(c,c.length-3,s),o=e.Cartesian3.fromArray(l,0,o),i=e.Cartesian3.midpoint(s,o,i),[C,b(i,s,o,n.CornerType.ROUNDED,!1,r)]}(I,B)),{positions:I,corners:J,lefts:q,normals:j,endPositions:X}};var V=o;a.CorridorGeometryLibrary=V}));
