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

import{a as y}from"./chunk-42ISZ2GD.js";import{a as O,b as m}from"./chunk-JWYDD254.js";import{a as P}from"./chunk-EJ4R6WJQ.js";import{i as j}from"./chunk-JJFA6IXC.js";import{a as u,b as h}from"./chunk-CJEZWAOI.js";import{a as e,c as x,d as A}from"./chunk-KXWBEOUA.js";import{a as d}from"./chunk-2F4MHS2T.js";import{a as g,b as p}from"./chunk-3Z2AZRQC.js";import{e as s}from"./chunk-A5XXOFX2.js";var _=new u;function c(n,t,o){if(p.defined("origin",n),t=d(t,A.WGS84),o=d(o,!1),o===!0?n=n:n=t.scaleToGeodeticSurface(n),!s(n))throw new g("origin must not be at the center of the ellipsoid.");let i=j.eastNorthUpToFixedFrame(n,t);if(this._ellipsoid=t,this._origin=n,this._xAxis=e.fromCartesian4(h.getColumn(i,0,_)),o===!0){this._xAxis=new e(1,0,0),this._yAxis=new e(0,1,0);let r=new e(0,0,1);this._plane=P.fromPointNormal(n,r)}else{this._yAxis=e.fromCartesian4(h.getColumn(i,1,_));let r=e.fromCartesian4(h.getColumn(i,2,_));this._plane=P.fromPointNormal(n,r)}}Object.defineProperties(c.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},origin:{get:function(){return this._origin}},plane:{get:function(){return this._plane}},xAxis:{get:function(){return this._xAxis}},yAxis:{get:function(){return this._yAxis}},zAxis:{get:function(){return this._plane.normal}}});var C=new y;c.fromPoints=function(n,t,o){p.defined("cartesians",n);let i=y.fromPoints(n,C);return new c(i.center,t,o)};var w=new O,l=new e;c.prototype.projectPointOntoPlane=function(n,t){p.defined("cartesian",n);let o=w;o.origin=n,e.normalize(n,o.direction);let i=m.rayPlane(o,this._plane,l);if(s(i)||(e.negate(o.direction,o.direction),i=m.rayPlane(o,this._plane,l)),s(i)){let r=e.subtract(i,this._origin,i),a=e.dot(this._xAxis,r),f=e.dot(this._yAxis,r);return s(t)?(t.x=a,t.y=f,t):new x(a,f)}};c.prototype.projectPointsOntoPlane=function(n,t){p.defined("cartesians",n),s(t)||(t=[]);let o=0,i=n.length;for(let r=0;r<i;r++){let a=this.projectPointOntoPlane(n[r],t[o]);s(a)&&(t[o]=a,o++)}return t.length=o,t};c.prototype.projectPointToNearestOnPlane=function(n,t){p.defined("cartesian",n),s(t)||(t=new x);let o=w;o.origin=n,e.clone(this._plane.normal,o.direction);let i=m.rayPlane(o,this._plane,l);s(i)||(e.negate(o.direction,o.direction),i=m.rayPlane(o,this._plane,l));let r=e.subtract(i,this._origin,i),a=e.dot(this._xAxis,r),f=e.dot(this._yAxis,r);return t.x=a,t.y=f,t};c.prototype.projectPointsToNearestOnPlane=function(n,t){p.defined("cartesians",n),s(t)||(t=[]);let o=n.length;t.length=o;for(let i=0;i<o;i++)t[i]=this.projectPointToNearestOnPlane(n[i],t[i]);return t};var T=new e;c.prototype.projectPointOntoEllipsoid=function(n,t){p.defined("cartesian",n),s(t)||(t=new e);let o=this._ellipsoid,i=this._origin,r=this._xAxis,a=this._yAxis,f=T;return e.multiplyByScalar(r,n.x,f),t=e.add(i,f,t),e.multiplyByScalar(a,n.y,f),e.add(t,f,t),o.scaleToGeocentricSurface(t,t),t};c.prototype.projectPointsOntoEllipsoid=function(n,t){p.defined("cartesians",n);let o=n.length;s(t)?t.length=o:t=new Array(o);for(let i=0;i<o;++i)t[i]=this.projectPointOntoEllipsoid(n[i],t[i]);return t};var M=c;export{M as a};
