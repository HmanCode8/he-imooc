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
define(["exports","./Transforms-c38817cd","./Matrix2-bce7772b","./Matrix3-a45402cf","./defaultValue-192c850d","./EllipsoidTangentPlane-b1a9b8da","./Math-be2c8494","./Plane-f4b01105","./CartesianRectangle-3289fb67"],(function(a,t,e,n,r,i,s,o,c){"use strict";function C(a,t){this.center=n.Cartesian3.clone(r.defaultValue(a,n.Cartesian3.ZERO)),this.halfAxes=n.Matrix3.clone(r.defaultValue(t,n.Matrix3.ZERO))}C.packedLength=n.Cartesian3.packedLength+n.Matrix3.packedLength,C.pack=function(a,t,e){return e=r.defaultValue(e,0),n.Cartesian3.pack(a.center,t,e),n.Matrix3.pack(a.halfAxes,t,e+n.Cartesian3.packedLength),t},C.unpack=function(a,t,e){return t=r.defaultValue(t,0),r.defined(e)||(e=new C),n.Cartesian3.unpack(a,t,e.center),n.Matrix3.unpack(a,t+n.Cartesian3.packedLength,e.halfAxes),e};const u=new n.Cartesian3,l=new n.Cartesian3,d=new n.Cartesian3,h=new n.Cartesian3,x=new n.Cartesian3,m=new n.Cartesian3,M=new n.Matrix3,f={unitary:new n.Matrix3,diagonal:new n.Matrix3};C.fromPoints=function(a,t){if(r.defined(t)||(t=new C),!r.defined(a)||0===a.length)return t.halfAxes=n.Matrix3.ZERO,t.center=n.Cartesian3.ZERO,t;let e;const i=a.length,s=n.Cartesian3.clone(a[0],u);for(e=1;e<i;e++)n.Cartesian3.add(s,a[e],s);const o=1/i;n.Cartesian3.multiplyByScalar(s,o,s);let c,p=0,w=0,g=0,b=0,y=0,P=0;for(e=0;e<i;e++)c=n.Cartesian3.subtract(a[e],s,l),p+=c.x*c.x,w+=c.x*c.y,g+=c.x*c.z,b+=c.y*c.y,y+=c.y*c.z,P+=c.z*c.z;p*=o,w*=o,g*=o,b*=o,y*=o,P*=o;const A=M;A[0]=p,A[1]=w,A[2]=g,A[3]=w,A[4]=b,A[5]=y,A[6]=g,A[7]=y,A[8]=P;const N=n.Matrix3.computeEigenDecomposition(A,f),T=n.Matrix3.clone(N.unitary,t.halfAxes);let O=n.Matrix3.getColumn(T,0,h),R=n.Matrix3.getColumn(T,1,x),I=n.Matrix3.getColumn(T,2,m),E=-Number.MAX_VALUE,S=-Number.MAX_VALUE,U=-Number.MAX_VALUE,L=Number.MAX_VALUE,z=Number.MAX_VALUE,V=Number.MAX_VALUE;for(e=0;e<i;e++)c=a[e],E=Math.max(n.Cartesian3.dot(O,c),E),S=Math.max(n.Cartesian3.dot(R,c),S),U=Math.max(n.Cartesian3.dot(I,c),U),L=Math.min(n.Cartesian3.dot(O,c),L),z=Math.min(n.Cartesian3.dot(R,c),z),V=Math.min(n.Cartesian3.dot(I,c),V);O=n.Cartesian3.multiplyByScalar(O,.5*(L+E),O),R=n.Cartesian3.multiplyByScalar(R,.5*(z+S),R),I=n.Cartesian3.multiplyByScalar(I,.5*(V+U),I);const B=n.Cartesian3.add(O,R,t.center);n.Cartesian3.add(B,I,B);const _=d;return _.x=E-L,_.y=S-z,_.z=U-V,n.Cartesian3.multiplyByScalar(_,.5,_),n.Matrix3.multiplyByScale(t.halfAxes,_,t.halfAxes),t};const p=new n.Cartesian3,w=new n.Cartesian3;function g(a,t,e,i,s,o,c,u,l,d,h){r.defined(h)||(h=new C);const x=h.halfAxes;n.Matrix3.setColumn(x,0,t,x),n.Matrix3.setColumn(x,1,e,x),n.Matrix3.setColumn(x,2,i,x);let m=p;m.x=(s+o)/2,m.y=(c+u)/2,m.z=(l+d)/2;const M=w;M.x=(o-s)/2,M.y=(u-c)/2,M.z=(d-l)/2;const f=h.center;return m=n.Matrix3.multiplyByVector(x,m,m),n.Cartesian3.add(a,m,f),n.Matrix3.multiplyByScale(x,M,x),h}const b=new n.Cartographic,y=new n.Cartesian3,P=new n.Cartographic,A=new n.Cartographic,N=new n.Cartographic,T=new n.Cartographic,O=new n.Cartographic,R=new n.Cartesian3,I=new n.Cartesian3,E=new n.Cartesian3,S=new n.Cartesian3,U=new n.Cartesian3,L=new e.Cartesian2,z=new e.Cartesian2,V=new e.Cartesian2,B=new e.Cartesian2,_=new e.Cartesian2,k=new n.Cartesian3,D=new n.Cartesian3,W=new n.Cartesian3,X=new n.Cartesian3,q=new e.Cartesian2,j=new n.Cartesian3,Z=new n.Cartesian3,v=new n.Cartesian3,Y=new o.Plane(n.Cartesian3.UNIT_X,0);C.fromRectangle=function(a,t,c,C,u){let l,d,h,x,m,M,f;if(t=r.defaultValue(t,0),c=r.defaultValue(c,0),C=r.defaultValue(C,n.Ellipsoid.WGS84),a.width<=s.CesiumMath.PI){const r=e.Rectangle.center(a,b),s=C.cartographicToCartesian(r,y),p=new i.EllipsoidTangentPlane(s,C);f=p.plane;const w=r.longitude,k=a.south<0&&a.north>0?0:r.latitude,D=n.Cartographic.fromRadians(w,a.north,c,P),W=n.Cartographic.fromRadians(a.west,a.north,c,A),X=n.Cartographic.fromRadians(a.west,k,c,N),q=n.Cartographic.fromRadians(a.west,a.south,c,T),j=n.Cartographic.fromRadians(w,a.south,c,O),Z=C.cartographicToCartesian(D,R);let v=C.cartographicToCartesian(W,I);const Y=C.cartographicToCartesian(X,E);let G=C.cartographicToCartesian(q,S);const F=C.cartographicToCartesian(j,U),H=p.projectPointToNearestOnPlane(Z,L),J=p.projectPointToNearestOnPlane(v,z),K=p.projectPointToNearestOnPlane(Y,V),Q=p.projectPointToNearestOnPlane(G,B),$=p.projectPointToNearestOnPlane(F,_);return l=Math.min(J.x,K.x,Q.x),d=-l,x=Math.max(J.y,H.y),h=Math.min(Q.y,$.y),W.height=q.height=t,v=C.cartographicToCartesian(W,I),G=C.cartographicToCartesian(q,S),m=Math.min(o.Plane.getPointDistance(f,v),o.Plane.getPointDistance(f,G)),M=c,g(p.origin,p.xAxis,p.yAxis,p.zAxis,l,d,h,x,m,M,u)}const p=a.south>0,w=a.north<0,G=p?a.south:w?a.north:0,F=e.Rectangle.center(a,b).longitude,H=n.Cartesian3.fromRadians(F,G,c,C,k);H.z=0;const J=Math.abs(H.x)<s.CesiumMath.EPSILON10&&Math.abs(H.y)<s.CesiumMath.EPSILON10?n.Cartesian3.UNIT_X:n.Cartesian3.normalize(H,D),K=n.Cartesian3.UNIT_Z,Q=n.Cartesian3.cross(J,K,W);f=o.Plane.fromPointNormal(H,J,Y);const $=n.Cartesian3.fromRadians(F+s.CesiumMath.PI_OVER_TWO,G,c,C,X);d=n.Cartesian3.dot(o.Plane.projectPointOntoPlane(f,$,q),Q),l=-d,x=n.Cartesian3.fromRadians(0,a.north,w?t:c,C,j).z,h=n.Cartesian3.fromRadians(0,a.south,p?t:c,C,Z).z;const aa=n.Cartesian3.fromRadians(a.east,G,c,C,v);return m=o.Plane.getPointDistance(f,aa),M=0,g(H,Q,K,J,l,d,h,x,m,M,u)};const G=new n.Cartesian3;C.fromRectangleCartesian=function(a,t,e,s,C){let u,l,d,h,x,m,M;t=r.defaultValue(t,0),e=r.defaultValue(e,0);const f=c.CartesianRectangle.center(a,G),p=f,w=new i.EllipsoidTangentPlane(p,s,!0);M=w.plane;const b=f.x,y=f.y,P=new n.Cartesian3(b,a.north,e),A=new n.Cartesian3(a.west,a.north,e),N=new n.Cartesian3(a.west,y,e),T=new n.Cartesian3(a.west,a.south,e),O=new n.Cartesian3(b,a.south,e),L=n.Cartesian3.subtract(A,f,I),z=n.Cartesian3.subtract(T,f,S),V=n.Cartesian3.subtract(N,f,E);u=Math.min(L.x,V.x,z.x),l=-u;const B=n.Cartesian3.subtract(P,f,R),_=n.Cartesian3.subtract(O,f,U);return h=Math.max(L.y,B.y),d=Math.min(z.y,_.y),A.height=T.height=t,x=-Math.min(o.Plane.getPointDistance(M,L),o.Plane.getPointDistance(M,z)),m=0==e?1:e,g(w.origin,w.xAxis,w.yAxis,w.zAxis,u,l,d,h,x,m,C)},C.fromTransformation=function(a,t){return r.defined(t)||(t=new C),t.center=e.Matrix4.getTranslation(a,t.center),t.halfAxes=e.Matrix4.getMatrix3(a,t.halfAxes),t.halfAxes=n.Matrix3.multiplyByScalar(t.halfAxes,.5,t.halfAxes),t},C.clone=function(a,t){if(r.defined(a))return r.defined(t)?(n.Cartesian3.clone(a.center,t.center),n.Matrix3.clone(a.halfAxes,t.halfAxes),t):new C(a.center,a.halfAxes)},C.intersectPlane=function(a,e){const r=a.center,i=e.normal,s=a.halfAxes,o=i.x,c=i.y,C=i.z,u=Math.abs(o*s[n.Matrix3.COLUMN0ROW0]+c*s[n.Matrix3.COLUMN0ROW1]+C*s[n.Matrix3.COLUMN0ROW2])+Math.abs(o*s[n.Matrix3.COLUMN1ROW0]+c*s[n.Matrix3.COLUMN1ROW1]+C*s[n.Matrix3.COLUMN1ROW2])+Math.abs(o*s[n.Matrix3.COLUMN2ROW0]+c*s[n.Matrix3.COLUMN2ROW1]+C*s[n.Matrix3.COLUMN2ROW2]),l=n.Cartesian3.dot(i,r)+e.distance;return l<=-u?t.Intersect.OUTSIDE:l>=u?t.Intersect.INSIDE:t.Intersect.INTERSECTING};const F=new n.Cartesian3,H=new n.Cartesian3,J=new n.Cartesian3,K=new n.Cartesian3,Q=new n.Cartesian3,$=new n.Cartesian3;C.distanceSquaredTo=function(a,t){const e=n.Cartesian3.subtract(t,a.center,p),r=a.halfAxes;let i=n.Matrix3.getColumn(r,0,F),o=n.Matrix3.getColumn(r,1,H),c=n.Matrix3.getColumn(r,2,J);const C=n.Cartesian3.magnitude(i),u=n.Cartesian3.magnitude(o),l=n.Cartesian3.magnitude(c);let d=!0,h=!0,x=!0;C>0?n.Cartesian3.divideByScalar(i,C,i):d=!1,u>0?n.Cartesian3.divideByScalar(o,u,o):h=!1,l>0?n.Cartesian3.divideByScalar(c,l,c):x=!1;const m=!d+!h+!x;let M,f,w;if(1===m){let a=i;M=o,f=c,h?x||(a=c,f=i):(a=o,M=i),w=n.Cartesian3.cross(M,f,Q),a===i?i=w:a===o?o=w:a===c&&(c=w)}else if(2===m){M=i,h?M=o:x&&(M=c);let a=n.Cartesian3.UNIT_Y;a.equalsEpsilon(M,s.CesiumMath.EPSILON3)&&(a=n.Cartesian3.UNIT_X),f=n.Cartesian3.cross(M,a,K),n.Cartesian3.normalize(f,f),w=n.Cartesian3.cross(M,f,Q),n.Cartesian3.normalize(w,w),M===i?(o=f,c=w):M===o?(c=f,i=w):M===c&&(i=f,o=w)}else 3===m&&(i=n.Cartesian3.UNIT_X,o=n.Cartesian3.UNIT_Y,c=n.Cartesian3.UNIT_Z);const g=$;g.x=n.Cartesian3.dot(e,i),g.y=n.Cartesian3.dot(e,o),g.z=n.Cartesian3.dot(e,c);let b,y=0;return g.x<-C?(b=g.x+C,y+=b*b):g.x>C&&(b=g.x-C,y+=b*b),g.y<-u?(b=g.y+u,y+=b*b):g.y>u&&(b=g.y-u,y+=b*b),g.z<-l?(b=g.z+l,y+=b*b):g.z>l&&(b=g.z-l,y+=b*b),y};const aa=new n.Cartesian3,ta=new n.Cartesian3;C.computePlaneDistances=function(a,e,i,s){r.defined(s)||(s=new t.Interval);let o=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY;const C=a.center,u=a.halfAxes,l=n.Matrix3.getColumn(u,0,F),d=n.Matrix3.getColumn(u,1,H),h=n.Matrix3.getColumn(u,2,J),x=n.Cartesian3.add(l,d,aa);n.Cartesian3.add(x,h,x),n.Cartesian3.add(x,C,x);const m=n.Cartesian3.subtract(x,e,ta);let M=n.Cartesian3.dot(i,m);return o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.add(C,l,x),n.Cartesian3.add(x,d,x),n.Cartesian3.subtract(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.add(C,l,x),n.Cartesian3.subtract(x,d,x),n.Cartesian3.add(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.add(C,l,x),n.Cartesian3.subtract(x,d,x),n.Cartesian3.subtract(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.subtract(C,l,x),n.Cartesian3.add(x,d,x),n.Cartesian3.add(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.subtract(C,l,x),n.Cartesian3.add(x,d,x),n.Cartesian3.subtract(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.subtract(C,l,x),n.Cartesian3.subtract(x,d,x),n.Cartesian3.add(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),n.Cartesian3.subtract(C,l,x),n.Cartesian3.subtract(x,d,x),n.Cartesian3.subtract(x,h,x),n.Cartesian3.subtract(x,e,m),M=n.Cartesian3.dot(i,m),o=Math.min(M,o),c=Math.max(M,c),s.start=o,s.stop=c,s};const ea=new n.Cartesian3,na=new n.Cartesian3,ra=new n.Cartesian3;C.computeCorners=function(a,t){r.defined(t)||(t=[new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3,new n.Cartesian3]);const e=a.center,i=a.halfAxes,s=n.Matrix3.getColumn(i,0,ea),o=n.Matrix3.getColumn(i,1,na),c=n.Matrix3.getColumn(i,2,ra);return n.Cartesian3.clone(e,t[0]),n.Cartesian3.subtract(t[0],s,t[0]),n.Cartesian3.subtract(t[0],o,t[0]),n.Cartesian3.subtract(t[0],c,t[0]),n.Cartesian3.clone(e,t[1]),n.Cartesian3.subtract(t[1],s,t[1]),n.Cartesian3.subtract(t[1],o,t[1]),n.Cartesian3.add(t[1],c,t[1]),n.Cartesian3.clone(e,t[2]),n.Cartesian3.subtract(t[2],s,t[2]),n.Cartesian3.add(t[2],o,t[2]),n.Cartesian3.subtract(t[2],c,t[2]),n.Cartesian3.clone(e,t[3]),n.Cartesian3.subtract(t[3],s,t[3]),n.Cartesian3.add(t[3],o,t[3]),n.Cartesian3.add(t[3],c,t[3]),n.Cartesian3.clone(e,t[4]),n.Cartesian3.add(t[4],s,t[4]),n.Cartesian3.subtract(t[4],o,t[4]),n.Cartesian3.subtract(t[4],c,t[4]),n.Cartesian3.clone(e,t[5]),n.Cartesian3.add(t[5],s,t[5]),n.Cartesian3.subtract(t[5],o,t[5]),n.Cartesian3.add(t[5],c,t[5]),n.Cartesian3.clone(e,t[6]),n.Cartesian3.add(t[6],s,t[6]),n.Cartesian3.add(t[6],o,t[6]),n.Cartesian3.subtract(t[6],c,t[6]),n.Cartesian3.clone(e,t[7]),n.Cartesian3.add(t[7],s,t[7]),n.Cartesian3.add(t[7],o,t[7]),n.Cartesian3.add(t[7],c,t[7]),t};const ia=new n.Matrix3;C.computeTransformation=function(a,t){r.defined(t)||(t=new e.Matrix4);const i=a.center,s=n.Matrix3.multiplyByUniformScale(a.halfAxes,2,ia);return e.Matrix4.fromRotationTranslation(s,i,t)};const sa=new t.BoundingSphere;C.isOccluded=function(a,e){const n=t.BoundingSphere.fromOrientedBoundingBox(a,sa);return!e.isBoundingSphereVisible(n)},C.prototype.intersectPlane=function(a){return C.intersectPlane(this,a)},C.prototype.distanceSquaredTo=function(a){return C.distanceSquaredTo(this,a)},C.prototype.computePlaneDistances=function(a,t,e){return C.computePlaneDistances(this,a,t,e)},C.prototype.computeCorners=function(a){return C.computeCorners(this,a)},C.prototype.computeTransformation=function(a){return C.computeTransformation(this,a)},C.prototype.isOccluded=function(a){return C.isOccluded(this,a)},C.equals=function(a,t){return a===t||r.defined(a)&&r.defined(t)&&n.Cartesian3.equals(a.center,t.center)&&n.Matrix3.equals(a.halfAxes,t.halfAxes)},C.prototype.clone=function(a){return C.clone(this,a)},C.prototype.equals=function(a){return C.equals(this,a)},a.OrientedBoundingBox=C}));
