(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var c=t(4),l=t.n(c),n=t(1);t(9);var s=t(2),i=t.n(s),r=t(0);const o=e=>{let{total:a,perPage:t,currentPage:c,onPageChange:l}=e;const n=Math.ceil(a/+t),s=[];for(let i=1;i<=n;i+=1)s.push(i);return Object(r.jsxs)("ul",{className:"pagination",children:[Object(r.jsx)("li",{className:i()("page-item",{disabled:1===c}),children:Object(r.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c?"true":"false",onClick:()=>{1!==c&&l(c-1)},children:"\xab"})}),s.map((e=>Object(r.jsx)("li",{className:i()("page-item",{active:c===e}),children:Object(r.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:()=>(e=>{e!==c&&l(e)})(e),children:e})},e))),Object(r.jsx)("li",{className:i()("page-item",{disabled:c===n}),children:Object(r.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===n?"true":"false",onClick:()=>{c!==n&&l(c+1)},children:"\xbb"})})]})},j=function(e,a){const t=[];for(let c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((e=>"Item ".concat(e))),d=j.length,h=()=>{const[e,a]=Object(n.useState)("5"),[t,c]=Object(n.useState)(1),l=+e*(t-1)+1,s=+e*t,i=s>d?d:s,h=[...j].splice(l-1,+e);return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Items with Pagination"}),Object(r.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ",t," (items ",l," - ",i," of ",j.length,")"]}),Object(r.jsxs)("div",{className:"form-group row",children:[Object(r.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(r.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",value:e,className:"form-control",onChange:e=>{return t=e.target.value,a(t),void c(1);var t},children:[Object(r.jsx)("option",{value:"3",children:"3"}),Object(r.jsx)("option",{value:"5",children:"5"}),Object(r.jsx)("option",{value:"10",children:"10"}),Object(r.jsx)("option",{value:"20",children:"20"})]})}),Object(r.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(r.jsx)(o,{total:j.length,perPage:e,currentPage:t,onPageChange:e=>{c(e)}}),Object(r.jsx)("ul",{children:h.map((e=>Object(r.jsx)("li",{"data-cy":"item",children:e},e)))})]})};l.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.4040df86.chunk.js.map