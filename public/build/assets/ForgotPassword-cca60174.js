import{P as d,c as u,w as r,o as i,a as t,u as s,X as c,f as _,t as f,k as p,b as a,d as w,n as g,e as b}from"./app-bc2efe8a.js";import{_ as k}from"./GuestLayout-513634c6.js";import{_ as x,a as y,b as h}from"./TextInput-f79a8836.js";import{_ as V}from"./PrimaryButton-188af7bf.js";import"./ApplicationLogo-44a6bd6c.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(P,l)=>(i(),u(k,null,{default:r(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),a("form",{onSubmit:b(m,["prevent"])},[a("div",null,[t(x,{for:"email",value:"Email"}),t(y,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{z as default};
