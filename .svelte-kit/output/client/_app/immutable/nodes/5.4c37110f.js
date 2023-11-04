import{S as se,i as ne,s as le,J as F,k as w,a as L,l as O,m as E,h as b,c as z,n as V,b as S,E as y,R as oe,K as H,L as J,M as K,T as re,g as h,U as ae,V as N,d as v,y as D,z as P,A as B,f as M,B as I,W as ie,H as C,X as Q,e as R,v as j,w as fe,O as ce,P as ue,Q as U}from"../chunks/index.3fc04f68.js";import{V as W}from"../chunks/store.e7532720.js";import{B as T}from"../chunks/Button.7cd7c6fd.js";import{L as pe}from"../chunks/LogoMain.9ce1fd70.js";import{f as X}from"../chunks/index.3a22fad9.js";import{b as q}from"../chunks/paths.82e41cf3.js";const de=(l,e)=>{const t=s=>{l&&!l.contains(s.target)&&!s.defaultPrevented&&e()};return document.addEventListener("click",t,!0),document.addEventListener("touchstart",t,!0),{destroy(){document.removeEventListener("click",t,!0),document.removeEventListener("touchstart",t,!0)}}};const _e=l=>({}),G=l=>({}),me=l=>({}),Y=l=>({});function he(l){let e,t,s,i,n,f,r,u,$,g;const p=l[2].header,m=F(p,l,l[1],Y),c=l[2].body,a=F(c,l,l[1],G);return{c(){e=w("div"),t=w("div"),s=w("div"),m&&m.c(),i=L(),n=w("div"),a&&a.c(),this.h()},l(o){e=O(o,"DIV",{class:!0});var _=E(e);t=O(_,"DIV",{class:!0});var d=E(t);s=O(d,"DIV",{class:!0});var k=E(s);m&&m.l(k),k.forEach(b),i=z(d),n=O(d,"DIV",{class:!0});var A=E(n);a&&a.l(A),A.forEach(b),d.forEach(b),_.forEach(b),this.h()},h(){V(s,"class","w-full py-4"),V(n,"class","w-full py-2"),V(t,"class","fixed px-4 w-full min-h-[50vh] bottom-0 left-0 rounded-t-3xl popup svelte-372hok"),V(e,"class","w-full fixed top-0 right-0 left-0 bottom-0")},m(o,_){S(o,e,_),y(e,t),y(t,s),m&&m.m(s,null),y(t,i),y(t,n),a&&a.m(n,null),u=!0,$||(g=oe(f=de.call(null,t,l[3])),$=!0)},p(o,[_]){m&&m.p&&(!u||_&2)&&H(m,p,o,o[1],u?K(p,o[1],_,me):J(o[1]),Y),a&&a.p&&(!u||_&2)&&H(a,c,o,o[1],u?K(c,o[1],_,_e):J(o[1]),G),f&&re(f.update)&&_&1&&f.update.call(null,o[3])},i(o){u||(h(m,o),h(a,o),ae(()=>{u&&(r||(r=N(t,X,{duration:300,y:500},!0)),r.run(1))}),u=!0)},o(o){v(m,o),v(a,o),r||(r=N(t,X,{duration:300,y:500},!1)),r.run(0),u=!1},d(o){o&&b(e),m&&m.d(o),a&&a.d(o),o&&r&&r.end(),$=!1,g()}}}function ge(l,e,t){let{$$slots:s={},$$scope:i}=e,{isOpen:n=!1}=e;const f=()=>t(0,n=!1);return l.$$set=r=>{"isOpen"in r&&t(0,n=r.isOpen),"$$scope"in r&&t(1,i=r.$$scope)},[n,i,s,f]}class $e extends se{constructor(e){super(),ne(this,e,ge,he,le,{isOpen:0})}}function Z(l,e,t){const s=l.slice();return s[10]=e[t],s[12]=t,s}function x(l){var i;let e,t;function s(){return l[7](l[12],l[10])}return e=new T({props:{chooseType:"secondary",icon:"arrow",size:"md",message:(i=l[10])==null?void 0:i.name}}),e.$on("click",s),{c(){D(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,f){B(e,n,f),t=!0},p(n,f){var u;l=n;const r={};f&2&&(r.message=(u=l[10])==null?void 0:u.name),e.$set(r)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){v(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function ee(l){let e,t,s=l[10].name!=="defaultValue"&&x(l);return{c(){s&&s.c(),e=R()},l(i){s&&s.l(i),e=R()},m(i,n){s&&s.m(i,n),S(i,e,n),t=!0},p(i,n){i[10].name!=="defaultValue"?s?(s.p(i,n),n&2&&h(s,1)):(s=x(i),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(j(),v(s,1,1,()=>{s=null}),M())},i(i){t||(h(s),t=!0)},o(i){v(s),t=!1},d(i){s&&s.d(i),i&&b(e)}}}function te(l){let e,t,s;function i(f){l[9](f)}let n={$$slots:{body:[ve]},$$scope:{ctx:l}};return l[0]!==void 0&&(n.isOpen=l[0]),e=new $e({props:n}),fe.push(()=>ce(e,"isOpen",i)),{c(){D(e.$$.fragment)},l(f){P(e.$$.fragment,f)},m(f,r){B(e,f,r),s=!0},p(f,r){const u={};r&8200&&(u.$$scope={dirty:r,ctx:f}),!t&&r&1&&(t=!0,u.isOpen=f[0],ue(()=>t=!1)),e.$set(u)},i(f){s||(h(e.$$.fragment,f),s=!0)},o(f){v(e.$$.fragment,f),s=!1},d(f){I(e,f)}}}function ve(l){var f;let e,t,s,i,n;return t=new T({props:{href:`${q}/vessel/${(f=l[3])==null?void 0:f.name}`,isButton:!1,chooseType:"tertiary",icon:"arrowBlack",size:"md",message:"Open"}}),i=new T({props:{chooseType:"tertiary",icon:"arrowBlack",size:"md",message:"Delete"}}),i.$on("click",l[8]),{c(){e=w("div"),D(t.$$.fragment),s=L(),D(i.$$.fragment),this.h()},l(r){e=O(r,"DIV",{class:!0,slot:!0});var u=E(e);P(t.$$.fragment,u),s=z(u),P(i.$$.fragment,u),u.forEach(b),this.h()},h(){V(e,"class","w-full"),V(e,"slot","body")},m(r,u){S(r,e,u),B(t,e,null),y(e,s),B(i,e,null),n=!0},p(r,u){var g;const $={};u&8&&($.href=`${q}/vessel/${(g=r[3])==null?void 0:g.name}`),t.$set($)},i(r){n||(h(t.$$.fragment,r),h(i.$$.fragment,r),n=!0)},o(r){v(t.$$.fragment,r),v(i.$$.fragment,r),n=!1},d(r){r&&b(e),I(t),I(i)}}}function be(l){let e,t,s,i,n,f,r,u,$;s=new pe({}),n=new T({props:{disabled:l[0],href:`${q}/create-vessel`,classProp:"flex w-full",message:"My Fleet",chooseType:"primary",icon:"plus",size:"lg",isButton:!1}});let g=l[1],p=[];for(let a=0;a<g.length;a+=1)p[a]=ee(Z(l,g,a));const m=a=>v(p[a],1,1,()=>{p[a]=null});let c=l[0]&&l[5]&&te(l);return{c(){e=w("div"),t=w("div"),D(s.$$.fragment),i=L(),D(n.$$.fragment),f=L(),r=w("div");for(let a=0;a<p.length;a+=1)p[a].c();u=L(),c&&c.c(),this.h()},l(a){e=O(a,"DIV",{class:!0});var o=E(e);t=O(o,"DIV",{class:!0});var _=E(t);P(s.$$.fragment,_),_.forEach(b),i=z(o),P(n.$$.fragment,o),f=z(o),r=O(o,"DIV",{class:!0});var d=E(r);for(let k=0;k<p.length;k+=1)p[k].l(d);d.forEach(b),u=z(o),c&&c.l(o),o.forEach(b),this.h()},h(){V(t,"class","top-section flex justify-center items-center py-12"),V(r,"class","w-full overflow-y-scroll max-h-[40vh] py-6 gap-2 px-5 flex flex-col justify-start"),V(e,"class","w-full text-green")},m(a,o){S(a,e,o),y(e,t),B(s,t,null),y(e,i),B(n,e,null),y(e,f),y(e,r);for(let _=0;_<p.length;_+=1)p[_]&&p[_].m(r,null);y(e,u),c&&c.m(e,null),$=!0},p(a,[o]){const _={};if(o&1&&(_.disabled=a[0]),n.$set(_),o&15){g=a[1];let d;for(d=0;d<g.length;d+=1){const k=Z(a,g,d);p[d]?(p[d].p(k,o),h(p[d],1)):(p[d]=ee(k),p[d].c(),h(p[d],1),p[d].m(r,null))}for(j(),d=g.length;d<p.length;d+=1)m(d);M()}a[0]&&a[5]?c?(c.p(a,o),o&1&&h(c,1)):(c=te(a),c.c(),h(c,1),c.m(e,null)):c&&(j(),v(c,1,1,()=>{c=null}),M())},i(a){if(!$){h(s.$$.fragment,a),h(n.$$.fragment,a);for(let o=0;o<g.length;o+=1)h(p[o]);h(c),$=!0}},o(a){v(s.$$.fragment,a),v(n.$$.fragment,a),p=p.filter(Boolean);for(let o=0;o<p.length;o+=1)v(p[o]);v(c),$=!1},d(a){a&&b(e),I(s),I(n),ie(p,a),c&&c.d()}}}function ye(l,e,t){let s,i,n;C(l,W,c=>t(1,s=c));let{openPopup:f=!1}=e,r=Q("indexVelles");C(l,r,c=>t(2,i=c));let u=Q("selectedVessel");C(l,u,c=>t(3,n=c));const $=()=>{s.splice(i,1),W.set(s),t(0,f=!1)},g=(c,a)=>{U(r,i=c,i),U(u,n=a,n),console.log("selectedVessel",n),t(0,f=!0)},p=()=>$();function m(c){f=c,t(0,f)}return l.$$set=c=>{"openPopup"in c&&t(0,f=c.openPopup)},[f,s,i,n,r,u,$,g,p,m]}class Pe extends se{constructor(e){super(),ne(this,e,ye,be,le,{openPopup:0})}}export{Pe as component};
