(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,10],{547:function(e,t,r){"use strict";r.r(t);r(49),r(27),r(34),r(14),r(93),r(45),r(94);var n=r(56),o=(r(33),r(1));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{players:Array,onlyRemainingCards:Boolean,showPoints:Boolean},data:function(){return{suitValues:o.a.suits()}},methods:{getCards:function(e,t){return o.a.filterCardsBySuit(e,t)},suitColor:function(e){return o.a.suitColor(e)},suitSymbol:function(e){return o.a.suitIcon(e)},valueIcon:function(e){return o.a.cardValueIcon(e)},cardUnicode:function(e){return o.a.cardUnicode(e)},calculatePlayerPoints:function(p){var e=this.onlyRemainingCards?p.cards:p.card_deck;return o.a.calculatePlayerPoints(p.id,e)}},computed:{playersData:function(){var e=this.players,t=this.showPoints,r=this.onlyRemainingCards;return e.map((function(p){return l(l({},p),{},{show:!0,showdata:t,cards:r?p.cards:p.card_deck})}))}}},m=r(18),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"table-auto w-full border-collapse bg-white text-center text-xs md:text-base"},[r("thead",[r("tr",[r("th",{staticClass:"border py-2 px-4"},[e._v("Players")]),e._v(" "),e._l(e.suitValues,(function(t){return r("th",{key:t,staticClass:"border py-2 px-4 font-textcards",class:[e.suitColor(t)]},[e._v(e._s(e.suitSymbol(t)))])})),e._v(" "),e.showPoints?r("th",{staticClass:"border py-2 px-4 capitalize"},[e._v("HCP")]):e._e()],2)]),e._v(" "),r("tbody",e._l(e.playersData,(function(p){return r("tr",{directives:[{name:"show",rawName:"v-show",value:p.cards.length>0,expression:"p.cards.length > 0"}],key:p.id,staticClass:"odd:bg-white even:bg-slate-100"},[r("td",{staticClass:"border py-2 px-4 capitalize font-bold"},[e._v(e._s(p.id))]),e._v(" "),e._l(e.suitValues,(function(t){return r("td",{key:t,staticClass:"border py-2 px-4 font-cards leading-cards text-base md:text-4xl text-center"},e._l(e.getCards(t,p.cards),(function(n){return r("span",{key:n.card_id,class:[e.suitColor(t)]},[e._v(e._s(e.cardUnicode(n.card_id)))])})),0)})),e._v(" "),e.showPoints?r("td",{staticClass:"border py-2 px-4 italic uppercase"},[e._v(e._s(e.calculatePlayerPoints(p)))]):e._e()],2)})),0)])}),[],!1,null,null,null);t.default=component.exports},548:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{msg:""}},methods:{okClicked:function(){this.msg=""},show:function(e){this.msg=e}},computed:{}},o=r(18),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.msg?r("div",{staticClass:"absolute inset-0 z-30 bg-black/20 flex items-center justify-center"},[r("div",{staticClass:"w-full max-w-md shadow-lg rounded-lg p-4 bg-white leading-8"},[e._m(0),e._v(" "),r("div",{staticClass:"mt-6 text-right"},[r("p",{staticClass:"mb-6 text-base font-bold text-gray-700 text-left"},[e._v(e._s(e.msg))]),e._v(" "),r("button",{staticClass:"rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-amber-300 text-yellow-900",on:{click:e.okClicked}},[r("span",{staticClass:"material-icons align-middle"},[e._v("done_outline")])])])])]):e._e()}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center justify-between pb-4 border-b border-b-gray-200"},[r("h3",{staticClass:"text-2xl text-gray-800 font-bold flex items-center"},[r("span",{staticClass:"material-icons mr-2"},[e._v("error_outline")]),e._v("Alert message\n            ")])])}],!1,null,null,null);t.default=component.exports},549:function(e,t,r){"use strict";var n=r(6),o=r(15),c=r(16);r(62),r(14),r(28),r(29),r(550),r(390);t.a=new(function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"downloadFile",value:function(data,e){var t=new Blob([data],{type:"application/json"}),link=document.createElement("a");link.href=URL.createObjectURL(t),link.download=e,link.click()}},{key:"loadFile",value:function(e,t){var r=e.target.files||e.dataTransfer.files;if(r.length){var o=new FileReader;o.onload=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(r.target.result),e.next=3,t(r.target.result);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.readAsText(r[0])}}}]),e}())},573:function(e,t,r){"use strict";r.r(t);var n=r(11),o=r(6),c=(r(62),r(26),r(79),r(560),r(30),r(14),r(45),r(49),r(50),r(69),r(33),r(34),r(1)),l=(r(37),r(38),r(27),r(39),r(40),r(44)),d=r(15),m=r(16),f=(r(134),r(77),r(63),r(176),r(104),r(543),r(177),r(28),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(29),r(175),r(562),r(564)),h=r(194);r(565),r(566);function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var x=new(function(){function e(){Object(d.a)(this,e)}var t;return Object(m.a)(e,[{key:"removePlayerFromCards",value:function(e,t){return t.forEach((function(t){var i=e.findIndex((function(e){return e.card_id==t.card_id}));e[i].player_id=null})),e}},{key:"addCards",value:function(e,t,r){return t.forEach((function(t){var i=r.findIndex((function(e){return e.card_id==t.card_id}));r[i].player_id=e})),r}},{key:"addRandomSuitCards",value:function(e,t,r,n,o){var c=o.map((function(e){return e.card_id})),l=r.filter((function(e){return e.suit==t&&null==e.player_id&&!c.includes(e.card_id)})),d=Object(h.sampleSize)(l,n);return this.addCards(e,d,r)}},{key:"assignCards",value:function(e,t,r){return r.forEach((function(r){var i=t.findIndex((function(e){return e.card_id==r.card_id}));t[i].player_id=e})),t}},{key:"hcpCombinations",value:function(e,t){return c.a.combinations(e,4).map((function(e){return e.map(Number)})).reduce((function(a,e){var r=t?Array(4-e.length).fill(0):[],n=Object(h.sum)(e);return a[n]||(a[n]=[]),a[n].push(e.concat(r)),a}),{})}},{key:"distributeRemainingCards",value:function(e,t){var r,n=this,o=c.a.shuffleArray(c.a.players()).slice(Object(h.random)(1,4,1)),l=v(c.a.shuffleArray(t).filter((function(e){return null==e.player_id})));try{var d=function(){var c,l=r.value,d=l.suit,m=v(o);try{var f=function(){var p=c.value,r=e[p][d],o=r.max,m=r.exclude;return 13==t.filter((function(e){return e.player_id==p})).length?"break":t.filter((function(e){return e.suit==d&&e.player_id==p})).length==o||m.includes(l.value)?"continue":void(t=n.addCards(p,[l],t))};for(m.s();!(c=m.n()).done;){var h=f();if("break"===h)break}}catch(e){m.e(e)}finally{m.f()}};for(l.s();!(r=l.n()).done;)d()}catch(e){l.e(e)}finally{l.f()}return t}},{key:"executeNorms",value:function(e){var t,r=this,n=c.a.randomCardDeck().map((function(e){return e.player_id=null,e})),o=c.a.suits(),l=c.a.players(),d=v(l);try{for(d.s();!(t=d.n()).done;){var m,p=t.value,f=v(o);try{var h=function(){var s=m.value,t=e[p][s].include,o=n.filter((function(e){return e.suit==s&&t.includes(e.value)}));n=r.assignCards(p,n,o)};for(f.s();!(m=f.n()).done;)h()}catch(e){f.e(e)}finally{f.f()}}}catch(e){d.e(e)}finally{d.f()}var y,x=v(c.a.shuffleArray(l));try{var w=function(){var t,p=y.value,l=v(c.a.shuffleArray(o));try{var d=function(){var s=t.value,o=e[p][s],c=o.min,l=o.exclude;if(0==c)return"continue";var d=c-n.filter((function(e){return e.suit==s&&e.player_id==p})).length;if(d<=0)return"continue";var m=n.filter((function(e){return e.suit==s&&l.includes(e.value)}));n=r.addRandomSuitCards(p,s,n,d,m)};for(l.s();!(t=l.n()).done;)d()}catch(e){l.e(e)}finally{l.f()}};for(x.s();!(y=x.n()).done;)w()}catch(e){x.e(e)}finally{x.f()}for(var _=0;_<52;_++){if(0==(n=this.distributeRemainingCards(e,n)).filter((function(e){return null==e.player_id})).length)return n}return null}},{key:"applyNorms",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,i,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=1e3,i=0;case 2:if(!(i<r)){e.next=11;break}if(null==(n=this.executeNorms(t))){e.next=6;break}return e.abrupt("return",n);case 6:return e.next=8,c.a.delay(0);case 8:i++,e.next=2;break;case 11:throw Error("the rule does not produced consistent hands in a finite time, try again if you think the rule can produce valid results.");case 12:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}()),w=(r(568),r(570)),_=r(572),C=r(552),k=r(571);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(C.a)(e);if(t){var o=Object(C.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(_.a)(this,r)}}var S=function(e){Object(w.a)(r,e);var t=A(r);function r(e){var n;return Object(d.a)(this,r),(n=t.call(this,e)).name="RuleError",n}return Object(m.a)(r)}(Object(k.a)(Error));function j(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var R=new(function(){function e(){Object(d.a)(this,e),this.cardSymbols=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];for(var t=0,r=["-","+","==","="];t<r.length;t++){var n=r[t];f.a.removeBinaryOp(n),f.a.removeUnaryOp(n)}f.a.addUnaryOp("+"),f.a.addUnaryOp("-")}var t;return Object(m.a)(e,[{key:"cardsToRule",value:function(e){var t=this.cardSymbols,r=c.a.suits();return c.a.players().map((function(p){var n=r.map((function(s){var r=e.filter((function(e){return e.player_id==p&&e.suit==s})).sort((function(a,b){return b.value-a.value})).map((function(e){return t[e.value-2]})).join("");return".".concat(s,"(+").concat(r,")")})).join("");return p+n})).join("\n")}},{key:"ruleCards",value:function(e){var t=this.cardSymbols;return t.filter((function(t){return new RegExp(t).test(e)})).map((function(e){return t.indexOf(e)+2})).sort((function(a,b){return b-a})).map(Number)}},{key:"ruleSuit",value:function(e,t,r,o){var c=r.filter((function(e){return"number"==typeof e})),l=Object(n.a)(c,2),d=l[0],m=l[1],f=r.filter((function(e){return"string"==typeof e&&/^\+/.test(e)&&e.replace("+","")}))[0],h=f?this.ruleCards(f):[],v=r.filter((function(e){return"string"==typeof e&&/^-/.test(e)&&e.replace("-","")}))[0],y=v?this.ruleCards(v):[];if(h.some((function(e){return y.includes(e)})))throw Error("".concat(t,".").concat(e," rule does not allow excluded and included overlapping cards."));var x,w,_=h.length,C=y.length,k=13-C;if(d>13||m>13)throw Error("".concat(t,".").concat(e," rule allows only 13 as maximum range value."));if(null!=d&&null!=m&&d>m)throw Error("".concat(t,".").concat(e," rule has an inconsistent range ").concat(d,"-").concat(m,"."));if(C>0&&null!=d&&d>=k)throw Error("".concat(t,".").concat(e," rule, ").concat(v," are more than ").concat(m," cards."));if(_>0){if(null!=m&&_>m)throw Error("".concat(t,".").concat(e," rule, ").concat(f," are more than ").concat(m," cards."));if(null==m&&null!=d&&_>d)throw Error("".concat(t,".").concat(e," rule, ").concat(f," are more than ").concat(d," cards."))}return x=null==d?0:d,w=null==m?null==d?13:d:m,o[t][e]=Object.assign(o[t][e],{min:x,max:w,include:h,exclude:y}),o}},{key:"interpret",value:function(e,t,r){var n,o=j(c.a.suits());try{for(o.s();!(n=o.n()).done;){var s=n.value;t[s]&&(r=this.ruleSuit(s,e,t[s],r))}}catch(e){o.e(e)}finally{o.f()}return r}},{key:"validate",value:function(e){var t,r=c.a.suits(),o=c.a.players(),d=r.map((function(s){return[s,Object(h.sum)(o.map((function(p){return e[p][s].min})))]})),m=j(d);try{for(m.s();!(t=m.n()).done;){var s=t.value,f=Object(n.a)(s,2),v=f[0],y=f[1];if(y>13)throw Error("total defined ".concat(v," cards are ").concat(y," cards, but 13 is the maximum."))}}catch(e){m.e(e)}finally{m.f()}var x,w=j(r);try{var _=function(){var s=x.value,t=o.reduce((function(a,p){return a.push.apply(a,Object(l.a)(e[p][s].include)),a}),[]),r=new Set(t).size;if(t.length!=r)throw Error("more players hold one or more ".concat(s," cards with the same value."))};for(w.s();!(x=w.n()).done;)_()}catch(e){w.e(e)}finally{w.f()}var C,k=j(o);try{var A=function(){var p=C.value,t=Object(h.sum)(r.map((function(s){return e[p][s].min})));if(t>13)throw Error("player ".concat(p," can not have more than 13 cards."))};for(k.s();!(C=k.n()).done;)A()}catch(e){k.e(e)}finally{k.f()}}},{key:"groupRuleByPlayer",value:function(e,t,r){var n=c.a.suits(),o=c.a.players(),d=Object(l.a)(n);if(!0==("CallExpression"==t.type)){var m=t.arguments,f=t.callee.property.name;if(!d.includes(f))throw Error("not valid player property.");if(r[f]=m.map((function(e){return"UnaryExpression"==e.type&&e.operator&&["+","-"].includes(e.operator)?e.operator+String(e.argument.value||e.argument.name):e.value||e.name})),t.callee.object.name){var h=t.callee.object.name;if(!o.includes(h))throw Error("not valid or unspecified player id.");return e[h]=Object.assign(e[h],r),e}return e=this.groupRuleByPlayer(e,t.callee.object,r)}return e}},{key:"traverse",value:function(e){var t=this,r=c.a.suits(),o=c.a.players(),l=o.reduce((function(e,p){return e[p]=[],e}),{});e.forEach((function(e){t.groupRuleByPlayer(l,e,{})}));for(var d=o.reduce((function(a,p){return a[p]=r.reduce((function(e,s){return e[s]={min:0,max:13,include:[],exclude:[]},e}),{}),a}),{}),m=0,f=Object.entries(l);m<f.length;m++){var h=Object(n.a)(f[m],2),v=h[0],y=h[1];d=this.interpret(v,y,d)}return d}},{key:"replacePlaceholders",value:function(e){var t,r=c.a.shuffleArray(c.a.suits()),o=j(["x","y","z","t"].map((function(e,i){return[e,r[i]]})));try{for(o.s();!(t=o.n()).done;){var s=t.value,l=Object(n.a)(s,2),d=l[0],m=l[1];e=e.replaceAll(".".concat(d,"("),".".concat(m,"("))}}catch(e){o.e(e)}finally{o.f()}return e}},{key:"translate",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(t){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.replacePlaceholders(t),n=Object(f.a)(r),o=[],e.prev=3,c=("Compound"===n.type?n.body:[n])||[],l=this.traverse(c),this.validate(l),e.next=9,x.applyNorms(l);case 9:o=e.sent,e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(3),console.log(e.t0.stack),new S("Invalid rule: ".concat(e.t0.message));case 16:return o=o.sort((function(a,b){return a.suit.localeCompare(b.suit)||b.value-a.value})),e.abrupt("return",o);case 18:case"end":return e.stop()}}),e,this,[[3,12]])}))),function(e){return t.apply(this,arguments)})}]),e}()),E=[{name:"N having 4333 with KJ and without Q, S having 52## and E 6331",description:"N having 4333 with KJ and without Q, S having 52## and E 6331",contracts:[],rule:"\n        north.x(4).y(3,5,+KJ,-Q7).z(3).t(3)\n        south.z(2).t(5)\n        east.z(6).t(3).x(3).y(1)"},{name:"NS having trump 7+3 cards",description:"Deck 10 trump cards with distributions of NS 4333-7222 and EW 4441-####",contracts:[{player_id:"south",bid:"5 x"}],rule:"\n        north.x(+754).y(+K643).z(+J65).t(+J74)\n        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)\n        east.x(+2).y(+10852).z(+AKQ2).t(+Q652)"},{name:"NS having trump 7+3 cards and EW with random distrubuted cards",description:"Deck 10 trump cards with NS 4333-7222, instead the opponent team with random cards",contracts:[{player_id:"south",bid:"5 x"}],rule:"\n        north.x(+754).y(+K643).z(+J65).t(+J74)\n        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)"},{name:"3NT Ovest-East, with quite balanced cards",description:"Decks with EW 5431-4333 and NS 5422-5431",contracts:[{player_id:"west",bid:"3 notrump"}],rule:"\n        north.clubs(+9742).diamonds(+J10964).hearts(+Q4).spades(+J4)\n        south.clubs(+A).diamonds(+875).hearts(+KJ107).spades(+Q10972)\n        east.clubs(+J10653).diamonds(+A).hearts(+9652).spades(+863)\n        west.clubs(+KQ8).diamonds(+KQ32).hearts(+A83).spades(+K5)"},{name:"Trump 6 spades with other players quite balanced",description:"Decks with trump 6+3 spades for EW team, with EW 4432-6322 and NS 4333-5431",contracts:[{player_id:"west",bid:"6 spades"}],rule:"\n        north.clubs(+Q72).diamonds(+QJ102).hearts(+1075).spades(+932)\n        south.clubs(+J10643).diamonds(+K95).hearts(+QJ92).spades(+4)\n        east.clubs(+A5).diamonds(+8764).hearts(+863).spades(+Q75)\n        west.clubs(+K98).diamonds(+A3).hearts(+AK).spades(+AKJ1086)"},{name:"3NT for NS team, with NS 6322-4432 and EW 4432-5332",description:"Decks with trump 5+3 spades for EW team, with NS 6322-4432 and EW 4432-5332",contracts:[{player_id:"south",bid:"3 notrump"}],rule:"\n        north.clubs(+754).diamonds(+AQJ943).hearts(+K5).spades(+J10)\n        south.clubs(+AK86).diamonds(+102).hearts(+AQ63).spades(+Q95)\n        east.clubs(+Q932).diamonds(+K6).hearts(+J1098).spades(+K64)\n        west.clubs(+J10).diamonds(+875).hearts(+742).spades(+A8732)"},{name:"3NT for NS team with both decks balanced",description:"3NT for NS team, having 26 points and both decks balanced, NS 4333-4432 and EW 5332-4333",contracts:[{player_id:"south",bid:"3 notrump"}],rule:"\n        north.clubs(+AJ43).diamonds(+K102).hearts(+KJ5).spades(+A108)\n        south.clubs(+962).diamonds(+QJ96).hearts(+AQ107).spades(+J3)\n        east.clubs(+1085).diamonds(+874).hearts(+92).spades(+K9642)\n        west.clubs(+KQ7).diamonds(+A53).hearts(+8643).spades(+Q75)"},{name:"Trump hand where it is easy to make mistakes",description:"A 4 spades West hand where it is easy to make mistakes, with decks NS 5332-5431 and EW 4432-6331",contracts:[{player_id:"west",bid:"4 spades"}],rule:"\n        north.clubs(+J8743).diamonds(+Q4).hearts(+J86).spades(+974)\n        south.clubs(+Q65).diamonds(+K932).hearts(+AQ74).spades(+10)\n        east.clubs(+K9).diamonds(+AJ107).hearts(+K1053).spades(+AJ8)\n        west.clubs(+A102).diamonds(+865).hearts(+2).spades(+KQ6532)"},{name:"Trump 10+1 lowest cards N and the S distribution 5431",description:"Team NS 9###-5431 with 8 points but a longest trump of N 10 + S 1 lowest cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(+1098765432)\n        south.x(+J).y(+A10873).z(+J932).t(+Q54)"},{name:"Trump with 4+3 cards NS",description:"Team NS 5332-4333 with trump 4+3 with opponent random cards",contracts:[{player_id:"north",bid:"1 x"}],rule:"\n        north.x(+KQJ98).y(+1042).z(+AQ).t(+975)\n        south.x(+632).y(+KQ63).z(+K82).t(+432)"},{name:"Trump with random 5+5 cards NS",description:"Team NS 5332-5332 with trump 5+5 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(5).y(3).t(3).z(2)\n        south.x(5).y(3).t(2).z(3)"},{name:"Trump with random 6+4 cards NS",description:"Team NS 6322+4333 with trump 6+4 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(6).y(2).t(2).z(3)\n        south.x(4).y(3).t(3).z(3)"},{name:"Trump with random 6+3 cards NS",description:"Team NS 6322+4333 with trump 6+3 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(6).y(2).t(2).z(3)\n        south.x(3).y(4).t(3).z(3)"},{name:"Trump with random 7+3 cards NS",description:"Team NS 7222+4333 with trump 7+3 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(7).y(2).t(2).z(2)\n        south.x(3).y(4).t(3).z(3)"},{name:"Trump with random 8+2 cards NS",description:"Team NS 8221-4432 with trump 8+2 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(8).y(2).t(2).z(1)\n        south.x(2,3).y(4).t(2,3).z(4)"},{name:"NS random cards with 12+12 points but no A and 10",description:"Team NS will have 24 points distributed as 12+12, without A and 10 and with random cards",contracts:[{player_id:"south",bid:"2 notrump"}],rule:"\n        north.x(+KJ,-A10).y(+QJ,-A10).t(+KQ,-A10).z(-A10)\n        south.x(+Q,-A10).y(+K,-A10).t(+J,-A10).z(+KQJ,-A10)"},{name:"Random cards with 20 points for each team alternating all honors",description:"Random cards with 20 points for each team alternating all combinations of honors",contracts:[{player_id:"south",bid:"1 notrump"}],rule:"\n        north.x(+K).y(+Q).t(+A).z(+K)\n        south.x(+J).y(+A).t(+J10).z(+Q)\n        east.x(+A).y(+J).t(+Q).z(+A)\n        west.x(+Q).y(+K).t(+K).z(+J)"},{name:"NS team having inverted unbalanced decks",description:"Team NS 8320-8320 and having them random 8 cards in the opposite suit",contracts:[],rule:"\n        north.x(8).t(2).z(3)\n        south.y(8).t(3).z(2)"},{name:"EW team having a 2 level fit of diamonds",description:"Team EW 6331-5422 and having them 7 cards (4+3) of diamonds, playable also with 2 spades but diamonds is more correct.",contracts:[{player_id:"west",bid:"2 diamonds"}],rule:"\n        north.clubs(+J10632).diamonds(+1032).hearts(+32).spades(+Q72)\n        south.clubs(+AK).diamonds(+J64).hearts(+QJ10765).spades(+65)\n        east.clubs(+7).diamonds(+AQ8).hearts(+A98).spades(+AKJ1098)\n        west.clubs(+Q9854).diamonds(+K975).hearts(+K4).spades(+43)"},{name:"EW team having a 2 level fit of hearts",description:"Team EW 5431-5422 and having them 8 cards (4+4) of hearts, playable also with 1 spades but hearts is more correct.",contracts:[{player_id:"east",bid:"2 hearts"}],rule:"\n        north.clubs(+J876).diamonds(+Q102).hearts(+AQ10).spades(+1094)\n        south.clubs(+KQ109).diamonds(+A943).hearts(+J6).spades(+J85)\n        east.clubs(+A54).diamonds(+5).hearts(+432).spades(+AKQ76)\n        west.clubs(+32).diamonds(+KJ876).hearts(+K987).spades(+32)"}],J=r(549),N={layout:"play",data:function(){return{showCards:!0,selectedPredefinedRule:0,ruleExamples:E,rule:"",players:c.a.players(),gameCustoms:c.a.getGameCustoms(),selectedScoreRange:{from:1,to:40,team:"",points:0}}},methods:{toggleShowCard:function(){this.showCards=!this.showCards},cleanRule:function(){this.rule=""},cleanRuleStr:function(e){return e.trim().replace(/ /g,"").replace(/\n /g,"\n ")},setPredefinedRule:function(){var e=this.selectedPredefinedRule,t=this.ruleExamples;this.rule=this.cleanRuleStr(t[e].rule)},newRule:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.rule=e.cleanRuleStr(e.rule),e.cleanCustomCardDeck(),r=e.rule,n=e.gameCustoms,e.$nuxt.$loading.start(),t.prev=4,t.next=7,R.translate(r);case 7:n.cards=t.sent,t.next=18;break;case 10:return t.prev=10,t.t0=t.catch(4),e.$nuxt.$loading.finish(),console.error(t.t0),console.log(t.t0),o="RuleError"==t.t0.name?t.t0.message:"Invalid rule.",c.a.showError(o,e.$refs.alertModal),t.abrupt("return");case 18:for(p in e.$nuxt.$loading.finish(),l=c.a.getTopTeamPlayer(n.cards),n.players)n.players[p].show_cards="no";n.players[l].show_cards="yes",n.display_cards_top_team=!1;case 23:case"end":return t.stop()}}),t,null,[[4,10]])})))()},cardsToRule:function(){var e=this.gameCustoms.cards;this.rule=R.cardsToRule(e)},cleanCustomCardDeck:function(){var e=this.gameCustoms;e.cards=[],e.bid=void 0,"predefined"==e.bidding&&(e.bidding="manual")},createRandomCardDeck:function(){this.cleanCustomCardDeck();var e=this.gameCustoms;e.cards=c.a.randomCardDeck();var t=c.a.getTopTeamPlayer(e.cards);for(var p in e.players)e.players[p].show_cards="no";e.players[t].show_cards="yes",e.display_cards_top_team=!1},downloadCardDeck:function(){var data=JSON.stringify(this.gameCustoms.cards,null,4);J.a.downloadFile(data,"cards.json")},loadCustomCardDeck:function(e){var t=this,r=this;J.a.loadFile(e,function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(data){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse(data),e.prev=1,n.forEach((function(e){var t=Object.keys(e);if(!["card_id","suit","value","player_id"].every((function(e){return t.includes(e)})))throw Error("Invalid card file.")})),e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(1),console.log(e.t0),c.a.showError("Invalid card file",r.$refs.alertModal),e.abrupt("return");case 10:return t.cleanCustomCardDeck(),t.gameCustoms.cards=n,e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[1,5]])})));return function(t){return e.apply(this,arguments)}}())},loadCustomCardsTrigger:function(){this.$refs.fileCardsInput.click()},loadSavedGame:function(e){var t=this;J.a.loadFile(e,function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(data){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(r=JSON.parse(data))&&r.version){e.next=4;break}throw Error("Invalid game file.");case 4:return e.next=6,t.$store.dispatch("game/loadGame",r);case 6:e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),c.a.showError(e.t0,t.$refs.alertModal),e.abrupt("return");case 13:return t.$router.push({path:"/game/play"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},loadSavedGameTrigger:function(){this.$refs.fileGameInput.click()},createNewGame:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 0==e.gameCustoms.cards.length&&e.createRandomCardDeck(),t.prev=1,t.next=4,e.$store.dispatch("game/newGame",e.gameCustoms);case 4:t.next=11;break;case 6:return t.prev=6,t.t0=t.catch(1),console.log(t.t0),c.a.showError(t.t0,e.$refs.alertModal),t.abrupt("return");case 11:return e.$router.push({path:"/game/play"}),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[1,6]])})))()},goToHelp:function(e){this.$router.push({path:"/help/"+e})}},computed:{customPlayerCards:function(){var e=this.gameCustoms.cards,t=c.a.getTopTeamByPoints(e),r=Object(n.a)(t,2),o=r[0],l=r[1];return this.selectedScoreRange.team=o,this.selectedScoreRange.points=l,c.a.players().map((function(p){return{id:p,card_deck:e?e.filter((function(e){return e.player_id==p})):[]}}))},existingCustomCards:function(){return this.customPlayerCards.reduce((function(e,p){return e+p.card_deck.length}),0)>0}}},Q=N,z=r(18),component=Object(z.a)(Q,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto text-gray-800"},[r("AlertModal",{ref:"alertModal"}),e._v(" "),r("p",{staticClass:"text-4xl font-bold mb-6 text-center"},[e._v("New Game")]),e._v(" "),r("div",{staticClass:"space-y-2"},[r("p",{staticClass:"text-lg font-bold leading-6"},[e._v("Random hands by custom rules")]),e._v(" "),r("div",{staticClass:"flex"},[r("div",{staticClass:"hidden sm:inline-flex rounded-l bg-slate-100 capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 pr-0"},[e._v("Example Rules:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPredefinedRule,expression:"selectedPredefinedRule"}],staticClass:"inline-flex text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-slate-100 outline-0",attrs:{name:"predefinedRule"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedPredefinedRule=t.target.multiple?r:r[0]}}},e._l(e.ruleExamples,(function(t,n){return r("option",{key:n,domProps:{value:n}},[e._v(e._s(t.name))])})),0),e._v(" "),r("button",{staticClass:"inline-flex rounded-r hover:shadow-md bg-emerald-500 text-white capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3",on:{click:function(t){return e.setPredefinedRule()}}},[e._v("Select Rule")])]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rule,expression:"rule"}],staticClass:"font-mono resize-none w-full shadow md:rounded-md bg-slate-800 text-slate-50 ligatures-none outline-0 p-4 leading-4 text-xs md:leading-6 md:text-sm",attrs:{rows:"4",placeholder:"i.e.: north.spades(4).clubs(3,5,+KJ,-AQ) east.diamonds(2)",spellcheck:"false"},domProps:{value:e.rule},on:{input:function(t){t.target.composing||(e.rule=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"flex space-x-2 justify-end"},[r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-emerald-500 text-white",on:{click:function(t){return e.newRule()}}},[e._v("Apply rule")]),e._v(" "),r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-amber-300 text-gray-700",on:{click:function(t){return e.cleanRule()}}},[e._v("Clean rule")]),e._v(" "),r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700",on:{click:function(t){return e.goToHelp("rules")}}},[r("span",{staticClass:"hidden md:inline-block material-icons-outlined"},[e._v("info")]),e._v(" "),r("span",{staticClass:"text-xs md:hidden material-icons-outlined"},[e._v("info")])])]),e._v(" "),r("div",{staticClass:"flex space-x-2 justify-start mt-2"},[r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold py-1 px-2 md:py-2 md:px-3 bg-gray-100 text-gray-700",on:{click:function(t){return e.toggleShowCard()}}},[r("span",{staticClass:"hidden md:inline-block material-icons-outlined"},[e._v(e._s(e.showCards?"visibility_off":"visibility"))]),e._v(" "),r("span",{staticClass:"text-xs md:hidden material-icons-outlined"},[e._v(e._s(e.showCards?"visibility_off":"visibility"))])]),e._v(" "),r("button",{staticClass:"hidden md:inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700",on:{click:function(t){return e.loadCustomCardsTrigger()}}},[e._v("Load cards from file")]),e._v(" "),r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-amber-300 text-gray-700",on:{click:function(t){return e.cleanCustomCardDeck()}}},[e._v("Clean all cards")]),e._v(" "),r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-sky-600 text-white",on:{click:function(t){return e.createRandomCardDeck()}}},[e._v("Random cards")]),e._v(" "),e.gameCustoms.cards.length>0?r("button",{staticClass:"inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700",on:{click:function(t){return e.cardsToRule()}}},[e._v("Edit as rule")]):e._e(),e._v(" "),e.gameCustoms.cards.length>0?r("button",{staticClass:"hidden md:inline-flex rounded shadow hover:shadow-md capitalize font-bold text-xs py-1 px-2 md:text-base md:py-2 md:px-3 bg-gray-100 text-gray-700",on:{click:function(t){return e.downloadCardDeck()}}},[e._v("Export Card Deck")]):e._e()]),e._v(" "),e.showCards?r("PlayerCards",{staticClass:"mt-3 mb-3",attrs:{players:e.customPlayerCards,onlyRemainingCards:!1,showPoints:!0}}):e._e(),e._v(" "),r("input",{ref:"fileCardsInput",staticClass:"hidden",attrs:{type:"file",name:"customCardFile",accept:"application/json"},on:{change:function(t){return e.loadCustomCardDeck(t)}}}),e._v(" "),r("input",{ref:"fileGameInput",staticClass:"hidden",attrs:{type:"file",name:"gameFile",accept:"application/json"},on:{change:function(t){return e.loadSavedGame(t)}}}),e._v(" "),e.selectedScoreRange.team&&e.showCards?r("div",{staticClass:"text-base text-center italic"},[e._v("\n        The top team is "),r("span",{staticClass:"capitalized"},[e._v(e._s(e.selectedScoreRange.team))]),e._v(" with "+e._s(e.selectedScoreRange.points)+" total HCP.\n    ")]):e._e(),e._v(" "),e.showCards?e._e():r("hr",{staticClass:"hr mt-6"}),e._v(" "),r("div",{staticClass:"flex mt-6 space-x-2 justify-center"},[r("button",{staticClass:"rounded shadow hover:shadow-md bg-emerald-500 text-white font-bold text-lg py-3 px-6 lg:text-xl",on:{click:function(t){return e.createNewGame()}}},[e._v("Play")]),e._v(" "),r("button",{staticClass:"rounded shadow hover:shadow-md bg-gray-100 text-gray-700 font-bold text-lg py-3 px-6 lg:text-xl",on:{click:function(t){return e.loadSavedGameTrigger()}}},[e._v("Load Game")])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AlertModal:r(548).default,PlayerCards:r(547).default})}}]);