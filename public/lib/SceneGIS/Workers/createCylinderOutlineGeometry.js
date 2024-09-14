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
define(["./Transforms-c38817cd","./Matrix2-bce7772b","./Matrix3-a45402cf","./ComponentDatatype-f194b981","./CylinderGeometryLibrary-8a5e156d","./defaultValue-192c850d","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryOffsetAttribute-817c59a7","./IndexDatatype-1ff811be","./Math-be2c8494","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./RuntimeError-ca280330","./WebGLConstants-1bcc99d3"],(function(t,e,i,n,o,r,a,s,u,f,c,d,l,b,m){"use strict";const p=new e.Cartesian2;function y(t){const e=(t=r.defaultValue(t,r.defaultValue.EMPTY_OBJECT)).length,i=t.topRadius,n=t.bottomRadius,o=r.defaultValue(t.slices,128),a=Math.max(r.defaultValue(t.numberOfVerticalLines,16),0);this._length=e,this._topRadius=i,this._bottomRadius=n,this._slices=o,this._numberOfVerticalLines=a,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}y.packedLength=6,y.pack=function(t,e,i){return i=r.defaultValue(i,0),e[i++]=t._length,e[i++]=t._topRadius,e[i++]=t._bottomRadius,e[i++]=t._slices,e[i++]=t._numberOfVerticalLines,e[i]=r.defaultValue(t._offsetAttribute,-1),e};const _={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return y.unpack=function(t,e,i){e=r.defaultValue(e,0);const n=t[e++],o=t[e++],a=t[e++],s=t[e++],u=t[e++],f=t[e];return r.defined(i)?(i._length=n,i._topRadius=o,i._bottomRadius=a,i._slices=s,i._numberOfVerticalLines=u,i._offsetAttribute=-1===f?void 0:f,i):(_.length=n,_.topRadius=o,_.bottomRadius=a,_.slices=s,_.numberOfVerticalLines=u,_.offsetAttribute=-1===f?void 0:f,new y(_))},y.createGeometry=function(c){let d=c._length;const l=c._topRadius,b=c._bottomRadius,m=c._slices,y=c._numberOfVerticalLines;if(d<=0||l<0||b<0||0===l&&0===b)return;const _=2*m,h=o.CylinderGeometryLibrary.computePositions(d,l,b,m,!1);let A,R=2*m;if(y>0){const t=Math.min(y,m);A=Math.round(m/t),R+=t}const G=f.IndexDatatype.createTypedArray(_,2*R);let O,V=0;for(O=0;O<m-1;O++)G[V++]=O,G[V++]=O+1,G[V++]=O+m,G[V++]=O+1+m;if(G[V++]=m-1,G[V++]=0,G[V++]=m+m-1,G[V++]=m,y>0)for(O=0;O<m;O+=A)G[V++]=O,G[V++]=O+m;const L=new s.GeometryAttributes;L.position=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h}),p.x=.5*d,p.y=Math.max(b,l);const g=new t.BoundingSphere(i.Cartesian3.ZERO,e.Cartesian2.magnitude(p));if(r.defined(c._offsetAttribute)){d=h.length;const t=c._offsetAttribute===u.GeometryOffsetAttribute.NONE?0:1,e=new Uint8Array(d/3).fill(t);L.applyOffset=new a.GeometryAttribute({componentDatatype:n.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:e})}return new a.Geometry({attributes:L,indices:G,primitiveType:a.PrimitiveType.LINES,boundingSphere:g,offsetAttribute:c._offsetAttribute})},function(t,e){return r.defined(e)&&(t=y.unpack(t,e)),y.createGeometry(t)}}));
