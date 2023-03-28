"use strict";(self.webpackChunkfabric_native_docs=self.webpackChunkfabric_native_docs||[]).push([[116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=n,f=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],i={},l="Tasks",c={unversionedId:"tasks",id:"tasks",title:"Tasks",description:"A program is ultimately built up from tasks, which are organised by week and day.",source:"@site/docs/tasks.md",sourceDirName:".",slug:"/tasks",permalink:"/tasks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Programs",permalink:"/programs"}},p={},u=[{value:"Creating tasks",id:"creating-tasks",level:2},{value:"Weeks and days",id:"weeks-and-days",level:2},{value:"Priority",id:"priority",level:2}],d={toc:u};function y(e){var t=e.components,i=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"A program is ultimately built up from tasks, which are organised by week and day."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create task",src:r(3284).Z,width:"3450",height:"1476"})),(0,o.kt)("h2",{id:"creating-tasks"},"Creating tasks"),(0,o.kt)("p",null,"To create a task select ",(0,o.kt)("strong",{parentName:"p"},"Tasks")," from the sidebar, click ",(0,o.kt)("strong",{parentName:"p"},"Create"),", fill\nin the form and hit ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",null,"Alternatively, you can click the ",(0,o.kt)("strong",{parentName:"p"},"Bulk Create")," button, which takes you to a\npage where you can more easily insert multiple tasks for a program."),(0,o.kt)("h2",{id:"weeks-and-days"},"Weeks and days"),(0,o.kt)("p",null,'Tasks are organised by week and day, where "Day 1" is based on when the user\nstarted a program, rather than a specific day of the week.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Programs run linearly, according to the scheduled weeks and days. However, as\nwe cannot control when a user will actually choose to complete a set of tasks it\ncould be that they are still on "Week 1" several weeks into their program.\nEffectively, a user will progress to the next day only after they have completed\none or more tasks for the previous day.')),(0,o.kt)("h2",{id:"priority"},"Priority"),(0,o.kt)("p",null,'Tasks can be sorted in the app according to the number entered in the "Priority"\nfield. Numbers are sorted in descending order, so a task with a priority of 2\nwill be placed above one with a priority of 1 (all tasks have a priority of 1\nby default).'))}y.isMDXComponent=!0},3284:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-task-1b2a994433a5abcfc166a91491c6b7cf.png"}}]);