(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10],{540:function(t,e,r){"use strict";var n=r(6);r(62);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$store.getters["game/notCreated"]){t.next=3;break}return t.abrupt("return",e.$nextTick(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$nuxt.$loading.start(),t.prev=1,t.next=4,e.$store.dispatch("game/getGame");case 4:return e.$nuxt.$loading.finish(),t.abrupt("return");case 8:return t.prev=8,t.t0=t.catch(1),console.error(t.t0),e.$nuxt.$loading.finish(),t.abrupt("return",e.$router.push({path:"/game/new"}));case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))));case 3:return t.abrupt("return");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return o.apply(this,arguments)}},547:function(t,e,r){"use strict";r.r(e);r(49),r(27),r(34),r(14),r(93),r(45),r(94);var n=r(56),o=(r(33),r(1));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{players:Array,onlyRemainingCards:Boolean,showPoints:Boolean},data:function(){return{suitValues:o.a.suits()}},methods:{getCards:function(t,e){return o.a.filterCardsBySuit(t,e)},suitColor:function(t){return o.a.suitColor(t)},suitSymbol:function(t){return o.a.suitIcon(t)},valueIcon:function(t){return o.a.cardValueIcon(t)},cardUnicode:function(t){return o.a.cardUnicode(t)},calculatePlayerPoints:function(p){var t=this.onlyRemainingCards?p.cards:p.card_deck;return o.a.calculatePlayerPoints(p.id,t)}},computed:{playersData:function(){var t=this.players,e=this.showPoints,r=this.onlyRemainingCards;return t.map((function(p){return l(l({},p),{},{show:!0,showdata:e,cards:r?p.cards:p.card_deck})}))}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table-auto w-full border-collapse bg-white text-center text-xs md:text-base"},[r("thead",[r("tr",[r("th",{staticClass:"border py-2 px-4"},[t._v("Players")]),t._v(" "),t._l(t.suitValues,(function(e){return r("th",{key:e,staticClass:"border py-2 px-4 font-textcards",class:[t.suitColor(e)]},[t._v(t._s(t.suitSymbol(e)))])})),t._v(" "),t.showPoints?r("th",{staticClass:"border py-2 px-4 capitalize"},[t._v("HCP")]):t._e()],2)]),t._v(" "),r("tbody",t._l(t.playersData,(function(p){return r("tr",{directives:[{name:"show",rawName:"v-show",value:p.cards.length>0,expression:"p.cards.length > 0"}],key:p.id,staticClass:"odd:bg-white even:bg-slate-100"},[r("td",{staticClass:"border py-2 px-4 capitalize font-bold"},[t._v(t._s(p.id))]),t._v(" "),t._l(t.suitValues,(function(e){return r("td",{key:e,staticClass:"border py-2 px-4 font-cards leading-cards text-base md:text-4xl text-center"},t._l(t.getCards(e,p.cards),(function(n){return r("span",{key:n.card_id,class:[t.suitColor(e)]},[t._v(t._s(t.cardUnicode(n.card_id)))])})),0)})),t._v(" "),t.showPoints?r("td",{staticClass:"border py-2 px-4 italic uppercase"},[t._v(t._s(t.calculatePlayerPoints(p)))]):t._e()],2)})),0)])}),[],!1,null,null,null);e.default=component.exports},549:function(t,e,r){"use strict";var n=r(6),o=r(15),c=r(16);r(62),r(14),r(28),r(29),r(550),r(390);e.a=new(function(){function t(){Object(o.a)(this,t)}return Object(c.a)(t,[{key:"downloadFile",value:function(data,t){var e=new Blob([data],{type:"application/json"}),link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=t,link.click()}},{key:"loadFile",value:function(t,e){var r=t.target.files||t.dataTransfer.files;if(r.length){var o=new FileReader;o.onload=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return JSON.parse(r.target.result),t.next=3,e(r.target.result);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o.readAsText(r[0])}}}]),t}())},578:function(t,e,r){"use strict";r.r(e);r(49),r(27),r(34),r(93),r(94);var n=r(6),o=r(56),c=(r(62),r(33),r(63),r(14),r(45),r(81)),l=r(540),d=r(549);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={layout:"play",methods:{downloadCardDeck:function(){var data=JSON.stringify(this.fullCardDeck,null,4);d.a.downloadFile(data,"cards.json")}},computed:y(y({},Object(c.c)({players:"game/players"})),{},{fullCardDeck:function(){var t=this.players.map((function(p){return p.card_deck})),e=[].concat.apply([],t);return e.forEach((function(t){delete t.rank})),e}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}},v=h,m=r(18),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto text-gray-800 text-center"},[r("h1",{staticClass:"text-4xl font-bold mb-6"},[t._v("Cards")]),t._v(" "),r("h1",{staticClass:"text-xl font-bold mb-6"},[t._v("Starting card deck")]),t._v(" "),r("PlayerCards",{staticClass:"is-fullwidth is-bordered",attrs:{players:t.players,onlyRemainingCards:!1,showPoints:!0}}),t._v(" "),r("h1",{staticClass:"text-xl font-bold mt-6 mb-6"},[t._v("Remaining player cards")]),t._v(" "),r("PlayerCards",{staticClass:"is-fullwidth is-bordered",attrs:{players:t.players,onlyRemainingCards:!0,showPoints:!1}}),t._v(" "),r("p",{staticClass:"mt-6"},[r("button",{staticClass:"rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-gray-100 text-gray-700",on:{click:function(e){return e.preventDefault(),t.downloadCardDeck()}}},[t._v("Export Card Deck")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PlayerCards:r(547).default})}}]);