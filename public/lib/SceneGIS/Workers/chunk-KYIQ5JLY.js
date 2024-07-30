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

import{a as m}from"./chunk-YRE67PY5.js";import{c as y}from"./chunk-KXWBEOUA.js";import{a}from"./chunk-2F4MHS2T.js";import{e as l}from"./chunk-A5XXOFX2.js";var t={west:248e3,south:253e3,east:408e3,north:413e3};function n(e){e=a(e,a.EMPTY_OBJECT);let r=a(e.bounds,[t.west,t.south,t.east,t.north]);t={west:r[0],south:r[1],east:r[2],north:r[3]},this._numberOfLevelZeroTilesX=a(e.numberOfLevelZeroTilesX,1),this._numberOfLevelZeroTilesY=a(e.numberOfLevelZeroTilesY,1),l(e.rectangleSouthwestInMeters)&&l(e.rectangleNortheastInMeters)?(this._rectangleSouthwestInMeters=e.rectangleSouthwestInMeters,this._rectangleNortheastInMeters=e.rectangleNortheastInMeters):(this._rectangleSouthwestInMeters=new y(t.west,t.south),this._rectangleNortheastInMeters=new y(t.east,t.north)),this._rectangle=new m(t.west,t.south,t.east,t.north)}n.define=function(e){t=e,n.xy=t,n.width=t.east-t.west,n.height=t.north-t.south};n.xy=t;n.width=t.east-t.west;n.height=t.north-t.south;n.definexy={west:248e3,south:253e3,east:408e3,north:413e3};Object.defineProperties(n.prototype,{rectangle:{get:function(){return this._rectangle}}});n.prototype.getNumberOfXTilesAtLevel=function(e){return this._numberOfLevelZeroTilesX<<e};n.prototype.getNumberOfYTilesAtLevel=function(e){return this._numberOfLevelZeroTilesY<<e};n.prototype.rectangleToNativeRectangle=function(e,r){return r=e,r};n.prototype.tileXYToNativeRectangle=function(e,r,i,s){let o=this.getNumberOfXTilesAtLevel(i),_=this.getNumberOfYTilesAtLevel(i),c=(this._rectangleNortheastInMeters.x-this._rectangleSouthwestInMeters.x)/o,w=this._rectangleSouthwestInMeters.x+e*c,u=this._rectangleSouthwestInMeters.x+(e+1)*c,g=(this._rectangleNortheastInMeters.y-this._rectangleSouthwestInMeters.y)/_,f=this._rectangleNortheastInMeters.y-r*g,h=this._rectangleNortheastInMeters.y-(r+1)*g;return l(s)?(s.west=w,s.south=h,s.east=u,s.north=f,s):new m(w,h,u,f)};n.prototype.tileXYToRectangle=function(e,r,i,s){return this.tileXYToNativeRectangle(e,r,i,s)};n.prototype.positionToTileXY=function(e,r,i){e.constructor.name==="Cartographic"&&(e.x=e.longitude,e.y=e.latitude,e.z=e.height);let s=this.getNumberOfXTilesAtLevel(r),o=this.getNumberOfYTilesAtLevel(r),c=(this._rectangleNortheastInMeters.x-this._rectangleSouthwestInMeters.x)/s,u=(this._rectangleNortheastInMeters.y-this._rectangleSouthwestInMeters.y)/o,g=e.x-this._rectangleSouthwestInMeters.x,f=this._rectangleNortheastInMeters.y-e.y,h=g/c|0;h>=s&&(h=s-1);let T=f/u|0;return T>=o&&(T=o-1),l(i)?(i.x=h,i.y=T,i):new y(h,T)};n.nj08ToDefineXY=function(e,r,i){let o=new n({bounds:[-200375494e-1,-1999260618e-2,199926046e-1,2003754782e-2]}).positionToTileXY({x:n.definexy.west,y:n.definexy.north},i+7);return{x:o.x+e,y:o.y+r,level:i+7}};var N=n;export{N as a};
