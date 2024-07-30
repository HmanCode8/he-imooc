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
define(["exports","./Matrix3-a45402cf","./defaultValue-192c850d","./Transforms-c38817cd","./Math-be2c8494","./Matrix2-bce7772b"],(function(t,n,e,a,o,r){"use strict";const s=Math.cos,i=Math.sin,c=Math.sqrt,g={computePosition:function(t,n,a,o,r,g,l,u){const h=n.radiiSquared,d=t.nwCorner,C=t.boundingRectangle;let S=d.latitude-t.granYCos*o+r*t.granXSin;const w=s(S),M=i(S),f=h.z*M;let x=d.longitude+o*t.granYSin+r*t.granXCos;const X=w*s(x),Y=w*i(x),m=h.x*X,p=h.y*Y,y=c(m*X+p*Y+f*M);if(e.defined(u)&&!0===u?(g.x=x,g.y=S,g.z=0):(g.x=m/y,g.y=p/y,g.z=f/y),a){const n=t.stNwCorner;e.defined(n)?(S=n.latitude-t.stGranYCos*o+r*t.stGranXSin,x=n.longitude+o*t.stGranYSin+r*t.stGranXCos,l.x=(x-t.stWest)*t.lonScalar,l.y=(S-t.stSouth)*t.latScalar):(l.x=(x-C.west)*t.lonScalar,l.y=(S-C.south)*t.latScalar)}}},l=new r.Matrix2;let u=new n.Cartesian3;const h=new n.Cartographic;let d=new n.Cartesian3;const C=new a.GeographicProjection;function S(t,a,o,s,i,c,g,h){const S=Math.cos(a),w=s*S,M=o*S,f=Math.sin(a),x=s*f,X=o*f;e.defined(h)&&!1!==h?(u.x=t.longitude,u.y=t.latitude,u.z=t.height):u=C.project(t,u),u=n.Cartesian3.subtract(u,d,u);const Y=r.Matrix2.fromRotation(a,l);u=r.Matrix2.multiplyByVector(Y,u,u),u=n.Cartesian3.add(u,d,u),e.defined(h)&&!1!==h?(t.longitude=u.x,t.latitude=u.y,t.height=u.z):t=C.unproject(u,t),c-=1,g-=1;const m=t.latitude,p=m+c*X,y=m-w*g,G=m-w*g+c*X,R=Math.max(m,p,y,G),_=Math.min(m,p,y,G),b=t.longitude,O=b+c*M,z=b+g*x,P=b+g*x+c*M;return{north:R,south:_,east:Math.max(b,O,z,P),west:Math.min(b,O,z,P),granYCos:w,granYSin:x,granXCos:M,granXSin:X,nwCorner:t}}g.computeOptions=function(t,n,a,s,i,c,g){let l=t.east,u=t.west,w=t.north,M=t.south;const f=t._planeView;let x,X=!1,Y=!1;w===o.CesiumMath.PI_OVER_TWO&&(X=!0),M===-o.CesiumMath.PI_OVER_TWO&&(Y=!0);const m=w-M;x=u>l?o.CesiumMath.TWO_PI-u+l:l-u,!0===f&&(n=111e3);const p=Math.ceil(x/n)+1,y=Math.ceil(m/n)+1,G=x/(p-1),R=m/(y-1),_=r.Rectangle.northwest(t,c),b=r.Rectangle.center(t,h);0===a&&0===s||(e.defined(f)&&!1!==f?(d.x=b.longitude,d.y=b.latitude,d.z=b.height):(b.longitude<_.longitude&&(b.longitude+=o.CesiumMath.TWO_PI),d=C.project(b,d)));const O=R,z=G,P=r.Rectangle.clone(t,i),V={granYCos:O,granYSin:0,granXCos:z,granXSin:0,nwCorner:_,boundingRectangle:P,width:p,height:y,northCap:X,southCap:Y};if(0!==a){const t=S(_,a,G,R,0,p,y,f);w=t.north,M=t.south,l=t.east,u=t.west,V.granYCos=t.granYCos,V.granYSin=t.granYSin,V.granXCos=t.granXCos,V.granXSin=t.granXSin,P.north=w,P.south=M,P.east=l,P.west=u,P._planeView=f}if(0!==s){a-=s;const t=r.Rectangle.northwest(P,g),n=S(t,a,G,R,0,p,y,f);V.stGranYCos=n.granYCos,V.stGranXCos=n.granXCos,V.stGranYSin=n.granYSin,V.stGranXSin=n.granXSin,V.stNwCorner=t,V.stWest=n.west,V.stSouth=n.south}return V};var w=g;t.RectangleGeometryLibrary=w}));
