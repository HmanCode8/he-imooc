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
define(["exports","./Matrix2-dca1b63d","./Matrix3-fe947601","./defaultValue-192c850d","./Transforms-38ce56dd"],(function(t,e,n,i,h){"use strict";function d(t,e,n,h){this.x=i.defaultValue(t,0),this.y=i.defaultValue(e,0),this.width=i.defaultValue(n,0),this.height=i.defaultValue(h,0)}d.packedLength=4,d.pack=function(t,e,n){return n=i.defaultValue(n,0),e[n++]=t.x,e[n++]=t.y,e[n++]=t.width,e[n]=t.height,e},d.unpack=function(t,e,n){return e=i.defaultValue(e,0),i.defined(n)||(n=new d),n.x=t[e++],n.y=t[e++],n.width=t[e++],n.height=t[e],n},d.fromPoints=function(t,e){if(i.defined(e)||(e=new d),!i.defined(t)||0===t.length)return e.x=0,e.y=0,e.width=0,e.height=0,e;const n=t.length;let h=t[0].x,r=t[0].y,u=t[0].x,a=t[0].y;for(let e=1;e<n;e++){const n=t[e],i=n.x,d=n.y;h=Math.min(i,h),u=Math.max(i,u),r=Math.min(d,r),a=Math.max(d,a)}return e.x=h,e.y=r,e.width=u-h,e.height=a-r,e};const r=new h.GeographicProjection,u=new n.Cartographic,a=new n.Cartographic;d.fromRectangle=function(t,n,h){if(i.defined(h)||(h=new d),!i.defined(t))return h.x=0,h.y=0,h.width=0,h.height=0,h;const c=(n=i.defaultValue(n,r)).project(e.Rectangle.southwest(t,u)),o=n.project(e.Rectangle.northeast(t,a));return e.Cartesian2.subtract(o,c,o),h.x=c.x,h.y=c.y,h.width=o.x,h.height=o.y,h},d.clone=function(t,e){if(i.defined(t))return i.defined(e)?(e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height,e):new d(t.x,t.y,t.width,t.height)},d.union=function(t,e,n){i.defined(n)||(n=new d);const h=Math.min(t.x,e.x),r=Math.min(t.y,e.y),u=Math.max(t.x+t.width,e.x+e.width),a=Math.max(t.y+t.height,e.y+e.height);return n.x=h,n.y=r,n.width=u-h,n.height=a-r,n},d.expand=function(t,e,n){n=d.clone(t,n);const i=e.x-n.x,h=e.y-n.y;return i>n.width?n.width=i:i<0&&(n.width-=i,n.x=e.x),h>n.height?n.height=h:h<0&&(n.height-=h,n.y=e.y),n},d.intersect=function(t,e){const n=t.x,i=t.y,d=e.x,r=e.y;return n>d+e.width||n+t.width<d||i+t.height<r||i>r+e.height?h.Intersect.OUTSIDE:h.Intersect.INTERSECTING},d.equals=function(t,e){return t===e||i.defined(t)&&i.defined(e)&&t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height},d.prototype.clone=function(t){return d.clone(this,t)},d.prototype.intersect=function(t){return d.intersect(this,t)},d.prototype.equals=function(t){return d.equals(this,t)},t.BoundingRectangle=d}));