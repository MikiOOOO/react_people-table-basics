(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(23),a=c(7),s=(c(32),c(33),c(2)),r=c(4),j=c(0);function i(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(34);var l=c(3),o=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})},b=c(18),d=c.n(b),h=function(e){var t=e.person,c=t.name,n=t.sex,s=t.slug;return Object(l.jsx)(a.c,{to:"/people/".concat(s),className:d()({"has-text-danger":"f"===n}),children:c})},O=function(e){var t=e.people,c=Object(s.q)().searchedSlug;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var n=e.sex,a=e.born,s=e.died,r=e.motherName,j=e.fatherName,i=e.slug,o=t.find((function(e){return e.name===r})),b=t.find((function(e){return e.name===j})),O=o?Object(l.jsx)(h,{person:o}):r,x=b?Object(l.jsx)(h,{person:b}):j;return Object(l.jsxs)("tr",{className:d()({"has-background-warning":c===i}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(h,{person:e})}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:a}),Object(l.jsx)("td",{children:s}),Object(l.jsx)("td",{children:O||"-"}),Object(l.jsx)("td",{children:x||"-"})]},e.slug)}))})]})},x=function(){var e=Object(j.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(j.useState)(!1),s=Object(r.a)(a,2),b=s[0],d=s[1],h=Object(j.useState)(!1),x=Object(r.a)(h,2),u=x[0],p=x[1];return Object(j.useEffect)((function(){d(!1),i().then((function(e){n(e),p(!0)})).catch((function(){return p(!1)})).finally((function(){return d(!0)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[!b&&Object(l.jsx)(o,{}),!u&&b&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),u&&Boolean(!c.length)&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Boolean(c.length)&&Object(l.jsx)(O,{people:c})]})})]})},u=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},p=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},m=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.b,{to:"/",className:"navbar-item",children:"Home"}),Object(l.jsx)(a.b,{to:"/people",className:"navbar-item",children:"People"})]})})})},f=(c(36),function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(m,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{path:"/",element:Object(l.jsx)(p,{})}),Object(l.jsx)(s.b,{path:"/home",element:Object(l.jsx)(s.a,{to:"/",replace:!0})}),Object(l.jsx)(s.b,{path:"/people",element:Object(l.jsx)(x,{})}),Object(l.jsx)(s.b,{path:"/people/:searchedSlug",element:Object(l.jsx)(x,{})}),Object(l.jsx)(s.b,{path:"*",element:Object(l.jsx)(u,{})})]})})})]})});Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(f,{})}))}},[[37,1,2]]]);
//# sourceMappingURL=main.d5b0731f.chunk.js.map