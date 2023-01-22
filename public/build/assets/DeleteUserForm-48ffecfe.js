import{o as u,f as g,r as w,s as $,j as C,q as B,l as D,c as S,a as o,w as l,h as m,v as y,b as e,T as f,n as v,u as c,k as V,x as E,i as h,P as U,y as T,d as p,z as A}from"./app-01bfcb02.js";import{_ as N,a as P,b as z}from"./TextInput-c23c3ad6.js";const K=["type"],x={__name:"DangerButton",props:{type:{type:String,default:"submit"}},setup(a){return(r,t)=>(u(),g("button",{type:a.type,class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"},[w(r.$slots,"default")],8,K))}},M={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},O=e("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),W=[O],j={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(a,{emit:r}){const t=a;$(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const s=()=>{t.closeable&&r("close")},d=n=>{n.key==="Escape"&&t.show&&s()};C(()=>document.addEventListener("keydown",d)),B(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const i=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(n,b)=>(u(),S(E,{to:"body"},[o(f,{"leave-active-class":"duration-200"},{default:l(()=>[m(e("div",M,[o(f,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[m(e("div",{class:"fixed inset-0 transform transition-all",onClick:s},W,512),[[y,a.show]])]),_:1}),o(f,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[m(e("div",{class:v(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c(i)])},[a.show?w(n.$slots,"default",{key:0}):V("",!0)],2),[[y,a.show]])]),_:3})],512),[[y,a.show]])]),_:3})]))}},F=["type"],I={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(a){return(r,t)=>(u(),g("button",{type:a.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[w(r.$slots,"default")],8,F))}},L={class:"space-y-6"},q=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),G={class:"p-6"},H=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1),J=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),Q={class:"mt-6"},R={class:"mt-6 flex justify-end"},Z={__name:"DeleteUserForm",setup(a){const r=h(!1),t=h(null),s=U({password:""}),d=()=>{r.value=!0,T(()=>t.value.focus())},i=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>t.value.focus(),onFinish:()=>s.reset()})},n=()=>{r.value=!1,s.reset()};return(b,_)=>(u(),g("section",L,[q,o(x,{onClick:d},{default:l(()=>[p("Delete Account")]),_:1}),o(j,{show:r.value,onClose:n},{default:l(()=>[e("div",G,[H,J,e("div",Q,[o(N,{for:"password",value:"Password",class:"sr-only"}),o(P,{id:"password",ref_key:"passwordInput",ref:t,modelValue:c(s).password,"onUpdate:modelValue":_[0]||(_[0]=k=>c(s).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:A(i,["enter"])},null,8,["modelValue","onKeyup"]),o(z,{message:c(s).errors.password,class:"mt-2"},null,8,["message"])]),e("div",R,[o(I,{onClick:n},{default:l(()=>[p(" Cancel ")]),_:1}),o(x,{class:v(["ml-3",{"opacity-25":c(s).processing}]),disabled:c(s).processing,onClick:i},{default:l(()=>[p(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{Z as default};
