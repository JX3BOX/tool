(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bc8cedc"],{"0d72":function(t,e,s){"use strict";s("0d7f")},"0d7f":function(t,e,s){},"2e3b":function(t,e,s){},"3ee0":function(t){t.exports=JSON.parse('{"1":"工具资源","2":"技术教程","3":"操作指南","4":"帮助文档"}')},"9ae9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("SingleLayout",[e("single")],1)},n=[],i=s("1e10"),o=function(){var t=this,e=t._self._c;return e("singlebox",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{post:t.post,stat:t.stat},on:{extendUpdate:t.updateExtend}},[e("div",{staticClass:"u-meta u-sub-block",attrs:{slot:"single-header"},slot:"single-header"},[e("em",{staticClass:"u-label"},[t._v("类型")]),e("span",{staticClass:"u-value"},[t._v(" "+t._s(t.post_subtype)+" ")])]),e("single-meta",{attrs:{post:t.post}})],1)},l=[],u=(s("d3b7"),s("f2a6")),r=(s("b0c0"),function(){var t=this,e=t._self._c;return t.need_format?e("div",{staticClass:"m-single-meta m-tool-meta"},[e("div",{staticClass:"m-single-meta__main"},t._l(t.data,(function(s){return e("div",{key:s.name,staticClass:"m-meta-item"},[1==s.mode?[e("span",{staticClass:"u-name"},[e("i",{staticClass:"el-icon-box"}),t._v(t._s(s.name||"暂无资源"))]),e("span",{staticClass:"u-remark"},[t._v(t._s(s.remark||""))]),e("a",{directives:[{name:"show",rawName:"v-show",value:s.file,expression:"item.file"}],staticClass:"el-button el-button--primary el-button--small",attrs:{href:s.file,target:"_blank"}},[e("i",{staticClass:"el-icon-download"}),e("span",[t._v("本地下载")])])]:t._e(),0==s.mode?[e("span",{staticClass:"u-name"},[e("i",{staticClass:"el-icon-box"}),t._v(t._s(s.name||"暂无资源"))]),e("span",{staticClass:"u-remark"},[t._v(t._s(s.remark||""))]),e("a",{directives:[{name:"show",rawName:"v-show",value:s.file,expression:"item.file"}],staticClass:"el-button el-button--primary el-button--small",attrs:{href:s.file,target:"_blank"}},[e("i",{staticClass:"el-icon-link"}),e("span",[t._v("前往下载")])])]:t._e()],2)})),0),e("div",{staticClass:"m-single-meta__side"},[t.isTool?e("el-alert",{staticClass:"m-single-notice",attrs:{title:"特别说明",type:"warning",description:"请严格保护个人财产安全，勿轻信任何收费服务，本站不对作者提供的下载资源做任何担保，凡是不受官方认可、或疑似外挂，以及不符合站内创作公约及发布规范的作品予以删除处理，欢迎广大玩家监督与举报。",closable:!1}}):t._e(),e("a",{staticClass:"u-report el-button el-button--default is-plain el-button--small",attrs:{href:t.feedback}},[e("i",{staticClass:"el-icon-warning-outline"}),t._v(" 举报")])],1)]):t._e()}),c=[],d={name:"single_meta",props:{post:{type:Object,default:function(){}}},data:function(){return{feedback:"/feedback?refer="+encodeURIComponent(window.location.href)}},computed:{isTool:function(){var t;return"1"==(null===(t=this.post)||void 0===t?void 0:t.post_subtype)},data:function(){var t,e;return(null===(t=this.post)||void 0===t||null===(e=t.post_meta)||void 0===e?void 0:e.data)||[]},need_format:function(){return"1"==this.post.post_subtype||"2"==this.post.post_subtype}},methods:{}},p=d,m=s("2877"),f=Object(m["a"])(p,r,c,!1,null,null,null),b=f.exports,_=s("29c2"),v=s("9616"),h=s("3ee0"),g=s("1fb9"),C=s("85e4"),w={name:"single",data:function(){return{loading:!1,post:{},stat:{},id:Object(C["getAppID"])()}},computed:{post_subtype:function(){var t,e=null===(t=this.post)||void 0===t?void 0:t.post_subtype;return e?h[e]:"-"},isTool:function(){var t;return"1"==(null===(t=this.post)||void 0===t?void 0:t.post_subtype)}},methods:{updateExtend:function(t){this.$store.state.extend=t}},mounted:function(){var t=this;this.id&&(this.loading=!0,Object(_["b"])(this.id).then((function(e){var s;t.post=t.$store.state.post=e.data.data,t.$store.state.id=t.id,t.$store.state.user_id=null===(s=t.post)||void 0===s?void 0:s.post_author,document.title=t.post.post_title})).finally((function(){t.loading=!1})),Object(v["a"])(g["a"],this.id).then((function(e){t.stat=t.$store.state.stat=e.data})),Object(v["b"])(g["a"],this.id))},components:{singlebox:u["a"],"single-meta":b}},k=w,x=(s("f7b3"),Object(m["a"])(k,o,l,!1,null,null,null)),y=x.exports,O={name:"App",components:{SingleLayout:i["a"],single:y},computed:{user_id:function(){return this.$store.state.user_id}}},j=O,$=(s("0d72"),Object(m["a"])(j,a,n,!1,null,null,null));e["default"]=$.exports},f7b3:function(t,e,s){"use strict";s("2e3b")}}]);
//# sourceMappingURL=chunk-4bc8cedc.80f2125a.js.map