import{S as We,i as qe,s as Be,k as R,l as C,m as D,h as I,n as E,b as Te,a0 as Xt,F as xe,a as V,q as Pe,c as A,r as Ve,Q as nt,E as g,I as at,u as Ft,a1 as $t,w as K,C as J,y as q,z as B,A as j,D as Z,g as y,d as w,B as z,J as rt,V as ut,v as Fe,f as Ue,Z as xt,_ as bt,U as Xe,K as en,e as Nt,a2 as tn}from"../chunks/index.d4a696fd.js";import{p as Ut}from"../chunks/stores.a8d3c08b.js";import{V as $e,d as me}from"../chunks/store.c47e4482.js";import{B as et}from"../chunks/Button.c3ed35ab.js";import{I as Ae}from"../chunks/Input.00a74003.js";import{L as Wt}from"../chunks/LogoBigSheep.956f89ed.js";import{c as we}from"../chunks/clsx.1229b3e0.js";import{f as Et}from"../chunks/index.35e1b1b2.js";import{u as nn}from"../chunks/uploadCSV.26e5ad8a.js";function yt(r,t,e){const l=r.slice();return l[3]=t[e],l}function It(r,t){let e,l,a,u,n,o,s=t[3]+"",c,f,_,b,M;function T(){return t[2](t[3])}return{key:r,first:null,c(){e=R("button"),l=R("div"),n=V(),o=R("div"),c=Pe(s),_=V(),this.h()},l(k){e=C(k,"BUTTON",{class:!0});var h=D(e);l=C(h,"DIV",{class:!0,id:!0}),D(l).forEach(I),n=A(h),o=C(h,"DIV",{class:!0});var Q=D(o);c=Ve(Q,s),Q.forEach(I),_=A(h),h.forEach(I),this.h()},h(){E(l,"class",a=nt(we("radio w-5 h-5 rounded-full border-[4px] border-gray-300 bg-[#485544] outline-none text-transparent",{"bg-greenAccent":t[0]===t[3]}))+" svelte-vm48ny"),E(l,"id",u=t[3]),E(o,"class",f=nt(we({"text-greenAccent":t[0]===t[3]}))+" svelte-vm48ny"),E(e,"class","w-full flex justify-start items-center gap-2"),this.first=e},m(k,h){Te(k,e,h),g(e,l),g(e,n),g(e,o),g(o,c),g(e,_),b||(M=at(e,"click",T),b=!0)},p(k,h){t=k,h&3&&a!==(a=nt(we("radio w-5 h-5 rounded-full border-[4px] border-gray-300 bg-[#485544] outline-none text-transparent",{"bg-greenAccent":t[0]===t[3]}))+" svelte-vm48ny")&&E(l,"class",a),h&2&&u!==(u=t[3])&&E(l,"id",u),h&2&&s!==(s=t[3]+"")&&Ft(c,s),h&3&&f!==(f=nt(we({"text-greenAccent":t[0]===t[3]}))+" svelte-vm48ny")&&E(o,"class",f)},d(k){k&&I(e),b=!1,M()}}}function ln(r){let t,e=[],l=new Map,a=r[1];const u=n=>n[3];for(let n=0;n<a.length;n+=1){let o=yt(r,a,n),s=u(o);l.set(s,e[n]=It(s,o))}return{c(){t=R("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){t=C(n,"DIV",{class:!0});var o=D(t);for(let s=0;s<e.length;s+=1)e[s].l(o);o.forEach(I),this.h()},h(){E(t,"class","w-full flex flex-col gap-3 py-2")},m(n,o){Te(n,t,o);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(n,[o]){o&3&&(a=n[1],e=Xt(e,o,u,1,n,a,l,t,$t,It,null,yt))},i:xe,o:xe,d(n){n&&I(t);for(let o=0;o<e.length;o+=1)e[o].d()}}}function rn(r,t,e){let{options:l=[""]}=t,{selectedOption:a=l[0]}=t;const u=n=>{e(0,a=n)};return r.$$set=n=>{"options"in n&&e(1,l=n.options),"selectedOption"in n&&e(0,a=n.selectedOption)},[a,l,u]}class sn extends We{constructor(t){super(),qe(this,t,rn,ln,Be,{options:1,selectedOption:0})}}function on(r){let t,e,l,a,u,n,o,s,c,f,_,b,M,T,k,h,Q,G,x,ae,S,H,v,Ne,X,Ee,ue,ee,he;function ve(p){r[6](p)}function Oe(p){r[7](p)}let ye={label:"Voy Nr",className:"w-full",id:"name",type:"number"};r[2].voy!==void 0&&(ye.valueN=r[2].voy),r[3]!==void 0&&(ye.isError=r[3]),s=new Ae({props:ye}),K.push(()=>J(s,"valueN",ve)),K.push(()=>J(s,"isError",Oe));function _e(p){r[8](p)}function Me(p){r[9](p)}let le={label:"Year",className:"w-full",id:"name",type:"number"};r[2].year!==void 0&&(le.valueN=r[2].year),r[3]!==void 0&&(le.isError=r[3]),b=new Ae({props:le}),K.push(()=>J(b,"valueN",_e)),K.push(()=>J(b,"isError",Me));function Re(p){r[10](p)}function N(p){r[11](p)}let O={label:"Port",className:"w-full col-span-2",id:"name",type:"text"};r[2].Port!==void 0&&(O.valueT=r[2].Port),r[3]!==void 0&&(O.isError=r[3]),h=new Ae({props:O}),K.push(()=>J(h,"valueT",Re)),K.push(()=>J(h,"isError",N));function ne(p){r[12](p)}function pe(p){r[13](p)}let re={};return r[0]!==void 0&&(re.options=r[0]),r[1]!==void 0&&(re.selectedOption=r[1]),S=new sn({props:re}),K.push(()=>J(S,"options",ne)),K.push(()=>J(S,"selectedOption",pe)),X=new et({props:{spaceAll:!1,chooseType:"for-form",icon:"",size:"md",message:"Next",classProp:"max-w-[10rem] !static"}}),X.$on("click",r[14]),ee=new Wt({}),{c(){t=R("div"),e=R("h1"),l=Pe("NEW SURVEY"),a=V(),u=R("div"),n=R("div"),o=R("div"),q(s.$$.fragment),_=V(),q(b.$$.fragment),k=V(),q(h.$$.fragment),x=V(),ae=R("div"),q(S.$$.fragment),Ne=V(),q(X.$$.fragment),Ee=V(),ue=R("div"),q(ee.$$.fragment),this.h()},l(p){t=C(p,"DIV",{class:!0});var L=D(t);e=C(L,"H1",{class:!0});var se=D(e);l=Ve(se,"NEW SURVEY"),se.forEach(I),a=A(L),u=C(L,"DIV",{class:!0});var P=D(u);n=C(P,"DIV",{class:!0});var $=D(n);o=C($,"DIV",{class:!0});var te=D(o);B(s.$$.fragment,te),_=A(te),B(b.$$.fragment,te),k=A(te),B(h.$$.fragment,te),te.forEach(I),x=A($),ae=C($,"DIV",{class:!0});var oe=D(ae);B(S.$$.fragment,oe),oe.forEach(I),Ne=A($),B(X.$$.fragment,$),$.forEach(I),Ee=A(P),ue=C(P,"DIV",{class:!0});var be=D(ue);B(ee.$$.fragment,be),be.forEach(I),P.forEach(I),L.forEach(I),this.h()},h(){E(e,"class","w-full p-2 py-4 text-[2rem]"),E(o,"class","form grid grid-cols-2 gap-4 text-start"),E(ae,"class","level w-full"),E(n,"class","basis-2/3 flex flex-col gap-8"),E(ue,"class","basis-1/3 flex justify-center items-center"),E(u,"class","w-full p-2 py-4 flex justify-center items-center gap-6"),E(t,"class","w-full text-white text-center p-2 relative")},m(p,L){Te(p,t,L),g(t,e),g(e,l),g(t,a),g(t,u),g(u,n),g(n,o),j(s,o,null),g(o,_),j(b,o,null),g(o,k),j(h,o,null),g(n,x),g(n,ae),j(S,ae,null),g(n,Ne),j(X,n,null),g(u,Ee),g(u,ue),j(ee,ue,null),he=!0},p(p,[L]){const se={};!c&&L&4&&(c=!0,se.valueN=p[2].voy,Z(()=>c=!1)),!f&&L&8&&(f=!0,se.isError=p[3],Z(()=>f=!1)),s.$set(se);const P={};!M&&L&4&&(M=!0,P.valueN=p[2].year,Z(()=>M=!1)),!T&&L&8&&(T=!0,P.isError=p[3],Z(()=>T=!1)),b.$set(P);const $={};!Q&&L&4&&(Q=!0,$.valueT=p[2].Port,Z(()=>Q=!1)),!G&&L&8&&(G=!0,$.isError=p[3],Z(()=>G=!1)),h.$set($);const te={};!H&&L&1&&(H=!0,te.options=p[0],Z(()=>H=!1)),!v&&L&2&&(v=!0,te.selectedOption=p[1],Z(()=>v=!1)),S.$set(te)},i(p){he||(y(s.$$.fragment,p),y(b.$$.fragment,p),y(h.$$.fragment,p),y(S.$$.fragment,p),y(X.$$.fragment,p),y(ee.$$.fragment,p),he=!0)},o(p){w(s.$$.fragment,p),w(b.$$.fragment,p),w(h.$$.fragment,p),w(S.$$.fragment,p),w(X.$$.fragment,p),w(ee.$$.fragment,p),he=!1},d(p){p&&I(t),z(s),z(b),z(h),z(S),z(X),z(ee)}}}function an(r,t,e){let l,a,u;rt(r,$e,v=>e(5,a=v)),rt(r,Ut,v=>e(16,u=v));let{options:n=["Initial","Intermediate","Final"]}=t,{selectedOption:o="Initial"}=t,{data:s={voy:NaN,year:NaN,Port:""}}=t,c=!1,f=u.params.id,_=a.findIndex(v=>v.id===f);const b=()=>{if(M()){e(3,c=!0);return}console.log("error passed",c),console.log(f),l&&ut($e,a[_]={...l,status:o,initialData:s},a)},M=()=>!!(isNaN(s.voy)||isNaN(s.year)||s.Port==="");function T(v){r.$$.not_equal(s.voy,v)&&(s.voy=v,e(2,s))}function k(v){c=v,e(3,c)}function h(v){r.$$.not_equal(s.year,v)&&(s.year=v,e(2,s))}function Q(v){c=v,e(3,c)}function G(v){r.$$.not_equal(s.Port,v)&&(s.Port=v,e(2,s))}function x(v){c=v,e(3,c)}function ae(v){n=v,e(0,n)}function S(v){o=v,e(1,o)}const H=()=>b();return r.$$set=v=>{"options"in v&&e(0,n=v.options),"selectedOption"in v&&e(1,o=v.selectedOption),"data"in v&&e(2,s=v.data)},r.$$.update=()=>{r.$$.dirty&32&&(l=a.find(v=>v.id===f)||void 0)},[n,o,s,c,b,a,T,k,h,Q,G,x,ae,S,H]}class un extends We{constructor(t){super(),qe(this,t,an,on,Be,{options:0,selectedOption:1,data:2})}}function Tt(r,t,e){const l=r.slice();return l[5]=t[e],l}function wt(r){let t,e;function l(){return r[4](r[5])}return t=new et({props:{message:r[5],chooseType:"secondary",icon:"",size:"sm",classProp:"!py-4 text-white !bg-blackPrimary"}}),t.$on("click",l),{c(){q(t.$$.fragment)},l(a){B(t.$$.fragment,a)},m(a,u){j(t,a,u),e=!0},p(a,u){r=a;const n={};u&4&&(n.message=r[5]),t.$set(n)},i(a){e||(y(t.$$.fragment,a),e=!0)},o(a){w(t.$$.fragment,a),e=!1},d(a){z(t,a)}}}function fn(r){let t,e,l,a,u=r[2],n=[];for(let s=0;s<u.length;s+=1)n[s]=wt(Tt(r,u,s));const o=s=>w(n[s],1,1,()=>{n[s]=null});return{c(){t=R("div");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){t=C(s,"DIV",{class:!0});var c=D(t);for(let f=0;f<n.length;f+=1)n[f].l(c);c.forEach(I),this.h()},h(){E(t,"class",e=we("w-full p-1 py-2 flex flex-col gap-2 rounded-xl px-1 bg-[#e0e7f14c] backdrop-blur-sm text-black",{[r[1]]:!0}))},m(s,c){Te(s,t,c);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);a=!0},p(s,[c]){if(c&13){u=s[2];let f;for(f=0;f<u.length;f+=1){const _=Tt(s,u,f);n[f]?(n[f].p(_,c),y(n[f],1)):(n[f]=wt(_),n[f].c(),y(n[f],1),n[f].m(t,null))}for(Fe(),f=u.length;f<n.length;f+=1)o(f);Ue()}(!a||c&2&&e!==(e=we("w-full p-1 py-2 flex flex-col gap-2 rounded-xl px-1 bg-[#e0e7f14c] backdrop-blur-sm text-black",{[s[1]]:!0})))&&E(t,"class",e)},i(s){if(!a){for(let c=0;c<u.length;c+=1)y(n[c]);xt(()=>{a&&(l||(l=bt(t,Et,{y:-10,duration:300},!0)),l.run(1))}),a=!0}},o(s){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)w(n[c]);l||(l=bt(t,Et,{y:-10,duration:300},!1)),l.run(0),a=!1},d(s){s&&I(t),Xe(n,s),s&&l&&l.end()}}}function cn(r,t,e){const l=en();let{classProps:a=""}=t,{value:u=""}=t,{array:n=[""]}=t;const o=s=>{e(0,u=s),l("click",u)};return r.$$set=s=>{"classProps"in s&&e(1,a=s.classProps),"value"in s&&e(0,u=s.value),"array"in s&&e(2,n=s.array)},[u,a,n,l,o]}class _n extends We{constructor(t){super(),qe(this,t,cn,fn,Be,{classProps:1,value:0,array:2})}}function Ot(r){let t,e,l,a;function u(s){r[5](s)}function n(s){r[6](s)}let o={classProps:"absolute top-18 z-50"};return r[2]!==void 0&&(o.array=r[2]),r[0]!==void 0&&(o.value=r[0]),t=new _n({props:o}),K.push(()=>J(t,"array",u)),K.push(()=>J(t,"value",n)),t.$on("click",r[7]),{c(){q(t.$$.fragment)},l(s){B(t.$$.fragment,s)},m(s,c){j(t,s,c),a=!0},p(s,c){const f={};!e&&c&4&&(e=!0,f.array=s[2],Z(()=>e=!1)),!l&&c&1&&(l=!0,f.value=s[0],Z(()=>l=!1)),t.$set(f)},i(s){a||(y(t.$$.fragment,s),a=!0)},o(s){w(t.$$.fragment,s),a=!1},d(s){z(t,s)}}}function pn(r){let t,e,l,a,u;e=new et({props:{message:r[0],chooseType:"secondary",icon:"arrow",size:"sm",classProp:"w-full !py-4"}}),e.$on("click",r[4]);let n=r[1]&&Ot(r);return{c(){t=R("div"),q(e.$$.fragment),l=V(),n&&n.c(),this.h()},l(o){t=C(o,"DIV",{class:!0});var s=D(t);B(e.$$.fragment,s),l=A(s),n&&n.l(s),s.forEach(I),this.h()},h(){E(t,"class",a=we("w-full relative",r[3]))},m(o,s){Te(o,t,s),j(e,t,null),g(t,l),n&&n.m(t,null),u=!0},p(o,[s]){const c={};s&1&&(c.message=o[0]),e.$set(c),o[1]?n?(n.p(o,s),s&2&&y(n,1)):(n=Ot(o),n.c(),y(n,1),n.m(t,null)):n&&(Fe(),w(n,1,1,()=>{n=null}),Ue()),(!u||s&8&&a!==(a=we("w-full relative",o[3])))&&E(t,"class",a)},i(o){u||(y(e.$$.fragment,o),y(n),u=!0)},o(o){w(e.$$.fragment,o),w(n),u=!1},d(o){o&&I(t),z(e),n&&n.d()}}}function gn(r,t,e){let{selectedOption:l="Quarter Mean"}=t,{openMean:a=!1}=t,{array:u=["Quarter Mean","Mean of Mean","Mean of Mean of mean"]}=t,{customClass:n=""}=t;const o=()=>e(1,a=!a);function s(_){u=_,e(2,u)}function c(_){l=_,e(0,l)}const f=_=>{e(0,l=_.detail),e(1,a=!1)};return r.$$set=_=>{"selectedOption"in _&&e(0,l=_.selectedOption),"openMean"in _&&e(1,a=_.openMean),"array"in _&&e(2,u=_.array),"customClass"in _&&e(3,n=_.customClass)},[l,a,u,n,o,s,c,f]}class dn extends We{constructor(t){super(),qe(this,t,gn,pn,Be,{selectedOption:0,openMean:1,array:2,customClass:3})}}function Mt(r,t,e){const l=r.slice();return l[3]=t[e],l}function Rt(r){let t,e,l=`${r[3].label}:`,a,u,n,o,s;return{c(){t=R("li"),e=R("label"),a=Pe(l),u=V(),n=R("input"),s=V(),this.h()},l(c){t=C(c,"LI",{class:!0});var f=D(t);e=C(f,"LABEL",{class:!0,for:!0});var _=D(e);a=Ve(_,l),_.forEach(I),u=A(f),n=C(f,"INPUT",{class:!0,id:!0,type:!0}),s=A(f),f.forEach(I),this.h()},h(){E(e,"class","text-end w-full max-w-[11rem] truncate"),E(e,"for","name"),n.value=o=r[1](r[3].value),E(n,"class","text-start bg-transparent"),E(n,"id","name"),E(n,"type","text"),n.disabled=!0,E(t,"class","w-full grid grid-cols-2 gap-2 text-[rgba(235,255,229,0.8)]")},m(c,f){Te(c,t,f),g(t,e),g(e,a),g(t,u),g(t,n),g(t,s)},p(c,f){f&1&&l!==(l=`${c[3].label}:`)&&Ft(a,l),f&1&&o!==(o=c[1](c[3].value))&&n.value!==o&&(n.value=o)},d(c){c&&I(t)}}}function mn(r){let t,e,l=r[0],a=[];for(let u=0;u<l.length;u+=1)a[u]=Rt(Mt(r,l,u));return{c(){t=R("div"),e=R("ul");for(let u=0;u<a.length;u+=1)a[u].c();this.h()},l(u){t=C(u,"DIV",{class:!0});var n=D(t);e=C(n,"UL",{class:!0});var o=D(e);for(let s=0;s<a.length;s+=1)a[s].l(o);o.forEach(I),n.forEach(I),this.h()},h(){E(e,"class","w-full"),E(t,"class","w-full rounded-2xl result py-4 svelte-l1y7jz")},m(u,n){Te(u,t,n),g(t,e);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(e,null)},p(u,[n]){if(n&3){l=u[0];let o;for(o=0;o<l.length;o+=1){const s=Mt(u,l,o);a[o]?a[o].p(s,n):(a[o]=Rt(s),a[o].c(),a[o].m(e,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=l.length}},i:xe,o:xe,d(u){u&&I(t),Xe(a,u)}}}function hn(r,t,e){let{options:l}=t,{unit:a}=t;const u=n=>{let o=n==null?void 0:n.toPrecision(4);var s=parseFloat(o);return`${s} ${a}`};return r.$$set=n=>{"options"in n&&e(0,l=n.options),"unit"in n&&e(2,a=n.unit)},[l,u,a]}class Le extends We{constructor(t){super(),qe(this,t,hn,mn,Be,{options:0,unit:2})}}const vn=(r,t,e,l)=>r+t*e/l,bn=(r,t,e,l)=>r-t*e/l,Ct=(r,t,e,l,a,u,n)=>{let o=l[0],s=l[1],c=l[2],f=n(r,o,a,u),_=n(t,s,a,u),b=n(e,c,a,u),M=b-f,T=_-(b+f)/2,k=(b+f+_*6)/8,h=(_+(b+f)/2)/2,Q=(k+h)/2;return{trim:M,flessione:T,mean:{quarterMean:k,meanOfMean:h,meanOfMeanOfMean:Q}}},Nn=(r,t,e,l,a,u,n,o)=>{let s=(r+l)/2,c=(t+a)/2,f=(e+u)/2,_=f-s;return _>=0?Ct(s,c,f,n,_,o,vn):Ct(s,c,f,n,_,o,bn)},En=(r,t,e)=>{switch(t){case"Quarter Mean":return r.quarterMean-e;case"Mean of Mean":return r.meanOfMean-e;case"Mean of Mean of mean":return r.meanOfMeanOfMean-e;default:throw console.error("Error: Mean not found")}},yn=(r,t)=>{switch(r){case"Quarter Mean":return t.quarterMean;case"Mean of Mean":return t.meanOfMean;case"Mean of Mean of mean":return t.meanOfMeanOfMean;default:throw console.error("Error: Mean not found")}},lt=(r,t,e,l,a,u)=>{let n=r/a,o=t-e[0],s=n*o;return e[u]<l[u]?s+e[u]:e[u]-s},ot=(r,t,e)=>{let l=r.tables.map(M=>M[0]).flat(),a=l.indexOf(l.filter(M=>M<t).slice(-1)[0]),u=l.indexOf(l.filter(M=>M>t)[0]),n=r.tables[a],o=r.tables[u];console.log("lessRow:",n),console.log("moreRow:",o),console.log("meanCorrected:",t);let s=o[0]-n[0],c=o[1]-n[1],f=o[2]-n[2],_=o[3]-n[3],b=o[4]-n[4];return e?lt(_,t,n,o,s,3):{DIS:lt(c,t,n,o,s,1),TPC:lt(f,t,n,o,s,2),LCF:lt(b,t,n,o,s,4)}},In=(r,t,e,l,a,u,n,o)=>{let s=r*t*e*100/l,c=r*r*(a-u)*50/l,f=(n+s+c)*o/1.025,_=f-(n+s+c);return{TRIM_CORRECTION_1:s,TRIM_CORRECTION_2:c,FINAL_DISPLACEMENT:f,DENSITY_CORRECTION:_}},Tn=(r,t,e,l)=>{let a=r-t,u=wn(l),n=a-u,o=a-u;return e&&(n=o-e),{DWT:a,CARGO:n,COSTANT:o,DEDUCTIONS:u}},wn=r=>r.reduce((t,e)=>t+e.value,0);function Dt(r,t,e){const l=r.slice();return l[34]=t[e],l[35]=t,l[36]=e,l}function kt(r,t,e){const l=r.slice();return l[37]=t[e],l[38]=t,l[39]=e,l}function Pt(r,t,e){const l=r.slice();return l[40]=t[e],l[41]=t,l[42]=e,l}function On(r){let t,e,l,a,u,n,o,s,c,f,_,b,M,T,k,h,Q,G,x,ae,S,H,v,Ne,X,Ee,ue,ee,he,ve,Oe,ye,_e,Me,le,Re,N,O,ne,pe,re,p,L,se,P,$,te,oe,be,Se,ie,je,ze,fe,He,tt,st,it,Ce=r[12],F=[];for(let i=0;i<Ce.length;i+=1)F[i]=Vt(Pt(r,Ce,i));const qt=i=>w(F[i],1,1,()=>{F[i]=null});k=new Wt({props:{divisor:1.5}});let De=r[11],U=[];for(let i=0;i<De.length;i+=1)U[i]=At(kt(r,De,i));const Bt=i=>w(U[i],1,1,()=>{U[i]=null});v=new et({props:{spaceAll:!1,chooseType:"only-icon",icon:"less",size:"md"}}),v.$on("click",r[19]);function jt(i){r[20](i)}let ft={className:"w-[8rem] ",disabled:!1,id:"name",type:"number"};r[1]!==void 0&&(ft.valueN=r[1]),X=new Ae({props:ft}),K.push(()=>J(X,"valueN",jt)),ee=new et({props:{spaceAll:!1,chooseType:"only-icon",icon:"plus",size:"md"}}),ee.$on("click",r[21]);let ke=r[10],W=[];for(let i=0;i<ke.length;i+=1)W[i]=St(Dt(r,ke,i));const zt=i=>w(W[i],1,1,()=>{W[i]=null});function Ht(i){r[23](i)}let ct={customClass:"my-4",openMean:Cn};r[2]!==void 0&&(ct.selectedOption=r[2]),le=new dn({props:ct}),K.push(()=>J(le,"selectedOption",Ht));function Yt(i){r[24](i)}let _t={unit:"m"};r[8]!==void 0&&(_t.options=r[8]),ne=new Le({props:_t}),K.push(()=>J(ne,"options",Yt));function Qt(i){r[25](i)}let pt={unit:"M"};r[7]!==void 0&&(pt.options=r[7]),p=new Le({props:pt}),K.push(()=>J(p,"options",Qt));function Gt(i){r[26](i)}let gt={unit:"M"};r[6]!==void 0&&(gt.options=r[6]),P=new Le({props:gt}),K.push(()=>J(P,"options",Gt));function Kt(i){r[27](i)}let dt={unit:"M"};r[5]!==void 0&&(dt.options=r[5]),oe=new Le({props:dt}),K.push(()=>J(oe,"options",Kt));function Jt(i){r[28](i)}let mt={unit:"M"};r[4]!==void 0&&(mt.options=r[4]),ie=new Le({props:mt}),K.push(()=>J(ie,"options",Jt));function Zt(i){r[29](i)}let ht={unit:"M"};return r[3]!==void 0&&(ht.options=r[3]),fe=new Le({props:ht}),K.push(()=>J(fe,"options",Zt)),{c(){t=R("div"),e=R("div"),l=R("button"),a=Pe("calc"),u=V(),n=R("input"),o=V(),s=R("h2"),c=Pe("Drafts"),f=V(),_=R("div"),b=R("div");for(let i=0;i<F.length;i+=1)F[i].c();M=V(),T=R("div"),q(k.$$.fragment),h=V(),Q=R("div");for(let i=0;i<U.length;i+=1)U[i].c();G=V(),x=R("h2"),ae=Pe("Water Density"),S=V(),H=R("div"),q(v.$$.fragment),Ne=V(),q(X.$$.fragment),ue=V(),q(ee.$$.fragment),he=V(),ve=R("h2"),Oe=Pe("Weight"),ye=V(),_e=R("div");for(let i=0;i<W.length;i+=1)W[i].c();Me=V(),q(le.$$.fragment),N=V(),O=R("div"),q(ne.$$.fragment),re=V(),q(p.$$.fragment),se=V(),q(P.$$.fragment),te=V(),q(oe.$$.fragment),Se=V(),q(ie.$$.fragment),ze=V(),q(fe.$$.fragment),this.h()},l(i){t=C(i,"DIV",{class:!0});var d=D(t);e=C(d,"DIV",{class:!0});var Y=D(e);l=C(Y,"BUTTON",{class:!0});var Ye=D(l);a=Ve(Ye,"calc"),Ye.forEach(I),u=A(Y),n=C(Y,"INPUT",{placeholder:!0,type:!0,accept:!0}),Y.forEach(I),o=A(d),s=C(d,"H2",{class:!0});var Qe=D(s);c=Ve(Qe,"Drafts"),Qe.forEach(I),f=A(d),_=C(d,"DIV",{class:!0});var Ie=D(_);b=C(Ie,"DIV",{class:!0});var Ge=D(b);for(let de=0;de<F.length;de+=1)F[de].l(Ge);Ge.forEach(I),M=A(Ie),T=C(Ie,"DIV",{});var Ke=D(T);B(k.$$.fragment,Ke),Ke.forEach(I),h=A(Ie),Q=C(Ie,"DIV",{class:!0});var Je=D(Q);for(let de=0;de<U.length;de+=1)U[de].l(Je);Je.forEach(I),Ie.forEach(I),G=A(d),x=C(d,"H2",{class:!0});var Ze=D(x);ae=Ve(Ze,"Water Density"),Ze.forEach(I),S=A(d),H=C(d,"DIV",{class:!0});var m=D(H);B(v.$$.fragment,m),Ne=A(m),B(X.$$.fragment,m),ue=A(m),B(ee.$$.fragment,m),m.forEach(I),he=A(d),ve=C(d,"H2",{class:!0});var ge=D(ve);Oe=Ve(ge,"Weight"),ge.forEach(I),ye=A(d),_e=C(d,"DIV",{class:!0});var vt=D(_e);for(let de=0;de<W.length;de+=1)W[de].l(vt);vt.forEach(I),Me=A(d),B(le.$$.fragment,d),N=A(d),O=C(d,"DIV",{class:!0});var ce=D(O);B(ne.$$.fragment,ce),re=A(ce),B(p.$$.fragment,ce),se=A(ce),B(P.$$.fragment,ce),te=A(ce),B(oe.$$.fragment,ce),Se=A(ce),B(ie.$$.fragment,ce),ze=A(ce),B(fe.$$.fragment,ce),ce.forEach(I),d.forEach(I),this.h()},h(){E(l,"class","w-[6rem] py-1 font-bold bg-white rounded-xl text-black text-[1.5rem]"),E(n,"placeholder",""),E(n,"type","file"),E(n,"accept",".csv"),E(e,"class","w-full flex justify-around items-center"),E(s,"class","text-[2em] font-bold py-4"),E(b,"class","flex flex-col gap-4"),E(Q,"class","flex flex-col gap-4"),E(_,"class","w-full flex justify-around"),E(x,"class","text-[2em] font-bold py-4"),E(H,"class","w-full flex justify-center items-center gap-4"),E(ve,"class","text-[2em] font-bold"),E(_e,"class","w-full grid grid-cols-2 gap-4 place-items-center pb-4"),E(O,"class","w-full flex flex-col justify-center items-center gap-4"),E(t,"class","w-full text-center text-whitePrimary px-4 pb-56")},m(i,d){Te(i,t,d),g(t,e),g(e,l),g(l,a),g(e,u),g(e,n),g(t,o),g(t,s),g(s,c),g(t,f),g(t,_),g(_,b);for(let Y=0;Y<F.length;Y+=1)F[Y]&&F[Y].m(b,null);g(_,M),g(_,T),j(k,T,null),g(_,h),g(_,Q);for(let Y=0;Y<U.length;Y+=1)U[Y]&&U[Y].m(Q,null);g(t,G),g(t,x),g(x,ae),g(t,S),g(t,H),j(v,H,null),g(H,Ne),j(X,H,null),g(H,ue),j(ee,H,null),g(t,he),g(t,ve),g(ve,Oe),g(t,ye),g(t,_e);for(let Y=0;Y<W.length;Y+=1)W[Y]&&W[Y].m(_e,null);g(t,Me),j(le,t,null),g(t,N),g(t,O),j(ne,O,null),g(O,re),j(p,O,null),g(O,se),j(P,O,null),g(O,te),j(oe,O,null),g(O,Se),j(ie,O,null),g(O,ze),j(fe,O,null),tt=!0,st||(it=[at(l,"click",r[13]),at(n,"change",r[16])],st=!0)},p(i,d){if(d[0]&4096){Ce=i[12];let m;for(m=0;m<Ce.length;m+=1){const ge=Pt(i,Ce,m);F[m]?(F[m].p(ge,d),y(F[m],1)):(F[m]=Vt(ge),F[m].c(),y(F[m],1),F[m].m(b,null))}for(Fe(),m=Ce.length;m<F.length;m+=1)qt(m);Ue()}if(d[0]&2048){De=i[11];let m;for(m=0;m<De.length;m+=1){const ge=kt(i,De,m);U[m]?(U[m].p(ge,d),y(U[m],1)):(U[m]=At(ge),U[m].c(),y(U[m],1),U[m].m(Q,null))}for(Fe(),m=De.length;m<U.length;m+=1)Bt(m);Ue()}const Y={};if(!Ee&&d[0]&2&&(Ee=!0,Y.valueN=i[1],Z(()=>Ee=!1)),X.$set(Y),d[0]&1024){ke=i[10];let m;for(m=0;m<ke.length;m+=1){const ge=Dt(i,ke,m);W[m]?(W[m].p(ge,d),y(W[m],1)):(W[m]=St(ge),W[m].c(),y(W[m],1),W[m].m(_e,null))}for(Fe(),m=ke.length;m<W.length;m+=1)zt(m);Ue()}const Ye={};!Re&&d[0]&4&&(Re=!0,Ye.selectedOption=i[2],Z(()=>Re=!1)),le.$set(Ye);const Qe={};!pe&&d[0]&256&&(pe=!0,Qe.options=i[8],Z(()=>pe=!1)),ne.$set(Qe);const Ie={};!L&&d[0]&128&&(L=!0,Ie.options=i[7],Z(()=>L=!1)),p.$set(Ie);const Ge={};!$&&d[0]&64&&($=!0,Ge.options=i[6],Z(()=>$=!1)),P.$set(Ge);const Ke={};!be&&d[0]&32&&(be=!0,Ke.options=i[5],Z(()=>be=!1)),oe.$set(Ke);const Je={};!je&&d[0]&16&&(je=!0,Je.options=i[4],Z(()=>je=!1)),ie.$set(Je);const Ze={};!He&&d[0]&8&&(He=!0,Ze.options=i[3],Z(()=>He=!1)),fe.$set(Ze)},i(i){if(!tt){for(let d=0;d<Ce.length;d+=1)y(F[d]);y(k.$$.fragment,i);for(let d=0;d<De.length;d+=1)y(U[d]);y(v.$$.fragment,i),y(X.$$.fragment,i),y(ee.$$.fragment,i);for(let d=0;d<ke.length;d+=1)y(W[d]);y(le.$$.fragment,i),y(ne.$$.fragment,i),y(p.$$.fragment,i),y(P.$$.fragment,i),y(oe.$$.fragment,i),y(ie.$$.fragment,i),y(fe.$$.fragment,i),tt=!0}},o(i){F=F.filter(Boolean);for(let d=0;d<F.length;d+=1)w(F[d]);w(k.$$.fragment,i),U=U.filter(Boolean);for(let d=0;d<U.length;d+=1)w(U[d]);w(v.$$.fragment,i),w(X.$$.fragment,i),w(ee.$$.fragment,i),W=W.filter(Boolean);for(let d=0;d<W.length;d+=1)w(W[d]);w(le.$$.fragment,i),w(ne.$$.fragment,i),w(p.$$.fragment,i),w(P.$$.fragment,i),w(oe.$$.fragment,i),w(ie.$$.fragment,i),w(fe.$$.fragment,i),tt=!1},d(i){i&&I(t),Xe(F,i),z(k),Xe(U,i),z(v),z(X),z(ee),Xe(W,i),z(le),z(ne),z(p),z(P),z(oe),z(ie),z(fe),st=!1,tn(it)}}}function Mn(r){let t,e;return t=new un({}),{c(){q(t.$$.fragment)},l(l){B(t.$$.fragment,l)},m(l,a){j(t,l,a),e=!0},p:xe,i(l){e||(y(t.$$.fragment,l),e=!0)},o(l){w(t.$$.fragment,l),e=!1},d(l){z(t,l)}}}function Vt(r){let t,e,l;function a(n){r[17](n,r[40])}let u={className:"w-[6rem]",type:"number"};return r[40].value!==void 0&&(u.valueN=r[40].value),t=new Ae({props:u}),K.push(()=>J(t,"valueN",a)),{c(){q(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){j(t,n,o),l=!0},p(n,o){r=n;const s={};!e&&o[0]&4096&&(e=!0,s.valueN=r[40].value,Z(()=>e=!1)),t.$set(s)},i(n){l||(y(t.$$.fragment,n),l=!0)},o(n){w(t.$$.fragment,n),l=!1},d(n){z(t,n)}}}function At(r){let t,e,l;function a(n){r[18](n,r[37])}let u={className:"w-[6rem]",type:"number"};return r[37].value!==void 0&&(u.valueN=r[37].value),t=new Ae({props:u}),K.push(()=>J(t,"valueN",a)),{c(){q(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){j(t,n,o),l=!0},p(n,o){r=n;const s={};!e&&o[0]&2048&&(e=!0,s.valueN=r[37].value,Z(()=>e=!1)),t.$set(s)},i(n){l||(y(t.$$.fragment,n),l=!0)},o(n){w(t.$$.fragment,n),l=!1},d(n){z(t,n)}}}function St(r){let t,e,l;function a(n){r[22](n,r[34])}let u={label:r[34].name,className:"w-[8rem]",id:"name",type:"number"};return r[34].value!==void 0&&(u.valueN=r[34].value),t=new Ae({props:u}),K.push(()=>J(t,"valueN",a)),{c(){q(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,o){j(t,n,o),l=!0},p(n,o){r=n;const s={};o[0]&1024&&(s.label=r[34].name),!e&&o[0]&1024&&(e=!0,s.valueN=r[34].value,Z(()=>e=!1)),t.$set(s)},i(n){l||(y(t.$$.fragment,n),l=!0)},o(n){w(t.$$.fragment,n),l=!1},d(n){z(t,n)}}}function Rn(r){let t,e,l,a;const u=[Mn,On],n=[];function o(s,c){return s[9]==="undefined"?0:1}return t=o(r),e=n[t]=u[t](r),{c(){e.c(),l=Nt()},l(s){e.l(s),l=Nt()},m(s,c){n[t].m(s,c),Te(s,l,c),a=!0},p(s,c){let f=t;t=o(s),t===f?n[t].p(s,c):(Fe(),w(n[f],1,1,()=>{n[f]=null}),Ue(),e=n[t],e?e.p(s,c):(e=n[t]=u[t](s),e.c()),y(e,1),e.m(l.parentNode,l))},i(s){a||(y(e),a=!0)},o(s){w(e),a=!1},d(s){n[t].d(s),s&&I(l)}}}let Cn=!1,Lt=0;function Dn(r,t,e){let l,a,u,n,o,s,c,f,_,b,M,T,k,h,Q;rt(r,$e,N=>e(0,h=N)),rt(r,Ut,N=>e(32,Q=N));let G=0,x="Quarter Mean";const ae=()=>{if(!l)return;ut($e,h[H]={...l,categories:u,draftLeft:n,draftRight:o,weight:s,waterDensityValue:G},h);const N=l.start_value[0].value,O=l.start_value[2].value,ne=l.start_value[6].value,pe=.5;let re=Nn(n[0].value,n[1].value,n[2].value,o[0].value,o[1].value,o[2].value,a,l.start_value[4].value);const p=En(re.mean,x,ne),L=p+pe,se=p-pe,P=ot(l,p,!1),$=ot(l,L,!0),te=ot(l,se,!0),{DENSITY_CORRECTION:oe,FINAL_DISPLACEMENT:be,TRIM_CORRECTION_1:Se,TRIM_CORRECTION_2:ie}=In(re.trim,P.TPC,P.LCF,O,$,te,P.DISPLACEMENT,G),{CARGO:je,COSTANT:ze,DWT:fe,DEDUCTIONS:He}=Tn(be,N,Lt,s);console.log("TABLE",P),console.log("MTC1",$),console.log("MTC2",te),console.log("DENSITY_CORRECTION",oe),console.log("FINAL_DISPLACEMENT",be),console.log("TRIM_CORRECTION_1",Se),console.log("TRIM_CORRECTION_2",ie),console.log("CARGO",je),console.log("COSTANT",ze),console.log("DWT",fe),e(8,f[0].value=re.trim,f),e(8,f[1].value=0,f),e(8,f[2].value=yn(x,re.mean),f),e(8,f[3].value=ne,f),e(8,f[4].value=p,f),e(7,_[0].value=P.DIS,_),e(7,_[1].value=P.TPC,_),e(7,_[2].value=P.LCF,_),e(7,_[3].value=$,_),e(7,_[4].value=te,_),e(7,_[5].value=p,_),e(6,b[0].value=Se,b),e(6,b[1].value=ie,b),e(6,b[2].value=oe,b),e(5,M[0].value=be,M),e(5,M[1].value=N,M),e(5,M[2].value=fe,M),e(4,T[0].value=s[0].value,T),e(4,T[1].value=s[1].value,T),e(4,T[2].value=s[2].value,T),e(4,T[3].value=s[3].value,T),e(4,T[4].value=s[4].value,T),e(4,T[5].value=s[5].value,T),e(4,T[6].value=s[6].value,T),e(4,T[7].value=He,T),ut($e,h[H]={...l,results:{trimResult:f,displacementResult:_,correctionsResult:b,finalDisplacementResult:M,weightResult:T,constantR:[{label:"Costant",value:Lt}]}},h),e(15,l=h[H])};let S=Q.params.id,H=h.findIndex(N=>N.id===S);const v=N=>nn(N,h,H);function Ne(N,O){r.$$.not_equal(O.value,N)&&(O.value=N,e(12,n),e(15,l),e(0,h),e(33,S))}function X(N,O){r.$$.not_equal(O.value,N)&&(O.value=N,e(11,o),e(15,l),e(0,h),e(33,S))}const Ee=()=>e(1,G--,G);function ue(N){G=N,e(1,G)}const ee=()=>e(1,G++,G);function he(N,O){r.$$.not_equal(O.value,N)&&(O.value=N,e(10,s),e(15,l),e(0,h),e(33,S))}function ve(N){x=N,e(2,x)}function Oe(N){f=N,e(8,f),e(15,l),e(0,h),e(33,S)}function ye(N){_=N,e(7,_),e(15,l),e(0,h),e(33,S)}function _e(N){b=N,e(6,b),e(15,l),e(0,h),e(33,S)}function Me(N){M=N,e(5,M),e(15,l),e(0,h),e(33,S)}function le(N){T=N,e(4,T),e(15,l),e(0,h),e(33,S)}function Re(N){k=N,e(3,k),e(15,l),e(0,h),e(33,S)}return r.$$.update=()=>{var N,O,ne,pe,re,p,L,se,P;r.$$.dirty[0]&1&&e(15,l=h.find($=>$.id===S)||void 0),r.$$.dirty[0]&32768&&(a=[(N=l==null?void 0:l.start_value[1])==null?void 0:N.value,(O=l==null?void 0:l.start_value[3])==null?void 0:O.value,(ne=l==null?void 0:l.start_value[5])==null?void 0:ne.value]),r.$$.dirty[0]&32768&&(u=(l==null?void 0:l.categories)||me.categories),r.$$.dirty[0]&32768&&e(12,n=(l==null?void 0:l.draftLeft)||me.draftLeft),r.$$.dirty[0]&32768&&e(11,o=(l==null?void 0:l.draftRight)||me.draftRight),r.$$.dirty[0]&32768&&e(10,s=(l==null?void 0:l.weight)||me.weight),r.$$.dirty[0]&32768&&e(9,c=(l==null?void 0:l.status)||"undefined"),r.$$.dirty[0]&32768&&e(8,f=((pe=l==null?void 0:l.results)==null?void 0:pe.trimResult)||me.results.trimResult),r.$$.dirty[0]&32768&&e(7,_=((re=l==null?void 0:l.results)==null?void 0:re.displacementResult)||me.results.displacementResult),r.$$.dirty[0]&32768&&e(6,b=((p=l==null?void 0:l.results)==null?void 0:p.correctionsResult)||me.results.correctionsResult),r.$$.dirty[0]&32768&&e(5,M=((L=l==null?void 0:l.results)==null?void 0:L.finalDisplacementResult)||me.results.finalDisplacementResult),r.$$.dirty[0]&32768&&e(4,T=((se=l==null?void 0:l.results)==null?void 0:se.weightResult)||me.results.weightResult),r.$$.dirty[0]&32768&&e(3,k=((P=l==null?void 0:l.results)==null?void 0:P.constantR)||me.results.constantR)},e(1,G=me.waterDensityValue||0),[h,G,x,k,T,M,b,_,f,c,s,o,n,ae,H,l,v,Ne,X,Ee,ue,ee,he,ve,Oe,ye,_e,Me,le,Re]}class qn extends We{constructor(t){super(),qe(this,t,Dn,Rn,Be,{},null,[-1,-1])}}export{qn as component};
