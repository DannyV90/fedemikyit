import{P as c,c as p,w as n,o as _,a,u as s,X as w,b as l,d,g,n as V,e as v}from"./app-745cd9df.js";import{_ as y}from"./GuestLayout-bb7ea0cf.js";import{_ as t,a as m,b as i}from"./TextInput-89f83d77.js";import{_ as b}from"./PrimaryButton-fa515cc4.js";import"./ApplicationLogo-c7d9e2c3.js";const x=["onSubmit"],k={class:"mt-4"},h={class:"mt-4"},$={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},S={__name:"Register",setup(N){const e=c({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,o)=>(_(),p(y,null,{default:n(()=>[a(s(w),{title:"Register"}),l("form",{onSubmit:v(u,["prevent"])},[l("div",null,[a(t,{for:"name",value:"Name"}),a(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",k,[a(t,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",h,[a(t,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",$,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",q,[a(s(g),{href:f.route("login"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(b,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{S as default};
