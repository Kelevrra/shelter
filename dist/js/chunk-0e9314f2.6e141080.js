(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e9314f2"],{"0722":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("HeaderFixed"),s("Catalogue"),s("Footer")],1)},n=[],i=(s("d81d"),s("9d08")),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"catalogue"},[t._m(0),s("div",{staticClass:"catalogue-wrapper"},[s("div",{staticClass:"catalogue__carousel"},[s("ul",{staticClass:"catalogue__list"},t._l(t.petsList,(function(e){return s("li",{key:e.id,staticClass:"catalogue__item"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.img,alt:e.name+" "+e.type}}),s("p",[t._v(t._s(e.name))]),s("button",[t._v("Learn more")])])])})),0)]),s("div",{staticClass:"panel-list"},[s("button",{staticClass:"panel-button",class:t.buttons.prevStatus,on:{click:function(e){return t.cataloguePageFirst()}}},[t._v(t._s(t.buttons.toFirst))]),s("button",{staticClass:"panel-button",class:t.buttons.prevStatus,on:{click:function(e){return t.cataloguePagePrev()}}},[t._v(t._s(t.buttons.left))]),s("button",{staticClass:"panel-button index"},[t._v(t._s(t.pages.index))]),s("button",{staticClass:"panel-button",class:t.buttons.nextStatus,on:{click:function(e){return t.cataloguePageNext()}}},[t._v(t._s(t.buttons.right))]),s("button",{staticClass:"panel-button",class:t.buttons.nextStatus,on:{click:function(e){return t.cataloguePageLast()}}},[t._v(t._s(t.buttons.toLast))])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"catalogue__title"},[s("span",[t._v("Our friends who")]),s("span",[t._v("are looking for a house")])])}],c=(s("fb6a"),s("ed26")),l={data:function(){return{pets:c["a"],petsList:c["a"],buttons:{left:"<",toFirst:"<<",right:">",toLast:">>",prevStatus:"noactive",nextStatus:"active"},pages:{index:1,amount:0,displayItemsFrom:0,displayItemsTo:8}}},methods:{cataloguePageNext:function(){this.pages.index>0&&this.pages.index<this.pages.amount&&(this.pages.index=this.pages.index+1,document.documentElement.clientWidth>1270&&(this.pages.displayItemsFrom=this.pages.displayItemsFrom+8,this.pages.displayItemsTo=this.pages.displayItemsTo+8),document.documentElement.clientWidth<1270&&(this.pages.displayItemsFrom=this.pages.displayItemsFrom+4,this.pages.displayItemsTo=this.pages.displayItemsTo+4))},cataloguePagePrev:function(){this.pages.index>1&&this.pages.index<=this.pages.amount&&(this.pages.index=this.pages.index-1,document.documentElement.clientWidth>1270&&(this.pages.displayItemsFrom=this.pages.displayItemsFrom-8,this.pages.displayItemsTo=this.pages.displayItemsTo-8),document.documentElement.clientWidth<1270&&(this.pages.displayItemsFrom=this.pages.displayItemsFrom-4,this.pages.displayItemsTo=this.pages.displayItemsTo-4))},cataloguePageFirst:function(){this.pages.index=1,document.documentElement.clientWidth<1270&&(this.pages.displayItemsFrom=0,this.pages.displayItemsTo=4)},cataloguePageLast:function(){this.pages.index=this.pages.amount,document.documentElement.clientWidth<1270&&(this.pages.displayItemsFrom=4*this.pages.amount-4,this.pages.displayItemsTo=4*this.pages.amount)},buttonStatus:function(){var t=this;setInterval((function(){1===t.pages.amount&&(t.buttons.prevStatus="noactive",t.buttons.nextStatus="noactive"),t.pages.amount>1&&(t.buttons.nextStatus="active"),t.pages.index>1&&(t.buttons.prevStatus="active"),t.pages.index===t.pages.amount&&(t.buttons.nextStatus="noactive"),1===t.pages.index&&(t.buttons.prevStatus="noactive")}),500)},whatcQuerry:function(){var t=this;document.documentElement.clientWidth<1270&&(this.pages.displayItemsTo=4),document.documentElement.clientWidth,setInterval((function(){document.documentElement.clientWidth<1270&&(t.pages.amount=Math.ceil(t.pets.length/4),t.petsList=t.pets.slice(t.pages.displayItemsFrom,t.pages.displayItemsTo)),document.documentElement.clientWidth,document.documentElement.clientWidth>1270&&(t.pages.amount=Math.ceil(t.pets.length/8),t.pages.displayItemsTo=8,t.petsList=t.pets.slice(t.pages.displayItemsFrom,t.pages.displayItemsTo))}),1e3)}},mounted:function(){this.whatcQuerry(),this.buttonStatus()}},m=l,d=(s("0958"),s("2877")),r=Object(d["a"])(m,u,o,!1,null,"c589eccc",null),p=r.exports,h=s("fd2d"),g=s("d87a"),v={components:{HeaderFixed:i["a"],Catalogue:p,Footer:h["a"]},data:function(){return{mainNav:g["a"]}},methods:{actualPage:function(){this.mainNav.map((function(t){return t.active=""})),this.mainNav[1].active="active"}},mounted:function(){this.actualPage()}},f=v,_=(s("e003"),Object(d["a"])(f,a,n,!1,null,"56f3c28f",null));e["default"]=_.exports},"0958":function(t,e,s){"use strict";s("60e2")},"2e9a":function(t,e,s){},"60e2":function(t,e,s){},8357:function(t,e,s){},"8ca7":function(t,e,s){"use strict";s("2e9a")},"9d08":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"header-inner"},[t._m(0),s("nav",{staticClass:"header__nav"},[s("a",{staticClass:"status-button",class:t.menuStatusButton,attrs:{href:"#"},on:{click:function(e){return t.menu()}}}),s("ul",{staticClass:"nav-list",class:t.menuStatus},t._l(t.mainNav,(function(e){return s("li",{key:e.id,staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:e.active,attrs:{href:e.url}},[t._v(t._s(e.title))])])})),0)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"header__logo",attrs:{href:"/"}},[s("h1",[t._v("Cozy House")]),s("span",[t._v("Shelter for pets in Boston")])])}],i=s("d87a"),u={data:function(){return{mainNav:i["a"],menuStatus:"hidden",menuStatusButton:""}},methods:{menu:function(){"showed"===this.menuStatus?(this.menuStatus="hidden",this.menuStatusButton=""):(this.menuStatus="showed",this.menuStatusButton="status-button--active")}}},o=u,c=(s("8ca7"),s("2877")),l=Object(c["a"])(o,a,n,!1,null,"b7f117e8",null);e["a"]=l.exports},e003:function(t,e,s){"use strict";s("8357")}}]);
//# sourceMappingURL=chunk-0e9314f2.6e141080.js.map