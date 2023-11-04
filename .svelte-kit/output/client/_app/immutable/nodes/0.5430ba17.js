import{S as w,i as V,s as E,k as v,C as N,l as $,m as _,D as P,h as m,n as f,b as B,E as g,F as y,y as C,a as L,z as M,c as O,A as x,G as J,g as p,v as j,d as h,f as q,B as D,H as F,I as K,J as U,K as Q,L as R,M as W,N as S}from"../chunks/index.3fc04f68.js";import{p as G}from"../chunks/stores.04ec23ab.js";import{B as X}from"../chunks/Button.7cd7c6fd.js";import{g as I}from"../chunks/navigation.11197ea1.js";import{w as T}from"../chunks/index.0f40077f.js";const Y=!0,Z="always",me=Object.freeze(Object.defineProperty({__proto__:null,prerender:Y,trailingSlash:Z},Symbol.toStringTag,{value:"Module"}));function ee(l){let e,r,t;return{c(){e=v("div"),r=N("svg"),t=N("path"),this.h()},l(s){e=$(s,"DIV",{});var c=_(e);r=P(c,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var a=_(r);t=P(a,"path",{d:!0,stroke:!0,"stroke-opacity":!0,"stroke-width":!0,"stroke-linecap":!0}),_(t).forEach(m),a.forEach(m),c.forEach(m),this.h()},h(){f(t,"d","M27 32.8201H12.3175C12.0252 32.8201 11.7884 32.5832 11.7884 32.291V20.1217M27 7.42328H12.3175C12.0252 7.42328 11.7884 7.66017 11.7884 7.95238V20.1217M11.7884 20.1217H27M11.7884 20.1217V2.5291C11.7884 2.23689 11.5515 2 11.2593 2H2"),f(t,"stroke","#85E96C"),f(t,"stroke-opacity","0.6"),f(t,"stroke-width","2.76001"),f(t,"stroke-linecap","round"),f(r,"width","29"),f(r,"height","35"),f(r,"viewBox","0 0 29 35"),f(r,"fill","none"),f(r,"xmlns","http://www.w3.org/2000/svg")},m(s,c){B(s,e,c),g(e,r),g(r,t)},p:y,i:y,o:y,d(s){s&&m(e)}}}class te extends w{constructor(e){super(),V(this,e,null,ee,E,{})}}function z(l){let e,r;return e=new X({props:{spaceAll:!1,chooseType:"only-icon",icon:"save",size:"md",classProp:"ml-auto"}}),e.$on("click",l[5]),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){x(e,t,s),r=!0},p:y,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function se(l){let e,r,t,s,c,a=l[0].includes("/survey"),n,o,b;s=new te({});let i=a&&z(l);return{c(){e=v("nav"),r=v("div"),t=v("button"),C(s.$$.fragment),c=L(),i&&i.c(),this.h()},l(u){e=$(u,"NAV",{class:!0});var d=_(e);r=$(d,"DIV",{class:!0});var k=_(r);t=$(k,"BUTTON",{});var H=_(t);M(s.$$.fragment,H),H.forEach(m),c=O(k),i&&i.l(k),k.forEach(m),d.forEach(m),this.h()},h(){f(r,"class","flex border-b-[1px] border-green border-opacity-40 py-2"),f(e,"class","w-full h-[12vh] p-4 text-grayPrimary")},m(u,d){B(u,e,d),g(e,r),g(r,t),x(s,t,null),g(r,c),i&&i.m(r,null),n=!0,o||(b=J(t,"click",l[4]),o=!0)},p(u,[d]){d&1&&(a=u[0].includes("/survey")),a?i?(i.p(u,d),d&1&&p(i,1)):(i=z(u),i.c(),p(i,1),i.m(r,null)):i&&(j(),h(i,1,1,()=>{i=null}),q())},i(u){n||(p(s.$$.fragment,u),p(i),n=!0)},o(u){h(s.$$.fragment,u),h(i),n=!1},d(u){u&&m(e),D(s),i&&i.d(),o=!1,b()}}}function re(l,e,r){let t,s;F(l,G,b=>r(3,s=b));const c=K();console.log("route",t);const a=()=>{if(t.includes("/survey")){I(`/vessel/${s.params.name}`);return}I("/home")},n=()=>a(),o=()=>c("save");return l.$$.update=()=>{l.$$.dirty&8&&r(0,t=s.url.pathname)},[t,c,a,s,n,o]}class ae extends w{constructor(e){super(),V(this,e,re,se,E,{})}}function A(l){let e,r;return e=new ae({}),{c(){C(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){x(e,t,s),r=!0},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function ne(l){let e,r,t,s=l[0].url.pathname!=="/"&&A();const c=l[2].default,a=U(c,l,l[1],null);return{c(){e=v("div"),s&&s.c(),r=L(),a&&a.c(),this.h()},l(n){e=$(n,"DIV",{class:!0});var o=_(e);s&&s.l(o),r=O(o),a&&a.l(o),o.forEach(m),this.h()},h(){f(e,"class","bg-blackPrimary h-[100vh]")},m(n,o){B(n,e,o),s&&s.m(e,null),g(e,r),a&&a.m(e,null),t=!0},p(n,[o]){n[0].url.pathname!=="/"?s?o&1&&p(s,1):(s=A(),s.c(),p(s,1),s.m(e,r)):s&&(j(),h(s,1,1,()=>{s=null}),q()),a&&a.p&&(!t||o&2)&&Q(a,c,n,n[1],t?W(c,n[1],o,null):R(n[1]),null)},i(n){t||(p(s),p(a,n),t=!0)},o(n){h(s),h(a,n),t=!1},d(n){n&&m(e),s&&s.d(),a&&a.d(n)}}}function le(l,e,r){let t;F(l,G,o=>r(0,t=o));let{$$slots:s={},$$scope:c}=e,a=T(0),n=T({name:"defaultValue"});return S("indexVelles",a),S("selectedVessel",n),l.$$set=o=>{"$$scope"in o&&r(1,c=o.$$scope)},[t,c,s]}class pe extends w{constructor(e){super(),V(this,e,le,ne,E,{})}}export{pe as component,me as universal};
