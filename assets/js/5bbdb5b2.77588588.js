"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},y={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=s(n),c=l,u=m["".concat(o,".").concat(c)]||m[c]||y[c]||r;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96759:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={},i="Add a new pet to the store",p={type:"api",id:"add-a-new-pet-to-the-store",unversionedId:"add-a-new-pet-to-the-store",title:"Add a new pet to the store",description:"",slug:"/add-a-new-pet-to-the-store",frontMatter:{},api:{tags:["pet"],description:"Adds a new pet to the store.",operationId:"addPet",requestBody:{description:"Create a new pet in the store",content:{"application/json":{schema:{required:["name","photoUrls"],type:"object",properties:{id:{type:"integer",format:"int64",example:10},name:{type:"string",example:"doggie"},category:{type:"object",properties:{id:{type:"integer",format:"int64",example:1},name:{type:"string",example:"Dogs"}},xml:{name:"category"}},photoUrls:{type:"array",xml:{wrapped:!0},items:{type:"string",xml:{name:"photoUrl"}}},tags:{type:"array",xml:{wrapped:!0},items:{type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"}},xml:{name:"tag"}}},status:{type:"string",description:"pet status in the store",enum:["available","pending","sold"]}},xml:{name:"pet"}}},"application/xml":{schema:{required:["name","photoUrls"],type:"object",properties:{id:{type:"integer",format:"int64",example:10},name:{type:"string",example:"doggie"},category:{type:"object",properties:{id:{type:"integer",format:"int64",example:1},name:{type:"string",example:"Dogs"}},xml:{name:"category"}},photoUrls:{type:"array",xml:{wrapped:!0},items:{type:"string",xml:{name:"photoUrl"}}},tags:{type:"array",xml:{wrapped:!0},items:{type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"}},xml:{name:"tag"}}},status:{type:"string",description:"pet status in the store",enum:["available","pending","sold"]}},xml:{name:"pet"}}},"application/x-www-form-urlencoded":{schema:{required:["name","photoUrls"],type:"object",properties:{id:{type:"integer",format:"int64",example:10},name:{type:"string",example:"doggie"},category:{type:"object",properties:{id:{type:"integer",format:"int64",example:1},name:{type:"string",example:"Dogs"}},xml:{name:"category"}},photoUrls:{type:"array",xml:{wrapped:!0},items:{type:"string",xml:{name:"photoUrl"}}},tags:{type:"array",xml:{wrapped:!0},items:{type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"}},xml:{name:"tag"}}},status:{type:"string",description:"pet status in the store",enum:["available","pending","sold"]}},xml:{name:"pet"}}}},required:!0},responses:{200:{description:"Successful operation",content:{"application/xml":{schema:{required:["name","photoUrls"],type:"object",properties:{id:{type:"integer",format:"int64",example:10},name:{type:"string",example:"doggie"},category:{type:"object",properties:{id:{type:"integer",format:"int64",example:1},name:{type:"string",example:"Dogs"}},xml:{name:"category"}},photoUrls:{type:"array",xml:{wrapped:!0},items:{type:"string",xml:{name:"photoUrl"}}},tags:{type:"array",xml:{wrapped:!0},items:{type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"}},xml:{name:"tag"}}},status:{type:"string",description:"pet status in the store",enum:["available","pending","sold"]}},xml:{name:"pet"}}},"application/json":{schema:{required:["name","photoUrls"],type:"object",properties:{id:{type:"integer",format:"int64",example:10},name:{type:"string",example:"doggie"},category:{type:"object",properties:{id:{type:"integer",format:"int64",example:1},name:{type:"string",example:"Dogs"}},xml:{name:"category"}},photoUrls:{type:"array",xml:{wrapped:!0},items:{type:"string",xml:{name:"photoUrl"}}},tags:{type:"array",xml:{wrapped:!0},items:{type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"}},xml:{name:"tag"}}},status:{type:"string",description:"pet status in the store",enum:["available","pending","sold"]}},xml:{name:"pet"}}}}},405:{description:"Invalid input"}},security:[{api_key:[]},{petstore_auth:["write:pets","read:pets"]}],method:"post",path:"/pet",servers:[{url:"https://petstore3.swagger.io/api/v3"}],securitySchemes:{petstore_auth:{type:"oauth2",flows:{implicit:{authorizationUrl:"https://petstore3.swagger.io/oauth/authorize",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:{id:10,name:"doggie",category:{id:1,name:"Dogs"},photoUrls:["string"],tags:[{id:0,name:"string"}],status:"available"},info:{title:"Paws & Tails API",description:"Paws & Tails provides a REST API reference. Using this API, you can exchange data with the Paws & Tails server. To work with API, you need to get an API key.",contact:{email:"apiteam@swagger.io"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"},version:"1.0.17"},postman:{name:"Add a new pet to the store",description:{content:"Adds a new pet to the store.",type:"text/plain"},url:{path:["pet"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/x-www-form-urlencoded"}],method:"POST",body:{mode:"urlencoded",urlencoded:[{description:{content:"",type:"text/plain"},key:"name",value:"<string>"},{description:{content:"",type:"text/plain"},key:"photoUrls",value:'["<string>","<string>"]'},{description:{content:"",type:"text/plain"},key:"id",value:"<long>"},{description:{content:"",type:"text/plain"},key:"category",value:'{"id":"<long>","name":"<string>"}'},{description:{content:"",type:"text/plain"},key:"tags",value:'[{"id":"<long>","name":"<string>"},{"id":"<long>","name":"<string>"}]'},{description:{content:"pet status in the store (This can only be one of available,pending,sold)",type:"text/plain"},key:"status",value:"<string>"}]},auth:{type:"oauth2",oauth2:[]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/petstore-api/api/add-a-new-pet-to-the-store",previous:{title:"Introduction",permalink:"/petstore-api/api/introduction"},next:{title:"Finds pets by status",permalink:"/petstore-api/api/finds-pets-by-status"}},o=[],s={toc:o};function d(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"add-a-new-pet-to-the-store"},"Add a new pet to the store"),(0,l.kt)("p",null,"Adds a new pet to the store."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",null,(0,l.kt)("p",null,"Create a new pet in the store"))))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"category"),(0,l.kt)("span",{style:{opacity:"0.6"}}," category"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"photoUrls"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"tags"),(0,l.kt)("span",{style:{opacity:"0.6"}}," tag[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"status"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"available"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sold"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"pet status in the store")))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful operation"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"category"),(0,l.kt)("span",{style:{opacity:"0.6"}}," category"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"photoUrls"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"tags"),(0,l.kt)("span",{style:{opacity:"0.6"}}," tag[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"status"),(0,l.kt)("span",{style:{opacity:"0.6"}}," string"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"available"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sold"),"]")),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,"pet status in the store"))))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"405")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Invalid input"))),(0,l.kt)("div",null))))))}d.isMDXComponent=!0}}]);