(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{16:function(e,t,s){},18:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var o=s(0),n=s(11),c=s.n(n),a=(s(16),s(6)),r=s.n(a),i=s(8),l=s(4),h=(s(18),s(5)),b=s(1),j=function(e){var t=e.books,s=e.ChangeBookshelf;return 0!==t.length&&Object(b.jsx)("ol",{className:"books-grid",children:t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsxs)("div",{className:"book",children:[Object(b.jsxs)("div",{className:"book-top",children:[Object(b.jsx)("div",{className:"book-cover",style:{width:128,height:192,backgroundImage:"url(".concat(e.imageLinks.thumbnail,")")}}),Object(b.jsx)("div",{className:"book-shelf-changer",children:Object(b.jsxs)("select",{onChange:function(t){console.log(t.target.value),s(e,t.target.value)},value:e.shelf||"none",children:[Object(b.jsx)("option",{value:"none",disabled:!0,children:"Move to..."}),Object(b.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(b.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(b.jsx)("option",{value:"read",children:"Read"})]})})]}),Object(b.jsx)("div",{className:"book-title",children:e.title}),Object(b.jsx)("div",{className:"book-authors",children:e.authors[0]})]})},e.id)}))})},d=function(e){var t=e.bookslist,s=e.onChangeBookshelf,o=t.filter((function(e){return"wantToRead"===e.shelf})),n=t.filter((function(e){return"read"===e.shelf})),c=t.filter((function(e){return"currentlyReading"===e.shelf}));return Object(b.jsxs)("div",{className:"list-books",children:[Object(b.jsx)("div",{className:"list-books-title",children:Object(b.jsx)("h1",{children:"MyReads"})}),Object(b.jsx)("div",{className:"list-books-content",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"bookshelf",children:[Object(b.jsx)("h2",{className:"bookshelf-title",children:"Currently Reading"}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:Object(b.jsx)(j,{books:c,ChangeBookshelf:s})})})]}),Object(b.jsxs)("div",{className:"bookshelf",children:[Object(b.jsx)("h2",{className:"bookshelf-title",children:"Want to Read"}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:Object(b.jsx)(j,{books:o,ChangeBookshelf:s})})})]}),Object(b.jsxs)("div",{className:"bookshelf",children:[Object(b.jsx)("h2",{className:"bookshelf-title",children:"Read"}),Object(b.jsx)("div",{className:"bookshelf-books",children:Object(b.jsx)("ol",{className:"books-grid",children:Object(b.jsx)(j,{books:n,ChangeBookshelf:s})})})]})]})}),Object(b.jsx)("div",{className:"open-search",children:Object(b.jsx)(h.b,{to:"/search",children:"Add a book"})})]})},u=s(7),f="https://reactnd-books-api.udacity.com",O=localStorage.token;O||(O=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:O},x=function(e){var t=e.bookslist,s=e.onChangeBookshelf,n=Object(o.useState)(""),c=Object(l.a)(n,2),a=c[0],d=c[1],O=Object(o.useState)([]),x=Object(l.a)(O,2),v=x[0],m=x[1];Object(o.useEffect)((function(){if(console.log(a),""===a)return console.log("empty"),void m([]);(function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s=a,o=10,fetch("".concat(f,"/search"),{method:"POST",headers:Object(u.a)(Object(u.a)({},k),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:s,maxResults:o})}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}var s,o}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var g=void 0===v||""===a?[]:v;return!0===Array.isArray(g)&&(g=g.filter((function(e){var s=t.filter((function(t){if(t.id===e.id)return console.log(e.title),console.log(t.shelf),e.shelf=t.shelf,e}));if(s[0]&&(e=s[0]),void 0!==e.authors&&void 0!==e.imageLinks)return e}))),Object(b.jsxs)("div",{className:"search-books",children:[Object(b.jsxs)("div",{className:"search-books-bar",children:[Object(b.jsx)(h.b,{className:"close-search",to:"/",children:"Close"}),Object(b.jsx)("div",{className:"search-books-input-wrapper",children:Object(b.jsx)("input",{type:"text",placeholder:"Search by title, author, or ISBN",value:a,onChange:function(e){return function(e){d(e)}(e.target.value)}})})]}),Object(b.jsx)("div",{className:"search-books-results",children:!0===Array.isArray(g)&&0!==g.length&&Object(b.jsx)(j,{books:g,ChangeBookshelf:s})})]})},v=s(2);var m=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],c=function(e,t){!function(e,t){fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(u.a)(Object(u.a)({},k),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))}(e,t);var o=!1;n(s.map((function(s){return s.id===e.id?(o=!0,e.shelf=t,e):s}))),o||(e.shelf=t,n(s.concat(e))),console.log(s)};return Object(o.useEffect)((function(){(function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/books"),{headers:k}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,console.log(t),n(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/",element:Object(b.jsx)(d,{bookslist:s,onChangeBookshelf:c})}),Object(b.jsx)(v.a,{path:"/search",element:Object(b.jsx)(x,{bookslist:s,onChangeBookshelf:c})})]})};c.a.render(Object(b.jsx)(h.a,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3d328fb6.chunk.js.map