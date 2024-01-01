// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,n){var t;return t=function(r){var n,t;if(n=[],r<=0)return n;for(t=0;t<r;t++)n.push(t);return n}(r.length),function(r,n){var t,u,f,e,o,h,a,i,s;for(u=1,f=1,s=1;s<r.length;s++){for(t=(h=r[u])<0?-h:h,a=n[f],e=u-1,o=f-1;e>=0&&!(((i=r[e])<0?-i:i)<=t);)r[e+1]=i,n[o+1]=n[o],e-=1,o-=1;r[e+1]=h,n[o+1]=a,u+=1,f+=1}}(n=function(r){var n,t,u;for(t=r.length,n=[],u=0;u<t;u++)n.push(r[u]);return n}(n),t),{sh:r=function(r,n){var t,u;for(t=[],u=0;u<n.length;u++)t.push(r[n[u]]);return t}(r,t),sx:n}}export{r as default};
//# sourceMappingURL=mod.js.map
