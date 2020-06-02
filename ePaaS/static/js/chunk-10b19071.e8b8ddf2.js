(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10b19071"],{"233f":function(e,t,a){},"3e9b":function(e,t,a){},"67b3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"platformRole"}},[a("div",{staticClass:"searchWord"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("添加角色")]),e._v(" "),a("el-input",{staticStyle:{display:"inline-block",width:"212px"},attrs:{placeholder:"请输入角色名搜索","suffix-icon":"el-icon-search"},on:{input:e.handleFilter},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),a("div",{staticClass:"table-container"},[a("platSettingTable",{ref:"roleTable",attrs:{height:750,border:e.border,data:e.pageResult,columns:e.columns},on:{findPage:e.findPage,handleEdit:e.handleEdit,handleDelete:e.handleDelete}})],1),e._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"roleDialog",attrs:{title:e.operation?"新建角色":"修改角色名称",width:"20%",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,"label-width":"auto",rules:e.dataFormRules,"label-position":"right"}},[a("div",{staticClass:"row row-0"},[a("el-form-item",{attrs:{label:"角色名称",prop:"ROLE_NAME"}},[a("el-input",{attrs:{disabled:!1,"auto-complete":"请输入角色名称"},model:{value:e.dataForm.ROLE_NAME,callback:function(t){e.$set(e.dataForm,"ROLE_NAME",t)},expression:"dataForm.ROLE_NAME"}})],1)],1),e._v(" "),a("div",{staticClass:"row row-1"},[a("el-form-item",{attrs:{label:"扩展信息",prop:"EXTENDS"}},[a("el-input",{attrs:{disabled:!1,"auto-complete":"请输入扩展信息"},model:{value:e.dataForm.EXTENDS,callback:function(t){e.$set(e.dataForm,"EXTENDS",t)},expression:"dataForm.EXTENDS"}})],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{loading:e.editLoading,type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData("dataForm")}}},[e._v("保存")]),e._v(" "),a("el-button",{nativeOn:{click:function(t){return e.resetForm("dataForm")}}},[e._v("取消")])],1)],1)],1)},i=[],l=(a("7f7f"),a("20d6"),a("d03d")),o=a("a48f");function r(e){return Object(o["a"])({url:"/setting/roleManage/findRoleListByPage",method:"post",params:e})}function s(e){return Object(o["a"])({url:"/setting/roleManage/updateRole",method:"post",params:e})}function u(e){return Object(o["a"])({url:"/setting/roleManage/createRole",method:"post",params:e})}function d(e){return Object(o["a"])({url:"/setting/roleManage/deleteRole",method:"post",params:e})}var c={components:{platSettingTable:l["a"]},data:function(){return{filters:{name:""},border:!0,columns:[],pageRequest:{pageNum:1,pageSize:10},pageResult:{},operation:!1,dialogVisible:!1,editLoading:!1,dialogStatus:"",dataFormRules:{ROLE_NAME:[{required:!0,message:"请输入角色名称",trigger:"blur"}]},dataForm:{ROLE_ID:null,ROLE_NAME:"",EXTENDS:""}}},computed:{},mounted:function(){this.initColumns()},methods:{initColumns:function(){this.columns=[{prop:"ROLE_ID",label:"角色编号",minWidth:50,show:!0},{prop:"ROLE_NAME",label:"角色名称",minWidth:50,show:!0},{prop:"EXTENDS",label:"扩展",minWidth:50,show:!0}]},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&u(e.dataForm).then((function(t){e.dataForm.ROLE_ID=t.newID,e.pageResult.content.unshift(e.dataForm),e.pageResult.totalSize+=1,e.dialogVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})).catch((function(e){console.log(e)}))}))},updateData:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;s(t.dataForm).then((function(e){var a=t.pageResult.content.findIndex((function(e){return e.id===t.dataForm.id}));t.pageResult.content.splice(a,1,t.dataForm),t.dialogVisible=!1,t.$notify({title:"成功",message:"更新角色成功！",type:"success",duration:2e3})})).catch((function(e){console.log(e)}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.dialogVisible=!1},findPage:function(e){var t=this;null!==e&&(this.pageRequest=e.pageRequest),this.pageRequest["filterRoleName"]=this.filters.name,r(this.pageRequest).then((function(e){t.pageResult.content=e.roleList,t.pageResult.totalSize=e.roleListNumber})).then(null!=e?e.callback:"")},findUserRoles:function(){var e=this;this.$api.role.findAll().then((function(t){e.roles=t.data}))},handleAdd:function(){this.dialogStatus="create",this.dialogVisible=!0,this.operation=!0,this.dataForm={}},handleEdit:function(e){var t=this;this.dialogStatus="edit",this.dialogVisible=!0,this.operation=!1,this.dataForm=Object.assign({},e.row),this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e){var t=this;d(e.rowInfor.row).then((function(a){t.pageResult.content.splice(e.rowInfor.index,1),t.pageResult.totalSize-=1,e.callback(a)})).catch((function(e){console.log(e)}))},handleFilter:function(){this.$refs.roleTable.refreshPageRequest(this.pageRequest.pageNum)}}},h=c,p=(a("6add"),a("2877")),g=Object(p["a"])(h,n,i,!1,null,"7c163eba",null);t["default"]=g.exports},"6add":function(e,t,a){"use strict";var n=a("233f"),i=a.n(n);i.a},"8cbc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-button",{attrs:{size:e.size,type:e.type,icon:e.icon,loading:e.loading,disabled:e.perms},on:{click:e.handleClick}},[e._v("\n  "+e._s(e.label)+"\n")])},i=[],l={name:"PlatSettingButton",props:{label:{type:String,default:""},icon:{type:String,default:""},size:{type:String,default:"mini"},type:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!0},perms:{type:String,default:null}},data:function(){return{}},mounted:function(){},methods:{handleClick:function(){this.$emit("click",{})}}},o=l,r=a("2877"),s=Object(r["a"])(o,n,i,!1,null,null,null);t["a"]=s.exports},d03d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"table-container"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","font-size":"14px"},attrs:{data:e.data.content,"highlight-current-row":e.highlightCurrentRow,border:e.border,stripe:e.stripe,"show-overflow-tooltip":e.showOverflowTooltip,"max-height":e.maxHeight,height:e.height,size:e.size,align:e.align,"header-cell-style":{background:"#F1F4FD"}},on:{"selection-change":e.selectionChange,"current-change":e.handleCurrentChange}},[e._l(e.columns,(function(t){return[t.show?a("el-table-column",{key:t.prop,attrs:{prop:t.prop,label:t.label,width:t.width,"min-width":t.minWidth,sortable:null!=t.sortable&&t.sortable,"header-align":"center",align:"center"}}):e._e()]})),e._v(" "),e.showOperation?a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("platSettingButton",{attrs:{icon:"el-icon-edit",label:"编辑",size:e.size},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}}),e._v(" "),a("platSettingButton",{attrs:{icon:"el-icon-delete",label:"删除",size:e.size,type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}})]}}],null,!1,2036310822)}):e._e()],2),e._v(" "),a("div",{staticClass:"toolbar"},[a("el-pagination",{attrs:{layout:"total, prev, pager, next, jumper","current-page":e.pageRequest.pageNum,"page-size":e.pageRequest.pageSize,total:e.data.totalSize},on:{"update:total":function(t){return e.$set(e.data,"totalSize",t)},"current-change":e.refreshPageRequest}})],1)],1)},i=[],l=(a("c5f6"),a("8cbc")),o={name:"PlatSettingTable",components:{platSettingButton:l["a"]},props:{columns:{type:Array,default:null},data:{type:Object,default:null},size:{type:String,default:"mini"},align:{type:String,default:"left"},maxHeight:{type:Number,default:800},height:{type:Number,default:250},showOperation:{type:Boolean,default:!0},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!0},highlightCurrentRow:{type:Boolean,default:!0},showOverflowTooltip:{type:Boolean,default:!0},showBatchDelete:{type:Boolean,default:!0}},data:function(){return{pageRequest:{pageNum:1,pageSize:15},loading:!1,selections:[]}},mounted:function(){this.refreshPageRequest(1)},methods:{refreshPageRequest:function(e){this.pageRequest.pageNum=e,this.findPage()},findPage:function(){var e=this;this.loading=!0;var t=function(t){e.loading=!1};this.$emit("findPage",{pageRequest:this.pageRequest,callback:t})},selectionChange:function(e){this.selections=e,this.$emit("selectionChange",{selections:e})},handleCurrentChange:function(e){this.$emit("handleCurrentChange",{val:e})},handleEdit:function(e,t){this.$emit("handleEdit",{index:e,row:t})},handleDelete:function(e,t){this.delete({index:e,row:t})},delete:function(e){var t=this;this.$confirm("确认删除所选内容？","提示",{type:"warning"}).then((function(){var a=function(e){1===e.state?(t.$message({message:"删除成功",type:"success"}),t.findPage()):t.$message({message:"删除失败",type:"error"}),t.loading=!1};t.$emit("handleDelete",{rowInfor:e,callback:a}),t.loading=!1})).catch((function(){}))}}},r=o,s=(a("de9b"),a("2877")),u=Object(s["a"])(r,n,i,!1,null,null,null);t["a"]=u.exports},de9b:function(e,t,a){"use strict";var n=a("3e9b"),i=a.n(n);i.a}}]);