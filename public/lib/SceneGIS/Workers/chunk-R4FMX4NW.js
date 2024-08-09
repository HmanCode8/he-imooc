/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.114
 *
 * Copyright 2011-2022 Cesium Contributors
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

import{f as U}from"./chunk-JJFA6IXC.js";import{a as t,e as C}from"./chunk-KXWBEOUA.js";import{a as d}from"./chunk-4BEFMW7D.js";import{e as B}from"./chunk-A5XXOFX2.js";var H={},E=new t,Q=new t,G=new U,Z=new C;function N(y,p,M,w,g,P,h,x,T,c,z,a){let I=y+p;t.multiplyByScalar(w,Math.cos(I),E),t.multiplyByScalar(M,Math.sin(I),Q),t.add(E,Q,E);let l=Math.cos(y);l=l*l;let n=Math.sin(y);n=n*n;let f=P/Math.sqrt(h*l+g*n);if(B(z)&&z===!0&&B(a)){let u=new t;return u.x=E.y,u.y=E.x,t.multiplyByScalar(u,f,u),t.add(a,u,c),c}let m=f/x;return U.fromAxisAngle(E,m,G),C.fromQuaternion(G,Z),C.multiplyByVector(Z,T,c),t.normalize(c,c),t.multiplyByScalar(c,x,c),c}var Y=new t,k=new t,j=new t,X=new t;H.raisePositionsToHeight=function(y,p,M,w){let g=p.ellipsoid,P=p.height,h=p.extrudedHeight,x=M?y.length/3*2:y.length/3,T=new Float64Array(x*3),c=y.length,z=M?c:0;for(let a=0;a<c;a+=3){let I=a+1,l=a+2,n=t.fromArray(y,a,Y);(!B(w)||w===!1)&&g.scaleToGeodeticSurface(n,n);let f=t.clone(n,k),m=new t;!B(w)||w===!1?m=g.geodeticSurfaceNormal(n,X):(m=new t(0,0,1),m.clone(X));let u=t.multiplyByScalar(m,P,j);t.add(n,u,n),M&&(t.multiplyByScalar(m,h,u),t.add(f,u,f),T[a+z]=f.x,T[I+z]=f.y,T[l+z]=f.z),T[a]=n.x,T[I]=n.y,T[l]=n.z}return T};var D=new t,J=new t,K=new t;H.computeEllipsePositions=function(y,p,M){let w=y.semiMinorAxis,g=y.semiMajorAxis,P=y.rotation,h=y.center,x=y.planeView,T=y.granularity*8,c=w*w,z=g*g,a=g*w,I=t.magnitude(h),l,n,f;B(x)&&x===!0?(l=t.UNIT_Z,n=t.UNIT_X,f=t.UNIT_Y):(l=t.normalize(h,D),n=t.cross(t.UNIT_Z,h,J),n=t.normalize(n,n),f=t.cross(l,n,K));let m=1+Math.ceil(d.PI_OVER_TWO/T),u=d.PI_OVER_TWO/(m-1),_=d.PI_OVER_TWO-m*u;_<0&&(m-=Math.ceil(Math.abs(_)/u));let v=2*(m*(m+2)),o=p?new Array(v*3):void 0,r=0,e=Y,s=k,L=m*4*3,O=L-1,R=0,i=M?new Array(L):void 0,S,A,W,b,V;for(_=d.PI_OVER_TWO,e=N(_,P,f,n,c,a,z,I,l,e,x,h),p&&(o[r++]=e.x,o[r++]=e.y,o[r++]=e.z),M&&(i[O--]=e.z,i[O--]=e.y,i[O--]=e.x),_=d.PI_OVER_TWO-u,S=1;S<m+1;++S){if(e=N(_,P,f,n,c,a,z,I,l,e,x,h),s=N(Math.PI-_,P,f,n,c,a,z,I,l,s,x,h),p){for(o[r++]=e.x,o[r++]=e.y,o[r++]=e.z,W=2*S+2,A=1;A<W-1;++A)b=A/(W-1),V=t.lerp(e,s,b,j),o[r++]=V.x,o[r++]=V.y,o[r++]=V.z;o[r++]=s.x,o[r++]=s.y,o[r++]=s.z}M&&(i[O--]=e.z,i[O--]=e.y,i[O--]=e.x,i[R++]=s.x,i[R++]=s.y,i[R++]=s.z),_=d.PI_OVER_TWO-(S+1)*u}for(S=m;S>1;--S){if(_=d.PI_OVER_TWO-(S-1)*u,e=N(-_,P,f,n,c,a,z,I,l,e,x,h),s=N(_+Math.PI,P,f,n,c,a,z,I,l,s,x,h),p){for(o[r++]=e.x,o[r++]=e.y,o[r++]=e.z,W=2*(S-1)+2,A=1;A<W-1;++A)b=A/(W-1),V=t.lerp(e,s,b,j),o[r++]=V.x,o[r++]=V.y,o[r++]=V.z;o[r++]=s.x,o[r++]=s.y,o[r++]=s.z}M&&(i[O--]=e.z,i[O--]=e.y,i[O--]=e.x,i[R++]=s.x,i[R++]=s.y,i[R++]=s.z)}_=d.PI_OVER_TWO,e=N(-_,P,f,n,c,a,z,I,l,e,x,h);let q={};return p&&(o[r++]=e.x,o[r++]=e.y,o[r++]=e.z,q.positions=o,q.numPts=m),M&&(i[O--]=e.z,i[O--]=e.y,i[O--]=e.x,q.outerPositions=i),q};var ot=H;export{ot as a};
