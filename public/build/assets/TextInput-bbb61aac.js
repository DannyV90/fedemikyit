import{h as c,v as d,o as s,f as a,b as i,t as n,r as m,i as _,j as p}from"./app-8202ee75.js";const f={class:"text-sm text-red-600 dark:text-red-400"},k={__name:"InputError",props:["message"],setup(e){return(o,t)=>c((s(),a("div",null,[i("p",f,n(e.message),1)],512)),[[d,e.message]])}},v={class:"block font-medium text-sm text-gray-700 dark:text-gray-300"},g={key:0},h={key:1},y={__name:"InputLabel",props:["value"],setup(e){return(o,t)=>(s(),a("label",v,[e.value?(s(),a("span",g,n(e.value),1)):(s(),a("span",h,[m(o.$slots,"default")]))]))}},x=["value"],$={__name:"TextInput",props:["modelValue"],emits:["update:modelValue"],setup(e,{expose:o}){const t=_(null);return p(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(r,u)=>(s(),a("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:e.modelValue,onInput:u[0]||(u[0]=l=>r.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:t},null,40,x))}};export{y as _,$ as a,k as b};