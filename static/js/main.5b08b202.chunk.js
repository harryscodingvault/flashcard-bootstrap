(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(26),d=c.n(a),s=c(3),i=(c(38),c(39),c(7)),o=c(1);var l=function(){return Object(o.jsx)("header",{children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{className:"text-container",children:Object(o.jsx)("h1",{children:"FlashCard_Simple"})})})})},u=(c(46),function(){var e=(new Date).getFullYear();return Object(o.jsx)("footer",{children:Object(o.jsxs)("h4",{children:["Copyright \xa9 ",e," Harrys.one"]})})}),j=c(9),b=c(4),x=c(5),h=c.n(x),O=(c(48),c(49),c(28)),p=c(29),k=c(23),f=c(22),m=c(31),v=c(30),g=c(33),y=c(19),w=function(e){try{var t=JSON.parse(localStorage.getItem("decks")),c=t.map((function(e){return e.id})).indexOf(e);if(-1!==c)return{deck:t[c],index:c}}catch(n){throw new Error("Something spicy is going on, no eggs for easter fella!!")}},C=function(e){try{var t=JSON.parse(localStorage.getItem("decks")).find((function(t){return t.cards.find((function(t){return t.id===e}))})),c=w(t.id),n=t.cards.map((function(e){return e.id})).indexOf(e);if(-1!==n)return{card:t.cards[n],index:n,deckId:t.id,deckIndex:c.index}}catch(r){throw new Error("Something spicy is going on, no eggs for easter fella!!")}},N=function(){try{return JSON.parse(localStorage.getItem("decks"))}catch(e){throw new Error("Cannot get decks")}},H=function(e){try{return w(e).deck}catch(t){throw new Error("Cannot get decks")}},S=function(e,t){try{return C(e).card}catch(c){throw new Error("Cannot get card :(")}},_=function(e){var t=e.id,c=e.title,n=e.kind,r=e.size,a=e.purpose,d=e.onClickHandler,i=e.refreshHandler,l=e.changeCardPositionHandler,u=e.nextCardHandler,j=e.type,b=Object(s.useHistory)(),x=Object(s.useParams)().deckId,h={add:Object(o.jsx)(O.a,{}),delete:Object(o.jsx)(p.a,{}),view:Object(o.jsx)(f.b,{}),study:Object(o.jsx)(v.a,{}),flip:Object(o.jsx)(k.a,{}),edit:Object(o.jsx)(m.a,{}),next:Object(o.jsx)(k.b,{}),cancel:Object(o.jsx)(f.a,{})},g={deleteDeckHandler:function(){window.confirm("Are you sure you want to delete this deck?")&&(!function(e){var t=w(e),c=JSON.parse(localStorage.getItem("decks"));c.splice(t.index,1),localStorage.setItem("decks",JSON.stringify(c))}(t),i?i():b.push("/"))},studyDeckHandler:function(){b.push("/decks/".concat(t,"/study"))},flipCardHandler:function(){l()},nextCardHandler:function(){u()},createDeckHandler:function(){b.push("/decks/new")},cancelFormHandler:function(){b.goBack()},viewDeckHandler:function(){b.push("/decks/".concat(t))},editDeckHandler:function(){b.push("/decks/".concat(t,"/edit"))},addCardsHandler:function(){b.push("/decks/".concat(t,"/cards/new"))},deleteCardHandler:function(){window.confirm("Delete this card?\n\nYou will not be able to recover it")&&(!function(e){try{var t=C(e),c=JSON.parse(localStorage.getItem("decks"));c[t.deckIndex].cards.splice(t.index,1),localStorage.setItem("decks",JSON.stringify(c))}catch(n){throw new Error("Could not delete card :(")}}(t),i())},editCardHandler:function(){b.push("/decks/".concat(x,"/cards/").concat(t,"/edit"))}},y={form:Object(o.jsxs)("button",{className:"container ".concat(n," ").concat(r),onClick:g[d],type:j,children:[h[a],c]}),ordinary:Object(o.jsxs)("button",{className:"container ".concat(n," ").concat(r),onClick:g[d],children:[h[a],c]})};return j?y.form:y.ordinary},I=(c(50),function(e){var t=e.id,c=e.text_1,n=e.text_2,r=e.type,a=e.quantity,d=e.currentCard,s=e.refreshHandler,i=e.allowNewCard,l=e.changeCardPositionHandler,u=e.currentPosition,j=e.nextCardHandler,b=e.editDeck,x={deck:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card-text-container",children:[Object(o.jsxs)("div",{className:"card-top-text-group",children:[Object(o.jsxs)("h2",{children:[Object(o.jsx)("span",{children:"Title: "}),(null===c||void 0===c?void 0:c.length)>20?"".concat(null===c||void 0===c?void 0:c.substring(0,20),"..."):c]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Quantity: "}),a," ",a>1||0===a?"cards":"card"]})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Description: "}),(null===n||void 0===n?void 0:n.length)>100?"".concat(null===n||void 0===n?void 0:n.substring(0,100),"..."):n]})]}),Object(o.jsxs)("div",{className:"card-button-container",children:[Object(o.jsxs)("div",{className:"card-button-group-1",children:[b?Object(o.jsx)(_,{id:t,title:"Edit",kind:"warning",size:"small",purpose:"edit",onClickHandler:"editDeckHandler"}):Object(o.jsx)(_,{id:t,title:"View",kind:"warning",size:"small",purpose:"view",onClickHandler:"viewDeckHandler"}),Object(o.jsx)(_,{id:t,title:"Study",kind:"casual",size:"small",purpose:"study",onClickHandler:"studyDeckHandler"})]}),Object(o.jsxs)("div",{className:"card-button-group-2",children:[b&&Object(o.jsx)(_,{id:t,title:"Add Cards",kind:"casual",size:"small",purpose:"add",onClickHandler:"addCardsHandler"}),Object(o.jsx)(_,{id:t,title:"Delete",kind:"danger",size:"small",purpose:"delete",onClickHandler:"deleteDeckHandler",refreshHandler:s})]})]})]}),study:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card-text-container",children:[Object(o.jsxs)("div",{className:"card-top-text-group",children:[Object(o.jsx)("h2",{children:a>1?"Card ".concat(d,"  of ").concat(a):"Only card"}),u?Object(o.jsx)("h3",{children:"Front"}):Object(o.jsx)("h3",{children:"Back"})]}),Object(o.jsx)("p",{children:n})]}),Object(o.jsx)("div",{className:"card-button-container",children:Object(o.jsxs)("div",{className:"card-button-group-1",children:[Object(o.jsx)(_,{title:"Flip",kind:"casual",size:"small",purpose:"flip",onClickHandler:"flipCardHandler",changeCardPositionHandler:l}),i&&Object(o.jsx)(_,{title:"next",kind:"success",size:"small",purpose:"next",onClickHandler:"nextCardHandler",nextCardHandler:j})]})})]}),edit:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"card-text-container",children:Object(o.jsxs)("div",{className:"card-top-text-group",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Front: "}),null===c||void 0===c?void 0:c.substring(0,50),"..."]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"Back: "}),null===n||void 0===n?void 0:n.substring(0,50),"..."]})]})}),Object(o.jsxs)("div",{className:"card-button-container",children:[Object(o.jsx)("div",{className:"card-button-group-1",children:Object(o.jsx)(_,{id:t,title:"Edit",kind:"warning",size:"small",purpose:"edit",onClickHandler:"editCardHandler"})}),Object(o.jsx)("div",{className:"card-button-group-2",children:Object(o.jsx)(_,{id:t,title:"Delete",kind:"danger",size:"small",purpose:"delete",onClickHandler:"deleteCardHandler",refreshHandler:s})})]})]})};return Object(o.jsx)("div",{className:"card-container",children:x[r]})}),F=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),d=Object(b.a)(a,2),s=d[0],i=d[1];Object(n.useEffect)((function(){var e=new AbortController,t=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:t=(t=e.sent)?t.map((function(e){return e})):[],r(t),i(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return t(),function(){return e.abort()}}),[s]);var l=function(){i(!0)},u=c.map((function(e){var t=e.id,c=e.cards,n=e.description,r=e.name;return Object(o.jsx)("div",{className:"deck-unit",children:Object(o.jsx)(I,{id:t,text_1:r,text_2:n,type:"deck",quantity:c.length,refreshHandler:l})},t)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(_,{title:"Create deck",kind:"casual",size:"big",purpose:"add",onClickHandler:"createDeckHandler"}),Object(o.jsx)("div",{className:"decks-group",children:c.length?u:Object(o.jsx)("h1",{children:"Make some decks to start practicing"})})]})},D=(c(51),c(18)),E=c(16),J=(c(52),c(53),function(e){var t=e.message;e.errorType;return Object(o.jsx)("div",{className:"alert-message",children:Object(o.jsx)("h3",{children:t})})}),z=function(e){var t=e.type,c=e.title,r=e.input_1,a=e.input_2,d=e.submitFormHandler,s=Object(n.useState)(!1),i=Object(b.a)(s,2),l=i[0],u=i[1],j={text_1:r||"",text_2:a||""},x=Object(n.useState)(Object(E.a)({},j)),h=Object(b.a)(x,2),O=h[0],p=h[1],k=function(e){var t=e.target;p(Object(E.a)(Object(E.a)({},O),{},Object(D.a)({},t.name,t.value)))},f=function(e){e.preventDefault(),(""===O.text_1||null===O.text_1||void 0===O.text_1)&&"deck"===t||(""===O.text_1||null===O.text_1||void 0===O.text_1||""===O.text_2||null===O.text_2||void 0===O.text_2)&&"card"===t?u(!0):(d(O),p(Object(E.a)({},j)),u(!1))},m={deck:Object(o.jsxs)(o.Fragment,{children:[l&&Object(o.jsx)(J,{message:"Forgot about  deck's title?"}),Object(o.jsxs)("form",{onSubmit:f,children:[Object(o.jsx)("label",{children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"text_1",placeholder:"Deck name",value:O.text_1,onChange:k,maxLength:20}),Object(o.jsx)("label",{children:"Description: "}),Object(o.jsx)("textarea",{name:"text_2",placeholder:"Deck description",rows:"10",value:O.text_2,onChange:k,maxLength:100}),Object(o.jsxs)("div",{className:"form-button-group",children:[Object(o.jsx)(_,{title:"Cancel",size:"small",kind:"danger",purpose:"cancel",onClickHandler:"cancelFormHandler",type:"button"}),Object(o.jsx)(_,{title:"Submit",size:"small",kind:"success",type:"submit",purpose:"add"})]})]})]}),card:Object(o.jsxs)(o.Fragment,{children:[l&&Object(o.jsx)(J,{message:"Forgot filling one side?"}),Object(o.jsxs)("form",{onSubmit:f,children:[Object(o.jsx)("label",{children:"Front:"}),Object(o.jsx)("textarea",{name:"text_1",placeholder:"Back side of card",rows:"5",value:O.text_1,onChange:k}),Object(o.jsx)("label",{children:"Back: "}),Object(o.jsx)("textarea",{name:"text_2",placeholder:"Front side of card",rows:"5",value:O.text_2,onChange:k}),Object(o.jsxs)("div",{className:"form-button-group",children:[Object(o.jsx)(_,{title:"Cancel",size:"small",kind:"danger",purpose:"cancel",type:"button",onClickHandler:"cancelFormHandler"}),Object(o.jsx)(_,{title:"Save",size:"small",kind:"success",type:"submit",purpose:"add"})]})]})]})};return Object(o.jsxs)("div",{className:"custom-form-container",children:[Object(o.jsx)("h2",{children:c}),m[t]]})},P=(c(54),function(e){var t=e.deckId,c=e.deckName,n=(e.cardId,e.urlTo),r=void 0===n?"":n,a={deck:[[c,"Study"],["/decks/".concat(t)]],create_deck:[["Create Deck"],["/decks/new"]],view_deck:[[c],["/decks/".concat(t)]],edit_deck:[[c,"Edit Deck"],["/decks/".concat(t)]],add_card:[[c,"Add Card"],["/decks/".concat(t)]],edit_card:[[c,"Edit Card"],["/decks/".concat(t)]]};return Object(o.jsxs)("section",{className:"breadcrump-container",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("h3",{children:"Home"})}),Object(o.jsx)("h3",{children:" / "}),a[r][0].map((function(e,t){var c=a[r][1][t];return t===a[r][0].length-1?Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:(null===e||void 0===e?void 0:e.length)>10?"".concat(null===e||void 0===e?void 0:e.substring(0,10),"..."):e})},t):Object(o.jsxs)("div",{children:[Object(o.jsx)(i.b,{to:c,children:Object(o.jsx)("h3",{children:(null===e||void 0===e?void 0:e.length)>10?"".concat(null===e||void 0===e?void 0:e.substring(0,10),"..."):e})}),Object(o.jsx)("h3",{children:" / "})]},t)}))]})}),T=function(){var e=Object(s.useParams)().deckId,t=Object(s.useHistory)(),c=Object(n.useState)({}),r=Object(b.a)(c,2),a=r[0],d=r[1];Object(n.useEffect)((function(){var t=function(){var t=Object(j.a)(h.a.mark((function t(){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e);case 3:c=t.sent,console.log("thidDe",c),d(c),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var i={render:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P,{urlTo:"edit_deck",deckName:a.name,deckId:a.id}),Object(o.jsx)(z,{type:"deck",title:"Edit Deck:",input_1:a.name,input_2:a.description,submitFormHandler:function(c){!function(e){try{var t=e.id,c=e.name,n=e.description,r=JSON.parse(localStorage.getItem("decks")),a=w(t),d={id:t,name:c,description:n,cards:a.deck.cards};r[a.index]=d,localStorage.setItem("decks",JSON.stringify(r))}catch(s){throw new Error("Cannot edit deck")}}({id:e,name:c.text_1,description:c.text_2}),t.goBack()}})]}),loading:Object(o.jsx)("h1",{children:"Loading..."})};return a.name?i.render:i.loading},R=(c(55),function(){var e,t,c,r=Object(s.useParams)().deckId,a=Object(n.useState)({}),d=Object(b.a)(a,2),i=d[0],l=d[1],u=Object(n.useState)([]),x=Object(b.a)(u,2),O=x[0],p=x[1],k=Object(n.useState)({}),f=Object(b.a)(k,2),m=f[0],v=f[1],g=Object(n.useState)(!0),y=Object(b.a)(g,2),w=y[0],C=y[1],N=Object(n.useState)(!1),S=Object(b.a)(N,2),F=S[0],D=S[1],E=Object(s.useHistory)();Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(r);case 3:t=e.sent,l(t),p(t.cards),v(t.cards[0]),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var J={render:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P,{urlTo:"deck",deckName:i.name,deckId:i.id}),Object(o.jsxs)("h1",{className:"deck-title",children:[i.name,": Study"]}),Object(o.jsx)(I,{id:r,type:"study",text_2:w?null===m||void 0===m?void 0:m.front:null===m||void 0===m?void 0:m.back,quantity:null===i||void 0===i||null===(e=i.cards)||void 0===e?void 0:e.length,allowNewCard:F,currentCard:O.indexOf(m)+1,changeCardPositionHandler:function(){C(!w),D(!0)},currentPosition:w,nextCardHandler:function(){var e=O.indexOf(m);e===O.length-1&&(window.confirm("Restart cards?")?e=-1:E.push("/")),v(O[e+1])}})]}),loading:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P,{urlTo:"deck",deckName:i.name,deckId:i.id}),Object(o.jsx)("h1",{className:"deck-title",children:"Loading..."})]}),notEnoughCards:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P,{urlTo:"deck",deckName:i.name,deckId:i.id}),Object(o.jsxs)("div",{className:"add-cards-container",children:[Object(o.jsxs)("h1",{className:"deck-title",children:[i.name,": Study"]}),Object(o.jsx)("h2",{children:"Not enough cards."}),Object(o.jsxs)("p",{children:["You need at least 3 cards to study. There are ",null===i||void 0===i||null===(t=i.cards)||void 0===t?void 0:t.length," ","cards in this deck"]}),Object(o.jsx)(_,{title:"Add Cards",kind:"casual",size:"medium",purpose:"add",onClickHandler:"addCardsHandler",id:r})]})]})};return null!==i&&void 0!==i&&null!==(c=i.cards)&&void 0!==c&&c.length?J.render:J.notEnoughCards}),B=(c(56),c(32)),A=function(){var e=Object(B.useHistory)();return Object(o.jsxs)("div",{children:[Object(o.jsx)(P,{urlTo:"create_deck"}),Object(o.jsx)(z,{type:"deck",title:"Create Deck",submitFormHandler:function(t){!function(e){try{var t=e.name,c=e.description,n=JSON.parse(localStorage.getItem("decks"));null!==n?localStorage.setItem("decks",JSON.stringify([].concat(Object(g.a)(n),[{id:Object(y.a)(),name:t,description:c,cards:[]}]))):localStorage.setItem("decks",JSON.stringify([{id:Object(y.a)(),name:t,description:c,cards:[]}]))}catch(r){throw new Error("Cant create deck")}}({name:t.text_1,description:t.text_2}),e.push("/")}})]})},L=(c(57),function(){var e,t,c,r=Object(n.useState)({}),a=Object(b.a)(r,2),d=a[0],i=a[1],l=Object(n.useState)(!1),u=Object(b.a)(l,2),x=u[0],O=u[1],p=Object(s.useParams)().deckId;Object(n.useEffect)((function(){var e=!1,t=function(){var t=Object(j.a)(h.a.mark((function t(){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(p);case 3:if(c=t.sent,!e){t.next=6;break}return t.abrupt("return");case 6:i(c),O(!1),t.next=13;break;case 10:throw t.prev=10,t.t0=t.catch(0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!0}}),[x,p]);var k=function(){O(!0)},f=null===d||void 0===d||null===(e=d.cards)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("div",{className:"card-unit",children:Object(o.jsx)(I,{id:e.id,text_1:e.front,text_2:e.back,type:"edit",refreshHandler:k})},e.id)}));return Object(o.jsxs)("div",{className:"deck-view",children:[Object(o.jsx)(P,{urlTo:"view_deck",deckName:d.name,deckId:d.id}),Object(o.jsx)("h2",{children:"Deck: "}),Object(o.jsx)(I,{id:d.id,text_1:d.name,text_2:d.description,type:"deck",quantity:null===d||void 0===d||null===(t=d.cards)||void 0===t?void 0:t.length,editDeck:!0}),null!==d&&void 0!==d&&null!==(c=d.cards)&&void 0!==c&&c.length?Object(o.jsx)("h2",{children:"Cards: "}):Object(o.jsx)("h2",{children:"Add some cards to the deck"}),Object(o.jsx)("section",{className:"study-cards-section",children:Object(o.jsxs)("div",{className:"map-study-cards",children:[" ",f]})})]})}),q=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(s.useParams)().deckId,d=Object(s.useHistory)();Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(a);case 3:t=e.sent,r(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var i={render:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P,{urlTo:"add_card",deckName:c.name,deckId:c.id}),Object(o.jsx)(z,{type:"card",title:"".concat(c.name,": Add Card"),submitFormHandler:function(e){!function(e,t){try{var c=t.front,n=t.back,r=JSON.parse(localStorage.getItem("decks")),a=w(e),d={id:Object(y.a)(),front:c,back:n};console.log("card info",t),a.deck.cards.push(d),console.log(" currentDeck.deck",a.deck),r[a.index]=a.deck,localStorage.setItem("decks",JSON.stringify(r))}catch(s){throw new Error("Could not create card ;(")}}(c.id,{front:e.text_1,back:e.text_2}),c.id&&d.goBack()}})]}),loading:Object(o.jsx)("h1",{children:"Loading..."})};return c.name?i.render:i.loading},Y=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)({}),d=Object(b.a)(a,2),i=d[0],l=d[1],u=Object(s.useParams)(),x=u.deckId,O=u.cardId,p=Object(s.useHistory)();Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(x);case 3:t=e.sent,r(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(O);case 3:t=e.sent,l(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[O]);var k={render:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P,{urlTo:"edit_card",deckName:c.name,deckId:c.id,cardId:i.id}),Object(o.jsx)(z,{title:"Edit Card:",type:"card",input_1:i.front,input_2:i.back,submitFormHandler:function(e){!function(e){try{var t=e.id,c=e.front,n=e.back,r=JSON.parse(localStorage.getItem("decks")),a=C(t),d=w(a.deckId),s={id:t,front:c,back:n};d.deck.cards[a.index]=s,r[d.index]=d.deck,localStorage.setItem("decks",JSON.stringify(r))}catch(i){throw new Error("Could not edit card :(")}}({id:i.id,front:e.text_1,back:e.text_2}),p.goBack()}})]}),loading:Object(o.jsx)("h1",{children:"Loading..."})};return i.id?k.render:k.loading};c(58);var M=function(){return Object(o.jsx)("div",{className:"NotFound",children:Object(o.jsx)("h1",{children:"Not Found"})})};var Q=function(){return Object(o.jsxs)("div",{className:"total-layout",children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"main-app-container",children:Object(o.jsxs)(s.Switch,{children:[Object(o.jsx)(s.Route,{exact:!0,path:"/",children:Object(o.jsx)(F,{})}),Object(o.jsx)(s.Route,{exact:!0,path:"/decks/:deckId/study",children:Object(o.jsx)(R,{})}),Object(o.jsx)(s.Route,{exact:!0,path:"/decks/new",children:Object(o.jsx)(A,{})}),Object(o.jsx)(s.Route,{exact:!0,path:"/decks/:deckId",children:Object(o.jsx)(L,{})}),Object(o.jsx)(s.Route,{exact:!0,path:"/decks/:deckId/edit",children:Object(o.jsx)(T,{})}),Object(o.jsx)(s.Route,{exact:!0,path:"/decks/:deckId/cards/new",children:Object(o.jsx)(q,{})}),Object(o.jsx)(s.Route,{exact:!0,path:"/decks/:deckId/cards/:cardId/edit",children:Object(o.jsx)(Y,{})}),Object(o.jsx)(s.Route,{path:"*",children:Object(o.jsx)(M,{})})]})}),Object(o.jsx)(u,{})]})};c(59);var V=function(){return Object(o.jsx)("div",{className:"app-routes",children:Object(o.jsx)(s.Switch,{children:Object(o.jsx)(s.Route,{path:"/",children:Object(o.jsx)(Q,{})})})})};d.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(V,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.5b08b202.chunk.js.map