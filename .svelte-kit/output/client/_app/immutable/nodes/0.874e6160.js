import{S as y,i as V,s as E,k as v,C as N,l as $,m as _,D as I,h as m,n as f,b as B,E as g,F as w,y as C,a as S,z as x,c as q,A as D,G as O,g as p,v as F,d as h,f as G,B as H,H as J,I as U,J as j,K as Q,L as R,M as W,N as P}from"../chunks/index.3fc04f68.js";import{p as K}from"../chunks/stores.abd32da8.js";import{B as X}from"../chunks/Button.7cd7c6fd.js";import{g as A}from"../chunks/navigation.993f09ec.js";import{w as L}from"../chunks/paths.82e41cf3.js";function Y(l){let e,r,t;return{c(){e=v("div"),r=N("svg"),t=N("path"),this.h()},l(s){e=$(s,"DIV",{});var c=_(e);r=I(c,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var a=_(r);t=I(a,"path",{d:!0,stroke:!0,"stroke-opacity":!0,"stroke-width":!0,"stroke-linecap":!0}),_(t).forEach(m),a.forEach(m),c.forEach(m),this.h()},h(){f(t,"d","M27 32.8201H12.3175C12.0252 32.8201 11.7884 32.5832 11.7884 32.291V20.1217M27 7.42328H12.3175C12.0252 7.42328 11.7884 7.66017 11.7884 7.95238V20.1217M11.7884 20.1217H27M11.7884 20.1217V2.5291C11.7884 2.23689 11.5515 2 11.2593 2H2"),f(t,"stroke","#85E96C"),f(t,"stroke-opacity","0.6"),f(t,"stroke-width","2.76001"),f(t,"stroke-linecap","round"),f(r,"width","29"),f(r,"height","35"),f(r,"viewBox","0 0 29 35"),f(r,"fill","none"),f(r,"xmlns","http://www.w3.org/2000/svg")},m(s,c){B(s,e,c),g(e,r),g(r,t)},p:w,i:w,o:w,d(s){s&&m(e)}}}class Z extends y{constructor(e){super(),V(this,e,null,Y,E,{})}}function T(l){let e,r;return e=new X({props:{spaceAll:!1,chooseType:"only-icon",icon:"save",size:"md",classProp:"ml-auto"}}),e.$on("click",l[5]),{c(){C(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){D(e,t,s),r=!0},p:w,i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function ee(l){let e,r,t,s,c,a=l[0].includes("/survey"),n,o,b;s=new Z({});let i=a&&T(l);return{c(){e=v("nav"),r=v("div"),t=v("button"),C(s.$$.fragment),c=S(),i&&i.c(),this.h()},l(u){e=$(u,"NAV",{class:!0});var d=_(e);r=$(d,"DIV",{class:!0});var k=_(r);t=$(k,"BUTTON",{});var M=_(t);x(s.$$.fragment,M),M.forEach(m),c=q(k),i&&i.l(k),k.forEach(m),d.forEach(m),this.h()},h(){f(r,"class","flex border-b-[1px] border-green border-opacity-40 py-2"),f(e,"class","w-full h-[12vh] p-4 text-grayPrimary")},m(u,d){B(u,e,d),g(e,r),g(r,t),D(s,t,null),g(r,c),i&&i.m(r,null),n=!0,o||(b=O(t,"click",l[4]),o=!0)},p(u,[d]){d&1&&(a=u[0].includes("/survey")),a?i?(i.p(u,d),d&1&&p(i,1)):(i=T(u),i.c(),p(i,1),i.m(r,null)):i&&(F(),h(i,1,1,()=>{i=null}),G())},i(u){n||(p(s.$$.fragment,u),p(i),n=!0)},o(u){h(s.$$.fragment,u),h(i),n=!1},d(u){u&&m(e),H(s),i&&i.d(),o=!1,b()}}}function te(l,e,r){let t,s;J(l,K,b=>r(3,s=b));const c=U();console.log("route",t);const a=()=>{if(t.includes("/survey")){A(`/vessel/${s.params.name}`);return}A("/home")},n=()=>a(),o=()=>c("save");return l.$$.update=()=>{l.$$.dirty&8&&r(0,t=s.url.pathname)},[t,c,a,s,n,o]}class se extends y{constructor(e){super(),V(this,e,te,ee,E,{})}}function z(l){let e,r;return e=new se({}),{c(){C(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){D(e,t,s),r=!0},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){h(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function re(l){let e,r,t,s=l[0].url.pathname!=="/"&&z();const c=l[2].default,a=j(c,l,l[1],null);return{c(){e=v("div"),s&&s.c(),r=S(),a&&a.c(),this.h()},l(n){e=$(n,"DIV",{class:!0});var o=_(e);s&&s.l(o),r=q(o),a&&a.l(o),o.forEach(m),this.h()},h(){f(e,"class","bg-blackPrimary h-[100vh]")},m(n,o){B(n,e,o),s&&s.m(e,null),g(e,r),a&&a.m(e,null),t=!0},p(n,[o]){n[0].url.pathname!=="/"?s?o&1&&p(s,1):(s=z(),s.c(),p(s,1),s.m(e,r)):s&&(F(),h(s,1,1,()=>{s=null}),G()),a&&a.p&&(!t||o&2)&&Q(a,c,n,n[1],t?W(c,n[1],o,null):R(n[1]),null)},i(n){t||(p(s),p(a,n),t=!0)},o(n){h(s),h(a,n),t=!1},d(n){n&&m(e),s&&s.d(),a&&a.d(n)}}}function ae(l,e,r){let t;J(l,K,o=>r(0,t=o));let{$$slots:s={},$$scope:c}=e,a=L(0),n=L({name:"defaultValue"});return P("indexVelles",a),P("selectedVessel",n),l.$$set=o=>{"$$scope"in o&&r(1,c=o.$$scope)},[t,c,s]}class ue extends y{constructor(e){super(),V(this,e,ae,re,E,{})}}export{ue as component};
