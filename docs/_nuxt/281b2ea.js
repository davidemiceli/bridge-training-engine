(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{580:function(t,e,n){"use strict";n.r(e);var o={layout:"textual",data:function(){return{amts:[10,20,50,100,500]}},methods:{selectAmount:function(a){var t="https://www.paypal.com/donate/?business=BRMDA5LUN5QB6&no_recurring=0&currency_code=EUR&amount=".concat(a,"&recurring_payment=Y&item_number=Donation%20to%20support%20Bridge%20Training%20Engine");window.open(t,"_blank")}}},r=n(19),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-3xl px-2 mx-auto text-gray-800"},[t._m(0),t._v(" "),n("div",{staticClass:"mt-6 mb-8 text-center"},[t._m(1),t._v(" "),n("div",t._l(t.amts,(function(a,i){return n("button",{key:i,staticClass:"rounded-lg box-border border-2 shadow hover:shadow-md py-3 px-4 font-bold text-md text-gray-700 ml-2 first:ml-0",on:{click:function(e){return t.selectAmount(a)}}},[t._v("€ "+t._s(a))])})),0),t._v(" "),n("p",{staticClass:"mt-4"},[n("button",{staticClass:"rounded-lg box-border border-2 shadow hover:shadow-md py-3 px-4 font-bold text-md text-gray-700 ml-2",on:{click:function(e){return t.selectAmount(0)}}},[t._v("€ Custom Amount")])])]),t._v(" "),n("div",{staticClass:"mt-12 text-center"},[n("NuxtLink",{staticClass:"rounded shadow hover:shadow-md bg-emerald-500 text-white font-bold text-sm py-3 px-4 sm:py-3 sm:px-6 lg:text-base lg:py-4 lg:px-8",attrs:{to:"/game/hand"}},[n("span",[t._v("Skip and Continue")]),t._v(" "),n("span",{staticClass:"ml-1 material-icons-outlined align-middle"},[t._v("east")])])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"space-y-10 text-center"},[n("p",{staticClass:"text-lg"},[t._v("\n            Developing and maintaining Bridge Training Engine involves a lot of effort."),n("br"),t._v("\n            If you use Bridge Training Engine and feel it is useful to you, please consider backing us."),n("br"),t._v("\n            Before to continue, support us with a free donation.\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"flex justify-center py-6"},[e("img",{staticClass:"fill-current w-30",attrs:{src:"PayPalDonate.svg"}})])}],!1,null,null,null);e.default=component.exports}}]);