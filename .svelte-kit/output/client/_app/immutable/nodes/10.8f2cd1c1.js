import{S as w,i as S,s as B,k,l as y,m as V,h as m,n as P,b as d,d as p,f as E,g as u,J as v,v as q,q as z,r as C,E as F,F as _,w as I,G as L,y as b,a as x,z as g,c as A,A as $,H as D,B as h}from"../chunks/index.d0e80578.js";import{V as G}from"../chunks/VesselForm.aad4f7b1.js";import{p as H}from"../chunks/stores.c00a0dcb.js";import{V as J}from"../chunks/store.e8a4a602.js";import{B as T}from"../chunks/Button.3176fc52.js";import{b as j}from"../chunks/paths.596503a7.js";function K(l){let s,r;return{c(){s=k("p"),r=z("Loading...")},l(t){s=y(t,"P",{});var n=V(s);r=C(n,"Loading..."),n.forEach(m)},m(t,n){d(t,s,n),F(s,r)},p:_,i:_,o:_,d(t){t&&m(s)}}}function M(l){let s,r,t,n,i;function o(e){l[3](e)}let c={isCreate:!0};return l[0]!==void 0&&(c.vessel=l[0]),s=new G({props:c}),I.push(()=>L(s,"vessel",o)),n=new T({props:{isButton:!1,href:`${j}/vessel/${l[2]}/survey`,classProp:"flex w-full",message:"Survey",chooseType:"primary",icon:"plus",size:"lg"}}),{c(){b(s.$$.fragment),t=x(),b(n.$$.fragment)},l(e){g(s.$$.fragment,e),t=A(e),g(n.$$.fragment,e)},m(e,a){$(s,e,a),d(e,t,a),$(n,e,a),i=!0},p(e,a){const f={};!r&&a&1&&(r=!0,f.vessel=e[0],D(()=>r=!1)),s.$set(f)},i(e){i||(u(s.$$.fragment,e),u(n.$$.fragment,e),i=!0)},o(e){p(s.$$.fragment,e),p(n.$$.fragment,e),i=!1},d(e){h(s,e),e&&m(t),h(n,e)}}}function N(l){let s,r,t,n;const i=[M,K],o=[];function c(e,a){return e[1]?0:1}return r=c(l),t=o[r]=i[r](l),{c(){s=k("div"),t.c(),this.h()},l(e){s=y(e,"DIV",{class:!0});var a=V(s);t.l(a),a.forEach(m),this.h()},h(){P(s,"class","w-full h-fit bg-blackPrimary")},m(e,a){d(e,s,a),o[r].m(s,null),n=!0},p(e,[a]){let f=r;r=c(e),r===f?o[r].p(e,a):(q(),p(o[f],1,1,()=>{o[f]=null}),E(),t=o[r],t?t.p(e,a):(t=o[r]=i[r](e),t.c()),u(t,1),t.m(s,null))},i(e){n||(u(t),n=!0)},o(e){p(t),n=!1},d(e){e&&m(s),o[r].d()}}}function O(l,s,r){let t,n;v(l,J,e=>r(4,t=e)),v(l,H,e=>r(1,n=e));let i=n.params.id,o=t.find(e=>e.id===i);function c(e){o=e,r(0,o)}return[o,n,i,c]}class Z extends w{constructor(s){super(),S(this,s,O,N,B,{})}}export{Z as component};