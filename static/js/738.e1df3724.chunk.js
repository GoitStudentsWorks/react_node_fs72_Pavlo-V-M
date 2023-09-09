"use strict";(self.webpackChunkproject05_frontend_test=self.webpackChunkproject05_frontend_test||[]).push([[738],{5618:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(9439),a=n(8119),i=n(6048),s=n.n(i),o=n(9434),c=n(9967),l=n(1087),u=n(3329),d=function(){var e=(0,o.v9)(c.rl);return console.log(e),(0,u.jsx)("ul",{className:a.Z.drinks_list,children:e.cocktails.map((function(e){var t=e.drink,n=e.drinkThumb,r=e._id;return(0,u.jsx)("li",{className:a.Z.drinks_item,children:(0,u.jsxs)(l.rU,{className:a.Z.drinks_link,to:"/recipe/".concat(r),children:[(0,u.jsx)("div",{className:a.Z.drinks_card,children:(0,u.jsx)("img",{className:a.Z.drinks_img,src:n,alt:t})}),(0,u.jsx)("h2",{className:a.Z.drinks_title,children:t})]})},r)}))})},g=n(2791),_=n(5861),f=n(4687),p=n.n(f),k=n(1243),h=function(){var e=(0,_.Z)(p().mark((function e(t,n,r){var a,i,s,o,c,l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r,i=t,s=localStorage.getItem("token"),(o=k.Z.create({baseURL:"https://project05-backend.onrender.com"})).defaults.headers.common.Authorization="Bearer ".concat(s),e.next=7,o.get("/api/search?keyword=".concat(n,"&pageNumber=").concat(i,"&pageSize=").concat(a));case 7:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=n(9265),v=n(1554),x=n(8493),j="http://localhost:3000/project05_frontend_test/drinks",Z=function(e){var t=e.pageCount,n=(0,g.useState)(1),i=(0,r.Z)(n,2),l=i[0],_=i[1],f=(0,o.I0)(),p=(0,o.v9)(m.B8),k=(0,o.v9)(x._r),Z=(0,o.v9)(c.rl);(0,g.useEffect)((function(){Z.totalPages>t&&_(Z.totalPages),Z.totalPages<t&&_(Z.totalPages)}),[Z.totalPages,k,t]);var b=(0,o.v9)(v.hx);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(s(),{nextLabel:">",breakLabel:"...",onClick:function(e){var t=e.nextSelectedPage+1;console.log(t);var n=window.location.href;n===j&&h(t," ",k).then((function(t){console.log("paginate"),f((0,c.KK)(t)),f((0,v.W5)(e.nextSelectedPage))})).catch((function(e){return console.log(e)})),n!==j&&h(t,p,k).then((function(t){console.log("paginate2"),f((0,c.KK)(t)),f((0,v.W5)(e.nextSelectedPage))})).catch((function(e){return console.log(e)}))},pageCount:l,pageRangeDisplayed:t,marginPagesDisplayed:1,forcePage:b,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:a.Z.pagination,pageClassName:a.Z.page,previousClassName:a.Z.previous,nextClassName:a.Z.next,activeClassName:a.Z.active})]})},b=n(7689),P=n(7750),y="http://localhost:3000/project05_frontend_test/drinks",w="rejected",D="resolved",N=function(e){var t=e.searchParams,n=(0,g.useState)(""),i=(0,r.Z)(n,2),s=i[0],l=i[1],d=(0,g.useState)(8),_=(0,r.Z)(d,2),f=_[0],p=_[1],k=(0,o.I0)(),j=(0,o.v9)(m.B8),N=(0,o.v9)(x._r),S=(0,b.UO)().categoryName,O=t.get("query");return(0,g.useEffect)((function(){window.addEventListener("resize",(function(e){var t=e.target.innerWidth;console.log(t),t<768&&p(3),t>=768&&p(6)}))}),[k]),(0,g.useEffect)((function(){var e=window.location.href;e===y&&h(1," ",N).then((function(e){console.log("drinrlist"),e?(k((0,c.KK)(e)),k((0,v.W5)(0)),l(D)):l(w)})).catch((function(e){return console.log(e)})),(e!==y||O)&&h(1,j,N).then((function(e){console.log("drinrlist2"),e?(k((0,c.KK)(e)),k((0,v.W5)(0)),l(D)):l(w)})).catch((function(e){return console.log(e)}))}),[S,k,j,N,O]),"panding"===s?(0,u.jsx)(P.Z,{}):"resolved"===s?(0,u.jsx)("div",{className:a.Z.drinks,children:(0,u.jsx)(Z,{pageCount:f})}):"rejected"===s?(0,u.jsx)("div",{className:a.Z.drinks,children:(0,u.jsx)("img",{className:a.Z.drinks_img_error,src:"../../../images/404.jpg",alt:"404"})}):void 0}},4595:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r,a=n(9439),i=n(8119),s=n(2791),o=["title","titleId"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){var n=e.title,a=e.titleId,i=l(e,o);return s.createElement("svg",c({width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?s.createElement("title",{id:a},n):null,r||(r=s.createElement("path",{d:"M1 1.5L6 6.5L11 1.5",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var d,g,_=s.forwardRef(u),f=(n.p,["title","titleId"]);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t){var n=e.title,r=e.titleId,a=k(e,f);return s.createElement("svg",p({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,d||(d=s.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),g||(g=s.createElement("path",{d:"M17.5 17.5L13.875 13.875",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var m=s.forwardRef(h),v=(n.p,n(5984)),x=n(5861),j=n(4687),Z=n.n(j),b=n(1243),P=function(){var e=(0,x.Z)(Z().mark((function e(){var t,n,r,a;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),(n=b.Z.create({baseURL:"https://project05-backend.onrender.com"})).defaults.headers.common.Authorization="Bearer ".concat(t),e.next=5,n.get("/api/recipes/category-list");case 5:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=n(9434),w=n(9265),D=n(7689),N=n(1087),S=n(3329),O="panding",C="resolved",L=function(e){var t=e.categoryValue,n=(0,s.useState)([]),r=(0,a.Z)(n,2),o=r[0],c=r[1],l=(0,s.useState)(""),u=(0,a.Z)(l,2),d=u[0],g=u[1],_=(0,y.I0)(),f=(0,D.TH)(),p=function(e){return e.includes("/")?e.split("").filter((function(e){return"/"!==e})).join(""):e};(0,s.useEffect)((function(){g(O),P().then((function(e){p(e),c(e),g(C)})).catch((function(e){return console.log(e)}))}),[_,c,g]);return"resolved"===d&&(0,S.jsx)("ul",{className:i.Z.category_list,children:o.map((function(e){return(0,S.jsx)(N.rU,{className:i.Z.category_link,to:"/drinks/".concat(p(e.category)),state:{from:f},children:(0,S.jsx)("li",{onClick:function(e){return function(e){_((0,w.hL)(e.target.innerHTML)),t(e.target.innerHTML)}(e)},className:i.Z.category_item,children:e.category},(0,v.x0)())},(0,v.x0)())}))})},E=function(){var e=(0,x.Z)(Z().mark((function e(){var t,n,r,a;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),(n=b.Z.create({baseURL:"https://project05-backend.onrender.com"})).defaults.headers.common.Authorization="Bearer ".concat(t),e.next=5,n.get("/api/ingredients/list");case 5:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I="panding",z="resolved",F=function(e){var t=e.ingredientValue,n=(0,s.useState)([]),r=(0,a.Z)(n,2),o=r[0],c=r[1],l=(0,s.useState)(""),u=(0,a.Z)(l,2),d=u[0],g=u[1],_=(0,y.I0)(),f=(0,D.TH)();(0,s.useEffect)((function(){g(I),E().then((function(e){!function(e){var t=e.map((function(e){var t=e.title;if(t.length>18){var n=t.split(" ");return n.splice(n.length-1,1,"..."),n.join(" ")}return t}));c(t)}(e),g(z)})).catch((function(e){return console.log(e)}))}),[c,g]);return"resolved"===d&&(0,S.jsx)("div",{className:i.Z.ingredients_box,children:(0,S.jsx)("ul",{className:i.Z.ingredients_list,children:o.map((function(e){return(0,S.jsx)(N.rU,{className:i.Z.category_link,to:"/drinks/".concat(e),state:{from:f},children:(0,S.jsx)("li",{onClick:function(e){return function(e){console.log(e.target.innerHTML),_((0,w.hL)(e.target.innerHTML)),t(e.target.innerHTML)}(e)},className:i.Z.category_item,children:e},(0,v.x0)())},(0,v.x0)())}))})})},W=(n(1138),n(4221)),K=function(e){var t=e.setSearchParams,n=(0,s.useState)(!1),r=(0,a.Z)(n,2),o=r[0],c=r[1],l=(0,s.useState)(!1),u=(0,a.Z)(l,2),d=u[0],g=u[1],f=(0,s.useState)(""),p=(0,a.Z)(f,2),k=p[0],h=p[1],v=(0,s.useState)(""),x=(0,a.Z)(v,2),j=x[0],Z=x[1],b=(0,s.useState)(""),D=(0,a.Z)(b,2),N=D[0],O=D[1],C=(0,s.useState)(!1),I=(0,a.Z)(C,2),z=I[0],K=I[1],T=(0,s.useState)(!1),H=(0,a.Z)(T,2),A=H[0],B=H[1],M=(0,y.I0)();return(0,S.jsxs)("div",{className:i.Z.filter,children:[(0,S.jsxs)("label",{className:i.Z.label,children:[(0,S.jsx)("button",{type:"submit",className:i.Z.btn_submit,onClick:function(e){e.preventDefault(),""!==k?(t({query:k}),M((0,w.hL)(k)),h("")):W.fn.info("Please enter a valid name !","Info",3e3)},children:(0,S.jsx)(m,{className:i.Z.input_svg,stroke:"#F3F3F3"})}),(0,S.jsx)("input",{className:i.Z.input,type:"text",name:"filter",title:"Enter the text",placeholder:"Enter the text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:k,onChange:function(e){return h(e.currentTarget.value.toLowerCase())}})]}),(0,S.jsxs)("div",{className:i.Z.select,children:[(0,S.jsxs)("button",{className:i.Z.select_btn,onClick:function(){d?(g(!1),B(!1)):(g(!0),P())},children:[A?"".concat(N):"All categories",(0,S.jsx)(_,{className:i.Z.btn_svg,stroke:"#F3F3F3"})]}),d&&(0,S.jsx)(L,{categoryValue:function(e){O(e),B(!0),g(!1),console.log(A),A&&K(!1)}})]}),(0,S.jsxs)("div",{className:i.Z.select,children:[(0,S.jsxs)("button",{className:i.Z.select_btn,onClick:function(){o?(c(!1),K(!1)):(c(!0),E())},children:[z?"".concat(j):"Ingredients",(0,S.jsx)(_,{className:i.Z.btn_svg,stroke:"#F3F3F3"})]}),o&&(0,S.jsx)(F,{ingredientValue:function(e){Z(e),K(!0),c(!1),z&&B(!1)}})]})]})},T=n(5618),H=n(8493),A=function(){var e=(0,N.lr)(""),t=(0,a.Z)(e,2),n=t[0],r=t[1],o=(0,y.I0)();return(0,s.useEffect)((function(){console.log("drinks");window.addEventListener("resize",(function(e){var t=e.target.innerWidth;t<1440&&o((0,H.tv)(10)),t>=1440&&o((0,H.tv)(9))}))}),[o]),(0,S.jsxs)("div",{className:i.Z.container,children:[(0,S.jsx)("h1",{className:i.Z.title,children:"Drinks"}),(0,S.jsx)(K,{setSearchParams:r}),(0,S.jsx)(T.Z,{searchParams:n}),(0,S.jsx)(W.mh,{})]})},B=function(){return(0,S.jsx)(A,{})}},8119:function(e,t){t.Z={list:"DrinksPage_list__z4uQV",link:"DrinksPage_link__G0esZ",container:"DrinksPage_container__mX7Cz",button:"DrinksPage_button__pfW4J",backdrop:"DrinksPage_backdrop__w8Lt5",modal:"DrinksPage_modal__PkA8W","is-hidden":"DrinksPage_is-hidden__gsTFn",title:"DrinksPage_title__XgrnO",filter:"DrinksPage_filter__7Sbwp",select:"DrinksPage_select__h8guq",label:"DrinksPage_label__XOIoC",input:"DrinksPage_input__1eWv1",btn_submit:"DrinksPage_btn_submit__IFvZ4",input_svg:"DrinksPage_input_svg__BwABd",select_btn:"DrinksPage_select_btn__+4ppE",btn_svg:"DrinksPage_btn_svg__GwjO9",category_list:"DrinksPage_category_list__ljzSC",category_link:"DrinksPage_category_link__0KNIG",category_item:"DrinksPage_category_item__SeQdW",ingredients_box:"DrinksPage_ingredients_box__CKhHp",ingredients_list:"DrinksPage_ingredients_list__5T6gm",drinks:"DrinksPage_drinks__jHOjw",drinks_img_error:"DrinksPage_drinks_img_error__WZiZ1",drinks_list:"DrinksPage_drinks_list__vDrhD",drinks_item:"DrinksPage_drinks_item__S5MUu",drinks_title:"DrinksPage_drinks_title__hivX6",drinks_card:"DrinksPage_drinks_card__Hr7jO",drinks_img:"DrinksPage_drinks_img__xg30C",drinks_link:"DrinksPage_drinks_link__y4zE0",pagination:"DrinksPage_pagination__KlZQQ",page:"DrinksPage_page__EzRkK",active:"DrinksPage_active__hiFIF",previous:"DrinksPage_previous__Zeiga",next:"DrinksPage_next__mSPV5"}}}]);
//# sourceMappingURL=738.e1df3724.chunk.js.map