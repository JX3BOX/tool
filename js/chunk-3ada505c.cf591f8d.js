(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ada505c"],{"809b":function(t,e,i){"use strict";i.r(e);i("99af"),i("caad"),i("d81d"),i("ac1f"),i("2532"),i("841c");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-maps"},[t.mapId?e("div",{staticClass:"m-map-other"},[e("img",{staticClass:"m-map-other_img",attrs:{src:t.currentMap}})]):e("div",{staticClass:"m-maps-pic"},[e("dragWrap",{attrs:{data:t.scale},on:{change:t.wrapScaleChange}},[e("div",{staticClass:"m-map__world"},[t._l(t.maps,(function(i,a){return[i.szDisplayName.includes("战乱")||i.szDisplayName.includes("乱世")?t._e():e("div",{key:a,staticClass:"u-map",style:"left:".concat(i.Left||0,"px;top:").concat(i.Top||0,"px"),on:{click:function(e){return t.showChild(i,a)},touchstart:function(e){return t.showChild(i,a)}}},[e("div",{staticClass:"u-map-city_name",style:{transform:"scale(".concat(t.worldMapTextScale,")")}},[e("img",{staticClass:"u-item_bg",style:{opacity:t.visible&&t.selectMapOptions.actId==a?1:0},attrs:{src:t.getIcon("newworldmap_03_10")}}),e("span",{staticClass:"u-item_text"},[t._v(t._s(i.szDisplayName))])]),e("img",{staticClass:"u-map-city_img",attrs:{src:i.szButtonShowImg,draggable:"false"}})])]})),e("img",{staticClass:"u-img",attrs:{src:t.map,alt:"世界地图"},on:{click:function(e){t.visible=!1},touchstart:function(e){t.visible=!1}}}),e("img",{staticClass:"u-traffic",attrs:{src:t.traffic,alt:"交通路线"}})],2)]),e("div",{staticClass:"m-select-box",class:{"m-select-box__hide":!t.visible}},[e("div",{staticClass:"m-select__item"},[e("div",{staticClass:"u-item-title"},[e("img",{staticClass:"u-img",attrs:{src:t.getIcon("newworldmap_03_39")}}),e("span",{staticClass:"u-text"},[t._v("周边城镇")])]),t.selectMapCityOptions.maxCurrent?e("div",{staticClass:"m-select-arrow-box"},[1!=t.selectMapCityOptions.current?e("img",{staticClass:"u-item-arrow u-item-arrow_left",attrs:{src:t.getIcon("newworldmap_03_29")},on:{click:function(e){return t.selectMapChange("after","city")}}}):e("img",{staticClass:"u-item-arrow u-item-arrow_left u-item-arrow_dis",attrs:{src:t.getIcon("newworldmap_03_31")}})]):t._e(),e("div",{staticClass:"u-item-option"},[t._l(t.selectMap.city,(function(i,a){return[a>=t.selectMapCityOptions.after&&a<t.selectMapCityOptions.before?e("div",{key:a,staticClass:"u-item",style:{backgroundImage:"url(".concat(t.getIcon("newworldmap_03_33"),")")},on:{click:function(e){return t.showMap(i)}}},[e("img",{staticClass:"u-img",attrs:{src:i.szButtonShowImg}}),e("span",{staticClass:"u-text"},[t._v(t._s(i.szShowName||i.szComment))])]):t._e()]}))],2),t.selectMapCityOptions.maxCurrent?e("div",{staticClass:"m-select-arrow-box"},[t.selectMapCityOptions.current!=t.selectMapCityOptions.maxCurrent?e("img",{staticClass:"u-item-arrow u-item-right",attrs:{src:t.getIcon("newworldmap_03_25")},on:{click:function(e){return t.selectMapChange("before","city")}}}):e("img",{staticClass:"u-item-arrow u-item-right u-item-arrow_dis",attrs:{src:t.getIcon("newworldmap_03_28")}})]):t._e()]),t.selectMap.fb.length?e("div",{staticClass:"m-select__item"},[e("div",{staticClass:"u-item-title"},[e("img",{staticClass:"u-img",attrs:{src:t.getIcon("newworldmap_03_39")}}),e("span",{staticClass:"u-text"},[t._v("周边秘境")])]),t.selectMapOptions.maxCurrent?e("div",{staticClass:"m-select-arrow-box"},[1!=t.selectMapOptions.current?e("img",{staticClass:"u-item-arrow u-item-arrow_left",attrs:{src:t.getIcon("newworldmap_03_29")},on:{click:function(e){return t.selectMapChange("after","fb")}}}):e("img",{staticClass:"u-item-arrow u-item-arrow_left u-item-arrow_dis",attrs:{src:t.getIcon("newworldmap_03_31")}})]):t._e(),e("div",{staticClass:"u-item-option"},[t._l(t.selectMap.fb,(function(i,a){return[a>=t.selectMapOptions.after&&a<t.selectMapOptions.before?e("div",{key:a,staticClass:"u-item",style:{backgroundImage:"url(".concat(t.getIcon("newworldmap_03_33"),")")},on:{click:function(e){return t.showMap(i)}}},[e("img",{staticClass:"u-img",attrs:{src:i.szButtonShowImg}}),e("span",{staticClass:"u-text"},[t._v(t._s(i.szShowName||i.szComment))])]):t._e()]}))],2),t.selectMapOptions.maxCurrent?e("div",{staticClass:"m-select-arrow-box"},[t.selectMapOptions.current!=t.selectMapOptions.maxCurrent?e("img",{staticClass:"u-item-arrow u-item-right",attrs:{src:t.getIcon("newworldmap_03_25")},on:{click:function(e){return t.selectMapChange("before","fb")}}}):e("img",{staticClass:"u-item-arrow u-item-right u-item-arrow_dis",attrs:{src:t.getIcon("newworldmap_03_28")}})]):t._e()]):t._e()]),t.selectMap.city.length?e("div",{staticClass:"m-resource-box",class:{"m-resource-box__hide":!t.visible}},[t._l(t.produce[t.selectMap.city[0].dwMapID],(function(i,a){return[e("div",{key:a,staticClass:"m-resource__item"},[e("div",{staticClass:"u-item__title"},[e("span",[t._v(t._s(a))])]),t._l(i,(function(i,a){return e("div",{key:a,staticClass:"u-item__list"},[e("span",[t._v(t._s(i))])])}))],2)]}))],2):t._e()],1),e("div",{staticClass:"m-toolbar"},[e("h1",{staticClass:"m-maps__title"},[t._v(t._s(t.title))]),e("el-input",{attrs:{size:"small",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[e("template",{slot:"prepend"},[t._v("地图")])],2),e("div",{staticClass:"u-world-map",on:{click:t.changeWorldMap}},[t._v("世界地图")]),e("div",{class:[{mapId:t.mapId},"m-mapList"]},t._l(t.mapsList,(function(i){return e("div",{key:i.ID,class:["u-item",{active:i.ID==t.mapId}],attrs:{label:i.MapName,value:i.ID},on:{click:function(e){return t.changeMap(i.ID)}}},[t._v(" "+t._s(i.MapName)+" ")])})),0)],1),e("div",{staticClass:"m-mobile-layout"},[e("div",{staticClass:"m-mobile-header"},[e("h1",{staticClass:"m-mobile_maps__title"},[t._v(t._s(t.title))]),e("div",{staticClass:"m-drawer_open",on:{click:function(e){t.mobileMapListDrawer=!0}}},[t._v(" 所有地图 "),e("i",{staticClass:"el-icon-search el-icon--right"})])]),e("div",{staticClass:"m-mobile-toolbar"},[e("el-drawer",{attrs:{title:"所有地图",visible:t.mobileMapListDrawer},on:{"update:visible":function(e){t.mobileMapListDrawer=e}}},[e("div",{staticClass:"m-m-drawer-body"},[e("el-input",{attrs:{size:"small",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[e("template",{slot:"prepend"},[t._v("地图")])],2),e("div",{staticClass:"m-m-drawer-map m-m-item",on:{click:function(e){t.mobileMapListDrawer=!1,t.changeWorldMap()}}},[t._v(" 世界地图 ")]),e("div",{class:[{mapId:t.mapId},"m-m-mapList"]},t._l(t.mapsList,(function(i){return e("div",{key:i.ID,class:["m-m-item",{active:i.ID==t.mapId}],attrs:{label:i.MapName,value:i.ID},on:{click:function(e){t.mobileMapListDrawer=!1,t.changeMap(i.ID)}}},[t._v(" "+t._s(i.MapName)+" ")])})),0)],1)])],1)])])},s=[],n=i("5530"),c=(i("4de4"),i("14d9"),i("fb6a"),i("d3b7"),i("5319"),i("159b"),i("c7eb")),r=i("1da1"),o=i("41cb"),l=Object(o["c"])(),p=function(){var t=Object(r["a"])(Object(c["a"])().mark((function t(e){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",l.get("/map/worldmap",{params:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(r["a"])(Object(c["a"])().mark((function t(e){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",l.get("/map",{params:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=i("85e4"),h=i("65c2"),d=function(){var t=this,e=t._self._c;return e("div",{ref:"container",staticClass:"p-map",on:{mousedown:t.startDrag,mousemove:t.drag,mouseup:t.stopDrag,mouseleave:t.stopDrag,touchstart:function(e){return e.preventDefault(),t.startDrag.apply(null,arguments)},touchmove:function(e){return e.preventDefault(),t.drag.apply(null,arguments)},touchend:function(e){return e.preventDefault(),t.stopDrag.apply(null,arguments)},touchcancel:function(e){return e.preventDefault(),t.stopDrag.apply(null,arguments)}}},[e("div",{ref:"map",staticClass:"m-list",style:{transform:"translate(".concat(t.position.x,"px, ").concat(t.position.y,"px) scale(").concat(t.scale,")"),transition:t.isDragging?"":"0.5s all"},on:{click:t.preventClick}},[t._t("default")],2)])},f=[],g=i("2909"),v={name:"dragWrap",props:{data:{type:Object,default:function(){return{}}}},data:function(){return{scale:1,isDragging:!1,startPosition:{x:0,y:0},offset:{x:0,y:0},position:{x:0,y:0},velocity:{x:0,y:0},lastPosition:{x:0,y:0},lastTime:0,dampingFactor:.9,momentumMultiplier:0,containerBounds:null,isIpad:window.innerWidth<1133}},watch:{data:{handler:function(t){var e=t.x,i=t.y,a=t.scale;e&&(this.position.x=e,this.position.y=i,this.scale=a)},deep:!0,immediate:!0}},mounted:function(){var t=this;this.$nextTick((function(){var e=t.$refs.map;e.addEventListener("wheel",t.handleScroll),t.containerBounds=t.$refs.container.getBoundingClientRect(),window.addEventListener("resize",t.updateContainerBounds);var i=document.getElementsByTagName("img");Object(g["a"])(i).forEach((function(t){t.addEventListener("dragstart",(function(t){t.preventDefault()}))}))}))},methods:{startDrag:function(t){this.isDragging=!0,this.isIpad?(this.startPosition.x=t.changedTouches[0].clientX,this.startPosition.y=t.changedTouches[0].clientY):(this.startPosition.x=t.clientX,this.startPosition.y=t.clientY),this.offset.x=this.startPosition.x-this.position.x,this.offset.y=this.startPosition.y-this.position.y,this.velocity.x=0,this.velocity.y=0,this.lastTime=Date.now(),this.lastPosition.x=this.startPosition.x,this.lastPosition.y=this.startPosition.y},drag:function(t){if(this.isDragging){var e,i,a=Date.now(),s=a-this.lastTime;this.isIpad?(e=t.changedTouches[0].clientX,i=t.changedTouches[0].clientY):(e=t.clientX,i=t.clientY),this.velocity.x=(e-this.lastPosition.x)/s,this.velocity.y=(i-this.lastPosition.y)/s,this.position.x=e-this.offset.x,this.position.y=i-this.offset.y,this.lastTime=a,this.lastPosition.x=e,this.lastPosition.y=i,this.updateMomentumMultiplier(e,i)}},stopDrag:function(t){this.isDragging=!1,this.applyMomentum()},updateMomentumMultiplier:function(t,e){var i=Math.sqrt(Math.pow(t-this.startPosition.x,2)+Math.pow(e-this.startPosition.y,2));this.momentumMultiplier=.01*i},applyMomentum:function(){var t=this,e=function e(){t.position.x+=t.velocity.x*t.momentumMultiplier,t.position.y+=t.velocity.y*t.momentumMultiplier,(Math.abs(t.velocity.x)>.1||Math.abs(t.velocity.y)>.1)&&(t.velocity.x*=t.dampingFactor,t.velocity.y*=t.dampingFactor,requestAnimationFrame(e))};requestAnimationFrame(e)},updateContainerBounds:function(){this.containerBounds=this.$refs.container.getBoundingClientRect()},preventClick:function(t){this.isDragging&&t.stopPropagation()},handleScroll:function(t){var e=t.deltaY||t.detail||t.wheelDelta,i=.05;e<0?(this.scale+=i,this.scale>1&&(this.scale=1)):(this.scale-=i,this.scale<.35&&(this.scale=.35)),this.$emit("change",this.scale),t.preventDefault()}},beforeDestroy:function(){window.removeEventListener("wheel",this.handleScroll),window.removeEventListener("resize",this.updateContainerBounds)}},w=v,_=i("2877"),y=Object(_["a"])(w,d,f,!1,null,null,null),C=y.exports,M=i("2ef0"),b={name:"Map",components:{dragWrap:C},data:function(){return{loading:!1,mapId:0,city:[],fb:[],maps:[],mapsList:[],search:"",mapsOriginList:[],title:"世界地图",children:[],visible:!1,scale:{x:-122,y:-1400,scale:.35},selectMap:{city:[],fb:[]},selectMapOptions:{current:1,maxCurrent:0,after:0,before:0},selectMapCityOptions:{current:1,maxCurrent:0,after:0,before:0},mobileMapListDrawer:!1,isPhone:window.innerWidth<720,isIpad:window.innerWidth<1133,produce:{},worldMapTextScale:1}},computed:{currentMap:function(){return"".concat(h["__imgPath"],"map/maps/map_").concat(this.mapId,"_0.png")},map:function(){return"".concat(h["__imgPath"],"topic/pic/map.jpg")},traffic:function(){return"".concat(h["__imgPath"],"topic/pic/traffic.png")},client:function(){return this.$store.state.client},_search:function(){return{"no-page":1,"field-no-null-only":"Tip",fields:"Tip,ID,MapName,MapType"}}},watch:{mapId:function(t){null!==t&&""!==t&&void 0!==t||(this.mapId=0);var e=this.maps.filter((function(e){return e.ID==t}))[0],i=this.mapsList.filter((function(e){return e.ID==t}))[0];this.title=(null===e||void 0===e?void 0:e.szDisplayName)||(null===i||void 0===i?void 0:i.DisplayName)||this.title},search:function(t){this.mapsList=""===t?this.mapsOriginList:this.mapsOriginList.filter((function(e){return e.MapName.indexOf(t)>-1}))}},mounted:function(){this.load(!0),this.wrapScaleChange(this.scale.scale)},methods:{changeMap:function(t){this.visible=!1,this.mapId=t||0},showMap:function(t){var e=t.dwMapID,i=t.szComment;this.changeMap(e),this.title=i,this.visible=!1},changeWorldMap:function(){this.mapId=0,this.title="世界地图",this.scale=Object(n["a"])(Object(n["a"])({},this.$options.data().scale),{},{map:Math.random()})},load:function(t){var e=this;this.loading=!0,p().then((function(t){var i=t.data.data||[],a=i.zoning,s=i.city,n=i.copy;e.city=s||[],e.fb=n||[],e.maps=a.filter((function(t){return t.szDisplayName})).map((function(t){return t.szButtonShowImg=e.getGoMapImg(t),t}))})).finally((function(){e.loading=!0})),u(this._search).then((function(i){e.mapsList=i.data.data.list||[],e.mapsOriginList=e.mapsList,t&&e.isPhone&&e.mapsList.length&&e.changeMap(e.mapsList[0].ID);var a=i.data.data.list||[],s=Object(M["keyBy"])(a,"ID"),n={};for(var c in s)if(s.hasOwnProperty(c)){var r,o=(null===(r=Object(m["extractTextContent"])(s[c]["Tip"])[0])||void 0===r?void 0:r.text)+"";o=o.replace(/\\/g,"");var l=o.split("n").filter(Boolean),p={},u=l.indexOf("矿物："),h=l.indexOf("草药："),d=l.indexOf("牧草：");p["矿物"]=l.slice(u+1,h),p["草药"]=-1===d?l.slice(h+1):l.slice(h+1,d),-1!==d&&(p["牧草"]=l.slice(d+1)),n[c]=p}e.produce=n}))},showChild:function(t,e){var i=this,a=t.szChildCityMaps,s=t.szChildCopyMaps,n=t.Left,c=t.Top;this.isIpad?this.scale={x:4920-n-2550,y:3456-c-3150,scale:1}:this.scale={x:4920-n-2444,y:3456-c-3150,scale:1},this.wrapScaleChange(this.scale.scale);var r=[],o=[];a&&a.length&&(r=this.city.filter((function(t){return a.includes(t.dwMapID)}))),s&&s.length&&(o=this.fb.filter((function(t){return s.includes(t.dwMapID)})));var l=r.concat(o).filter((function(t){return t.szComment}))||[];if(l.length){this.children=Object(M["uniqBy"])(l,"dwMapID");var p={city:[],fb:[]};l.forEach((function(t){t.szButtonShowImg=i.getGoMapImg(t),"szVersion"in t?p.fb.push(t):p.city.push(t)})),this.selectMap=p;var u=this.isIpad?4:6,m=Math.max(u-this.selectMap.city.length,1);this.selectMap.fb.length>m?this.selectMapOptions={current:1,maxCurrent:Math.ceil(this.selectMap.fb.length/m),value:m,after:0,before:m}:this.selectMapOptions={after:0,before:this.selectMap.fb.length,maxCurrent:0};var h=Math.min(2,this.selectMap.city.length);this.selectMap.city.length>2?this.selectMapCityOptions={current:1,maxCurrent:Math.ceil(this.selectMap.city.length/2),value:h,after:0,before:h}:this.selectMapCityOptions={after:0,before:this.selectMap.city.length,maxCurrent:0},this.selectMapOptions.actId=e,this.visible=!0}},selectMapChange:function(t,e){var i="city"===e?this.selectMapCityOptions:this.selectMapOptions;"after"===t?(i.current--,i.after-=i.value,i.before-=i.value):"before"===t&&(i.current++,i.after+=i.value,i.before+=i.value)},wrapScaleChange:function(t){var e=.35,i=2.35,a=1,s=1,n=(s-i)/(a-e),c=i-n*e;this.worldMapTextScale=n*(1*t)+c},getGoMapImg:function(t){var e="";e=t.szButtonImg.includes(".UITex")?t.szButtonImg.substring(t.szButtonImg.indexOf("NewWorldMap"),t.szButtonImg.lastIndexOf(".UITex")).concat("_",t.nFrame):"NewWorldMap/fb/".concat(t.szButtonImg);var i=e.toLowerCase();return"".concat(h["__imgPath"],"map2/std/").concat(i,".png")},getIcon:function(t){return"".concat(h["__imgPath"],"map2/std/newworldmap/").concat(t,".png")}}},x=b,I=(i("c235"),Object(_["a"])(x,a,s,!1,null,null,null));e["default"]=I.exports},8717:function(t,e,i){},c235:function(t,e,i){"use strict";i("8717")}}]);
//# sourceMappingURL=chunk-3ada505c.cf591f8d.js.map