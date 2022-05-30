(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{580:function(e,t,n){"use strict";n.r(t);var o={layout:"textual",data:function(){return{sections:["Hand Editor Rules"]}}},l=n(18),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"max-w-3xl px-2 mx-auto text-gray-800"},[n("div",{staticClass:"space-y-4 font-bold mb-8"},[n("p",{staticClass:"text-4xl"},[e._v("Hand Editor Rules")])]),e._v(" "),n("div",{staticClass:"font-base leading-6 space-y-3"},[n("h3",{staticClass:"text-xl font-bold"},[e._v("Random hands by custom rules")]),e._v(" "),n("p",[e._v("\n            When creating a new game is possible to create random hands using user-defined rules.\n            This is very useful to test your play on a certain type of hands, re-play hands or some variations, practice with bidding, experiment new conventions.\n        ")]),e._v(" "),n("p",[e._v("These rules are defined through special formulas to place constraints on the random generation of hands.")]),e._v(" "),n("p",[n("em",[e._v("An example of rule:")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        north.clubs(4).diamonds(2,5).hearts(3,+A,-J10)"),n("br"),e._v("\n        south.clubs(2).diamonds(+K95)\n        ")]),e._v(" "),n("p",[e._v("As seen from the example above, every single formula starts always with the player name, followed by the suit and different parameters.")]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        <player>.<suit>(<parameter one>, <parameter two>, etc.)\n        ")]),e._v(" "),n("p",[e._v("Every formula can handle 3 categories of parameters to define:")]),e._v(" "),n("ol",{staticClass:"list-decimal list-inside italic font-bold"},[n("li",[e._v("Suit length")]),e._v(" "),n("li",[e._v("Suit cards to include")]),e._v(" "),n("li",[e._v("Suit cards to exclude")])]),e._v(" "),n("h3",{staticClass:"text-xl font-bold"},[e._v("Suit length")]),e._v(" "),n("p",[e._v("A formula can define a precise number of cards a suit must hold, using a single numerical parameter:")]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        <player>.<suit>(<number of cards>)\n        ")]),e._v(" "),n("p",[n("em",[e._v("Example (North must have 4 cards of hearts):")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        north.hearts(4)\n        ")]),e._v(" "),n("p",[e._v("In this way is possible to restrict the hands of every player to a given distribution.")]),e._v(" "),n("p",[n("em",[e._v("Example (West must have a balanced distribution 4333):")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        west.clubs(3).diamonds(3).hearts(4).spades(3)\n        ")]),e._v(" "),n("h3",{staticClass:"text-xl font-bold"},[e._v("Suit length based on a range interval")]),e._v(" "),n("p",[e._v("\n            A formula can define a minimum and a maximum number of suit cards\n            using two numerical parameters (the minimum and the maximum of the specified range):\n        ")]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        <player>.<suit>(<minimum>, <maximum>)\n        ")]),e._v(" "),n("p",[n("em",[e._v("Example (West must have a random number between 2 and 6 cards of spades):")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        west.spades(2,6)\n        ")]),e._v(" "),n("h3",{staticClass:"text-xl font-bold"},[e._v("Cards of suit to include and/or exclude")]),e._v(" "),n("p",[e._v("The rules have formulas to define a range of cards a suit must have, as well as a range of cards it to not have.")]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        <player>.<suit>(+<cards to include>, -<cards to exclude>)\n        ")]),e._v(" "),n("p",[n("em",[e._v("Example (East must have AJ83 clubs, south must not have K6 hearts, west must include the hearts cards AQ with 1098 excluded):")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        east.clubs(+AJ83)"),n("br"),e._v("\n        south.hearts(-K6)"),n("br"),e._v("\n        west.hearts(+AQ,-1098)\n        ")]),e._v(" "),n("h3",{staticClass:"text-xl font-bold"},[e._v("Suit placeholders")]),e._v(" "),n("p",[e._v("\n            Instead of seeds, can be used the placeholders x, y, t, z to randomize the association between formulas and seeds.\n            In other words, every of these variables will be randomly assigned to a suit (for example x=spades, y=diamonds, z=clubs, t=hearts).\n        ")]),e._v(" "),n("p",[n("em",[e._v("Example:")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        north.x(5,+AK).y(3).t(3).z(2,-AKJQ)"),n("br"),e._v("\n        south.x(4,+Q).y(3).t(3).z(3,-AKJQ)\n        ")]),e._v(" "),n("h3",{staticClass:"text-xl font-bold"},[e._v("Let's put it all together")]),e._v(" "),n("p",[e._v("All these formulas can be combined together to create random custom hands very quickly and effectively. Here are some examples to make you understand better.")]),e._v(" "),n("p",[n("em",[e._v("Example (West and East have random balanced hands 4333 and 5332):")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        east.x(4).y(3).t(3).z(3)"),n("br"),e._v("\n        west.x(5).y(3).t(3).z(2)\n        ")]),e._v(" "),n("p",[n("em",[e._v("Example (North and South having trump 7+3 cards):")])]),e._v(" "),n("blockquote",{staticClass:"font-mono rounded-md bg-slate-800 p-4 leading-6 text-xs sm:text-sm text-slate-50 ligatures-none"},[e._v("\n        north.x(+754).y(+K643).z(+J65).t(+J74)"),n("br"),e._v("\n        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)"),n("br"),e._v("\n        east.x(+2).y(+10852).z(+AKQ2).t(+Q652)\n        ")])])])}],!1,null,null,null);t.default=component.exports}}]);