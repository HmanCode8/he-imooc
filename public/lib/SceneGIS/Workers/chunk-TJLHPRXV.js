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

import{a as tt}from"./chunk-YRE67PY5.js";import{a as Y}from"./chunk-CTJWM7OW.js";import{a as I}from"./chunk-EJ4R6WJQ.js";import{b as v,c as H,d as Z}from"./chunk-XIY2HUS2.js";import{b as B,c as k}from"./chunk-CJEZWAOI.js";import{a as t,b as g,c as j,d as $,e as d}from"./chunk-KXWBEOUA.js";import{a as z}from"./chunk-4BEFMW7D.js";import{a as E}from"./chunk-2F4MHS2T.js";import{a as S,b as q}from"./chunk-3Z2AZRQC.js";import{e as u}from"./chunk-A5XXOFX2.js";function p(n,e){this.center=t.clone(E(n,t.ZERO)),this.halfAxes=d.clone(E(e,d.ZERO))}p.packedLength=t.packedLength+d.packedLength;p.pack=function(n,e,a){return q.typeOf.object("value",n),q.defined("array",e),a=E(a,0),t.pack(n.center,e,a),d.pack(n.halfAxes,e,a+t.packedLength),e};p.unpack=function(n,e,a){return q.defined("array",n),e=E(e,0),u(a)||(a=new p),t.unpack(n,e,a.center),d.unpack(n,e+t.packedLength,a.halfAxes),a};var yt=new t,At=new t,Nt=new t,Mt=new t,bt=new t,Ot=new t,St=new d,Tt={unitary:new d,diagonal:new d};p.fromPoints=function(n,e){if(u(e)||(e=new p),!u(n)||n.length===0)return e.halfAxes=d.ZERO,e.center=t.ZERO,e;let a,h=n.length,c=t.clone(n[0],yt);for(a=1;a<h;a++)t.add(c,n[a],c);let o=1/h;t.multiplyByScalar(c,o,c);let i=0,l=0,C=0,w=0,m=0,r=0,s;for(a=0;a<h;a++)s=t.subtract(n[a],c,At),i+=s.x*s.x,l+=s.x*s.y,C+=s.x*s.z,w+=s.y*s.y,m+=s.y*s.z,r+=s.z*s.z;i*=o,l*=o,C*=o,w*=o,m*=o,r*=o;let f=St;f[0]=i,f[1]=l,f[2]=C,f[3]=l,f[4]=w,f[5]=m,f[6]=C,f[7]=m,f[8]=r;let x=d.computeEigenDecomposition(f,Tt),M=d.clone(x.unitary,e.halfAxes),y=d.getColumn(M,0,Mt),A=d.getColumn(M,1,bt),N=d.getColumn(M,2,Ot),P=-Number.MAX_VALUE,b=-Number.MAX_VALUE,L=-Number.MAX_VALUE,W=Number.MAX_VALUE,T=Number.MAX_VALUE,U=Number.MAX_VALUE;for(a=0;a<h;a++)s=n[a],P=Math.max(t.dot(y,s),P),b=Math.max(t.dot(A,s),b),L=Math.max(t.dot(N,s),L),W=Math.min(t.dot(y,s),W),T=Math.min(t.dot(A,s),T),U=Math.min(t.dot(N,s),U);y=t.multiplyByScalar(y,.5*(W+P),y),A=t.multiplyByScalar(A,.5*(T+b),A),N=t.multiplyByScalar(N,.5*(U+L),N);let O=t.add(y,A,e.center);t.add(O,N,O);let R=Nt;return R.x=P-W,R.y=b-T,R.z=L-U,t.multiplyByScalar(R,.5,R),d.multiplyByScale(e.halfAxes,R,e.halfAxes),e};var at=new t,gt=new t;function G(n,e,a,h,c,o,i,l,C,w,m){if(!u(c)||!u(o)||!u(i)||!u(l)||!u(C)||!u(w))throw new S("all extents (minimum/maximum X/Y/Z) are required.");u(m)||(m=new p);let r=m.halfAxes;d.setColumn(r,0,e,r),d.setColumn(r,1,a,r),d.setColumn(r,2,h,r);let s=at;s.x=(c+o)/2,s.y=(i+l)/2,s.z=(C+w)/2;let f=gt;f.x=(o-c)/2,f.y=(l-i)/2,f.z=(w-C)/2;let x=m.center;return s=d.multiplyByVector(r,s,s),t.add(n,s,x),d.multiplyByScale(r,f,r),m}var et=new g,Rt=new t,Wt=new g,Et=new g,zt=new g,It=new g,Lt=new g,rt=new t,F=new t,ct=new t,J=new t,ot=new t,Ut=new j,qt=new j,jt=new j,Bt=new j,vt=new j,Vt=new t,_t=new t,Dt=new t,Xt=new t,kt=new j,Zt=new t,Yt=new t,Gt=new t,Ft=new I(t.UNIT_X,0);p.fromRectangle=function(n,e,a,h,c){if(!u(n))throw new S("rectangle is required");if(n.width<0||n.width>z.TWO_PI)throw new S("Rectangle width must be between 0 and 2 * pi");if(n.height<0||n.height>z.PI)throw new S("Rectangle height must be between 0 and pi");if(u(h)&&!z.equalsEpsilon(h.radii.x,h.radii.y,z.EPSILON15))throw new S("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");e=E(e,0),a=E(a,0),h=E(h,$.WGS84);let o,i,l,C,w,m,r;if(n.width<=z.PI){let T=k.center(n,et),U=h.cartographicToCartesian(T,Rt),O=new Y(U,h);r=O.plane;let R=T.longitude,ft=n.south<0&&n.north>0?0:T.latitude,dt=g.fromRadians(R,n.north,a,Wt),V=g.fromRadians(n.west,n.north,a,Et),pt=g.fromRadians(n.west,ft,a,zt),_=g.fromRadians(n.west,n.south,a,It),Ct=g.fromRadians(R,n.south,a,Lt),wt=h.cartographicToCartesian(dt,rt),D=h.cartographicToCartesian(V,F),lt=h.cartographicToCartesian(pt,ct),X=h.cartographicToCartesian(_,J),mt=h.cartographicToCartesian(Ct,ot),ut=O.projectPointToNearestOnPlane(wt,Ut),K=O.projectPointToNearestOnPlane(D,qt),Pt=O.projectPointToNearestOnPlane(lt,jt),Q=O.projectPointToNearestOnPlane(X,Bt),xt=O.projectPointToNearestOnPlane(mt,vt);return o=Math.min(K.x,Pt.x,Q.x),i=-o,C=Math.max(K.y,ut.y),l=Math.min(Q.y,xt.y),V.height=_.height=e,D=h.cartographicToCartesian(V,F),X=h.cartographicToCartesian(_,J),w=Math.min(I.getPointDistance(r,D),I.getPointDistance(r,X)),m=a,G(O.origin,O.xAxis,O.yAxis,O.zAxis,o,i,l,C,w,m,c)}let s=n.south>0,f=n.north<0,x=s?n.south:f?n.north:0,M=k.center(n,et).longitude,y=t.fromRadians(M,x,a,h,Vt);y.z=0;let N=Math.abs(y.x)<z.EPSILON10&&Math.abs(y.y)<z.EPSILON10?t.UNIT_X:t.normalize(y,_t),P=t.UNIT_Z,b=t.cross(N,P,Dt);r=I.fromPointNormal(y,N,Ft);let L=t.fromRadians(M+z.PI_OVER_TWO,x,a,h,Xt);i=t.dot(I.projectPointOntoPlane(r,L,kt),b),o=-i,C=t.fromRadians(0,n.north,f?e:a,h,Zt).z,l=t.fromRadians(0,n.south,s?e:a,h,Yt).z;let W=t.fromRadians(n.east,x,a,h,Gt);return w=I.getPointDistance(r,W),m=0,G(y,b,P,N,o,i,l,C,w,m,c)};var Jt=new t;p.fromRectangleCartesian=function(n,e,a,h,c){e=E(e,0),a=E(a,0);let o,i,l,C,w,m,r,s=tt.center(n,Jt),f=s,x=new Y(f,h,!0);r=x.plane;let M=s.x,y=s.y,A=new t(M,n.north,a),N=new t(n.west,n.north,a),P=new t(n.west,y,a),b=new t(n.west,n.south,a),L=new t(M,n.south,a),W=t.subtract(N,s,F),T=t.subtract(b,s,J),U=t.subtract(P,s,ct);o=Math.min(W.x,U.x,T.x),i=-o;let O=t.subtract(A,s,rt),R=t.subtract(L,s,ot);return C=Math.max(W.y,O.y),l=Math.min(T.y,R.y),N.height=b.height=e,w=-Math.min(I.getPointDistance(r,W),I.getPointDistance(r,T)),m=a==0?1:a,G(x.origin,x.xAxis,x.yAxis,x.zAxis,o,i,l,C,w,m,c)};p.fromTransformation=function(n,e){return q.typeOf.object("transformation",n),u(e)||(e=new p),e.center=B.getTranslation(n,e.center),e.halfAxes=B.getMatrix3(n,e.halfAxes),e.halfAxes=d.multiplyByScalar(e.halfAxes,.5,e.halfAxes),e};p.clone=function(n,e){if(u(n))return u(e)?(t.clone(n.center,e.center),d.clone(n.halfAxes,e.halfAxes),e):new p(n.center,n.halfAxes)};p.intersectPlane=function(n,e){if(!u(n))throw new S("box is required.");if(!u(e))throw new S("plane is required.");let a=n.center,h=e.normal,c=n.halfAxes,o=h.x,i=h.y,l=h.z,C=Math.abs(o*c[d.COLUMN0ROW0]+i*c[d.COLUMN0ROW1]+l*c[d.COLUMN0ROW2])+Math.abs(o*c[d.COLUMN1ROW0]+i*c[d.COLUMN1ROW1]+l*c[d.COLUMN1ROW2])+Math.abs(o*c[d.COLUMN2ROW0]+i*c[d.COLUMN2ROW1]+l*c[d.COLUMN2ROW2]),w=t.dot(h,a)+e.distance;return w<=-C?v.OUTSIDE:w>=C?v.INSIDE:v.INTERSECTING};var st=new t,it=new t,ht=new t,Kt=new t,nt=new t,Qt=new t;p.distanceSquaredTo=function(n,e){if(!u(n))throw new S("box is required.");if(!u(e))throw new S("cartesian is required.");let a=t.subtract(e,n.center,at),h=n.halfAxes,c=d.getColumn(h,0,st),o=d.getColumn(h,1,it),i=d.getColumn(h,2,ht),l=t.magnitude(c),C=t.magnitude(o),w=t.magnitude(i),m=!0,r=!0,s=!0;l>0?t.divideByScalar(c,l,c):m=!1,C>0?t.divideByScalar(o,C,o):r=!1,w>0?t.divideByScalar(i,w,i):s=!1;let f=!m+!r+!s,x,M,y;if(f===1){let b=c;x=o,M=i,r?s||(b=i,M=c):(b=o,x=c),y=t.cross(x,M,nt),b===c?c=y:b===o?o=y:b===i&&(i=y)}else if(f===2){x=c,r?x=o:s&&(x=i);let b=t.UNIT_Y;b.equalsEpsilon(x,z.EPSILON3)&&(b=t.UNIT_X),M=t.cross(x,b,Kt),t.normalize(M,M),y=t.cross(x,M,nt),t.normalize(y,y),x===c?(o=M,i=y):x===o?(i=M,c=y):x===i&&(c=M,o=y)}else f===3&&(c=t.UNIT_X,o=t.UNIT_Y,i=t.UNIT_Z);let A=Qt;A.x=t.dot(a,c),A.y=t.dot(a,o),A.z=t.dot(a,i);let N=0,P;return A.x<-l?(P=A.x+l,N+=P*P):A.x>l&&(P=A.x-l,N+=P*P),A.y<-C?(P=A.y+C,N+=P*P):A.y>C&&(P=A.y-C,N+=P*P),A.z<-w?(P=A.z+w,N+=P*P):A.z>w&&(P=A.z-w,N+=P*P),N};var $t=new t,Ht=new t;p.computePlaneDistances=function(n,e,a,h){if(!u(n))throw new S("box is required.");if(!u(e))throw new S("position is required.");if(!u(a))throw new S("direction is required.");u(h)||(h=new H);let c=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,i=n.center,l=n.halfAxes,C=d.getColumn(l,0,st),w=d.getColumn(l,1,it),m=d.getColumn(l,2,ht),r=t.add(C,w,$t);t.add(r,m,r),t.add(r,i,r);let s=t.subtract(r,e,Ht),f=t.dot(a,s);return c=Math.min(f,c),o=Math.max(f,o),t.add(i,C,r),t.add(r,w,r),t.subtract(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),t.add(i,C,r),t.subtract(r,w,r),t.add(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),t.add(i,C,r),t.subtract(r,w,r),t.subtract(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),t.subtract(i,C,r),t.add(r,w,r),t.add(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),t.subtract(i,C,r),t.add(r,w,r),t.subtract(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),t.subtract(i,C,r),t.subtract(r,w,r),t.add(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),t.subtract(i,C,r),t.subtract(r,w,r),t.subtract(r,m,r),t.subtract(r,e,s),f=t.dot(a,s),c=Math.min(f,c),o=Math.max(f,o),h.start=c,h.stop=o,h};var te=new t,ee=new t,ne=new t;p.computeCorners=function(n,e){q.typeOf.object("box",n),u(e)||(e=[new t,new t,new t,new t,new t,new t,new t,new t]);let a=n.center,h=n.halfAxes,c=d.getColumn(h,0,te),o=d.getColumn(h,1,ee),i=d.getColumn(h,2,ne);return t.clone(a,e[0]),t.subtract(e[0],c,e[0]),t.subtract(e[0],o,e[0]),t.subtract(e[0],i,e[0]),t.clone(a,e[1]),t.subtract(e[1],c,e[1]),t.subtract(e[1],o,e[1]),t.add(e[1],i,e[1]),t.clone(a,e[2]),t.subtract(e[2],c,e[2]),t.add(e[2],o,e[2]),t.subtract(e[2],i,e[2]),t.clone(a,e[3]),t.subtract(e[3],c,e[3]),t.add(e[3],o,e[3]),t.add(e[3],i,e[3]),t.clone(a,e[4]),t.add(e[4],c,e[4]),t.subtract(e[4],o,e[4]),t.subtract(e[4],i,e[4]),t.clone(a,e[5]),t.add(e[5],c,e[5]),t.subtract(e[5],o,e[5]),t.add(e[5],i,e[5]),t.clone(a,e[6]),t.add(e[6],c,e[6]),t.add(e[6],o,e[6]),t.subtract(e[6],i,e[6]),t.clone(a,e[7]),t.add(e[7],c,e[7]),t.add(e[7],o,e[7]),t.add(e[7],i,e[7]),e};var ae=new d;p.computeTransformation=function(n,e){q.typeOf.object("box",n),u(e)||(e=new B);let a=n.center,h=d.multiplyByUniformScale(n.halfAxes,2,ae);return B.fromRotationTranslation(h,a,e)};var re=new Z;p.isOccluded=function(n,e){if(!u(n))throw new S("box is required.");if(!u(e))throw new S("occluder is required.");let a=Z.fromOrientedBoundingBox(n,re);return!e.isBoundingSphereVisible(a)};p.prototype.intersectPlane=function(n){return p.intersectPlane(this,n)};p.prototype.distanceSquaredTo=function(n){return p.distanceSquaredTo(this,n)};p.prototype.computePlaneDistances=function(n,e,a){return p.computePlaneDistances(this,n,e,a)};p.prototype.computeCorners=function(n){return p.computeCorners(this,n)};p.prototype.computeTransformation=function(n){return p.computeTransformation(this,n)};p.prototype.isOccluded=function(n){return p.isOccluded(this,n)};p.equals=function(n,e){return n===e||u(n)&&u(e)&&t.equals(n.center,e.center)&&d.equals(n.halfAxes,e.halfAxes)};p.prototype.clone=function(n){return p.clone(this,n)};p.prototype.equals=function(n){return p.equals(this,n)};var Me=p;export{Me as a};
