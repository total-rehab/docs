"use strict";(self.webpackChunkfabric_native_docs=self.webpackChunkfabric_native_docs||[]).push([[695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},s="Guides",u={unversionedId:"guides",id:"guides",title:"Guides",description:"Guides are presented on the schedule screen and used to provide additional",source:"@site/docs/guides.md",sourceDirName:".",slug:"/guides",permalink:"/guides",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/authentication"},next:{title:"Modalities",permalink:"/modalities"}},c={},d=[{value:"Scenario",id:"scenario",level:2}],l={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"guides"},"Guides"),(0,a.kt)("p",null,"Guides are presented on the schedule screen and used to provide additional\ninformation to the user as they work through their program. Each guide can be\nattached to one or more ",(0,a.kt)("a",{parentName:"p",href:"/programs"},"programs"),", ",(0,a.kt)("a",{parentName:"p",href:"/phases"},"phases"),", or\nsome combination of the two."),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,'Let\'s say you wanted to write a guide about the P.R.I.C.E protocol and attach it\nto the "Swelling and Support" phase of all programs. In this case you would\ngo to the ',(0,a.kt)("strong",{parentName:"p"},"Guides")," section in the admin, hit ",(0,a.kt)("strong",{parentName:"p"},"Create"),', write your guide\nand select the "Swelling and Support" phase from the ',(0,a.kt)("strong",{parentName:"p"},"Phases")," dropdown. The\n",(0,a.kt)("strong",{parentName:"p"},"Programs")," dropdown would be left empty."),(0,a.kt)("p",null,"If you then decided you only wanted the guide to appear on particular programs\nyou would edit the guide and select those programs from the ",(0,a.kt)("strong",{parentName:"p"},"Programs"),"\ndropdown."),(0,a.kt)("p",null,"Both the programs and phases dropdown accept multiple values, so you could have\nthe same guide appear across two phases of two programs, for example."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"At least one program or phase must be selected for the guide to appear within\nthe app.")))}m.isMDXComponent=!0}}]);