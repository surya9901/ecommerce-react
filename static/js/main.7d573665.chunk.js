(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(7),i=c.n(n),r=(c(12),c(6)),l=c(4),d=(c(13),c(0));var o=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{class:"navbar fixed-top navbar-expand-lg  navbar-dark bg-dark mt-2",children:[Object(d.jsx)("a",{class:"navbar-brand",href:"#",children:"Ecommerce"}),Object(d.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{class:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(d.jsx)("li",{class:"nav-item active",children:Object(d.jsxs)("a",{class:"nav-link",href:"#",children:["Home ",Object(d.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)("a",{class:"nav-link",href:"#",children:"About"})})]}),Object(d.jsxs)("form",{class:"form-inline my-2 my-lg-0",children:[Object(d.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})})};var j=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col-lg-4",children:Object(d.jsxs)("div",{className:"card mt-5",children:[Object(d.jsx)("img",{className:"card-img-top",src:"https://assets.website-files.com/60131c7300605de7946be0d3/60131c7300605d6e776be117_Homepage_Results_Icon.png",alt:"Card image cap"}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.data.Name}),Object(d.jsx)("p",{className:"card-text",children:e.data.Description}),Object(d.jsxs)("span",{class:"badge badge-primary mr-1",children:["Price: ",e.data.Currency,e.data.Price]}),Object(d.jsx)("a",{href:"#",className:"btn btn-success ml-1",onClick:function(){return e.handleclick(e.data.id)},children:"Add to Cart"})]})]})})})};var b=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{class:"list-group mb-3",children:Object(d.jsxs)("li",{class:"list-group-item d-flex justify-content-between lh-condensed",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{class:"my-0",children:e.data.Name}),Object(d.jsxs)("span",{children:["Price: ",e.data.Currency,e.data.Price]})," ",Object(d.jsx)("br",{}),Object(d.jsx)("small",{class:"text-muted",children:e.data.Description})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{class:"badge badge-danger badge-pill",onClick:function(){e.handleclick(e.data.id)},style:{border:"none"},children:"X"})})]})})})};var u=function(){var e=Object(s.useState)([{id:1,Name:"Product 1",Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",Currency:"$",Price:10},{id:2,Name:"Product 2",Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",Currency:"$",Price:20},{id:3,Name:"Product 3",Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",Currency:"$",Price:30},{id:4,Name:"Product 4",Description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, suscipit!",Currency:"$",Price:30}]),t=Object(l.a)(e,2),c=t[0],a=(t[1],Object(s.useState)([])),n=Object(l.a)(a,2),i=n[0],u=n[1],m=Object(s.useState)(0),h=Object(l.a)(m,2),p=h[0],x=h[1],O=function(e){var t=c.find((function(t){return t.id==e}));console.log(t),i.push(t),u(Object(r.a)(i)),console.log(i),x(p+t.Price)},g=function(e){if(window.confirm("Confirm to delete this item from cart")){var t=i.findIndex((function(t){return t.id===e}));x(p-i[t].Price),i.splice(t,1),u(Object(r.a)(i))}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-8",children:Object(d.jsx)("div",{className:"row",children:c.map((function(e){return Object(d.jsx)(j,{data:e,handleclick:O})}))})}),Object(d.jsxs)("div",{class:"col-lg-4 order-md-2 mt-5",children:[Object(d.jsxs)("h4",{class:"d-flex justify-content-between align-items-center text-muted",children:["Total Price: ","$",p,Object(d.jsx)("span",{children:Object(d.jsx)("button",{className:"btn btn-warning",children:"Checkout"})})]}),Object(d.jsxs)("h4",{class:"d-flex justify-content-between align-items-center mb-3",children:[Object(d.jsx)("span",{class:"text-muted",children:"Your cart"}),0===i.length?Object(d.jsx)("span",{class:"badge badge-secondary badge-pill",children:"0"}):Object(d.jsx)("span",{class:"badge badge-secondary badge-pill",children:i.length})]}),i.map((function(e){return Object(d.jsx)(b,{data:e,handleclick:g})}))]})]})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.7d573665.chunk.js.map