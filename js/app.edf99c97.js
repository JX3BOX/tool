(function(e){function n(n){for(var c,t,u=n[0],f=n[1],o=n[2],d=0,i=[];d<u.length;d++)t=u[d],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&i.push(r[t][0]),r[t]=0;for(c in f)Object.prototype.hasOwnProperty.call(f,c)&&(e[c]=f[c]);b&&b(n);while(i.length)i.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,n=0;n<s.length;n++){for(var a=s[n],c=!0,t=1;t<a.length;t++){var u=a[t];0!==r[u]&&(c=!1)}c&&(s.splice(n--,1),e=f(f.s=a[0]))}return e}var c={},t={app:0},r={app:0},s=[];function u(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-0e79563b":"73f5765a","chunk-52901a03":"190e1e29","chunk-23f58f27":"c3fe4bcf","chunk-2c4fa843":"f836ad8c","chunk-77fefd34":"f9e075b5","chunk-001db657":"4a417f89","chunk-d2d3c2b6":"c7857b34","chunk-51f91bd6":"1a2c072f","chunk-f9733acc":"20c0c64b","chunk-48311901":"a4cd8f02","chunk-4bb3103b":"638f9bc3","chunk-594e152a":"88eeaf24","chunk-057d8343":"90ac9a33","chunk-8497b9fc":"cd654b82","chunk-cbf34bac":"b2b5b986","chunk-609d26f8":"713739bb","chunk-0cb7211d":"baf53fa7","chunk-1a1fd404":"44ec5205","chunk-5af1740f":"989f8aaa","chunk-6d130ecc":"f4a37360"}[e]+".js"}function f(n){if(c[n])return c[n].exports;var a=c[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,f),a.l=!0,a.exports}f.e=function(e){var n=[],a={"chunk-0e79563b":1,"chunk-23f58f27":1,"chunk-2c4fa843":1,"chunk-77fefd34":1,"chunk-001db657":1,"chunk-51f91bd6":1,"chunk-4bb3103b":1,"chunk-594e152a":1,"chunk-057d8343":1,"chunk-8497b9fc":1,"chunk-cbf34bac":1,"chunk-609d26f8":1,"chunk-0cb7211d":1,"chunk-1a1fd404":1,"chunk-5af1740f":1,"chunk-6d130ecc":1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=new Promise((function(n,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-0e79563b":"49feb86a","chunk-52901a03":"31d6cfe0","chunk-23f58f27":"bff10871","chunk-2c4fa843":"6104e885","chunk-77fefd34":"e12d956f","chunk-001db657":"375a71d8","chunk-d2d3c2b6":"31d6cfe0","chunk-51f91bd6":"1f2ad865","chunk-f9733acc":"31d6cfe0","chunk-48311901":"31d6cfe0","chunk-4bb3103b":"7ecc8dfa","chunk-594e152a":"84761c91","chunk-057d8343":"52d21d1a","chunk-8497b9fc":"2814e37c","chunk-cbf34bac":"2814e37c","chunk-609d26f8":"bd5815f5","chunk-0cb7211d":"5bacf039","chunk-1a1fd404":"030ae92d","chunk-5af1740f":"6f0dbdb1","chunk-6d130ecc":"d84e9e37"}[e]+".css",r=f.p+c,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var o=s[u],d=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===c||d===r))return n()}var i=document.getElementsByTagName("style");for(u=0;u<i.length;u++){o=i[u],d=o.getAttribute("data-href");if(d===c||d===r)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var c=n&&n.target&&n.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete t[e],b.parentNode.removeChild(b),a(s)},b.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(b)})).then((function(){t[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var s=new Promise((function(n,a){c=r[e]=[n,a]}));n.push(c[2]=s);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.src=u(e);var i=new Error;o=function(n){d.onerror=d.onload=null,clearTimeout(b);var a=r[e];if(0!==a){if(a){var c=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+t+")",i.name="ChunkLoadError",i.type=c,i.request=t,a[1](i)}r[e]=void 0}};var b=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(n)},f.m=e,f.c=c,f.d=function(e,n,a){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(f.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)f.d(a,c,function(n){return e[n]}.bind(null,c));return a},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="https://cdn.jx3box.com/static/tool/",f.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=n,o=o.slice();for(var i=0;i<o.length;i++)n(o[i]);var b=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},4678:function(e,n,a){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"64030","./ms-my.js":"64030","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function t(e){var n=r(e);return a(n)}function r(e){if(!a.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}t.keys=function(){return Object.keys(c)},t.resolve=r,e.exports=t,t.id="4678"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("2b0e"),t=a("5c96"),r=a.n(t),s=a("6a69"),u=(a("6b30"),a("c5b4"),a("d3b7"),a("3ca3"),a("ddb0"),a("ac1f"),a("5319"),a("8c4f"));function f(e){switch(e){case"/app/bhhj":return"/fb/bahuang";case"/app/facedata":return"/face/facedata";case"/app/fightlog-analyzer":return"/battle";case"/app/furniture":return"/furniture";case"/app/haste":return"/bps/haste";case"/app/icons":return"/app/design/icon";case"/app/jx3-icons":return"/app/design/icon";case"/app/jx3-price":return"/pvg/price";case"/app/jx3-query":return"/app/database";case"/app/jx3-servers":return"/pvg/gonggao/server";case"/app/logos":return"/app/design/icon";case"/app/macroeditor":return"/macro/macroeditor";case"/app/meridians":return"/macro/meridians";case"/app/qixue-simulator":return"/macro/talent";case"/app/sandbox":return"/pvp/sandbox";case"/app/talent":return"/macro/talent";case"/app/talent2":return"/macro/talent2";default:return e}}c["default"].use(u["a"]);var o=u["a"].prototype.push;u["a"].prototype.push=function(e){return o.call(this,e).catch((function(e){return e}))};var d=[{name:"userdata",path:"/userdata",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-d2d3c2b6"),a.e("chunk-609d26f8"),a.e("chunk-0cb7211d")]).then(a.bind(null,"922f"))},meta:{type:"userdata"}},{name:"index",path:"/tool",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-d2d3c2b6"),a.e("chunk-609d26f8"),a.e("chunk-1a1fd404")]).then(a.bind(null,"c47e"))},meta:{type:"tool"}},{name:"tool_single",path:"/tool/:id",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-77fefd34"),a.e("chunk-057d8343"),a.e("chunk-8497b9fc")]).then(a.bind(null,"9ae9"))}},{name:"jx3dat",path:"/jx3dat",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-d2d3c2b6"),a.e("chunk-609d26f8"),a.e("chunk-6d130ecc")]).then(a.bind(null,"36a4"))},meta:{type:"jx3dat"}},{name:"jx3dat_single",path:"/jx3dat/:id",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-77fefd34"),a.e("chunk-057d8343"),a.e("chunk-cbf34bac")]).then(a.bind(null,"7084"))}},{name:"jx3dat_rank",path:"/jx3dat/rank",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-d2d3c2b6"),a.e("chunk-609d26f8"),a.e("chunk-5af1740f")]).then(a.bind(null,"c02f"))}},{name:"app",path:"/app",component:function(){return a.e("chunk-0e79563b").then(a.bind(null,"918c"))}},{name:"database",path:"/app/database",component:function(){return Promise.all([a.e("chunk-77fefd34"),a.e("chunk-001db657")]).then(a.bind(null,"076a"))}},{name:"design",path:"/app/design",component:function(){return Promise.all([a.e("chunk-d2d3c2b6"),a.e("chunk-51f91bd6")]).then(a.bind(null,"0b64"))},redirect:{name:"icon"},children:[{name:"emotion",path:"/app/design/emotion",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-4bb3103b")]).then(a.bind(null,"7f50"))}},{name:"icon",path:"/app/design/icon",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-48311901")]).then(a.bind(null,"8908"))}},{name:"vector",path:"/app/design/vector",component:function(){return Promise.all([a.e("chunk-52901a03"),a.e("chunk-2c4fa843")]).then(a.bind(null,"279d"))}},{name:"wallpaper",path:"/app/design/wallpaper",component:function(){return Promise.all([a.e("chunk-52901a03"),a.e("chunk-23f58f27")]).then(a.bind(null,"4e28"))}}]},{name:"translator",path:"/app/translator",component:function(){return Promise.all([a.e("chunk-f9733acc"),a.e("chunk-594e152a")]).then(a.bind(null,"f475"))}}],i=new u["a"]({routes:d,mode:"history"});i.beforeEach((function(e,n,a){var c=f(e.path);c!==e.path?location.replace(c):a()}));var b=i,l=(a("caad"),a("2532"),a("2f62")),h=a("c9d2");c["default"].use(l["a"]);var p={state:{client:location.href.includes("origin")?"origin":"std",isLogin:h["a"].isLogin(),id:0,user_id:0,post:"",extend:{collection_data:"",directory:!1},favList:[],database_client:"std",database_type:"buff",database_stat:{version:"",count:""},stars:{buff:[],doodad:[],npc:[],skill:[]}},mutations:{switchClient:function(e,n){e.client=n||"std"},storeFav:function(e,n){e.favList=n}},getters:{},actions:{},modules:{}},j=new l["a"].Store(p),m=function(){var e=this,n=e._self._c;return n("router-view")},k=[],g={name:"App",props:[],data:function(){return{}},computed:{}},v=g,y=(a("5bee"),a("2877")),w=Object(y["a"])(v,m,k,!1,null,null,null),x=w.exports;c["default"].config.productionTip=!1,c["default"].use(r.a),c["default"].use(s["a"]),new c["default"]({router:b,store:j,render:function(e){return e(x)}}).$mount("#app")},"5bee":function(e,n,a){"use strict";a("9251")},"7cb7":function(e,n,a){var c={"./bilibili.svg":"175f","./douyu.svg":"b119","./github.svg":"bffd","./huya.svg":"046a","./msg.svg":"aa9d","./weibo.svg":"50b5"};function t(e){var n=r(e);return a(n)}function r(e){if(!a.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}t.keys=function(){return Object.keys(c)},t.resolve=r,e.exports=t,t.id="7cb7"},9251:function(e,n,a){}});
//# sourceMappingURL=app.edf99c97.js.map