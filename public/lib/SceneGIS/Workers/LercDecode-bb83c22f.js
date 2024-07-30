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
define(["exports","./_commonjsHelpers-f78443cf"],(function(e,t){"use strict";var a=Object.freeze({NONE:0,LERC:1}),r=t.createCommonjsModule((function(e){
/* Copyright 2015-2018 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */
!function(){var t,a,r,i,n,s,l,f,o,u,c,h,d,m,p,g,x=(t={defaultNoDataValue:-34027999387901484e22,decode:function(e,s){var l=(s=s||{}).encodedMaskData||null===s.encodedMaskData,f=n(e,s.inputOffset||0,l),o=null!==s.noDataValue?s.noDataValue:t.defaultNoDataValue,u=a(f,s.pixelType||Float32Array,s.encodedMaskData,o,s.returnMask),c={width:f.width,height:f.height,pixelData:u.resultPixels,minValue:u.minValue,maxValue:f.pixels.maxValue,noDataValue:o};return u.resultMask&&(c.maskData=u.resultMask),s.returnEncodedMask&&f.mask&&(c.encodedMaskData=f.mask.bitset?f.mask.bitset:null),s.returnFileInfo&&(c.fileInfo=r(f),s.computeUsedBitDepths&&(c.fileInfo.bitDepths=i(f))),c}},a=function(e,t,a,r,i){var n,l,f,o=0,u=e.pixels.numBlocksX,c=e.pixels.numBlocksY,h=Math.floor(e.width/u),d=Math.floor(e.height/c),m=2*e.maxZError,p=Number.MAX_VALUE;a=a||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),i&&a&&(f=new Uint8Array(e.width*e.height));for(var g,x,k=new Float32Array(h*d),w=0;w<=c;w++){var y=w!==c?d:e.height%c;if(0!==y)for(var b=0;b<=u;b++){var U=b!==u?h:e.width%u;if(0!==U){var v,I,V,M,D=w*e.width*d+b*h,A=e.width-U,B=e.pixels.blocks[o];if(B.encoding<2?(0===B.encoding?v=B.rawData:(s(B.stuffedData,B.bitsPerPixel,B.numValidPixels,B.offset,m,k,e.pixels.maxValue),v=k),I=0):V=2===B.encoding?0:B.offset,a)for(x=0;x<y;x++){for(7&D&&(M=a[D>>3],M<<=7&D),g=0;g<U;g++)7&D||(M=a[D>>3]),128&M?(f&&(f[D]=1),p=p>(n=B.encoding<2?v[I++]:V)?n:p,l[D++]=n):(f&&(f[D]=0),l[D++]=r),M<<=1;D+=A}else if(B.encoding<2)for(x=0;x<y;x++){for(g=0;g<U;g++)p=p>(n=v[I++])?n:p,l[D++]=n;D+=A}else for(p=p>V?V:p,x=0;x<y;x++){for(g=0;g<U;g++)l[D++]=V;D+=A}if(1===B.encoding&&I!==B.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:l,resultMask:f,minValue:p}},r=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},i=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,a={},r=0;r<t;r++){var i=e.pixels.blocks[r];0===i.encoding?a.float32=!0:1===i.encoding?a[i.bitsPerPixel]=!0:a[0]=!0}return Object.keys(a)},n=function(e,t,a){var r={},i=new Uint8Array(e,t,10);if(r.fileIdentifierString=String.fromCharCode.apply(null,i),"CntZImage"!==r.fileIdentifierString.trim())throw"Unexpected file identifier string: "+r.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(r.fileVersion=n.getInt32(0,!0),r.imageType=n.getInt32(4,!0),r.height=n.getUint32(8,!0),r.width=n.getUint32(12,!0),r.maxZError=n.getFloat64(16,!0),t+=24,!a)if(n=new DataView(e,t,16),r.mask={},r.mask.numBlocksY=n.getUint32(0,!0),r.mask.numBlocksX=n.getUint32(4,!0),r.mask.numBytes=n.getUint32(8,!0),r.mask.maxValue=n.getFloat32(12,!0),t+=16,r.mask.numBytes>0){var s=new Uint8Array(Math.ceil(r.width*r.height/8)),l=(n=new DataView(e,t,r.mask.numBytes)).getInt16(0,!0),f=2,o=0;do{if(l>0)for(;l--;)s[o++]=n.getUint8(f++);else{var u=n.getUint8(f++);for(l=-l;l--;)s[o++]=u}l=n.getInt16(f,!0),f+=2}while(f<r.mask.numBytes);if(-32768!==l||o<s.length)throw"Unexpected end of mask RLE encoding";r.mask.bitset=s,t+=r.mask.numBytes}else 0==(r.mask.numBytes|r.mask.numBlocksY|r.mask.maxValue)&&(r.mask.bitset=new Uint8Array(Math.ceil(r.width*r.height/8)));n=new DataView(e,t,16),r.pixels={},r.pixels.numBlocksY=n.getUint32(0,!0),r.pixels.numBlocksX=n.getUint32(4,!0),r.pixels.numBytes=n.getUint32(8,!0),r.pixels.maxValue=n.getFloat32(12,!0),t+=16;var c=r.pixels.numBlocksX,h=r.pixels.numBlocksY,d=c+(r.width%c>0?1:0),m=h+(r.height%h>0?1:0);r.pixels.blocks=new Array(d*m);for(var p=0,g=0;g<m;g++)for(var x=0;x<d;x++){var k=0,w=e.byteLength-t;n=new DataView(e,t,Math.min(10,w));var y={};r.pixels.blocks[p++]=y;var b=n.getUint8(0);if(k++,y.encoding=63&b,y.encoding>3)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==b&&2!==b){if(b>>=6,y.offsetType=b,2===b)y.offset=n.getInt8(1),k++;else if(1===b)y.offset=n.getInt16(1,!0),k+=2;else{if(0!==b)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),k+=4}if(1===y.encoding)if(b=n.getUint8(k),k++,y.bitsPerPixel=63&b,b>>=6,y.numValidPixelsType=b,2===b)y.numValidPixels=n.getUint8(k),k++;else if(1===b)y.numValidPixels=n.getUint16(k,!0),k+=2;else{if(0!==b)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(k,!0),k+=4}}var U;if(t+=k,3!==y.encoding)if(0===y.encoding){var v=(r.pixels.numBytes-1)/4;if(v!==Math.floor(v))throw"uncompressed block has invalid length";U=new ArrayBuffer(4*v),new Uint8Array(U).set(new Uint8Array(e,t,4*v));var I=new Float32Array(U);y.rawData=I,t+=4*v}else if(1===y.encoding){var V=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),M=Math.ceil(V/4);U=new ArrayBuffer(4*M),new Uint8Array(U).set(new Uint8Array(e,t,V)),y.stuffedData=new Uint32Array(U),t+=V}}else t++}return r.eofOffset=t,r},s=function(e,t,a,r,i,n,s){var l,f,o,u=(1<<t)-1,c=0,h=0,d=Math.ceil((s-r)/i),m=4*e.length-Math.ceil(t*a/8);for(e[e.length-1]<<=8*m,l=0;l<a;l++){if(0===h&&(o=e[c++],h=32),h>=t)f=o>>>h-t&u,h-=t;else{var p=t-h;f=(o&u)<<p&u,f+=(o=e[c++])>>>(h=32-p)}n[l]=f<d?r+f*i:s}return n},t),k=(l=function(e,t,a,r,i,n,s,l){var f,o,u,c,h,d=(1<<a)-1,m=0,p=0,g=4*e.length-Math.ceil(a*r/8);if(e[e.length-1]<<=8*g,i)for(f=0;f<r;f++)0===p&&(u=e[m++],p=32),p>=a?(o=u>>>p-a&d,p-=a):(o=(u&d)<<(c=a-p)&d,o+=(u=e[m++])>>>(p=32-c)),t[f]=i[o];else for(h=Math.ceil((l-n)/s),f=0;f<r;f++)0===p&&(u=e[m++],p=32),p>=a?(o=u>>>p-a&d,p-=a):(o=(u&d)<<(c=a-p)&d,o+=(u=e[m++])>>>(p=32-c)),t[f]=o<h?n+o*s:l},f=function(e,t,a,r,i,n){var s,l=(1<<t)-1,f=0,o=0,u=0,c=0,h=0,d=[],m=4*e.length-Math.ceil(t*a/8);e[e.length-1]<<=8*m;var p=Math.ceil((n-r)/i);for(o=0;o<a;o++)0===c&&(s=e[f++],c=32),c>=t?(h=s>>>c-t&l,c-=t):(h=(s&l)<<(u=t-c)&l,h+=(s=e[f++])>>>(c=32-u)),d[o]=h<p?r+h*i:n;return d.unshift(r),d},o=function(e,t,a,r,i,n,s,l){var f,o,u,c,h=(1<<a)-1,d=0,m=0,p=0;if(i)for(f=0;f<r;f++)0===m&&(u=e[d++],m=32,p=0),m>=a?(o=u>>>p&h,m-=a,p+=a):(o=u>>>p&h,m=32-(c=a-m),o|=((u=e[d++])&(1<<c)-1)<<a-c,p=c),t[f]=i[o];else{var g=Math.ceil((l-n)/s);for(f=0;f<r;f++)0===m&&(u=e[d++],m=32,p=0),m>=a?(o=u>>>p&h,m-=a,p+=a):(o=u>>>p&h,m=32-(c=a-m),o|=((u=e[d++])&(1<<c)-1)<<a-c,p=c),t[f]=o<g?n+o*s:l}return t},u=function(e,t,a,r,i,n){var s,l=(1<<t)-1,f=0,o=0,u=0,c=0,h=0,d=0,m=[],p=Math.ceil((n-r)/i);for(o=0;o<a;o++)0===c&&(s=e[f++],c=32,d=0),c>=t?(h=s>>>d&l,c-=t,d+=t):(h=s>>>d&l,c=32-(u=t-c),h|=((s=e[f++])&(1<<u)-1)<<t-u,d=u),m[o]=h<p?r+h*i:n;return m.unshift(r),m},c=function(e,t,a,r){var i,n,s,l,f=(1<<a)-1,o=0,u=0,c=4*e.length-Math.ceil(a*r/8);for(e[e.length-1]<<=8*c,i=0;i<r;i++)0===u&&(s=e[o++],u=32),u>=a?(n=s>>>u-a&f,u-=a):(n=(s&f)<<(l=a-u)&f,n+=(s=e[o++])>>>(u=32-l)),t[i]=n;return t},h=function(e,t,a,r){var i,n,s,l,f=(1<<a)-1,o=0,u=0,c=0;for(i=0;i<r;i++)0===u&&(s=e[o++],u=32,c=0),u>=a?(n=s>>>c&f,u-=a,c+=a):(n=s>>>c&f,u=32-(l=a-u),n|=((s=e[o++])&(1<<l)-1)<<a-l,c=l),t[i]=n;return t},d={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,a=65535,r=e.length,i=Math.floor(r/2),n=0;i;){var s=i>=359?359:i;i-=s;do{t+=e[n++]<<8,a+=t+=e[n++]}while(--s);t=(65535&t)+(t>>>16),a=(65535&a)+(a>>>16)}return 1&r&&(a+=t+=e[n]<<8),((a=(65535&a)+(a>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var a=t.ptr,r=new Uint8Array(e,a,6),i={};if(i.fileIdentifierString=String.fromCharCode.apply(null,r),0!==i.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+i.fileIdentifierString;a+=6;var n,s=new DataView(e,a,8),l=s.getInt32(0,!0);if(i.fileVersion=l,a+=4,l>=3&&(i.checksum=s.getUint32(4,!0),a+=4),s=new DataView(e,a,12),i.height=s.getUint32(0,!0),i.width=s.getUint32(4,!0),a+=8,l>=4?(i.numDims=s.getUint32(8,!0),a+=4):i.numDims=1,s=new DataView(e,a,40),i.numValidPixel=s.getUint32(0,!0),i.microBlockSize=s.getInt32(4,!0),i.blobSize=s.getInt32(8,!0),i.imageType=s.getInt32(12,!0),i.maxZError=s.getFloat64(16,!0),i.zMin=s.getFloat64(24,!0),i.zMax=s.getFloat64(32,!0),a+=40,t.headerInfo=i,t.ptr=a,l>=3&&(n=l>=4?52:48,this.computeChecksumFletcher32(new Uint8Array(e,a-n,i.blobSize-14))!==i.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var a=t.headerInfo,r=this.getDataTypeArray(a.imageType),i=a.numDims*this.getDataTypeSize(a.imageType),n=this.readSubArray(e,t.ptr,r,i),s=this.readSubArray(e,t.ptr+i,r,i);t.ptr+=2*i;var l,f=!0;for(l=0;l<a.numDims;l++)if(n[l]!==s[l]){f=!1;break}return a.minValues=n,a.maxValues=s,f},readSubArray:function(e,t,a,r){var i;if(a===Uint8Array)i=new Uint8Array(e,t,r);else{var n=new ArrayBuffer(r);new Uint8Array(n).set(new Uint8Array(e,t,r)),i=new a(n)}return i},readMask:function(e,t){var a,r,i=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,f=new DataView(e,i,4),o={};if(o.numBytes=f.getUint32(0,!0),i+=4,(0===l||s===l)&&0!==o.numBytes)throw"invalid mask";if(0===l)a=new Uint8Array(Math.ceil(s/8)),o.bitset=a,r=new Uint8Array(s),t.pixels.resultMask=r,i+=o.numBytes;else if(o.numBytes>0){a=new Uint8Array(Math.ceil(s/8));var u=(f=new DataView(e,i,o.numBytes)).getInt16(0,!0),c=2,h=0,d=0;do{if(u>0)for(;u--;)a[h++]=f.getUint8(c++);else for(d=f.getUint8(c++),u=-u;u--;)a[h++]=d;u=f.getInt16(c,!0),c+=2}while(c<o.numBytes);if(-32768!==u||h<a.length)throw"Unexpected end of mask RLE encoding";r=new Uint8Array(s);var m=0,p=0;for(p=0;p<s;p++)7&p?(m=a[p>>3],m<<=7&p):m=a[p>>3],128&m&&(r[p]=1);t.pixels.resultMask=r,o.bitset=a,i+=o.numBytes}return t.ptr=i,t.mask=o,!0},readDataOneSweep:function(e,t,a){var r,i=t.ptr,n=t.headerInfo,s=n.numDims,l=n.width*n.height,f=n.imageType,o=n.numValidPixel*d.getDataTypeSize(f)*s,u=t.pixels.resultMask;if(a===Uint8Array)r=new Uint8Array(e,i,o);else{var c=new ArrayBuffer(o);new Uint8Array(c).set(new Uint8Array(e,i,o)),r=new a(c)}if(r.length===l*s)t.pixels.resultPixels=r;else{t.pixels.resultPixels=new a(l*s);var h=0,m=0,p=0,g=0;if(s>1)for(p=0;p<s;p++)for(g=p*l,m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[g+m]=r[h++]);else for(m=0;m<l;m++)u[m]&&(t.pixels.resultPixels[m]=r[h++])}return i+=o,t.ptr=i,!0},readHuffmanTree:function(e,t){var a=this.HUFFMAN_LUT_BITS_MAX,r=new DataView(e,t.ptr,16);if(t.ptr+=16,r.getInt32(0,!0)<2)throw"unsupported Huffman version";var i=r.getInt32(4,!0),n=r.getInt32(8,!0),s=r.getInt32(12,!0);if(n>=s)return!1;var l=new Uint32Array(s-n);d.decodeBits(e,t,l);var f,o,u,c,h=[];for(f=n;f<s;f++)h[o=f-(f<i?0:i)]={first:l[f-n],second:null};var p=e.byteLength-t.ptr,g=Math.ceil(p/4),x=new ArrayBuffer(4*g);new Uint8Array(x).set(new Uint8Array(e,t.ptr,p));var k,w=new Uint32Array(x),y=0,b=0;for(k=w[0],f=n;f<s;f++)(c=h[o=f-(f<i?0:i)].first)>0&&(h[o].second=k<<y>>>32-c,32-y>=c?32===(y+=c)&&(y=0,k=w[++b]):(y+=c-32,k=w[++b],h[o].second|=k>>>32-y));var U=0,v=0,I=new m;for(f=0;f<h.length;f++)void 0!==h[f]&&(U=Math.max(U,h[f].first));v=U>=a?a:U,U>=30&&console.log("WARning, large NUM LUT BITS IS "+U);var V,M,D,A,B,T=[];for(f=n;f<s;f++)if((c=h[o=f-(f<i?0:i)].first)>0)if(V=[c,o],c<=v)for(M=h[o].second<<v-c,D=1<<v-c,u=0;u<D;u++)T[M|u]=V;else for(M=h[o].second,B=I,A=c-1;A>=0;A--)M>>>A&1?(B.right||(B.right=new m),B=B.right):(B.left||(B.left=new m),B=B.left),0!==A||B.val||(B.val=V[1]);return{decodeLut:T,numBitsLUTQick:v,numBitsLUT:U,tree:I,stuffedData:w,srcPtr:b,bitPos:y}},readHuffman:function(e,t,a){var r,i,n,s,l,f,o,u,c,h=t.headerInfo,d=h.numDims,m=t.headerInfo.height,p=t.headerInfo.width,g=p*m,x=this.readHuffmanTree(e,t),k=x.decodeLut,w=x.tree,y=x.stuffedData,b=x.srcPtr,U=x.bitPos,v=x.numBitsLUTQick,I=x.numBitsLUT,V=0===t.headerInfo.imageType?128:0,M=t.pixels.resultMask,D=0;U>0&&(b++,U=0);var A,B=y[b],T=1===t.encodeMode,P=new a(g*d),S=P;for(A=0;A<h.numDims;A++){if(d>1&&(S=new a(P.buffer,g*A,g),D=0),t.headerInfo.numValidPixel===p*m)for(u=0,f=0;f<m;f++)for(o=0;o<p;o++,u++){if(i=0,l=s=B<<U>>>32-v,32-U<v&&(l=s|=y[b+1]>>>64-U-v),k[l])i=k[l][1],U+=k[l][0];else for(l=s=B<<U>>>32-I,32-U<I&&(l=s|=y[b+1]>>>64-U-I),r=w,c=0;c<I;c++)if(!(r=s>>>I-c-1&1?r.right:r.left).left&&!r.right){i=r.val,U=U+c+1;break}U>=32&&(U-=32,B=y[++b]),n=i-V,T?(n+=o>0?D:f>0?S[u-p]:D,n&=255,S[u]=n,D=n):S[u]=n}else for(u=0,f=0;f<m;f++)for(o=0;o<p;o++,u++)if(M[u]){if(i=0,l=s=B<<U>>>32-v,32-U<v&&(l=s|=y[b+1]>>>64-U-v),k[l])i=k[l][1],U+=k[l][0];else for(l=s=B<<U>>>32-I,32-U<I&&(l=s|=y[b+1]>>>64-U-I),r=w,c=0;c<I;c++)if(!(r=s>>>I-c-1&1?r.right:r.left).left&&!r.right){i=r.val,U=U+c+1;break}U>=32&&(U-=32,B=y[++b]),n=i-V,T?(o>0&&M[u-1]?n+=D:f>0&&M[u-p]?n+=S[u-p]:n+=D,n&=255,S[u]=n,D=n):S[u]=n}t.ptr=t.ptr+4*(b+1)+(U>0?4:0)}t.pixels.resultPixels=P},decodeBits:function(e,t,a,r,i){var n=t.headerInfo,s=n.fileVersion,d=0,m=new DataView(e,t.ptr,5),p=m.getUint8(0);d++;var g=p>>6,x=0===g?4:3-g,k=(32&p)>0,w=31&p,y=0;if(1===x)y=m.getUint8(d),d++;else if(2===x)y=m.getUint16(d,!0),d+=2;else{if(4!==x)throw"Invalid valid pixel count type";y=m.getUint32(d,!0),d+=4}var b,U,v,I,V,M,D,A,B,T=2*n.maxZError,P=n.numDims>1?n.maxValues[i]:n.zMax;if(k){for(t.counter.lut++,A=m.getUint8(d),d++,I=Math.ceil((A-1)*w/8),V=Math.ceil(I/4),U=new ArrayBuffer(4*V),v=new Uint8Array(U),t.ptr+=d,v.set(new Uint8Array(e,t.ptr,I)),D=new Uint32Array(U),t.ptr+=I,B=0;A-1>>>B;)B++;I=Math.ceil(y*B/8),V=Math.ceil(I/4),U=new ArrayBuffer(4*V),(v=new Uint8Array(U)).set(new Uint8Array(e,t.ptr,I)),b=new Uint32Array(U),t.ptr+=I,M=s>=3?u(D,w,A-1,r,T,P):f(D,w,A-1,r,T,P),s>=3?o(b,a,B,y,M):l(b,a,B,y,M)}else t.counter.bitstuffer++,B=w,t.ptr+=d,B>0&&(I=Math.ceil(y*B/8),V=Math.ceil(I/4),U=new ArrayBuffer(4*V),(v=new Uint8Array(U)).set(new Uint8Array(e,t.ptr,I)),b=new Uint32Array(U),t.ptr+=I,s>=3?null==r?h(b,a,B,y):o(b,a,B,y,!1,r,T,P):null==r?c(b,a,B,y):l(b,a,B,y,!1,r,T,P))},readTiles:function(e,t,a){var r=t.headerInfo,i=r.width,n=r.height,s=r.microBlockSize,l=r.imageType,f=d.getDataTypeSize(l),o=Math.ceil(i/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=o,t.pixels.ptr=0;var c,h,m,p,g,x,k,w,y=0,b=0,U=0,v=0,I=0,V=0,M=0,D=0,A=0,B=0,T=0,P=0,S=0,z=0,F=0,L=new a(s*s),O=n%s||s,C=i%s||s,E=r.numDims,X=t.pixels.resultMask,H=t.pixels.resultPixels;for(U=0;U<u;U++)for(I=U!==u-1?s:O,v=0;v<o;v++)for(B=U*i*s+v*s,T=i-(V=v!==o-1?s:C),w=0;w<E;w++){if(E>1&&(H=new a(t.pixels.resultPixels.buffer,i*n*w*f,i*n)),M=e.byteLength-t.ptr,h={},F=0,F++,A=(D=(c=new DataView(e,t.ptr,Math.min(10,M))).getUint8(0))>>6&255,(D>>2&15)!=(v*s>>3&15))throw"integrity issue";if((g=3&D)>3)throw t.ptr+=F,"Invalid block encoding ("+g+")";if(2!==g)if(0===g){if(t.counter.uncompressed++,t.ptr+=F,P=(P=I*V*f)<(S=e.byteLength-t.ptr)?P:S,m=new ArrayBuffer(P%f==0?P:P+f-P%f),new Uint8Array(m).set(new Uint8Array(e,t.ptr,P)),p=new a(m),z=0,X)for(y=0;y<I;y++){for(b=0;b<V;b++)X[B]&&(H[B]=p[z++]),B++;B+=T}else for(y=0;y<I;y++){for(b=0;b<V;b++)H[B++]=p[z++];B+=T}t.ptr+=z*f}else if(x=d.getDataTypeUsed(l,A),k=d.getOnePixel(h,F,x,c),F+=d.getDataTypeSize(x),3===g)if(t.ptr+=F,t.counter.constantoffset++,X)for(y=0;y<I;y++){for(b=0;b<V;b++)X[B]&&(H[B]=k),B++;B+=T}else for(y=0;y<I;y++){for(b=0;b<V;b++)H[B++]=k;B+=T}else if(t.ptr+=F,d.decodeBits(e,t,L,k,w),F=0,X)for(y=0;y<I;y++){for(b=0;b<V;b++)X[B]&&(H[B]=L[F++]),B++;B+=T}else for(y=0;y<I;y++){for(b=0;b<V;b++)H[B++]=L[F++];B+=T}else t.counter.constant++,t.ptr+=F}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:d.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,a=e.headerInfo.numDims,r=e.headerInfo.height*e.headerInfo.width,i=r*a,n=0,s=0,l=0,f=e.pixels.resultMask;if(f)if(a>1)for(n=0;n<a;n++)for(l=n*r,s=0;s<r;s++)f[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<r;s++)f[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<i;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:default:t=Float32Array;break;case 7:t=Float64Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:default:t="F32";break;case 7:t="F64"}return t},isValidPixelValue:function(e,t){if(null==t)return!1;var a;switch(e){case 0:a=t>=-128&&t<=127;break;case 1:a=t>=0&&t<=255;break;case 2:a=t>=-32768&&t<=32767;break;case 3:a=t>=0&&t<=65536;break;case 4:a=t>=-2147483648&&t<=2147483647;break;case 5:a=t>=0&&t<=4294967296;break;case 6:a=t>=-34027999387901484e22&&t<=34027999387901484e22;break;case 7:a=t>=5e-324&&t<=17976931348623157e292;break;default:a=!1}return a},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var a=e;switch(e){case 2:case 4:a=e-t;break;case 3:case 5:a=e-2*t;break;case 6:a=0===t?e:1===t?2:1;break;case 7:a=0===t?e:e-2*t+1;break;default:a=e}return a},getOnePixel:function(e,t,a,r){var i=0;switch(a){case 0:i=r.getInt8(t);break;case 1:i=r.getUint8(t);break;case 2:i=r.getInt16(t,!0);break;case 3:i=r.getUint16(t,!0);break;case 4:i=r.getInt32(t,!0);break;case 5:i=r.getUInt32(t,!0);break;case 6:i=r.getFloat32(t,!0);break;case 7:i=r.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return i}},m=function(e,t,a){this.val=e,this.left=t,this.right=a},{decode:function(e,t){var a=(t=t||{}).noDataValue,r=0,i={};i.ptr=t.inputOffset||0,i.pixels={},d.readHeaderInfo(e,i);var n=i.headerInfo,s=n.fileVersion,l=d.getDataTypeArray(n.imageType);d.readMask(e,i),n.numValidPixel===n.width*n.height||i.pixels.resultMask||(i.pixels.resultMask=t.maskData);var f,o=n.width*n.height;if(i.pixels.resultPixels=new l(o*n.numDims),i.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)d.constructConstantSurface(i);else if(s>=4&&d.checkMinMaxRanges(e,i))d.constructConstantSurface(i);else{var u=new DataView(e,i.ptr,2),c=u.getUint8(0);if(i.ptr++,c)d.readDataOneSweep(e,i,l);else if(s>1&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var h=u.getUint8(1);if(i.ptr++,i.encodeMode=h,h>2||s<4&&h>1)throw"Invalid Huffman flag "+h;h?d.readHuffman(e,i,l):d.readTiles(e,i,l)}else d.readTiles(e,i,l)}i.eofOffset=i.ptr,t.inputOffset?(f=i.headerInfo.blobSize+t.inputOffset-i.ptr,Math.abs(f)>=1&&(i.eofOffset=t.inputOffset+i.headerInfo.blobSize)):(f=i.headerInfo.blobSize-i.ptr,Math.abs(f)>=1&&(i.eofOffset=i.headerInfo.blobSize));var m={width:n.width,height:n.height,pixelData:i.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:i.pixels.resultMask};if(i.pixels.resultMask&&d.isValidPixelValue(n.imageType,a)){var p=i.pixels.resultMask;for(r=0;r<o;r++)p[r]||(m.pixelData[r]=a);m.noDataValue=a}return i.noDataValue=a,t.returnFileInfo&&(m.fileInfo=d.formatFileInfo(i)),m},getBandCount:function(e){for(var t=0,a=0,r={ptr:0,pixels:{}};a<e.byteLength-58;)d.readHeaderInfo(e,r),a+=r.headerInfo.blobSize,t++,r.ptr=a;return t}}),w=(p=new ArrayBuffer(4),g=new Uint8Array(p),new Uint32Array(p)[0]=1,1===g[0]),y={decode:function(e,t){if(!w)throw"Big endian system is not supported.";var a,r,i=(t=t||{}).inputOffset||0,n=new Uint8Array(e,i,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())a=x,r=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;a=k,r=2}for(var l,f,o,u,c,h,d=0,m=e.byteLength-10,p=[],g={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};i<m;){var y=a.decode(e,{inputOffset:i,encodedMaskData:l,maskData:o,returnMask:0===d,returnEncodedMask:0===d,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});i=y.fileInfo.eofOffset,0===d&&(l=y.encodedMaskData,o=y.maskData,g.width=y.width,g.height=y.height,g.dimCount=y.dimCount||1,g.pixelType=y.pixelType||y.fileInfo.pixelType,g.mask=y.maskData),r>1&&y.fileInfo.mask&&y.fileInfo.mask.numBytes>0&&p.push(y.maskData),d++,g.pixels.push(y.pixelData),g.statistics.push({minValue:y.minValue,maxValue:y.maxValue,noDataValue:y.noDataValue,dimStats:y.dimStats})}if(r>1&&p.length>1){for(h=g.width*g.height,g.bandMasks=p,(o=new Uint8Array(h)).set(p[0]),u=1;u<p.length;u++)for(f=p[u],c=0;c<h;c++)o[c]=o[c]&f[c];g.maskData=o}return g}};e.exports?e.exports=y:this.Lerc=y}()}));e.HeightmapEncoding=a,e.LercDecode=r}));