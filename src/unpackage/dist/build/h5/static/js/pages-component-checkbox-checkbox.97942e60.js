(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox-checkbox"],{"2c19":function(e,t,n){var i=n("3054");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("064b16f2",i,!0,{sourceMap:!1,shadowMode:!1})},3054:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-list-cell[data-v-2e9ca1f9]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}",""]),e.exports=t},"307f":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var i={pageHead:n("7814").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("默认样式")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb",checked:"true"}}),e._v("选中")],1),n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb"}}),e._v("未选中")],1)],1)],1),n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("不同颜色和尺寸的checkbox")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",checked:"true",color:"#FFCC33"}}),e._v("选中")],1),n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",color:"#FFCC33"}}),e._v("未选中")],1)],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("推荐展示样式"),n("v-uni-text",[e._v("\\n使用 uni-list 布局")])],1)],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.items,(function(t){return n("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1),n("v-uni-view",[e._v(e._s(t.name))])],1)})),1)],1)],1)},c=[]},b046:function(e,t,n){"use strict";n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{checkboxChange:function(e){for(var t=this.items,n=e.detail.value,i=0,a=t.length;i<a;++i){var c=t[i];n.indexOf(c.value)>=0?this.$set(c,"checked",!0):this.$set(c,"checked",!1)}}}};t.default=i},d9bb:function(e,t,n){"use strict";n.r(t);var i=n("307f"),a=n("e392");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("f496");var u,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"2e9ca1f9",null,!1,i["a"],u);t["default"]=s.exports},e392:function(e,t,n){"use strict";n.r(t);var i=n("b046"),a=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},f496:function(e,t,n){"use strict";var i=n("2c19"),a=n.n(i);a.a}}]);