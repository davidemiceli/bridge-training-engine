(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3],{545:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},546:function(e,t,r){var n=r(7),o=r(43),l=r(20),c=r(545),d=n("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),y=function(e){return function(t){var r=l(o(t));return 1&e&&(r=d(r,v,"")),2&e&&(r=d(r,m,"")),r}};e.exports={start:y(1),end:y(2),trim:y(3)}},547:function(e,t,r){"use strict";function n(e,p){return n=Object.setPrototypeOf||function(e,p){return e.__proto__=p,e},n(e,p)}r.d(t,"a",(function(){return n}))},550:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{msg:""}},methods:{okClicked:function(){this.msg=""},show:function(e){this.msg=e}}},o=r(19),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.msg?r("div",{staticClass:"absolute inset-0 z-30 bg-black/20 flex items-center justify-center"},[r("div",{staticClass:"w-full max-w-md shadow-lg rounded-lg p-4 bg-white leading-8"},[e._m(0),e._v(" "),r("div",{staticClass:"mt-6 text-right"},[r("p",{staticClass:"mb-6 text-base font-bold text-gray-700 text-left"},[e._v(e._s(e.msg))]),e._v(" "),r("button",{staticClass:"rounded-md shadow hover:shadow-md capitalize font-bold text-base py-2 px-4 bg-amber-300 text-yellow-900",on:{click:e.okClicked}},[r("span",{staticClass:"material-icons align-middle"},[e._v("done_outline")])])])])]):e._e()}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center justify-between pb-4 border-b border-b-gray-200"},[r("h3",{staticClass:"text-2xl text-gray-800 font-bold flex items-center"},[r("span",{staticClass:"material-icons mr-2"},[e._v("error_outline")]),e._v("Alert message\n            ")])])}],!1,null,null,null);t.default=component.exports},552:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,"a",(function(){return n}))},557:function(e,t,r){"use strict";var n=r(6),o=r(546).trim;n({target:"String",proto:!0,forced:r(558)("trim")},{trim:function(){return o(this)}})},558:function(e,t,r){var n=r(99).PROPER,o=r(9),l=r(545);e.exports=function(e){return o((function(){return!!l[e]()||"​᠎"!=="​᠎"[e]()||n&&l[e].name!==e}))}},559:function(e,t,r){var n=r(6),o=r(23),l=r(82),c=r(560),d=r(394),f=r(8),v=r(22),m=r(66),y=r(9),x=o("Reflect","construct"),h=Object.prototype,_=[].push,w=y((function(){function e(){}return!(x((function(){}),[],e)instanceof e)})),C=!y((function(){x((function(){}))})),O=w||C;n({target:"Reflect",stat:!0,forced:O,sham:O},{construct:function(e,t){d(e),f(t);var r=arguments.length<3?e:d(arguments[2]);if(C&&!w)return x(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return l(_,n,t),new(l(c,e,n))}var o=r.prototype,y=m(v(o)?o:h),O=l(e,y,t);return v(O)?O:y}})},560:function(e,t,r){"use strict";var n=r(3),o=r(7),l=r(17),c=r(22),d=r(25),f=r(100),v=r(98),m=n.Function,y=o([].concat),x=o([].join),h={},_=function(e,t,r){if(!d(h,t)){for(var n=[],i=0;i<t;i++)n[i]="a["+i+"]";h[t]=m("C,a","return new C("+x(n,",")+")")}return h[t](e,r)};e.exports=v?m.bind:function(e){var t=l(this),r=t.prototype,n=f(arguments,1),o=function(){var r=y(n,f(arguments));return this instanceof o?_(t,r.length,r):t.apply(e,r)};return c(r)&&(o.prototype=r),o}},561:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(547);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(n.a)(e,t)}},562:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(552),o=r(547);function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,r){return c=l()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a));return r&&Object(o.a)(n,r.prototype),n},c.apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return d=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,l)}function l(){return c(e,arguments,Object(n.a)(this).constructor)}return l.prototype=Object.create(e.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),Object(o.a)(l,e)},d(e)}},563:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(45);function o(e,t){if(t&&("object"===Object(n.a)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}},577:function(e,t,r){var n=r(6),o=r(397).values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},579:function(e,t,r){"use strict";r.r(t);r(28),r(94),r(95);var n=r(58),o=r(11),l=r(4),c=(r(42),r(16),r(47),r(51),r(52),r(69),r(35),r(29),r(26),r(80),r(557),r(96),r(34),r(174),r(78),r(135),r(577),r(81)),d=(r(559),r(15)),f=r(14),v=r(561),m=r(563),y=r(552),x=r(562);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(y.a)(e);if(t){var o=Object(y.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(m.a)(this,r)}}var _=function(e){Object(v.a)(r,e);var t=h(r);function r(e){var n;return Object(f.a)(this,r),(n=t.call(this,e)).name="GameError",n}return Object(d.a)(r)}(Object(x.a)(Error)),w=r(1);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={layout:"play",data:function(){var e=w.a.players(),t=["player","watcher","teacher"];return{tabs:{training:!0},username:"",updatePlayersIndex:null,players:e,playerEmbodyRules:[{text:"Top Team Player",value:"topTeam"},{text:"Random Player",value:"randomPlayer"}],embodyRule:null,selectedPlayers:[],roles:t,userNames:"",player:e[0],role:t[0]}},methods:{setTab:function(e){var t=this;Object.keys(this.tabs).forEach((function(e){t.tabs[e]=!1})),this.tabs[e]=!0},togglePlayers:function(p){this.selectedPlayers.includes(p)?this.selectedPlayers=this.selectedPlayers.filter((function(e){return e!=p})):this.selectedPlayers.push(p)},toggleEmbodyRule:function(e){this.embodyRule=this.embodyRule==e?null:e},setUsername:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.$nuxt.$loading.start(),r.prev=1,!((n=e.length)>16||n<6)){r.next=5;break}throw new _("Username must have between 6 and 16 characters.");case 5:return o=Object.assign({},t.settings,{username:e}),r.next=8,t.$store.dispatch("settings/update",o);case 8:r.next=17;break;case 10:return r.prev=10,r.t0=r.catch(1),t.$nuxt.$loading.finish(),console.error(r.t0),l="GameError"==r.t0.name?r.t0.message:"Internal Server Error.",w.a.showError(l,t.$refs.alertModal),r.abrupt("return");case 17:return t.$nuxt.$loading.finish(),r.abrupt("return");case 19:case"end":return r.stop()}}),r,null,[[1,10]])})))()},newTable:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.$nuxt.$loading.start(),r.prev=1,n=t.settings.username){r.next=5;break}throw new _("Missing username. Please enter a valid username.");case 5:if("training"!=e){r.next=8;break}return r.next=8,t.trainingTable();case 8:return r.next=10,t.$store.dispatch("table/new",n);case 10:t.$router.push({path:"/game/hand"}),r.next=20;break;case 13:return r.prev=13,r.t0=r.catch(1),t.$nuxt.$loading.finish(),console.error(r.t0),o="GameError"==r.t0.name?r.t0.message:"Internal Server Error.",w.a.showError(o,t.$refs.alertModal),r.abrupt("return");case 20:return t.$nuxt.$loading.finish(),r.abrupt("return");case 22:case"end":return r.stop()}}),r,null,[[1,13]])})))()},trainingTable:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,c,d,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.settings.username,n=e.embodyRule,o=e.selectedPlayers,l=e.players,c=o?0==o.length?l:o:e.players,d=e.playerEmbodyRules.reduce((function(a,e){return a[e.value]=!1,a}),{}),n in d&&(d[n]=!0),data=[{username:r,players:c,role:"player",embodyRules:d}],t.next=8,e.$store.dispatch("table/reset");case 8:return t.next=10,e.$store.dispatch("table/addPlayers",data);case 10:return t.abrupt("return");case 11:case"end":return t.stop()}}),t)})))()},addPlayers:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,data,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$nuxt.$loading.start(),t.prev=1,r=e.selectedPlayers,n=e.role,e.userNames=e.userNames.trim().replace(/\s/g,""),o=e.userNames.split(","),l=r||[],data=o.map((function(u){return{username:u,players:l,role:n}})),t.next=9,e.$store.dispatch("table/addPlayers",data);case 9:t.next=18;break;case 11:return t.prev=11,t.t0=t.catch(1),e.$nuxt.$loading.finish(),console.error(t.t0),c="GameError"==t.t0.name?t.t0.message:"Internal Server Error.",w.a.showError(c,e.$refs.alertModal),t.abrupt("return");case 18:return e.$nuxt.$loading.finish(),t.abrupt("return");case 20:case"end":return t.stop()}}),t,null,[[1,11]])})))()},updatePlayers:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,l,c,d,f,v,m,y;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(n=t.table.players[e],l=n.players,c=n.role,d=n.embodyRules,t.selectedPlayers=l,t.role=c,t.embodyRule=null,f=0,v=Object.entries(d);f<v.length;f++)m=Object(o.a)(v[f],2),y=m[0],m[1]&&(t.embodyRule=y);t.userNames=e;case 6:case"end":return r.stop()}}),r)})))()},displayEmbodyRule:function(e){var t=this.playerEmbodyRules,r=e.embodyRules&&Object.entries(e.embodyRules).filter((function(e){var t=Object(o.a)(e,2);t[0];return t[1]})).map((function(e){return e[0]})).sort();return r&&r.map((function(e){return e&&t.filter((function(t){return t.value==e}))[0].text})).join(", ")}},computed:O(O({},Object(c.c)({settings:"settings/all",table:"table/all"})),{},{tablePlayers:function(){var table=this.table;return table&&table.players?Object.values(table.players):[]}}),mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("settings/get");case 2:return t.next=4,e.$store.dispatch("table/get");case 4:return e.username=e.settings.username||"",e.$store.getters["table/all"],t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},P=j,R=r(19),component=Object(R.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container mx-auto text-gray-800"},[r("AlertModal",{ref:"alertModal"}),e._v(" "),r("p",{staticClass:"text-4xl font-bold mb-4 text-center"},[e._v("Table")]),e._v(" "),r("div",{staticClass:"grid grid-cols-10 gap-8"},[r("div",{staticClass:"col-span-5 flex flex-col"},[r("div",{staticClass:"border-b border-gray-200"},[r("ul",{staticClass:"flex flex-wrap justify-center -mb-px text-lg font-bold text-center text-gray-700 uppercase"},[r("li",{staticClass:"mr-2"},[r("span",{staticClass:"inline-flex p-4 rounded-t-lg border-b-2 cursor-pointer group",class:[e.tabs.training?"text-sky-800 border-sky-800 active":"border-transparent hover:text-gray-800 border-gray-300"],on:{click:function(t){return e.setTab("training")}}},[r("span",{staticClass:"material-icons-outlined mr-1"},[e._v("psychology")]),e._v("Training")])])])]),e._v(" "),r("div",{staticClass:"flex justify-center items-center my-6"},[r("p",{staticClass:"inline-flex text-lg font-bold mr-4"},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"inline-flex rounded-l font-bold text-base py-2 px-3 bg-slate-100 outline-0",attrs:{name:"username",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("button",{staticClass:"inline-flex rounded-r hover:shadow-md bg-emerald-500 text-white capitalize font-bold text-base py-2 px-3",on:{click:function(t){return e.setUsername(e.username)}}},[e._v("Update")])]),e._v(" "),e.tabs.training?r("div",{staticClass:"space-y-6"},[r("p",{staticClass:"text-2xl font-bold text-center"},[e._v("Play against the AI and/or yourself")]),e._v(" "),r("p",{staticClass:"text-base font-bold text-center"},[e._v("Choose one or more players to embody")]),e._v(" "),r("div",{staticClass:"flex justify-center"},e._l(e.players,(function(p){return r("div",{key:p,staticClass:"inline-flex mr-4"},[r("div",{staticClass:"ml-2 flex items-center text-sm font-medium cursor-pointer",class:[e.selectedPlayers.includes(p)?"text-sky-700":"text-gray-800"],on:{click:function(t){return e.togglePlayers(p)}}},[e.selectedPlayers.includes(p)?r("span",{staticClass:"material-icons-outlined"},[e._v("radio_button_checked")]):e._e(),e._v(" "),e.selectedPlayers.includes(p)?e._e():r("span",{staticClass:"material-icons-outlined"},[e._v("radio_button_unchecked")]),e._v(" "),r("span",{staticClass:"ml-1 uppercase font-bold"},[e._v(e._s(p))])])])})),0),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"flex justify-center"},e._l(e.playerEmbodyRules,(function(t){return r("div",{key:t.value,staticClass:"inline-flex mr-4"},[r("div",{staticClass:"ml-2 flex items-center text-sm font-medium cursor-pointer",class:[t.value==e.embodyRule?"text-sky-700":"text-gray-800"],on:{click:function(r){return e.toggleEmbodyRule(t.value)}}},[t.value==e.embodyRule?r("span",{staticClass:"material-icons-outlined"},[e._v("radio_button_checked")]):e._e(),e._v(" "),t.value!=e.embodyRule?r("span",{staticClass:"material-icons-outlined"},[e._v("radio_button_unchecked")]):e._e(),e._v(" "),r("span",{staticClass:"ml-1 uppercase font-bold"},[e._v(e._s(t.text))])])])})),0),e._v(" "),r("div",{staticClass:"text-center"},[r("button",{staticClass:"rounded shadow bg-emerald-500 text-white capitalize font-bold text-lg py-3 px-20",on:{click:function(t){return e.newTable("training")}}},[e._v("Next")])])]):e._e(),e._v(" "),e.tabs.multiplayer?r("div",{staticClass:"space-y-6"},[r("p",{staticClass:"text-2xl font-bold text-center"},[e._v("Play against other users and/or AI.")]),e._v(" "),r("p",{staticClass:"text-base font-bold text-center"},[e._v("Add usernames to invite")]),e._v(" "),r("div",{staticClass:"text-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userNames,expression:"userNames"}],staticClass:"rounded font-bold text-base py-2 px-3 bg-slate-100 outline-0",attrs:{name:"userNames",placeholder:"username1,username2,etc.."},domProps:{value:e.userNames},on:{input:function(t){t.target.composing||(e.userNames=t.target.value)}}})]),e._v(" "),r("p",{staticClass:"text-base font-bold text-center"},[e._v("Players to embody")]),e._v(" "),r("div",{staticClass:"flex justify-center"},e._l(e.players,(function(p){return r("div",{key:p,staticClass:"inline-flex items-center mr-4"},[r("input",{staticClass:"w-4 h-4 bg-gray-100 rounded border-gray-300",attrs:{type:"checkbox"},domProps:{checked:e.selectedPlayers.includes(p)},on:{change:function(t){return e.togglePlayers(t,p)}}}),e._v(" "),r("label",{staticClass:"ml-2 text-sm font-medium text-gray-900",attrs:{for:"red-checkbox"}},[e._v(e._s(p))])])})),0),e._v(" "),r("p",{staticClass:"text-base font-bold text-center"},[e._v("Role")]),e._v(" "),r("div",{staticClass:"text-center"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],staticClass:"rounded text-base bg-slate-100 font-bold outline-0 capitalize py-2 px-3",attrs:{name:"role"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.role=t.target.multiple?r:r[0]}}},e._l(e.roles,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),r("div",{staticClass:"text-center"},[r("button",{staticClass:"rounded shadow bg-emerald-500 text-white capitalize font-bold text-base py-2 px-3",on:{click:function(t){return e.addPlayers()}}},[e._v("Add users")])]),e._v(" "),r("div",{staticClass:"text-center"},[r("button",{staticClass:"rounded shadow bg-emerald-500 text-white capitalize font-bold text-lg py-3 px-20",on:{click:function(t){return e.newTable()}}},[e._v("Next")])])]):e._e()]),e._v(" "),r("div",{staticClass:"col-span-5 flex flex-col mt-6 space-y-6"},[r("p",{staticClass:"text-4xl text-center"},[e._v("Table Composition")]),e._v(" "),e.table.owner?r("p",{staticClass:"text-xl text-center italic"},[e._v("(Owner: "+e._s(e.table.owner)+")")]):e._e(),e._v(" "),r("div",{staticClass:"mt-8 border-b-2 border-gray-200 text-base box-border border"},[r("table",{staticClass:"table-auto w-full border-collapse bg-white text-center"},[e._m(1),e._v(" "),r("tbody",{staticClass:"divide-y divide-gray-300"},e._l(e.tablePlayers,(function(t,i){return r("tr",{key:i,staticClass:"cursor-pointer odd:bg-white even:bg-slate-100",class:[i===e.updatePlayersIndex?"!border-2 !border-gray-400 !shadow-inner":""],on:{click:function(r){return e.updatePlayers(t.username)}}},[r("td",{staticClass:"py-1 px-2 font-bold"},[e._v(e._s(i+1))]),e._v(" "),r("td",{staticClass:"py-1 px-2 font-bold"},[e._v(e._s(t.username))]),e._v(" "),r("td",{staticClass:"py-1 px-2 font-bold capitalize"},[e._v(e._s(t.role))]),e._v(" "),r("td",{staticClass:"py-1 px-2 font-bold uppercase"},[e._v(e._s(t.players.map((function(p){return p[0]})).sort().join(", ")))]),e._v(" "),r("td",{staticClass:"py-1 px-2 font-bold capitalize"},[e._v(e._s(e.displayEmbodyRule(t)))])])})),0)])])])])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"text-base font-bold text-center"},[e._v("Choose an embody rule"),r("br"),r("span",{staticClass:"italic"},[e._v("(it will overwrite the choosen player)")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"border-b-2 border-gray-200"},[r("tr",[r("th",{staticClass:"py-1 px-2"},[e._v("#")]),e._v(" "),r("th",{staticClass:"py-1 px-2"},[e._v("Username")]),e._v(" "),r("th",{staticClass:"py-1 px-2"},[e._v("Role")]),e._v(" "),r("th",{staticClass:"py-1 px-2"},[e._v("Players")]),e._v(" "),r("th",{staticClass:"py-1 px-2"},[e._v("Embody Rule")])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{AlertModal:r(550).default})}}]);