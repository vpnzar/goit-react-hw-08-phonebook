(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{101:function(e,t,a){e.exports={Phonebook:"ContactForm_Phonebook__2-CvM"}},104:function(e,t,a){"use strict";a.r(t);var n,r=a(27),o=a.n(r),c=a(35),s=a(11),i=a(0),u=a(97),d=a(93),b=a(101),m=a.n(b),p=new Uint8Array(16);function l(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(p)}var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var h=function(e){return"string"===typeof e&&f.test(e)},j=[],v=0;v<256;++v)j.push((v+256).toString(16).substr(1));var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(j[e[t+0]]+j[e[t+1]]+j[e[t+2]]+j[e[t+3]]+"-"+j[e[t+4]]+j[e[t+5]]+"-"+j[e[t+6]]+j[e[t+7]]+"-"+j[e[t+8]]+j[e[t+9]]+"-"+j[e[t+10]]+j[e[t+11]]+j[e[t+12]]+j[e[t+13]]+j[e[t+14]]+j[e[t+15]]).toLowerCase();if(!h(a))throw TypeError("Stringified UUID is invalid");return a};var y=function(e,t,a){var n=(e=e||{}).random||(e.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var r=0;r<16;++r)t[a+r]=n[r];return t}return g(n)},O=a(42),x=a(1);t.default=function(){var e=Object(O.d)().data,t=Object(O.b)(),a=Object(s.a)(t,2),n=a[0],r=a[1].isLoading,b=(y(),y(),y()),p=Object(i.useState)(""),l=Object(s.a)(p,2),f=l[0],h=l[1],j=Object(i.useState)(""),v=Object(s.a)(j,2),g=v[0],C=v[1],k={name:f,number:g,id:b},w=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":h(n);break;case"number":C(n);break;default:return}},A=function(){var t=Object(c.a)(o.a.mark((function t(a){var r,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=a.target,c=r.name,s=r.number,e.some((function(e){return e.name===k.name}))){t.next=8;break}return t.next=6,n(k);case 6:t.next=9;break;case 8:alert("".concat(k.name," is already in contacts"));case 9:c.value="",s.value="";case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:m.a.Phonebook,children:[Object(x.jsx)("h2",{children:"Add Contact:"}),Object(x.jsxs)(u.a,{onSubmit:A,children:[Object(x.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(x.jsx)(u.a.Label,{children:"Name"}),Object(x.jsx)(u.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:w})]}),Object(x.jsxs)(u.a.Group,{className:"mb-3",controlId:"formBasicNumber",children:[Object(x.jsx)(u.a.Label,{children:"Number"}),Object(x.jsx)(u.a.Control,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:w})]}),Object(x.jsx)(d.a,{variant:"primary",type:"submit",children:r?"Adding":"Add Contact"})]})]})}}}]);
//# sourceMappingURL=ContactForm.9ef5e85c.chunk.js.map