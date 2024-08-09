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
define(["exports","./Matrix2-dca1b63d","./defaultValue-192c850d","./CartesianRectangle-0be16a49"],(function(e,t,n,s){"use strict";let r={west:248e3,south:253e3,east:408e3,north:413e3};function i(e){e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT);const i=n.defaultValue(e.bounds,[r.west,r.south,r.east,r.north]);r={west:i[0],south:i[1],east:i[2],north:i[3]},this._numberOfLevelZeroTilesX=n.defaultValue(e.numberOfLevelZeroTilesX,1),this._numberOfLevelZeroTilesY=n.defaultValue(e.numberOfLevelZeroTilesY,1),n.defined(e.rectangleSouthwestInMeters)&&n.defined(e.rectangleNortheastInMeters)?(this._rectangleSouthwestInMeters=e.rectangleSouthwestInMeters,this._rectangleNortheastInMeters=e.rectangleNortheastInMeters):(this._rectangleSouthwestInMeters=new t.Cartesian2(r.west,r.south),this._rectangleNortheastInMeters=new t.Cartesian2(r.east,r.north)),this._rectangle=new s.CartesianRectangle(r.west,r.south,r.east,r.north)}i.define=function(e){r=e,i.xy=r,i.width=r.east-r.west,i.height=r.north-r.south},i.xy=r,i.width=r.east-r.west,i.height=r.north-r.south,i.definexy={west:248e3,south:253e3,east:408e3,north:413e3},Object.defineProperties(i.prototype,{rectangle:{get:function(){return this._rectangle}}}),i.prototype.getNumberOfXTilesAtLevel=function(e){return this._numberOfLevelZeroTilesX<<e},i.prototype.getNumberOfYTilesAtLevel=function(e){return this._numberOfLevelZeroTilesY<<e},i.prototype.rectangleToNativeRectangle=function(e,t){return e},i.prototype.tileXYToNativeRectangle=function(e,t,r,i){const o=this.getNumberOfXTilesAtLevel(r),a=this.getNumberOfYTilesAtLevel(r),l=(this._rectangleNortheastInMeters.x-this._rectangleSouthwestInMeters.x)/o,h=this._rectangleSouthwestInMeters.x+e*l,u=this._rectangleSouthwestInMeters.x+(e+1)*l,c=(this._rectangleNortheastInMeters.y-this._rectangleSouthwestInMeters.y)/a,g=this._rectangleNortheastInMeters.y-t*c,f=this._rectangleNortheastInMeters.y-(t+1)*c;return n.defined(i)?(i.west=h,i.south=f,i.east=u,i.north=g,i):new s.CartesianRectangle(h,f,u,g)},i.prototype.tileXYToRectangle=function(e,t,n,s){return this.tileXYToNativeRectangle(e,t,n,s)},i.prototype.positionToTileXY=function(e,s,r){"Cartographic"===e.constructor.name&&(e.x=e.longitude,e.y=e.latitude,e.z=e.height);const i=this.getNumberOfXTilesAtLevel(s),o=this.getNumberOfYTilesAtLevel(s),a=(this._rectangleNortheastInMeters.x-this._rectangleSouthwestInMeters.x)/i,l=(this._rectangleNortheastInMeters.y-this._rectangleSouthwestInMeters.y)/o;let h=(e.x-this._rectangleSouthwestInMeters.x)/a|0;h>=i&&(h=i-1);let u=(this._rectangleNortheastInMeters.y-e.y)/l|0;return u>=o&&(u=o-1),n.defined(r)?(r.x=h,r.y=u,r):new t.Cartesian2(h,u)},i.nj08ToDefineXY=function(e,t,n){const s=new i({bounds:[-20037549.4,-19992606.18,19992604.6,20037547.82]}).positionToTileXY({x:i.definexy.west,y:i.definexy.north},n+7);return{x:s.x+e,y:s.y+t,level:n+7}},e.CartesianTilingScheme=i}));
