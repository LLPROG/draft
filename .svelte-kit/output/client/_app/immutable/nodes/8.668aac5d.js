import{S as z,i as F,s as L,k as B,l as E,m as q,h as u,n as A,b as g,d as p,f as C,g as _,H as h,v as D,q as H,r as I,E as O,F as d,w as $,O as k,y,a as T,z as N,c as j,A as V,P as w,B as P}from"../chunks/index.3fc04f68.js";import{V as G}from"../chunks/VesselForm.cad0b825.js";import{p as J}from"../chunks/stores.04ec23ab.js";import{V as K}from"../chunks/store.be3819b6.js";import{B as M}from"../chunks/Button.7cd7c6fd.js";import{b as S}from"../chunks/paths.6da3c254.js";function Q(m){let e,t;return{c(){e=B("p"),t=H("Loading...")},l(a){e=E(a,"P",{});var r=q(e);t=I(r,"Loading..."),r.forEach(u)},m(a,r){g(a,e,r),O(e,t)},p:d,i:d,o:d,d(a){a&&u(e)}}}function R(m){let e,t,a,r,l,i;function c(s){m[3](s)}function o(s){m[4](s)}let n={redirect:"/home",disabled:!0};return m[0]!==void 0&&(n.vesselName=m[0]),m[1]!==void 0&&(n.vessel=m[1]),e=new G({props:n}),$.push(()=>k(e,"vesselName",c)),$.push(()=>k(e,"vessel",o)),l=new M({props:{isButton:!1,href:`${S}/vessel/${m[2].params.name}/survey`,classProp:"flex w-full",message:"Survey",chooseType:"primary",icon:"plus",size:"lg"}}),{c(){y(e.$$.fragment),r=T(),y(l.$$.fragment)},l(s){N(e.$$.fragment,s),r=j(s),N(l.$$.fragment,s)},m(s,f){V(e,s,f),g(s,r,f),V(l,s,f),i=!0},p(s,f){const v={};!t&&f&1&&(t=!0,v.vesselName=s[0],w(()=>t=!1)),!a&&f&2&&(a=!0,v.vessel=s[1],w(()=>a=!1)),e.$set(v);const b={};f&4&&(b.href=`${S}/vessel/${s[2].params.name}/survey`),l.$set(b)},i(s){i||(_(e.$$.fragment,s),_(l.$$.fragment,s),i=!0)},o(s){p(e.$$.fragment,s),p(l.$$.fragment,s),i=!1},d(s){P(e,s),s&&u(r),P(l,s)}}}function U(m){let e,t,a,r;const l=[R,Q],i=[];function c(o,n){return o[2]?0:1}return t=c(m),a=i[t]=l[t](m),{c(){e=B("div"),a.c(),this.h()},l(o){e=E(o,"DIV",{class:!0});var n=q(e);a.l(n),n.forEach(u),this.h()},h(){A(e,"class","w-full h-fit bg-blackPrimary")},m(o,n){g(o,e,n),i[t].m(e,null),r=!0},p(o,[n]){let s=t;t=c(o),t===s?i[t].p(o,n):(D(),p(i[s],1,1,()=>{i[s]=null}),C(),a=i[t],a?a.p(o,n):(a=i[t]=l[t](o),a.c()),_(a,1),a.m(e,null))},i(o){r||(_(a),r=!0)},o(o){p(a),r=!1},d(o){o&&u(e),i[t].d()}}}function W(m,e,t){let a,r;h(m,K,n=>t(5,a=n)),h(m,J,n=>t(2,r=n));let l=r.params.name,i=a.find(n=>n.name===l);console.log("vesselName",l);function c(n){l=n,t(0,l)}function o(n){i=n,t(1,i)}return[l,i,r,c,o]}class te extends z{constructor(e){super(),F(this,e,W,U,L,{})}}export{te as component};