(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(n,e,t){n.exports=t(35)},35:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,p,u,l,s,m,d,b,x,f,g,h,j,y,C,O,E,v,w,k=t(1),q=t(4),z=t(21),Q=t(9),F=t(0),I=t.n(F),T=t(14),A=t.n(T),S=t(2),$=[{name:"Kiwi",price:19.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Watermelon",price:14.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Cherry",price:8.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Avacado",price:6.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Apple",price:5.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Strawberry",price:11.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"},{name:"Orange",price:3.99,quantity:1,inCart:!1,src:"https://images.pexels.com/photos/42059/citrus-diet-food-fresh-42059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}],J=S.b.button(a||(a=Object(k.a)(["\n  user-select: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 15px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: ",";\n  padding: 10px 16px;\n  color: white;\n\n  margin: 5px;\n  &:hover {\n    opacity: 0.9;\n    cursor: pointer;\n  }\n  transition: opacity 0.3s;\n"])),function(n){return n.backgroundColor||"green"}),X=t(6),B=Object(S.b)(J).attrs(function(){return{backgroundColor:"darkGray"}})(r||(r=Object(k.a)(["\n  font-weight: 900;\n  font-size: 18px;\n  padding: 2px 8px;\n"]))),G=function(n){var e=Object.assign({},(Object(X.a)(n),n));return I.a.createElement(B,e,"+")},K=function(n){var e=Object.assign({},(Object(X.a)(n),n));return I.a.createElement(B,e," \u2012")},N=S.b.p(c||(c=Object(k.a)(["\n  margin: 0;\n  padding: 4px 0;\n"]))),P=Object(S.a)(i||(i=Object(k.a)(['\n * {\n   font-family: Times, serif;\n  margin: 0;\n}\n body { \n  background-size: cover;\n  background-attachment: fixed;\n  background-image: url("https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");\n }\n']))),R=function(n){var e=n.items,t=n.increaseCount,a=n.decreaseCount,r=n.addToCart;return I.a.createElement(D,null,e.map(function(n,e){return I.a.createElement(W,{key:n.name},I.a.createElement(L,null,n.name),I.a.createElement(N,null,"$",n.price),!n.inCart&&I.a.createElement("div",null,I.a.createElement(G,{onClick:function(){return t(e)}}),I.a.createElement("span",null,n.quantity),I.a.createElement(K,{onClick:function(){return a(e)}})),I.a.createElement(H,{src:n.src,alt:n.name}),!n.inCart&&I.a.createElement(J,{onClick:function(){return r(e)}},"Add to Cart"),n.inCart&&I.a.createElement(N,null,"Added!"))}))},W=S.b.article(o||(o=Object(k.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  border: 0.5px solid #999999;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  padding: 12px 20px;\n  border-radius: 10px;\n  margin: 8px;\n  background-color: ",";\n"])),"#f2f2f2"),D=S.b.div(p||(p=Object(k.a)(["\n  max-width: 1100px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: flex-start;\n"]))),H=S.b.img(u||(u=Object(k.a)(["\n  padding: 10px;\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n"]))),L=S.b.h4(l||(l=Object(k.a)(["\n  padding: 5px 0;\n  font-size: 18px;\n"]))),M=t(19),U=t(20),V=function(n){var e=n.cartItems,t=n.onOpen;return I.a.createElement(Y,{onClick:t},I.a.createElement(N,null,"Cart"),I.a.createElement(_,null,I.a.createElement(M.a,{size:"2x",icon:U.a}),I.a.createElement(Z,null,e||0)))},Y=S.b.div(s||(s=Object(k.a)(["\n  cursor: pointer;\n  position: fixed;\n  text-align: center;\n  z-index: 25;\n  top: 0;\n  right: 0;\n  padding: 0 10px 10px 10px;\n  background-color: ",";\n  border-radius: 0 0 0 20px;\n"])),"#f2f2f2"),Z=S.b.div(m||(m=Object(k.a)(["\n  text-align: center;\n  font-size: 14px;\n  width: 15px;\n  color: white;\n  position: absolute;\n  top: 4px;\n  right: 7px;\n"]))),_=S.b.div(d||(d=Object(k.a)(["\n  position: relative;\n"]))),nn=Object(S.b)(J)(b||(b=Object(k.a)(["\n  padding: 5px 8px;\n  font-size: 14px;\n  margin: 2px;\n"]))),en=function(n){var e=Object.assign({},(Object(X.a)(n),n));return I.a.createElement(nn,Object.assign({backgroundColor:"darkred"},e),"X")},tn=function(n){return Number.isInteger(n)?n:n.toFixed(2)},an=S.b.span(x||(x=Object(k.a)(["\n  margin: 0 2px;\n"]))),rn=function(){return I.a.createElement(an,null,"|")},cn=function(n){var e=n.cart,t=n.cartCountTotal,a=e.reduce(function(n,e){return n+e.price*e.quantity},0);return I.a.createElement(on,null,"Items: ",t," ",I.a.createElement(rn,null)," Total Price: $",tn(a))},on=S.b.h2(f||(f=Object(k.a)(["\n  padding: 4px 0;\n  font-size: 18px;\n  border-bottom: 1px dashed black;\n"]))),pn=S.b.span(g||(g=Object(k.a)(["\n  font-size: 26px;\n  position: relative;\n  top: 2px;\n"]))),un=function(){return I.a.createElement(pn,null,"\u2192")},ln=function(n){var e=n.increaseQ,t=n.decreaseQ,a=n.removeFromCart;return I.a.createElement("div",null,I.a.createElement(G,{onClick:e}),I.a.createElement(K,{onClick:t}),I.a.createElement(sn,{onClick:a},"Remove"))},sn=Object(S.b)(J)(h||(h=Object(k.a)(["\n  padding: 5px 10px;\n"]))),mn=function(n){var e=n.cart,t=n.increaseQ,a=n.decreaseQ,r=n.removeFromCart,c=n.emptyCart;return I.a.createElement(I.a.Fragment,null,e.map(function(n,e){return I.a.createElement(dn,{key:n.name},I.a.createElement(N,null,n.name," ",I.a.createElement(rn,null)," ",n.quantity," x $",n.price," ",I.a.createElement(un,null)," ","$",tn(n.price*n.quantity)),I.a.createElement(ln,{increaseQ:function(){return t(e)},decreaseQ:function(){return a(e)},removeFromCart:function(){return r(e)}}))}),I.a.createElement(bn,{onClick:c},"Checkout"))},dn=S.b.div(j||(j=Object(k.a)(["\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  padding: 5px 0;\n  width: 95%;\n  border-bottom: 1px solid black;\n"]))),bn=Object(S.b)(J).attrs(function(){return{backgroundColor:"darkblue"}})(y||(y=Object(k.a)(["\n  margin-top: 15px;\n  margin-bottom: 15px;\n"]))),xn=function(n){var e=n.cart,t=n.increaseQ,a=n.decreaseQ,r=n.cartCountTotal,c=n.removeFromCart,i=n.open,o=n.onClose,p=n.emptyCart;return I.a.createElement(fn,{open:i},I.a.createElement(en,{onClick:o}),I.a.createElement(gn,null,!e.length&&I.a.createElement(N,null,"Cart is empty"),!!e.length&&I.a.createElement(I.a.Fragment,null,I.a.createElement(cn,{cart:e,cartCountTotal:r}),I.a.createElement(mn,{cart:e,increaseQ:t,decreaseQ:a,removeFromCart:c,emptyCart:p}))))},fn=S.b.div(C||(C=Object(k.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 134;\n  background-color: ",";\n  width: 320px;\n  transform: translateX(",");\n  transition: transform 0.5s;\n  max-height: 99%;\n  min-height: 75px;\n  overflow-y: auto;\n  border-radius: 0 0 0 20px;\n  box-sizing: border-box;\n"])),"#f2f2f2",function(n){return n.open?"0px":"320px"}),gn=S.b.div(O||(O=Object(k.a)(["\n  padding: 5px 15px;\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n"]))),hn=S.b.div(E||(E=Object(k.a)(["\n  background-color: rgba(128, 128, 128, 0.5);\n  position: fixed;\n  z-index: 2;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  display: ",";\n"])),function(n){return n.open?"block":"none"});function jn(){var n=Object(F.useState)([]),e=Object(Q.a)(n,2),t=e[0],a=e[1],r=Object(F.useState)($),c=Object(Q.a)(r,2),i=c[0],o=c[1],p=Object(F.useState)(!1),u=Object(Q.a)(p,2),l=u[0],s=u[1],m={inCart:function(n){a(function(e){return e.map(function(e,t){return n===t&&e.quantity<10?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity+1}):e})})},inItems:function(n){o(function(e){return e.map(function(e,t){return t===n&&e.quantity<10?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity+1}):e})})}},d={inCart:function(n){a(function(e){return e.map(function(e,t){return n===t&&e.quantity>1?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity-1}):e})})},inItems:function(n){o(function(e){return e.map(function(e,t){return n===t&&e.quantity>1?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity-1}):e})})}},b=t.reduce(function(n,e){return n+e.quantity},0);return I.a.createElement(I.a.Fragment,null,I.a.createElement(P,null),I.a.createElement(xn,{open:l,onClose:function(){return s(!1)},cart:t,increaseQ:m.inCart,decreaseQ:d.inCart,cartCountTotal:b,removeFromCart:function(n){var e,r;for(r=0;r<t.length;){if(r===n){e=t[r].name;break}r++}a(function(n){return n.filter(function(n){return e!==n.name})}),o(function(n){return n.map(function(n){return n.name===e?Object(q.a)(Object(q.a)({},n),{},{inCart:!1,quantity:1}):n})})},emptyCart:function(){a([]),o($)}}),I.a.createElement(V,{onOpen:function(){return s(!0)},cartItems:b}),I.a.createElement(hn,{onClick:function(){return s(!1)},open:l}),I.a.createElement(yn,null,I.a.createElement(Cn,null,"Shopping Cart App"),I.a.createElement(R,{items:i,increaseCount:m.inItems,decreaseCount:d.inItems,addToCart:function(n){o(function(e){return e.map(function(e,r){return n===r?(a([].concat(Object(z.a)(t),[{name:e.name,price:e.price,quantity:e.quantity}])),Object(q.a)(Object(q.a)({},e),{},{inCart:!0})):e})})}})))}var yn=S.b.div(v||(v=Object(k.a)(["\n  padding: 75px 0;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]))),Cn=S.b.h1(w||(w=Object(k.a)(["\n  padding: 0 10px 50px 10px;\n  text-align: center;\n  color: ",";\n"])),"#f2f2f2"),On=document.getElementById("root");A.a.render(I.a.createElement(jn,null),On)}},[[23,1,2]]]);
//# sourceMappingURL=main.ab575bcc.chunk.js.map