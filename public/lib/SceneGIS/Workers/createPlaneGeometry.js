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
define(["./defaultValue-192c850d","./Transforms-c38817cd","./Matrix3-a45402cf","./ComponentDatatype-f194b981","./GeometryAttribute-add8522c","./GeometryAttributes-fcaeebba","./VertexFormat-d2271f13","./Math-be2c8494","./Matrix2-bce7772b","./RuntimeError-ca280330","./_commonjsHelpers-f78443cf","./combine-b9b48e3c","./WebGLConstants-1bcc99d3"],(function(t,e,n,r,a,o,i,c,m,u,p,s,y){"use strict";function b(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT);const n=t.defaultValue(e.vertexFormat,i.VertexFormat.DEFAULT);this._vertexFormat=n,this._workerName="createPlaneGeometry"}b.packedLength=i.VertexFormat.packedLength,b.pack=function(e,n,r){return r=t.defaultValue(r,0),i.VertexFormat.pack(e._vertexFormat,n,r),n};const l=new i.VertexFormat,f={vertexFormat:l};b.unpack=function(e,n,r){n=t.defaultValue(n,0);const a=i.VertexFormat.unpack(e,n,l);return t.defined(r)?(r._vertexFormat=i.VertexFormat.clone(a,r._vertexFormat),r):new b(f)};const A=new n.Cartesian3(-.5,-.5,0),F=new n.Cartesian3(.5,.5,0);return b.createGeometry=function(t){const i=t._vertexFormat,c=new o.GeometryAttributes;let m,u;if(i.position){if(u=new Float64Array(12),u[0]=A.x,u[1]=A.y,u[2]=0,u[3]=F.x,u[4]=A.y,u[5]=0,u[6]=F.x,u[7]=F.y,u[8]=0,u[9]=A.x,u[10]=F.y,u[11]=0,c.position=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),i.normal){const t=new Float32Array(12);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=1,t[9]=0,t[10]=0,t[11]=1,c.normal=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(i.st){const t=new Float32Array(8);t[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,c.st=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}if(i.tangent){const t=new Float32Array(12);t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,c.tangent=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}if(i.bitangent){const t=new Float32Array(12);t[0]=0,t[1]=1,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=1,t[8]=0,t[9]=0,t[10]=1,t[11]=0,c.bitangent=new a.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})}m=new Uint16Array(6),m[0]=0,m[1]=1,m[2]=2,m[3]=0,m[4]=2,m[5]=3}return new a.Geometry({attributes:c,indices:m,primitiveType:a.PrimitiveType.TRIANGLES,boundingSphere:new e.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(e,n){return t.defined(n)&&(e=b.unpack(e,n)),b.createGeometry(e)}}));
