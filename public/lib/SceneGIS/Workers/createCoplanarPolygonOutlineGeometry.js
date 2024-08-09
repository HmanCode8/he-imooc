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
define(["./arrayRemoveDuplicates-0aca867d","./Transforms-c38817cd","./Matrix3-a45402cf","./ComponentDatatype-f194b981","./CoplanarPolygonGeometryLibrary-4ec2ab87","./defaultValue-192c850d","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryInstance-6a82712b","./GeometryPipeline-be1ab56a","./IndexDatatype-1ff811be","./PolygonGeometryLibrary-34f8044c","./Math-be2c8494","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./WebGLConstants-1bcc99d3","./OrientedBoundingBox-d8d8ede3","./EllipsoidTangentPlane-b1a9b8da","./AxisAlignedBoundingBox-e6370b82","./IntersectionTests-f861e6a9","./Plane-f4b01105","./CartesianRectangle-3289fb67","./AttributeCompression-cb62dc59","./EncodedCartesian3-43036f0c","./ArcType-d7935178","./EllipsoidRhumbLine-c951aea3","./PolygonPipeline-2888ea37"],(function(e,t,n,o,r,i,a,c,l,s,y,u,p,d,m,b,f,g,h,P,G,C,L,T,E,H,A,k,x){"use strict";function _(e){const t=e.length,n=new Float64Array(3*t),r=y.IndexDatatype.createTypedArray(t,2*t);let i=0,l=0;for(let o=0;o<t;o++){const a=e[o];n[i++]=a.x,n[i++]=a.y,n[i++]=a.z,r[l++]=o,r[l++]=(o+1)%t}const s=new c.GeometryAttributes({position:new a.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new a.Geometry({attributes:s,indices:r,primitiveType:a.PrimitiveType.LINES})}function w(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(t,n.Cartesian3)+1}w.fromPositions=function(e){return new w({polygonHierarchy:{positions:(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).positions}})},w.pack=function(e,t,o){return o=i.defaultValue(o,0),t[o=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,o,n.Cartesian3)]=e.packedLength,t};const I={polygonHierarchy:{}};return w.unpack=function(e,t,o){t=i.defaultValue(t,0);const r=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,n.Cartesian3);t=r.startingIndex,delete r.startingIndex;const a=e[t];return i.defined(o)||(o=new w(I)),o._polygonHierarchy=r,o.packedLength=a,o},w.createGeometry=function(o){const i=o._polygonHierarchy;let c=i.positions;if(c=e.arrayRemoveDuplicates(c,n.Cartesian3.equalsEpsilon,!0),c.length<3)return;if(!r.CoplanarPolygonGeometryLibrary.validOutline(c))return;const y=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(i,!1);if(0===y.length)return;const p=[];for(let e=0;e<y.length;e++){const t=new l.GeometryInstance({geometry:_(y[e])});p.push(t)}const d=s.GeometryPipeline.combineInstances(p)[0],m=t.BoundingSphere.fromPoints(i.positions);return new a.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:m})},function(e,t){return i.defined(t)&&(e=w.unpack(e,t)),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),w.createGeometry(e)}}));
