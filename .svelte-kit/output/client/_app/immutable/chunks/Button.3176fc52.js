import{S as F,i as G,s as H,e as j,b as A,v as J,d as g,f as L,g as k,h,K as M,k as v,q as P,a as T,y as z,l as w,m as B,r as E,c as N,z as S,n as d,T as y,E as b,A as I,I as q,u as C,B as D}from"./index.d0e80578.js";import{c as p}from"./clsx.1229b3e0.js";import{I as K}from"./IconsRender.79f0be48.js";function Q(o){let e,t,c,r,_,n,i,l,u;return n=new K({props:{icon:o[2]}}),{c(){e=v("a"),t=v("span"),c=P(o[0]),_=T(),z(n.$$.fragment),this.h()},l(s){e=w(s,"A",{href:!0,class:!0});var a=B(e);t=w(a,"SPAN",{class:!0});var m=B(t);c=E(m,o[0]),m.forEach(h),_=N(a),S(n.$$.fragment,a),a.forEach(h),this.h()},h(){d(t,"class",r=y(p({hidden:o[1]=="only-icon"}))+" svelte-piyljr"),d(e,"href",o[5]),d(e,"class",y(p(o[7]))+" svelte-piyljr")},m(s,a){A(s,e,a),b(e,t),b(t,c),b(e,_),I(n,e,null),i=!0,l||(u=q(e,"click",o[12]),l=!0)},p(s,a){(!i||a&1)&&C(c,s[0]),(!i||a&2&&r!==(r=y(p({hidden:s[1]=="only-icon"}))+" svelte-piyljr"))&&d(t,"class",r);const m={};a&4&&(m.icon=s[2]),n.$set(m),(!i||a&32)&&d(e,"href",s[5])},i(s){i||(k(n.$$.fragment,s),i=!0)},o(s){g(n.$$.fragment,s),i=!1},d(s){s&&h(e),D(n),l=!1,u()}}}function V(o){let e,t,c,r,_,n,i,l,u;return n=new K({props:{icon:o[2]}}),{c(){e=v("button"),t=v("span"),c=P(o[0]),_=T(),z(n.$$.fragment),this.h()},l(s){e=w(s,"BUTTON",{class:!0});var a=B(e);t=w(a,"SPAN",{class:!0});var m=B(t);c=E(m,o[0]),m.forEach(h),_=N(a),S(n.$$.fragment,a),a.forEach(h),this.h()},h(){d(t,"class",r=y(p({hidden:o[1]=="only-icon"}))+" svelte-piyljr"),e.disabled=o[3],d(e,"class",y(p(o[7]))+" svelte-piyljr")},m(s,a){A(s,e,a),b(e,t),b(t,c),b(e,_),I(n,e,null),i=!0,l||(u=q(e,"click",o[11]),l=!0)},p(s,a){(!i||a&1)&&C(c,s[0]),(!i||a&2&&r!==(r=y(p({hidden:s[1]=="only-icon"}))+" svelte-piyljr"))&&d(t,"class",r);const m={};a&4&&(m.icon=s[2]),n.$set(m),(!i||a&8)&&(e.disabled=s[3])},i(s){i||(k(n.$$.fragment,s),i=!0)},o(s){g(n.$$.fragment,s),i=!1},d(s){s&&h(e),D(n),l=!1,u()}}}function W(o){let e,t,c,r;const _=[V,Q],n=[];function i(l,u){return l[4]?0:1}return e=i(o),t=n[e]=_[e](o),{c(){t.c(),c=j()},l(l){t.l(l),c=j()},m(l,u){n[e].m(l,u),A(l,c,u),r=!0},p(l,[u]){let s=e;e=i(l),e===s?n[e].p(l,u):(J(),g(n[s],1,1,()=>{n[s]=null}),L(),t=n[e],t?t.p(l,u):(t=n[e]=_[e](l),t.c()),k(t,1),t.m(c.parentNode,c))},i(l){r||(k(t),r=!0)},o(l){g(t),r=!1},d(l){n[e].d(l),l&&h(c)}}}function X(o,e,t){let{message:c=""}=e,{chooseType:r="primary"}=e,{classProp:_=""}=e,{icon:n=""}=e,{size:i="sm"}=e,{disabled:l=!1}=e,{isButton:u=!0}=e,{href:s=""}=e,{spaceAll:a=!0}=e;const m=M(),O={"px-4 flex justify-center items-center z-20":!0,"w-full":a,"text-grayPrimary rounded-[12px] py-8":r=="primary","text-white secondary rounded-[12px] py-8":r=="secondary","text-black border-b border-b-black py-8":r=="tertiary","h-[56px] w-full absolute bottom-0 p-4 rounded-md bg-green bg-opacity-[10%] shadoww text-center text-white for-form":r=="for-form","w-fit":r=="only-icon","text-[1em]":i=="sm","text-[1.5em]":i=="md","text-[2.5em]":i=="lg","pointer-events-none":l,[_]:!0},R=()=>m("click"),U=()=>m("click");return o.$$set=f=>{"message"in f&&t(0,c=f.message),"chooseType"in f&&t(1,r=f.chooseType),"classProp"in f&&t(8,_=f.classProp),"icon"in f&&t(2,n=f.icon),"size"in f&&t(9,i=f.size),"disabled"in f&&t(3,l=f.disabled),"isButton"in f&&t(4,u=f.isButton),"href"in f&&t(5,s=f.href),"spaceAll"in f&&t(10,a=f.spaceAll)},[c,r,n,l,u,s,m,O,_,i,a,R,U]}class $ extends F{constructor(e){super(),G(this,e,X,W,H,{message:0,chooseType:1,classProp:8,icon:2,size:9,disabled:3,isButton:4,href:5,spaceAll:10})}}export{$ as B};