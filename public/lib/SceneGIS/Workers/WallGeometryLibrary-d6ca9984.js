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
define(["exports","./arrayRemoveDuplicates-0aca867d","./Matrix3-fe947601","./defaultValue-192c850d","./Math-be2c8494","./PolylinePipeline-3066be24"],(function(e,t,i,n,o,r){"use strict";const a={};function l(e,t){return o.CesiumMath.equalsEpsilon(e.latitude,t.latitude,o.CesiumMath.EPSILON10)&&o.CesiumMath.equalsEpsilon(e.longitude,t.longitude,o.CesiumMath.EPSILON10)}const s=new i.Cartographic,h=new i.Cartographic;const g=new Array(2),c=new Array(2),u={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};a.computePositions=function(e,a,p,d,y,f,m){const P=function(e,o,r,a,g){const c=(o=t.arrayRemoveDuplicates(o,i.Cartesian3.equalsEpsilon)).length;if(c<2)return;const u=n.defined(a),p=n.defined(r),d=new Array(c),y=new Array(c),f=new Array(c),m=o[0];d[0]=m;let P=new i.Cartographic;n.defined(g)&&!0===g?(P.longitude=m.x,P.latitude=m.y,P.height=m.z):P=e.cartesianToCartographic(m,s),p&&(P.height=r[0]),y[0]=P.height,f[0]=u?a[0]:0;let w=y[0]===f[0],C=1;for(let t=1;t<c;++t){const s=o[t];let c=new i.Cartographic;n.defined(g)&&!0===g?(c.longitude=s.x,c.latitude=s.y,c.height=s.z):c=e.cartesianToCartographic(s,h),p&&(c.height=r[t]),w=w&&0===c.height,l(P,c)?P.height<c.height&&(y[C-1]=c.height):(d[C]=s,y[C]=c.height,f[C]=u?a[t]:0,w=w&&y[C]===f[C],i.Cartographic.clone(c,P),++C)}return w||C<2?void 0:(d.length=C,y.length=C,f.length=C,{positions:d,topHeights:y,bottomHeights:f})}(e,a,p,d,m);if(!n.defined(P))return;a=P.positions,p=P.topHeights,d=P.bottomHeights;const w=a.length,C=w-2;let A,v;const b=o.CesiumMath.chordLength(y,e.maximumRadius),M=u;if(M.minDistance=b,M.ellipsoid=e,f){let e,t=0;for(e=0;e<w-1;e++)t+=r.PolylinePipeline.numberOfPoints(a[e],a[e+1],b)+1;A=new Float64Array(3*t),v=new Float64Array(3*t);const i=g,n=c;M.positions=i,M.height=n,M.planeView=m;let o=0;for(e=0;e<w-1;e++){i[0]=a[e],i[1]=a[e+1],n[0]=p[e],n[1]=p[e+1];const t=r.PolylinePipeline.generateArc(M);A.set(t,o),n[0]=d[e],n[1]=d[e+1],v.set(r.PolylinePipeline.generateArc(M),o),o+=t.length}}else M.positions=a,M.height=p,M.planeView=m,A=new Float64Array(r.PolylinePipeline.generateArc(M)),M.height=d,v=new Float64Array(r.PolylinePipeline.generateArc(M));return{bottomPositions:v,topPositions:A,numCorners:C}};var p=a;e.WallGeometryLibrary=p}));
