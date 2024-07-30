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
define(["exports","./Matrix3-fe947601","./defaultValue-192c850d","./Math-be2c8494","./RuntimeError-ca280330"],(function(t,e,n,a,r){"use strict";function u(t,e,a,r){this.x=n.defaultValue(t,0),this.y=n.defaultValue(e,0),this.z=n.defaultValue(a,0),this.w=n.defaultValue(r,0)}u.fromElements=function(t,e,a,r,i){return n.defined(i)?(i.x=t,i.y=e,i.z=a,i.w=r,i):new u(t,e,a,r)},u.fromColor=function(t,e){return n.defined(e)?(e.x=t.red,e.y=t.green,e.z=t.blue,e.w=t.alpha,e):new u(t.red,t.green,t.blue,t.alpha)},u.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e):new u(t.x,t.y,t.z,t.w)},u.packedLength=4,u.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t.x,e[a++]=t.y,e[a++]=t.z,e[a]=t.w,e},u.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new u),a.x=t[e++],a.y=t[e++],a.z=t[e++],a.w=t[e],a},u.packArray=function(t,e){const a=t.length,r=4*a;n.defined(e)?(Array.isArray(e)||e.length===r)&&e.length!==r&&(e.length=r):e=new Array(r);for(let n=0;n<a;++n)u.pack(t[n],e,4*n);return e},u.unpackArray=function(t,e){const a=t.length;n.defined(e)?e.length=a/4:e=new Array(a/4);for(let n=0;n<a;n+=4){const a=n/4;e[a]=u.unpack(t,n,e[a])}return e},u.fromArray=u.unpack,u.maximumComponent=function(t){return Math.max(t.x,t.y,t.z,t.w)},u.minimumComponent=function(t){return Math.min(t.x,t.y,t.z,t.w)},u.minimumByComponent=function(t,e,n){return n.x=Math.min(t.x,e.x),n.y=Math.min(t.y,e.y),n.z=Math.min(t.z,e.z),n.w=Math.min(t.w,e.w),n},u.maximumByComponent=function(t,e,n){return n.x=Math.max(t.x,e.x),n.y=Math.max(t.y,e.y),n.z=Math.max(t.z,e.z),n.w=Math.max(t.w,e.w),n},u.clamp=function(t,e,n,r){const u=a.CesiumMath.clamp(t.x,e.x,n.x),i=a.CesiumMath.clamp(t.y,e.y,n.y),o=a.CesiumMath.clamp(t.z,e.z,n.z),s=a.CesiumMath.clamp(t.w,e.w,n.w);return r.x=u,r.y=i,r.z=o,r.w=s,r},u.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w},u.magnitude=function(t){return Math.sqrt(u.magnitudeSquared(t))};const i=new u;u.distance=function(t,e){return u.subtract(t,e,i),u.magnitude(i)},u.distanceSquared=function(t,e){return u.subtract(t,e,i),u.magnitudeSquared(i)},u.normalize=function(t,e){const n=u.magnitude(t);return e.x=t.x/n,e.y=t.y/n,e.z=t.z/n,e.w=t.w/n,e},u.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z+t.w*e.w},u.multiplyComponents=function(t,e,n){return n.x=t.x*e.x,n.y=t.y*e.y,n.z=t.z*e.z,n.w=t.w*e.w,n},u.divideComponents=function(t,e,n){return n.x=t.x/e.x,n.y=t.y/e.y,n.z=t.z/e.z,n.w=t.w/e.w,n},u.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n.z=t.z+e.z,n.w=t.w+e.w,n},u.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n.z=t.z-e.z,n.w=t.w-e.w,n},u.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n.z=t.z*e,n.w=t.w*e,n},u.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n.z=t.z/e,n.w=t.w/e,n},u.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e.z=-t.z,e.w=-t.w,e},u.abs=function(t,e){return e.x=Math.abs(t.x),e.y=Math.abs(t.y),e.z=Math.abs(t.z),e.w=Math.abs(t.w),e};const o=new u;u.lerp=function(t,e,n,a){return u.multiplyByScalar(e,n,o),a=u.multiplyByScalar(t,1-n,a),u.add(o,a,a)};const s=new u;u.mostOrthogonalAxis=function(t,e){const n=u.normalize(t,s);return u.abs(n,n),e=n.x<=n.y?n.x<=n.z?n.x<=n.w?u.clone(u.UNIT_X,e):u.clone(u.UNIT_W,e):n.z<=n.w?u.clone(u.UNIT_Z,e):u.clone(u.UNIT_W,e):n.y<=n.z?n.y<=n.w?u.clone(u.UNIT_Y,e):u.clone(u.UNIT_W,e):n.z<=n.w?u.clone(u.UNIT_Z,e):u.clone(u.UNIT_W,e)},u.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w},u.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]&&t.z===e[n+2]&&t.w===e[n+3]},u.equalsEpsilon=function(t,e,r,u){return t===e||n.defined(t)&&n.defined(e)&&a.CesiumMath.equalsEpsilon(t.x,e.x,r,u)&&a.CesiumMath.equalsEpsilon(t.y,e.y,r,u)&&a.CesiumMath.equalsEpsilon(t.z,e.z,r,u)&&a.CesiumMath.equalsEpsilon(t.w,e.w,r,u)},u.ZERO=Object.freeze(new u(0,0,0,0)),u.ONE=Object.freeze(new u(1,1,1,1)),u.UNIT_X=Object.freeze(new u(1,0,0,0)),u.UNIT_Y=Object.freeze(new u(0,1,0,0)),u.UNIT_Z=Object.freeze(new u(0,0,1,0)),u.UNIT_W=Object.freeze(new u(0,0,0,1)),u.prototype.clone=function(t){return u.clone(this,t)},u.prototype.equals=function(t){return u.equals(this,t)},u.prototype.equalsEpsilon=function(t,e,n){return u.equalsEpsilon(this,t,e,n)},u.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`};const c=new Float32Array(1),l=new Uint8Array(c.buffer),f=new Uint32Array([287454020]),h=68===new Uint8Array(f.buffer)[0];function d(t,e,a,r,u,i,o,s,c,l,f,h,d,m,y,w){this[0]=n.defaultValue(t,0),this[1]=n.defaultValue(u,0),this[2]=n.defaultValue(c,0),this[3]=n.defaultValue(d,0),this[4]=n.defaultValue(e,0),this[5]=n.defaultValue(i,0),this[6]=n.defaultValue(l,0),this[7]=n.defaultValue(m,0),this[8]=n.defaultValue(a,0),this[9]=n.defaultValue(o,0),this[10]=n.defaultValue(f,0),this[11]=n.defaultValue(y,0),this[12]=n.defaultValue(r,0),this[13]=n.defaultValue(s,0),this[14]=n.defaultValue(h,0),this[15]=n.defaultValue(w,0)}u.packFloat=function(t,e){return n.defined(e)||(e=new u),c[0]=t,h?(e.x=l[0],e.y=l[1],e.z=l[2],e.w=l[3]):(e.x=l[3],e.y=l[2],e.z=l[1],e.w=l[0]),e},u.unpackFloat=function(t){return h?(l[0]=t.x,l[1]=t.y,l[2]=t.z,l[3]=t.w):(l[0]=t.w,l[1]=t.z,l[2]=t.y,l[3]=t.x),c[0]},d.packedLength=16,d.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t[0],e[a++]=t[1],e[a++]=t[2],e[a++]=t[3],e[a++]=t[4],e[a++]=t[5],e[a++]=t[6],e[a++]=t[7],e[a++]=t[8],e[a++]=t[9],e[a++]=t[10],e[a++]=t[11],e[a++]=t[12],e[a++]=t[13],e[a++]=t[14],e[a]=t[15],e},d.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new d),a[0]=t[e++],a[1]=t[e++],a[2]=t[e++],a[3]=t[e++],a[4]=t[e++],a[5]=t[e++],a[6]=t[e++],a[7]=t[e++],a[8]=t[e++],a[9]=t[e++],a[10]=t[e++],a[11]=t[e++],a[12]=t[e++],a[13]=t[e++],a[14]=t[e++],a[15]=t[e],a},d.packArray=function(t,e){const a=t.length,r=16*a;n.defined(e)?(Array.isArray(e)||e.length===r)&&e.length!==r&&(e.length=r):e=new Array(r);for(let n=0;n<a;++n)d.pack(t[n],e,16*n);return e},d.unpackArray=function(t,e){const a=t.length;n.defined(e)?e.length=a/16:e=new Array(a/16);for(let n=0;n<a;n+=16){const a=n/16;e[a]=d.unpack(t,n,e[a])}return e},d.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e):new d(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15])},d.fromArray=d.unpack,d.fromColumnMajorArray=function(t,e){return d.clone(t,e)},d.fromRowMajorArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15],e):new d(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},d.fromRotationTranslation=function(t,a,r){return a=n.defaultValue(a,e.Cartesian3.ZERO),n.defined(r)?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[3],r[5]=t[4],r[6]=t[5],r[7]=0,r[8]=t[6],r[9]=t[7],r[10]=t[8],r[11]=0,r[12]=a.x,r[13]=a.y,r[14]=a.z,r[15]=1,r):new d(t[0],t[3],t[6],a.x,t[1],t[4],t[7],a.y,t[2],t[5],t[8],a.z,0,0,0,1)},d.fromTranslationQuaternionRotationScale=function(t,e,a,r){n.defined(r)||(r=new d);const u=a.x,i=a.y,o=a.z,s=e.x*e.x,c=e.x*e.y,l=e.x*e.z,f=e.x*e.w,h=e.y*e.y,m=e.y*e.z,y=e.y*e.w,w=e.z*e.z,x=e.z*e.w,M=e.w*e.w,p=s-h-w+M,g=2*(c-x),C=2*(l+y),z=2*(c+x),b=-s+h-w+M,O=2*(m-f),V=2*(l-y),A=2*(m+f),T=-s-h+w+M;return r[0]=p*u,r[1]=z*u,r[2]=V*u,r[3]=0,r[4]=g*i,r[5]=b*i,r[6]=A*i,r[7]=0,r[8]=C*o,r[9]=O*o,r[10]=T*o,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,r},d.fromTranslationRotationScale=function(t,e){return d.fromTranslationQuaternionRotationScale(t.translation,t.rotation,t.scale,e)},d.fromTranslation=function(t,n){return d.fromRotationTranslation(e.Matrix3.IDENTITY,t,n)},d.fromScale=function(t,e){return n.defined(e)?(e[0]=t.x,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t.y,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t.z,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e):new d(t.x,0,0,0,0,t.y,0,0,0,0,t.z,0,0,0,0,1)},d.fromUniformScale=function(t,e){return n.defined(e)?(e[0]=t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e):new d(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)},d.fromRotation=function(t,e){return n.defined(e)||(e=new d),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=0,e[4]=t[3],e[5]=t[4],e[6]=t[5],e[7]=0,e[8]=t[6],e[9]=t[7],e[10]=t[8],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};const m=new e.Cartesian3,y=new e.Cartesian3,w=new e.Cartesian3;d.fromCamera=function(t,a){const r=t.position,u=t.direction,i=t.up;e.Cartesian3.normalize(u,m),e.Cartesian3.normalize(e.Cartesian3.cross(m,i,y),y),e.Cartesian3.normalize(e.Cartesian3.cross(y,m,w),w);const o=y.x,s=y.y,c=y.z,l=m.x,f=m.y,h=m.z,x=w.x,M=w.y,p=w.z,g=r.x,C=r.y,z=r.z,b=o*-g+s*-C+c*-z,O=x*-g+M*-C+p*-z,V=l*g+f*C+h*z;return n.defined(a)?(a[0]=o,a[1]=x,a[2]=-l,a[3]=0,a[4]=s,a[5]=M,a[6]=-f,a[7]=0,a[8]=c,a[9]=p,a[10]=-h,a[11]=0,a[12]=b,a[13]=O,a[14]=V,a[15]=1,a):new d(o,s,c,b,x,M,p,O,-l,-f,-h,V,0,0,0,1)},d.computePerspectiveFieldOfView=function(t,e,n,a,r){const u=1/Math.tan(.5*t),i=u/e,o=(a+n)/(n-a),s=2*a*n/(n-a);return r[0]=i,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=u,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=o,r[11]=-1,r[12]=0,r[13]=0,r[14]=s,r[15]=0,r},d.computeOrthographicOffCenter=function(t,e,n,a,r,u,i){let o=1/(e-t),s=1/(a-n),c=1/(u-r);const l=-(e+t)*o,f=-(a+n)*s,h=-(u+r)*c;return o*=2,s*=2,c*=-2,i[0]=o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=c,i[11]=0,i[12]=l,i[13]=f,i[14]=h,i[15]=1,i},d.computePerspectiveOffCenter=function(t,e,n,a,r,u,i){const o=2*r/(e-t),s=2*r/(a-n),c=(e+t)/(e-t),l=(a+n)/(a-n),f=-(u+r)/(u-r),h=-2*u*r/(u-r);return i[0]=o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=c,i[9]=l,i[10]=f,i[11]=-1,i[12]=0,i[13]=0,i[14]=h,i[15]=0,i},d.computeInfinitePerspectiveOffCenter=function(t,e,n,a,r,u){const i=2*r/(e-t),o=2*r/(a-n),s=(e+t)/(e-t),c=(a+n)/(a-n),l=-2*r;return u[0]=i,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=o,u[6]=0,u[7]=0,u[8]=s,u[9]=c,u[10]=-1,u[11]=-1,u[12]=0,u[13]=0,u[14]=l,u[15]=0,u},d.computeViewportTransformation=function(t,e,a,r){n.defined(r)||(r=new d),t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT);const u=n.defaultValue(t.x,0),i=n.defaultValue(t.y,0),o=n.defaultValue(t.width,0),s=n.defaultValue(t.height,0);e=n.defaultValue(e,0);const c=.5*o,l=.5*s,f=.5*((a=n.defaultValue(a,1))-e),h=c,m=l,y=f,w=u+c,x=i+l,M=e+f;return r[0]=h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=m,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=y,r[11]=0,r[12]=w,r[13]=x,r[14]=M,r[15]=1,r},d.computeView=function(t,n,a,r,u){return u[0]=r.x,u[1]=a.x,u[2]=-n.x,u[3]=0,u[4]=r.y,u[5]=a.y,u[6]=-n.y,u[7]=0,u[8]=r.z,u[9]=a.z,u[10]=-n.z,u[11]=0,u[12]=-e.Cartesian3.dot(r,t),u[13]=-e.Cartesian3.dot(a,t),u[14]=e.Cartesian3.dot(n,t),u[15]=1,u},d.toArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e):[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]},d.getElementIndex=function(t,e){return 4*t+e},d.getColumn=function(t,e,n){const a=4*e,r=t[a],u=t[a+1],i=t[a+2],o=t[a+3];return n.x=r,n.y=u,n.z=i,n.w=o,n},d.setColumn=function(t,e,n,a){const r=4*e;return(a=d.clone(t,a))[r]=n.x,a[r+1]=n.y,a[r+2]=n.z,a[r+3]=n.w,a},d.getRow=function(t,e,n){const a=t[e],r=t[e+4],u=t[e+8],i=t[e+12];return n.x=a,n.y=r,n.z=u,n.w=i,n},d.setRow=function(t,e,n,a){return(a=d.clone(t,a))[e]=n.x,a[e+4]=n.y,a[e+8]=n.z,a[e+12]=n.w,a},d.setTranslation=function(t,e,n){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=t[15],n};const x=new e.Cartesian3;d.setScale=function(t,e,n){const a=d.getScale(t,x),r=e.x/a.x,u=e.y/a.y,i=e.z/a.z;return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3],n[4]=t[4]*u,n[5]=t[5]*u,n[6]=t[6]*u,n[7]=t[7],n[8]=t[8]*i,n[9]=t[9]*i,n[10]=t[10]*i,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n};const M=new e.Cartesian3;d.setUniformScale=function(t,e,n){const a=d.getScale(t,M),r=e/a.x,u=e/a.y,i=e/a.z;return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3],n[4]=t[4]*u,n[5]=t[5]*u,n[6]=t[6]*u,n[7]=t[7],n[8]=t[8]*i,n[9]=t[9]*i,n[10]=t[10]*i,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n};const p=new e.Cartesian3;d.getScale=function(t,n){return n.x=e.Cartesian3.magnitude(e.Cartesian3.fromElements(t[0],t[1],t[2],p)),n.y=e.Cartesian3.magnitude(e.Cartesian3.fromElements(t[4],t[5],t[6],p)),n.z=e.Cartesian3.magnitude(e.Cartesian3.fromElements(t[8],t[9],t[10],p)),n};const g=new e.Cartesian3;d.getMaximumScale=function(t){return d.getScale(t,g),e.Cartesian3.maximumComponent(g)};const C=new e.Cartesian3;d.setRotation=function(t,e,n){const a=d.getScale(t,C);return n[0]=e[0]*a.x,n[1]=e[1]*a.x,n[2]=e[2]*a.x,n[3]=t[3],n[4]=e[3]*a.y,n[5]=e[4]*a.y,n[6]=e[5]*a.y,n[7]=t[7],n[8]=e[6]*a.z,n[9]=e[7]*a.z,n[10]=e[8]*a.z,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n};const z=new e.Cartesian3;d.getRotation=function(t,e){const n=d.getScale(t,z);return e[0]=t[0]/n.x,e[1]=t[1]/n.x,e[2]=t[2]/n.x,e[3]=t[4]/n.y,e[4]=t[5]/n.y,e[5]=t[6]/n.y,e[6]=t[8]/n.z,e[7]=t[9]/n.z,e[8]=t[10]/n.z,e},d.multiply=function(t,e,n){const a=t[0],r=t[1],u=t[2],i=t[3],o=t[4],s=t[5],c=t[6],l=t[7],f=t[8],h=t[9],d=t[10],m=t[11],y=t[12],w=t[13],x=t[14],M=t[15],p=e[0],g=e[1],C=e[2],z=e[3],b=e[4],O=e[5],V=e[6],A=e[7],T=e[8],E=e[9],_=e[10],I=e[11],S=e[12],U=e[13],N=e[14],q=e[15],P=a*p+o*g+f*C+y*z,R=r*p+s*g+h*C+w*z,W=u*p+c*g+d*C+x*z,L=i*p+l*g+m*C+M*z,k=a*b+o*O+f*V+y*A,B=r*b+s*O+h*V+w*A,$=u*b+c*O+d*V+x*A,j=i*b+l*O+m*V+M*A,v=a*T+o*E+f*_+y*I,X=r*T+s*E+h*_+w*I,Y=u*T+c*E+d*_+x*I,Z=i*T+l*E+m*_+M*I,D=a*S+o*U+f*N+y*q,F=r*S+s*U+h*N+w*q,G=u*S+c*U+d*N+x*q,H=i*S+l*U+m*N+M*q;return n[0]=P,n[1]=R,n[2]=W,n[3]=L,n[4]=k,n[5]=B,n[6]=$,n[7]=j,n[8]=v,n[9]=X,n[10]=Y,n[11]=Z,n[12]=D,n[13]=F,n[14]=G,n[15]=H,n},d.add=function(t,e,n){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n[4]=t[4]+e[4],n[5]=t[5]+e[5],n[6]=t[6]+e[6],n[7]=t[7]+e[7],n[8]=t[8]+e[8],n[9]=t[9]+e[9],n[10]=t[10]+e[10],n[11]=t[11]+e[11],n[12]=t[12]+e[12],n[13]=t[13]+e[13],n[14]=t[14]+e[14],n[15]=t[15]+e[15],n},d.subtract=function(t,e,n){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n[4]=t[4]-e[4],n[5]=t[5]-e[5],n[6]=t[6]-e[6],n[7]=t[7]-e[7],n[8]=t[8]-e[8],n[9]=t[9]-e[9],n[10]=t[10]-e[10],n[11]=t[11]-e[11],n[12]=t[12]-e[12],n[13]=t[13]-e[13],n[14]=t[14]-e[14],n[15]=t[15]-e[15],n},d.multiplyTransformation=function(t,e,n){const a=t[0],r=t[1],u=t[2],i=t[4],o=t[5],s=t[6],c=t[8],l=t[9],f=t[10],h=t[12],d=t[13],m=t[14],y=e[0],w=e[1],x=e[2],M=e[4],p=e[5],g=e[6],C=e[8],z=e[9],b=e[10],O=e[12],V=e[13],A=e[14],T=a*y+i*w+c*x,E=r*y+o*w+l*x,_=u*y+s*w+f*x,I=a*M+i*p+c*g,S=r*M+o*p+l*g,U=u*M+s*p+f*g,N=a*C+i*z+c*b,q=r*C+o*z+l*b,P=u*C+s*z+f*b,R=a*O+i*V+c*A+h,W=r*O+o*V+l*A+d,L=u*O+s*V+f*A+m;return n[0]=T,n[1]=E,n[2]=_,n[3]=0,n[4]=I,n[5]=S,n[6]=U,n[7]=0,n[8]=N,n[9]=q,n[10]=P,n[11]=0,n[12]=R,n[13]=W,n[14]=L,n[15]=1,n},d.multiplyByMatrix3=function(t,e,n){const a=t[0],r=t[1],u=t[2],i=t[4],o=t[5],s=t[6],c=t[8],l=t[9],f=t[10],h=e[0],d=e[1],m=e[2],y=e[3],w=e[4],x=e[5],M=e[6],p=e[7],g=e[8],C=a*h+i*d+c*m,z=r*h+o*d+l*m,b=u*h+s*d+f*m,O=a*y+i*w+c*x,V=r*y+o*w+l*x,A=u*y+s*w+f*x,T=a*M+i*p+c*g,E=r*M+o*p+l*g,_=u*M+s*p+f*g;return n[0]=C,n[1]=z,n[2]=b,n[3]=0,n[4]=O,n[5]=V,n[6]=A,n[7]=0,n[8]=T,n[9]=E,n[10]=_,n[11]=0,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},d.multiplyByTranslation=function(t,e,n){const a=e.x,r=e.y,u=e.z,i=a*t[0]+r*t[4]+u*t[8]+t[12],o=a*t[1]+r*t[5]+u*t[9]+t[13],s=a*t[2]+r*t[6]+u*t[10]+t[14];return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=i,n[13]=o,n[14]=s,n[15]=t[15],n},d.multiplyByScale=function(t,e,n){const a=e.x,r=e.y,u=e.z;return 1===a&&1===r&&1===u?d.clone(t,n):(n[0]=a*t[0],n[1]=a*t[1],n[2]=a*t[2],n[3]=t[3],n[4]=r*t[4],n[5]=r*t[5],n[6]=r*t[6],n[7]=t[7],n[8]=u*t[8],n[9]=u*t[9],n[10]=u*t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n)},d.multiplyByUniformScale=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3],n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7],n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},d.multiplyByVector=function(t,e,n){const a=e.x,r=e.y,u=e.z,i=e.w,o=t[0]*a+t[4]*r+t[8]*u+t[12]*i,s=t[1]*a+t[5]*r+t[9]*u+t[13]*i,c=t[2]*a+t[6]*r+t[10]*u+t[14]*i,l=t[3]*a+t[7]*r+t[11]*u+t[15]*i;return n.x=o,n.y=s,n.z=c,n.w=l,n},d.multiplyByPointAsVector=function(t,e,n){const a=e.x,r=e.y,u=e.z,i=t[0]*a+t[4]*r+t[8]*u,o=t[1]*a+t[5]*r+t[9]*u,s=t[2]*a+t[6]*r+t[10]*u;return n.x=i,n.y=o,n.z=s,n},d.multiplyByPoint=function(t,e,n){const a=e.x,r=e.y,u=e.z,i=t[0]*a+t[4]*r+t[8]*u+t[12],o=t[1]*a+t[5]*r+t[9]*u+t[13],s=t[2]*a+t[6]*r+t[10]*u+t[14];return n.x=i,n.y=o,n.z=s,n},d.multiplyByScalar=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7]*e,n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11]*e,n[12]=t[12]*e,n[13]=t[13]*e,n[14]=t[14]*e,n[15]=t[15]*e,n},d.negate=function(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=-t[7],e[8]=-t[8],e[9]=-t[9],e[10]=-t[10],e[11]=-t[11],e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=-t[15],e},d.transpose=function(t,e){const n=t[1],a=t[2],r=t[3],u=t[6],i=t[7],o=t[11];return e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=a,e[9]=u,e[10]=t[10],e[11]=t[14],e[12]=r,e[13]=i,e[14]=o,e[15]=t[15],e},d.abs=function(t,e){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e[3]=Math.abs(t[3]),e[4]=Math.abs(t[4]),e[5]=Math.abs(t[5]),e[6]=Math.abs(t[6]),e[7]=Math.abs(t[7]),e[8]=Math.abs(t[8]),e[9]=Math.abs(t[9]),e[10]=Math.abs(t[10]),e[11]=Math.abs(t[11]),e[12]=Math.abs(t[12]),e[13]=Math.abs(t[13]),e[14]=Math.abs(t[14]),e[15]=Math.abs(t[15]),e},d.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[3]===e[3]&&t[7]===e[7]&&t[11]===e[11]&&t[15]===e[15]},d.equalsEpsilon=function(t,e,a){return a=n.defaultValue(a,0),t===e||n.defined(t)&&n.defined(e)&&Math.abs(t[0]-e[0])<=a&&Math.abs(t[1]-e[1])<=a&&Math.abs(t[2]-e[2])<=a&&Math.abs(t[3]-e[3])<=a&&Math.abs(t[4]-e[4])<=a&&Math.abs(t[5]-e[5])<=a&&Math.abs(t[6]-e[6])<=a&&Math.abs(t[7]-e[7])<=a&&Math.abs(t[8]-e[8])<=a&&Math.abs(t[9]-e[9])<=a&&Math.abs(t[10]-e[10])<=a&&Math.abs(t[11]-e[11])<=a&&Math.abs(t[12]-e[12])<=a&&Math.abs(t[13]-e[13])<=a&&Math.abs(t[14]-e[14])<=a&&Math.abs(t[15]-e[15])<=a},d.getTranslation=function(t,e){return e.x=t[12],e.y=t[13],e.z=t[14],e},d.getMatrix3=function(t,e){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};const b=new e.Matrix3,O=new e.Matrix3,V=new u,A=new u(0,0,0,1);d.inverse=function(t,n){const i=t[0],o=t[4],s=t[8],c=t[12],l=t[1],f=t[5],h=t[9],m=t[13],y=t[2],w=t[6],x=t[10],M=t[14],p=t[3],g=t[7],C=t[11],z=t[15];let T=x*z,E=M*C,_=w*z,I=M*g,S=w*C,U=x*g,N=y*z,q=M*p,P=y*C,R=x*p,W=y*g,L=w*p;const k=T*f+I*h+S*m-(E*f+_*h+U*m),B=E*l+N*h+R*m-(T*l+q*h+P*m),$=_*l+q*f+W*m-(I*l+N*f+L*m),j=U*l+P*f+L*h-(S*l+R*f+W*h),v=E*o+_*s+U*c-(T*o+I*s+S*c),X=T*i+q*s+P*c-(E*i+N*s+R*c),Y=I*i+N*o+L*c-(_*i+q*o+W*c),Z=S*i+R*o+W*s-(U*i+P*o+L*s);T=s*m,E=c*h,_=o*m,I=c*f,S=o*h,U=s*f,N=i*m,q=c*l,P=i*h,R=s*l,W=i*f,L=o*l;const D=T*g+I*C+S*z-(E*g+_*C+U*z),F=E*p+N*C+R*z-(T*p+q*C+P*z),G=_*p+q*g+W*z-(I*p+N*g+L*z),H=U*p+P*g+L*C-(S*p+R*g+W*C),Q=_*x+U*M+E*w-(S*M+T*w+I*x),J=P*M+T*y+q*x-(N*x+R*M+E*y),K=N*w+L*M+I*y-(W*M+_*y+q*w),tt=W*x+S*y+R*w-(P*w+L*x+U*y);let et=i*k+o*B+s*$+c*j;if(Math.abs(et)<a.CesiumMath.EPSILON21){if(e.Matrix3.equalsEpsilon(d.getMatrix3(t,b),O,a.CesiumMath.EPSILON7)&&u.equals(d.getRow(t,3,V),A))return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=0,n[11]=0,n[12]=-t[12],n[13]=-t[13],n[14]=-t[14],n[15]=1,n;throw new r.RuntimeError("matrix is not invertible because its determinate is zero.")}return et=1/et,n[0]=k*et,n[1]=B*et,n[2]=$*et,n[3]=j*et,n[4]=v*et,n[5]=X*et,n[6]=Y*et,n[7]=Z*et,n[8]=D*et,n[9]=F*et,n[10]=G*et,n[11]=H*et,n[12]=Q*et,n[13]=J*et,n[14]=K*et,n[15]=tt*et,n},d.inverseTransformation=function(t,e){const n=t[0],a=t[1],r=t[2],u=t[4],i=t[5],o=t[6],s=t[8],c=t[9],l=t[10],f=t[12],h=t[13],d=t[14],m=-n*f-a*h-r*d,y=-u*f-i*h-o*d,w=-s*f-c*h-l*d;return e[0]=n,e[1]=u,e[2]=s,e[3]=0,e[4]=a,e[5]=i,e[6]=c,e[7]=0,e[8]=r,e[9]=o,e[10]=l,e[11]=0,e[12]=m,e[13]=y,e[14]=w,e[15]=1,e};const T=new d;function E(t,e,a,r){this.west=n.defaultValue(t,0),this.south=n.defaultValue(e,0),this.east=n.defaultValue(a,0),this.north=n.defaultValue(r,0),this._planeView=this.west>2e5}d.inverseTranspose=function(t,e){return d.inverse(d.transpose(t,T),e)},d.IDENTITY=Object.freeze(new d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)),d.ZERO=Object.freeze(new d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),d.COLUMN0ROW0=0,d.COLUMN0ROW1=1,d.COLUMN0ROW2=2,d.COLUMN0ROW3=3,d.COLUMN1ROW0=4,d.COLUMN1ROW1=5,d.COLUMN1ROW2=6,d.COLUMN1ROW3=7,d.COLUMN2ROW0=8,d.COLUMN2ROW1=9,d.COLUMN2ROW2=10,d.COLUMN2ROW3=11,d.COLUMN3ROW0=12,d.COLUMN3ROW1=13,d.COLUMN3ROW2=14,d.COLUMN3ROW3=15,Object.defineProperties(d.prototype,{length:{get:function(){return d.packedLength}}}),d.prototype.clone=function(t){return d.clone(this,t)},d.prototype.equals=function(t){return d.equals(this,t)},d.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]&&t[4]===e[n+4]&&t[5]===e[n+5]&&t[6]===e[n+6]&&t[7]===e[n+7]&&t[8]===e[n+8]&&t[9]===e[n+9]&&t[10]===e[n+10]&&t[11]===e[n+11]&&t[12]===e[n+12]&&t[13]===e[n+13]&&t[14]===e[n+14]&&t[15]===e[n+15]},d.prototype.equalsEpsilon=function(t,e){return d.equalsEpsilon(this,t,e)},d.prototype.toString=function(){return`(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`},d.prototype.lookAt=function(t,n){0===e.Cartesian3.magnitudeSquared(t)&&(t.z=1),e.Cartesian3.normalize(t,t);let a=e.Cartesian3.cross(n,t,new e.Cartesian3);0===e.Cartesian3.magnitudeSquared(a)&&(1===Math.abs(n.z)?t.x+=1e-4:t.z+=1e-4,e.Cartesian3.normalize(t,t),a=e.Cartesian3.cross(n,t,new e.Cartesian3)),e.Cartesian3.normalize(a,a);const r=e.Cartesian3.cross(t,a,new e.Cartesian3);this[0]=a.x,this[1]=a.y,this[2]=a.z,this[4]=r.x,this[5]=r.y,this[6]=r.z,this[8]=t.x,this[9]=t.y,this[10]=t.z},Object.defineProperties(E.prototype,{width:{get:function(){return E.computeWidth(this)}},height:{get:function(){return E.computeHeight(this)}}}),E.packedLength=4,E.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t.west,e[a++]=t.south,e[a++]=t.east,e[a]=t.north,e},E.unpack=function(t,e,a,r){return e=n.defaultValue(e,0),n.defined(a)||(a=new E),a.west=t[e++],a.south=t[e++],a.east=t[e++],a.north=t[e],a._planeView=r,a},E.computeWidth=function(t){let e=t.east;const n=t.west;return e<n&&(e+=a.CesiumMath.TWO_PI),e-n},E.computeHeight=function(t){return t.north-t.south},E.fromDegrees=function(t,e,r,u,i){return t=a.CesiumMath.toRadians(n.defaultValue(t,0)),e=a.CesiumMath.toRadians(n.defaultValue(e,0)),r=a.CesiumMath.toRadians(n.defaultValue(r,0)),u=a.CesiumMath.toRadians(n.defaultValue(u,0)),n.defined(i)?(i.west=t,i.south=e,i.east=r,i.north=u,i):new E(t,e,r,u)},E.fromRadians=function(t,e,a,r,u){return n.defined(u)?(u.west=n.defaultValue(t,0),u.south=n.defaultValue(e,0),u.east=n.defaultValue(a,0),u.north=n.defaultValue(r,0),u):new E(t,e,a,r)},E.fromCartographicArray=function(t,e){let r=Number.MAX_VALUE,u=-Number.MAX_VALUE,i=Number.MAX_VALUE,o=-Number.MAX_VALUE,s=Number.MAX_VALUE,c=-Number.MAX_VALUE;for(let e=0,n=t.length;e<n;e++){const n=t[e];r=Math.min(r,n.longitude),u=Math.max(u,n.longitude),s=Math.min(s,n.latitude),c=Math.max(c,n.latitude);const l=n.longitude>=0?n.longitude:n.longitude+a.CesiumMath.TWO_PI;i=Math.min(i,l),o=Math.max(o,l)}return u-r>o-i&&(r=i,u=o,u>a.CesiumMath.PI&&(u-=a.CesiumMath.TWO_PI),r>a.CesiumMath.PI&&(r-=a.CesiumMath.TWO_PI)),n.defined(e)?(e.west=r,e.south=s,e.east=u,e.north=c,e):new E(r,s,u,c)},E.fromCartesianArray=function(t,r,u){t[0].z<2e6&&(this._planeView=!0),r=n.defaultValue(r,e.Ellipsoid.WGS84);let i=Number.MAX_VALUE,o=-Number.MAX_VALUE,s=Number.MAX_VALUE,c=-Number.MAX_VALUE,l=Number.MAX_VALUE,f=-Number.MAX_VALUE;if(!0===this._planeView){for(let e=0,n=t.length;e<n;e++){const n=t[e];i=Math.min(i,n.x),o=Math.max(o,n.x),l=Math.min(l,n.y),f=Math.max(f,n.y)}return n.defined(u)?(u.west=i,u.south=l,u.east=o,u.north=f,u._planeView=this._planeView,u):new E(i,l,o,f)}for(let e=0,n=t.length;e<n;e++){const n=r.cartesianToCartographic(t[e]);i=Math.min(i,n.longitude),o=Math.max(o,n.longitude),l=Math.min(l,n.latitude),f=Math.max(f,n.latitude);const u=n.longitude>=0?n.longitude:n.longitude+a.CesiumMath.TWO_PI;s=Math.min(s,u),c=Math.max(c,u)}return o-i>c-s&&(i=s,o=c,o>a.CesiumMath.PI&&(o-=a.CesiumMath.TWO_PI),i>a.CesiumMath.PI&&(i-=a.CesiumMath.TWO_PI)),n.defined(u)?(u.west=i,u.south=l,u.east=o,u.north=f,u):new E(i,l,o,f)},E.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.west=t.west,e.south=t.south,e.east=t.east,e.north=t.north,e):new E(t.west,t.south,t.east,t.north)},E.equalsEpsilon=function(t,e,a){return a=n.defaultValue(a,0),t===e||n.defined(t)&&n.defined(e)&&Math.abs(t.west-e.west)<=a&&Math.abs(t.south-e.south)<=a&&Math.abs(t.east-e.east)<=a&&Math.abs(t.north-e.north)<=a},E.prototype.clone=function(t){return E.clone(this,t)},E.prototype.equals=function(t){return E.equals(this,t)},E.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.west===e.west&&t.south===e.south&&t.east===e.east&&t.north===e.north},E.prototype.equalsEpsilon=function(t,e){return E.equalsEpsilon(this,t,e)},E.validate=function(t){},E.southwest=function(t,a){return n.defined(a)?(a.longitude=t.west,a.latitude=t.south,a.height=0,a):new e.Cartographic(t.west,t.south)},E.northwest=function(t,a){return n.defined(a)?(a.longitude=t.west,a.latitude=t.north,a.height=0,a):new e.Cartographic(t.west,t.north)},E.northeast=function(t,a){return n.defined(a)?(a.longitude=t.east,a.latitude=t.north,a.height=0,a):new e.Cartographic(t.east,t.north)},E.southeast=function(t,a){return n.defined(a)?(a.longitude=t.east,a.latitude=t.south,a.height=0,a):new e.Cartographic(t.east,t.south)},E.center=function(t,r){let u=t.east;const i=t.west;let o,s;return!0===t._planeView?(o=.5*(t.east+t.west),s=.5*(t.south+t.north)):(u<i&&(u+=a.CesiumMath.TWO_PI),o=a.CesiumMath.negativePiToPi(.5*(i+u)),s=.5*(t.south+t.north)),n.defined(r)?(r.longitude=o,r.latitude=s,r.height=0,r):new e.Cartographic(o,s)},E.intersection=function(t,e,r){let u=t.east,i=t.west,o=e.east,s=e.west;u<i&&o>0?u+=a.CesiumMath.TWO_PI:o<s&&u>0&&(o+=a.CesiumMath.TWO_PI),u<i&&s<0?s+=a.CesiumMath.TWO_PI:o<s&&i<0&&(i+=a.CesiumMath.TWO_PI);const c=a.CesiumMath.negativePiToPi(Math.max(i,s)),l=a.CesiumMath.negativePiToPi(Math.min(u,o));if((t.west<t.east||e.west<e.east)&&l<=c)return;const f=Math.max(t.south,e.south),h=Math.min(t.north,e.north);return f>=h?void 0:n.defined(r)?(r.west=c,r.south=f,r.east=l,r.north=h,r):new E(c,f,l,h)},E.simpleIntersection=function(t,e,a){const r=Math.max(t.west,e.west),u=Math.max(t.south,e.south),i=Math.min(t.east,e.east),o=Math.min(t.north,e.north);if(!(u>=o||r>=i))return n.defined(a)?(a.west=r,a.south=u,a.east=i,a.north=o,a):new E(r,u,i,o)},E.union=function(t,e,r){n.defined(r)||(r=new E);let u=t.east,i=t.west,o=e.east,s=e.west;u<i&&o>0?u+=a.CesiumMath.TWO_PI:o<s&&u>0&&(o+=a.CesiumMath.TWO_PI),u<i&&s<0?s+=a.CesiumMath.TWO_PI:o<s&&i<0&&(i+=a.CesiumMath.TWO_PI);const c=a.CesiumMath.negativePiToPi(Math.min(i,s)),l=a.CesiumMath.negativePiToPi(Math.max(u,o));return r.west=c,r.south=Math.min(t.south,e.south),r.east=l,r.north=Math.max(t.north,e.north),r},E.expand=function(t,e,a){return n.defined(a)||(a=new E),a.west=Math.min(t.west,e.longitude),a.south=Math.min(t.south,e.latitude),a.east=Math.max(t.east,e.longitude),a.north=Math.max(t.north,e.latitude),a},E.contains=function(t,e){let n=e.longitude;const r=e.latitude,u=t.west;let i=t.east;return i<u&&(i+=a.CesiumMath.TWO_PI,n<0&&(n+=a.CesiumMath.TWO_PI)),(n>u||a.CesiumMath.equalsEpsilon(n,u,a.CesiumMath.EPSILON14))&&(n<i||a.CesiumMath.equalsEpsilon(n,i,a.CesiumMath.EPSILON14))&&r>=t.south&&r<=t.north};const _=new e.Cartographic;function I(t,e){this.x=n.defaultValue(t,0),this.y=n.defaultValue(e,0)}E.subsample=function(t,r,u,i){const o=n.defaultValue(t._planeView,!1);r=n.defaultValue(r,e.Ellipsoid.WGS84),u=n.defaultValue(u,0),n.defined(i)||(i=[]);let s=0;const c=t.north,l=t.south,f=t.east,h=t.west,d=_;if(d.height=u,d.longitude=h,d.latitude=c,!0===o?(i[s]=new e.Cartesian3,i[s].x=d.longitude,i[s].y=d.latitude,i[s].z=d.height):i[s]=r.cartographicToCartesian(d,i[s]),s++,d.longitude=f,!0===o?(i[s]=new e.Cartesian3,i[s].x=d.longitude,i[s].y=d.latitude,i[s].z=d.height):i[s]=r.cartographicToCartesian(d,i[s]),s++,d.latitude=l,!0===o?(i[s]=new e.Cartesian3,i[s].x=d.longitude,i[s].y=d.latitude,i[s].z=d.height):i[s]=r.cartographicToCartesian(d,i[s]),s++,d.longitude=h,!0===o?(i[s]=new e.Cartesian3,i[s].x=d.longitude,i[s].y=d.latitude,i[s].z=d.height):i[s]=r.cartographicToCartesian(d,i[s]),s++,!1===o){d.latitude=c<0?c:l>0?l:0;for(let e=1;e<8;++e)d.longitude=-Math.PI+e*a.CesiumMath.PI_OVER_TWO,E.contains(t,d)&&(i[s]=r.cartographicToCartesian(d,i[s]),s++);0===d.latitude&&(d.longitude=h,i[s]=r.cartographicToCartesian(d,i[s]),s++,d.longitude=f,i[s]=r.cartographicToCartesian(d,i[s]),s++)}return i.length=s,i},E.subsection=function(t,e,r,u,i,o){if(n.defined(o)||(o=new E),t.west<=t.east){const n=t.east-t.west;o.west=t.west+e*n,o.east=t.west+u*n}else{const n=a.CesiumMath.TWO_PI+t.east-t.west;o.west=a.CesiumMath.negativePiToPi(t.west+e*n),o.east=a.CesiumMath.negativePiToPi(t.west+u*n)}const s=t.north-t.south;return o.south=t.south+r*s,o.north=t.south+i*s,1===e&&(o.west=t.east),1===u&&(o.east=t.east),1===r&&(o.south=t.north),1===i&&(o.north=t.north),o},E.MAX_VALUE=Object.freeze(new E(-Math.PI,-a.CesiumMath.PI_OVER_TWO,Math.PI,a.CesiumMath.PI_OVER_TWO)),I.fromElements=function(t,e,a){return n.defined(a)?(a.x=t,a.y=e,a):new I(t,e)},I.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.x=t.x,e.y=t.y,e):new I(t.x,t.y)},I.fromCartesian3=I.clone,I.fromCartesian4=I.clone,I.packedLength=2,I.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t.x,e[a]=t.y,e},I.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new I),a.x=t[e++],a.y=t[e],a},I.packArray=function(t,e){const a=t.length,r=2*a;n.defined(e)?(Array.isArray(e)||e.length===r)&&e.length!==r&&(e.length=r):e=new Array(r);for(let n=0;n<a;++n)I.pack(t[n],e,2*n);return e},I.unpackArray=function(t,e){const a=t.length;n.defined(e)?e.length=a/2:e=new Array(a/2);for(let n=0;n<a;n+=2){const a=n/2;e[a]=I.unpack(t,n,e[a])}return e},I.fromArray=I.unpack,I.maximumComponent=function(t){return Math.max(t.x,t.y)},I.minimumComponent=function(t){return Math.min(t.x,t.y)},I.minimumByComponent=function(t,e,n){return n.x=Math.min(t.x,e.x),n.y=Math.min(t.y,e.y),n},I.maximumByComponent=function(t,e,n){return n.x=Math.max(t.x,e.x),n.y=Math.max(t.y,e.y),n},I.clamp=function(t,e,n,r){const u=a.CesiumMath.clamp(t.x,e.x,n.x),i=a.CesiumMath.clamp(t.y,e.y,n.y);return r.x=u,r.y=i,r},I.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y},I.magnitude=function(t){return Math.sqrt(I.magnitudeSquared(t))};const S=new I;I.distance=function(t,e){return I.subtract(t,e,S),I.magnitude(S)},I.distanceSquared=function(t,e){return I.subtract(t,e,S),I.magnitudeSquared(S)},I.normalize=function(t,e){const n=I.magnitude(t);return e.x=t.x/n,e.y=t.y/n,e},I.dot=function(t,e){return t.x*e.x+t.y*e.y},I.cross=function(t,e){return t.x*e.y-t.y*e.x},I.multiplyComponents=function(t,e,n){return n.x=t.x*e.x,n.y=t.y*e.y,n},I.divideComponents=function(t,e,n){return n.x=t.x/e.x,n.y=t.y/e.y,n},I.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n},I.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n},I.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n},I.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n},I.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e},I.abs=function(t,e){return e.x=Math.abs(t.x),e.y=Math.abs(t.y),e};const U=new I;I.lerp=function(t,e,n,a){return I.multiplyByScalar(e,n,U),a=I.multiplyByScalar(t,1-n,a),I.add(U,a,a)};const N=new I,q=new I;I.angleBetween=function(t,e){return I.normalize(t,N),I.normalize(e,q),a.CesiumMath.acosClamped(I.dot(N,q))};const P=new I;function R(t,e,a,r){this[0]=n.defaultValue(t,0),this[1]=n.defaultValue(a,0),this[2]=n.defaultValue(e,0),this[3]=n.defaultValue(r,0)}I.mostOrthogonalAxis=function(t,e){const n=I.normalize(t,P);return I.abs(n,n),e=n.x<=n.y?I.clone(I.UNIT_X,e):I.clone(I.UNIT_Y,e)},I.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.x===e.x&&t.y===e.y},I.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]},I.equalsEpsilon=function(t,e,r,u){return t===e||n.defined(t)&&n.defined(e)&&a.CesiumMath.equalsEpsilon(t.x,e.x,r,u)&&a.CesiumMath.equalsEpsilon(t.y,e.y,r,u)},I.ZERO=Object.freeze(new I(0,0)),I.ONE=Object.freeze(new I(1,1)),I.UNIT_X=Object.freeze(new I(1,0)),I.UNIT_Y=Object.freeze(new I(0,1)),I.prototype.clone=function(t){return I.clone(this,t)},I.prototype.equals=function(t){return I.equals(this,t)},I.prototype.equalsEpsilon=function(t,e,n){return I.equalsEpsilon(this,t,e,n)},I.prototype.toString=function(){return`(${this.x}, ${this.y})`},R.packedLength=4,R.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t[0],e[a++]=t[1],e[a++]=t[2],e[a++]=t[3],e},R.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new R),a[0]=t[e++],a[1]=t[e++],a[2]=t[e++],a[3]=t[e++],a},R.packArray=function(t,e){const a=t.length,r=4*a;n.defined(e)?(Array.isArray(e)||e.length===r)&&e.length!==r&&(e.length=r):e=new Array(r);for(let n=0;n<a;++n)R.pack(t[n],e,4*n);return e},R.unpackArray=function(t,e){const a=t.length;n.defined(e)?e.length=a/4:e=new Array(a/4);for(let n=0;n<a;n+=4){const a=n/4;e[a]=R.unpack(t,n,e[a])}return e},R.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):new R(t[0],t[2],t[1],t[3])},R.fromArray=R.unpack,R.fromColumnMajorArray=function(t,e){return R.clone(t,e)},R.fromRowMajorArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3],e):new R(t[0],t[1],t[2],t[3])},R.fromScale=function(t,e){return n.defined(e)?(e[0]=t.x,e[1]=0,e[2]=0,e[3]=t.y,e):new R(t.x,0,0,t.y)},R.fromUniformScale=function(t,e){return n.defined(e)?(e[0]=t,e[1]=0,e[2]=0,e[3]=t,e):new R(t,0,0,t)},R.fromRotation=function(t,e){const a=Math.cos(t),r=Math.sin(t);return n.defined(e)?(e[0]=a,e[1]=r,e[2]=-r,e[3]=a,e):new R(a,-r,r,a)},R.toArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):[t[0],t[1],t[2],t[3]]},R.getElementIndex=function(t,e){return 2*t+e},R.getColumn=function(t,e,n){const a=2*e,r=t[a],u=t[a+1];return n.x=r,n.y=u,n},R.setColumn=function(t,e,n,a){const r=2*e;return(a=R.clone(t,a))[r]=n.x,a[r+1]=n.y,a},R.getRow=function(t,e,n){const a=t[e],r=t[e+2];return n.x=a,n.y=r,n},R.setRow=function(t,e,n,a){return(a=R.clone(t,a))[e]=n.x,a[e+2]=n.y,a};const W=new I;R.setScale=function(t,e,n){const a=R.getScale(t,W),r=e.x/a.x,u=e.y/a.y;return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*u,n[3]=t[3]*u,n};const L=new I;R.setUniformScale=function(t,e,n){const a=R.getScale(t,L),r=e/a.x,u=e/a.y;return n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*u,n[3]=t[3]*u,n};const k=new I;R.getScale=function(t,e){return e.x=I.magnitude(I.fromElements(t[0],t[1],k)),e.y=I.magnitude(I.fromElements(t[2],t[3],k)),e};const B=new I;R.getMaximumScale=function(t){return R.getScale(t,B),I.maximumComponent(B)};const $=new I;R.setRotation=function(t,e,n){const a=R.getScale(t,$);return n[0]=e[0]*a.x,n[1]=e[1]*a.x,n[2]=e[2]*a.y,n[3]=e[3]*a.y,n};const j=new I;R.getRotation=function(t,e){const n=R.getScale(t,j);return e[0]=t[0]/n.x,e[1]=t[1]/n.x,e[2]=t[2]/n.y,e[3]=t[3]/n.y,e},R.multiply=function(t,e,n){const a=t[0]*e[0]+t[2]*e[1],r=t[0]*e[2]+t[2]*e[3],u=t[1]*e[0]+t[3]*e[1],i=t[1]*e[2]+t[3]*e[3];return n[0]=a,n[1]=u,n[2]=r,n[3]=i,n},R.add=function(t,e,n){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n},R.subtract=function(t,e,n){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n},R.multiplyByVector=function(t,e,n){const a=t[0]*e.x+t[2]*e.y,r=t[1]*e.x+t[3]*e.y;return n.x=a,n.y=r,n},R.multiplyByScalar=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n},R.multiplyByScale=function(t,e,n){return n[0]=t[0]*e.x,n[1]=t[1]*e.x,n[2]=t[2]*e.y,n[3]=t[3]*e.y,n},R.multiplyByUniformScale=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n},R.negate=function(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},R.transpose=function(t,e){const n=t[0],a=t[2],r=t[1],u=t[3];return e[0]=n,e[1]=a,e[2]=r,e[3]=u,e},R.abs=function(t,e){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e[3]=Math.abs(t[3]),e},R.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},R.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]},R.equalsEpsilon=function(t,e,a){return a=n.defaultValue(a,0),t===e||n.defined(t)&&n.defined(e)&&Math.abs(t[0]-e[0])<=a&&Math.abs(t[1]-e[1])<=a&&Math.abs(t[2]-e[2])<=a&&Math.abs(t[3]-e[3])<=a},R.IDENTITY=Object.freeze(new R(1,0,0,1)),R.ZERO=Object.freeze(new R(0,0,0,0)),R.COLUMN0ROW0=0,R.COLUMN0ROW1=1,R.COLUMN1ROW0=2,R.COLUMN1ROW1=3,Object.defineProperties(R.prototype,{length:{get:function(){return R.packedLength}}}),R.prototype.clone=function(t){return R.clone(this,t)},R.prototype.equals=function(t){return R.equals(this,t)},R.prototype.equalsEpsilon=function(t,e){return R.equalsEpsilon(this,t,e)},R.prototype.toString=function(){return`(${this[0]}, ${this[2]})\n(${this[1]}, ${this[3]})`},t.Cartesian2=I,t.Cartesian4=u,t.Matrix2=R,t.Matrix4=d,t.Rectangle=E}));
