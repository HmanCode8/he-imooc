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
define(["exports","./AxisAlignedBoundingBox-db6aba43","./Matrix2-dca1b63d","./Matrix3-fe947601","./defaultValue-192c850d","./IntersectionTests-35826260","./Plane-d57be61c","./Transforms-38ce56dd"],(function(t,n,e,i,o,s,r,a){"use strict";const l=new e.Cartesian4;function c(t,n,s){n=o.defaultValue(n,i.Ellipsoid.WGS84),!0===(s=o.defaultValue(s,!1))||(t=n.scaleToGeodeticSurface(t));const c=a.Transforms.eastNorthUpToFixedFrame(t,n);if(this._ellipsoid=n,this._origin=t,this._xAxis=i.Cartesian3.fromCartesian4(e.Matrix4.getColumn(c,0,l)),!0===s){this._xAxis=new i.Cartesian3(1,0,0),this._yAxis=new i.Cartesian3(0,1,0);const n=new i.Cartesian3(0,0,1);this._plane=r.Plane.fromPointNormal(t,n)}else{this._yAxis=i.Cartesian3.fromCartesian4(e.Matrix4.getColumn(c,1,l));const n=i.Cartesian3.fromCartesian4(e.Matrix4.getColumn(c,2,l));this._plane=r.Plane.fromPointNormal(t,n)}}Object.defineProperties(c.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});const d=new n.AxisAlignedBoundingBox;c.fromPoints=function(t,e,i){return new c(n.AxisAlignedBoundingBox.fromPoints(t,d).center,e,i)};const f=new s.Ray,p=new i.Cartesian3;c.prototype.projectPointOntoPlane=function(t,n){const r=f;r.origin=t,i.Cartesian3.normalize(t,r.direction);let a=s.IntersectionTests.rayPlane(r,this._plane,p);if(o.defined(a)||(i.Cartesian3.negate(r.direction,r.direction),a=s.IntersectionTests.rayPlane(r,this._plane,p)),o.defined(a)){const t=i.Cartesian3.subtract(a,this._origin,a),s=i.Cartesian3.dot(this._xAxis,t),r=i.Cartesian3.dot(this._yAxis,t);return o.defined(n)?(n.x=s,n.y=r,n):new e.Cartesian2(s,r)}},c.prototype.projectPointsOntoPlane=function(t,n){o.defined(n)||(n=[]);let e=0;const i=t.length;for(let s=0;s<i;s++){const i=this.projectPointOntoPlane(t[s],n[e]);o.defined(i)&&(n[e]=i,e++)}return n.length=e,n},c.prototype.projectPointToNearestOnPlane=function(t,n){o.defined(n)||(n=new e.Cartesian2);const r=f;r.origin=t,i.Cartesian3.clone(this._plane.normal,r.direction);let a=s.IntersectionTests.rayPlane(r,this._plane,p);o.defined(a)||(i.Cartesian3.negate(r.direction,r.direction),a=s.IntersectionTests.rayPlane(r,this._plane,p));const l=i.Cartesian3.subtract(a,this._origin,a),c=i.Cartesian3.dot(this._xAxis,l),d=i.Cartesian3.dot(this._yAxis,l);return n.x=c,n.y=d,n},c.prototype.projectPointsToNearestOnPlane=function(t,n){o.defined(n)||(n=[]);const e=t.length;n.length=e;for(let i=0;i<e;i++)n[i]=this.projectPointToNearestOnPlane(t[i],n[i]);return n};const u=new i.Cartesian3;c.prototype.projectPointOntoEllipsoid=function(t,n){o.defined(n)||(n=new i.Cartesian3);const e=this._ellipsoid,s=this._origin,r=this._xAxis,a=this._yAxis,l=u;return i.Cartesian3.multiplyByScalar(r,t.x,l),n=i.Cartesian3.add(s,l,n),i.Cartesian3.multiplyByScalar(a,t.y,l),i.Cartesian3.add(n,l,n),e.scaleToGeocentricSurface(n,n),n},c.prototype.projectPointsOntoEllipsoid=function(t,n){const e=t.length;o.defined(n)?n.length=e:n=new Array(e);for(let i=0;i<e;++i)n[i]=this.projectPointOntoEllipsoid(t[i],n[i]);return n},t.EllipsoidTangentPlane=c}));
