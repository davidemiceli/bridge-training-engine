(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{554:function(t,e,n){"use strict";n.r(e);n(33),n(26),n(95);var l=n(1),r={props:{loopPlayers:Array,bids:Array},methods:{isNormalBid:function(t){return-1===["pass","double","redouble"].indexOf(t)},onClickPanel:function(){this.$emit("onClickPanel")},suitColor:function(t){var e=l.a.suitColor(t);return"card-".concat(e)},suitSymbol:function(t){return l.a.suitIcon(t)},valueIcon:function(t){return l.a.cardValueIcon(t)}},computed:{bidTrumps:l.a.bidTrumps,bidValues:l.a.bidValues,bidList:function(){return this.bids.map((function(b){return Object.assign({name:{suit:b.trump,value:b.id.split(" ")[0],card_id:b.id}},b)}))}}},c=n(25),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tile is-ancestor is-flex-wrap-wrap is-mobile is-clickable",on:{click:t.onClickPanel}},[t._l(t.loopPlayers,(function(e){return n("div",{key:e,staticClass:"tile is-3 is-parent"},[n("div",{staticClass:"tile is-child is-flex is-justify-content-center is-align-items-center"},[n("h4",{staticClass:"is-size-6 is-uppercase has-text-weight-bold"},[t._v(t._s(e))])])])})),t._v(" "),t._l(t.bidList,(function(b,i){return n("div",{key:i,staticClass:"tile is-3 is-parent"},[n("div",{staticClass:"tile is-child is-flex is-justify-content-center card-suit is-size-6 has-text-weight-bold"},[t.isNormalBid(b.id)?n("span",{staticClass:"card-text is-uppercase",class:[t.suitColor(b.name.suit)]},[t._v(t._s(b.name.value)+" "+t._s(t.suitSymbol(b.name.suit)))]):t._e(),t._v(" "),"pass"==b.id?n("span",{staticClass:"has-text-success-dark"},[t._v("PASS")]):t._e(),t._v(" "),"double"==b.id?n("span",{staticClass:"has-text-danger-dark"},[t._v("X")]):t._e(),t._v(" "),"redouble"==b.id?n("span",{staticClass:"has-text-info-dark"},[t._v("XX")]):t._e()])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);