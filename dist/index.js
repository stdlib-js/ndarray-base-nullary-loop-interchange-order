"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=q(function(z,x){
function g(e,r){var a,c,u,n,i,v,t,p,o,s;for(u=1,n=1,s=1;s<e.length;s++){for(t=e[u],a=t<0?-t:t,p=r[n],i=u-1,v=n-1;i>=0&&(o=e[i],c=o<0?-o:o,!(c<=a));)e[i+1]=o,r[v+1]=r[v],i-=1,v-=1;e[i+1]=t,r[v+1]=p,u+=1,n+=1}}x.exports=g
});var d=q(function(O,l){
var j=require('@stdlib/array-base-zero-to/dist'),k=require('@stdlib/array-base-copy-indexed/dist'),b=require('@stdlib/array-base-take-indexed/dist'),h=f();function m(e,r){var a;return a=j(e.length),r=k(r),h(r,a),e=b(e,a),{sh:e,sx:r,idx:a}}l.exports=m
});var w=d();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
