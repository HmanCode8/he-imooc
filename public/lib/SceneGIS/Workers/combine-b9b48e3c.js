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
define(["exports","./defaultValue-192c850d"],(function(e,t){"use strict";e.combine=function e(n,o,r){r=t.defaultValue(r,!1);const f={},i=t.defined(n),a=t.defined(o);let c,d,s;if(i)for(c in n)n.hasOwnProperty(c)&&(d=n[c],a&&r&&"object"==typeof d&&o.hasOwnProperty(c)?(s=o[c],f[c]="object"==typeof s?e(d,s,r):d):f[c]=d);if(a)for(c in o)o.hasOwnProperty(c)&&!f.hasOwnProperty(c)&&(s=o[c],f[c]=s);return f}}));
