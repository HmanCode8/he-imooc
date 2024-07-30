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
define(["./defaultValue-192c850d","./Matrix3-a45402cf","./arrayRemoveDuplicates-0aca867d","./BoundingRectangle-17f7fc59","./Transforms-c38817cd","./Matrix2-bce7772b","./ComponentDatatype-f194b981","./PolylineVolumeGeometryLibrary-797498c4","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./IndexDatatype-1ff811be","./Math-be2c8494","./PolygonPipeline-2888ea37","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./RuntimeError-ca280330","./WebGLConstants-1bcc99d3","./EllipsoidTangentPlane-b1a9b8da","./AxisAlignedBoundingBox-e6370b82","./IntersectionTests-f861e6a9","./Plane-f4b01105","./PolylinePipeline-1de62483","./EllipsoidGeodesic-35356ee4","./EllipsoidRhumbLine-c951aea3"],(function(e,t,n,i,o,a,l,r,s,p,c,d,u,y,f,g,h,m,E,b,_,P,k,C){"use strict";function L(n){const i=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,o=n.shapePositions;this._positions=i,this._shape=o,this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,r.CornerType.ROUNDED),this._granularity=e.defaultValue(n.granularity,d.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";let l=1+i.length*t.Cartesian3.packedLength;l+=1+o.length*a.Cartesian2.packedLength,this.packedLength=l+t.Ellipsoid.packedLength+2}L.pack=function(n,i,o){let l;o=e.defaultValue(o,0);const r=n._positions;let s=r.length;for(i[o++]=s,l=0;l<s;++l,o+=t.Cartesian3.packedLength)t.Cartesian3.pack(r[l],i,o);const p=n._shape;for(s=p.length,i[o++]=s,l=0;l<s;++l,o+=a.Cartesian2.packedLength)a.Cartesian2.pack(p[l],i,o);return t.Ellipsoid.pack(n._ellipsoid,i,o),o+=t.Ellipsoid.packedLength,i[o++]=n._cornerType,i[o]=n._granularity,i};const T=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),D={polylinePositions:void 0,shapePositions:void 0,ellipsoid:T,height:void 0,cornerType:void 0,granularity:void 0};L.unpack=function(n,i,o){let l;i=e.defaultValue(i,0);let r=n[i++];const s=new Array(r);for(l=0;l<r;++l,i+=t.Cartesian3.packedLength)s[l]=t.Cartesian3.unpack(n,i);r=n[i++];const p=new Array(r);for(l=0;l<r;++l,i+=a.Cartesian2.packedLength)p[l]=a.Cartesian2.unpack(n,i);const c=t.Ellipsoid.unpack(n,i,T);i+=t.Ellipsoid.packedLength;const d=n[i++],u=n[i];return e.defined(o)?(o._positions=s,o._shape=p,o._ellipsoid=t.Ellipsoid.clone(c,o._ellipsoid),o._cornerType=d,o._granularity=u,o):(D.polylinePositions=s,D.shapePositions=p,D.cornerType=d,D.granularity=u,new L(D))};const G=new i.BoundingRectangle;return L.createGeometry=function(e){const a=e._positions,d=n.arrayRemoveDuplicates(a,t.Cartesian3.equalsEpsilon);let y=e._shape;if(y=r.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(y),d.length<2||y.length<3)return;u.PolygonPipeline.computeWindingOrder2D(y)===u.WindingOrder.CLOCKWISE&&y.reverse();const f=i.BoundingRectangle.fromPoints(y,G);return function(e,t){const n=new p.GeometryAttributes;n.position=new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});const i=t.length,a=n.position.values.length/3,r=e.length/3/i,d=c.IndexDatatype.createTypedArray(a,2*i*(r+1));let u,y,f=0;u=0;let g=u*i;for(y=0;y<i-1;y++)d[f++]=y+g,d[f++]=y+g+1;for(d[f++]=i-1+g,d[f++]=g,u=r-1,g=u*i,y=0;y<i-1;y++)d[f++]=y+g,d[f++]=y+g+1;for(d[f++]=i-1+g,d[f++]=g,u=0;u<r-1;u++){const e=i*u,t=e+i;for(y=0;y<i;y++)d[f++]=y+e,d[f++]=y+t}return new s.Geometry({attributes:n,indices:c.IndexDatatype.createTypedArray(a,d),boundingSphere:o.BoundingSphere.fromVertices(e),primitiveType:s.PrimitiveType.LINES})}(r.PolylineVolumeGeometryLibrary.computePositions(d,y,f,e,!1),y)},function(n,i){return e.defined(i)&&(n=L.unpack(n,i)),n._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),L.createGeometry(n)}}));
