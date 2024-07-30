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
define(["./defaultValue-192c850d","./Matrix3-a45402cf","./ArcType-d7935178","./BoundingRectangle-17f7fc59","./Transforms-c38817cd","./Matrix2-bce7772b","./ComponentDatatype-f194b981","./EllipsoidGeodesic-35356ee4","./EllipsoidTangentPlane-b1a9b8da","./GeometryAttribute-add8522c","./GeometryInstance-6a82712b","./GeometryOffsetAttribute-817c59a7","./GeometryPipeline-be1ab56a","./IndexDatatype-1ff811be","./Math-be2c8494","./PolygonGeometryLibrary-34f8044c","./PolygonPipeline-2888ea37","./VertexFormat-d2271f13","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./RuntimeError-ca280330","./WebGLConstants-1bcc99d3","./AxisAlignedBoundingBox-e6370b82","./IntersectionTests-f861e6a9","./Plane-f4b01105","./AttributeCompression-cb62dc59","./EncodedCartesian3-43036f0c","./arrayRemoveDuplicates-0aca867d","./EllipsoidRhumbLine-c951aea3","./GeometryAttributes-fcaeebba"],(function(e,t,o,i,n,a,r,s,l,u,c,p,d,y,g,m,h,f,b,_,C,P,x,w,T,I,A,v,E,V){"use strict";const G=new t.Cartographic,O=new t.Cartographic;function L(t,o,i,n,a){if(!0===(a=e.defaultValue(a,!1))){const e=G,n=O;e.longitude=t.x,e.latitude=t.y,e.height=t.z;const a=e.height;n.longitude=o.x,n.latitude=o.y,n.height=a,o.z=n.height;const r=O;r.longitude=i.x,r.latitude=i.y,r.height=a-100,i.z=r.height}else{const e=n.cartesianToCartographic(t,G).height,a=n.cartesianToCartographic(o,O);a.height=e,n.cartographicToCartesian(a,o);const r=n.cartesianToCartographic(i,O);r.height=e-100,n.cartographicToCartesian(r,i)}}const H=new i.BoundingRectangle,D=new t.Cartesian3,N=new t.Cartesian3,F=new t.Cartesian3,R=new t.Cartesian3,M=new t.Cartesian3,S=new t.Cartesian3;let B=new t.Cartesian3,k=new t.Cartesian3,z=new t.Cartesian3;const W=new a.Cartesian2,Y=new a.Cartesian2,U=new t.Cartesian3,j=new n.Quaternion,Q=new t.Matrix3,q=new t.Matrix3;function K(o){const i=o.vertexFormat,s=o.geometry,l=o.shadowVolume,c=s.attributes.position.values,d=e.defined(s.attributes.st)?s.attributes.st.values:void 0,y=!!e.defined(o.planeView)&&o.planeView;let m=c.length;const h=o.wall,f=o.top||h,b=o.bottom||h;if(i.st||i.normal||i.tangent||i.bitangent||l){const p=o.boundingRectangle,_=o.tangentPlane,C=o.ellipsoid,P=o.stRotation,x=o.perPositionHeight,w=W;w.x=p.x,w.y=p.y;const T=i.st?new Float32Array(m/3*2):void 0;let I;i.normal&&(I=x&&f&&!h?s.attributes.normal.values:new Float32Array(m));const A=i.tangent?new Float32Array(m):void 0,v=i.bitangent?new Float32Array(m):void 0,E=l?new Float32Array(m):void 0;let V=0,G=0,O=N,H=F,K=R,Z=!0,J=Q,X=q;if(0!==P){let e=n.Quaternion.fromAxisAngle(_._plane.normal,P,j);J=t.Matrix3.fromQuaternion(e,J),e=n.Quaternion.fromAxisAngle(_._plane.normal,-P,j),X=t.Matrix3.fromQuaternion(e,X)}else J=t.Matrix3.clone(t.Matrix3.IDENTITY,J),X=t.Matrix3.clone(t.Matrix3.IDENTITY,X);let $=0,ee=0;f&&b&&($=m/2,ee=m/3,m/=2);for(let n=0;n<m;n+=3){const r=t.Cartesian3.fromArray(c,n,U);if(i.st&&!e.defined(d)){let e=t.Matrix3.multiplyByVector(J,r,D),o=new a.Cartesian2;!1===y?(e=C.scaleToGeodeticSurface(e,e),o=_.projectPointOntoPlane(e,Y)):o=a.Cartesian2.fromCartesian3(e,o),a.Cartesian2.subtract(o,w,o);const i=g.CesiumMath.clamp(o.x/p.width,0,1),n=g.CesiumMath.clamp(o.y/p.height,0,1);b&&(T[V+ee]=i,T[V+1+ee]=n),f&&(T[V]=i,T[V+1]=n),V+=2}if(i.normal||i.tangent||i.bitangent||l){const e=G+1,a=G+2;if(h){if(n+3<m){const e=t.Cartesian3.fromArray(c,n+3,M);if(Z){const o=t.Cartesian3.fromArray(c,n+m,S);x&&L(r,e,o,C,y),t.Cartesian3.subtract(e,r,e),t.Cartesian3.subtract(o,r,o),O=t.Cartesian3.normalize(t.Cartesian3.cross(o,e,O),O),Z=!1}t.Cartesian3.equalsEpsilon(e,r,g.CesiumMath.EPSILON10)&&(Z=!0)}(i.tangent||i.bitangent)&&(K=!0===y?new t.Cartesian3(0,0,1):C.geodeticSurfaceNormal(r,K),i.tangent&&(H=t.Cartesian3.normalize(t.Cartesian3.cross(K,O,H),H)))}else O=!0===y?new t.Cartesian3(0,0,1):C.geodeticSurfaceNormal(r,O),(i.tangent||i.bitangent)&&(x&&(B=t.Cartesian3.fromArray(I,G,B),k=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,B,k),k=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(X,k,k),k),i.bitangent&&(z=t.Cartesian3.normalize(t.Cartesian3.cross(B,k,z),z))),H=t.Cartesian3.cross(t.Cartesian3.UNIT_Z,O,H),H=t.Cartesian3.normalize(t.Matrix3.multiplyByVector(X,H,H),H),i.bitangent&&(K=t.Cartesian3.normalize(t.Cartesian3.cross(O,H,K),K)));i.normal&&(o.wall?(I[G+$]=O.x,I[e+$]=O.y,I[a+$]=O.z):b&&(I[G+$]=-O.x,I[e+$]=-O.y,I[a+$]=-O.z),(f&&!x||h)&&(I[G]=O.x,I[e]=O.y,I[a]=O.z)),l&&(h&&(O=!0===y?new t.Cartesian3(0,0,1):C.geodeticSurfaceNormal(r,O)),E[G+$]=-O.x,E[e+$]=-O.y,E[a+$]=-O.z),i.tangent&&(o.wall?(A[G+$]=H.x,A[e+$]=H.y,A[a+$]=H.z):b&&(A[G+$]=-H.x,A[e+$]=-H.y,A[a+$]=-H.z),f&&(x?(A[G]=k.x,A[e]=k.y,A[a]=k.z):(A[G]=H.x,A[e]=H.y,A[a]=H.z))),i.bitangent&&(b&&(v[G+$]=K.x,v[e+$]=K.y,v[a+$]=K.z),f&&(x?(v[G]=z.x,v[e]=z.y,v[a]=z.z):(v[G]=K.x,v[e]=K.y,v[a]=K.z))),G+=3}}i.st&&!e.defined(d)&&(s.attributes.st=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:T})),i.normal&&(s.attributes.normal=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:I})),i.tangent&&(s.attributes.tangent=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A})),i.bitangent&&(s.attributes.bitangent=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),l&&(s.attributes.extrudeDirection=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E}))}if(o.extrude&&e.defined(o.offsetAttribute)){const e=c.length/3;let t=new Uint8Array(e);if(o.offsetAttribute===p.GeometryOffsetAttribute.TOP)f&&b||h?t=t.fill(1,0,e/2):f&&(t=t.fill(1));else{const e=o.offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1;t=t.fill(e)}s.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}return s}const Z=new t.Cartographic,J=new t.Cartographic,X={westOverIDL:0,eastOverIDL:0};let $=new s.EllipsoidGeodesic;function ee(t,i,n,r,l){if(l=e.defaultValue(l,new a.Rectangle),!e.defined(t)||t.length<3)return l.west=0,l.north=0,l.south=0,l.east=0,l;if(n===o.ArcType.RHUMB)return a.Rectangle.fromCartesianArray(t,i,l);$.ellipsoid.equals(i)||($=new s.EllipsoidGeodesic(void 0,void 0,i)),l.west=Number.POSITIVE_INFINITY,l.east=Number.NEGATIVE_INFINITY,l.south=Number.POSITIVE_INFINITY,l.north=Number.NEGATIVE_INFINITY,X.westOverIDL=Number.POSITIVE_INFINITY,X.eastOverIDL=Number.NEGATIVE_INFINITY;const u=1/g.CesiumMath.chordLength(r,i.maximumRadius),c=t.length;let p,d=i.cartesianToCartographic(t[0],J),y=Z;for(let e=1;e<c;e++)p=y,y=d,d=i.cartesianToCartographic(t[e],p),$.setEndPoints(y,d),oe($,u,l,X);return p=y,y=d,d=i.cartesianToCartographic(t[0],p),$.setEndPoints(y,d),oe($,u,l,X),l.east-l.west>X.eastOverIDL-X.westOverIDL&&(l.west=X.westOverIDL,l.east=X.eastOverIDL,l.east>g.CesiumMath.PI&&(l.east=l.east-g.CesiumMath.TWO_PI),l.west>g.CesiumMath.PI&&(l.west=l.west-g.CesiumMath.TWO_PI)),l}const te=new t.Cartographic;function oe(e,t,o,i){const n=e.surfaceDistance,a=Math.ceil(n*t),r=a>0?n/(a-1):Number.POSITIVE_INFINITY;let s=0;for(let t=0;t<a;t++){const t=e.interpolateUsingSurfaceDistance(s,te);s+=r;const n=t.longitude,a=t.latitude;o.west=Math.min(o.west,n),o.east=Math.max(o.east,n),o.south=Math.min(o.south,a),o.north=Math.max(o.north,a);const l=n>=0?n:n+g.CesiumMath.TWO_PI;i.westOverIDL=Math.min(i.westOverIDL,l),i.eastOverIDL=Math.max(i.eastOverIDL,l)}}const ie=[];function ne(t,o,i,n,r,s,u,p,d,g,f){const b={walls:[]};let _;if(u||p){const a=m.PolygonGeometryLibrary.createGeometryFromPositions(t,o,i,n,s,d,g),r=a.attributes.position.values,l=a.indices;let h,f;if(u&&p){const t=r.concat(r);h=t.length/3,f=y.IndexDatatype.createTypedArray(h,2*l.length),f.set(l);const o=l.length,n=h/2;for(_=0;_<o;_+=3){const e=f[_]+n,t=f[_+1]+n,i=f[_+2]+n;f[_+o]=i,f[_+1+o]=t,f[_+2+o]=e}if(a.attributes.position.values=t,s&&d.normal){const e=a.attributes.normal.values;a.attributes.normal.values=new Float32Array(t.length),a.attributes.normal.values.set(e)}if(d.st&&e.defined(i)){const e=a.attributes.st.values;a.attributes.st.values=new Float32Array(2*h),a.attributes.st.values=e.concat(e)}a.indices=f}else if(p){for(h=r.length/3,f=y.IndexDatatype.createTypedArray(h,l.length),_=0;_<l.length;_+=3)f[_]=l[_+2],f[_+1]=l[_+1],f[_+2]=l[_];a.indices=f}b.topAndBottom=new c.GeometryInstance({geometry:a})}let C=r.outerRing,P=l.EllipsoidTangentPlane.fromPoints(C,t,f),x=[];if(!0===f)for(const e of C){const t=a.Cartesian2.fromCartesian3(e);x.push(t)}else x=P.projectPointsOntoPlane(C,ie);let w=h.PolygonPipeline.computeWindingOrder2D(x);w===h.WindingOrder.CLOCKWISE&&(C=C.slice().reverse());let T=m.PolygonGeometryLibrary.computeWallGeometry(C,i,t,n,s,g);b.walls.push(new c.GeometryInstance({geometry:T}));const I=r.holes;for(_=0;_<I.length;_++){let e=I[_];if(P=l.EllipsoidTangentPlane.fromPoints(e,t,f),!0===f)for(const t of e){const e=a.Cartesian2.fromCartesian3(t);x.push(e)}else x=P.projectPointsOntoPlane(e,ie);w=h.PolygonPipeline.computeWindingOrder2D(x),w===h.WindingOrder.COUNTER_CLOCKWISE&&(e=e.slice().reverse()),T=m.PolygonGeometryLibrary.computeWallGeometry(e,i,t,n,s,g),b.walls.push(new c.GeometryInstance({geometry:T}))}return b}function ae(i){const n=i.polygonHierarchy,r=e.defaultValue(i.vertexFormat,f.VertexFormat.DEFAULT),s=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(i.granularity,g.CesiumMath.RADIANS_PER_DEGREE),u=e.defaultValue(i.stRotation,0),c=i.textureCoordinates,p=e.defaultValue(i.perPositionHeight,!1),d=p&&e.defined(i.extrudedHeight);let y=e.defaultValue(i.height,0),h=e.defaultValue(i.extrudedHeight,y);if(!d){const e=Math.max(y,h);h=Math.min(y,h),y=e}this._vertexFormat=f.VertexFormat.clone(r),this._ellipsoid=t.Ellipsoid.clone(s),this._granularity=l,this._stRotation=u,this._height=y,this._extrudedHeight=h,this._closeTop=e.defaultValue(i.closeTop,!0),this._closeBottom=e.defaultValue(i.closeBottom,!0),this._polygonHierarchy=n,this._perPositionHeight=p,this._perPositionHeightExtrude=d,this._shadowVolume=e.defaultValue(i.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=i.offsetAttribute,this._arcType=e.defaultValue(i.arcType,o.ArcType.GEODESIC),this._planeView=e.defaultValue(i.planeView,!1),this._totalPositions=void 0,this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=c,this.packedLength=m.PolygonGeometryLibrary.computeHierarchyPackedLength(n,t.Cartesian3)+t.Ellipsoid.packedLength+f.VertexFormat.packedLength+(c?m.PolygonGeometryLibrary.computeHierarchyPackedLength(c,a.Cartesian2):1)+12}ae.fromPositions=function(t){return new ae({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates,planeView:t.planeView})},ae.pack=function(o,i,n){return n=e.defaultValue(n,0),n=m.PolygonGeometryLibrary.packPolygonHierarchy(o._polygonHierarchy,i,n,t.Cartesian3),t.Ellipsoid.pack(o._ellipsoid,i,n),n+=t.Ellipsoid.packedLength,f.VertexFormat.pack(o._vertexFormat,i,n),n+=f.VertexFormat.packedLength,i[n++]=o._height,i[n++]=o._extrudedHeight,i[n++]=o._granularity,i[n++]=o._stRotation,i[n++]=o._perPositionHeightExtrude?1:0,i[n++]=o._perPositionHeight?1:0,i[n++]=o._closeTop?1:0,i[n++]=o._closeBottom?1:0,i[n++]=o._shadowVolume?1:0,i[n++]=e.defaultValue(o._offsetAttribute,-1),i[n++]=o._arcType,e.defined(o._textureCoordinates)?n=m.PolygonGeometryLibrary.packPolygonHierarchy(o._textureCoordinates,i,n,a.Cartesian2):i[n++]=-1,i[n++]=o.packedLength,i};const re=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),se=new f.VertexFormat,le={polygonHierarchy:{}};return ae.unpack=function(o,i,n,r){i=e.defaultValue(i,0),r=e.defaultValue(r,!1);const s=m.PolygonGeometryLibrary.unpackPolygonHierarchy(o,i,t.Cartesian3);i=s.startingIndex,delete s.startingIndex;const l=t.Ellipsoid.unpack(o,i,re);i+=t.Ellipsoid.packedLength;const u=f.VertexFormat.unpack(o,i,se);i+=f.VertexFormat.packedLength;const c=o[i++],p=o[i++],d=o[i++],y=o[i++],g=1===o[i++],h=1===o[i++],b=1===o[i++],_=1===o[i++],C=1===o[i++],P=o[i++],x=o[i++],w=-1===o[i]?void 0:m.PolygonGeometryLibrary.unpackPolygonHierarchy(o,i,a.Cartesian2);e.defined(w)?(i=w.startingIndex,delete w.startingIndex):i++;const T=o[i++];return e.defined(n)||(n=new ae(le)),n._polygonHierarchy=s,n._ellipsoid=t.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=f.VertexFormat.clone(u,n._vertexFormat),n._height=c,n._extrudedHeight=p,n._granularity=d,n._stRotation=y,n._perPositionHeightExtrude=g,n._perPositionHeight=h,n._closeTop=b,n._closeBottom=_,n._shadowVolume=C,n._offsetAttribute=-1===P?void 0:P,n._arcType=x,n._textureCoordinates=w,n.packedLength=T,n._planeView=r,n},ae.computeRectangle=function(i,n){const a=e.defaultValue(i.granularity,g.CesiumMath.RADIANS_PER_DEGREE),r=e.defaultValue(i.arcType,o.ArcType.GEODESIC);e.defaultValue(i.planeView,!1);const s=i.polygonHierarchy,l=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84);return ee(s.positions,l,r,a,n)},ae.createGeometry=function(t){const o=t._vertexFormat,i=t._ellipsoid,a=t._granularity,s=t._stRotation,f=t._polygonHierarchy,b=t._perPositionHeight,_=t._closeTop,C=t._closeBottom,P=t._arcType,x=t._textureCoordinates,w=t._planeView,T=e.defined(x);let I=f.positions;if(I.length<3)return;const A=l.EllipsoidTangentPlane.fromPoints(I,i,w),v=m.PolygonGeometryLibrary.polygonsFromHierarchy(f,T,A.projectPointsOntoPlane.bind(A),!b,i,w),E=v.hierarchy,V=v.polygons,G=T?m.PolygonGeometryLibrary.polygonsFromHierarchy(x,!0,(function(e){return e}),!1,w).polygons:void 0;if(0===E.length)return;I=E[0].outerRing;const O=m.PolygonGeometryLibrary.computeBoundingRectangle(A.plane.normal,A.projectPointOntoPlane.bind(A),I,s,H,w),L=[],D=t._height,N=t._extrudedHeight,F={perPositionHeight:b,vertexFormat:o,geometry:void 0,tangentPlane:A,boundingRectangle:O,ellipsoid:i,stRotation:s,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:P,planeView:w};let R;if(t._perPositionHeightExtrude||!g.CesiumMath.equalsEpsilon(D,N,0,g.CesiumMath.EPSILON2))for(F.extrude=!0,F.top=_,F.bottom=C,F.shadowVolume=t._shadowVolume,F.offsetAttribute=t._offsetAttribute,R=0;R<V.length;R++){const e=ne(i,V[R],T?G[R]:void 0,a,E[R],b,_,C,o,P,w);let t;_&&C?(t=e.topAndBottom,F.geometry=m.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,D,N,i,b,w)):_?(t=e.topAndBottom,t.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,D,i,!b,w),F.geometry=t.geometry):C&&(t=e.topAndBottom,t.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(t.geometry.attributes.position.values,N,i,!0,w),F.geometry=t.geometry),(_||C)&&(F.wall=!1,t.geometry=K(F),L.push(t));const n=e.walls;F.wall=!0;for(let e=0;e<n.length;e++){const t=n[e];F.geometry=m.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(t.geometry,D,N,i,b,w),t.geometry=K(F),L.push(t)}}else for(R=0;R<V.length;R++){const n=new c.GeometryInstance({geometry:m.PolygonGeometryLibrary.createGeometryFromPositions(i,V[R],T?G[R]:void 0,a,b,o,P,w)});if(n.geometry.attributes.position.values=h.PolygonPipeline.scaleToGeodeticHeight(n.geometry.attributes.position.values,D,i,!b,w),F.geometry=n.geometry,n.geometry=K(F),e.defined(t._offsetAttribute)){const e=n.geometry.attributes.position.values.length,o=t._offsetAttribute===p.GeometryOffsetAttribute.NONE?0:1,i=new Uint8Array(e/3).fill(o);n.geometry.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}L.push(n)}const M=d.GeometryPipeline.combineInstances(L)[0];t._totalPositions=M.attributes.position.values.slice(),M.attributes.position.values=new Float64Array(M.attributes.position.values),M.indices=y.IndexDatatype.createTypedArray(M.attributes.position.values.length/3,M.indices);const S=M.attributes,B=n.BoundingSphere.fromVertices(S.position.values);return o.position||delete S.position,new u.Geometry({attributes:S,indices:M.indices,primitiveType:M.primitiveType,boundingSphere:B,offsetAttribute:t._offsetAttribute})},ae.createShadowVolume=function(e,t,o,i){const n=e._granularity,a=e._ellipsoid,r=t(n,a),s=o(n,a);return new ae({polygonHierarchy:e._polygonHierarchy,ellipsoid:a,stRotation:e._stRotation,granularity:n,perPositionHeight:!1,extrudedHeight:r,height:s,vertexFormat:f.VertexFormat.POSITION_ONLY,shadowVolume:!0,arcType:e._arcType,planeView:i})},Object.defineProperties(ae.prototype,{rectangle:{get:function(){if(!e.defined(this._rectangle)){const e=this._polygonHierarchy.positions;this._rectangle=ee(e,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return e.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(e){const t=-e._stRotation;if(0===t)return[0,0,0,1,1,0];const o=e._ellipsoid,i=e._polygonHierarchy.positions,n=e.rectangle;return u.Geometry._textureCoordinateRotationPoints(i,t,o,n,e._planeView)}(this)),this._textureCoordinateRotationPoints}}}),function(o,i,n){return e.defined(i)&&(o=ae.unpack(o,i,void 0,n)),o._ellipsoid=t.Ellipsoid.clone(o._ellipsoid),ae.createGeometry(o)}}));