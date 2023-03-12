"use strict";(self.webpackChunkfabric_native_docs=self.webpackChunkfabric_native_docs||[]).push([[168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="Authentication",s={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"Both the mobile app and the admin interface require a user to be authenticated",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/authentication",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Activities",permalink:"/activities"},next:{title:"Deep linking",permalink:"/deep-linking"}},p={},u=[{value:"Creating users",id:"creating-users",level:2},{value:"Roles",id:"roles",level:3},{value:"Technical details",id:"technical-details",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Both the mobile app and the admin interface require a user to be authenticated\nbefore being granted access."),(0,i.kt)("h2",{id:"creating-users"},"Creating users"),(0,i.kt)("p",null,"To create a user select ",(0,i.kt)("strong",{parentName:"p"},"Users")," from the sidebar, click ",(0,i.kt)("strong",{parentName:"p"},"Create"),", fill\nin the form and hit ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Each user is given a role, which primarily are used to control what that user\nis allowed to do in the admin interface (or directly via the API). There are\nthree pre-defined roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Admin:")," allowed to create or modify anything within the admin interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Practitioner:")," allowed to invite users and assign programs, but not allowed to\ncreate or modify anything else within the admin interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Users:")," not allowed to login to the admin interface at all.")),(0,i.kt)("h2",{id:"technical-details"},"Technical details"),(0,i.kt)("p",null,"Authentication for the admin interface and mobile app is handled using\n",(0,i.kt)("a",{parentName:"p",href:"https://supabase.com/docs/guides/auth/overview"},"Supabase Auth"),", with the API\nrequiring an access token for any ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," routes. Access\ntokens are validated using the JWT secret provided by Supabase. For more details\nsee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/total-rehab/api"},"Total Rehab API repository"),"."))}h.isMDXComponent=!0}}]);