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

import{f as G,i as Y}from"./chunk-2LQUFYLF.js";import{b as T,c as V,d as w}from"./chunk-CJEZWAOI.js";import{a as E,b as p,c,e as y}from"./chunk-KXWBEOUA.js";import{a as f}from"./chunk-UMJEX7YU.js";import{a as s}from"./chunk-2F4MHS2T.js";import{a as d,b as C}from"./chunk-3Z2AZRQC.js";import{e as l}from"./chunk-A5XXOFX2.js";var Z={NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3},z=Object.freeze(Z);var o={POINTS:f.POINTS,LINES:f.LINES,LINE_LOOP:f.LINE_LOOP,LINE_STRIP:f.LINE_STRIP,TRIANGLES:f.TRIANGLES,TRIANGLE_STRIP:f.TRIANGLE_STRIP,TRIANGLE_FAN:f.TRIANGLE_FAN};o.isLines=function(t){return t===o.LINES||t===o.LINE_LOOP||t===o.LINE_STRIP};o.isTriangles=function(t){return t===o.TRIANGLES||t===o.TRIANGLE_STRIP||t===o.TRIANGLE_FAN};o.validate=function(t){return t===o.POINTS||t===o.LINES||t===o.LINE_LOOP||t===o.LINE_STRIP||t===o.TRIANGLES||t===o.TRIANGLE_STRIP||t===o.TRIANGLE_FAN};var B=Object.freeze(o);function F(t){t=s(t,s.EMPTY_OBJECT),C.typeOf.object("options.attributes",t.attributes),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=s(t.primitiveType,B.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=s(t.geometryType,z.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}F.computeNumberOfVertices=function(t){C.typeOf.object("geometry",t);let I=-1;for(let m in t.attributes)if(t.attributes.hasOwnProperty(m)&&l(t.attributes[m])&&l(t.attributes[m].values)){let i=t.attributes[m],h=i.values.length/i.componentsPerAttribute;if(I!==h&&I!==-1)throw new d("All attribute lists must have the same number of attributes.");I=h}return I};var K=new p,M=new E,O=new T,$=[new p,new p,new p],tt=[new c,new c,new c],et=[new c,new c,new c],rt=new E,nt=new G,ot=new T,it=new w;F._textureCoordinateRotationPoints=function(t,I,m,i,h){h=s(h,!1);let n,P=V.center(i,K),N=M,_=O;if(h===!0){N.x=P.longitude,N.y=P.latitude,N.z=P.height,N.clone(M);let e={up:void 0,right:void 0,direction:void 0};e.up=new E(0,0,1),e.right=new E(1,0,0),e.direction=new E(0,1,0);let H=new y(e.right.x,e.direction.x,e.up.x,e.right.y,e.direction.y,e.up.y,e.right.z,e.direction.z,e.up.z);_=T.fromRotationTranslation(H,N,O)}else N=p.toCartesian(P,m,M),_=Y.eastNorthUpToFixedFrame(N,m,O);let D=T.inverse(_,O),b=tt,u=$;u[0].longitude=i.west,u[0].latitude=i.south,u[1].longitude=i.west,u[1].latitude=i.north,u[2].longitude=i.east,u[2].latitude=i.south;let r=rt;for(n=0;n<3;n++)h===!0?(r.x=u[n].longitude,r.y=u[n].latitude,r.z=u[n].height):p.toCartesian(u[n],m,r),r=T.multiplyByPointAsVector(D,r,r),b[n].x=r.x,b[n].y=r.y;let v=G.fromAxisAngle(E.UNIT_Z,-I,nt),j=y.fromQuaternion(v,ot),k=t.length,x=Number.POSITIVE_INFINITY,S=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,g=Number.NEGATIVE_INFINITY;for(n=0;n<k;n++)r=T.multiplyByPointAsVector(D,t[n],r),r=y.multiplyByVector(j,r,r),x=Math.min(x,r.x),S=Math.min(S,r.y),R=Math.max(R,r.x),g=Math.max(g,r.y);let X=w.fromRotation(I,it),a=et;a[0].x=x,a[0].y=S,a[1].x=x,a[1].y=g,a[2].x=R,a[2].y=S;let A=b[0],q=b[2].x-A.x,J=b[1].y-A.y;for(n=0;n<3;n++){let e=a[n];w.multiplyByVector(X,e,e),e.x=(e.x-A.x)/q,e.y=(e.y-A.y)/J}let Q=a[0],U=a[1],W=a[2],L=new Array(6);return c.pack(Q,L),c.pack(U,L,2),c.pack(W,L,4),L};var Lt=F;function ut(t){if(t=s(t,s.EMPTY_OBJECT),!l(t.componentDatatype))throw new d("options.componentDatatype is required.");if(!l(t.componentsPerAttribute))throw new d("options.componentsPerAttribute is required.");if(t.componentsPerAttribute<1||t.componentsPerAttribute>4)throw new d("options.componentsPerAttribute must be between 1 and 4.");if(!l(t.values))throw new d("options.values is required.");this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=s(t.normalize,!1),this.values=t.values}var Rt=ut;export{z as a,B as b,Lt as c,Rt as d};
