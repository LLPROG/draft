import{S as C,i as O,d as q,s as R,K as z,L as A,v as B,p as E,y as g,c as D,q as b,r as w,z as $,l as d,f as H,x as S,g as u,I as x,A as y,J as j}from"../chunks/index.5250e37f.js";import{p as _}from"../chunks/stores.b650f95b.js";const k="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(r){var h;let e,i=r[0].status+"",o,l,n,c=((h=r[0].error)==null?void 0:h.message)+"",s;const v={c:function(){e=E("h1"),o=g(i),l=D(),n=E("p"),s=g(c),this.h()},l:function(t){e=b(t,"H1",{});var a=w(e);o=$(a,i),a.forEach(d),l=H(t),n=b(t,"P",{});var m=w(n);s=$(m,c),m.forEach(d),this.h()},h:function(){S(e,k,4,0,57),S(n,k,5,0,81)},m:function(t,a){u(t,e,a),x(e,o),u(t,l,a),u(t,n,a),x(n,s)},p:function(t,[a]){var m;a&1&&i!==(i=t[0].status+"")&&y(o,i),a&1&&c!==(c=((m=t[0].error)==null?void 0:m.message)+"")&&y(s,c)},i:j,o:j,d:function(t){t&&d(e),t&&d(l),t&&d(n)}};return q("SvelteRegisterBlock",{block:v,id:f.name,type:"component",source:"",ctx:r}),v}function I(r,e,i){let o;z(_,"page"),A(r,_,s=>i(0,o=s));let{$$slots:l={},$$scope:n}=e;B("Error",l,[]);const c=[];return Object.keys(e).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class L extends C{constructor(e){super(e),O(this,e,I,f,R,{}),q("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{L as component};
