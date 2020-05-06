(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7d09ec4"],{"3e2e":function(e,t,r){"use strict";var n=r("ae40"),o=r.n(n);o.a},ae40:function(e,t,r){},b775:function(e,t,r){"use strict";var n=r("f753"),o=r.n(n),i=r("2ca7"),a=r("4360"),s=r("5f87"),c=o.a.create({baseURL:"/prod-api",timeout:5e3});c.interceptors.request.use((function(e){return a["a"].getters.token&&(e.headers["X-Token"]=Object(s["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 2e4!==t.code?(Object(i["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||i["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){a["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(i["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},d78e:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v("New Role")]),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.key)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.handleEdit(t)}}},[e._v("Edit")]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDelete(t)}}},[e._v("Delete")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Menus"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)},o=[],i=(r("5ab2"),r("e10e"),r("309f"),r("0b53"),r("06a2"),r("ec25"),r("2b45"),r("b081")),a=(r("cc57"),r("ed63"),r("8cf2"),r("2ef9")),s=(r("6d57"),r("b449"),r("17d6")),c=r("6266"),l=r.n(c),u=r("ed08"),d=r("b775");function h(){return Object(d["a"])({url:"/vue-element-admin/routes",method:"get"})}function f(){return Object(d["a"])({url:"/vue-element-admin/roles",method:"get"})}function p(e){return Object(d["a"])({url:"/vue-element-admin/role",method:"post",data:e})}function g(e,t){return Object(d["a"])({url:"/vue-element-admin/role/".concat(e),method:"put",data:t})}function m(e){return Object(d["a"])({url:"/vue-element-admin/role/".concat(e),method:"delete"})}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=w(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function w(e,t){if(e){if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O={key:"",name:"",description:"",routes:[]},j={data:function(){return{role:Object.assign({},O),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,this.serviceRoutes=t.data,this.routes=this.generateRoutes(t.data);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getRoles:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,this.rolesList=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),generateRoutes:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=[],o=y(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(!i.hidden){var a=this.onlyOneShowingChild(i.children,i);i.children&&a&&!i.alwaysShow&&(i=a);var s={path:l.a.resolve(r,i.path),title:i.meta&&i.meta.title};i.children&&(s.children=this.generateRoutes(i.children,s.path)),n.push(s)}}}catch(c){o.e(c)}finally{o.f()}return n},generateArr:function(e){var t=this,r=[];return e.forEach((function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(Object(a["a"])(r),Object(a["a"])(n)))}})),r},handleAddRole:function(){this.role=Object.assign({},O),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(u["b"])(e.row),this.$nextTick((function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1}))},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m(n.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},generateTree:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=arguments.length>2?arguments[2]:void 0,o=[],i=y(e);try{for(i.s();!(t=i.n()).done;){var a=t.value,s=l.a.resolve(r,a.path);a.children&&(a.children=this.generateTree(a.children,s,n)),(n.includes(s)||a.children&&a.children.length>=1)&&o.push(a)}}catch(c){i.e(c)}finally{i.f()}return o},confirmRole:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,n,o,i,a,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="edit"===this.dialogType,r=this.$refs.tree.getCheckedKeys(),this.role.routes=this.generateTree(Object(u["b"])(this.serviceRoutes),"/",r),!t){e.next=16;break}return e.next=6,g(this.role.key,this.role);case 6:n=0;case 7:if(!(n<this.rolesList.length)){e.next=14;break}if(this.rolesList[n].key!==this.role.key){e.next=11;break}return this.rolesList.splice(n,1,Object.assign({},this.role)),e.abrupt("break",14);case 11:n++,e.next=7;break;case 14:e.next=22;break;case 16:return e.next=18,p(this.role);case 18:o=e.sent,i=o.data,this.role.key=i.key,this.rolesList.push(this.role);case 22:a=this.role,s=a.description,c=a.key,l=a.name,this.dialogVisible=!1,this.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(c,"</div>\n            <div>Role Name: ").concat(l,"</div>\n            <div>Description: ").concat(s,"</div>\n          "),type:"success"});case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,n=e.filter((function(e){return!e.hidden}));return 1===n.length?(r=n[0],r.path=l.a.resolve(t.path,r.path),r):0===n.length&&(r=v({},t,{path:"",noShowingChildren:!0}),r)}}},R=j,x=(r("3e2e"),r("e90a")),_=Object(x["a"])(R,n,o,!1,null,"06a995ff",null);t["default"]=_.exports}}]);