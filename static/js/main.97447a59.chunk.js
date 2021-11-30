(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{30:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a=function(e){return e.auth.isAuth},r=function(e){var t,n;return null===e||void 0===e||null===(t=e.auth)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.name}},34:function(e,t,n){e.exports={navLink:"AuthNav_navLink__1Iw3B",activeNavLink:"AuthNav_activeNavLink__2DTWa"}},38:function(e,t,n){e.exports={navList:"Navigation_navList__22y8f",navLink:"Navigation_navLink__12G2p",activeNavLink:"Navigation_activeNavLink__n0ZSi"}},39:function(e,t,n){e.exports={container:"UserMenu_container__XbTxh",btn:"UserMenu_btn__3kuKO",name:"UserMenu_name__1Osv1",avatar:"UserMenu_avatar__1FaZZ"}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u}));var a=n(47),r=n(64),c=n(14),i=Object(r.a)({reducerPath:"contactsApi",tagTypes:["Contacts"],baseQuery:Object(c.d)({baseUrl:"https://6192c7f3d3ae6d0017da82b6.mockapi.io/api/v1"}),endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:function(e){return e?[].concat(Object(a.a)(e.map((function(e){return{type:"Contacts",id:e.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contacts"]})}}}),s=i.useFetchContactsQuery,o=i.useDeleteContactMutation,u=i.useAddContactMutation},52:function(e,t,n){e.exports={regPage:"Login_regPage__350jm",regForm:"Login_regForm__3tJ-q","btn-primary":"Login_btn-primary__b7elC"}},53:function(e,t,n){e.exports={regPage:"Register_regPage__1eGHY",regForm:"Register_regForm__2MPTw","btn-primary":"Register_btn-primary__3t-VL"}},57:function(e,t,n){e.exports={container:"Container_container__-QT8U"}},60:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),s=(n(69),n(70),n(8)),o=n(32),u=n(57),l=n.n(u),b=n(1);function j(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})}var d=n(20),O=n(38),h=n.n(O),g=function(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(d.b,{exact:!0,to:"/",className:h.a.navLink,activeClassName:h.a.activeNavLink,children:"Home"}),Object(b.jsx)(d.b,{exact:!0,to:"/contacts",className:h.a.navLink,activeClassName:h.a.activeNavLink,children:"Contacts"})]})},m=n(92),A=n(27),p=n.n(A),f=n(36),v=n(4),w="https://connections-api.herokuapp.com",x=Object(v.c)("users/register",function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,fetch(w+"/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return r=e.sent,console.log(r),e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),a({error:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()),L=Object(v.c)("users/login",function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,fetch(w+"/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return r=e.sent,console.log(r),e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),a({error:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n){return e.apply(this,arguments)}}()),C=Object(v.c)("users/current",function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a,r,c,i,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.rejectWithValue,r=n.getState,c=r(),i=c.auth.token){e.next=5;break}throw new Error(200);case 5:return e.prev=5,e.next=8,fetch(w+"/users/current",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 8:return s=e.sent,e.next=11,s.json();case 11:return o=e.sent,e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(5),a({error:e.t0.message});case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,n){return e.apply(this,arguments)}}()),y=Object(v.c)("users/logout",function(){var e=Object(f.a)(p.a.mark((function e(t,n){var a,r,c,i,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.rejectWithValue,r=n.getState,c=r(),i=c.auth.token){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch(w+"/users/logout",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(i)}});case 8:s=e.sent,console.log(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),a({error:e.t0.message});case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()),N=n(30),k=n(39),V=n.n(k);function T(){var e,t=Object(s.d)(),n=Object(s.e)(N.b);return Object(b.jsxs)("div",{className:V.a.container,children:[Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"32",className:V.a.avatar}),Object(b.jsxs)("span",{className:V.a.name,children:["Welcome, ",(e=n,e.charAt(0).toUpperCase()+e.slice(1))]}),Object(b.jsx)(m.a,{className:V.a.btn,onClick:function(){t(y())},children:"Log Out"})]})}var Q=n(95),B=n(34),S=n.n(B);function M(){return Object(b.jsx)("div",{children:Object(b.jsxs)(Q.a,{className:S.a.linkRegistration,children:[Object(b.jsx)(d.b,{to:"/login",className:S.a.navLink,activeClassName:S.a.activeNavLink,children:"Login"}),Object(b.jsx)(d.b,{to:"/register",className:S.a.navLink,activeClassName:S.a.activeNavLink,children:"Register"})]})})}var q=n(94),F=n(93),P=n(60),E=n.n(P);function H(){var e=Object(s.e)(N.a);return Object(b.jsx)("header",{className:E.a.header,children:Object(b.jsx)(q.a,{bg:"primary",variant:"dark",children:Object(b.jsxs)(F.a,{children:[Object(b.jsx)(g,{}),e?Object(b.jsx)(T,{}):Object(b.jsx)(M,{})]})})})}var G=n(2),I=n(3),J=["children","restricted","redirectTo"];function K(e){var t=e.children,n=e.restricted,a=void 0!==n&&n,r=e.redirectTo,c=void 0===r?"/contacts":r,i=Object(I.a)(e,J),u=Object(s.e)(N.a)&&a;return Object(b.jsx)(o.b,Object(G.a)(Object(G.a)({},i),{},{children:u?Object(b.jsx)(o.a,{to:c}):t}))}var D=["children","redirectTo"];function X(e){var t=e.children,n=e.redirectTo,a=void 0===n?"/login":n,r=Object(I.a)(e,D),c=Object(s.e)(N.a);return Object(b.jsx)(o.b,Object(G.a)(Object(G.a)({},r),{},{children:c?t:Object(b.jsx)(o.a,{to:a})}))}var Y=n(11),U=n(96),W=n(52),z=n.n(W);function R(){var e=Object(a.useState)(""),t=Object(Y.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(Y.a)(c,2),o=i[0],u=i[1],l=Object(s.d)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":r(a);break;case"password":u(a);break;default:alert("Check input name please!")}},d=function(){r(""),u("")};return Object(b.jsx)("div",{className:z.a.regPage,children:Object(b.jsx)("div",{className:z.a.regForm,children:Object(b.jsxs)(U.a,{onSubmit:function(e){e.preventDefault(),l(L({email:n,password:o})),d()},children:[Object(b.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(U.a.Label,{children:"Email"}),Object(b.jsx)(U.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:j})]}),Object(b.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(U.a.Label,{children:"Password"}),Object(b.jsx)(U.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:j})]}),Object(b.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})})})}var Z=n(53),_=n.n(Z);function $(){var e=Object(a.useState)(""),t=Object(Y.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(Y.a)(c,2),o=i[0],u=i[1],l=Object(a.useState)(""),j=Object(Y.a)(l,2),d=j[0],O=j[1],h=Object(s.d)(),g=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"email":u(a);break;case"password":O(a);break;default:alert("Check input name please!")}},A=function(){r(""),u(""),O("")};return Object(b.jsx)("div",{className:_.a.regPage,children:Object(b.jsx)("div",{className:_.a.regForm,children:Object(b.jsxs)(U.a,{onSubmit:function(e){e.preventDefault(),h(x({name:n,email:o,password:d})),A()},children:[Object(b.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(b.jsx)(U.a.Label,{children:"Name"}),Object(b.jsx)(U.a.Control,{type:"text",name:"name",placeholder:"Enter name",onChange:g})]}),Object(b.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(U.a.Label,{children:"Email"}),Object(b.jsx)(U.a.Control,{type:"email",name:"email",placeholder:"Enter email",onChange:g})]}),Object(b.jsxs)(U.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(b.jsx)(U.a.Label,{children:"Password"}),Object(b.jsx)(U.a.Control,{type:"password",name:"password",placeholder:"Password",onChange:g})]}),Object(b.jsx)(m.a,{variant:"primary",type:"submit",children:"Submit"})]})})})}var ee=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,107))})),te=Object(a.lazy)((function(){return Promise.all([n.e(7),n.e(3)]).then(n.bind(null,108))}));var ne,ae,re=function(){var e=Object(s.d)();return Object(a.useEffect)((function(){e(C())}),[e]),Object(b.jsxs)(j,{children:[Object(b.jsx)(H,{}),Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)("p",{children:"Loading..."}),children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(K,{exact:!0,path:"/",children:Object(b.jsx)(ee,{})}),Object(b.jsx)(K,{path:"/register",restricted:!0,children:Object(b.jsx)($,{})}),Object(b.jsx)(K,{path:"/login",restricted:!0,children:Object(b.jsx)(R,{})}),Object(b.jsx)(X,{path:"/contacts",children:Object(b.jsx)(te,{})})]})})]})},ce=n(61),ie=n(6),se=Object(v.d)("",{"list/filter":function(e,t){return t.payload}}),oe=n(62),ue=n.n(oe),le=n(29),be=n(63),je=n.n(be),de=n(14),Oe=n(43),he=Object(v.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,error:null,isLoading:!1,isAuth:!1},extraReducers:(ne={},Object(ie.a)(ne,x.pending,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0})})),Object(ie.a)(ne,x.fulfilled,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,isAuth:!0,user:t.payload.user,token:t.payload.token})})),Object(ie.a)(ne,x.rejected,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(ie.a)(ne,L.pending,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0})})),Object(ie.a)(ne,L.fulfilled,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,isAuth:!0,user:t.payload.user,token:t.payload.token})})),Object(ie.a)(ne,L.rejected,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,error:t.payload})})),Object(ie.a)(ne,C.pending,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0})})),Object(ie.a)(ne,C.fulfilled,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,isAuth:!0,user:t.payload})})),Object(ie.a)(ne,C.rejected,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,error:t.payload,isAuth:!1})})),Object(ie.a)(ne,y.pending,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0})})),Object(ie.a)(ne,y.fulfilled,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,user:{name:null,email:null},token:"",isAuth:!1})})),Object(ie.a)(ne,y.rejected,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{isLoading:!1,error:t.payload})})),ne)}).reducer,ge={key:"authToken",version:1,storage:ue.a,whitelist:["token"]},me=Object(le.g)(ge,he),Ae=Object(v.a)({reducer:(ae={auth:me},Object(ie.a)(ae,Oe.a.reducerPath,Oe.a.reducer),Object(ie.a)(ae,"filter",se),ae),middleware:function(e){return e({serializableCheck:{ignoredActions:[le.a,le.f,le.b,le.c,le.d,le.e]}}).concat(Oe.a.middleware,je.a)}});Object(de.e)(Ae.dispatch);var pe=Object(le.h)(Ae),fe=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,109)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{store:Ae,children:Object(b.jsx)(ce.a,{loading:null,persistor:pe,children:Object(b.jsx)(d.a,{children:Object(b.jsx)(re,{})})})})}),document.getElementById("root")),fe()}},[[90,5,6]]]);
//# sourceMappingURL=main.97447a59.chunk.js.map