(function(t){function e(e){for(var a,i,l=e[0],s=e[1],c=e[2],d=0,m=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/budget-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},1814:function(t,e,n){"use strict";var a=n("ea37"),o=n.n(a);o.a},"34de":function(t,e,n){"use strict";var a=n("dfce"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v(t._s(t.headerText))]),n("Form"),n("TotalBalance"),n("BudgetList")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"budget-list-wrap"},[n("ElCard",[t.isNotEmpty?[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.header))]),n("BudgetSortMenu",{on:{"sort-list":t.sortList}})],1),t._l(t.transactionsFilteredList,(function(t,e){return n("BudgetListItem",{key:e,attrs:{listItem:t}})}))]:[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v(t._s(t.header))])]),n("ElAlert",{attrs:{type:"info",title:t.titleEmpty,closable:!1}})]],2)],1)},l=[],s=(n("b64b"),n("5530")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item"},["INCOME"===t.listItem.type?[n("span",{staticClass:"budget-icon"},[n("i",{staticClass:"el-icon-top",style:{color:t.textColor}})])]:[n("span",{staticClass:"bidget-icon"},[n("i",{staticClass:"el-icon-bottom",style:{color:t.textColor}})])],n("span",{staticClass:"budget-comment"},[t._v(t._s(t.listItem.comment))]),n("span",{staticClass:"budget-value",style:{color:t.textColor}},[t._v(t._s(t.listItem.value))]),n("ElButton",{attrs:{type:"danger",size:"mini"},on:{click:function(e){t.dialogVisible=!0}}},[t._v(t._s(t.deleteButtonText))]),n("ElDialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,"custom-class":"dialog-container"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v(t._s(t.dialogConfirmation))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("ElButton",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.dialogButtonCancel))]),n("ElButton",{attrs:{type:"primary"},on:{click:function(e){return t.removeItem(t.listItem.id)}}},[t._v(t._s(t.dialogButtonConfirm))])],1)])],2)},u=[],d=n("2f62"),m={name:"BudgetListItem",props:{listItem:{type:Object,default:function(){return{}}}},data:function(){return{deleteButtonText:"Delete",dialogVisible:!1,dialogTitle:"Please confirm your action",dialogButtonCancel:"Cancel",dialogButtonConfirm:"Confirm"}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])("budget",["deleteTransaction"])),{},{removeItem:function(t){this.dialogVisible=!1,this.deleteTransaction(t)}}),computed:{dialogConfirmation:function(){return"Are you sure you want to delete ".concat(this.listItem.comment)},textColor:function(){var t="green";return"INCOME"!==this.listItem.type?"red":t}}},f=m,p=(n("e867"),n("2877")),b=Object(p["a"])(f,c,u,!1,null,"a5d813aa",null),v=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ElDropdown",{on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.sortTitle)+" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("ElDropdownMenu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("ElDropdownItem",{attrs:{command:"INCOME"}},[t._v("Incomes")]),n("ElDropdownItem",{attrs:{command:"OUTCOME"}},[t._v("Outcomes")]),n("ElDropdownItem",{attrs:{command:"ALL"}},[t._v("All")])],1)],1)},h=[],O={name:"BudgetSortMenu",data:function(){return{sortTitle:"Sort by"}},methods:{handleCommand:function(t){this.$emit("sort-list",t)}}},E=O,_=(n("75ef"),Object(p["a"])(E,g,h,!1,null,"4d5793eb",null)),y=_.exports,C={name:"BudgetList",components:{BudgetListItem:v,BudgetSortMenu:y},data:function(){return{header:"Budget List",titleEmpty:"Empty List"}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])("budget",["changeSortingName"])),{},{sortList:function(t){return this.changeSortingName(t)}}),computed:Object(s["a"])(Object(s["a"])({},Object(d["c"])("budget",["transactionsList","transactionsFilteredList"])),{},{isNotEmpty:function(){return Boolean(Object.keys(this.transactionsList).length)}})},I=C,T=(n("6acc"),Object(p["a"])(I,i,l,!1,null,"30bd4718",null)),j=T.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"total-value",style:{color:t.textColor}},[t._v(" "+t._s(t.balanceText)+" ")])},x=[],N=(n("99af"),{name:"TotalBalance",data:function(){return{text:"Balance:"}},computed:Object(s["a"])(Object(s["a"])({},Object(d["c"])("budget",["balance"])),{},{textColor:function(){var t="";return t=this.balance>0?"green":0===this.balance?"black":"red",t},balanceText:function(){return"".concat(this.text," ").concat(this.balance)}})}),D=N,B=(n("1814"),Object(p["a"])(D,w,x,!1,null,"6114d8d2",null)),S=B.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ElCard",{staticClass:"form-card"},[n("ElForm",{ref:"addItemForm",attrs:{model:t.formData,"status-icon":"",rules:t.rules}},[n("ElFormItem",{attrs:{label:"Type",prop:"type"}},[n("ElSelect",{staticClass:"type-select",attrs:{placeholder:t.selectPlaceHolder},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[n("ElOption",{attrs:{label:"Income",value:"INCOME"}}),n("ElOption",{attrs:{label:"Outcome",value:"OUTCOME"}})],1)],1),n("ElFormItem",{attrs:{label:"Comments",prop:"comment"}},[n("ElInput",{model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),n("ElFormItem",{attrs:{label:"Value",prop:"value"}},[n("ElInput",{model:{value:t.formData.value,callback:function(e){t.$set(t.formData,"value",t._n(e))},expression:"formData.value"}})],1),n("ElButton",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.buttonFormText))])],1)],1)},A=[],M=(n("a9e3"),n("8ba4"),{name:"Form",data:function(){var t=function(t,e,n){if(!e)return n(new Error("Please input the value different from 0"));setTimeout((function(){Number.isInteger(e)?e<=0?n(new Error("Value must greater than 0")):n():n(new Error("Please input digits"))}),1e3)},e=function(t,e,n){if(!e)return n(new Error("Please leave the comment"));setTimeout((function(){e.length<2?n(new Error("Please provide more information")):n()}),1e3)};return{formData:{type:"INCOME",comment:"",value:0},rules:{type:[{required:!0,message:"Please select type",trigger:"blur"}],comment:[{validator:e,trigger:"blur"}],value:[{validator:t,trigger:"blur"}]},buttonFormText:"Submit",selectPlaceHolder:"Choose type..."}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])("budget",["addNewTransaction"])),{},{onSubmit:function(){var t=this;this.$refs.addItemForm.validate((function(e){e&&(t.addNewTransaction(t.formData),t.$refs.addItemForm.resetFields())}))}})}),F=M,P=(n("34de"),Object(p["a"])(F,L,A,!1,null,"ac42d8bc",null)),k=P.exports,$={name:"App",components:{BudgetList:j,TotalBalance:S,Form:k},data:function(){return{headerText:"My Budget"}}},V=$,R=(n("034f"),Object(p["a"])(V,o,r,!1,null,null,null)),G=R.exports,H=(n("4160"),n("159b"),n("b2d6")),U=n.n(H),J=n("4897"),q=n.n(J),z=(n("377f"),n("5c96")),K=[z["Button"],z["Card"],z["Form"],z["FormItem"],z["Input"],z["Select"],z["Option"],z["Alert"],z["Dialog"],z["Icon"],z["Dropdown"],z["DropdownMenu"],z["DropdownItem"]];q.a.use(U.a),K.forEach((function(t){return a["default"].use(t,{locale:q.a})}));n("4de4"),n("13d5"),n("07ac");var Q={namespaced:!0,state:{list:{},sortingName:{value:"ALL"}},getters:{transactionsList:function(t){var e=t.list;return e},transactionsFilteredList:function(t){var e=t.list,n=t.sortingName;return"ALL"!==n.value?Object.values(e).filter((function(t){return t.type===n.value})).reduce((function(t,e){return t[e.id]=e,t}),{}):e},balance:function(t){var e=t.list;return Object.values(e).reduce((function(t,e){return"OUTCOME"===e.type?t-e.value:t+e.value}),0)}},mutations:{ADD_TRANSACTION:function(t,e){a["default"].set(t.list,e.id,e)},DELETE_TRANSACTION:function(t,e){a["default"].delete(t.list,e)},CHANGE_SORTING_NAME:function(t,e){t.sortingName.value=e}},actions:{addNewTransaction:function(t,e){var n=t.commit,a=Object(s["a"])(Object(s["a"])({},e),{},{id:String(Math.random())});n("ADD_TRANSACTION",a)},deleteTransaction:function(t,e){var n=t.commit;n("DELETE_TRANSACTION",e)},changeSortingName:function(t,e){var n=t.commit;n("CHANGE_SORTING_NAME",e)}}},W=Q;a["default"].use(d["a"]);var X=new d["a"].Store({state:{},mutations:{},actions:{},modules:{budget:W}});a["default"].config.productionTip=!1,new a["default"]({store:X,render:function(t){return t(G)}}).$mount("#app")},6194:function(t,e,n){},"6acc":function(t,e,n){"use strict";var a=n("7954"),o=n.n(a);o.a},"75ef":function(t,e,n){"use strict";var a=n("935c"),o=n.n(a);o.a},7954:function(t,e,n){},"85ec":function(t,e,n){},"935c":function(t,e,n){},dfce:function(t,e,n){},e867:function(t,e,n){"use strict";var a=n("6194"),o=n.n(a);o.a},ea37:function(t,e,n){}});
//# sourceMappingURL=app.a1c508ac.js.map