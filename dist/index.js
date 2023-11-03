"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=q(function(z,f){
function g(e,r){var a,c,u,n,i,v,t,p,o,s;for(u=1,n=1,s=1;s<e.length;s++){for(t=e[u],a=t<0?-t:t,p=r[n],i=u-1,v=n-1;i>=0&&(o=e[i],c=o<0?-o:o,!(c<=a));)e[i+1]=o,r[v+1]=r[v],i-=1,v-=1;e[i+1]=t,r[v+1]=p,u+=1,n+=1}}f.exports=g
});var d=q(function(O,x){
var j=require('@stdlib/array-base-zero-to/dist'),k=require('@stdlib/array-base-copy-indexed/dist'),b=require('@stdlib/array-base-take/dist'),h=l();function m(e,r){var a;return a=j(e.length),r=k(r),h(r,a),e=b(e,a),{sh:e,sx:r}}x.exports=m
});var w=d();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
