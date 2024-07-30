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
define(["./AttributeCompression-cb62dc59","./Transforms-c38817cd","./Matrix2-bce7772b","./Matrix3-a45402cf","./defaultValue-192c850d","./TerrainEncoding-432a4214","./IndexDatatype-1ff811be","./Math-be2c8494","./OrientedBoundingBox-d8d8ede3","./createTaskProcessorWorker","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./RuntimeError-ca280330","./EllipsoidTangentPlane-b1a9b8da","./AxisAlignedBoundingBox-e6370b82","./IntersectionTests-f861e6a9","./Plane-f4b01105","./CartesianRectangle-3289fb67"],(function(e,t,n,i,s,r,h,o,u,d,p,l,a,c,f,g,m,x,w,C){"use strict";const B={clipTriangleAtAxisAlignedThreshold:function(e,t,n,i,r,h){let o,u,d;s.defined(h)?h.length=0:h=[],t?(o=n<e,u=i<e,d=r<e):(o=n>e,u=i>e,d=r>e);const p=o+u+d;let l,a,c,f,g,m;return 1===p?o?(l=(e-n)/(i-n),a=(e-n)/(r-n),h.push(1),h.push(2),1!==a&&(h.push(-1),h.push(0),h.push(2),h.push(a)),1!==l&&(h.push(-1),h.push(0),h.push(1),h.push(l))):u?(c=(e-i)/(r-i),f=(e-i)/(n-i),h.push(2),h.push(0),1!==f&&(h.push(-1),h.push(1),h.push(0),h.push(f)),1!==c&&(h.push(-1),h.push(1),h.push(2),h.push(c))):d&&(g=(e-r)/(n-r),m=(e-r)/(i-r),h.push(0),h.push(1),1!==m&&(h.push(-1),h.push(2),h.push(1),h.push(m)),1!==g&&(h.push(-1),h.push(2),h.push(0),h.push(g))):2===p?o||n===e?u||i===e?d||r===e||(a=(e-n)/(r-n),c=(e-i)/(r-i),h.push(2),h.push(-1),h.push(0),h.push(2),h.push(a),h.push(-1),h.push(1),h.push(2),h.push(c)):(m=(e-r)/(i-r),l=(e-n)/(i-n),h.push(1),h.push(-1),h.push(2),h.push(1),h.push(m),h.push(-1),h.push(0),h.push(1),h.push(l)):(f=(e-i)/(n-i),g=(e-r)/(n-r),h.push(0),h.push(-1),h.push(1),h.push(0),h.push(f),h.push(-1),h.push(2),h.push(0),h.push(g)):3!==p&&(h.push(0),h.push(1),h.push(2)),h},computeBarycentricCoordinates:function(e,t,n,r,h,o,u,d,p){const l=n-u,a=u-h,c=o-d,f=r-d,g=1/(c*l+a*f),m=t-d,x=e-u,w=(c*x+a*m)*g,C=(-f*x+l*m)*g,B=1-w-C;return s.defined(p)?(p.x=w,p.y=C,p.z=B,p):new i.Cartesian3(w,C,B)},computeLineSegmentLineSegmentIntersection:function(e,t,i,r,h,o,u,d,p){const l=(d-o)*(i-e)-(u-h)*(r-t);if(0===l)return;const a=((u-h)*(t-o)-(d-o)*(e-h))/l,c=((i-e)*(t-o)-(r-t)*(e-h))/l;return a>=0&&a<=1&&c>=0&&c<=1?(s.defined(p)||(p=new n.Cartesian2),p.x=e+a*(i-e),p.y=t+a*(r-t),p):void 0}};var y=B;const b=32767,I=16383,A=[],v=[],T=[],M=new i.Cartographic;let z=new i.Cartesian3;const V=[],N=[],E=[],R=[],H=[],O=new i.Cartesian3,S=new t.BoundingSphere,U=new u.OrientedBoundingBox,F=new n.Cartesian2,P=new i.Cartesian3;function D(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}D.prototype.clone=function(e){return s.defined(e)||(e=new D),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},D.prototype.initializeIndexed=function(e,t,n,i,s){this.uBuffer=e,this.vBuffer=t,this.heightBuffer=n,this.normalBuffer=i,this.index=s,this.first=void 0,this.second=void 0,this.ratio=void 0},D.prototype.initializeFromClipResult=function(e,t,n){let i=t+1;return-1!==e[t]?n[e[t]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=n[e[i]],++i,this.second=n[e[i]],++i,this.ratio=e[i],++i),i},D.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},D.prototype.isIndexed=function(){return s.defined(this.index)},D.prototype.getH=function(){return s.defined(this.index)?this.heightBuffer[this.index]:o.CesiumMath.lerp(this.first.getH(),this.second.getH(),this.ratio)},D.prototype.getU=function(){return s.defined(this.index)?this.uBuffer[this.index]:o.CesiumMath.lerp(this.first.getU(),this.second.getU(),this.ratio)},D.prototype.getV=function(){return s.defined(this.index)?this.vBuffer[this.index]:o.CesiumMath.lerp(this.first.getV(),this.second.getV(),this.ratio)};let W=new n.Cartesian2,X=-1;const k=[new i.Cartesian3,new i.Cartesian3],K=[new i.Cartesian3,new i.Cartesian3];function L(t,n){++X;let s=k[X],r=K[X];return s=e.AttributeCompression.octDecode(t.first.getNormalX(),t.first.getNormalY(),s),r=e.AttributeCompression.octDecode(t.second.getNormalX(),t.second.getNormalY(),r),z=i.Cartesian3.lerp(s,r,t.ratio,z),i.Cartesian3.normalize(z,z),e.AttributeCompression.octEncode(z,n),--X,n}D.prototype.getNormalX=function(){return s.defined(this.index)?this.normalBuffer[2*this.index]:(W=L(this,W),W.x)},D.prototype.getNormalY=function(){return s.defined(this.index)?this.normalBuffer[2*this.index+1]:(W=L(this,W),W.y)};const Y=[];function _(e,t,n,i,r,h,o,u,d){if(0===o.length)return;let p=0,l=0;for(;l<o.length;)l=Y[p++].initializeFromClipResult(o,l,u);for(let r=0;r<p;++r){const o=Y[r];if(o.isIndexed())o.newIndex=h[o.index],o.uBuffer=e,o.vBuffer=t,o.heightBuffer=n,d&&(o.normalBuffer=i);else{const r=o.getKey();if(s.defined(h[r]))o.newIndex=h[r];else{const s=e.length;e.push(o.getU()),t.push(o.getV()),n.push(o.getH()),d&&(i.push(o.getNormalX()),i.push(o.getNormalY())),o.newIndex=s,h[r]=s}}}3===p?(r.push(Y[0].newIndex),r.push(Y[1].newIndex),r.push(Y[2].newIndex)):4===p&&(r.push(Y[0].newIndex),r.push(Y[1].newIndex),r.push(Y[2].newIndex),r.push(Y[0].newIndex),r.push(Y[2].newIndex),r.push(Y[3].newIndex))}return Y.push(new D),Y.push(new D),Y.push(new D),Y.push(new D),d((function(e,s){const d=e.isEastChild,p=e.isNorthChild,l=d?I:0,a=d?b:I,c=p?I:0,f=p?b:I,g=V,m=N,x=E,w=H;g.length=0,m.length=0,x.length=0,w.length=0;const C=R;C.length=0;const B={},W=e.vertices;let X=e.indices;X=X.subarray(0,e.indexCountWithoutSkirts);const k=r.TerrainEncoding.clone(e.encoding),K=k.hasVertexNormals;let L=0;const Y=e.vertexCountWithoutSkirts,j=e.minimumHeight,G=e.maximumHeight,J=new Array(Y),Z=new Array(Y),q=new Array(Y),Q=K?new Array(2*Y):void 0;let $,ee,te,ne,ie;for(ee=0,te=0;ee<Y;++ee,te+=2){const e=k.decodeTextureCoordinates(W,ee,F);if($=k.decodeHeight(W,ee),ne=o.CesiumMath.clamp(e.x*b|0,0,b),ie=o.CesiumMath.clamp(e.y*b|0,0,b),q[ee]=o.CesiumMath.clamp(($-j)/(G-j)*b|0,0,b),ne<20&&(ne=0),ie<20&&(ie=0),b-ne<20&&(ne=b),b-ie<20&&(ie=b),J[ee]=ne,Z[ee]=ie,K){const e=k.getOctEncodedNormal(W,ee,P);Q[te]=e.x,Q[te+1]=e.y}(d&&ne>=I||!d&&ne<=I)&&(p&&ie>=I||!p&&ie<=I)&&(B[ee]=L,g.push(ne),m.push(ie),x.push(q[ee]),K&&(w.push(Q[te]),w.push(Q[te+1])),++L)}const se=[];se.push(new D),se.push(new D),se.push(new D);const re=[];let he,oe;for(re.push(new D),re.push(new D),re.push(new D),ee=0;ee<X.length;ee+=3){const e=X[ee],t=X[ee+1],n=X[ee+2],i=J[e],s=J[t],r=J[n];se[0].initializeIndexed(J,Z,q,Q,e),se[1].initializeIndexed(J,Z,q,Q,t),se[2].initializeIndexed(J,Z,q,Q,n);const h=y.clipTriangleAtAxisAlignedThreshold(I,d,i,s,r,A);he=0,he>=h.length||(he=re[0].initializeFromClipResult(h,he,se),he>=h.length||(he=re[1].initializeFromClipResult(h,he,se),he>=h.length||(he=re[2].initializeFromClipResult(h,he,se),oe=y.clipTriangleAtAxisAlignedThreshold(I,p,re[0].getV(),re[1].getV(),re[2].getV(),v),_(g,m,x,w,C,B,oe,re,K),he<h.length&&(re[2].clone(re[1]),re[2].initializeFromClipResult(h,he,se),oe=y.clipTriangleAtAxisAlignedThreshold(I,p,re[0].getV(),re[1].getV(),re[2].getV(),v),_(g,m,x,w,C,B,oe,re,K)))))}const ue=d?-32767:0,de=p?-32767:0,pe=[],le=[],ae=[],ce=[];let fe=Number.MAX_VALUE,ge=-fe;const me=T;me.length=0;const xe=i.Ellipsoid.clone(e.ellipsoid),we=n.Rectangle.clone(e.childRectangle),Ce=we.north,Be=we.south;let ye=we.east;const be=we.west;for(ye<be&&(ye+=o.CesiumMath.TWO_PI),ee=0;ee<g.length;++ee)ne=Math.round(g[ee]),ne<=l?(pe.push(ee),ne=0):ne>=a?(ae.push(ee),ne=b):ne=2*ne+ue,g[ee]=ne,ie=Math.round(m[ee]),ie<=c?(le.push(ee),ie=0):ie>=f?(ce.push(ee),ie=b):ie=2*ie+de,m[ee]=ie,$=o.CesiumMath.lerp(j,G,x[ee]/b),$<fe&&(fe=$),$>ge&&(ge=$),x[ee]=$,M.longitude=o.CesiumMath.lerp(be,ye,ne/b),M.latitude=o.CesiumMath.lerp(Be,Ce,ie/b),M.height=$,xe.cartographicToCartesian(M,z),me.push(z.x),me.push(z.y),me.push(z.z);const Ie=t.BoundingSphere.fromVertices(me,i.Cartesian3.ZERO,3,S),Ae=u.OrientedBoundingBox.fromRectangle(we,fe,ge,xe,U),ve=new r.EllipsoidalOccluder(xe).computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(Ie.center,me,3,Ie.center,fe,O),Te=ge-fe,Me=new Uint16Array(g.length+m.length+x.length);for(ee=0;ee<g.length;++ee)Me[ee]=g[ee];let ze=g.length;for(ee=0;ee<m.length;++ee)Me[ze+ee]=m[ee];for(ze+=m.length,ee=0;ee<x.length;++ee)Me[ze+ee]=b*(x[ee]-fe)/Te;const Ve=h.IndexDatatype.createTypedArray(g.length,C);let Ne;if(K){const e=new Uint8Array(w);s.push(Me.buffer,Ve.buffer,e.buffer),Ne=e.buffer}else s.push(Me.buffer,Ve.buffer);return{vertices:Me.buffer,encodedNormals:Ne,indices:Ve.buffer,minimumHeight:fe,maximumHeight:ge,westIndices:pe,southIndices:le,eastIndices:ae,northIndices:ce,boundingSphere:Ie,orientedBoundingBox:Ae,horizonOcclusionPoint:ve}}))}));
