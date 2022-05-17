(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{579:function(e,t,o){"use strict";o.r(t);var n={layout:"textual",data:function(){return{sections:["Hand Editor Rules"]}}},l=o(23),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[o("div",{staticClass:"block has-text-centered has-text-weight-bold"},[o("p",{staticClass:"title is-2"},[e._v("Support")]),e._v(" "),o("p",{staticClass:"subtitle is-3"},[e._v("Hand Editor Rules")]),e._v(" "),o("hr",{staticClass:"hr"})]),e._v(" "),o("div",{staticClass:"block"},[o("h3",[e._v("Random hands by custom rules")]),e._v(" "),o("p",[e._v("\n            When creating a new game is possible to create random hands using user-defined rules.\n            This is very useful to test your play on a certain type of hands, re-play hands or some variations, practice with bidding, experiment new conventions.\n        ")]),e._v(" "),o("p",[e._v("These rules are defined through special formulas to place constraints on the random generation of hands.")]),e._v(" "),o("p",[o("em",[e._v("An example of rule:")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        north.clubs(4).diamonds(2,5).hearts(3,+A,-J10)"),o("br"),e._v("\n        south.clubs(2).diamonds(+K95)\n        ")]),e._v(" "),o("p",[e._v("As seen from the example above, every single formula starts always with the player name, followed by the suit and different parameters.")]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        <player>.<suit>(<parameter one>, <parameter two>, etc.)\n        ")]),e._v(" "),o("p",[e._v("Every formula can handle 3 categories of parameters to define:")]),e._v(" "),o("ol",{staticClass:"is-italic has-text-weight-bold"},[o("li",[e._v("Suit length")]),e._v(" "),o("li",[e._v("Suit cards to include")]),e._v(" "),o("li",[e._v("Suit cards to exclude")])]),e._v(" "),o("h3",[e._v("Suit length")]),e._v(" "),o("p",[e._v("A formula can define a precise number of cards a suit must hold, using a single numerical parameter:")]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        <player>.<suit>(<number of cards>)\n        ")]),e._v(" "),o("p",[o("em",[e._v("Example (North must have 4 cards of hearts):")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        north.hearts(4)\n        ")]),e._v(" "),o("p",[e._v("In this way is possible to restrict the hands of every player to a given distribution.")]),e._v(" "),o("p",[o("em",[e._v("Example (West must have a balanced distribution 4333):")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        west.clubs(3).diamonds(3).hearts(4).spades(3)\n        ")]),e._v(" "),o("h3",[e._v("Suit length based on a range interval")]),e._v(" "),o("p",[e._v("\n            A formula can define a minimum and a maximum number of suit cards\n            using two numerical parameters (the minimum and the maximum of the specified range):\n        ")]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        <player>.<suit>(<minimum>, <maximum>)\n        ")]),e._v(" "),o("p",[o("em",[e._v("Example (West must have a random number between 2 and 6 cards of spades):")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        west.spades(2,6)\n        ")]),e._v(" "),o("h3",[e._v("Cards of suit to include and/or exclude")]),e._v(" "),o("p",[e._v("The rules have formulas to define a range of cards a suit must have, as well as a range of cards it to not have.")]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        <player>.<suit>(+<cards to include>, -<cards to exclude>)\n        ")]),e._v(" "),o("p",[o("em",[e._v("Example (East must have AJ83 clubs, south must not have K6 hearts, west must include the hearts cards AQ with 1098 excluded):")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        east.clubs(+AJ83)"),o("br"),e._v("\n        south.hearts(-K6)"),o("br"),e._v("\n        west.hearts(+AQ,-1098)\n        ")]),e._v(" "),o("h3",[e._v("Suit placeholders")]),e._v(" "),o("p",[e._v("\n            Instead of seeds, can be used the placeholders x, y, t, z to randomize the association between formulas and seeds.\n            In other words, every of these variables will be randomly assigned to a suit (for example x=spades, y=diamonds, z=clubs, t=hearts).\n        ")]),e._v(" "),o("p",[o("em",[e._v("Example:")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        north.x(5,+AK).y(3).t(3).z(2,-AKJQ)"),o("br"),e._v("\n        south.x(4,+Q).y(3).t(3).z(3,-AKJQ)\n        ")]),e._v(" "),o("h3",[e._v("Let's put it all together")]),e._v(" "),o("p",[e._v("All these formulas can be combined together to create random custom hands very quickly and effectively. Here are some examples to make you understand better.")]),e._v(" "),o("p",[o("em",[e._v("Example (West and East have random balanced hands 4333 and 5332):")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        east.x(4).y(3).t(3).z(3)"),o("br"),e._v("\n        west.x(5).y(3).t(3).z(2)\n        ")]),e._v(" "),o("p",[o("em",[e._v("Example (North and South having trump 7+3 cards):")])]),e._v(" "),o("blockquote",{staticClass:"mono-font code-text has-text-weight-bold is-size-6"},[e._v("\n        north.x(+754).y(+K643).z(+J65).t(+J74)"),o("br"),e._v("\n        south.x(+AKQ10983).y(+AQ).z(+97).t(+A9)"),o("br"),e._v("\n        east.x(+2).y(+10852).z(+AKQ2).t(+Q652)\n        ")])])])}],!1,null,null,null);t.default=component.exports}}]);