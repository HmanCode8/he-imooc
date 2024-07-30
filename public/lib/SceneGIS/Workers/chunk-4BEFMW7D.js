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

import{a as f}from"./chunk-2F4MHS2T.js";import{a as n,b as c}from"./chunk-3Z2AZRQC.js";import{c as I,d as _,e as o}from"./chunk-A5XXOFX2.js";var P=I((O,d)=>{var u=function(t){t==null&&(t=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};u.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++){var t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(((t&4294901760)>>>16)*1812433253<<16)+(t&65535)*1812433253+this.mti,this.mt[this.mti]>>>=0}};u.prototype.init_by_array=function(t,i){var e,s,h;for(this.init_seed(19650218),e=1,s=0,h=this.N>i?this.N:i;h;h--){var a=this.mt[e-1]^this.mt[e-1]>>>30;this.mt[e]=(this.mt[e]^(((a&4294901760)>>>16)*1664525<<16)+(a&65535)*1664525)+t[s]+s,this.mt[e]>>>=0,e++,s++,e>=this.N&&(this.mt[0]=this.mt[this.N-1],e=1),s>=i&&(s=0)}for(h=this.N-1;h;h--){var a=this.mt[e-1]^this.mt[e-1]>>>30;this.mt[e]=(this.mt[e]^(((a&4294901760)>>>16)*1566083941<<16)+(a&65535)*1566083941)-e,this.mt[e]>>>=0,e++,e>=this.N&&(this.mt[0]=this.mt[this.N-1],e=1)}this.mt[0]=2147483648};u.prototype.random_int=function(){var t,i=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var e;for(this.mti==this.N+1&&this.init_seed(5489),e=0;e<this.N-this.M;e++)t=this.mt[e]&this.UPPER_MASK|this.mt[e+1]&this.LOWER_MASK,this.mt[e]=this.mt[e+this.M]^t>>>1^i[t&1];for(;e<this.N-1;e++)t=this.mt[e]&this.UPPER_MASK|this.mt[e+1]&this.LOWER_MASK,this.mt[e]=this.mt[e+(this.M-this.N)]^t>>>1^i[t&1];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^i[t&1],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,t^=t>>>18,t>>>0};u.prototype.random_int31=function(){return this.random_int()>>>1};u.prototype.random_incl=function(){return this.random_int()*(1/4294967295)};u.prototype.random=function(){return this.random_int()*(1/4294967296)};u.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)};u.prototype.random_long=function(){var t=this.random_int()>>>5,i=this.random_int()>>>6;return(t*67108864+i)*(1/9007199254740992)};d.exports=u});var m=_(P(),1);var r={};r.EPSILON1=.1;r.EPSILON2=.01;r.EPSILON3=.001;r.EPSILON4=1e-4;r.EPSILON5=1e-5;r.EPSILON6=1e-6;r.EPSILON7=1e-7;r.EPSILON8=1e-8;r.EPSILON9=1e-9;r.EPSILON10=1e-10;r.EPSILON11=1e-11;r.EPSILON12=1e-12;r.EPSILON13=1e-13;r.EPSILON14=1e-14;r.EPSILON15=1e-15;r.EPSILON16=1e-16;r.EPSILON17=1e-17;r.EPSILON18=1e-18;r.EPSILON19=1e-19;r.EPSILON20=1e-20;r.EPSILON21=1e-21;r.GRAVITATIONALPARAMETER=3986004418e5;r.SOLAR_RADIUS=6955e5;r.LUNAR_RADIUS=1737400;r.SIXTY_FOUR_KILOBYTES=64*1024;r.FOUR_GIGABYTES=4*1024*1024*1024;r.sign=f(Math.sign,function(i){return i=+i,i===0||i!==i?i:i>0?1:-1});r.signNotZero=function(t){return t<0?-1:1};r.toSNorm=function(t,i){return i=f(i,255),Math.round((r.clamp(t,-1,1)*.5+.5)*i)};r.fromSNorm=function(t,i){return i=f(i,255),r.clamp(t,0,i)/i*2-1};r.normalize=function(t,i,e){return e=Math.max(e-i,0),e===0?0:r.clamp((t-i)/e,0,1)};r.sinh=f(Math.sinh,function(i){return(Math.exp(i)-Math.exp(-i))/2});r.cosh=f(Math.cosh,function(i){return(Math.exp(i)+Math.exp(-i))/2});r.lerp=function(t,i,e){return(1-e)*t+e*i};r.PI=Math.PI;r.ONE_OVER_PI=1/Math.PI;r.PI_OVER_TWO=Math.PI/2;r.PI_OVER_THREE=Math.PI/3;r.PI_OVER_FOUR=Math.PI/4;r.PI_OVER_SIX=Math.PI/6;r.THREE_PI_OVER_TWO=3*Math.PI/2;r.TWO_PI=2*Math.PI;r.ONE_OVER_TWO_PI=1/(2*Math.PI);r.RADIANS_PER_DEGREE=Math.PI/180;r.DEGREES_PER_RADIAN=180/Math.PI;r.RADIANS_PER_ARCSECOND=r.RADIANS_PER_DEGREE/3600;r.toRadians=function(t){if(!o(t))throw new n("degrees is required.");return t*r.RADIANS_PER_DEGREE};r.toDegrees=function(t){if(!o(t))throw new n("radians is required.");return t*r.DEGREES_PER_RADIAN};r.convertLongitudeRange=function(t){if(!o(t))throw new n("angle is required.");let i=r.TWO_PI,e=t-Math.floor(t/i)*i;return e<-Math.PI?e+i:e>=Math.PI?e-i:e};r.clampToLatitudeRange=function(t){if(!o(t))throw new n("angle is required.");return r.clamp(t,-1*r.PI_OVER_TWO,r.PI_OVER_TWO)};r.negativePiToPi=function(t){if(!o(t))throw new n("angle is required.");return t>=-r.PI&&t<=r.PI?t:r.zeroToTwoPi(t+r.PI)-r.PI};r.zeroToTwoPi=function(t){if(!o(t))throw new n("angle is required.");if(t>=0&&t<=r.TWO_PI)return t;let i=r.mod(t,r.TWO_PI);return Math.abs(i)<r.EPSILON14&&Math.abs(t)>r.EPSILON14?r.TWO_PI:i};r.mod=function(t,i){if(!o(t))throw new n("m is required.");if(!o(i))throw new n("n is required.");if(i===0)throw new n("divisor cannot be 0.");return r.sign(t)===r.sign(i)&&Math.abs(t)<Math.abs(i)?t:(t%i+i)%i};r.equalsEpsilon=function(t,i,e,s){if(!o(t))throw new n("left is required.");if(!o(i))throw new n("right is required.");e=f(e,0),s=f(s,e);let h=Math.abs(t-i);return h<=s||h<=e*Math.max(Math.abs(t),Math.abs(i))};r.lessThan=function(t,i,e){if(!o(t))throw new n("first is required.");if(!o(i))throw new n("second is required.");if(!o(e))throw new n("absoluteEpsilon is required.");return t-i<-e};r.lessThanOrEquals=function(t,i,e){if(!o(t))throw new n("first is required.");if(!o(i))throw new n("second is required.");if(!o(e))throw new n("absoluteEpsilon is required.");return t-i<e};r.greaterThan=function(t,i,e){if(!o(t))throw new n("first is required.");if(!o(i))throw new n("second is required.");if(!o(e))throw new n("absoluteEpsilon is required.");return t-i>e};r.greaterThanOrEquals=function(t,i,e){if(!o(t))throw new n("first is required.");if(!o(i))throw new n("second is required.");if(!o(e))throw new n("absoluteEpsilon is required.");return t-i>-e};var w=[1];r.factorial=function(t){if(typeof t!="number"||t<0)throw new n("A number greater than or equal to 0 is required.");let i=w.length;if(t>=i){let e=w[i-1];for(let s=i;s<=t;s++){let h=e*s;w.push(h),e=h}}return w[t]};r.incrementWrap=function(t,i,e){if(e=f(e,0),!o(t))throw new n("n is required.");if(i<=e)throw new n("maximumValue must be greater than minimumValue.");return++t,t>i&&(t=e),t};r.isPowerOfTwo=function(t){if(typeof t!="number"||t<0||t>4294967295)throw new n("A number between 0 and (2^32)-1 is required.");return t!==0&&(t&t-1)===0};r.nextPowerOfTwo=function(t){if(typeof t!="number"||t<0||t>2147483648)throw new n("A number between 0 and 2^31 is required.");return--t,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t,t};r.previousPowerOfTwo=function(t){if(typeof t!="number"||t<0||t>4294967295)throw new n("A number between 0 and (2^32)-1 is required.");return t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t|=t>>32,t=(t>>>0)-(t>>>1),t};r.clamp=function(t,i,e){return c.typeOf.number("value",t),c.typeOf.number("min",i),c.typeOf.number("max",e),t<i?i:t>e?e:t};var E=new m.default;r.setRandomNumberSeed=function(t){if(!o(t))throw new n("seed is required.");E=new m.default(t)};r.nextRandomNumber=function(){return E.random()};r.randomBetween=function(t,i){return r.nextRandomNumber()*(i-t)+t};r.acosClamped=function(t){if(!o(t))throw new n("value is required.");return Math.acos(r.clamp(t,-1,1))};r.asinClamped=function(t){if(!o(t))throw new n("value is required.");return Math.asin(r.clamp(t,-1,1))};r.chordLength=function(t,i){if(!o(t))throw new n("angle is required.");if(!o(i))throw new n("radius is required.");return 2*i*Math.sin(t*.5)};r.logBase=function(t,i){if(!o(t))throw new n("number is required.");if(!o(i))throw new n("base is required.");return Math.log(t)/Math.log(i)};r.cbrt=f(Math.cbrt,function(i){let e=Math.pow(Math.abs(i),.3333333333333333);return i<0?-e:e});r.log2=f(Math.log2,function(i){return Math.log(i)*Math.LOG2E});r.fog=function(t,i){let e=t*i;return 1-Math.exp(-(e*e))};r.fastApproximateAtan=function(t){return c.typeOf.number("x",t),t*(-.1784*Math.abs(t)-.0663*t*t+1.0301)};r.fastApproximateAtan2=function(t,i){c.typeOf.number("x",t),c.typeOf.number("y",i);let e,s=Math.abs(t);e=Math.abs(i);let h=Math.max(s,e);e=Math.min(s,e);let a=e/h;if(isNaN(a))throw new n("either x or y must be nonzero");return s=r.fastApproximateAtan(a),s=Math.abs(i)>Math.abs(t)?r.PI_OVER_TWO-s:s,s=t<0?r.PI-s:s,s=i<0?-s:s,s};var A=r;export{A as a};
