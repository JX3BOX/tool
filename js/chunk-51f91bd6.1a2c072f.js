(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51f91bd6"],{"0b64":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("AppLayout",{attrs:{slug:"design",icon:"icons",name:"设计资源",hasRight:!1},scopedSlots:t._u([{key:"left",fn:function(){return[e("Nav")]},proxy:!0}])},[e("div",{staticClass:"m-archive-box"},[e("router-view")],1)])},o=[],i=n("dead"),u=(n("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-list-nav"},[e("div",{staticClass:"m-nav-group"},t._l(t.menu,(function(n,a){return e("router-link",{key:a,staticClass:"u-item",class:{on:t.isActive(n)},attrs:{to:{name:n.routeName}}},[e("i",{class:n.icon}),e("span",{staticClass:"u-text"},[t._v(t._s(n.name))])])})),1)])}),s=[],r=(n("65c2"),{name:"list_nav",props:[],data:function(){return{menu:[{icon:"el-icon-grape",name:"剑三图标库",routeName:"icon"},{icon:"el-icon-orange",name:"剑三表情包",routeName:"emotion"},{icon:"el-icon-cherry",name:"魔盒矢量库",routeName:"vector"},{icon:"el-icon-watermelon",name:"魔盒壁纸库",routeName:"wallpaper"}]}},methods:{isActive:function(t,e){return t.routeName==this.$route.name},getIcon:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".png";return n("a9ba")("./"+t+e)}}}),c=r,l=(n("fd29"),n("2877")),f=Object(l["a"])(c,u,s,!1,null,null,null),p=f.exports,d={name:"Design",components:{AppLayout:i["a"],Nav:p},data:function(){return{}},computed:{},methods:{},mounted:function(){document.title="设计资源 - JX3BOX"}},m=d,h=(n("5975"),Object(l["a"])(m,a,o,!1,null,null,null));e["default"]=h.exports},"1b68":function(t,e,n){"use strict";n("8437")},5975:function(t,e,n){"use strict";n("88a3")},8437:function(t,e,n){},"88a3":function(t,e,n){},9198:function(t,e,n){},b360:function(t){t.exports=JSON.parse('{"database":{"title":"剑三数据库"}}')},dead:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-layout p-layout--app"},[e("Header"),e("Breadcrumb",{attrs:{name:t.title,icon:"jx3dat",slug:"tool",root:t.root,feedbackEnable:!0,crumbEnable:!1}}),t.hasLeft?e("LeftSidebar",[t._t("left")],2):t._e(),e("Main",{class:t.className,attrs:{withoutRight:!t.hasRight}},[t._t("default"),e("RightSidebar",[t._t("right")],2),e("Footer")],2)],1)},o=[],i=(n("b0c0"),n("65c2")),u=n("b360"),s={name:"AppLayout",props:{slug:{type:String,default:""},icon:{type:String,default:""},className:{type:String,default:""},name:{type:String,default:""},hasRight:{type:Boolean,default:!0},hasLeft:{type:Boolean,default:!0}},computed:{root:function(){return"/app/".concat(this.slug)},logo:function(){var t=this.icon||this.slug;return i.__imgPath+"image/box/"+t+".svg"},title:function(){var t;return(null===(t=u[this.slug])||void 0===t?void 0:t.title)||this.name}}},r=s,c=(n("1b68"),n("2877")),l=Object(c["a"])(r,a,o,!1,null,null,null);e["a"]=l.exports},fd29:function(t,e,n){"use strict";n("9198")}}]);
//# sourceMappingURL=chunk-51f91bd6.1a2c072f.js.map