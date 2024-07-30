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

import{a as L}from"./chunk-24FSEFXQ.js";import{a as T}from"./chunk-GLM7D42Y.js";import{a as P,b as S}from"./chunk-KXWBEOUA.js";import{a as E}from"./chunk-4BEFMW7D.js";import{e as m}from"./chunk-A5XXOFX2.js";var b={};function q(h,e){return E.equalsEpsilon(h.latitude,e.latitude,E.EPSILON10)&&E.equalsEpsilon(h.longitude,e.longitude,E.EPSILON10)}var v=new S,D=new S;function F(h,e,g,l,y){e=T(e,P.equalsEpsilon);let d=e.length;if(d<2)return;let C=m(l),A=m(g),p=new Array(d),f=new Array(d),i=new Array(d),a=e[0];p[0]=a;let s=new S;m(y)&&y===!0?(s.longitude=a.x,s.latitude=a.y,s.height=a.z):s=h.cartesianToCartographic(a,v),A&&(s.height=g[0]),f[0]=s.height,C?i[0]=l[0]:i[0]=0;let r=f[0],O=i[0],t=r===O,n=1;for(let c=1;c<d;++c){let u=e[c],o=new S;m(y)&&y===!0?(o.longitude=u.x,o.latitude=u.y,o.height=u.z):o=h.cartesianToCartographic(u,D),A&&(o.height=g[c]),t=t&&o.height===0,q(s,o)?s.height<o.height&&(f[n-1]=o.height):(p[n]=u,f[n]=o.height,C?i[n]=l[c]:i[n]=0,t=t&&f[n]===i[n],S.clone(o,s),++n)}if(!(t||n<2))return p.length=n,f.length=n,i.length=n,{positions:p,topHeights:f,bottomHeights:i}}var w=new Array(2),B=new Array(2),z={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};b.computePositions=function(h,e,g,l,y,d,C){let A=F(h,e,g,l,C);if(!m(A))return;e=A.positions,g=A.topHeights,l=A.bottomHeights;let p=e.length,f=p-2,i,a,s=E.chordLength(y,h.maximumRadius),r=z;if(r.minDistance=s,r.ellipsoid=h,d){let O=0,t;for(t=0;t<p-1;t++)O+=L.numberOfPoints(e[t],e[t+1],s)+1;i=new Float64Array(O*3),a=new Float64Array(O*3);let n=w,c=B;r.positions=n,r.height=c,r.planeView=C;let u=0;for(t=0;t<p-1;t++){n[0]=e[t],n[1]=e[t+1],c[0]=g[t],c[1]=g[t+1];let o=L.generateArc(r);i.set(o,u),c[0]=l[t],c[1]=l[t+1],a.set(L.generateArc(r),u),u+=o.length}}else r.positions=e,r.height=g,r.planeView=C,i=new Float64Array(L.generateArc(r)),r.height=l,a=new Float64Array(L.generateArc(r));return{bottomPositions:a,topPositions:i,numCorners:f}};var W=b;export{W as a};
