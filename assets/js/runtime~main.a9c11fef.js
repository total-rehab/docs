(()=>{"use strict";var e,t,r,o,a,n={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=i,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],i=!0,d=0;d<r.length;d++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[d])))?r.splice(d--,1):(i=!1,a<n&&(n=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",116:"e383ab1f",168:"625b1ed7",254:"0e1e4be3",334:"247783bb",509:"38feca5b",514:"1be78505",695:"d7b8612d",918:"17896441",970:"fe085a26",971:"c377a04b",978:"b27570e2"}[e]||e)+"."+{53:"1f53fc15",116:"d2021020",168:"9ec10dcd",254:"f3f3ba33",334:"d16bf328",509:"348140d4",514:"c8f9075d",695:"33956891",918:"9ca4b4b9",970:"d6e02dcb",971:"2128f4d8",972:"0f103c82",978:"d2cedf4b"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="fabric-native-docs:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,d;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+r){i=l;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var b=(t,r)=>{i.onerror=i.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=b.bind(null,i.onerror),i.onload=b.bind(null,i.onload),d&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",f.gca=function(e){return e={17896441:"918","935f2afb":"53",e383ab1f:"116","625b1ed7":"168","0e1e4be3":"254","247783bb":"334","38feca5b":"509","1be78505":"514",d7b8612d:"695",fe085a26:"970",c377a04b:"971",b27570e2:"978"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),i=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,i,d]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(d)var u=d(f)}for(t&&t(r);c<n.length;c++)a=n[c],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(u)},r=self.webpackChunkfabric_native_docs=self.webpackChunkfabric_native_docs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();