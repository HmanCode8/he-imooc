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
define(["./AxisAlignedBoundingBox-e6370b82","./Transforms-c38817cd","./Matrix2-bce7772b","./Matrix3-a45402cf","./defaultValue-192c850d","./TerrainEncoding-432a4214","./Math-be2c8494","./OrientedBoundingBox-d8d8ede3","./RuntimeError-ca280330","./WebMercatorProjection-7f67a88a","./createTaskProcessorWorker","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./AttributeCompression-cb62dc59","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./EllipsoidTangentPlane-b1a9b8da","./IntersectionTests-f861e6a9","./Plane-f4b01105","./CartesianRectangle-3289fb67"],(function(t,e,n,i,o,a,r,s,c,u,h,d,l,g,m,p,f,I,E,T){"use strict";const C=Uint16Array.BYTES_PER_ELEMENT,M=Int32Array.BYTES_PER_ELEMENT,x=Uint32Array.BYTES_PER_ELEMENT,b=Float32Array.BYTES_PER_ELEMENT,N=Float64Array.BYTES_PER_ELEMENT;function S(t,e,n){n=o.defaultValue(n,r.CesiumMath);const i=t.length;for(let o=0;o<i;++o)if(n.equalsEpsilon(t[o],e,r.CesiumMath.EPSILON12))return o;return-1}const w=new i.Cartographic,B=new i.Cartesian3,P=new i.Cartesian3,A=new i.Cartesian3,R=new n.Matrix4;function y(t,e,a,s,c,u,h,d,l,g,m){const p=d.length;for(let f=0;f<p;++f){const I=d[f],E=I.cartographic,T=I.index,C=t.length,M=E.longitude;let x=E.latitude;x=r.CesiumMath.clamp(x,-r.CesiumMath.PI_OVER_TWO,r.CesiumMath.PI_OVER_TWO);const b=E.height-h.skirtHeight;h.hMin=Math.min(h.hMin,b),i.Cartographic.fromRadians(M,x,b,w),g&&(w.longitude+=l),g?f===p-1?w.latitude+=m:0===f&&(w.latitude-=m):w.latitude+=l;const N=h.ellipsoid.cartographicToCartesian(w);t.push(N),e.push(b),a.push(n.Cartesian2.clone(a[T])),s.length>0&&s.push(s[T]),c.length>0&&c.push(c[T]),n.Matrix4.multiplyByPoint(h.toENU,N,B);const S=h.minimum,P=h.maximum;i.Cartesian3.minimumByComponent(B,S,S),i.Cartesian3.maximumByComponent(B,P,P);const A=h.lastBorderPoint;if(o.defined(A)){const t=A.index;u.push(t,C-1,C,C,T,t)}h.lastBorderPoint=I}}return h((function(h,d){h.ellipsoid=i.Ellipsoid.clone(h.ellipsoid),h.rectangle=n.Rectangle.clone(h.rectangle);const l=function(h,d,l,g,m,p,f,I,E,T,_){let W,v,F,O,V,Y;o.defined(g)?(W=g.west,v=g.south,F=g.east,O=g.north,V=g.width,Y=g.height):(W=r.CesiumMath.toRadians(m.west),v=r.CesiumMath.toRadians(m.south),F=r.CesiumMath.toRadians(m.east),O=r.CesiumMath.toRadians(m.north),V=r.CesiumMath.toRadians(g.width),Y=r.CesiumMath.toRadians(g.height));const H=[v,O],U=[W,F],k=e.Transforms.eastNorthUpToFixedFrame(d,l),L=n.Matrix4.inverseTransformation(k,R);let j,D;E&&(j=u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(v),D=1/(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(O)-j));const G=1!==p,z=new DataView(h);let q=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;const K=P;K.x=Number.POSITIVE_INFINITY,K.y=Number.POSITIVE_INFINITY,K.z=Number.POSITIVE_INFINITY;const Q=A;Q.x=Number.NEGATIVE_INFINITY,Q.y=Number.NEGATIVE_INFINITY,Q.z=Number.NEGATIVE_INFINITY;let X,Z,$=0,tt=0,et=0;for(Z=0;Z<4;++Z){let t=$;X=z.getUint32(t,!0),t+=x;const e=r.CesiumMath.toRadians(180*z.getFloat64(t,!0));t+=N,-1===S(U,e)&&U.push(e);const n=r.CesiumMath.toRadians(180*z.getFloat64(t,!0));t+=N,-1===S(H,n)&&H.push(n),t+=2*N;let i=z.getInt32(t,!0);t+=M,tt+=i,i=z.getInt32(t,!0),et+=3*i,$+=X+x}const nt=[],it=[],ot=new Array(tt),at=new Array(tt),rt=new Array(tt),st=E?new Array(tt):[],ct=G?new Array(tt):[],ut=new Array(et),ht=[],dt=[],lt=[],gt=[];let mt=0,pt=0;for($=0,Z=0;Z<4;++Z){X=z.getUint32($,!0),$+=x;const t=$,e=r.CesiumMath.toRadians(180*z.getFloat64($,!0));$+=N;const o=r.CesiumMath.toRadians(180*z.getFloat64($,!0));$+=N;const a=r.CesiumMath.toRadians(180*z.getFloat64($,!0)),s=.5*a;$+=N;const h=r.CesiumMath.toRadians(180*z.getFloat64($,!0)),d=.5*h;$+=N;const g=z.getInt32($,!0);$+=M;const m=z.getInt32($,!0);$+=M,$+=M;const p=new Array(g);for(let t=0;t<g;++t){const c=e+z.getUint8($++)*a;w.longitude=c;const g=o+z.getUint8($++)*h;w.latitude=g;let m=z.getFloat32($,!0);if($+=b,0!==m&&m<_&&(m*=-Math.pow(2,T)),m*=6371010,w.height=m,-1!==S(U,c)||-1!==S(H,g)){const e=S(nt,w,i.Cartographic);if(-1!==e){p[t]=it[e];continue}nt.push(i.Cartographic.clone(w)),it.push(mt)}p[t]=mt,Math.abs(c-W)<s?ht.push({index:mt,cartographic:i.Cartographic.clone(w)}):Math.abs(c-F)<s?lt.push({index:mt,cartographic:i.Cartographic.clone(w)}):Math.abs(g-v)<d?dt.push({index:mt,cartographic:i.Cartographic.clone(w)}):Math.abs(g-O)<d&&gt.push({index:mt,cartographic:i.Cartographic.clone(w)}),q=Math.min(m,q),J=Math.max(m,J),rt[mt]=m;const f=l.cartographicToCartesian(w);if(ot[mt]=f,E&&(st[mt]=(u.WebMercatorProjection.geodeticLatitudeToMercatorAngle(g)-j)*D),G){const t=l.geodeticSurfaceNormal(f);ct[mt]=t}n.Matrix4.multiplyByPoint(L,f,B),i.Cartesian3.minimumByComponent(B,K,K),i.Cartesian3.maximumByComponent(B,Q,Q);let I=(c-W)/(F-W);I=r.CesiumMath.clamp(I,0,1);let C=(g-v)/(O-v);C=r.CesiumMath.clamp(C,0,1),at[mt]=new n.Cartesian2(I,C),++mt}const f=3*m;for(let t=0;t<f;++t,++pt)ut[pt]=p[z.getUint16($,!0)],$+=C;if(X!==$-t)throw new c.RuntimeError("Invalid terrain tile.")}ot.length=mt,at.length=mt,rt.length=mt,E&&(st.length=mt);G&&(ct.length=mt);const ft=mt,It=pt,Et={hMin:q,lastBorderPoint:void 0,skirtHeight:I,toENU:L,ellipsoid:l,minimum:K,maximum:Q};ht.sort((function(t,e){return e.cartographic.latitude-t.cartographic.latitude})),dt.sort((function(t,e){return t.cartographic.longitude-e.cartographic.longitude})),lt.sort((function(t,e){return t.cartographic.latitude-e.cartographic.latitude})),gt.sort((function(t,e){return e.cartographic.longitude-t.cartographic.longitude}));const Tt=1e-5;if(y(ot,rt,at,st,ct,ut,Et,ht,-Tt*V,!0,-Tt*Y),y(ot,rt,at,st,ct,ut,Et,dt,-Tt*Y,!1),y(ot,rt,at,st,ct,ut,Et,lt,Tt*V,!0,Tt*Y),y(ot,rt,at,st,ct,ut,Et,gt,Tt*Y,!1),ht.length>0&&gt.length>0){const t=ht[0].index,e=ft,n=gt[gt.length-1].index,i=ot.length-1;ut.push(n,i,e,e,t,n)}tt=ot.length;const Ct=e.BoundingSphere.fromPoints(ot);let Mt;o.defined(g)&&(Mt=s.OrientedBoundingBox.fromRectangle(g,q,J,l));const xt=new a.EllipsoidalOccluder(l).computeHorizonCullingPointPossiblyUnderEllipsoid(d,ot,q),bt=new t.AxisAlignedBoundingBox(K,Q,d),Nt=new a.TerrainEncoding(d,bt,Et.hMin,J,k,!1,E,G,p,f),St=new Float32Array(tt*Nt.stride);let wt=0;for(let t=0;t<tt;++t)wt=Nt.encode(St,wt,ot[t],at[t],rt[t],void 0,st[t],ct[t]);const Bt=ht.map((function(t){return t.index})).reverse(),Pt=dt.map((function(t){return t.index})).reverse(),At=lt.map((function(t){return t.index})).reverse(),Rt=gt.map((function(t){return t.index})).reverse();return Pt.unshift(At[At.length-1]),Pt.push(Bt[0]),Rt.unshift(Bt[Bt.length-1]),Rt.push(At[0]),{vertices:St,indices:new Uint16Array(ut),maximumHeight:J,minimumHeight:q,encoding:Nt,boundingSphere3D:Ct,orientedBoundingBox:Mt,occludeePointInScaledSpace:xt,vertexCountWithoutSkirts:ft,indexCountWithoutSkirts:It,westIndicesSouthToNorth:Bt,southIndicesEastToWest:Pt,eastIndicesNorthToSouth:At,northIndicesWestToEast:Rt}}(h.buffer,h.relativeToCenter,h.ellipsoid,h.rectangle,h.nativeRectangle,h.exaggeration,h.exaggerationRelativeHeight,h.skirtHeight,h.includeWebMercatorT,h.negativeAltitudeExponentBias,h.negativeElevationThreshold),g=l.vertices;d.push(g.buffer);const m=l.indices;return d.push(m.buffer),{vertices:g.buffer,indices:m.buffer,numberOfAttributes:l.encoding.stride,minimumHeight:l.minimumHeight,maximumHeight:l.maximumHeight,boundingSphere3D:l.boundingSphere3D,orientedBoundingBox:l.orientedBoundingBox,occludeePointInScaledSpace:l.occludeePointInScaledSpace,encoding:l.encoding,vertexCountWithoutSkirts:l.vertexCountWithoutSkirts,indexCountWithoutSkirts:l.indexCountWithoutSkirts,westIndicesSouthToNorth:l.westIndicesSouthToNorth,southIndicesEastToWest:l.southIndicesEastToWest,eastIndicesNorthToSouth:l.eastIndicesNorthToSouth,northIndicesWestToEast:l.northIndicesWestToEast}}))}));
