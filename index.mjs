// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take-indexed@v0.2.1-esm/index.mjs";function r(r,d){var n;return n=e(r.length),function(e,s){var t,r,d,n,i,a,o,m,h;for(r=1,d=1,h=1;h<e.length;h++){for(t=(a=e[r])<0?-a:a,o=s[d],n=r-1,i=d-1;n>=0&&!(((m=e[n])<0?-m:m)<=t);)e[n+1]=m,s[i+1]=s[i],n-=1,i-=1;e[n+1]=a,s[i+1]=o,r+=1,d+=1}}(d=s(d),n),{sh:r=t(r,n),sx:d,idx:n}}export{r as default};
//# sourceMappingURL=index.mjs.map
