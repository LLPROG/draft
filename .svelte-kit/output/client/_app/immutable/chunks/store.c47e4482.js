import{w as O}from"./index.3c64980d.js";const F=Object.freeze({serialize:JSON.stringify,deserialize:JSON.parse});function M(e){const a={...F,...e},{key:u,storage_type:s,start_value:i,serialize:c,deserialize:D}=a,l=typeof window<"u"?window[s]??void 0:void 0,r=O(i,function(){function d(o){o.key===u&&N()}if(l)return N(),window.addEventListener("storage",d),function(){window.removeEventListener("storage",d)}});function v(n){r.set(n),l==null||l.setItem(u,c(n))}function R(n){r.update(d=>{const o=n(d);return l==null||l.setItem(u,c(o)),o})}function N(){const n=l==null?void 0:l.getItem(u);n==null?v(i):r.set(D(n))}return{set:v,update:R,subscribe:r.subscribe}}let m;const T=new Uint8Array(16);function L(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(T)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function U(e,a=0){return t[e[a+0]]+t[e[a+1]]+t[e[a+2]]+t[e[a+3]]+"-"+t[e[a+4]]+t[e[a+5]]+"-"+t[e[a+6]]+t[e[a+7]]+"-"+t[e[a+8]]+t[e[a+9]]+"-"+t[e[a+10]]+t[e[a+11]]+t[e[a+12]]+t[e[a+13]]+t[e[a+14]]+t[e[a+15]]}const V=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:V};function _(e,a,u){if(f.randomUUID&&!a&&!e)return f.randomUUID();e=e||{};const s=e.random||(e.rng||L)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,a){u=u||0;for(let i=0;i<16;++i)a[u+i]=s[i];return a}return U(s)}let p={voy:NaN,year:NaN,Port:""},w=[{name:"Mean Corrected",total:0,left:NaN,right:NaN},{name:"Displacement",total:0,left:NaN,right:NaN},{name:"TPC",total:0,left:NaN,right:NaN},{name:"LCF",total:0,left:NaN,right:NaN},{name:"Mean Corrected",total:0,left:NaN,right:NaN},{name:"1° MTC (Mean + 0.5m)",total:0,left:NaN,right:NaN},{name:"Mean Corrected",total:0,left:NaN,right:NaN},{name:"2° MTC (Mean - 0.5m)",total:0,left:NaN,right:NaN}],k=[{name:"Fwd",value:NaN},{name:"Mid",value:NaN},{name:"Aft",value:NaN}],I=[{name:"Fwd",value:NaN},{name:"Mid",value:NaN},{name:"Aft",value:NaN}],S=[{name:"Ballast",value:NaN},{name:"Fresh water",value:NaN},{name:"Fuel Oil",value:NaN},{name:"Diesel Oil",value:NaN},{name:"Lube Oil",value:NaN},{name:"Other",value:NaN},{name:"Other Cargo",value:NaN},{name:"Constant",value:NaN}],b=[{label:"True Trim",value:0},{label:"Hoggin",value:0},{label:"Mean",value:0},{label:"Keel THK",value:0},{label:"Mean Corrected",value:0}],g=[{label:"Displacement",value:0},{label:"TPC",value:0},{label:"LCF",value:0},{label:"1°MTC",value:0},{label:"2°MTC",value:0},{label:"Mean Corrected",value:0}],h=[{label:"1° Trim Correction",value:0},{label:"2° Trim Correction",value:0},{label:"Density Correction",value:0}],C=[{label:"Final Displacement",value:0},{label:"Light Ship",value:0},{label:"DWT",value:0}],y=[{label:"Ballast",value:0},{label:"Fresh Water",value:0},{label:"Fuel Oil",value:0},{label:"Diesel Oil",value:0},{label:"Lube Oil",value:0},{label:"Other Tanks",value:0},{label:"Other Cargo",value:0},{label:"Deductions",value:0}];const A={id:"0",name:"defaultValue",wasNameFocused:!1,start_value:[{name:"light-ship",value:0,wasfocusedCount:!1},{name:"d-fwd-pp",value:0,wasfocusedCount:!1},{name:"lbp",value:0,wasfocusedCount:!1},{name:"d-mid-pp",value:0,wasfocusedCount:!1},{name:"lbm",value:0,wasfocusedCount:!1},{name:"d-aft-pp",value:0,wasfocusedCount:!1},{name:"keel-thk",value:0,wasfocusedCount:!1}],status:"undefined",initialData:{...p},categories:[...w],draftLeft:[...k],draftRight:[...I],weight:[...S],waterDensityValue:0,tables:[],results:{trimResult:[...b],displacementResult:[...g],correctionsResult:[...h],finalDisplacementResult:[...C],weightResult:[...y],constantR:[{label:"Costant",value:0}]}},z={id:_(),name:"mockData",wasNameFocused:!0,start_value:[{name:"light-ship",value:12,wasfocusedCount:!0},{name:"d-fwd-pp",value:-1.3,wasfocusedCount:!0},{name:"lbp",value:131,wasfocusedCount:!0},{name:"d-mid-pp",value:-.1,wasfocusedCount:!0},{name:"lbm",value:121,wasfocusedCount:!0},{name:"d-aft-pp",value:8.7,wasfocusedCount:!0},{name:"keel-thk",value:.014,wasfocusedCount:!0}],status:"initial",initialData:{...p},categories:[...w],draftLeft:[{name:"Fwd",value:6.54},{name:"Mid",value:7.27},{name:"Aft",value:7.85}],draftRight:[{name:"Fwd",value:6.56},{name:"Mid",value:7.29},{name:"Aft",value:7.87}],weight:[{name:"Ballast",value:1374},{name:"Fresh water",value:55},{name:"Fuel Oil",value:88.5},{name:"Diesel Oil",value:21},{name:"Lube Oil",value:5.05},{name:"Other",value:34},{name:"Other Cargo",value:0},{name:"Constant",value:82}],waterDensityValue:1.025,tables:[],results:{trimResult:[...b],displacementResult:[...g],correctionsResult:[...h],finalDisplacementResult:[...C],weightResult:[...y],constantR:[{label:"Costant",value:0}]}},E=M({start_value:[],key:"Vessels",storage_type:"sessionStorage"});export{E as V,A as d,z as m,_ as v};