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
define(["./Transforms-c38817cd","./Matrix2-bce7772b","./Matrix3-a45402cf","./defaultValue-192c850d","./Math-be2c8494","./CartesianRectangle-3289fb67","./ArcType-d7935178","./arrayRemoveDuplicates-0aca867d","./ComponentDatatype-f194b981","./EllipsoidGeodesic-35356ee4","./EllipsoidRhumbLine-c951aea3","./EncodedCartesian3-43036f0c","./GeometryAttribute-add8522c","./IntersectionTests-f861e6a9","./Plane-f4b01105","./WebMercatorProjection-7f67a88a","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./RuntimeError-ca280330","./WebGLConstants-1bcc99d3"],(function(e,t,n,a,i,r,s,o,l,c,u,h,C,d,p,g,f,m,w,y){"use strict";function M(i){i=a.defaultValue(i,a.defaultValue.EMPTY_OBJECT),this._ellipsoid=a.defaultValue(i.ellipsoid,n.Ellipsoid.WGS84),this._rectangle=a.defaultValue(i.rectangle,t.Rectangle.MAX_VALUE),this._projection=new e.GeographicProjection(this._ellipsoid),this._numberOfLevelZeroTilesX=a.defaultValue(i.numberOfLevelZeroTilesX,2),this._numberOfLevelZeroTilesY=a.defaultValue(i.numberOfLevelZeroTilesY,1)}Object.defineProperties(M.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},rectangle:{get:function(){return this._rectangle}},projection:{get:function(){return this._projection}}}),M.prototype.getNumberOfXTilesAtLevel=function(e){return this._numberOfLevelZeroTilesX<<e},M.prototype.getNumberOfYTilesAtLevel=function(e){return this._numberOfLevelZeroTilesY<<e},M.prototype.rectangleToNativeRectangle=function(e,n){const r=i.CesiumMath.toDegrees(e.west),s=i.CesiumMath.toDegrees(e.south),o=i.CesiumMath.toDegrees(e.east),l=i.CesiumMath.toDegrees(e.north);return a.defined(n)?(n.west=r,n.south=s,n.east=o,n.north=l,n):new t.Rectangle(r,s,o,l)},M.prototype.tileXYToNativeRectangle=function(e,t,n,a){const r=this.tileXYToRectangle(e,t,n,a);return r.west=i.CesiumMath.toDegrees(r.west),r.south=i.CesiumMath.toDegrees(r.south),r.east=i.CesiumMath.toDegrees(r.east),r.north=i.CesiumMath.toDegrees(r.north),r},M.prototype.tileXYToRectangle=function(e,n,i,r){const s=this._rectangle,o=this.getNumberOfXTilesAtLevel(i),l=this.getNumberOfYTilesAtLevel(i),c=s.width/o,u=e*c+s.west,h=(e+1)*c+s.west,C=s.height/l,d=s.north-n*C,p=s.north-(n+1)*C;return a.defined(r)||(r=new t.Rectangle(u,p,h,d)),r.west=u,r.south=p,r.east=h,r.north=d,r},M.prototype.positionToTileXY=function(e,n,r){const s=this._rectangle;if(!t.Rectangle.contains(s,e))return;const o=this.getNumberOfXTilesAtLevel(n),l=this.getNumberOfYTilesAtLevel(n),c=s.width/o,u=s.height/l;let h=e.longitude;s.east<s.west&&(h+=i.CesiumMath.TWO_PI);let C=(h-s.west)/c|0;C>=o&&(C=o-1);let d=(s.north-e.latitude)/u|0;return d>=l&&(d=l-1),a.defined(r)?(r.x=C,r.y=d,r):new t.Cartesian2(C,d)};let T={west:248e3,south:253e3,east:408e3,north:413e3};function _(e){e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT);const n=a.defaultValue(e.bounds,[T.west,T.south,T.east,T.north]);T={west:n[0],south:n[1],east:n[2],north:n[3]},this._numberOfLevelZeroTilesX=a.defaultValue(e.numberOfLevelZeroTilesX,1),this._numberOfLevelZeroTilesY=a.defaultValue(e.numberOfLevelZeroTilesY,1),a.defined(e.rectangleSouthwestInMeters)&&a.defined(e.rectangleNortheastInMeters)?(this._rectangleSouthwestInMeters=e.rectangleSouthwestInMeters,this._rectangleNortheastInMeters=e.rectangleNortheastInMeters):(this._rectangleSouthwestInMeters=new t.Cartesian2(T.west,T.south),this._rectangleNortheastInMeters=new t.Cartesian2(T.east,T.north)),this._rectangle=new r.CartesianRectangle(T.west,T.south,T.east,T.north)}_.define=function(e){T=e,_.xy=T,_.width=T.east-T.west,_.height=T.north-T.south},_.xy=T,_.width=T.east-T.west,_.height=T.north-T.south,_.definexy={west:248e3,south:253e3,east:408e3,north:413e3},Object.defineProperties(_.prototype,{rectangle:{get:function(){return this._rectangle}}}),_.prototype.getNumberOfXTilesAtLevel=function(e){return this._numberOfLevelZeroTilesX<<e},_.prototype.getNumberOfYTilesAtLevel=function(e){return this._numberOfLevelZeroTilesY<<e},_.prototype.rectangleToNativeRectangle=function(e,t){return e},_.prototype.tileXYToNativeRectangle=function(e,t,n,i){const s=this.getNumberOfXTilesAtLevel(n),o=this.getNumberOfYTilesAtLevel(n),l=(this._rectangleNortheastInMeters.x-this._rectangleSouthwestInMeters.x)/s,c=this._rectangleSouthwestInMeters.x+e*l,u=this._rectangleSouthwestInMeters.x+(e+1)*l,h=(this._rectangleNortheastInMeters.y-this._rectangleSouthwestInMeters.y)/o,C=this._rectangleNortheastInMeters.y-t*h,d=this._rectangleNortheastInMeters.y-(t+1)*h;return a.defined(i)?(i.west=c,i.south=d,i.east=u,i.north=C,i):new r.CartesianRectangle(c,d,u,C)},_.prototype.tileXYToRectangle=function(e,t,n,a){return this.tileXYToNativeRectangle(e,t,n,a)},_.prototype.positionToTileXY=function(e,n,i){"Cartographic"===e.constructor.name&&(e.x=e.longitude,e.y=e.latitude,e.z=e.height);const r=this.getNumberOfXTilesAtLevel(n),s=this.getNumberOfYTilesAtLevel(n),o=(this._rectangleNortheastInMeters.x-this._rectangleSouthwestInMeters.x)/r,l=(this._rectangleNortheastInMeters.y-this._rectangleSouthwestInMeters.y)/s;let c=(e.x-this._rectangleSouthwestInMeters.x)/o|0;c>=r&&(c=r-1);let u=(this._rectangleNortheastInMeters.y-e.y)/l|0;return u>=s&&(u=s-1),a.defined(i)?(i.x=c,i.y=u,i):new t.Cartesian2(c,u)},_.nj08ToDefineXY=function(e,t,n){const a=new _({bounds:[-20037549.4,-19992606.18,19992604.6,20037547.82]}).positionToTileXY({x:_.definexy.west,y:_.definexy.north},n+7);return{x:a.x+e,y:a.y+t,level:n+7}};const E=new n.Cartesian3,O=new n.Cartesian3,b=new n.Cartographic,x=new n.Cartesian3,I=new n.Cartesian3,L=new e.BoundingSphere,S=new M,N=[new n.Cartographic,new n.Cartographic,new n.Cartographic,new n.Cartographic],A=new _,P=[new t.Cartesian2,new t.Cartesian2,new t.Cartesian2,new t.Cartesian2],k=new t.Cartesian2,v={};function R(e,t){a.defined(t)&&!0===t?(P[0].x=e.east,P[0].y=e.north,P[1].x=e.west,P[1].y=e.north,P[2].x=e.east,P[2].y=e.south,P[3].x=e.west,P[3].y=e.south):(n.Cartographic.fromRadians(e.east,e.north,0,N[0]),n.Cartographic.fromRadians(e.west,e.north,0,N[1]),n.Cartographic.fromRadians(e.east,e.south,0,N[2]),n.Cartographic.fromRadians(e.west,e.south,0,N[3]));let i=0,r=0,s=0,o=0;const l=v._terrainHeightsMaxLevel;let c;for(c=0;c<=l;++c){let e=!1;for(let n=0;n<4;++n){if(a.defined(t)&&!0===t){const e=P[n];A.positionToTileXY(e,c,k)}else{const e=N[n];S.positionToTileXY(e,c,k)}if(0===n)s=k.x,o=k.y;else if(s!==k.x||o!==k.y){e=!0;break}}if(e)break;i=s,r=o}if(0!==c)return{x:i,y:r,level:c>l?l:c-1}}v.initialize=function(){let t=v._initPromise;return a.defined(t)||(t=e.Resource.fetchJson(e.buildModuleUrl("Assets/approximateTerrainHeights.json")).then((function(e){v._terrainHeights=e})),v._initPromise=t),t},v.getMinimumMaximumHeights=function(e,i,r){i=a.defaultValue(i,n.Ellipsoid.WGS84);const s=R(e,r);let o=v._defaultMinTerrainHeight,l=v._defaultMaxTerrainHeight;if(a.defined(s)){const c=`${s.level}-${s.x}-${s.y}`,u=v._terrainHeights[c];let h;if(a.defined(u)&&(o=u[0],l=u[1]),a.defined(r)&&!0===r?(E.x=e.east,E.y=e.north,E.z=0,O.x=e.west,O.y=e.south,O.z=0):(i.cartographicToCartesian(t.Rectangle.northeast(e,b),E),i.cartographicToCartesian(t.Rectangle.southwest(e,b),O)),n.Cartesian3.midpoint(O,E,x),h=a.defined(r)&&!0===r?x.clone(I):i.scaleToGeodeticSurface(x,I),a.defined(h)){const e=n.Cartesian3.distance(x,h);o=Math.min(o,-e)}else o=v._defaultMinTerrainHeight}return o=Math.max(v._defaultMinTerrainHeight,o),{minimumTerrainHeight:o,maximumTerrainHeight:l}},v.getBoundingSphere=function(t,i){i=a.defaultValue(i,n.Ellipsoid.WGS84);const r=R(t);let s=v._defaultMaxTerrainHeight;if(a.defined(r)){const e=`${r.level}-${r.x}-${r.y}`,t=v._terrainHeights[e];a.defined(t)&&(s=t[1])}const o=e.BoundingSphere.fromRectangle3D(t,i,0);return e.BoundingSphere.fromRectangle3D(t,i,s,L),e.BoundingSphere.union(o,L,o)},v._terrainHeightsMaxLevel=6,v._defaultMaxTerrainHeight=9e3,v._defaultMinTerrainHeight=-1e5,v._terrainHeights=void 0,v._initPromise=void 0,Object.defineProperties(v,{initialized:{get:function(){return a.defined(v._terrainHeights)}}});var D=v;const V=[e.GeographicProjection,g.WebMercatorProjection],z=V.length,Y=Math.cos(i.CesiumMath.toRadians(30)),H=Math.cos(i.CesiumMath.toRadians(150)),X=0,j=1e3;function B(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions,i=a.defaultValue(e.planeView,!1);this.width=a.defaultValue(e.width,1),this._positions=t,this._planeView=i,this.granularity=a.defaultValue(e.granularity,9999),this.loop=a.defaultValue(e.loop,!1),this.arcType=a.defaultValue(e.arcType,s.ArcType.GEODESIC),this._ellipsoid=n.Ellipsoid.WGS84,this._projectionIndex=0,this._workerName="createGroundPolylineGeometry",this._scene3DOnly=!1}Object.defineProperties(B.prototype,{packedLength:{get:function(){return 1+3*this._positions.length+1+1+1+n.Ellipsoid.packedLength+1+1}}}),B.setProjectionAndEllipsoid=function(e,t){let n=0;for(let e=0;e<z;e++)if(t instanceof V[e]){n=e;break}e._projectionIndex=n,e._ellipsoid=t.ellipsoid};const G=new n.Cartesian3,Z=new n.Cartesian3,F=new n.Cartesian3;function q(e,t,a,i,r,s){const o=ee(i,e,0,G,s),l=ee(i,e,a,Z,s),c=ee(i,t,0,F,s),u=te(l,o,Z),h=te(c,o,F);return n.Cartesian3.cross(h,u,r),n.Cartesian3.normalize(r,r)}const W=new n.Cartographic,U=new n.Cartesian3,$=new n.Cartesian3,J=new n.Cartesian3;function Q(e,t,i,r,o,l,h,C,d,p,g,f){if(0===o)return;let m;f=a.defaultValue(f,!1),l===s.ArcType.GEODESIC?m=new c.EllipsoidGeodesic(e,t,h):l===s.ArcType.RHUMB&&(m=new u.EllipsoidRhumbLine(e,t,h));const w=m.surfaceDistance;if(w<o||!0===f)return;const y=q(e,t,r,h,J),M=Math.ceil(w/o),T=w/M;let _=T;const E=M-1;let O=C.length;for(let e=0;e<E;e++){const e=m.interpolateUsingSurfaceDistance(_,W),t=ee(h,e,i,U),a=ee(h,e,r,$);n.Cartesian3.pack(y,C,O),n.Cartesian3.pack(t,d,O),n.Cartesian3.pack(a,p,O),g.push(e.latitude),g.push(e.longitude),O+=3,_+=T}}const K=new n.Cartographic;function ee(e,t,i,r,s){return n.Cartographic.clone(t,K),K.height=i,a.defined(s)&&!0===s?(a.defined(r)||(r=new n.Cartesian3),r.x=K.longitude,r.y=K.latitude,r.z=K.height,r):n.Cartographic.toCartesian(K,e,r)}function te(e,t,a){return n.Cartesian3.subtract(e,t,a),n.Cartesian3.normalize(a,a),a}function ne(e,t,a,i){return i=te(e,t,i),i=n.Cartesian3.cross(i,a,i),i=n.Cartesian3.normalize(i,i),i=n.Cartesian3.cross(a,i,i)}B.pack=function(e,t,i){let r=a.defaultValue(i,0);const s=e._positions,o=s.length;t[r++]=o;for(let e=0;e<o;++e){const a=s[e];n.Cartesian3.pack(a,t,r),r+=3}return t[r++]=e.granularity,t[r++]=e.loop?1:0,t[r++]=e.arcType,n.Ellipsoid.pack(e._ellipsoid,t,r),r+=n.Ellipsoid.packedLength,t[r++]=e._projectionIndex,t[r++]=e._scene3DOnly?1:0,t},B.unpack=function(e,t,i,r){let s=a.defaultValue(t,0);const o=e[s++],l=new Array(o);for(let t=0;t<o;t++)l[t]=n.Cartesian3.unpack(e,s),s+=3;const c=e[s++],u=1===e[s++],h=e[s++],C=n.Ellipsoid.unpack(e,s);s+=n.Ellipsoid.packedLength;const d=e[s++],p=1===e[s++];return a.defined(i)||(i=new B({positions:l,planeView:r})),i._positions=l,i.granularity=c,i.loop=u,i.arcType=h,i._ellipsoid=C,i._projectionIndex=d,i._scene3DOnly=p,i._planeView=r,i};const ae=new n.Cartesian3,ie=new n.Cartesian3,re=new n.Cartesian3,se=new n.Cartesian3;function oe(e,t,a,r,s){const o=te(a,t,se),l=ne(e,t,o,ae),c=ne(r,t,o,ie);if(i.CesiumMath.equalsEpsilon(n.Cartesian3.dot(l,c),-1,i.CesiumMath.EPSILON5))return s=n.Cartesian3.cross(o,l,s),s=n.Cartesian3.normalize(s,s);s=n.Cartesian3.add(c,l,s),s=n.Cartesian3.normalize(s,s);const u=n.Cartesian3.cross(o,s,re);return n.Cartesian3.dot(c,u)<0&&(s=n.Cartesian3.negate(s,s)),s}const le=p.Plane.fromPointNormal(n.Cartesian3.ZERO,n.Cartesian3.UNIT_Y),ce=new n.Cartesian3,ue=new n.Cartesian3,he=new n.Cartesian3,Ce=new n.Cartesian3,de=new n.Cartesian3,pe=new n.Cartesian3,ge=new n.Cartographic,fe=new n.Cartographic,me=new n.Cartographic;B.createGeometry=function(r){const c=!r._scene3DOnly;let p=r.loop;const g=r._ellipsoid,f=r.granularity,m=r.arcType,w=new V[r._projectionIndex](g),y=r._planeView,M=X,T=j;let _,E;const O=r._positions,b=O.length;let x,I,L,S;2===b&&(p=!1);const N=new u.EllipsoidRhumbLine(void 0,void 0,g);let A,P,k;const v=[O[0]];for(E=0;E<b-1;E++)x=O[E],I=O[E+1],A=d.IntersectionTests.lineSegmentPlane(x,I,le,pe),!a.defined(A)||n.Cartesian3.equalsEpsilon(A,x,i.CesiumMath.EPSILON7)||n.Cartesian3.equalsEpsilon(A,I,i.CesiumMath.EPSILON7)||(r.arcType===s.ArcType.GEODESIC?v.push(n.Cartesian3.clone(A)):r.arcType===s.ArcType.RHUMB&&(k=g.cartesianToCartographic(A,ge).longitude,L=g.cartesianToCartographic(x,ge),S=g.cartesianToCartographic(I,fe),N.setEndPoints(L,S),P=N.findIntersectionWithLongitude(k,me),A=g.cartographicToCartesian(P,pe),!a.defined(A)||n.Cartesian3.equalsEpsilon(A,x,i.CesiumMath.EPSILON7)||n.Cartesian3.equalsEpsilon(A,I,i.CesiumMath.EPSILON7)||v.push(n.Cartesian3.clone(A)))),v.push(I);p&&(x=O[b-1],I=O[0],A=d.IntersectionTests.lineSegmentPlane(x,I,le,pe),!a.defined(A)||n.Cartesian3.equalsEpsilon(A,x,i.CesiumMath.EPSILON7)||n.Cartesian3.equalsEpsilon(A,I,i.CesiumMath.EPSILON7)||(r.arcType===s.ArcType.GEODESIC?v.push(n.Cartesian3.clone(A)):r.arcType===s.ArcType.RHUMB&&(k=g.cartesianToCartographic(A,ge).longitude,L=g.cartesianToCartographic(x,ge),S=g.cartesianToCartographic(I,fe),N.setEndPoints(L,S),P=N.findIntersectionWithLongitude(k,me),A=g.cartographicToCartesian(P,pe),!a.defined(A)||n.Cartesian3.equalsEpsilon(A,x,i.CesiumMath.EPSILON7)||n.Cartesian3.equalsEpsilon(A,I,i.CesiumMath.EPSILON7)||v.push(n.Cartesian3.clone(A)))));let R=v.length,z=new Array(R);for(E=0;E<R;E++){let e=new n.Cartographic;!0===y?(e.longitude=v[E].x,e.latitude=v[E].y,e.height=0):(e=n.Cartographic.fromCartesian(v[E],g),e.height=0),z[E]=e}if(z=o.arrayRemoveDuplicates(z,n.Cartographic.equalsEpsilon),R=z.length,R<2)return;const H=[],B=[],G=[],Z=[];let F=ce,W=ue,U=he,$=Ce,J=de;const K=z[0],ne=z[1];for(F=ee(g,z[R-1],M,F,y),$=ee(g,ne,M,$,y),W=ee(g,K,M,W,y),U=ee(g,K,T,U,y),J=p?oe(F,W,U,$,J):q(K,ne,T,g,J,y),n.Cartesian3.pack(J,B,0),n.Cartesian3.pack(W,G,0),n.Cartesian3.pack(U,Z,0),H.push(K.latitude),H.push(K.longitude),Q(K,ne,M,T,f,m,g,B,G,Z,H,y),E=1;E<R-1;++E){F=n.Cartesian3.clone(W,F),W=n.Cartesian3.clone($,W);const e=z[E];ee(g,e,T,U,y),ee(g,z[E+1],M,$,y),oe(F,W,U,$,J),_=B.length,n.Cartesian3.pack(J,B,_),n.Cartesian3.pack(W,G,_),n.Cartesian3.pack(U,Z,_),H.push(e.latitude),H.push(e.longitude),Q(z[E],z[E+1],M,T,f,m,g,B,G,Z,H,y)}const ae=z[R-1],ie=z[R-2];if(W=ee(g,ae,M,W,y),U=ee(g,ae,T,U,y),p){const e=z[0];F=ee(g,ie,M,F,y),$=ee(g,e,M,$,y),J=oe(F,W,U,$,J)}else J=q(ie,ae,T,g,J,y);if(_=B.length,n.Cartesian3.pack(J,B,_),n.Cartesian3.pack(W,G,_),n.Cartesian3.pack(U,Z,_),H.push(ae.latitude),H.push(ae.longitude),p){for(Q(ae,K,M,T,f,m,g,B,G,Z,H),_=B.length,E=0;E<3;++E)B[_+E]=B[E],G[_+E]=G[E],Z[_+E]=Z[E];H.push(K.latitude),H.push(K.longitude)}return function(r,s,o,c,u,d,p,g){let f,m;const w=s._ellipsoid;g=a.defaultValue(g,!1);const y=o.length/3-1,M=8*y,T=4*M,_=36*y,E=M>65535?new Uint32Array(_):new Uint16Array(_),O=new Float64Array(3*M),b=new Float32Array(T),x=new Float32Array(T),I=new Float32Array(T),L=new Float32Array(T),S=new Float32Array(T);let N,A,P,k;p&&(N=new Float32Array(T),A=new Float32Array(T),P=new Float32Array(T),k=new Float32Array(2*M));const v=d.length/2;let R=0;const V=Pe;V.height=0;const z=ke;z.height=0;let H=ve,X=Re;if(p)for(m=0,f=1;f<v;f++)V.latitude=d[m],V.longitude=d[m+1],z.latitude=d[m+2],z.longitude=d[m+3],H=s.project(V,H),X=s.project(z,X),R+=n.Cartesian3.distance(H,X),m+=2;const j=c.length/3;X=n.Cartesian3.unpack(c,0,X);let B,G=0;for(m=3,f=1;f<j;f++)H=n.Cartesian3.clone(X,H),X=n.Cartesian3.unpack(c,m,X),G+=n.Cartesian3.distance(H,X),m+=3;m=3;let Z=0,F=0,q=0,W=0,U=!1,$=n.Cartesian3.unpack(o,0,Ve),J=n.Cartesian3.unpack(c,0,Re),Q=n.Cartesian3.unpack(u,0,Ye);if(r){Te(Q,n.Cartesian3.unpack(o,o.length-6,De),$,J)&&(Q=n.Cartesian3.negate(Q,Q))}let K=0,ee=0,ne=0;for(f=0;f<y;f++){const e=n.Cartesian3.clone($,De),a=n.Cartesian3.clone(J,ve);let r,l,C,f,y=n.Cartesian3.clone(Q,ze);if(U&&(y=n.Cartesian3.negate(y,y)),$=n.Cartesian3.unpack(o,m,Ve),J=n.Cartesian3.unpack(c,m,Re),Q=n.Cartesian3.unpack(u,m,Ye),U=Te(Q,e,$,J),V.latitude=d[Z],V.longitude=d[Z+1],z.latitude=d[Z+2],z.longitude=d[Z+3],p){const e=Ae(V,z);r=s.project(V,Fe),l=s.project(z,qe);const t=te(l,r,it);t.y=Math.abs(t.y),C=We,f=Ue,0===e||n.Cartesian3.dot(t,n.Cartesian3.UNIT_Y)>Y?(C=be(s,V,y,r,We),f=be(s,z,Q,l,Ue)):1===e?(f=be(s,z,Q,l,Ue),C.x=0,C.y=i.CesiumMath.sign(V.longitude-Math.abs(z.longitude)),C.z=0):(C=be(s,V,y,r,We),f.x=0,f.y=i.CesiumMath.sign(V.longitude-z.longitude),f.z=0)}const M=n.Cartesian3.distance(a,J),T=h.EncodedCartesian3.fromCartesian(e,nt),_=n.Cartesian3.subtract($,e,$e),E=n.Cartesian3.normalize(_,Ke);let v=n.Cartesian3.subtract(a,e,Je);v=n.Cartesian3.normalize(v,v);let H=n.Cartesian3.cross(E,v,Ke);H=n.Cartesian3.normalize(H,H);let X=n.Cartesian3.cross(v,y,et);X=n.Cartesian3.normalize(X,X);let j=n.Cartesian3.subtract(J,$,Qe);j=n.Cartesian3.normalize(j,j);let ae=n.Cartesian3.cross(Q,j,tt);ae=n.Cartesian3.normalize(ae,ae);const ie=M/G,re=K/G;let se,oe,le,ce=0,ue=0,he=0;if(p){ce=n.Cartesian3.distance(r,l),se=h.EncodedCartesian3.fromCartesian(r,at),oe=n.Cartesian3.subtract(l,r,it),le=n.Cartesian3.normalize(oe,rt);const e=le.x;le.x=le.y,le.y=-e,ue=ce/R,he=ee/R}for(B=0;B<8;B++){const e=W+4*B,t=F+2*B,a=e+3,i=B<4?1:-1,r=2===B||3===B||6===B||7===B?1:-1;n.Cartesian3.pack(T.high,b,e),b[a]=_.x,n.Cartesian3.pack(T.low,x,e),x[a]=_.y,n.Cartesian3.pack(X,I,e),I[a]=_.z,n.Cartesian3.pack(ae,L,e),L[a]=ie*i,n.Cartesian3.pack(H,S,e);let s=re*r;0===s&&r<0&&(s=9),S[a]=s,p&&(N[e]=se.high.x,N[e+1]=se.high.y,N[e+2]=se.low.x,N[e+3]=se.low.y,P[e]=-C.y,P[e+1]=C.x,P[e+2]=f.y,P[e+3]=-f.x,A[e]=oe.x,A[e+1]=oe.y,A[e+2]=le.x,A[e+3]=le.y,k[t]=ue*i,s=he*r,0===s&&r<0&&(s=9),k[t+1]=s)}const Ce=Ge,de=Ze,pe=je,ge=Be,fe=t.Rectangle.fromCartographicArray(He,Xe),me=D.getMinimumMaximumHeights(fe,w);let we=me.minimumTerrainHeight,ye=me.maximumTerrainHeight;!0===g&&(we=0,ye=1e3),ne+=we,ne+=ye,Le(e,a,we,ye,Ce,pe),Le($,J,we,ye,de,ge);let Me=n.Cartesian3.multiplyByScalar(H,i.CesiumMath.EPSILON5,st);n.Cartesian3.add(Ce,Me,Ce),n.Cartesian3.add(de,Me,de),n.Cartesian3.add(pe,Me,pe),n.Cartesian3.add(ge,Me,ge),Ne(Ce,de),Ne(pe,ge),n.Cartesian3.pack(Ce,O,q),n.Cartesian3.pack(de,O,q+3),n.Cartesian3.pack(ge,O,q+6),n.Cartesian3.pack(pe,O,q+9),Me=n.Cartesian3.multiplyByScalar(H,-2*i.CesiumMath.EPSILON5,st),n.Cartesian3.add(Ce,Me,Ce),n.Cartesian3.add(de,Me,de),n.Cartesian3.add(pe,Me,pe),n.Cartesian3.add(ge,Me,ge),Ne(Ce,de),Ne(pe,ge),n.Cartesian3.pack(Ce,O,q+12),n.Cartesian3.pack(de,O,q+15),n.Cartesian3.pack(ge,O,q+18),n.Cartesian3.pack(pe,O,q+21),Z+=2,m+=3,F+=16,q+=24,W+=32,K+=M,ee+=ce}m=0;let ae=0;for(f=0;f<y;f++){for(B=0;B<ct;B++)E[m+B]=lt[B]+ae;ae+=8,m+=ct}const ie=ot;e.BoundingSphere.fromVertices(o,n.Cartesian3.ZERO,3,ie[0]),e.BoundingSphere.fromVertices(c,n.Cartesian3.ZERO,3,ie[1]);const re=e.BoundingSphere.fromBoundingSpheres(ie);re.radius+=ne/(2*y);const se={position:new C.GeometryAttribute({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,normalize:!1,values:O}),startHiAndForwardOffsetX:ut(b),startLoAndForwardOffsetY:ut(x),startNormalAndForwardOffsetZ:ut(I),endNormalAndTextureCoordinateNormalizationX:ut(L),rightNormalAndTextureCoordinateNormalizationY:ut(S)};p&&(se.startHiLo2D=ut(N),se.offsetAndRight2D=ut(A),se.startEndNormals2D=ut(P),se.texcoordNormalization2D=new C.GeometryAttribute({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:2,normalize:!1,values:k}));return new C.Geometry({attributes:se,indices:E,boundingSphere:re})}(p,w,G,Z,B,H,c,y)};const we=new n.Cartesian3,ye=new n.Matrix3,Me=new e.Quaternion;function Te(t,a,r,s){const o=te(r,a,we),l=n.Cartesian3.dot(o,t);if(l>Y||l<H){const a=te(s,r,se),o=l<H?i.CesiumMath.PI_OVER_TWO:-i.CesiumMath.PI_OVER_TWO,c=e.Quaternion.fromAxisAngle(a,o,Me),u=n.Matrix3.fromQuaternion(c,ye);return n.Matrix3.multiplyByVector(u,t,t),!0}return!1}const _e=new n.Cartographic,Ee=new n.Cartesian3,Oe=new n.Cartesian3;function be(e,t,a,r,s){const o=n.Cartographic.toCartesian(t,e._ellipsoid,Ee);let l=n.Cartesian3.add(o,a,Oe),c=!1;const u=e._ellipsoid;let h=u.cartesianToCartographic(l,_e);Math.abs(t.longitude-h.longitude)>i.CesiumMath.PI_OVER_TWO&&(c=!0,l=n.Cartesian3.subtract(o,a,Oe),h=u.cartesianToCartographic(l,_e)),h.height=0;const C=e.project(h,s);return(s=n.Cartesian3.subtract(C,r,s)).z=0,s=n.Cartesian3.normalize(s,s),c&&n.Cartesian3.negate(s,s),s}const xe=new n.Cartesian3,Ie=new n.Cartesian3;function Le(e,t,a,i,r,s){const o=n.Cartesian3.subtract(t,e,xe);n.Cartesian3.normalize(o,o);const l=a-X;let c=n.Cartesian3.multiplyByScalar(o,l,Ie);n.Cartesian3.add(e,c,r);const u=i-j;c=n.Cartesian3.multiplyByScalar(o,u,Ie),n.Cartesian3.add(t,c,s)}const Se=new n.Cartesian3;function Ne(e,t){const a=p.Plane.getPointDistance(le,e),r=p.Plane.getPointDistance(le,t);let s=Se;i.CesiumMath.equalsEpsilon(a,0,i.CesiumMath.EPSILON2)?(s=te(t,e,s),n.Cartesian3.multiplyByScalar(s,i.CesiumMath.EPSILON2,s),n.Cartesian3.add(e,s,e)):i.CesiumMath.equalsEpsilon(r,0,i.CesiumMath.EPSILON2)&&(s=te(e,t,s),n.Cartesian3.multiplyByScalar(s,i.CesiumMath.EPSILON2,s),n.Cartesian3.add(t,s,t))}function Ae(e,t){const n=Math.abs(e.longitude),a=Math.abs(t.longitude);if(i.CesiumMath.equalsEpsilon(n,i.CesiumMath.PI,i.CesiumMath.EPSILON11)){const a=i.CesiumMath.sign(t.longitude);return e.longitude=a*(n-i.CesiumMath.EPSILON11),1}if(i.CesiumMath.equalsEpsilon(a,i.CesiumMath.PI,i.CesiumMath.EPSILON11)){const n=i.CesiumMath.sign(e.longitude);return t.longitude=n*(a-i.CesiumMath.EPSILON11),2}return 0}const Pe=new n.Cartographic,ke=new n.Cartographic,ve=new n.Cartesian3,Re=new n.Cartesian3,De=new n.Cartesian3,Ve=new n.Cartesian3,ze=new n.Cartesian3,Ye=new n.Cartesian3,He=[Pe,ke],Xe=new t.Rectangle,je=new n.Cartesian3,Be=new n.Cartesian3,Ge=new n.Cartesian3,Ze=new n.Cartesian3,Fe=new n.Cartesian3,qe=new n.Cartesian3,We=new n.Cartesian3,Ue=new n.Cartesian3,$e=new n.Cartesian3,Je=new n.Cartesian3,Qe=new n.Cartesian3,Ke=new n.Cartesian3,et=new n.Cartesian3,tt=new n.Cartesian3,nt=new h.EncodedCartesian3,at=new h.EncodedCartesian3,it=new n.Cartesian3,rt=new n.Cartesian3,st=new n.Cartesian3,ot=[new e.BoundingSphere,new e.BoundingSphere],lt=[0,2,1,0,3,2,0,7,3,0,4,7,0,5,4,0,1,5,5,7,4,5,6,7,5,2,6,5,1,2,3,6,2,3,7,6],ct=lt.length;function ut(e){return new C.GeometryAttribute({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:4,normalize:!1,values:e})}return B._projectNormal=be,function(e,t,n){return D.initialize().then((function(){return a.defined(t)&&(e=B.unpack(e,t,void 0,n)),B.createGeometry(e)}))}}));
