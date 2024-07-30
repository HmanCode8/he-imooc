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

import{c as $}from"./chunk-A5XXOFX2.js";var P=$((ie,H)=>{/* Copyright 2015-2018 Esri. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 @preserve */(function(){var Q=function(){var B={};B.defaultNoDataValue=-34027999387901484e22,B.decode=function(r,t){t=t||{};var n=t.encodedMaskData||t.encodedMaskData===null,i=a(r,t.inputOffset||0,n),l=t.noDataValue!==null?t.noDataValue:B.defaultNoDataValue,f=A(i,t.pixelType||Float32Array,t.encodedMaskData,l,t.returnMask),v={width:i.width,height:i.height,pixelData:f.resultPixels,minValue:f.minValue,maxValue:i.pixels.maxValue,noDataValue:l};return f.resultMask&&(v.maskData=f.resultMask),t.returnEncodedMask&&i.mask&&(v.encodedMaskData=i.mask.bitset?i.mask.bitset:null),t.returnFileInfo&&(v.fileInfo=O(i),t.computeUsedBitDepths&&(v.fileInfo.bitDepths=Z(i))),v};var A=function(r,t,n,i,l){var f=0,v=r.pixels.numBlocksX,m=r.pixels.numBlocksY,u=Math.floor(r.width/v),s=Math.floor(r.height/m),h=2*r.maxZError,o=Number.MAX_VALUE,g;n=n||(r.mask?r.mask.bitset:null);var c,x;c=new t(r.width*r.height),l&&n&&(x=new Uint8Array(r.width*r.height));for(var D=new Float32Array(u*s),M,k,V=0;V<=m;V++){var p=V!==m?s:r.height%m;if(p!==0)for(var w=0;w<=v;w++){var U=w!==v?u:r.width%v;if(U!==0){var I=V*r.width*s+w*u,y=r.width-U,d=r.pixels.blocks[f],T,L,S;d.encoding<2?(d.encoding===0?T=d.rawData:(e(d.stuffedData,d.bitsPerPixel,d.numValidPixels,d.offset,h,D,r.pixels.maxValue),T=D),L=0):d.encoding===2?S=0:S=d.offset;var b;if(n)for(k=0;k<p;k++){for(I&7&&(b=n[I>>3],b<<=I&7),M=0;M<U;M++)I&7||(b=n[I>>3]),b&128?(x&&(x[I]=1),g=d.encoding<2?T[L++]:S,o=o>g?g:o,c[I++]=g):(x&&(x[I]=0),c[I++]=i),b<<=1;I+=y}else if(d.encoding<2)for(k=0;k<p;k++){for(M=0;M<U;M++)g=T[L++],o=o>g?g:o,c[I++]=g;I+=y}else for(o=o>S?S:o,k=0;k<p;k++){for(M=0;M<U;M++)c[I++]=S;I+=y}if(d.encoding===1&&L!==d.numValidPixels)throw"Block and Mask do not match";f++}}}return{resultPixels:c,resultMask:x,minValue:o}},O=function(r){return{fileIdentifierString:r.fileIdentifierString,fileVersion:r.fileVersion,imageType:r.imageType,height:r.height,width:r.width,maxZError:r.maxZError,eofOffset:r.eofOffset,mask:r.mask?{numBlocksX:r.mask.numBlocksX,numBlocksY:r.mask.numBlocksY,numBytes:r.mask.numBytes,maxValue:r.mask.maxValue}:null,pixels:{numBlocksX:r.pixels.numBlocksX,numBlocksY:r.pixels.numBlocksY,numBytes:r.pixels.numBytes,maxValue:r.pixels.maxValue,noDataValue:r.noDataValue}}},Z=function(r){for(var t=r.pixels.numBlocksX*r.pixels.numBlocksY,n={},i=0;i<t;i++){var l=r.pixels.blocks[i];l.encoding===0?n.float32=!0:l.encoding===1?n[l.bitsPerPixel]=!0:n[0]=!0}return Object.keys(n)},a=function(r,t,n){var i={},l=new Uint8Array(r,t,10);if(i.fileIdentifierString=String.fromCharCode.apply(null,l),i.fileIdentifierString.trim()!=="CntZImage")throw"Unexpected file identifier string: "+i.fileIdentifierString;t+=10;var f=new DataView(r,t,24);if(i.fileVersion=f.getInt32(0,!0),i.imageType=f.getInt32(4,!0),i.height=f.getUint32(8,!0),i.width=f.getUint32(12,!0),i.maxZError=f.getFloat64(16,!0),t+=24,!n)if(f=new DataView(r,t,16),i.mask={},i.mask.numBlocksY=f.getUint32(0,!0),i.mask.numBlocksX=f.getUint32(4,!0),i.mask.numBytes=f.getUint32(8,!0),i.mask.maxValue=f.getFloat32(12,!0),t+=16,i.mask.numBytes>0){var v=new Uint8Array(Math.ceil(i.width*i.height/8));f=new DataView(r,t,i.mask.numBytes);var m=f.getInt16(0,!0),u=2,s=0;do{if(m>0)for(;m--;)v[s++]=f.getUint8(u++);else{var h=f.getUint8(u++);for(m=-m;m--;)v[s++]=h}m=f.getInt16(u,!0),u+=2}while(u<i.mask.numBytes);if(m!==-32768||s<v.length)throw"Unexpected end of mask RLE encoding";i.mask.bitset=v,t+=i.mask.numBytes}else i.mask.numBytes|i.mask.numBlocksY|i.mask.maxValue||(i.mask.bitset=new Uint8Array(Math.ceil(i.width*i.height/8)));f=new DataView(r,t,16),i.pixels={},i.pixels.numBlocksY=f.getUint32(0,!0),i.pixels.numBlocksX=f.getUint32(4,!0),i.pixels.numBytes=f.getUint32(8,!0),i.pixels.maxValue=f.getFloat32(12,!0),t+=16;var o=i.pixels.numBlocksX,g=i.pixels.numBlocksY,c=o+(i.width%o>0?1:0),x=g+(i.height%g>0?1:0);i.pixels.blocks=new Array(c*x);for(var D=0,M=0;M<x;M++)for(var k=0;k<c;k++){var V=0,p=r.byteLength-t;f=new DataView(r,t,Math.min(10,p));var w={};i.pixels.blocks[D++]=w;var U=f.getUint8(0);if(V++,w.encoding=U&63,w.encoding>3)throw"Invalid block encoding ("+w.encoding+")";if(w.encoding===2){t++;continue}if(U!==0&&U!==2){if(U>>=6,w.offsetType=U,U===2)w.offset=f.getInt8(1),V++;else if(U===1)w.offset=f.getInt16(1,!0),V+=2;else if(U===0)w.offset=f.getFloat32(1,!0),V+=4;else throw"Invalid block offset type";if(w.encoding===1)if(U=f.getUint8(V),V++,w.bitsPerPixel=U&63,U>>=6,w.numValidPixelsType=U,U===2)w.numValidPixels=f.getUint8(V),V++;else if(U===1)w.numValidPixels=f.getUint16(V,!0),V+=2;else if(U===0)w.numValidPixels=f.getUint32(V,!0),V+=4;else throw"Invalid valid pixel count type"}if(t+=V,w.encoding!==3){var I,y;if(w.encoding===0){var d=(i.pixels.numBytes-1)/4;if(d!==Math.floor(d))throw"uncompressed block has invalid length";I=new ArrayBuffer(d*4),y=new Uint8Array(I),y.set(new Uint8Array(r,t,d*4));var T=new Float32Array(I);w.rawData=T,t+=d*4}else if(w.encoding===1){var L=Math.ceil(w.numValidPixels*w.bitsPerPixel/8),S=Math.ceil(L/4);I=new ArrayBuffer(S*4),y=new Uint8Array(I),y.set(new Uint8Array(r,t,L)),w.stuffedData=new Uint32Array(I),t+=L}}}return i.eofOffset=t,i},e=function(r,t,n,i,l,f,v){var m=(1<<t)-1,u=0,s,h=0,o,g,c=Math.ceil((v-i)/l),x=r.length*4-Math.ceil(t*n/8);for(r[r.length-1]<<=8*x,s=0;s<n;s++){if(h===0&&(g=r[u++],h=32),h>=t)o=g>>>h-t&m,h-=t;else{var D=t-h;o=(g&m)<<D&m,g=r[u++],h=32-D,o+=g>>>h}f[s]=o<c?i+o*l:v}return f};return B}(),q=function(){"use strict";var B={unstuff:function(a,e,r,t,n,i,l,f){var v=(1<<r)-1,m=0,u,s=0,h,o,g,c,x=a.length*4-Math.ceil(r*t/8);if(a[a.length-1]<<=8*x,n)for(u=0;u<t;u++)s===0&&(o=a[m++],s=32),s>=r?(h=o>>>s-r&v,s-=r):(g=r-s,h=(o&v)<<g&v,o=a[m++],s=32-g,h+=o>>>s),e[u]=n[h];else for(c=Math.ceil((f-i)/l),u=0;u<t;u++)s===0&&(o=a[m++],s=32),s>=r?(h=o>>>s-r&v,s-=r):(g=r-s,h=(o&v)<<g&v,o=a[m++],s=32-g,h+=o>>>s),e[u]=h<c?i+h*l:f},unstuffLUT:function(a,e,r,t,n,i){var l=(1<<e)-1,f=0,v=0,m=0,u=0,s=0,h,o=[],g=a.length*4-Math.ceil(e*r/8);a[a.length-1]<<=8*g;var c=Math.ceil((i-t)/n);for(v=0;v<r;v++)u===0&&(h=a[f++],u=32),u>=e?(s=h>>>u-e&l,u-=e):(m=e-u,s=(h&l)<<m&l,h=a[f++],u=32-m,s+=h>>>u),o[v]=s<c?t+s*n:i;return o.unshift(t),o},unstuff2:function(a,e,r,t,n,i,l,f){var v=(1<<r)-1,m=0,u,s=0,h=0,o,g,c;if(n)for(u=0;u<t;u++)s===0&&(g=a[m++],s=32,h=0),s>=r?(o=g>>>h&v,s-=r,h+=r):(c=r-s,o=g>>>h&v,g=a[m++],s=32-c,o|=(g&(1<<c)-1)<<r-c,h=c),e[u]=n[o];else{var x=Math.ceil((f-i)/l);for(u=0;u<t;u++)s===0&&(g=a[m++],s=32,h=0),s>=r?(o=g>>>h&v,s-=r,h+=r):(c=r-s,o=g>>>h&v,g=a[m++],s=32-c,o|=(g&(1<<c)-1)<<r-c,h=c),e[u]=o<x?i+o*l:f}return e},unstuffLUT2:function(a,e,r,t,n,i){var l=(1<<e)-1,f=0,v=0,m=0,u=0,s=0,h=0,o,g=[],c=Math.ceil((i-t)/n);for(v=0;v<r;v++)u===0&&(o=a[f++],u=32,h=0),u>=e?(s=o>>>h&l,u-=e,h+=e):(m=e-u,s=o>>>h&l,o=a[f++],u=32-m,s|=(o&(1<<m)-1)<<e-m,h=m),g[v]=s<c?t+s*n:i;return g.unshift(t),g},originalUnstuff:function(a,e,r,t){var n=(1<<r)-1,i=0,l,f=0,v,m,u,s=a.length*4-Math.ceil(r*t/8);for(a[a.length-1]<<=8*s,l=0;l<t;l++)f===0&&(m=a[i++],f=32),f>=r?(v=m>>>f-r&n,f-=r):(u=r-f,v=(m&n)<<u&n,m=a[i++],f=32-u,v+=m>>>f),e[l]=v;return e},originalUnstuff2:function(a,e,r,t){var n=(1<<r)-1,i=0,l,f=0,v=0,m,u,s;for(l=0;l<t;l++)f===0&&(u=a[i++],f=32,v=0),f>=r?(m=u>>>v&n,f-=r,v+=r):(s=r-f,m=u>>>v&n,u=a[i++],f=32-s,m|=(u&(1<<s)-1)<<r-s,v=s),e[l]=m;return e}},A={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(a){for(var e=65535,r=65535,t=a.length,n=Math.floor(t/2),i=0;n;){var l=n>=359?359:n;n-=l;do e+=a[i++]<<8,r+=e+=a[i++];while(--l);e=(e&65535)+(e>>>16),r=(r&65535)+(r>>>16)}return t&1&&(r+=e+=a[i]<<8),e=(e&65535)+(e>>>16),r=(r&65535)+(r>>>16),(r<<16|e)>>>0},readHeaderInfo:function(a,e){var r=e.ptr,t=new Uint8Array(a,r,6),n={};if(n.fileIdentifierString=String.fromCharCode.apply(null,t),n.fileIdentifierString.lastIndexOf("Lerc2",0)!==0)throw"Unexpected file identifier string (expect Lerc2 ): "+n.fileIdentifierString;r+=6;var i=new DataView(a,r,8),l=i.getInt32(0,!0);n.fileVersion=l,r+=4,l>=3&&(n.checksum=i.getUint32(4,!0),r+=4),i=new DataView(a,r,12),n.height=i.getUint32(0,!0),n.width=i.getUint32(4,!0),r+=8,l>=4?(n.numDims=i.getUint32(8,!0),r+=4):n.numDims=1,i=new DataView(a,r,40),n.numValidPixel=i.getUint32(0,!0),n.microBlockSize=i.getInt32(4,!0),n.blobSize=i.getInt32(8,!0),n.imageType=i.getInt32(12,!0),n.maxZError=i.getFloat64(16,!0),n.zMin=i.getFloat64(24,!0),n.zMax=i.getFloat64(32,!0),r+=40,e.headerInfo=n,e.ptr=r;var f,v;if(l>=3&&(v=l>=4?52:48,f=this.computeChecksumFletcher32(new Uint8Array(a,r-v,n.blobSize-14)),f!==n.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(a,e){var r=e.headerInfo,t=this.getDataTypeArray(r.imageType),n=r.numDims*this.getDataTypeSize(r.imageType),i=this.readSubArray(a,e.ptr,t,n),l=this.readSubArray(a,e.ptr+n,t,n);e.ptr+=2*n;var f,v=!0;for(f=0;f<r.numDims;f++)if(i[f]!==l[f]){v=!1;break}return r.minValues=i,r.maxValues=l,v},readSubArray:function(a,e,r,t){var n;if(r===Uint8Array)n=new Uint8Array(a,e,t);else{var i=new ArrayBuffer(t),l=new Uint8Array(i);l.set(new Uint8Array(a,e,t)),n=new r(i)}return n},readMask:function(a,e){var r=e.ptr,t=e.headerInfo,n=t.width*t.height,i=t.numValidPixel,l=new DataView(a,r,4),f={};if(f.numBytes=l.getUint32(0,!0),r+=4,(i===0||n===i)&&f.numBytes!==0)throw"invalid mask";var v,m;if(i===0)v=new Uint8Array(Math.ceil(n/8)),f.bitset=v,m=new Uint8Array(n),e.pixels.resultMask=m,r+=f.numBytes;else if(f.numBytes>0){v=new Uint8Array(Math.ceil(n/8)),l=new DataView(a,r,f.numBytes);var u=l.getInt16(0,!0),s=2,h=0,o=0;do{if(u>0)for(;u--;)v[h++]=l.getUint8(s++);else for(o=l.getUint8(s++),u=-u;u--;)v[h++]=o;u=l.getInt16(s,!0),s+=2}while(s<f.numBytes);if(u!==-32768||h<v.length)throw"Unexpected end of mask RLE encoding";m=new Uint8Array(n);var g=0,c=0;for(c=0;c<n;c++)c&7?(g=v[c>>3],g<<=c&7):g=v[c>>3],g&128&&(m[c]=1);e.pixels.resultMask=m,f.bitset=v,r+=f.numBytes}return e.ptr=r,e.mask=f,!0},readDataOneSweep:function(a,e,r){var t=e.ptr,n=e.headerInfo,i=n.numDims,l=n.width*n.height,f=n.imageType,v=n.numValidPixel*A.getDataTypeSize(f)*i,m,u=e.pixels.resultMask;if(r===Uint8Array)m=new Uint8Array(a,t,v);else{var s=new ArrayBuffer(v),h=new Uint8Array(s);h.set(new Uint8Array(a,t,v)),m=new r(s)}if(m.length===l*i)e.pixels.resultPixels=m;else{e.pixels.resultPixels=new r(l*i);var o=0,g=0,c=0,x=0;if(i>1)for(c=0;c<i;c++)for(x=c*l,g=0;g<l;g++)u[g]&&(e.pixels.resultPixels[x+g]=m[o++]);else for(g=0;g<l;g++)u[g]&&(e.pixels.resultPixels[g]=m[o++])}return t+=v,e.ptr=t,!0},readHuffmanTree:function(a,e){var r=this.HUFFMAN_LUT_BITS_MAX,t=new DataView(a,e.ptr,16);e.ptr+=16;var n=t.getInt32(0,!0);if(n<2)throw"unsupported Huffman version";var i=t.getInt32(4,!0),l=t.getInt32(8,!0),f=t.getInt32(12,!0);if(l>=f)return!1;var v=new Uint32Array(f-l);A.decodeBits(a,e,v);var m=[],u,s,h,o;for(u=l;u<f;u++)s=u-(u<i?0:i),m[s]={first:v[u-l],second:null};var g=a.byteLength-e.ptr,c=Math.ceil(g/4),x=new ArrayBuffer(c*4),D=new Uint8Array(x);D.set(new Uint8Array(a,e.ptr,g));var M=new Uint32Array(x),k=0,V,p=0;for(V=M[0],u=l;u<f;u++)s=u-(u<i?0:i),o=m[s].first,o>0&&(m[s].second=V<<k>>>32-o,32-k>=o?(k+=o,k===32&&(k=0,p++,V=M[p])):(k+=o-32,p++,V=M[p],m[s].second|=V>>>32-k));var w=0,U=0,I=new O;for(u=0;u<m.length;u++)m[u]!==void 0&&(w=Math.max(w,m[u].first));w>=r?U=r:U=w,w>=30&&console.log("WARning, large NUM LUT BITS IS "+w);var y=[],d,T,L,S,b,F;for(u=l;u<f;u++)if(s=u-(u<i?0:i),o=m[s].first,o>0)if(d=[o,s],o<=U)for(T=m[s].second<<U-o,L=1<<U-o,h=0;h<L;h++)y[T|h]=d;else for(T=m[s].second,F=I,S=o-1;S>=0;S--)b=T>>>S&1,b?(F.right||(F.right=new O),F=F.right):(F.left||(F.left=new O),F=F.left),S===0&&!F.val&&(F.val=d[1]);return{decodeLut:y,numBitsLUTQick:U,numBitsLUT:w,tree:I,stuffedData:M,srcPtr:p,bitPos:k}},readHuffman:function(a,e,r){var t=e.headerInfo,n=t.numDims,i=e.headerInfo.height,l=e.headerInfo.width,f=l*i,v=this.readHuffmanTree(a,e),m=v.decodeLut,u=v.tree,s=v.stuffedData,h=v.srcPtr,o=v.bitPos,g=v.numBitsLUTQick,c=v.numBitsLUT,x=e.headerInfo.imageType===0?128:0,D,M,k,V=e.pixels.resultMask,p,w,U,I,y,d,T,L=0;o>0&&(h++,o=0);var S=s[h],b=e.encodeMode===1,F=new r(f*n),C=F,X;for(X=0;X<t.numDims;X++){if(n>1&&(C=new r(F.buffer,f*X,f),L=0),e.headerInfo.numValidPixel===l*i)for(d=0,I=0;I<i;I++)for(y=0;y<l;y++,d++){if(M=0,p=S<<o>>>32-g,w=p,32-o<g&&(p|=s[h+1]>>>64-o-g,w=p),m[w])M=m[w][1],o+=m[w][0];else for(p=S<<o>>>32-c,w=p,32-o<c&&(p|=s[h+1]>>>64-o-c,w=p),D=u,T=0;T<c;T++)if(U=p>>>c-T-1&1,D=U?D.right:D.left,!(D.left||D.right)){M=D.val,o=o+T+1;break}o>=32&&(o-=32,h++,S=s[h]),k=M-x,b?(y>0?k+=L:I>0?k+=C[d-l]:k+=L,k&=255,C[d]=k,L=k):C[d]=k}else for(d=0,I=0;I<i;I++)for(y=0;y<l;y++,d++)if(V[d]){if(M=0,p=S<<o>>>32-g,w=p,32-o<g&&(p|=s[h+1]>>>64-o-g,w=p),m[w])M=m[w][1],o+=m[w][0];else for(p=S<<o>>>32-c,w=p,32-o<c&&(p|=s[h+1]>>>64-o-c,w=p),D=u,T=0;T<c;T++)if(U=p>>>c-T-1&1,D=U?D.right:D.left,!(D.left||D.right)){M=D.val,o=o+T+1;break}o>=32&&(o-=32,h++,S=s[h]),k=M-x,b?(y>0&&V[d-1]?k+=L:I>0&&V[d-l]?k+=C[d-l]:k+=L,k&=255,C[d]=k,L=k):C[d]=k}e.ptr=e.ptr+(h+1)*4+(o>0?4:0)}e.pixels.resultPixels=F},decodeBits:function(a,e,r,t,n){{var i=e.headerInfo,l=i.fileVersion,f=0,v=new DataView(a,e.ptr,5),m=v.getUint8(0);f++;var u=m>>6,s=u===0?4:3-u,h=(m&32)>0,o=m&31,g=0;if(s===1)g=v.getUint8(f),f++;else if(s===2)g=v.getUint16(f,!0),f+=2;else if(s===4)g=v.getUint32(f,!0),f+=4;else throw"Invalid valid pixel count type";var c=2*i.maxZError,x,D,M,k,V,p,w,U,I,y,d=i.numDims>1?i.maxValues[n]:i.zMax;if(h){for(e.counter.lut++,U=v.getUint8(f),I=o,f++,k=Math.ceil((U-1)*o/8),V=Math.ceil(k/4),D=new ArrayBuffer(V*4),M=new Uint8Array(D),e.ptr+=f,M.set(new Uint8Array(a,e.ptr,k)),w=new Uint32Array(D),e.ptr+=k,y=0;U-1>>>y;)y++;k=Math.ceil(g*y/8),V=Math.ceil(k/4),D=new ArrayBuffer(V*4),M=new Uint8Array(D),M.set(new Uint8Array(a,e.ptr,k)),x=new Uint32Array(D),e.ptr+=k,l>=3?p=B.unstuffLUT2(w,o,U-1,t,c,d):p=B.unstuffLUT(w,o,U-1,t,c,d),l>=3?B.unstuff2(x,r,y,g,p):B.unstuff(x,r,y,g,p)}else e.counter.bitstuffer++,y=o,e.ptr+=f,y>0&&(k=Math.ceil(g*y/8),V=Math.ceil(k/4),D=new ArrayBuffer(V*4),M=new Uint8Array(D),M.set(new Uint8Array(a,e.ptr,k)),x=new Uint32Array(D),e.ptr+=k,l>=3?t==null?B.originalUnstuff2(x,r,y,g):B.unstuff2(x,r,y,g,!1,t,c,d):t==null?B.originalUnstuff(x,r,y,g):B.unstuff(x,r,y,g,!1,t,c,d))}},readTiles:function(a,e,r){var t=e.headerInfo,n=t.width,i=t.height,l=t.microBlockSize,f=t.imageType,v=A.getDataTypeSize(f),m=Math.ceil(n/l),u=Math.ceil(i/l);e.pixels.numBlocksY=u,e.pixels.numBlocksX=m,e.pixels.ptr=0;var s=0,h=0,o=0,g=0,c=0,x=0,D=0,M=0,k=0,V=0,p=0,w=0,U=0,I=0,y=0,d=0,T,L,S,b,F,C,X=new r(l*l),J=i%l||l,K=n%l||l,_,N,R=t.numDims,E,Y=e.pixels.resultMask,z=e.pixels.resultPixels;for(o=0;o<u;o++)for(c=o!==u-1?l:J,g=0;g<m;g++)for(x=g!==m-1?l:K,p=o*n*l+g*l,w=n-x,E=0;E<R;E++){if(R>1&&(z=new r(e.pixels.resultPixels.buffer,n*i*E*v,n*i)),D=a.byteLength-e.ptr,T=new DataView(a,e.ptr,Math.min(10,D)),L={},d=0,M=T.getUint8(0),d++,k=M>>6&255,V=M>>2&15,V!==(g*l>>3&15))throw"integrity issue";if(C=M&3,C>3)throw e.ptr+=d,"Invalid block encoding ("+C+")";if(C===2){e.counter.constant++,e.ptr+=d;continue}else if(C===0){if(e.counter.uncompressed++,e.ptr+=d,U=c*x*v,I=a.byteLength-e.ptr,U=U<I?U:I,S=new ArrayBuffer(U%v===0?U:U+v-U%v),b=new Uint8Array(S),b.set(new Uint8Array(a,e.ptr,U)),F=new r(S),y=0,Y)for(s=0;s<c;s++){for(h=0;h<x;h++)Y[p]&&(z[p]=F[y++]),p++;p+=w}else for(s=0;s<c;s++){for(h=0;h<x;h++)z[p++]=F[y++];p+=w}e.ptr+=y*v}else if(_=A.getDataTypeUsed(f,k),N=A.getOnePixel(L,d,_,T),d+=A.getDataTypeSize(_),C===3)if(e.ptr+=d,e.counter.constantoffset++,Y)for(s=0;s<c;s++){for(h=0;h<x;h++)Y[p]&&(z[p]=N),p++;p+=w}else for(s=0;s<c;s++){for(h=0;h<x;h++)z[p++]=N;p+=w}else if(e.ptr+=d,A.decodeBits(a,e,X,N,E),d=0,Y)for(s=0;s<c;s++){for(h=0;h<x;h++)Y[p]&&(z[p]=X[d++]),p++;p+=w}else for(s=0;s<c;s++){for(h=0;h<x;h++)z[p++]=X[d++];p+=w}}},formatFileInfo:function(a){return{fileIdentifierString:a.headerInfo.fileIdentifierString,fileVersion:a.headerInfo.fileVersion,imageType:a.headerInfo.imageType,height:a.headerInfo.height,width:a.headerInfo.width,numValidPixel:a.headerInfo.numValidPixel,microBlockSize:a.headerInfo.microBlockSize,blobSize:a.headerInfo.blobSize,maxZError:a.headerInfo.maxZError,pixelType:A.getPixelType(a.headerInfo.imageType),eofOffset:a.eofOffset,mask:a.mask?{numBytes:a.mask.numBytes}:null,pixels:{numBlocksX:a.pixels.numBlocksX,numBlocksY:a.pixels.numBlocksY,maxValue:a.headerInfo.zMax,minValue:a.headerInfo.zMin,noDataValue:a.noDataValue}}},constructConstantSurface:function(a){var e=a.headerInfo.zMax,r=a.headerInfo.numDims,t=a.headerInfo.height*a.headerInfo.width,n=t*r,i=0,l=0,f=0,v=a.pixels.resultMask;if(v)if(r>1)for(i=0;i<r;i++)for(f=i*t,l=0;l<t;l++)v[l]&&(a.pixels.resultPixels[f+l]=e);else for(l=0;l<t;l++)v[l]&&(a.pixels.resultPixels[l]=e);else if(a.pixels.resultPixels.fill)a.pixels.resultPixels.fill(e);else for(l=0;l<n;l++)a.pixels.resultPixels[l]=e},getDataTypeArray:function(a){var e;switch(a){case 0:e=Int8Array;break;case 1:e=Uint8Array;break;case 2:e=Int16Array;break;case 3:e=Uint16Array;break;case 4:e=Int32Array;break;case 5:e=Uint32Array;break;case 6:e=Float32Array;break;case 7:e=Float64Array;break;default:e=Float32Array}return e},getPixelType:function(a){var e;switch(a){case 0:e="S8";break;case 1:e="U8";break;case 2:e="S16";break;case 3:e="U16";break;case 4:e="S32";break;case 5:e="U32";break;case 6:e="F32";break;case 7:e="F64";break;default:e="F32"}return e},isValidPixelValue:function(a,e){if(e==null)return!1;var r;switch(a){case 0:r=e>=-128&&e<=127;break;case 1:r=e>=0&&e<=255;break;case 2:r=e>=-32768&&e<=32767;break;case 3:r=e>=0&&e<=65536;break;case 4:r=e>=-2147483648&&e<=2147483647;break;case 5:r=e>=0&&e<=4294967296;break;case 6:r=e>=-34027999387901484e22&&e<=34027999387901484e22;break;case 7:r=e>=5e-324&&e<=17976931348623157e292;break;default:r=!1}return r},getDataTypeSize:function(a){var e=0;switch(a){case 0:case 1:e=1;break;case 2:case 3:e=2;break;case 4:case 5:case 6:e=4;break;case 7:e=8;break;default:e=a}return e},getDataTypeUsed:function(a,e){var r=a;switch(a){case 2:case 4:r=a-e;break;case 3:case 5:r=a-2*e;break;case 6:e===0?r=a:e===1?r=2:r=1;break;case 7:e===0?r=a:r=a-2*e+1;break;default:r=a;break}return r},getOnePixel:function(a,e,r,t){var n=0;switch(r){case 0:n=t.getInt8(e);break;case 1:n=t.getUint8(e);break;case 2:n=t.getInt16(e,!0);break;case 3:n=t.getUint16(e,!0);break;case 4:n=t.getInt32(e,!0);break;case 5:n=t.getUInt32(e,!0);break;case 6:n=t.getFloat32(e,!0);break;case 7:n=t.getFloat64(e,!0);break;default:throw"the decoder does not understand this pixel type"}return n}},O=function(a,e,r){this.val=a,this.left=e,this.right=r},Z={decode:function(a,e){e=e||{};var r=e.noDataValue,t=0,n={};if(n.ptr=e.inputOffset||0,n.pixels={},!!A.readHeaderInfo(a,n)){var i=n.headerInfo,l=i.fileVersion,f=A.getDataTypeArray(i.imageType);A.readMask(a,n),i.numValidPixel!==i.width*i.height&&!n.pixels.resultMask&&(n.pixels.resultMask=e.maskData);var v=i.width*i.height;if(n.pixels.resultPixels=new f(v*i.numDims),n.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},i.numValidPixel!==0)if(i.zMax===i.zMin)A.constructConstantSurface(n);else if(l>=4&&A.checkMinMaxRanges(a,n))A.constructConstantSurface(n);else{var m=new DataView(a,n.ptr,2),u=m.getUint8(0);if(n.ptr++,u)A.readDataOneSweep(a,n,f);else if(l>1&&i.imageType<=1&&Math.abs(i.maxZError-.5)<1e-5){var s=m.getUint8(1);if(n.ptr++,n.encodeMode=s,s>2||l<4&&s>1)throw"Invalid Huffman flag "+s;s?A.readHuffman(a,n,f):A.readTiles(a,n,f)}else A.readTiles(a,n,f)}n.eofOffset=n.ptr;var h;e.inputOffset?(h=n.headerInfo.blobSize+e.inputOffset-n.ptr,Math.abs(h)>=1&&(n.eofOffset=e.inputOffset+n.headerInfo.blobSize)):(h=n.headerInfo.blobSize-n.ptr,Math.abs(h)>=1&&(n.eofOffset=n.headerInfo.blobSize));var o={width:i.width,height:i.height,pixelData:n.pixels.resultPixels,minValue:i.zMin,maxValue:i.zMax,validPixelCount:i.numValidPixel,dimCount:i.numDims,dimStats:{minValues:i.minValues,maxValues:i.maxValues},maskData:n.pixels.resultMask};if(n.pixels.resultMask&&A.isValidPixelValue(i.imageType,r)){var g=n.pixels.resultMask;for(t=0;t<v;t++)g[t]||(o.pixelData[t]=r);o.noDataValue=r}return n.noDataValue=r,e.returnFileInfo&&(o.fileInfo=A.formatFileInfo(n)),o}},getBandCount:function(a){var e=0,r=0,t={};for(t.ptr=0,t.pixels={};r<a.byteLength-58;)A.readHeaderInfo(a,t),r+=t.headerInfo.blobSize,e++,t.ptr=r;return e}};return Z}(),G=function(){var B=new ArrayBuffer(4),A=new Uint8Array(B),O=new Uint32Array(B);return O[0]=1,A[0]===1}(),j={decode:function(B,A){if(!G)throw"Big endian system is not supported.";A=A||{};var O=A.inputOffset||0,Z=new Uint8Array(B,O,10),a=String.fromCharCode.apply(null,Z),e,r;if(a.trim()==="CntZImage")e=Q,r=1;else if(a.substring(0,5)==="Lerc2")e=q,r=2;else throw"Unexpected file identifier string: "+a;for(var t=0,n=B.byteLength-10,i,l=[],f,v,m={width:0,height:0,pixels:[],pixelType:A.pixelType,mask:null,statistics:[]};O<n;){var u=e.decode(B,{inputOffset:O,encodedMaskData:i,maskData:v,returnMask:t===0,returnEncodedMask:t===0,returnFileInfo:!0,pixelType:A.pixelType||null,noDataValue:A.noDataValue||null});O=u.fileInfo.eofOffset,t===0&&(i=u.encodedMaskData,v=u.maskData,m.width=u.width,m.height=u.height,m.dimCount=u.dimCount||1,m.pixelType=u.pixelType||u.fileInfo.pixelType,m.mask=u.maskData),r>1&&u.fileInfo.mask&&u.fileInfo.mask.numBytes>0&&l.push(u.maskData),t++,m.pixels.push(u.pixelData),m.statistics.push({minValue:u.minValue,maxValue:u.maxValue,noDataValue:u.noDataValue,dimStats:u.dimStats})}var s,h,o;if(r>1&&l.length>1){for(o=m.width*m.height,m.bandMasks=l,v=new Uint8Array(o),v.set(l[0]),s=1;s<l.length;s++)for(f=l[s],h=0;h<o;h++)v[h]=v[h]&f[h];m.maskData=v}return m}};typeof define=="function"&&define.amd?define([],function(){return j}):typeof H<"u"&&H.exports?H.exports=j:this.Lerc=j})()});var W={NONE:0,LERC:1},ee=Object.freeze(W);export{ee as a,P as b};