import{J as x,P as v,f as l,b as s,a,u as e,d as n,w as m,h,v as k,k as f,T as V,e as b,o as d,g as w}from"./app-2db4b87e.js";import{a as p,b as g,_ as y}from"./TextInput-3dbd6721.js";import{_ as S}from"./PrimaryButton-01fd3569.js";const N=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},E={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},U={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},I={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(_){const u=_,i=x().props.auth.user,t=v({name:i.name,email:i.email});return(c,o)=>(d(),l("section",null,[N,s("form",{onSubmit:o[2]||(o[2]=b(r=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(y,{for:"name",value:"Name"}),a(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(t).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(y,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=r=>e(t).email=r),required:"",autocomplete:"email"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),u.mustVerifyEmail&&e(i).email_verified_at===null?(d(),l("div",$,[s("p",B,[n(" Your email address is unverified. "),a(e(w),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>[n(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),h(s("div",E," A new verification link has been sent to your email address. ",512),[[k,u.status==="verification-link-sent"]])])):f("",!0),s("div",U,[a(S,{disabled:e(t).processing},{default:m(()=>[n("Save")]),_:1},8,["disabled"]),a(V,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:m(()=>[e(t).recentlySuccessful?(d(),l("p",C,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{I as default};
