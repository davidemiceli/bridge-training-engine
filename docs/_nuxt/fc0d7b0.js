(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{537:function(t,e,r){var c=r(7);t.exports=c(1..valueOf)},543:function(t,e,r){"use strict";var c=r(5),n=r(3),o=r(7),l=r(68),v=r(537),h=r(392),d=r(9),_=n.RangeError,f=n.String,k=Math.floor,m=o(h),C=o("".slice),x=o(1..toFixed),T=function(t,e,r){return 0===e?r:e%2==1?T(t,e-1,r*t):T(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,c=e;++r<6;)c+=t*data[r],data[r]=c%1e7,c=k(c/1e7)},z=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=k(r/t),r=r%t*1e7},N=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+m("0",7-e.length)+e}return s};c({target:"Number",proto:!0,forced:d((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!d((function(){x({})}))},{toFixed:function(t){var e,r,c,n,o=v(this),h=l(t),data=[0,0,0,0,0,0],d="",k="0";if(h<0||h>20)throw _("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return f(o);if(o<0&&(d="-",o=-o),o>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(o*T(2,69,1))-69)<0?o*T(2,-e,1):o/T(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),c=h;c>=7;)w(data,1e7,0),c-=7;for(w(data,T(10,c,1),0),c=e-1;c>=23;)z(data,1<<23),c-=23;z(data,1<<c),w(data,1,1),z(data,2),k=N(data)}else w(data,0,r),w(data,1<<-e,0),k=N(data)+m("0",h);return k=h>0?d+((n=k.length)<=h?"0."+m("0",h-n)+k:C(k,0,n-h)+"."+C(k,n-h)):d+k}})},546:function(t,e,r){"use strict";r.r(e);r(543);var c=r(1),n={props:{gameTime:String,contract:Object,tricks:Array},methods:{suitColor:function(t){var e=c.a.suitColor(t);return"card-".concat(e)},suitSymbol:c.a.suitIcon,cardUnicode:function(t){return c.a.cardUnicode(t)},deltaTricks:function(t){return t<0?"-".concat(Math.abs(t)):"+".concat(t)},percNormalization:function(t,e){switch(!0){case e+t==0:return 1;case 0==e&&t>0:return t/1;default:return t/e}}},computed:{attack:function(){return this.tricks&&this.tricks[0]&&this.tricks[0][0]},teamTricks:function(){return c.a.teamTricks(this.tricks)},totalTricks:function(){var t=this.tricks;return t&&t.length||0},targetTricks:function(){var t=this.contract,e=c.a.getPlayerTeam(t.player_id),r=c.a.getOpponentTeam(t.player_id),n={};return n[e]=6+t.value,n[r]=7-t.value,n},targetTricksPerc:function(){var t=this.teamTricks,e=this.targetTricks,r={};for(var c in e){var n=[t[c],e[c]],o=n[0],l=n[1],v=this.percNormalization(o,l);r[c]=(100*Math.abs(v)).toFixed(0)}return r}}},o=r(23),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"level"},[t.attack?r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading has-text-weight-bold"},[t._v("Attack")]),t._v(" "),r("p",{staticClass:"is-size-3 card-shape",class:[t.suitColor(t.attack.suit)]},[t._v("\n                    "+t._s(t.cardUnicode(t.attack.card_id))+"\n                ")])])]):t._e(),t._v(" "),t.contract?r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading has-text-weight-bold"},[t._v("NS / EW Trick Target %")]),t._v(" "),r("p",{staticClass:"is-size-3"},[r("span",[t._v(t._s(t.targetTricksPerc["north-south"])+"%")]),t._v(" "),r("span",{staticClass:"has-text-weight-light"},[t._v("-")]),t._v(" "),r("span",[t._v(t._s(t.targetTricksPerc["east-west"])+"%")])])])]):t._e(),t._v(" "),t.contract?r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading has-text-weight-bold"},[t._v("NS / EW Tricks")]),t._v(" "),r("p",{staticClass:"is-size-3"},[r("span",[t._v(t._s(t.teamTricks["north-south"]))]),t._v(" "),r("span",{staticClass:"has-text-weight-light"},[t._v("-")]),t._v(" "),r("span",[t._v(t._s(t.teamTricks["east-west"]))])])])]):t._e(),t._v(" "),r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading has-text-weight-bold"},[t._v("Time")]),t._v(" "),r("p",{staticClass:"has-text-weight-light is-size-3"},[t._v(t._s(t.gameTime))])])]),t._v(" "),t.contract?r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading has-text-weight-bold"},[t._v("NS / EW Trick Target")]),t._v(" "),r("p",{staticClass:"is-size-3"},[r("span",[t._v(t._s(t.targetTricks["north-south"]))]),t._v(" "),r("span",{staticClass:"has-text-weight-light"},[t._v("-")]),t._v(" "),r("span",[t._v(t._s(t.targetTricks["east-west"]))])])])]):t._e(),t._v(" "),t.contract?r("div",{staticClass:"level-item has-text-centered"},[r("div",[r("p",{staticClass:"heading has-text-weight-bold"},[t._v("Contract "+t._s(t.contract.player_id))]),t._v(" "),r("p",{staticClass:"is-size-3"},[r("strong",[t._v(t._s(t.contract.value))]),t._v(" "),r("strong",{staticClass:"card-suit is-uppercase",class:[t.suitColor(t.contract.trump)]},[t._v(t._s(t.suitSymbol(t.contract.trump)))]),t._v(" "),t.contract.double?r("small",{staticClass:"has-text-danger-dark has-text-weight-bold"},[t._v("X")]):t._e(),t._v(" "),t.contract.redouble?r("small",{staticClass:"has-text-info-dark has-text-weight-bold"},[t._v("XX")]):t._e()])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports}}]);