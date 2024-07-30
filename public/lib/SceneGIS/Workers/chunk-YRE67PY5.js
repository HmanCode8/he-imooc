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

import{a as y,b as E,d as b}from"./chunk-KXWBEOUA.js";import{a as f}from"./chunk-4BEFMW7D.js";import{a as p}from"./chunk-2F4MHS2T.js";import{b as a}from"./chunk-3Z2AZRQC.js";import{e as w}from"./chunk-A5XXOFX2.js";function h(t,o,n,e){this.west=p(t,0),this.south=p(o,0),this.east=p(n,0),this.north=p(e,0)}Object.defineProperties(h.prototype,{width:{get:function(){return h.computeWidth(this)}},height:{get:function(){return h.computeHeight(this)}}});h.packedLength=4;h.pack=function(t,o,n){return a.typeOf.object("value",t),a.defined("array",o),n=p(n,0),o[n++]=t.west,o[n++]=t.south,o[n++]=t.east,o[n]=t.north,o};h.unpack=function(t,o,n){return a.defined("array",t),o=p(o,0),w(n)||(n=new h),n.west=t[o++],n.south=t[o++],n.east=t[o++],n.north=t[o],n};h.computeWidth=function(t){a.typeOf.object("rectangle",t);let o=t.east,n=t.west;return o<n&&(o+=f.TWO_PI),o-n};h.computeHeight=function(t){return a.typeOf.object("rectangle",t),t.north-t.south};h.fromDegrees=function(t,o,n,e,i){return t=f.toRadians(p(t,0)),o=f.toRadians(p(o,0)),n=f.toRadians(p(n,0)),e=f.toRadians(p(e,0)),w(i)?(i.west=t,i.south=o,i.east=n,i.north=e,i):new h(t,o,n,e)};h.fromRadians=function(t,o,n,e,i){return w(i)?(i.west=p(t,0),i.south=p(o,0),i.east=p(n,0),i.north=p(e,0),i):new h(t,o,n,e)};h.fromCartographicArray=function(t,o){a.defined("cartographics",t);let n=Number.MAX_VALUE,e=-Number.MAX_VALUE,i=Number.MAX_VALUE,s=-Number.MAX_VALUE,O=Number.MAX_VALUE,m=-Number.MAX_VALUE;for(let d=0,u=t.length;d<u;d++){let M=t[d];n=Math.min(n,M.longitude),e=Math.max(e,M.longitude),O=Math.min(O,M.latitude),m=Math.max(m,M.latitude);let T=M.longitude>=0?M.longitude:M.longitude+f.TWO_PI;i=Math.min(i,T),s=Math.max(s,T)}return e-n>s-i&&(n=i,e=s,e>f.PI&&(e=e-f.TWO_PI),n>f.PI&&(n=n-f.TWO_PI)),w(o)?(o.west=n,o.south=O,o.east=e,o.north=m,o):new h(n,O,e,m)};h.fromCartesianArray=function(t,o,n){a.defined("cartesians",t),o=p(o,b.WGS84);let e=Number.MAX_VALUE,i=-Number.MAX_VALUE,s=Number.MAX_VALUE,O=-Number.MAX_VALUE,m=Number.MAX_VALUE,d=-Number.MAX_VALUE;for(let u=0,M=t.length;u<M;u++){let T=o.cartesianToCartographic(t[u]);e=Math.min(e,T.longitude),i=Math.max(i,T.longitude),m=Math.min(m,T.latitude),d=Math.max(d,T.latitude);let P=T.longitude>=0?T.longitude:T.longitude+f.TWO_PI;s=Math.min(s,P),O=Math.max(O,P)}return i-e>O-s&&(e=s,i=O,i>f.PI&&(i=i-f.TWO_PI),e>f.PI&&(e=e-f.TWO_PI)),w(n)?(n.west=e,n.south=m,n.east=i,n.north=d,n):new h(e,m,i,d)};h.clone=function(t,o){if(w(t))return w(o)?(o.west=t.west,o.south=t.south,o.east=t.east,o.north=t.north,o):new h(t.west,t.south,t.east,t.north)};h.equalsEpsilon=function(t,o,n){return n=p(n,0),t===o||w(t)&&w(o)&&Math.abs(t.west-o.west)<=n&&Math.abs(t.south-o.south)<=n&&Math.abs(t.east-o.east)<=n&&Math.abs(t.north-o.north)<=n};h.prototype.clone=function(t){return h.clone(this,t)};h.prototype.equals=function(t){return h.equals(this,t)};h.equals=function(t,o){return t===o||w(t)&&w(o)&&t.west===o.west&&t.south===o.south&&t.east===o.east&&t.north===o.north};h.prototype.equalsEpsilon=function(t,o){return h.equalsEpsilon(this,t,o)};h.validate=function(t){a.typeOf.object("rectangle",t);let o=t.north;a.typeOf.number.greaterThanOrEquals("north",o,-f.PI_OVER_TWO),a.typeOf.number.lessThanOrEquals("north",o,f.PI_OVER_TWO);let n=t.south;a.typeOf.number.greaterThanOrEquals("south",n,-f.PI_OVER_TWO),a.typeOf.number.lessThanOrEquals("south",n,f.PI_OVER_TWO);let e=t.west;a.typeOf.number.greaterThanOrEquals("west",e,-Math.PI),a.typeOf.number.lessThanOrEquals("west",e,Math.PI);let i=t.east;a.typeOf.number.greaterThanOrEquals("east",i,-Math.PI),a.typeOf.number.lessThanOrEquals("east",i,Math.PI)};h.southwest=function(t,o){return a.typeOf.object("rectangle",t),w(o)?(o.x=t.west,o.y=t.south,o.height=0,o):{x:t.west,y:t.south,height:0}};h.northwest=function(t,o){return a.typeOf.object("rectangle",t),w(o)?(o.longitude=t.west,o.latitude=t.north,o.height=0,o):{x:t.west,y:t.north,height:0}};h.northeast=function(t,o){return a.typeOf.object("rectangle",t),w(o)?(o.longitude=t.east,o.latitude=t.north,o.height=0,o):{x:t.east,y:t.north,height:0}};h.southeast=function(t,o){return a.typeOf.object("rectangle",t),w(o)?(o.longitude=t.east,o.latitude=t.south,o.height=0,o):{x:t.east,y:t.south,height:0}};h.center=function(t,o){a.typeOf.object("rectangle",t);let n=t.east,i=(t.west+n)*.5,s=(t.south+t.north)*.5;return w(o)?(o.x=i,o.y=s,o.z=0,o):new y(i,s,0)};h.intersection=function(t,o,n){a.typeOf.object("rectangle",t),a.typeOf.object("otherRectangle",o);let e=t.east,i=t.west,s=o.east,O=o.west;e<i&&s>0?e+=f.TWO_PI:s<O&&e>0&&(s+=f.TWO_PI),e<i&&O<0?O+=f.TWO_PI:s<O&&i<0&&(i+=f.TWO_PI);let m=f.negativePiToPi(Math.max(i,O)),d=f.negativePiToPi(Math.min(e,s));if((t.west<t.east||o.west<o.east)&&d<=m)return;let u=Math.max(t.south,o.south),M=Math.min(t.north,o.north);if(!(u>=M))return w(n)?(n.west=m,n.south=u,n.east=d,n.north=M,n):new h(m,u,d,M)};h.intersection1=function(t,o,n){let e=t.east,i=t.west,s=o.east,O=o.west,m=Math.max(t.west,o.west),d=Math.min(t.east,o.east);if((t.west<t.east||o.west<o.east)&&d<=m)return;let u=Math.max(t.south,o.south),M=Math.min(t.north,o.north);if(!(u>=M))return w(n)?(n.west=m,n.south=u,n.east=d,n.north=M,n):new h(m,u,d,M)};h.simpleIntersection=function(t,o,n){a.typeOf.object("rectangle",t),a.typeOf.object("otherRectangle",o);let e=Math.max(t.west,o.west),i=Math.max(t.south,o.south),s=Math.min(t.east,o.east),O=Math.min(t.north,o.north);if(!(i>=O||e>=s))return w(n)?(n.west=e,n.south=i,n.east=s,n.north=O,n):new h(e,i,s,O)};h.union=function(t,o,n){a.typeOf.object("rectangle",t),a.typeOf.object("otherRectangle",o),w(n)||(n=new h);let e=t.east,i=t.west,s=o.east,O=o.west;e<i&&s>0?e+=f.TWO_PI:s<O&&e>0&&(s+=f.TWO_PI),e<i&&O<0?O+=f.TWO_PI:s<O&&i<0&&(i+=f.TWO_PI);let m=f.negativePiToPi(Math.min(i,O)),d=f.negativePiToPi(Math.max(e,s));return n.west=m,n.south=Math.min(t.south,o.south),n.east=d,n.north=Math.max(t.north,o.north),n};h.expand=function(t,o,n){return a.typeOf.object("rectangle",t),a.typeOf.object("cartographic",o),w(n)||(n=new h),n.west=Math.min(t.west,o.longitude),n.south=Math.min(t.south,o.latitude),n.east=Math.max(t.east,o.longitude),n.north=Math.max(t.north,o.latitude),n};h.contains=function(t,o){a.typeOf.object("rectangle",t);let n=o.x,e=o.y,i=t.west,s=t.east;return n>i&&n<s&&e>=t.south&&e<=t.north};var _=new E;h.subsample=function(t,o,n,e){a.typeOf.object("rectangle",t),o=p(o,b.WGS84),n=p(n,0),w(e)||(e=[]);let i=0,s=t.north,O=t.south,m=t.east,d=t.west,u=_;u.height=n,u.longitude=d,u.latitude=s,e[i]=o.cartographicToCartesian(u,e[i]),i++,u.longitude=m,e[i]=o.cartographicToCartesian(u,e[i]),i++,u.latitude=O,e[i]=o.cartographicToCartesian(u,e[i]),i++,u.longitude=d,e[i]=o.cartographicToCartesian(u,e[i]),i++,s<0?u.latitude=s:O>0?u.latitude=O:u.latitude=0;for(let M=1;M<8;++M)u.longitude=-Math.PI+M*f.PI_OVER_TWO,h.contains(t,u)&&(e[i]=o.cartographicToCartesian(u,e[i]),i++);return u.latitude===0&&(u.longitude=d,e[i]=o.cartographicToCartesian(u,e[i]),i++,u.longitude=m,e[i]=o.cartographicToCartesian(u,e[i]),i++),e.length=i,e};h.subsection=function(t,o,n,e,i,s){if(a.typeOf.object("rectangle",t),a.typeOf.number.greaterThanOrEquals("westLerp",o,0),a.typeOf.number.lessThanOrEquals("westLerp",o,1),a.typeOf.number.greaterThanOrEquals("southLerp",n,0),a.typeOf.number.lessThanOrEquals("southLerp",n,1),a.typeOf.number.greaterThanOrEquals("eastLerp",e,0),a.typeOf.number.lessThanOrEquals("eastLerp",e,1),a.typeOf.number.greaterThanOrEquals("northLerp",i,0),a.typeOf.number.lessThanOrEquals("northLerp",i,1),a.typeOf.number.lessThanOrEquals("westLerp",o,e),a.typeOf.number.lessThanOrEquals("southLerp",n,i),w(s)||(s=new h),t.west<=t.east){let m=t.east-t.west;s.west=t.west+o*m,s.east=t.west+e*m}else{let m=f.TWO_PI+t.east-t.west;s.west=f.negativePiToPi(t.west+o*m),s.east=f.negativePiToPi(t.west+e*m)}let O=t.north-t.south;return s.south=t.south+n*O,s.north=t.south+i*O,o===1&&(s.west=t.east),e===1&&(s.east=t.east),n===1&&(s.south=t.north),i===1&&(s.north=t.north),s};h.MAX_VALUE=Object.freeze(new h(-Math.PI,-f.PI_OVER_TWO,Math.PI,f.PI_OVER_TWO));var V=h;export{V as a};
