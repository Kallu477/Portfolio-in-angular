import{a as v}from"./chunk-EDLMOUX2.js";import{a as D}from"./chunk-ILGKH6SB.js";import{a as E}from"./chunk-4RSIKL3V.js";import{a as k,b as _,c as d,d as S,e as s}from"./chunk-J2TQNFOY.js";import{Ga as m,Ha as o,Ia as n,Ja as f,La as r,Na as b,Oa as M,Pa as y,Ra as O,fb as l,na as i,wa as a}from"./chunk-K5J43HPE.js";var u=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-header"]],decls:18,vars:5,consts:[[2,"cursor","pointer"],[3,"routerLink"]],template:function(t,p){t&1&&(o(0,"header")(1,"nav")(2,"ul")(3,"li",0)(4,"a",1),r(5,"Home"),n()(),o(6,"li",0)(7,"a",1),r(8,"About"),n()(),o(9,"li",0)(10,"a",1),r(11,"Contact"),n()(),o(12,"li",0)(13,"a",1),r(14,"Projects"),n()(),o(15,"li",0)(16,"a",1),r(17,"Skillset"),n()()()()()),t&2&&(i(4),m("routerLink","/"),i(3),m("routerLink","/about"),i(3),m("routerLink","/contact"),i(3),m("routerLink","/projects"),i(3),m("routerLink","/skillset"))},dependencies:[l,s,d],styles:["header[_ngcontent-%COMP%]{background-color:#333;padding:10px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0;display:flex;justify-content:center}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 20px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:18px}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#007bff}"]})};var C=class e{currentYear=new Date().getFullYear();profileName="Kalyani Kongala";contactEmail="kalvenk@gmail.com";contactPhone="Phone: 123-456-7890";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-footer"]],decls:5,vars:4,template:function(t,p){t&1&&(o(0,"footer")(1,"p"),r(2),n(),o(3,"p"),r(4),n()()),t&2&&(i(2),M("\xA9 ",p.currentYear," ",p.profileName,". All rights reserved."),i(2),M("Email: ",p.contactEmail," | ",p.contactPhone,""))},dependencies:[l],styles:["footer[_ngcontent-%COMP%]{background-color:#333;color:#fff;text-align:center;padding:20px 0;position:fixed;width:100%;bottom:0}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}"]})};var g=class e{title="My Portfolio";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-root"]],features:[y([{provide:"ROUTES",useValue:[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:v},{path:"about",component:v},{path:"projects",component:D},{path:"skillset",component:E}]}])],decls:3,vars:0,template:function(t,p){t&1&&f(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[u,C,l,s,_],encapsulation:2})};var h=class e{profileName="Kalyani Kongala";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=a({type:e,selectors:[["app-home"]],decls:9,vars:2,consts:[[1,"home-container"],[1,"intro"],["src","/assets/images/profile-img.png","alt","Profile Image",1,"profile-img"],[3,"routerLink"]],template:function(t,p){t&1&&(o(0,"div",0)(1,"div",1),f(2,"img",2),o(3,"h1"),r(4,"Welcome to My Portfolio!"),n(),o(5,"p"),r(6),n(),o(7,"button",3),r(8,"Learn More About Me"),n()()()),t&2&&(i(6),b("Hi, I'm ",p.profileName,", a passionate developer specializing in web development. I enjoy creating amazing and user-friendly websites and applications."),i(),m("routerLink","/about"))},dependencies:[l,s,d],styles:[".home-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.profile-img[_ngcontent-%COMP%]{width:150px;height:150px;border-radius:50%;margin-bottom:20px}h1[_ngcontent-%COMP%]{font-size:36px;margin-bottom:20px}p[_ngcontent-%COMP%]{font-size:18px;margin-bottom:30px}button[_ngcontent-%COMP%]{padding:10px 20px;font-size:18px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]})};var L=[{path:"",component:h},{path:"about",loadComponent:()=>import("./chunk-QJIAC2MC.js").then(e=>e.AboutComponent)},{path:"contact",loadComponent:()=>import("./chunk-HR6QMLPZ.js").then(e=>e.ContactComponent)},{path:"projects",loadComponent:()=>import("./chunk-VSUW3TQ5.js").then(e=>e.ProjectsComponent)},{path:"skillset",loadComponent:()=>import("./chunk-CYARZDHA.js").then(e=>e.SkillsetComponent)}];var N={providers:[O({eventCoalescing:!0}),S(L)]};k(g,N).catch(e=>console.error(e));
