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

import{a as ot}from"./chunk-R4FMX4NW.js";import{a as gt}from"./chunk-5HAE43EB.js";import{a as Mt}from"./chunk-HDBKAQGT.js";import{a as nt}from"./chunk-H3IXAINZ.js";import{a as U}from"./chunk-SCJI2CER.js";import{a as ct}from"./chunk-Y3QWB4WF.js";import{a as xt}from"./chunk-KJJSAVM5.js";import{b as ft,c as at,d as O}from"./chunk-WM4N54NK.js";import{a as At,d as rt,f as st}from"./chunk-JJFA6IXC.js";import{c as yt}from"./chunk-CJEZWAOI.js";import{a as F}from"./chunk-PF7ABWYW.js";import{a as s,b as bt,c as $,d as H,e as D}from"./chunk-KXWBEOUA.js";import{a as v}from"./chunk-4BEFMW7D.js";import{a as b}from"./chunk-2F4MHS2T.js";import{a as it,b as q}from"./chunk-3Z2AZRQC.js";import{e as C}from"./chunk-A5XXOFX2.js";var G=new s,wt=new s,ut=new s,Nt=new s,T=new $,Tt=new D,Dt=new D,_t=new st,Et=new s,Pt=new s,Vt=new s,lt=new bt,pt=new s,St=new $,Ft=new $;function Ot(t,e,n){let o=e.vertexFormat,a=e.center,i=e.semiMajorAxis,r=e.semiMinorAxis,l=e.ellipsoid,A=e.stRotation,w=n?t.length/3*2:t.length/3,y=e.shadowVolume,d=e.planeView,u=o.st?new Float32Array(w*2):void 0,c=o.normal?new Float32Array(w*3):void 0,p=o.tangent?new Float32Array(w*3):void 0,x=o.bitangent?new Float32Array(w*3):void 0,P=y?new Float32Array(w*3):void 0,I=0,g=Et,E=Pt,h=Vt,M=new At(l),R;C(d)&&d===!0?R=a.clone(pt):R=M.project(l.cartesianToCartographic(a,lt),pt);let J=new s;d===!0?(a.clone(G),J=new s(0,0,1)):(J=l.scaleToGeodeticSurface(a,G),l.geodeticSurfaceNormal(J,J));let X=Tt,B=Dt;if(A!==0){let m=st.fromAxisAngle(J,A,_t);X=D.fromQuaternion(m,X),m=st.fromAxisAngle(J,-A,_t),B=D.fromQuaternion(m,B)}else X=D.clone(D.IDENTITY,X),B=D.clone(D.IDENTITY,B);let W=$.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,St),Z=$.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Ft),L=t.length,N=n?L:0,_=N/3*2;for(let m=0;m<L;m+=3){let f=m+1,V=m+2,k=s.fromArray(t,m,G);if(o.st){let S=D.multiplyByVector(X,k,wt),j;C(d)&&d===!0?(S.clone(lt),j=S.clone(ut)):j=M.project(l.cartesianToCartographic(S,lt),ut),s.subtract(j,R,j),T.x=(j.x+i)/(2*i),T.y=(j.y+r)/(2*r),W.x=Math.min(T.x,W.x),W.y=Math.min(T.y,W.y),Z.x=Math.max(T.x,Z.x),Z.y=Math.max(T.y,Z.y),n&&(u[I+_]=T.x,u[I+1+_]=T.y),u[I++]=T.x,u[I++]=T.y}(o.normal||o.tangent||o.bitangent||y)&&(d===!0?g=new s(0,0,1):g=l.geodeticSurfaceNormal(k,g),y&&(P[m+N]=-g.x,P[f+N]=-g.y,P[V+N]=-g.z),(o.normal||o.tangent||o.bitangent)&&((o.tangent||o.bitangent)&&(E=s.normalize(s.cross(s.UNIT_Z,g,E),E),D.multiplyByVector(B,E,E)),o.normal&&(c[m]=g.x,c[f]=g.y,c[V]=g.z,n&&(c[m+N]=-g.x,c[f+N]=-g.y,c[V+N]=-g.z)),o.tangent&&(p[m]=E.x,p[f]=E.y,p[V]=E.z,n&&(p[m+N]=-E.x,p[f+N]=-E.y,p[V+N]=-E.z)),o.bitangent&&(h=s.normalize(s.cross(g,E,h),h),x[m]=h.x,x[f]=h.y,x[V]=h.z,n&&(x[m+N]=h.x,x[f+N]=h.y,x[V+N]=h.z))))}if(o.st){L=u.length;for(let m=0;m<L;m+=2)u[m]=(u[m]-W.x)/(Z.x-W.x),u[m+1]=(u[m+1]-W.y)/(Z.y-W.y)}let z=new xt;if(o.position){let m=ot.raisePositionsToHeight(t,e,n,d);z.position=new O({componentDatatype:F.DOUBLE,componentsPerAttribute:3,values:m})}if(o.st&&(z.st=new O({componentDatatype:F.FLOAT,componentsPerAttribute:2,values:u})),o.normal&&(z.normal=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:c})),o.tangent&&(z.tangent=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:p})),o.bitangent&&(z.bitangent=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:x})),y&&(z.extrudeDirection=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:P})),n&&C(e.offsetAttribute)){let m=new Uint8Array(w);if(e.offsetAttribute===nt.TOP)m=m.fill(1,0,w/2);else{let f=e.offsetAttribute===nt.NONE?0:1;m=m.fill(f)}z.applyOffset=new O({componentDatatype:F.UNSIGNED_BYTE,componentsPerAttribute:1,values:m})}return z}function jt(t){let e=new Array(12*(t*(t+1))-6),n=0,o,a,i,r,l;for(o=0,i=1,r=0;r<3;r++)e[n++]=i++,e[n++]=o,e[n++]=i;for(r=2;r<t+1;++r){for(i=r*(r+1)-1,o=(r-1)*r-1,e[n++]=i++,e[n++]=o,e[n++]=i,a=2*r,l=0;l<a-1;++l)e[n++]=i,e[n++]=o++,e[n++]=o,e[n++]=i++,e[n++]=o,e[n++]=i;e[n++]=i++,e[n++]=o,e[n++]=i}for(a=t*2,++i,++o,r=0;r<a-1;++r)e[n++]=i,e[n++]=o++,e[n++]=o,e[n++]=i++,e[n++]=o,e[n++]=i;for(e[n++]=i,e[n++]=o++,e[n++]=o,e[n++]=i++,e[n++]=o++,e[n++]=o,++o,r=t-1;r>1;--r){for(e[n++]=o++,e[n++]=o,e[n++]=i,a=2*r,l=0;l<a-1;++l)e[n++]=i,e[n++]=o++,e[n++]=o,e[n++]=i++,e[n++]=o,e[n++]=i;e[n++]=o++,e[n++]=o++,e[n++]=i++}for(r=0;r<3;r++)e[n++]=o++,e[n++]=o,e[n++]=i;return e}var tt=new s;function vt(t){let e=t.center;tt=s.multiplyByScalar(t.ellipsoid.geodeticSurfaceNormal(e,tt),t.height,tt),tt=s.add(e,tt,tt);let n=new rt(tt,t.semiMajorAxis),o=ot.computeEllipsePositions(t,!0,!1),a=o.positions,i=o.numPts,r=Ot(a,t,!1),l=jt(i);return l=ct.createTypedArray(a.length/3,l),{boundingSphere:n,attributes:r,indices:l}}function Bt(t,e){let n=e.vertexFormat,o=e.center,a=e.semiMajorAxis,i=e.semiMinorAxis,r=e.ellipsoid,l=e.height,A=e.extrudedHeight,w=e.stRotation,y=t.length/3*2,d=e.planeView,u=new Float64Array(y*3),c=n.st?new Float32Array(y*2):void 0,p=n.normal?new Float32Array(y*3):void 0,x=n.tangent?new Float32Array(y*3):void 0,P=n.bitangent?new Float32Array(y*3):void 0,I=e.shadowVolume,g=I?new Float32Array(y*3):void 0,E=0,h=Et,M=Pt,R=Vt,J=new At(r),X;C(d)&&d===!0?X=o.clone(pt):X=J.project(r.cartesianToCartographic(o,lt,d),pt);let B=new s;d===!0?B=new s(0,0,1):(B=r.scaleToGeodeticSurface(o,G),r.geodeticSurfaceNormal(B,B));let W=st.fromAxisAngle(B,w,_t),Z=D.fromQuaternion(W,Tt),L=$.fromElements(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,St),N=$.fromElements(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Ft),_=t.length,z=_/3*2;for(let f=0;f<_;f+=3){let V=f+1,k=f+2,S=s.fromArray(t,f,G),j;if(n.st){let et=D.multiplyByVector(Z,S,wt),K;C(d)&&d===!0?K=et.clone(ut):K=J.project(r.cartesianToCartographic(et,lt,d),ut),s.subtract(K,X,K),T.x=(K.x+a)/(2*a),T.y=(K.y+i)/(2*i),L.x=Math.min(T.x,L.x),L.y=Math.min(T.y,L.y),N.x=Math.max(T.x,N.x),N.y=Math.max(T.y,N.y),c[E+z]=T.x,c[E+1+z]=T.y,c[E++]=T.x,c[E++]=T.y}(!C(d)||d===!1)&&(S=r.scaleToGeodeticSurface(S,S)),j=s.clone(S,wt),!C(d)||d===!1?h=r.geodeticSurfaceNormal(S,h):h=new s(0,0,1),I&&(g[f+_]=-h.x,g[V+_]=-h.y,g[k+_]=-h.z);let mt=s.multiplyByScalar(h,l,Nt);if(S=s.add(S,mt,S),mt=s.multiplyByScalar(h,A,mt),j=s.add(j,mt,j),n.position&&(u[f+_]=j.x,u[V+_]=j.y,u[k+_]=j.z,u[f]=S.x,u[V]=S.y,u[k]=S.z),n.normal||n.tangent||n.bitangent){R=s.clone(h,R);let et=s.fromArray(t,(f+3)%_,Nt);s.subtract(et,S,et);let K=s.subtract(j,S,ut);h=s.normalize(s.cross(K,et,h),h),n.normal&&(p[f]=h.x,p[V]=h.y,p[k]=h.z,p[f+_]=h.x,p[V+_]=h.y,p[k+_]=h.z),n.tangent&&(M=s.normalize(s.cross(R,h,M),M),x[f]=M.x,x[V]=M.y,x[k]=M.z,x[f+_]=M.x,x[f+1+_]=M.y,x[f+2+_]=M.z),n.bitangent&&(P[f]=R.x,P[V]=R.y,P[k]=R.z,P[f+_]=R.x,P[V+_]=R.y,P[k+_]=R.z)}}if(n.st){_=c.length;for(let f=0;f<_;f+=2)c[f]=(c[f]-L.x)/(N.x-L.x),c[f+1]=(c[f+1]-L.y)/(N.y-L.y)}let m=new xt;if(n.position&&(m.position=new O({componentDatatype:F.DOUBLE,componentsPerAttribute:3,values:u})),n.st&&(m.st=new O({componentDatatype:F.FLOAT,componentsPerAttribute:2,values:c})),n.normal&&(m.normal=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:p})),n.tangent&&(m.tangent=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:x})),n.bitangent&&(m.bitangent=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:P})),I&&(m.extrudeDirection=new O({componentDatatype:F.FLOAT,componentsPerAttribute:3,values:g})),C(e.offsetAttribute)){let f=new Uint8Array(y);if(e.offsetAttribute===nt.TOP)f=f.fill(1,0,y/2);else{let V=e.offsetAttribute===nt.NONE?0:1;f=f.fill(V)}m.applyOffset=new O({componentDatatype:F.UNSIGNED_BYTE,componentsPerAttribute:1,values:f})}return m}function zt(t){let e=t.length/3,n=ct.createTypedArray(e,e*6),o=0;for(let a=0;a<e;a++){let i=a,r=a+e,l=(i+1)%e,A=l+e;n[o++]=i,n[o++]=r,n[o++]=l,n[o++]=l,n[o++]=r,n[o++]=A}return n}var ht=new rt,dt=new rt;function kt(t){let e=t.center,n=t.ellipsoid,o=t.semiMajorAxis,a=t.planeView,i;a!==!0?i=s.multiplyByScalar(n.geodeticSurfaceNormal(e,G),t.height,G):i=s.multiplyByScalar(new s(0,0,1),t.height,G),ht.center=s.add(e,i,ht.center),ht.radius=o,a!==!0?i=s.multiplyByScalar(n.geodeticSurfaceNormal(e,i),t.extrudedHeight,i):i=s.multiplyByScalar(new s(0,0,1),t.extrudedHeight,i),dt.center=s.add(e,i,dt.center),dt.radius=o;let r=ot.computeEllipsePositions(t,!0,!0),l=r.positions,A=r.numPts,w=r.outerPositions,y=rt.union(ht,dt),d=Ot(l,t,!0),u=jt(A),c=u.length;u.length=c*2;let p=l.length/3;for(let M=0;M<c;M+=3)u[M+c]=u[M+2]+p,u[M+1+c]=u[M+1]+p,u[M+2+c]=u[M]+p;let x=ct.createTypedArray(p*2/3,u),P=new at({attributes:d,indices:x,primitiveType:ft.TRIANGLES}),I=Bt(w,t);u=zt(w);let g=ct.createTypedArray(w.length*2/3,u),E=new at({attributes:I,indices:g,primitiveType:ft.TRIANGLES}),h=Mt.combineInstances([new gt({geometry:P}),new gt({geometry:E})]);return{boundingSphere:y,attributes:h[0].attributes,indices:h[0].indices}}function Ct(t,e,n,o,a,i,r,l){let w=ot.computeEllipsePositions({center:t,semiMajorAxis:e,semiMinorAxis:n,rotation:o,granularity:a,planeView:l},!1,!0).outerPositions,y=w.length/3,d=new Array(y);for(let c=0;c<y;++c)d[c]=s.fromArray(w,c*3);if(C(l)&&l===!0){let c={west:0,east:0,south:0,north:0,width:0,height:0},p=Number.MAX_VALUE,x=Number.MIN_VALUE,P=Number.MAX_VALUE,I=Number.MIN_VALUE;return d.forEach(g=>{p=Math.min(p,g.x),x=Math.max(x,g.x),P=Math.min(P,g.y),I=Math.max(I,g.y)}),c.west=p,c.south=P,c.east=x,c.north=I,c.width=c.east-c.west,c.height=c.north-c.south,c._planeView=!0,c}let u=yt.fromCartesianArray(d,i,r);return u.width>v.PI&&(u.north=u.north>0?v.PI_OVER_TWO-v.EPSILON7:u.north,u.south=u.south<0?v.EPSILON7-v.PI_OVER_TWO:u.south,u.east=v.PI,u.west=-v.PI),u}function Q(t){t=b(t,b.EMPTY_OBJECT);let e=t.center,n=b(t.ellipsoid,H.WGS84),o=t.semiMajorAxis,a=t.semiMinorAxis,i=b(t.granularity,v.RADIANS_PER_DEGREE),r=b(t.planeView,!1),l=b(t.vertexFormat,U.DEFAULT);if(q.defined("options.center",e),q.typeOf.number("options.semiMajorAxis",o),q.typeOf.number("options.semiMinorAxis",a),o<a)throw new it("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(i<=0)throw new it("granularity must be greater than zero.");let A=b(t.height,0),w=b(t.extrudedHeight,A);this._center=s.clone(e),this._semiMajorAxis=o,this._semiMinorAxis=a,this._ellipsoid=H.clone(n),this._rotation=b(t.rotation,0),this._stRotation=b(t.stRotation,0),this._height=Math.max(w,A),this._granularity=i,this._vertexFormat=U.clone(l),this._extrudedHeight=Math.min(w,A),this._shadowVolume=b(t.shadowVolume,!1),this._workerName="createEllipseGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._planeView=r,this._totalPositions=void 0}Q.packedLength=s.packedLength+H.packedLength+U.packedLength+9;Q.pack=function(t,e,n){return q.defined("value",t),q.defined("array",e),n=b(n,0),s.pack(t._center,e,n),n+=s.packedLength,H.pack(t._ellipsoid,e,n),n+=H.packedLength,U.pack(t._vertexFormat,e,n),n+=U.packedLength,e[n++]=t._semiMajorAxis,e[n++]=t._semiMinorAxis,e[n++]=t._rotation,e[n++]=t._stRotation,e[n++]=t._height,e[n++]=t._granularity,e[n++]=t._extrudedHeight,e[n++]=t._shadowVolume?1:0,e[n]=b(t._offsetAttribute,-1),e};var It=new s,Rt=new H,Lt=new U,Y={center:It,ellipsoid:Rt,vertexFormat:Lt,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,stRotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};Q.unpack=function(t,e,n,o){q.defined("array",t),e=b(e,0);let a=s.unpack(t,e,It);e+=s.packedLength;let i=H.unpack(t,e,Rt);e+=H.packedLength;let r=U.unpack(t,e,Lt);e+=U.packedLength;let l=t[e++],A=t[e++],w=t[e++],y=t[e++],d=t[e++],u=t[e++],c=t[e++],p=t[e++]===1,x=t[e];return C(n)?(n._center=s.clone(a,n._center),n._ellipsoid=H.clone(i,n._ellipsoid),n._vertexFormat=U.clone(r,n._vertexFormat),n._semiMajorAxis=l,n._semiMinorAxis=A,n._rotation=w,n._stRotation=y,n._height=d,n._granularity=u,n._extrudedHeight=c,n._shadowVolume=p,n._offsetAttribute=x===-1?void 0:x,n._planeView=b(o,!1),n):(Y.height=d,Y.extrudedHeight=c,Y.granularity=u,Y.stRotation=y,Y.rotation=w,Y.semiMajorAxis=l,Y.semiMinorAxis=A,Y.shadowVolume=p,Y.offsetAttribute=x===-1?void 0:x,Y.planeView=b(o,!1),new Q(Y))};Q.computeRectangle=function(t,e){t=b(t,b.EMPTY_OBJECT);let n=t.center,o=b(t.ellipsoid,H.WGS84),a=t.semiMajorAxis,i=t.semiMinorAxis,r=b(t.granularity,v.RADIANS_PER_DEGREE),l=b(t.rotation,0),A=b(t.planeView,!1);if(q.defined("options.center",n),q.typeOf.number("options.semiMajorAxis",a),q.typeOf.number("options.semiMinorAxis",i),a<i)throw new it("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(r<=0)throw new it("granularity must be greater than zero.");return Ct(n,a,i,l,r,o,e,A)};Q.createGeometry=function(t){if(t._semiMajorAxis<=0||t._semiMinorAxis<=0)return;let e=t._planeView,n=t._height,o=t._extrudedHeight,a=!v.equalsEpsilon(n,o,0,v.EPSILON2);(!C(e)||e!==!0)&&(t._center=t._ellipsoid.scaleToGeodeticSurface(t._center,t._center));let i={center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:t._ellipsoid,rotation:t._rotation,height:n,granularity:t._granularity,vertexFormat:t._vertexFormat,stRotation:t._stRotation,planeView:e},r;if(a)i.extrudedHeight=o,i.shadowVolume=t._shadowVolume,i.offsetAttribute=t._offsetAttribute,r=kt(i);else if(r=vt(i),t._totalPositions=r.attributes.position.values.slice(),C(t._offsetAttribute)){let l=r.attributes.position.values.length,A=t._offsetAttribute===nt.NONE?0:1,w=new Uint8Array(l/3).fill(A);r.attributes.applyOffset=new O({componentDatatype:F.UNSIGNED_BYTE,componentsPerAttribute:1,values:w})}return new at({attributes:r.attributes,indices:r.indices,primitiveType:ft.TRIANGLES,boundingSphere:r.boundingSphere,offsetAttribute:t._offsetAttribute})};Q.createShadowVolume=function(t,e,n,o){let a=t._granularity,i=t._ellipsoid,r=e(a,i),l=n(a,i);return new Q({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,ellipsoid:i,rotation:t._rotation,stRotation:t._stRotation,granularity:a,extrudedHeight:r,height:l,vertexFormat:U.POSITION_ONLY,shadowVolume:!0,planeView:o})};function Ht(t){let e=-t._stRotation;if(e===0)return[0,0,0,1,1,0];let o=ot.computeEllipsePositions({center:t._center,semiMajorAxis:t._semiMajorAxis,semiMinorAxis:t._semiMinorAxis,rotation:t._rotation,granularity:t._granularity,planeView:t._planeView},!1,!0).outerPositions,a=o.length/3,i=new Array(a);for(let A=0;A<a;++A)i[A]=s.fromArray(o,A*3);let r=t._ellipsoid,l=t.rectangle;return at._textureCoordinateRotationPoints(i,e,r,l,t._planeView)}Object.defineProperties(Q.prototype,{rectangle:{get:function(){return C(this._rectangle)||(this._rectangle=Ct(this._center,this._semiMajorAxis,this._semiMinorAxis,this._rotation,this._granularity,this._ellipsoid,void 0,this._planeView)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return C(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=Ht(this)),this._textureCoordinateRotationPoints}}});var de=Q;export{de as a};
