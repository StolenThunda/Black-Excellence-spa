(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh LpR lFf"}},[a("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:"","height-hint":"98"}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        Black Excellence\n      ")]),a("div",[t._v("Powered by Quasar v"+t._s(t.$q.version))])],1),a("q-tabs",[a("q-route-tab",{attrs:{name:"home",icon:"home",label:"Home",to:"home"}}),a("q-route-tab",{attrs:{name:"categories",icon:"category",to:"categories",label:"Categories"}}),a("q-route-tab",{attrs:{name:"about",icon:"emoji_people",to:"about",label:"About"}}),a("q-route-tab",{attrs:{name:"contact",icon:"contact_page",to:"contact",label:"Contact Us"}})],1)],1),a("q-drawer",{attrs:{"show-if-above":"",elevated:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n        Essential Links\n      ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},i=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=l,c=a("2877"),u=a("66e5"),p=a("4074"),b=a("0016"),m=a("0170"),q=a("eebe"),d=a.n(q),v=Object(c["a"])(s,r,i,!1,null,null,null),h=v.exports;d()(v,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:b["a"],QItemLabel:m["a"]});const f=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];var k={name:"MainLayout",components:{EssentialLink:h},data(){return{tab:null,leftDrawerOpen:!1,essentialLinks:f}}},w=k,_=a("4d5a"),Q=a("e359"),g=a("65c6"),y=a("9c40"),L=a("6ac5"),D=a("429b"),C=a("7867"),E=a("9404"),O=a("1c1c"),x=a("09e3"),T=Object(c["a"])(w,n,o,!1,null,null,null);e["default"]=T.exports;d()(T,"components",{QLayout:_["a"],QHeader:Q["a"],QToolbar:g["a"],QBtn:y["a"],QToolbarTitle:L["a"],QTabs:D["a"],QRouteTab:C["a"],QDrawer:E["a"],QList:O["a"],QItemLabel:m["a"],QPageContainer:x["a"]})}}]);