"use strict";(self.webpackChunkUlbiTV_frontend=self.webpackChunkUlbiTV_frontend||[]).push([[33],{11:function(e,t,r){r.d(t,{I:function(){return l}});var a=r(7294),s=r(3007),n={inputWrapper:"yiPASP1v",placeholder:"emAQQ85i",input:"LVdIPwcx",caretWrapper:"y1GiFC_L",caret:"lqMFGBuL",blink:"M7n8faAU",readonly:"fTN1PnWu"},c=r(5893);const l=(0,a.memo)((e=>{let{className:t,value:r="",onChange:l,type:u="text",placeholder:o,autoFocus:d,readonly:i,...p}=e;const[m,f]=(0,a.useState)(!1),[h,v]=(0,a.useState)(0),g=m&&!i,x=(0,a.useRef)(null);(0,a.useEffect)((()=>{d&&(f(!0),x.current?.focus())}),[d]);const N={[n.redonly]:i};return(0,c.jsxs)("div",{className:(0,s.A)(n.inputWrapper,N,[t]),children:[o&&(0,c.jsx)("div",{className:n.placeholder,children:`${o}>`}),(0,c.jsxs)("div",{className:n.caretWrapper,children:[(0,c.jsx)("input",{type:u,value:r,onChange:e=>{if(r?.toString().length>e?.target?.value?.length)return l?.(e.target.value),void v(e?.target?.selectionStart||0);l?.(e.target.value),v(e.target.value.length)},className:n.input,onFocus:()=>{f(!0)},onBlur:()=>{f(!1)},onSelect:e=>{v(e?.target?.selectionStart||0)},ref:x,readOnly:i,...p}),g&&(0,c.jsx)("span",{className:n.caret,style:{left:9*h+"px"}})]})]})}))},3033:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var a=r(7294),s=r(5443),n=r(1992),c=r(3007),l=r(9499),u=r(11),o=r(8699);const d=e=>e?.loginForm??{username:"",password:"",isLoading:!1};var i=r(6529),p=r(4295),m="WvK8oNvc",f=r(1233),h=r(5401),v=r(9250),g=r(5893);const x={loginForm:p.t};var N=(0,a.memo)((e=>{let{className:t,onSuccess:r}=e;const{t:N}=(0,s.$)(),j=(0,h.T)(),y=(0,v.s0)(),{username:b,password:C,isLoading:F,error:S}=(0,n.v9)(d),k=(0,a.useCallback)((e=>{j(p.BK.setUserName(e))}),[j]),w=(0,a.useCallback)((e=>{j(p.BK.setPassword(e))}),[j]),E=(0,a.useCallback)((async()=>{const e=j((0,i.a)({username:b,password:C}));"fulfilled"===(await e).meta.requestStatus&&(r(),y?.("/about"))}),[j,b,C,r,y]);return(0,g.jsx)(f.W,{reducers:x,children:(0,g.jsxs)("div",{className:(0,c.A)("XfOEzKUx",{},[t]),children:[(0,g.jsx)(o.xv,{title:N("Форма авторизации")}),S&&(0,g.jsx)(o.xv,{text:N("Вы ввели неправильный логин или пароль"),theme:o.lg.ERROR}),(0,g.jsx)(u.I,{type:"text",className:m,placeholder:N("Введите имя"),autoFocus:!0,onChange:k,value:b}),(0,g.jsx)(u.I,{type:"text",className:m,placeholder:N("Введите пароль"),onChange:w,value:C}),(0,g.jsx)(l.zx,{theme:l.bn.OUTLINE,className:"TxJDFmF6",onClick:E,disabled:F,children:N("Войти")})]})})}))},1233:function(e,t,r){r.d(t,{W:function(){return c}});var a=r(7294),s=r(1992),n=r(5893);const c=e=>{const{children:t,reducers:r,removeAfterUnmount:c=!0}=e,l=(0,s.oR)(),u=(0,s.I0)();return(0,a.useEffect)((()=>{const e=l.reducerManager.getMountedReducers();return Object.entries(r).forEach((t=>{let[r,a]=t;e[r]||(l.reducerManager.add(r,a),u({type:`@INIT ${r} reducer`}))})),()=>{c&&Object.entries(r).forEach((e=>{let[t]=e;l.reducerManager.remove(t),u({type:`@DESTROY ${t} reducer`})}))}}),[]),(0,n.jsx)(n.Fragment,{children:t})}}}]);