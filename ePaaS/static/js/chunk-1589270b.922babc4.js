(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1589270b"],{2423:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return u}));var a=n("b775");function o(e){return Object(a["a"])({url:"/vue-element-admin/article/list",method:"get",params:e})}function i(e){return Object(a["a"])({url:"/vue-element-admin/article/detail",method:"get",params:{id:e}})}function l(e){return Object(a["a"])({url:"/vue-element-admin/article/pv",method:"get",params:{pv:e}})}function r(e){return Object(a["a"])({url:"/vue-element-admin/article/create",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/vue-element-admin/article/update",method:"post",data:e})}},"5fb3e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",[n("FilenameOption",{model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),e._v(" "),n("AutoWidthOption",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}}),e._v(" "),n("BookTypeOption",{model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}}),e._v(" "),n("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v("\n      Export Excel\n    ")]),e._v(" "),n("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[n("el-tag",{attrs:{type:"info"}},[e._v("Documentation")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Title"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.pageviews)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",[e._v(e._s(e._f("parseTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])})],1)],1)},o=[],i=n("2423"),l=n("ed08"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[e._v("Filename: ")]),e._v(" "),n("el-input",{staticStyle:{width:"345px"},attrs:{placeholder:"Please enter the file name (default excel-list)","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}})],1)},u=[],c={props:{value:{type:String,default:""}},computed:{filename:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},s=c,d=n("e90a"),p=Object(d["a"])(s,r,u,!1,null,null,null),f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("Cell Auto-Width: ")]),e._v(" "),n("el-radio-group",{model:{value:e.autoWidth,callback:function(t){e.autoWidth=t},expression:"autoWidth"}},[n("el-radio",{attrs:{label:!0,border:""}},[e._v("\n      True\n    ")]),e._v(" "),n("el-radio",{attrs:{label:!1,border:""}},[e._v("\n      False\n    ")])],1)],1)},h=[],v={props:{value:{type:Boolean,default:!0}},computed:{autoWidth:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},b=v,g=Object(d["a"])(b,m,h,!1,null,null,null),_=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("label",{staticClass:"radio-label"},[e._v("Book Type: ")]),e._v(" "),n("el-select",{staticStyle:{width:"120px"},model:{value:e.bookType,callback:function(t){e.bookType=t},expression:"bookType"}},e._l(e.options,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)},k=[],x={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["xlsx","csv","txt"]}},computed:{bookType:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},w=x,T=Object(d["a"])(w,y,k,!1,null,null,null),O=T.exports,j={name:"ExportExcel",components:{FilenameOption:f,AutoWidthOption:_,BookTypeOption:O},data:function(){return{list:null,listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx"}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(i["c"])().then((function(t){e.list=t.data.items,e.listLoading=!1}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([n.e("chunk-87d7ce5a"),n.e("chunk-45f5f85e"),n.e("chunk-4e4e74e6"),n.e("chunk-18a5a462")]).then(n.bind(null,"4bf8d")).then((function(t){var n=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageviews","display_time"],o=e.list,i=e.formatJson(a,o);t.export_json_to_excel({header:n,data:i,filename:e.filename,autoWidth:e.autoWidth,bookType:e.bookType}),e.downloadLoading=!1}))},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return"timestamp"===e?Object(l["f"])(t[e]):t[e]}))}))}}},S=j,W=(n("c1d9"),Object(d["a"])(S,a,o,!1,null,null,null));t["default"]=W.exports},b775:function(e,t,n){"use strict";var a=n("f753"),o=n.n(a),i=n("2ca7"),l=n("4360"),r=n("5f87"),u=o.a.create({baseURL:"/prod-api",timeout:5e3});u.interceptors.request.use((function(e){return l["a"].getters.token&&(e.headers["X-Token"]=Object(r["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(i["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||i["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){l["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(i["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=u},c1d9:function(e,t,n){"use strict";var a=n("e0ef"),o=n.n(a);o.a},e0ef:function(e,t,n){}}]);