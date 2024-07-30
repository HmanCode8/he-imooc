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

import{a as v}from"./chunk-KQIV5Z2E.js";import{a as O}from"./chunk-755YNYN4.js";import{b as _}from"./chunk-XNSKNEUY.js";import{a as D}from"./chunk-EJ4R6WJQ.js";import{b as R}from"./chunk-CJEZWAOI.js";import{a as i,b as S,d as M}from"./chunk-KXWBEOUA.js";import{a as x}from"./chunk-4BEFMW7D.js";import{a as b}from"./chunk-2F4MHS2T.js";import{a as G}from"./chunk-3Z2AZRQC.js";import{e as T}from"./chunk-A5XXOFX2.js";var P={};P.numberOfPoints=function(r,n,o){let e=i.distance(r,n);return Math.ceil(e/o)};P.numberOfPointsRhumbLine=function(r,n,o){let e=Math.pow(r.longitude-n.longitude,2)+Math.pow(r.latitude-n.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(e/(o*o))))};var W=new S;P.extractHeights=function(r,n,o){let e=r.length,t=new Array(e);for(let a=0;a<e;a++){let h=r[a];T(o)&&o===!0?t[a]=h.z:t[a]=n.cartesianToCartographic(h,W).height}return t};var F=new R,V=new i,H=new i,j=new D(i.UNIT_X,0),U=new i,J=new D(i.UNIT_X,0),K=new i,Q=new i,B=[];function Z(r,n,o){let e=B;e.length=r;let t;if(n===o){for(t=0;t<r;t++)e[t]=n;return e}let h=(o-n)/r;for(t=0;t<r;t++){let p=n+t*h;e[t]=p}return e}var I=new S,N=new S,C=new i,E=new i,q=new i,k=new v,z=new O;function $(r,n,o,e,t,a,h,p,l){let c,g,f=new S,w=new S;T(l)&&l===!0?(c=r.clone(E),g=n.clone(q),f.longitude=c.x,f.latitude=c.y,f.height=c.z,w.longitude=g.x,w.latitude=g.y,w.height=g.z):(c=e.scaleToGeodeticSurface(r,E),g=e.scaleToGeodeticSurface(n,q),f=e.cartesianToCartographic(c,I),w=e.cartesianToCartographic(g,N));let m=P.numberOfPoints(r,n,o),y=Z(m,t,a);k.setEndPoints(f,w);let s=k.surfaceDistance/m,u=p;f.height=t;let d;T(l)&&l===!0?(d=c.clone(C),d.z=t):d=e.cartographicToCartesian(f,C),i.pack(d,h,u),u+=3;for(let A=1;A<m;A++){let L=k.interpolateUsingSurfaceDistance(A*s,N);L.height=y[A],l===!0?(d.x=L.longitude,d.y=L.latitude,d.z=L.height):d=e.cartographicToCartesian(L,C),i.pack(d,h,u),u+=3}return u}function tt(r,n,o,e,t,a,h,p){let l=e.cartesianToCartographic(r,I),c=e.cartesianToCartographic(n,N),g=P.numberOfPointsRhumbLine(l,c,o);l.height=0,c.height=0;let f=Z(g,t,a);z.ellipsoid.equals(e)||(z=new O(void 0,void 0,e)),z.setEndPoints(l,c);let w=z.surfaceDistance/g,m=p;l.height=t;let y=e.cartographicToCartesian(l,C);i.pack(y,h,m),m+=3;for(let s=1;s<g;s++){let u=z.interpolateUsingSurfaceDistance(s*w,N);u.height=f[s],y=e.cartographicToCartesian(u,C),i.pack(y,h,m),m+=3}return m}P.wrapLongitude=function(r,n){let o=[],e=[];if(T(r)&&r.length>0){n=b(n,R.IDENTITY);let t=R.inverseTransformation(n,F),a=R.multiplyByPoint(t,i.ZERO,V),h=i.normalize(R.multiplyByPointAsVector(t,i.UNIT_Y,H),H),p=D.fromPointNormal(a,h,j),l=i.normalize(R.multiplyByPointAsVector(t,i.UNIT_X,U),U),c=D.fromPointNormal(a,l,J),g=1;o.push(i.clone(r[0]));let f=o[0],w=r.length;for(let m=1;m<w;++m){let y=r[m];if(D.getPointDistance(c,f)<0||D.getPointDistance(c,y)<0){let s=_.lineSegmentPlane(f,y,p,K);if(T(s)){let u=i.multiplyByScalar(h,5e-9,Q);D.getPointDistance(p,f)<0&&i.negate(u,u),o.push(i.add(s,u,new i)),e.push(g+1),i.negate(u,u),o.push(i.add(s,u,new i)),g=1}}o.push(i.clone(r[m])),g++,f=y}e.push(g)}return{positions:o,lengths:e}};P.generateArc=function(r){T(r)||(r={});let n=r.positions,o=b(r.planeView,!1);if(!T(n))throw new G("options.positions is required.");let e=n.length,t=b(r.ellipsoid,M.WGS84),a=b(r.height,0),h=Array.isArray(a);if(e<1)return[];if(e===1){let s;if(o===!0?s=n[0].clone(E):s=t.scaleToGeodeticSurface(n[0],E),a=h?a[0]:a,a!==0){let u;o===!0?(u=new i(0,0,1),u.clone(C)):u=t.geodeticSurfaceNormal(s,C),i.multiplyByScalar(u,a,u),i.add(s,u,s)}return[s.x,s.y,s.z]}let p=r.minDistance;if(!T(p)){let s=b(r.granularity,x.RADIANS_PER_DEGREE);p=x.chordLength(s,t.maximumRadius)}let l=0,c;for(c=0;c<e-1;c++)l+=P.numberOfPoints(n[c],n[c+1],p);let g=(l+1)*3,f=new Array(g),w=0;for(c=0;c<e-1;c++){let s=n[c],u=n[c+1],d=h?a[c]:a,A=h?a[c+1]:a;w=$(s,u,p,t,d,A,f,w,o)}B.length=0;let m=n[e-1],y;if(T(o)&&o===!0)y=m.clone(C),y.z=h?a[e-1]:a;else{let s=t.cartesianToCartographic(m,I);s.height=h?a[e-1]:a,y=t.cartographicToCartesian(s,C)}return i.pack(y,f,g-3),f};var X=new S,et=new S;P.generateRhumbArc=function(r){T(r)||(r={});let n=r.positions;if(!T(n))throw new G("options.positions is required.");let o=n.length,e=b(r.ellipsoid,M.WGS84),t=b(r.height,0),a=Array.isArray(t);if(o<1)return[];if(o===1){let d=e.scaleToGeodeticSurface(n[0],E);if(t=a?t[0]:t,t!==0){let A=e.geodeticSurfaceNormal(d,C);i.multiplyByScalar(A,t,A),i.add(d,A,d)}return[d.x,d.y,d.z]}let h=b(r.granularity,x.RADIANS_PER_DEGREE),p=0,l,c=e.cartesianToCartographic(n[0],X),g;for(l=0;l<o-1;l++)g=e.cartesianToCartographic(n[l+1],et),p+=P.numberOfPointsRhumbLine(c,g,h),c=S.clone(g,X);let f=(p+1)*3,w=new Array(f),m=0;for(l=0;l<o-1;l++){let d=n[l],A=n[l+1],L=a?t[l]:t,Y=a?t[l+1]:t;m=tt(d,A,h,e,L,Y,w,m)}B.length=0;let y=n[o-1],s=e.cartesianToCartographic(y,I);s.height=a?t[o-1]:t;let u=e.cartographicToCartesian(s,C);return i.pack(u,w,f-3),w};P.generateCartesianArc=function(r){let n=P.generateArc(r),o=n.length/3,e=new Array(o);for(let t=0;t<o;t++)e[t]=i.unpack(n,t*3);return e};P.generateCartesianRhumbArc=function(r){let n=P.generateRhumbArc(r),o=n.length/3,e=new Array(o);for(let t=0;t<o;t++)e[t]=i.unpack(n,t*3);return e};var mt=P;export{mt as a};
