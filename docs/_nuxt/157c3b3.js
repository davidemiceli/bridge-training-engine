(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{536:function(t,e,n){var r=n(7);t.exports=r(1..valueOf)},537:function(t,e,n){"use strict";var r=n(19),o=n(2),c=n(7),l=n(94),d=n(28),f=n(23),v=n(172),m=n(63),_=n(132),N=n(389),C=n(9),h=n(77).f,I=n(55).f,E=n(24).f,A=n(536),k=n(538).trim,x="Number",w=o.Number,S=w.prototype,y=o.TypeError,F=c("".slice),P=c("".charCodeAt),T=function(t){var e=N(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,o,c,l,d,code,f=N(t,"number");if(_(f))throw y("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=P(f,0))||45===e){if(88===(n=P(f,2))||120===n)return NaN}else if(48===e){switch(P(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=F(f,2)).length,d=0;d<l;d++)if((code=P(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(x,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var M,R=function(t){var e=arguments.length<1?0:w(T(t)),n=this;return m(S,n)&&C((function(){A(n)}))?v(Object(e),n,R):e},V=r?h(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;V.length>G;G++)f(w,M=V[G])&&!f(R,M)&&E(R,M,I(w,M));R.prototype=S,S.constructor=R,d(o,x,R)}},538:function(t,e,n){var r=n(7),o=n(37),c=n(18),l=n(539),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},539:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},551:function(t,e,n){"use strict";n.r(e);n(537),n(1);var r={props:{taskName:String,isActive:Boolean,donePerc:Number,doneSteps:Number},methods:{cancelClicked:function(){this.isActive=!1,this.$emit("cancelClicked")}},computed:{}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal",class:[t.isActive?"is-active":""]},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title icon-text"},[n("span",{staticClass:"icon material-icons"},[t._v("settings_suggest")]),t._v(" "),n("span",[t._v(t._s(t.taskName)+" is running...")])])]),t._v(" "),n("section",{staticClass:"modal-card-body is-size-5"},[n("p",[t._v("A total of "+t._s(t.doneSteps)+" steps have currently been performed until now.")]),t._v(" "),n("div",{staticClass:"is-flex is-align-items-center mt-5"},[n("progress",{staticClass:"progress is-small is-success m-0",attrs:{max:"100"},domProps:{value:t.donePerc}},[t._v(t._s(t.donePerc)+"%")]),t._v(" "),n("div",{staticClass:"ml-3 is-size-7 is-italic has-text-weight-bold"},[t._v(t._s(t.donePerc)+"%")])])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button is-medium",on:{click:t.cancelClicked}},[t._v("Cancel")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(133).default})}}]);