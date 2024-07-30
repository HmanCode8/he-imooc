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
define(["exports","./Matrix2-bce7772b","./Matrix3-a45402cf","./OrientedBoundingBox-d8d8ede3"],(function(n,t,e,r){"use strict";const a={},i=new e.Cartesian3,o=new e.Cartesian3,u=new e.Cartesian3,s=new e.Cartesian3,c=new r.OrientedBoundingBox;function C(n,r,a,o,u){const s=e.Cartesian3.subtract(n,r,i),c=e.Cartesian3.dot(a,s),C=e.Cartesian3.dot(o,s);return t.Cartesian2.fromElements(c,C,u)}a.validOutline=function(n){const t=r.OrientedBoundingBox.fromPoints(n,c).halfAxes,a=e.Matrix3.getColumn(t,0,o),i=e.Matrix3.getColumn(t,1,u),C=e.Matrix3.getColumn(t,2,s),m=e.Cartesian3.magnitude(a),d=e.Cartesian3.magnitude(i),g=e.Cartesian3.magnitude(C);return!(0===m&&(0===d||0===g)||0===d&&0===g)},a.computeProjectTo2DArguments=function(n,t,a,i){const C=r.OrientedBoundingBox.fromPoints(n,c),m=C.halfAxes,d=e.Matrix3.getColumn(m,0,o),g=e.Matrix3.getColumn(m,1,u),l=e.Matrix3.getColumn(m,2,s),f=e.Cartesian3.magnitude(d),x=e.Cartesian3.magnitude(g),M=e.Cartesian3.magnitude(l),B=Math.min(f,x,M);if(0===f&&(0===x||0===M)||0===x&&0===M)return!1;let P,w;return B!==x&&B!==M||(P=d),B===f?P=g:B===M&&(w=g),B!==f&&B!==x||(w=l),e.Cartesian3.normalize(P,a),e.Cartesian3.normalize(w,i),e.Cartesian3.clone(C.center,t),!0},a.createProjectPointsTo2DFunction=function(n,t,e){return function(r){const a=new Array(r.length);for(let i=0;i<r.length;i++)a[i]=C(r[i],n,t,e);return a}},a.createProjectPointTo2DFunction=function(n,t,e){return function(r,a){return C(r,n,t,e,a)}};var m=a;n.CoplanarPolygonGeometryLibrary=m}));
