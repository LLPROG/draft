import{P as d}from"./papaparse.min.84ee02f8.js";const m=(s,r,l)=>{let a=null;const e=s.target.files[0];if(e){const o=new FileReader;o.onload=function(t){var n;const c=(n=t==null?void 0:t.target)==null?void 0:n.result;d.parse(c,{complete:function(p){a=p.data.map(i=>i.map(u=>Number(u))),r[l].tables=a}})},o.readAsText(e)}};export{m as u};