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
define(["./PrimitivePipeline-c9058d45","./createTaskProcessorWorker","./Transforms-c38817cd","./Matrix3-a45402cf","./defaultValue-192c850d","./Math-be2c8494","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./ComponentDatatype-f194b981","./WebGLConstants-1bcc99d3","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./GeometryPipeline-be1ab56a","./AttributeCompression-cb62dc59","./EncodedCartesian3-43036f0c","./IndexDatatype-1ff811be","./IntersectionTests-f861e6a9","./Plane-f4b01105","./WebMercatorProjection-7f67a88a"],(function(e,t,i,r,n,c,a,o,b,s,m,f,u,P,d,p,l,y,G,C,k){"use strict";return t((function(t,i){const r=e.PrimitivePipeline.unpackCombineGeometryParameters(t),n=e.PrimitivePipeline.combineGeometry(r);return e.PrimitivePipeline.packCombineGeometryResults(n,i)}))}));
