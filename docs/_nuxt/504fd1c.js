(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,10],{546:function(t,e,r){"use strict";r.r(e);r(49),r(27),r(34),r(14),r(93),r(45),r(94);var n=r(57),o=(r(33),r(1));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{players:Array,onlyRemainingCards:Boolean,showPoints:Boolean},data:function(){return{suitValues:o.a.suits()}},methods:{getCards:function(t,e){return o.a.filterCardsBySuit(t,e)},suitColor:function(t){var e=o.a.suitColor(t);return"card-".concat(e)},suitSymbol:function(t){return o.a.suitIcon(t)},valueIcon:function(t){return o.a.cardValueIcon(t)},cardUnicode:function(t){return o.a.cardUnicode(t)},calculatePlayerPoints:function(p){var t=this.onlyRemainingCards?p.cards:p.card_deck;return o.a.calculatePlayerPoints(p.id,t)}},computed:{playersData:function(){var t=this.players,e=this.showPoints,r=this.onlyRemainingCards;return t.map((function(p){return l(l({},p),{},{show:!0,showdata:e,cards:r?p.cards:p.card_deck})}))}}},h=r(23),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"table is-striped has-text-centered"},[r("thead",[r("tr",[r("th",[t._v("Players")]),t._v(" "),t._l(t.suitValues,(function(e){return r("th",{key:e,staticClass:"card-suit",class:[t.suitColor(e)]},[t._v(t._s(t.suitSymbol(e)))])})),t._v(" "),t.showPoints?r("th",{staticClass:"is-capitalized"},[t._v("HCP")]):t._e()],2)]),t._v(" "),r("tbody",t._l(t.playersData,(function(p){return r("tr",{directives:[{name:"show",rawName:"v-show",value:p.cards.length>0,expression:"p.cards.length > 0"}],key:p.id},[r("td",{staticClass:"is-size-6 has-text-weight-bold is-capitalized is-vcentered p-0"},[t._v(t._s(p.id))]),t._v(" "),t._l(t.suitValues,(function(e){return r("td",{key:e,staticClass:"p-1 is-vcentered card-shape"},t._l(t.getCards(e,p.cards),(function(n){return r("span",{key:n.card_id,staticClass:"is-size-3",class:[t.suitColor(e)]},[t._v(t._s(t.cardUnicode(n.card_id)))])})),0)})),t._v(" "),t.showPoints?r("td",{staticClass:"p-0 is-size-6 is-italic is-uppercase is-vcentered"},[t._v(t._s(t.calculatePlayerPoints(p)))]):t._e()],2)})),0)])}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{msg:""}},methods:{okClicked:function(){this.msg=""},show:function(t){this.msg=t}},computed:{}},o=r(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal",class:[t.msg?"is-active":""]},[r("div",{staticClass:"modal-background"}),t._v(" "),r("div",{staticClass:"modal-content"},[r("article",{staticClass:"message message is-warning"},[t._m(0),t._v(" "),r("div",{staticClass:"message-body is-size-5"},[r("div",{staticClass:"has-text-dark"},[t._v(t._s(t.msg))]),t._v(" "),r("div",{staticClass:"has-text-right"},[r("button",{staticClass:"button is-large light-shadow is-warning",on:{click:t.okClicked}},[r("span",{staticClass:"material-icons"},[t._v("done_outline")])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"message-header"},[r("p",{staticClass:"is-align-items-center is-flex"},[r("span",{staticClass:"material-icons mr-3"},[t._v("error_outline")]),t._v(" "),r("span",[t._v("Alert message")])])])}],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";var n=r(6),o=r(15),c=r(16);r(62),r(14),r(28),r(30),r(549),r(391);e.a=new(function(){function t(){Object(o.a)(this,t)}return Object(c.a)(t,[{key:"downloadFile",value:function(data,t){var e=new Blob([data],{type:"application/json"}),link=document.createElement("a");link.href=URL.createObjectURL(e),link.download=t,link.click()}},{key:"loadFile",value:function(t,e){var r=t.target.files||t.dataTransfer.files;if(r.length){var o=new FileReader;o.onload=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return JSON.parse(r.target.result),t.next=3,e(r.target.result);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o.readAsText(r[0])}}}]),t}())},572:function(t,e,r){"use strict";r.r(e);var n=r(11),o=r(6),c=(r(62),r(26),r(79),r(558),r(31),r(14),r(45),r(49),r(50),r(69),r(33),r(34),r(1)),l=(r(38),r(39),r(27),r(40),r(41),r(44)),d=r(15),h=r(16),f=(r(135),r(78),r(64),r(176),r(104),r(538),r(177),r(28),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(30),r(175),r(560),r(562)),m=r(194);r(563),r(564);function v(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var w=new(function(){function t(){Object(d.a)(this,t)}var e;return Object(h.a)(t,[{key:"removePlayerFromCards",value:function(t,e){return e.forEach((function(e){var i=t.findIndex((function(t){return t.card_id==e.card_id}));t[i].player_id=null})),t}},{key:"addCards",value:function(t,e,r){return e.forEach((function(e){var i=r.findIndex((function(t){return t.card_id==e.card_id}));r[i].player_id=t})),r}},{key:"addRandomSuitCards",value:function(t,e,r,n,o){var c=o.map((function(t){return t.card_id})),l=r.filter((function(t){return t.suit==e&&null==t.player_id&&!c.includes(t.card_id)})),d=Object(m.sampleSize)(l,n);return this.addCards(t,d,r)}},{key:"assignCards",value:function(t,e,r){return r.forEach((function(r){var i=e.findIndex((function(t){return t.card_id==r.card_id}));e[i].player_id=t})),e}},{key:"hcpCombinations",value:function(t,e){return c.a.combinations(t,4).map((function(t){return t.map(Number)})).reduce((function(a,t){var r=e?Array(4-t.length).fill(0):[],n=Object(m.sum)(t);return a[n]||(a[n]=[]),a[n].push(t.concat(r)),a}),{})}},{key:"distributeRemainingCards",value:function(t,e){var r,n=this,o=c.a.shuffleArray(c.a.players()).slice(Object(m.random)(1,4,1)),l=v(c.a.shuffleArray(e).filter((function(t){return null==t.player_id})));try{var d=function(){var c,l=r.value,d=l.suit,h=v(o);try{var f=function(){var p=c.value,r=t[p][d],o=r.max,h=r.exclude;return 13==e.filter((function(t){return t.player_id==p})).length?"break":e.filter((function(t){return t.suit==d&&t.player_id==p})).length==o||h.includes(l.value)?"continue":void(e=n.addCards(p,[l],e))};for(h.s();!(c=h.n()).done;){var m=f();if("break"===m)break}}catch(t){h.e(t)}finally{h.f()}};for(l.s();!(r=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}return e}},{key:"executeNorms",value:function(t){var e,r=this,n=c.a.randomCardDeck().map((function(t){return t.player_id=null,t})),o=c.a.suits(),l=c.a.players(),d=v(l);try{for(d.s();!(e=d.n()).done;){var h,p=e.value,f=v(o);try{var m=function(){var s=h.value,e=t[p][s].include,o=n.filter((function(t){return t.suit==s&&e.includes(t.value)}));n=r.assignCards(p,n,o)};for(f.s();!(h=f.n()).done;)m()}catch(t){f.e(t)}finally{f.f()}}}catch(t){d.e(t)}finally{d.f()}var y,w=v(c.a.shuffleArray(l));try{var _=function(){var e,p=y.value,l=v(c.a.shuffleArray(o));try{var d=function(){var s=e.value,o=t[p][s],c=o.min,l=o.exclude;if(0==c)return"continue";var d=c-n.filter((function(t){return t.suit==s&&t.player_id==p})).length;if(d<=0)return"continue";var h=n.filter((function(t){return t.suit==s&&l.includes(t.value)}));n=r.addRandomSuitCards(p,s,n,d,h)};for(l.s();!(e=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}};for(w.s();!(y=w.n()).done;)_()}catch(t){w.e(t)}finally{w.f()}for(var C=0;C<52;C++){if(0==(n=this.distributeRemainingCards(t,n)).filter((function(t){return null==t.player_id})).length)return n}return null}},{key:"applyNorms",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,i,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=1e3,i=0;case 2:if(!(i<r)){t.next=11;break}if(null==(n=this.executeNorms(e))){t.next=6;break}return t.abrupt("return",n);case 6:return t.next=8,c.a.delay(0);case 8:i++,t.next=2;break;case 11:throw Error("the rule does not produced consistent hands in a finite time, try again if you think the rule can produce valid results.");case 12:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}()),_=(r(566),r(568)),C=r(571),x=r(551),k=r(570);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(x.a)(t);if(e){var o=Object(x.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(C.a)(this,r)}}var A=function(t){Object(_.a)(r,t);var e=S(r);function r(t){var n;return Object(d.a)(this,r),(n=e.call(this,t)).name="RuleError",n}return Object(h.a)(r)}(Object(k.a)(Error));function O(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var j=new(function(){function t(){Object(d.a)(this,t),this.cardSymbols=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];for(var e=0,r=["-","+","==","="];e<r.length;e++){var n=r[e];f.a.removeBinaryOp(n),f.a.removeUnaryOp(n)}f.a.addUnaryOp("+"),f.a.addUnaryOp("-")}var e;return Object(h.a)(t,[{key:"cardsToRule",value:function(t){var e=this.cardSymbols,r=c.a.suits();return c.a.players().map((function(p){var n=r.map((function(s){var r=t.filter((function(t){return t.player_id==p&&t.suit==s})).sort((function(a,b){return b.value-a.value})).map((function(t){return e[t.value-2]})).join("");return".".concat(s,"(+").concat(r,")")})).join("");return p+n})).join("\n")}},{key:"ruleCards",value:function(t){var e=this.cardSymbols;return e.filter((function(e){return new RegExp(e).test(t)})).map((function(t){return e.indexOf(t)+2})).sort((function(a,b){return b-a})).map(Number)}},{key:"ruleSuit",value:function(t,e,r,o){var c=r.filter((function(t){return"number"==typeof t})),l=Object(n.a)(c,2),d=l[0],h=l[1],f=r.filter((function(t){return"string"==typeof t&&/^\+/.test(t)&&t.replace("+","")}))[0],m=f?this.ruleCards(f):[],v=r.filter((function(t){return"string"==typeof t&&/^-/.test(t)&&t.replace("-","")}))[0],y=v?this.ruleCards(v):[];if(m.some((function(t){return y.includes(t)})))throw Error("".concat(e,".").concat(t," rule does not allow excluded and included overlapping cards."));var w,_,C=m.length,x=y.length,k=13-x;if(d>13||h>13)throw Error("".concat(e,".").concat(t," rule allows only 13 as maximum range value."));if(null!=d&&null!=h&&d>h)throw Error("".concat(e,".").concat(t," rule has an inconsistent range ").concat(d,"-").concat(h,"."));if(x>0&&null!=d&&d>=k)throw Error("".concat(e,".").concat(t," rule, ").concat(v," are more than ").concat(h," cards."));if(C>0){if(null!=h&&C>h)throw Error("".concat(e,".").concat(t," rule, ").concat(f," are more than ").concat(h," cards."));if(null==h&&null!=d&&C>d)throw Error("".concat(e,".").concat(t," rule, ").concat(f," are more than ").concat(d," cards."))}return w=null==d?0:d,_=null==h?null==d?13:d:h,o[e][t]=Object.assign(o[e][t],{min:w,max:_,include:m,exclude:y}),o}},{key:"interpret",value:function(t,e,r){var n,o=O(c.a.suits());try{for(o.s();!(n=o.n()).done;){var s=n.value;e[s]&&(r=this.ruleSuit(s,t,e[s],r))}}catch(t){o.e(t)}finally{o.f()}return r}},{key:"validate",value:function(t){var e,r=c.a.suits(),o=c.a.players(),d=r.map((function(s){return[s,Object(m.sum)(o.map((function(p){return t[p][s].min})))]})),h=O(d);try{for(h.s();!(e=h.n()).done;){var s=e.value,f=Object(n.a)(s,2),v=f[0],y=f[1];if(y>13)throw Error("total defined ".concat(v," cards are ").concat(y," cards, but 13 is the maximum."))}}catch(t){h.e(t)}finally{h.f()}var w,_=O(r);try{var C=function(){var s=w.value,e=o.reduce((function(a,p){return a.push.apply(a,Object(l.a)(t[p][s].include)),a}),[]),r=new Set(e).size;if(e.length!=r)throw Error("more players hold one or more ".concat(s," cards with the same value."))};for(_.s();!(w=_.n()).done;)C()}catch(t){_.e(t)}finally{_.f()}var x,k=O(o);try{var S=function(){var p=x.value,e=Object(m.sum)(r.map((function(s){return t[p][s].min})));if(e>13)throw Error("player ".concat(p," can not have more than 13 cards."))};for(k.s();!(x=k.n()).done;)S()}catch(t){k.e(t)}finally{k.f()}}},{key:"groupRuleByPlayer",value:function(t,e,r){var n=c.a.suits(),o=c.a.players(),d=Object(l.a)(n);if(!0==("CallExpression"==e.type)){var h=e.arguments,f=e.callee.property.name;if(!d.includes(f))throw Error("not valid player property.");if(r[f]=h.map((function(t){return"UnaryExpression"==t.type&&t.operator&&["+","-"].includes(t.operator)?t.operator+String(t.argument.value||t.argument.name):t.value||t.name})),e.callee.object.name){var m=e.callee.object.name;if(!o.includes(m))throw Error("not valid or unspecified player id.");return t[m]=Object.assign(t[m],r),t}return t=this.groupRuleByPlayer(t,e.callee.object,r)}return t}},{key:"traverse",value:function(t){var e=this,r=c.a.suits(),o=c.a.players(),l=o.reduce((function(t,p){return t[p]=[],t}),{});t.forEach((function(t){e.groupRuleByPlayer(l,t,{})}));for(var d=o.reduce((function(a,p){return a[p]=r.reduce((function(t,s){return t[s]={min:0,max:13,include:[],exclude:[]},t}),{}),a}),{}),h=0,f=Object.entries(l);h<f.length;h++){var m=Object(n.a)(f[h],2),v=m[0],y=m[1];d=this.interpret(v,y,d)}return d}},{key:"replacePlaceholders",value:function(t){var e,r=c.a.shuffleArray(c.a.suits()),o=O(["x","y","z","t"].map((function(t,i){return[t,r[i]]})));try{for(o.s();!(e=o.n()).done;){var s=e.value,l=Object(n.a)(s,2),d=l[0],h=l[1];t=t.replaceAll(".".concat(d,"("),".".concat(h,"("))}}catch(t){o.e(t)}finally{o.f()}return t}},{key:"translate",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.replacePlaceholders(e),n=Object(f.a)(r),o=[],t.prev=3,c=("Compound"===n.type?n.body:[n])||[],l=this.traverse(c),this.validate(l),t.next=9,w.applyNorms(l);case 9:o=t.sent,t.next=16;break;case 12:throw t.prev=12,t.t0=t.catch(3),console.log(t.t0.stack),new A("Invalid rule: ".concat(t.t0.message));case 16:return o=o.sort((function(a,b){return a.suit.localeCompare(b.suit)||b.value-a.value})),t.abrupt("return",o);case 18:case"end":return t.stop()}}),t,this,[[3,12]])}))),function(t){return e.apply(this,arguments)})}]),t}()),E=[{name:"N having 4333 with KJ and without Q, S having 52## and E 6331",description:"N having 4333 with KJ and without Q, S having 52## and E 6331",contracts:[],rule:"\n        north.x(4).y(3,5,+KJ,-Q7).z(3).t(3)\n        south.z(2).t(5)\n        east.z(6).t(3).x(3).y(1)"},{name:"NS having trump 7+3 cards",description:"Deck 10 trump cards with distributions of NS 4333-7222 and EW 4441-####",contracts:[{player_id:"south",bid:"5 x"}],rule:"\n        north.x(+754).y(+K643).z(+J65).t(+J74)\n        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)\n        east.x(+2).y(+10852).z(+AKQ2).t(+Q652)"},{name:"NS having trump 7+3 cards and EW with random distrubuted cards",description:"Deck 10 trump cards with NS 4333-7222, instead the opponent team with random cards",contracts:[{player_id:"south",bid:"5 x"}],rule:"\n        north.x(+754).y(+K643).z(+J65).t(+J74)\n        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)"},{name:"3NT Ovest-East, with quite balanced cards",description:"Decks with EW 5431-4333 and NS 5422-5431",contracts:[{player_id:"west",bid:"3 notrump"}],rule:"\n        north.clubs(+9742).diamonds(+J10964).hearts(+Q4).spades(+J4)\n        south.clubs(+A).diamonds(+875).hearts(+KJ107).spades(+Q10972)\n        east.clubs(+J10653).diamonds(+A).hearts(+9652).spades(+863)\n        west.clubs(+KQ8).diamonds(+KQ32).hearts(+A83).spades(+K5)"},{name:"Trump 6 spades with other players quite balanced",description:"Decks with trump 6+3 spades for EW team, with EW 4432-6322 and NS 4333-5431",contracts:[{player_id:"west",bid:"6 spades"}],rule:"\n        north.clubs(+Q72).diamonds(+QJ102).hearts(+1075).spades(+932)\n        south.clubs(+J10643).diamonds(+K95).hearts(+QJ92).spades(+4)\n        east.clubs(+A5).diamonds(+8764).hearts(+863).spades(+Q75)\n        west.clubs(+K98).diamonds(+A3).hearts(+AK).spades(+AKJ1086)"},{name:"3NT for NS team, with NS 6322-4432 and EW 4432-5332",description:"Decks with trump 5+3 spades for EW team, with NS 6322-4432 and EW 4432-5332",contracts:[{player_id:"south",bid:"3 notrump"}],rule:"\n        north.clubs(+754).diamonds(+AQJ943).hearts(+K5).spades(+J10)\n        south.clubs(+AK86).diamonds(+102).hearts(+AQ63).spades(+Q95)\n        east.clubs(+Q932).diamonds(+K6).hearts(+J1098).spades(+K64)\n        west.clubs(+J10).diamonds(+875).hearts(+742).spades(+A8732)"},{name:"3NT for NS team with both decks balanced",description:"3NT for NS team, having 26 points and both decks balanced, NS 4333-4432 and EW 5332-4333",contracts:[{player_id:"south",bid:"3 notrump"}],rule:"\n        north.clubs(+AJ43).diamonds(+K102).hearts(+KJ5).spades(+A108)\n        south.clubs(+962).diamonds(+QJ96).hearts(+AQ107).spades(+J3)\n        east.clubs(+1085).diamonds(+874).hearts(+92).spades(+K9642)\n        west.clubs(+KQ7).diamonds(+A53).hearts(+8643).spades(+Q75)"},{name:"Trump hand where it is easy to make mistakes",description:"A 4 spades West hand where it is easy to make mistakes, with decks NS 5332-5431 and EW 4432-6331",contracts:[{player_id:"west",bid:"4 spades"}],rule:"\n        north.clubs(+J8743).diamonds(+Q4).hearts(+J86).spades(+974)\n        south.clubs(+Q65).diamonds(+K932).hearts(+AQ74).spades(+10)\n        east.clubs(+K9).diamonds(+AJ107).hearts(+K1053).spades(+AJ8)\n        west.clubs(+A102).diamonds(+865).hearts(+2).spades(+KQ6532)"},{name:"Trump 10+1 lowest cards N and the S distribution 5431",description:"Team NS 9###-5431 with 8 points but a longest trump of N 10 + S 1 lowest cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(+1098765432)\n        south.x(+J).y(+A10873).z(+J932).t(+Q54)"},{name:"Trump with 4+3 cards NS",description:"Team NS 5332-4333 with trump 4+3 with opponent random cards",contracts:[{player_id:"north",bid:"1 x"}],rule:"\n        north.x(+KQJ98).y(+1042).z(+AQ).t(+975)\n        south.x(+632).y(+KQ63).z(+K82).t(+432)"},{name:"Trump with random 5+5 cards NS",description:"Team NS 5332-5332 with trump 5+5 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(5).y(3).t(3).z(2)\n        south.x(5).y(3).t(2).z(3)"},{name:"Trump with random 6+4 cards NS",description:"Team NS 6322+4333 with trump 6+4 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(6).y(2).t(2).z(3)\n        south.x(4).y(3).t(3).z(3)"},{name:"Trump with random 6+3 cards NS",description:"Team NS 6322+4333 with trump 6+3 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(6).y(2).t(2).z(3)\n        south.x(3).y(4).t(3).z(3)"},{name:"Trump with random 7+3 cards NS",description:"Team NS 7222+4333 with trump 7+3 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(7).y(2).t(2).z(2)\n        south.x(3).y(4).t(3).z(3)"},{name:"Trump with random 8+2 cards NS",description:"Team NS 8221-4432 with trump 8+2 with random cards",contracts:[{player_id:"north",bid:"4 x"}],rule:"\n        north.x(8).y(2).t(2).z(1)\n        south.x(2,3).y(4).t(2,3).z(4)"},{name:"NS random cards with 12+12 points but no A and 10",description:"Team NS will have 24 points distributed as 12+12, without A and 10 and with random cards",contracts:[{player_id:"south",bid:"2 notrump"}],rule:"\n        north.x(+KJ,-A10).y(+QJ,-A10).t(+KQ,-A10).z(-A10)\n        south.x(+Q,-A10).y(+K,-A10).t(+J,-A10).z(+KQJ,-A10)"},{name:"Random cards with 20 points for each team alternating all honors",description:"Random cards with 20 points for each team alternating all combinations of honors",contracts:[{player_id:"south",bid:"1 notrump"}],rule:"\n        north.x(+K).y(+Q).t(+A).z(+K)\n        south.x(+J).y(+A).t(+J10).z(+Q)\n        east.x(+A).y(+J).t(+Q).z(+A)\n        west.x(+Q).y(+K).t(+K).z(+J)"},{name:"NS team having inverted unbalanced decks",description:"Team NS 8320-8320 and having them random 8 cards in the opposite suit",contracts:[],rule:"\n        north.x(8).t(2).z(3)\n        south.y(8).t(3).z(2)"},{name:"EW team having a 2 level fit of diamonds",description:"Team EW 6331-5422 and having them 7 cards (4+3) of diamonds, playable also with 2 spades but diamonds is more correct.",contracts:[{player_id:"west",bid:"2 diamonds"}],rule:"\n        north.clubs(+J10632).diamonds(+1032).hearts(+32).spades(+Q72)\n        south.clubs(+AK).diamonds(+J64).hearts(+QJ10765).spades(+65)\n        east.clubs(+7).diamonds(+AQ8).hearts(+A98).spades(+AKJ1098)\n        west.clubs(+Q9854).diamonds(+K975).hearts(+K4).spades(+43)"},{name:"EW team having a 2 level fit of hearts",description:"Team EW 5431-5422 and having them 8 cards (4+4) of hearts, playable also with 1 spades but hearts is more correct.",contracts:[{player_id:"east",bid:"2 hearts"}],rule:"\n        north.clubs(+J876).diamonds(+Q102).hearts(+AQ10).spades(+1094)\n        south.clubs(+KQ109).diamonds(+A943).hearts(+J6).spades(+J85)\n        east.clubs(+A54).diamonds(+5).hearts(+432).spades(+AKQ76)\n        west.clubs(+32).diamonds(+KJ876).hearts(+K987).spades(+32)"}],J=r(548),N={layout:"play",data:function(){return{showCards:!0,selectedPredefinedRule:0,ruleExamples:E,rule:"",players:c.a.players(),gameCustoms:c.a.getGameCustoms(),selectedScoreRange:{from:1,to:40,team:"",points:0}}},methods:{toggleShowCard:function(){this.showCards=!this.showCards},suitColor:function(t){var e=c.a.suitColor(t);return"card-".concat(e)},suitSymbol:function(t){return c.a.suitIcon(t)},valueIcon:function(t){return c.a.cardValueIcon(t)},cleanRule:function(){this.rule=""},cleanRuleStr:function(t){return t.trim().replace(/ /g,"").replace(/\n /g,"\n ")},setPredefinedRule:function(){var t=this.selectedPredefinedRule,e=this.ruleExamples;this.rule=this.cleanRuleStr(e[t].rule)},newRule:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rule=t.cleanRuleStr(t.rule),t.cleanCustomCardDeck(),r=t.rule,n=t.gameCustoms,t.$nuxt.$loading.start(),e.prev=4,e.next=7,j.translate(r);case 7:n.cards=e.sent,e.next=18;break;case 10:return e.prev=10,e.t0=e.catch(4),t.$nuxt.$loading.finish(),console.error(e.t0),console.log(e.t0),o="RuleError"==e.t0.name?e.t0.message:"Invalid rule.",c.a.showError(o,t.$refs.alertModal),e.abrupt("return");case 18:for(p in t.$nuxt.$loading.finish(),l=c.a.getTopTeamPlayer(n.cards),n.players)n.players[p].show_cards="no";n.players[l].show_cards="yes",n.display_cards_top_team=!1;case 23:case"end":return e.stop()}}),e,null,[[4,10]])})))()},cardsToRule:function(){var t=this.gameCustoms.cards;this.rule=j.cardsToRule(t)},cleanCustomCardDeck:function(){var t=this.gameCustoms;t.cards=[],t.bid=void 0,"predefined"==t.bidding&&(t.bidding="manual")},createRandomCardDeck:function(){this.cleanCustomCardDeck();var t=this.gameCustoms;t.cards=c.a.randomCardDeck();var e=c.a.getTopTeamPlayer(t.cards);for(var p in t.players)t.players[p].show_cards="no";t.players[e].show_cards="yes",t.display_cards_top_team=!1},downloadCardDeck:function(){var data=JSON.stringify(this.gameCustoms.cards,null,4);J.a.downloadFile(data,"cards.json")},loadCustomCardDeck:function(t){var e=this,r=this;J.a.loadFile(t,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(data){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=JSON.parse(data),t.prev=1,n.forEach((function(t){var e=Object.keys(t);if(!["card_id","suit","value","player_id"].every((function(t){return e.includes(t)})))throw Error("Invalid card file.")})),t.next=10;break;case 5:return t.prev=5,t.t0=t.catch(1),console.log(t.t0),c.a.showError("Invalid card file",r.$refs.alertModal),t.abrupt("return");case 10:return e.cleanCustomCardDeck(),e.gameCustoms.cards=n,t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[1,5]])})));return function(e){return t.apply(this,arguments)}}())},loadCustomCardsTrigger:function(){this.$refs.fileCardsInput.click()},loadSavedGame:function(t){var e=this;J.a.loadFile(t,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(data){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,(r=JSON.parse(data))&&r.version){t.next=4;break}throw Error("Invalid game file.");case 4:return t.next=6,e.$store.dispatch("game/loadGame",r);case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),c.a.showError(t.t0,e.$refs.alertModal),t.abrupt("return");case 13:return e.$router.push({path:"/game/play"}),t.abrupt("return");case 15:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())},loadSavedGameTrigger:function(){this.$refs.fileGameInput.click()},createNewGame:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 0==t.gameCustoms.cards.length&&t.createRandomCardDeck(),e.prev=1,e.next=4,t.$store.dispatch("game/newGame",t.gameCustoms);case 4:e.next=11;break;case 6:return e.prev=6,e.t0=e.catch(1),console.log(e.t0),c.a.showError(e.t0,t.$refs.alertModal),e.abrupt("return");case 11:return t.$router.push({path:"/game/play"}),e.abrupt("return");case 13:case"end":return e.stop()}}),e,null,[[1,6]])})))()},goToHelp:function(t){this.$router.push({path:"/help/"+t})}},computed:{customPlayerCards:function(){var t=this.gameCustoms.cards,e=c.a.getTopTeamByPoints(t),r=Object(n.a)(e,2),o=r[0],l=r[1];return this.selectedScoreRange.team=o,this.selectedScoreRange.points=l,c.a.players().map((function(p){return{id:p,card_deck:t?t.filter((function(t){return t.player_id==p})):[]}}))},existingCustomCards:function(){return this.customPlayerCards.reduce((function(t,p){return t+p.card_deck.length}),0)>0}}},Q=N,z=r(23),component=Object(z.a)(Q,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("AlertModal",{ref:"alertModal"}),t._v(" "),r("p",{staticClass:"title is-2 is-capitalized has-text-weight-bold has-text-centered"},[t._v("New Game")]),t._v(" "),r("p",{staticClass:"title is-6 mb-3"},[t._v("Random hands by custom rules")]),t._v(" "),r("div",{staticClass:"field has-addons"},[t._m(0),t._v(" "),r("div",{staticClass:"control"},[r("div",{staticClass:"select"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedPredefinedRule,expression:"selectedPredefinedRule"}],attrs:{name:"predefinedRule"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedPredefinedRule=e.target.multiple?r:r[0]}}},t._l(t.ruleExamples,(function(e,n){return r("option",{key:n,domProps:{value:n}},[t._v(t._s(e.name))])})),0)])]),t._v(" "),r("div",{staticClass:"control"},[r("button",{staticClass:"button light-shadow is-success has-text-weight-bold",on:{click:function(e){return t.setPredefinedRule()}}},[t._v("Select Rule")])])]),t._v(" "),r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rule,expression:"rule"}],staticClass:"textarea has-text-weight-bold mono-font code-text",attrs:{placeholder:"i.e.: north.spades(4).clubs(3,5,+KJ,-AQ) east.diamonds(2)",spellcheck:"false"},domProps:{value:t.rule},on:{input:function(e){e.target.composing||(t.rule=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"buttons is-right"},[r("button",{staticClass:"button light-shadow is-success has-text-weight-bold is-capitalized",on:{click:function(e){return t.newRule()}}},[t._v("Apply rule")]),t._v(" "),r("button",{staticClass:"button light-shadow is-warning has-text-weight-bold is-capitalized",on:{click:function(e){return t.cleanRule()}}},[t._v("Clean rule")]),t._v(" "),r("button",{staticClass:"button light-shadow is-light has-text-weight-bold",on:{click:function(e){return t.goToHelp("rules")}}},[r("span",{staticClass:"icon is-small material-icons-outlined mr-1"},[t._v("info")]),t._v(" Learn More on Rules\n        ")])]),t._v(" "),r("div",{staticClass:"buttons"},[r("button",{staticClass:"button light-shadow is-light has-text-weight-bold",on:{click:function(e){return t.toggleShowCard()}}},[t.showCards?r("span",{staticClass:"icon is-small material-icons-outlined"},[t._v("visibility_off")]):t._e(),t._v(" "),t.showCards?t._e():r("span",{staticClass:"icon is-small material-icons-outlined"},[t._v("visibility")])]),t._v(" "),r("button",{staticClass:"button light-shadow is-light has-text-weight-bold is-capitalized",on:{click:function(e){return t.loadCustomCardsTrigger()}}},[t._v("Load cards from file")]),t._v(" "),r("button",{staticClass:"button light-shadow is-warning has-text-weight-bold is-capitalized",on:{click:function(e){return t.cleanCustomCardDeck()}}},[t._v("Clean all cards")]),t._v(" "),r("button",{staticClass:"button light-shadow is-info has-text-weight-bold is-capitalized",on:{click:function(e){return t.createRandomCardDeck()}}},[t._v("Random cards")]),t._v(" "),t.gameCustoms.cards.length>0?r("button",{staticClass:"button light-shadow is-light has-text-weight-bold is-capitalized",on:{click:function(e){return t.cardsToRule()}}},[t._v("Edit as rule")]):t._e(),t._v(" "),t.gameCustoms.cards.length>0?r("button",{staticClass:"button light-shadow is-light has-text-weight-bold is-capitalized",on:{click:function(e){return t.downloadCardDeck()}}},[t._v("Export Card Deck")]):t._e()]),t._v(" "),t.showCards?r("PlayerCards",{staticClass:"mb-3 is-fullwidth is-bordered",attrs:{players:t.customPlayerCards,onlyRemainingCards:!1,showPoints:!0}}):t._e(),t._v(" "),r("input",{ref:"fileCardsInput",staticClass:"is-hidden",attrs:{type:"file",name:"customCardFile",accept:"application/json"},on:{change:function(e){return t.loadCustomCardDeck(e)}}}),t._v(" "),r("input",{ref:"fileGameInput",staticClass:"is-hidden",attrs:{type:"file",name:"gameFile",accept:"application/json"},on:{change:function(e){return t.loadSavedGame(e)}}}),t._v(" "),t.selectedScoreRange.team&&t.showCards?r("div",{staticClass:"block"},[r("div",{staticClass:"has-text-centered is-size-6 is-italic"},[t._v("\n            The top team is "),r("span",{staticClass:"is-capitalized"},[t._v(t._s(t.selectedScoreRange.team))]),t._v(" with "+t._s(t.selectedScoreRange.points)+" total HCP.\n        ")])]):t._e(),t._v(" "),t.showCards?t._e():r("hr",{staticClass:"hr mb-6"}),t._v(" "),r("div",{staticClass:"buttons is-centered"},[r("button",{staticClass:"button light-shadow is-success is-medium has-text-weight-bold is-capitalized",on:{click:function(e){return t.createNewGame()}}},[t._v("Play")]),t._v(" "),r("button",{staticClass:"button light-shadow is-light is-medium has-text-weight-bold is-capitalized",on:{click:function(e){return t.loadSavedGameTrigger()}}},[t._v("Load Game")])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"control"},[r("a",{staticClass:"button light-shadow is-light has-text-weight-bold disabled"},[t._v("Example Rules:")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AlertModal:r(547).default,PlayerCards:r(546).default})}}]);