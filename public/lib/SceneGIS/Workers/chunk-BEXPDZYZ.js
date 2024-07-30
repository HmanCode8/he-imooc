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

import{a as O}from"./chunk-XIY2HUS2.js";import{c as V,d as j}from"./chunk-CJEZWAOI.js";import{a as T,b as v}from"./chunk-KXWBEOUA.js";import{a as y}from"./chunk-4BEFMW7D.js";import{a as k}from"./chunk-3Z2AZRQC.js";import{e as I}from"./chunk-A5XXOFX2.js";var Z=Math.cos,B=Math.sin,A=Math.sqrt,N={};N.computePosition=function(t,w,u,f,G,o,c,C){let l=w.radiiSquared,r=t.nwCorner,i=t.boundingRectangle,n=r.latitude-t.granYCos*f+G*t.granXSin,x=Z(n),M=B(n),d=l.z*M,a=r.longitude+f*t.granYSin+G*t.granXCos,X=x*Z(a),Y=x*B(a),_=l.x*X,R=l.y*Y,g=A(_*X+R*Y+d*M);if(I(C)&&C===!0?(o.x=a,o.y=n,o.z=0):(o.x=_/g,o.y=R/g,o.z=d/g),o.x=_/g,o.y=R/g,o.z=d/g,u){let s=t.stNwCorner;I(s)?(n=s.latitude-t.stGranYCos*f+G*t.stGranXSin,a=s.longitude+f*t.stGranYSin+G*t.stGranXCos,c.x=(a-t.stWest)*t.lonScalar,c.y=(n-t.stSouth)*t.latScalar):(c.x=(a-i.west)*t.lonScalar,c.y=(n-i.south)*t.latScalar)}};var F=new j,e=new T,H=new v,P=new T,L=new O;function D(t,w,u,f,G,o,c,C){let l=Math.cos(w),r=f*l,i=u*l,n=Math.sin(w),x=f*n,M=u*n;!I(C)||C===!1?e=L.project(t,e):(e.x=t.longitude,e.y=t.latitude,e.z=t.height),e=T.subtract(e,P,e);let d=j.fromRotation(w,F);e=j.multiplyByVector(d,e,e),e=T.add(e,P,e),t=L.unproject(e,t),o-=1,c-=1;let a=t.latitude,X=a+o*M,Y=a-r*c,_=a-r*c+o*M,R=Math.max(a,X,Y,_),g=Math.min(a,X,Y,_),s=t.longitude,E=s+o*i,z=s+c*x,b=s+c*x+o*i,q=Math.max(s,E,z,b),m=Math.min(s,E,z,b);return{north:R,south:g,east:q,west:m,granYCos:r,granYSin:x,granXCos:i,granXSin:M,nwCorner:t}}N.computeOptions=function(t,w,u,f,G,o,c){let C=t.east,l=t.west,r=t.north,i=t.south,n=t._planeView,x=!1,M=!1;r===y.PI_OVER_TWO&&(x=!0),i===-y.PI_OVER_TWO&&(M=!0);let d,a=r-i;l>C?d=y.TWO_PI-l+C:d=C-l,n===!0&&(w=111e3);let X=Math.ceil(d/w)+1,Y=Math.ceil(a/w)+1,_=d/(X-1),R=a/(Y-1),g=V.northwest(t,o),s=V.center(t,H);(u!==0||f!==0)&&(!I(n)||n===!1?(s.longitude<g.longitude&&(s.longitude+=y.TWO_PI),P=L.project(s,P)):(P.x=s.longitude,P.y=s.latitude,P.z=s.height));let E=R,z=_,b=0,q=0,m=V.clone(t,G),h={granYCos:E,granYSin:b,granXCos:z,granXSin:q,nwCorner:g,boundingRectangle:m,width:X,height:Y,northCap:x,southCap:M};if(u!==0){let S=D(g,u,_,R,s,X,Y,n);if(r=S.north,i=S.south,C=S.east,l=S.west,(!I(n)||n===!1)&&(r<-y.PI_OVER_TWO||r>y.PI_OVER_TWO||i<-y.PI_OVER_TWO||i>y.PI_OVER_TWO))throw new k("Rotated rectangle is invalid.  It crosses over either the north or south pole.");h.granYCos=S.granYCos,h.granYSin=S.granYSin,h.granXCos=S.granXCos,h.granXSin=S.granXSin,m.north=r,m.south=i,m.east=C,m.west=l,m._planeView=n}if(f!==0){u=u-f;let S=V.northwest(m,c),W=D(S,u,_,R,s,X,Y,n);h.stGranYCos=W.granYCos,h.stGranXCos=W.granXCos,h.stGranYSin=W.granYSin,h.stGranXSin=W.granXSin,h.stNwCorner=S,h.stWest=W.west,h.stSouth=W.south}return h};var st=N;export{st as a};
