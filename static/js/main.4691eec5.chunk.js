(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],{23:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),s=n.n(c),r=n(13),i=n.n(r),o=(n(23),n(3)),l=n(14),d=n(17),u=n(16),h=n(15),j=n.n(h),p=(n(41),function(e){var t=e.card;return Object(a.jsxs)("div",{className:"card-container",children:[Object(a.jsx)("img",{alt:null===t||void 0===t?void 0:t.name,src:"https://robohash.org/".concat(null===t||void 0===t?void 0:t.id,"?set=set2")}),Object(a.jsxs)("p",{children:["Name: ",null===t||void 0===t?void 0:t.name]}),Object(a.jsxs)("p",{children:["Email: ",null===t||void 0===t?void 0:t.email]})]})}),v=(n(42),function(e){var t=e.cardList;return Object(a.jsx)("div",{className:"card-list-wrapper",children:null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(p,{card:e},e.id)}))})}),b=(n(43),function(e){var t=e.placeholder,n=e.handleChange;return Object(a.jsx)("div",{className:"center",children:Object(a.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})}),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){j.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){void 0===e.data&&null===e.data||a.setState({users:e.data})}),(function(e){console.log("axios failed"),console.log(e)}))},a.handleChange=function(e){a.setState({search:e.target.value})},a.state={search:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.users,n=e.search,c=null===t||void 0===t?void 0:t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{className:"title",children:"React Typescript App 1"}),Object(a.jsx)(b,{placeholder:"Search Users",handleChange:this.handleChange}),Object(a.jsx)(v,{cardList:c})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.4691eec5.chunk.js.map