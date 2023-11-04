import{S,i as U,s as B,k as N,a as C,l as E,m as I,c as G,h,n as r,$ as d,b as y,E as P,F as w,I as V,q as z,r as H,u as J,G as g,a2 as j}from"./index.3fc04f68.js";import{c as _}from"./Button.7cd7c6fd.js";function T(t){let e,l;return{c(){e=N("label"),l=z(t[5]),this.h()},l(i){e=E(i,"LABEL",{for:!0});var s=I(e);l=H(s,t[5]),s.forEach(h),this.h()},h(){r(e,"for",t[7])},m(i,s){y(i,e,s),P(e,l)},p(i,s){s&32&&J(l,i[5]),s&128&&r(e,"for",i[7])},d(i){i&&h(e)}}}function K(t){let e,l,i,s;return{c(){e=N("input"),this.h()},l(a){e=E(a,"INPUT",{placeholder:!0,id:!0,name:!0,class:!0,type:!0}),this.h()},h(){r(e,"placeholder",""),r(e,"id",t[7]),r(e,"name",t[7]),e.disabled=t[8],e.value=t[3],r(e,"class",l=d(_(t[10]))+" svelte-4stq26"),r(e,"type","number")},m(a,n){y(a,e,n),i||(s=[g(e,"focus",t[14]),g(e,"change",t[15])],i=!0)},p(a,n){n&128&&r(e,"id",a[7]),n&128&&r(e,"name",a[7]),n&256&&(e.disabled=a[8]),n&8&&e.value!==a[3]&&(e.value=a[3]),n&1024&&l!==(l=d(_(a[10]))+" svelte-4stq26")&&r(e,"class",l)},d(a){a&&h(e),i=!1,j(s)}}}function M(t){let e,l,i,s;return{c(){e=N("input"),this.h()},l(a){e=E(a,"INPUT",{placeholder:!0,id:!0,name:!0,class:!0,type:!0}),this.h()},h(){r(e,"placeholder",""),r(e,"id",t[7]),r(e,"name",t[7]),e.disabled=t[8],e.value=t[4],r(e,"class",l=d(_(t[10]))+" svelte-4stq26"),r(e,"type","text")},m(a,n){y(a,e,n),i||(s=[g(e,"focus",t[12]),g(e,"change",t[13])],i=!0)},p(a,n){n&128&&r(e,"id",a[7]),n&128&&r(e,"name",a[7]),n&256&&(e.disabled=a[8]),n&16&&e.value!==a[4]&&(e.value=a[4]),n&1024&&l!==(l=d(_(a[10]))+" svelte-4stq26")&&r(e,"class",l)},d(a){a&&h(e),i=!1,j(s)}}}function O(t){let e,l,i,s=t[5]&&T(t);function a(f,c){return f[9]==="text"?M:K}let n=a(t),o=n(t);return{c(){e=N("div"),s&&s.c(),l=C(),o.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var c=I(e);s&&s.l(c),l=G(c),o.l(c),c.forEach(h),this.h()},h(){r(e,"class",i=d(_("flex flex-col gap-0 justify-start text-whitePrimary",t[6]))+" svelte-4stq26")},m(f,c){y(f,e,c),s&&s.m(e,null),P(e,l),o.m(e,null)},p(f,[c]){f[5]?s?s.p(f,c):(s=T(f),s.c(),s.m(e,l)):s&&(s.d(1),s=null),n===(n=a(f))&&o?o.p(f,c):(o.d(1),o=n(f),o&&(o.c(),o.m(e,null))),c&64&&i!==(i=d(_("flex flex-col gap-0 justify-start text-whitePrimary",f[6]))+" svelte-4stq26")&&r(e,"class",i)},i:w,o:w,d(f){f&&h(e),s&&s.d(),o.d()}}}function Q(t,e,l){let i;const s=V();let{label:a=""}=e,{className:n=""}=e,{id:o=""}=e,{valueN:f=NaN}=e,{valueT:c=""}=e,{disabled:k=!1}=e,{type:q="text"}=e,{isError:m=!1}=e,{isErrorName:v=!1}=e,{wasfocused:b=!1}=e;const A=()=>{l(2,b=!0),l(0,m=!1),l(1,v=!1),s("focus")},D=u=>{l(4,c=u.currentTarget.value),s("change",c)},F=()=>{l(2,b=!0),l(0,m=!1),s("focus")},L=u=>{l(3,f=parseFloat(u.currentTarget.value)),s("change",f)};return t.$$set=u=>{"label"in u&&l(5,a=u.label),"className"in u&&l(6,n=u.className),"id"in u&&l(7,o=u.id),"valueN"in u&&l(3,f=u.valueN),"valueT"in u&&l(4,c=u.valueT),"disabled"in u&&l(8,k=u.disabled),"type"in u&&l(9,q=u.type),"isError"in u&&l(0,m=u.isError),"isErrorName"in u&&l(1,v=u.isErrorName),"wasfocused"in u&&l(2,b=u.wasfocused)},t.$$.update=()=>{t.$$.dirty&263&&l(10,i={"p-4 inner-sh rounded-xl bg-green bg-opacity-[10%] shadoww text-center border-0 focus:outline focus:outline-[2px] outline-greenAccent":!0,"outline outline-[2px] outline-red-400":m&&!b||v,"disabled-custom":k})},[m,v,b,f,c,a,n,o,k,q,i,s,A,D,F,L]}class X extends S{constructor(e){super(),U(this,e,Q,O,B,{label:5,className:6,id:7,valueN:3,valueT:4,disabled:8,type:9,isError:0,isErrorName:1,wasfocused:2})}}export{X as I};