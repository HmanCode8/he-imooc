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
define(["./defaultValue-192c850d","./Transforms-c38817cd","./Matrix3-a45402cf","./ComponentDatatype-f194b981","./FrustumGeometry-fed05a13","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./Math-be2c8494","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./WebGLConstants-1bcc99d3","./Plane-f4b01105","./VertexFormat-d2271f13"],(function(e,t,r,n,a,u,i,o,c,s,p,m,f,d,h){"use strict";const l=0,g=1;function _(n){const u=n.frustum,i=n.orientation,o=n.origin,c=e.defaultValue(n._drawNearPlane,!0);let s,p;u instanceof a.PerspectiveFrustum?(s=l,p=a.PerspectiveFrustum.packedLength):u instanceof a.OrthographicFrustum&&(s=g,p=a.OrthographicFrustum.packedLength),this._frustumType=s,this._frustum=u.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(i),this._drawNearPlane=c,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}_.pack=function(n,u,i){i=e.defaultValue(i,0);const o=n._frustumType,c=n._frustum;return u[i++]=o,o===l?(a.PerspectiveFrustum.pack(c,u,i),i+=a.PerspectiveFrustum.packedLength):(a.OrthographicFrustum.pack(c,u,i),i+=a.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,u,i),i+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,u,i),u[i+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,u};const k=new a.PerspectiveFrustum,y=new a.OrthographicFrustum,F=new t.Quaternion,b=new r.Cartesian3;return _.unpack=function(n,u,i){u=e.defaultValue(u,0);const o=n[u++];let c;o===l?(c=a.PerspectiveFrustum.unpack(n,u,k),u+=a.PerspectiveFrustum.packedLength):(c=a.OrthographicFrustum.unpack(n,u,y),u+=a.OrthographicFrustum.packedLength);const s=r.Cartesian3.unpack(n,u,b);u+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,u,F),m=1===n[u+=t.Quaternion.packedLength];if(!e.defined(i))return new _({frustum:c,origin:s,orientation:p,_drawNearPlane:m});const f=o===i._frustumType?i._frustum:void 0;return i._frustum=c.clone(f),i._frustumType=o,i._origin=r.Cartesian3.clone(s,i._origin),i._orientation=t.Quaternion.clone(p,i._orientation),i._drawNearPlane=m,i},_.createGeometry=function(e){const r=e._frustumType,o=e._frustum,c=e._origin,s=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);a.FrustumGeometry._computeNearFarPlanes(c,s,r,o,m);const f=new i.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:n.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let d,h;const l=p?2:1,g=new Uint16Array(8*(l+1));let _=p?0:1;for(;_<2;++_)d=p?8*_:0,h=4*_,g[d]=h,g[d+1]=h+1,g[d+2]=h+1,g[d+3]=h+2,g[d+4]=h+2,g[d+5]=h+3,g[d+6]=h+3,g[d+7]=h;for(_=0;_<2;++_)d=8*(l+_),h=4*_,g[d]=h,g[d+1]=h+4,g[d+2]=h+1,g[d+3]=h+5,g[d+4]=h+2,g[d+5]=h+6,g[d+6]=h+3,g[d+7]=h+7;return new u.Geometry({attributes:f,indices:g,primitiveType:u.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=_.unpack(t,r)),_.createGeometry(t)}}));
