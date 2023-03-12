"use strict";(self.webpackChunkfabric_native_docs=self.webpackChunkfabric_native_docs||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p="Deep linking",c={unversionedId:"deep-linking",id:"deep-linking",title:"Deep linking",description:"We can link to certain screens in the app using the totalrehab protocol.",source:"@site/docs/deep-linking.md",sourceDirName:".",slug:"/deep-linking",permalink:"/deep-linking",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/authentication"},next:{title:"Equipment",permalink:"/equipment"}},s={},u=[{value:"Available links",id:"available-links",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deep-linking"},"Deep linking"),(0,i.kt)("p",null,"We can link to certain screens in the app using the ",(0,i.kt)("inlineCode",{parentName:"p"},"totalrehab")," protocol.\nA full list of the available links can be found below."),(0,i.kt)("p",null,"Note that because the entire app is highly personalised sharing some of these\nlinks with a general audience won't really work. For example, if the user has\nalready selected a program then sending them to the programs screen probably\ndoesn't make sense. Similarly, if they have not selected a program then we\ncannot show them the schedule screen. Therefore, these links are provided\nprimarily for reference and could be used in future with a service such as\n",(0,i.kt)("a",{parentName:"p",href:"https://www.airship.com/"},"Airship")," (along with user segments)."),(0,i.kt)("h2",{id:"available-links"},"Available links"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalrehab://schedule")),(0,i.kt)("td",{parentName:"tr",align:null},"Open the schedule screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalrehab://programs")),(0,i.kt)("td",{parentName:"tr",align:null},"Open the programs screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"totalrehab://guide/:id")),(0,i.kt)("td",{parentName:"tr",align:null},"Open a guide (the ID can be found in the admin)")))))}m.isMDXComponent=!0}}]);