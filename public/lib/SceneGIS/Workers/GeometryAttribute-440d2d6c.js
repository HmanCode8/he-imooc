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
define(["exports","./Matrix2-dca1b63d","./Matrix3-fe947601","./defaultValue-192c850d","./WebGLConstants-1bcc99d3","./Transforms-38ce56dd"],(function(t,e,n,i,a,r){"use strict";var o=Object.freeze({NONE:0,TRIANGLES:1,LINES:2,POLYLINES:3});const s={POINTS:a.WebGLConstants.POINTS,LINES:a.WebGLConstants.LINES,LINE_LOOP:a.WebGLConstants.LINE_LOOP,LINE_STRIP:a.WebGLConstants.LINE_STRIP,TRIANGLES:a.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:a.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:a.WebGLConstants.TRIANGLE_FAN,isLines:function(t){return t===s.LINES||t===s.LINE_LOOP||t===s.LINE_STRIP},isTriangles:function(t){return t===s.TRIANGLES||t===s.TRIANGLE_STRIP||t===s.TRIANGLE_FAN},validate:function(t){return t===s.POINTS||t===s.LINES||t===s.LINE_LOOP||t===s.LINE_STRIP||t===s.TRIANGLES||t===s.TRIANGLE_STRIP||t===s.TRIANGLE_FAN}};var u=Object.freeze(s);function c(t){t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT),this.attributes=t.attributes,this.indices=t.indices,this.primitiveType=i.defaultValue(t.primitiveType,u.TRIANGLES),this.boundingSphere=t.boundingSphere,this.geometryType=i.defaultValue(t.geometryType,o.NONE),this.boundingSphereCV=t.boundingSphereCV,this.offsetAttribute=t.offsetAttribute}c.computeNumberOfVertices=function(t){let e=-1;for(const n in t.attributes)if(t.attributes.hasOwnProperty(n)&&i.defined(t.attributes[n])&&i.defined(t.attributes[n].values)){const i=t.attributes[n];e=i.values.length/i.componentsPerAttribute}return e};const I=new n.Cartographic,l=new n.Cartesian3,N=new e.Matrix4,T=[new n.Cartographic,new n.Cartographic,new n.Cartographic],d=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],L=[new e.Cartesian2,new e.Cartesian2,new e.Cartesian2],h=new n.Cartesian3,p=new r.Quaternion,f=new e.Matrix4,y=new e.Matrix2;c._textureCoordinateRotationPoints=function(t,a,o,s,u){let c;u=i.defaultValue(u,!1);const E=e.Rectangle.center(s,I);let x=l,m=N;if(!0===u){x.x=E.longitude,x.y=E.latitude,x.z=E.height,x.clone(l);const t={up:void 0,right:void 0,direction:void 0};t.up=new n.Cartesian3(0,0,1),t.right=new n.Cartesian3(1,0,0),t.direction=new n.Cartesian3(0,1,0);const i=new n.Matrix3(t.right.x,t.direction.x,t.up.x,t.right.y,t.direction.y,t.up.y,t.right.z,t.direction.z,t.up.z);m=e.Matrix4.fromRotationTranslation(i,x,N)}else x=n.Cartographic.toCartesian(E,o,l),m=r.Transforms.eastNorthUpToFixedFrame(x,o,N);const C=e.Matrix4.inverse(m,N),b=d,A=T;A[0].longitude=s.west,A[0].latitude=s.south,A[1].longitude=s.west,A[1].latitude=s.north,A[2].longitude=s.east,A[2].latitude=s.south;let g=h;for(c=0;c<3;c++)!0===u?(g.x=A[c].longitude,g.y=A[c].latitude,g.z=A[c].height):n.Cartographic.toCartesian(A[c],o,g),g=e.Matrix4.multiplyByPointAsVector(C,g,g),b[c].x=g.x,b[c].y=g.y;const S=r.Quaternion.fromAxisAngle(n.Cartesian3.UNIT_Z,-a,p),P=n.Matrix3.fromQuaternion(S,f),G=t.length;let R=Number.POSITIVE_INFINITY,w=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY,O=Number.NEGATIVE_INFINITY;for(c=0;c<G;c++)g=e.Matrix4.multiplyByPointAsVector(C,t[c],g),g=n.Matrix3.multiplyByVector(P,g,g),R=Math.min(R,g.x),w=Math.min(w,g.y),_=Math.max(_,g.x),O=Math.max(O,g.y);const M=e.Matrix2.fromRotation(a,y),V=L;V[0].x=R,V[0].y=w,V[1].x=R,V[1].y=O,V[2].x=_,V[2].y=w;const v=b[0],F=b[2].x-v.x,z=b[1].y-v.y;for(c=0;c<3;c++){const t=V[c];e.Matrix2.multiplyByVector(M,t,t),t.x=(t.x-v.x)/F,t.y=(t.y-v.y)/z}const W=V[0],Y=V[1],B=V[2],k=new Array(6);return e.Cartesian2.pack(W,k),e.Cartesian2.pack(Y,k,2),e.Cartesian2.pack(B,k,4),k},t.Geometry=c,t.GeometryAttribute=function(t){t=i.defaultValue(t,i.defaultValue.EMPTY_OBJECT),this.componentDatatype=t.componentDatatype,this.componentsPerAttribute=t.componentsPerAttribute,this.normalize=i.defaultValue(t.normalize,!1),this.values=t.values},t.GeometryType=o,t.PrimitiveType=u}));
