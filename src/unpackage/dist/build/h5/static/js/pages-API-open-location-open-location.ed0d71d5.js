(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-open-location-open-location"],{"01bc":function(t,i,n){var a=n("24fb");i=a(!1),i.push([t.i,".uni-list-cell-left[data-v-597027c2]{padding:0 %?30?%}",""]),t.exports=i},"37f5":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return a}));var a={pageHead:n("7814").default},e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-form",{on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.openLocation.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("经度")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39747",name:"longitude"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("纬度")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.9085",name:"latitude"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("位置名称")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})],1)],1),n("v-uni-view",{staticClass:"uni-list-cell"},[n("v-uni-view",{staticClass:"uni-list-cell-left"},[n("v-uni-view",{staticClass:"uni-label"},[t._v("详细位置")])],1),n("v-uni-view",{staticClass:"uni-list-cell-db"},[n("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[n("v-uni-button",{attrs:{type:"primary",formType:"submit"}},[t._v("查看位置")])],1)],1)],1)],1)],1)},s=[]},"753f":function(t,i,n){"use strict";n.r(i);var a=n("8045"),e=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);i["default"]=e.a},8045:function(t,i,n){"use strict";n("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{title:"openLocation"}},methods:{openLocation:function(t){console.log(t);var i=t.detail.value;uni.openLocation({longitude:Number(i.longitude),latitude:Number(i.latitude),name:i.name,address:i.address})}}};i.default=a},"9d0b":function(t,i,n){"use strict";n.r(i);var a=n("37f5"),e=n("753f");for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);n("cdfa");var u,l=n("f0c5"),c=Object(l["a"])(e["default"],a["b"],a["c"],!1,null,"597027c2",null,!1,a["a"],u);i["default"]=c.exports},a7f9:function(t,i,n){var a=n("01bc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("1a959b7e",a,!0,{sourceMap:!1,shadowMode:!1})},cdfa:function(t,i,n){"use strict";var a=n("a7f9"),e=n.n(a);e.a}}]);