(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{544:function(t,r,e){"use strict";e.r(r);e(77),e(34),e(14),e(33),e(134),e(37),e(30),e(38),e(28),e(26),e(27),e(39),e(40),e(29);var n=e(1);function o(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return l(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw o}}}}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var i=0,e=new Array(r);i<r;i++)e[i]=t[i];return e}var c={props:{player:Object,shapeKind:{type:String,default:"cards"},interactive:{type:Boolean,default:!0},inlineAlternate:{type:Boolean,default:!0}},methods:{getAllCards:function(t){return t.sort((function(a,b){return b.rank-a.rank})),t},getCards:function(t,r){if(void 0===r)return[];var e=r.filter((function(r){return r.suit==t}));return e.sort((function(a,b){return b.value-a.value})),e},suitColor:function(t){return n.a.suitColor(t)},cardValueIcon:function(t){return n.a.cardValueIcon(t)},suitIcon:function(t){return n.a.suitIcon(t)},cardUnicode:function(t){return n.a.cardUnicode(t)},onClickCard:function(t){this.$emit("onClickCard",t)}},computed:{suitValues:function(){return n.a.sortedSuits("notrump")},points:function(){var t=this.player,r=t.id,e=t.card_deck;return n.a.calculatePlayerPoints(r,e)},sortedPlayerCards:function(){var t,r=this.player.cards,e=[],l=o(n.a.sortedSuits("notrump"));try{for(l.s();!(t=l.n()).done;){var s=t.value,c=this.getCards(s,r);c.sort((function(a,b){return b.value-a.value}));var d,f=o(c);try{for(f.s();!(d=f.n()).done;){var v=d.value;e.push(v)}}catch(t){f.e(t)}finally{f.f()}}}catch(t){l.e(t)}finally{l.f()}return e},hiddenPlayerCards:function(){var t=Array(this.player.cards.length);return n.a.chunk(t,4)},cardDistribution:function(){var t=this.player,r=this.getCards,e=t.card_deck,n=this.suitValues.map((function(s){return r(s,e).length}));return n.sort().reverse(),n.join("")},clickableCard:function(){return this.interactive?"cursor-pointer":""}}},d=e(18),component=Object(d.a)(c,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{staticClass:"text-sm md:text-base font-bold uppercase",class:[t.player.dummy?"text-amber-600":""]},[e("span",[t._v(t._s(t.player.id))]),t._v(" "),t.player.dummy?e("span",{staticClass:"ml-1"},[t._v("(dummy)")]):t._e(),t._v(" "),t.interactive&&t.player.isturn?e("span",{staticClass:"text-xs material-icons text-green-800"},[t._v("circle")]):t._e()]),t._v(" "),t.player.showdata?e("div",{staticClass:"text-xs md:text-base font-bold text-gray-700"},[t._v(t._s(t.points)+" HCP ("+t._s(t.cardDistribution)+" distribution)")]):t._e(),t._v(" "),"chars"==t.shapeKind?e("div",{staticClass:"mt-2"},t._l(t.suitValues,(function(r){return e("div",{key:r,staticClass:"font-bold is-unselectable",class:[t.suitColor(r)]},[e("span",{staticClass:"font-textcards"},[t._v(t._s(t.suitIcon(r)))]),t._v(" "),t.player.show?t._e():e("span",{staticClass:"material-icons font-bold has-text-grey-light"},[t._v("horizontal_rule")]),t._v(" "),t.player.show?e("span",t._l(t.getCards(r,t.player.cards),(function(r){return e("span",{key:r.card_id,staticClass:"ml-1",class:[t.clickableCard],on:{click:function(e){return t.onClickCard(r)}}},[t._v(t._s(t.cardValueIcon(r.value)))])})),0):t._e()])})),0):t._e(),t._v(" "),"cards"==t.shapeKind?e("div",{staticClass:"mt-1 font-cards leading-cards text-3xl md:text-5xl"},[!t.inlineAlternate||"east"!=t.player.id&&"west"!=t.player.id?t._e():e("div",[t.player.show?t._e():e("div",{staticClass:"text-gray-500"},t._l(t.hiddenPlayerCards,(function(s,r){return e("div",{key:r},t._l(s,(function(r,n){return e("div",{key:n,staticClass:"inline-flex"},[t._v(t._s(t.cardUnicode("hidden")))])})),0)})),0),t._v(" "),t.player.show?e("div",t._l(t.suitValues,(function(r){return e("div",{key:r},t._l(t.getCards(r,t.player.cards),(function(r){return e("span",{key:r.card_id,class:[t.suitColor(r.suit),t.clickableCard],on:{click:function(e){return t.onClickCard(r)}}},[t._v(t._s(t.cardUnicode(r.card_id)))])})),0)})),0):t._e()]),t._v(" "),t.inlineAlternate&&"north"!=t.player.id&&"south"!=t.player.id?t._e():e("div",[t.player.show?t._e():e("div",{staticClass:"text-gray-500"},t._l(t.sortedPlayerCards,(function(r){return e("span",{key:r.card_id},[t._v(t._s(t.cardUnicode("hidden")))])})),0),t._v(" "),t.player.show?e("div",t._l(t.sortedPlayerCards,(function(r){return e("span",{key:r.card_id,class:[t.suitColor(r.suit),t.clickableCard],on:{click:function(e){return t.onClickCard(r)}}},[t._v(t._s(t.cardUnicode(r.card_id)))])})),0):t._e()])]):t._e()])}),[],!1,null,null,null);r.default=component.exports}}]);