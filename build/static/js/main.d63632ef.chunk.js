(this["webpackJsonpburger-queen"]=this["webpackJsonpburger-queen"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/burger_queen.fdbde487.png"},32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a.n(r),i=(a(37),a(12)),u=a(7),o=a(20),m=a.n(o);a(47);m.a.initializeApp({apiKey:"AIzaSyC4BoOnDoPdHro1uH_Ulm4gaJtyvQoyVes",authDomain:"burger-queen-lab03.firebaseapp.com",databaseURL:"https://burger-queen-lab03.firebaseio.com",projectId:"burger-queen-lab03",storageBucket:"burger-queen-lab03.appspot.com",messagingSenderId:"317972441220",appId:"1:317972441220:web:c991caeb12a41e5ee27ad1"});var s=m.a,d=(a(48),function(e){return c.a.createElement("button",{onClick:e.handleClick,className:"button"},e.text," ")}),E=(a(49),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=[];s.firestore().collection("client").orderBy("date").get().then((function(t){t.forEach((function(t){e.push(Object(i.a)({id:t.id},t.data()))})),r(e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"kitchen-order"},a.map((function(e){return e.done?null:c.a.createElement("div",null,c.a.createElement("card",{className:"order-card"},c.a.createElement("div",null,c.a.createElement("p",{className:"order-date"},new Date(e.date).toLocaleString("pt-BR")),c.a.createElement("p",{className:"order-name"},"NOME: ",e.client),c.a.createElement("p",{className:"order-table"},"MESA: ",e.table),c.a.createElement("p",{className:"order-order"},"PEDIDO:"),e.order.map((function(e){return c.a.createElement("div",null,c.a.createElement("p",{className:"order-item"},e.count," -- ",e.name," "))}))),c.a.createElement(d,{handleClick:function(){return t=e.id,s.firestore().collection("client").doc(t).update({done:(new Date).getTime()}),void r(a.filter((function(e){return e.id!=t})));var t},text:"PRONTO"})))}))))}),f=a(9),p=(a(50),a(29)),b=a.n(p);var v=function(){return c.a.createElement("div",{class:"nav"},c.a.createElement("div",{class:"logo"},c.a.createElement("img",{src:b.a,alt:"logo",width:"100px"})),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.b,{to:"/service",className:"link"},"RESTAURANTE")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/kitchen",className:"link"},"COZINHA")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/delivery",className:"link"},"DELIVERY")))))};var h=function(){return c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(E,null))},g=a(14);var N=function(e){return c.a.createElement("div",{onClick:e.handleClick,class:"menu-card",value:e.state,id:e.id,placeholder:e.placeholder},c.a.createElement("p",{className:"name"},e.name),c.a.createElement("p",{className:"price"},e.price.toLocaleString("pt-BR")),c.a.createElement("div",{className:"div-image"},c.a.createElement("img",{src:e.image,className:"image"})))},O=function(e){return c.a.createElement("input",{placeholder:e.placeholder,value:e.state,id:e.id,onChange:e.handleChange,className:"input"})},j=(a(55),a(56),a(57),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],E=o[1],f=Object(n.useState)([]),p=Object(u.a)(f,2),b=p[0],v=p[1],h=Object(n.useState)([]),j=Object(u.a)(h,2),k=j[0],y=j[1],C=Object(n.useState)([]),S=Object(u.a)(C,2),R=S[0],D=S[1],A=Object(n.useState)({status:!1}),I=Object(u.a)(A,2),x=I[0],B=I[1],L=Object(n.useState)(""),w=Object(u.a)(L,2),T=w[0],M=w[1],q=Object(n.useState)(""),U=Object(u.a)(q,2),F=U[0],P=U[1];Object(n.useEffect)((function(){s.firestore().collection("menu").get().then((function(e){var t=e.docs.filter((function(e){return e.data().breakfast})).map((function(e){return Object(i.a)({id:e.id},e.data())}));y(t);var a=e.docs.filter((function(e){return e.data().lunch})).map((function(e){return Object(i.a)({id:e.id},e.data())}));D(a)}))}),[]);var H=function(e){v([].concat(Object(g.a)(b),[e])),b.includes(e)?(e.count+=1,v(Object(g.a)(b))):(e.count=1,v([].concat(Object(g.a)(b),[e]))),M(""),P([]),B({status:!1})},V=b.reduce((function(e,t){return e+t.count*t.price}),0);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"second-menu"},c.a.createElement("p",{className:"breakfast"},"MENU DE CAF\xc9 DA MANH\xc3"),c.a.createElement("section",{className:"menu-breakfast"},c.a.createElement("div",{className:"menu-item"},k.map((function(e){return c.a.createElement(N,{handleClick:function(){return H(e)},key:e.id,name:e.name,price:e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),image:e.image})}))))),c.a.createElement("div",{className:"second-menu"},c.a.createElement("section",{className:"menu-lunch"},c.a.createElement("p",{class:"lunch"},"MENU TRADICIONAL"),c.a.createElement("div",{className:"menu-item"},R.map((function(e){return c.a.createElement(N,{handleClick:function(){return function(e){0!==e.options.length?B({status:!0,item:e}):H(e)}(e)},key:e.id,name:e.name,price:e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),image:e.image})}))))),!!x.status&&c.a.createElement("div",{className:"modal"},c.a.createElement("h3",null,"EXTRAS"),c.a.createElement("div",null,x.item.extras.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"radio",name:"extras",value:e,onChange:function(){return P("".concat(F," ").concat(e))}}),c.a.createElement("label",null,e))}))),c.a.createElement("div",null,c.a.createElement("h3",null,"OP\xc7\xd5ES"),c.a.createElement("div",null,x.item.options.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"radio",name:"options",value:e,onChange:function(){return M("".concat(T," ").concat(e))}}),c.a.createElement("label",null,e))}))),c.a.createElement(d,{handleClick:function(){return H(Object(i.a)({},x.item,{name:x.item.name+" "+T+F}))},text:"ADICIONAR"}))),c.a.createElement("section",{className:"order"},c.a.createElement("div",null,c.a.createElement("p",{className:"order-title"},"PEDIDO"),b.map((function(e,t){return c.a.createElement("div",{key:e.id+t},e.name,e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}),c.a.createElement(d,{id:"button-add",handleClick:function(t){H(e)},text:"+"}),e.count,c.a.createElement(d,{id:"button-add",handleClick:function(){return function(e){if(1===e.count){var t=b.filter((function(t){return t!=e}));v(Object(g.a)(t))}else e.count--,v(Object(g.a)(b))}(e)},text:"-"}),c.a.createElement(d,{id:"button-delete",handleClick:function(t){t.preventDefault(),function(e){var t=b.findIndex((function(t){return t.name==e.name}));b.splice(t,1),v(Object(g.a)(b))}(e)},text:"DELETAR"}))})),c.a.createElement("p",{className:"total"},V.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})),c.a.createElement("div",null,c.a.createElement("strong",{className:"client"},"CLIENTE")),c.a.createElement(O,{id:"input-number",type:"text",state:a,handleChange:function(e){return r(e.currentTarget.value)}}),c.a.createElement("div",null,c.a.createElement("strong",{className:"table"},"MESA")),c.a.createElement(O,{id:"input-number",type:"number",state:m,handleChange:function(e){return E(e.currentTarget.value)}}),c.a.createElement("div",null,c.a.createElement(d,{id:"button-send",handleClick:function(e){e.preventDefault(),s.firestore().collection("client").add({client:a,table:parseInt(m),order:b,date:(new Date).getTime()}).then((function(){E(""),r(""),v([])}))},text:"ENVIAR"})))))});var k=function(){return c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(j,null))},y=(a(58),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=[];s.firestore().collection("client").orderBy("date").get().then((function(t){t.forEach((function(t){e.push(Object(i.a)({id:t.id},t.data()))})),r(e)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"delivery-order"},a.map((function(e){return!e.delivered&&e.done?c.a.createElement("div",null,c.a.createElement("card",{className:"order-card"},c.a.createElement("div",null,c.a.createElement("p",{className:"order-date"},new Date(e.date).toLocaleString("pt-BR")),c.a.createElement("p",{className:"order-name"},"NOME: ",e.client),c.a.createElement("p",{className:"order-table"},"MESA: ",e.table),c.a.createElement("p",{className:"order-order"},"PEDIDO:"),e.order.map((function(e){return c.a.createElement("div",null,c.a.createElement("p",{className:"order-item"},e.count," -- ",e.name," "))}))),c.a.createElement(d,{handleClick:function(){return t=e.id,s.firestore().collection("client").doc(t).update({delivered:(new Date).getTime()}),void r(a.filter((function(e){return e.id!=t})));var t},text:"ENTREGUE"}))):null}))))});var C=function(){return c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(y,null))};a(59);var S=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"links"},c.a.createElement(f.b,{to:"/service",className:"link-home"},"RESTAURANTE"),c.a.createElement(f.b,{to:"/kitchen",className:"link-home"},"COZINHA"),c.a.createElement(f.b,{to:"/delivery",className:"link-home"},"DELIVERY")))},R=a(11);var D=function(){return c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement(R.c,null,c.a.createElement(R.a,{exact:!0,path:"/",component:S}),c.a.createElement(R.a,{exact:!0,path:"/service",component:k}),c.a.createElement(R.a,{exact:!0,path:"/kitchen",component:h}),c.a.createElement(R.a,{exact:!0,path:"/delivery",component:C}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.d63632ef.chunk.js.map