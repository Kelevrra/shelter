(function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var r=i[a];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={app:0},s={app:0},o=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-02a2ebb3":"c4fad81f","chunk-10c21efc":"f94bcb9e","chunk-1b8f8aae":"cde1546c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={"chunk-02a2ebb3":1,"chunk-10c21efc":1,"chunk-1b8f8aae":1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var n="css/"+({}[t]||t)+"."+{"chunk-02a2ebb3":"638daf10","chunk-10c21efc":"b942773c","chunk-1b8f8aae":"d010dd03"}[t]+".css",s=l.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var c=o[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===n||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[t],p.parentNode.removeChild(p),i(o)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var i=s[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,i[1](d)}s[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0519":function(t,e,i){t.exports=i.p+"img/pets-scarlet.5dda4324.png"},"0de2":function(t,e,i){t.exports=i.p+"img/bowls-and-cups.8f078630.svg"},1036:function(t,e,i){},"18f4":function(t,e,i){t.exports=i.p+"img/vitamins.6e511c49.svg"},2167:function(t,e,i){t.exports=i.p+"img/woodyphoto.632c4034.png"},2327:function(t,e,i){t.exports=i.p+"img/pets-sophia.ffd3e06c.png"},"29f7":function(t,e,i){},"3ae9":function(t,e,i){t.exports=i.p+"img/mail.afb721f3.svg"},4053:function(t,e,i){t.exports=i.p+"img/start-screen-puppy-tablet.29975475.png"},"4a39":function(t,e,i){t.exports=i.p+"img/transportation.9c4d6cb5.svg"},"53a3":function(t,e,i){t.exports=i.p+"img/sleeping-area.93a4516e.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],o={name:"App"},r=o,l=(i("5c0b"),i("2877")),c=Object(l["a"])(r,a,s,!1,null,null,null),u=c.exports,d=i("2f62");n["a"].use(d["a"]);var p=new d["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=(i("d3b7"),i("8c4f")),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("TopWrapper"),i("About"),i("Friends"),i("HelpShelter"),i("Additional"),i("Footer")],1)},m=[],g=(i("d81d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("Intro")],1)}),v=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[t._m(0),i("nav",{staticClass:"header__nav"},[i("a",{staticClass:"status-button",class:t.menuStatusButton,attrs:{href:"#"},on:{click:function(e){return t.menu()}}}),i("ul",{staticClass:"nav-list",class:t.menuStatus},t._l(t.mainNav,(function(e){return i("li",{key:e.id,staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:e.active,attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")])])})),0)])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"header__logo",attrs:{href:"/"}},[i("h1",[t._v("Cozy House")]),i("span",[t._v("Shelter for pets in Boston")])])}],y=i("d87a"),k={data:function(){return{mainNav:y["a"],menuStatus:"hidden",menuStatusButton:""}},methods:{menu:function(){"showed"===this.menuStatus?(this.menuStatus="hidden",this.menuStatusButton=""):(this.menuStatus="showed",this.menuStatusButton="status-button--active")}}},w=k,S=(i("e42c"),Object(l["a"])(w,b,_,!1,null,"72fc8db2",null)),x=S.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"intro"},[i("div",{staticClass:"intro-wrapper"},[i("h2",{staticClass:"intro__title"},[t._v(t._s(t.intro.title))]),i("p",{staticClass:"intro__description"},[t._v(t._s(t.intro.description))]),i("a",{staticClass:"intro__toggle",attrs:{href:"/our-pets"}},[t._v(t._s(t.intro.toggle))])]),i("picture",{staticClass:"intro__picture"},[i("source",{attrs:{media:"(min-width: 1280px)",srcset:t.intro.imageDesktop}}),i("source",{attrs:{media:"(min-width: 768px)",srcset:t.intro.imageTablet}}),i("img",{staticClass:"intro__image",attrs:{src:t.intro.imageMobile,alt:"Cutie puppy"}})])])},A=[],W={title:"Not only people need a house",description:"We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!",toggle:"Make a friend",imageMobile:i("e4b4"),imageTablet:i("4053"),imageDesktop:i("d559")},E=W,j={data:function(){return{intro:E}}},P=j,T=(i("de93"),Object(l["a"])(P,C,A,!1,null,"f8bf30a6",null)),O=T.exports,D={components:{Header:x,Intro:O}},I=D,L=(i("f94c"),Object(l["a"])(I,g,v,!1,null,"bb8badae",null)),N=L.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"about"},[i("img",{staticClass:"about__image",attrs:{src:t.aboutShelter.image,alt:t.aboutShelter.imageAlternative}}),i("div",{staticClass:"about-wrapper"},[i("h2",{staticClass:"about__title"},[t._v(t._s(t.aboutShelter.title))]),i("p",{staticClass:"about__description"},[t._v(t._s(t.aboutShelter.descriptionFirstBlock))]),i("p",{staticClass:"about__description"},[t._v(t._s(t.aboutShelter.descriptionSecondBlock))])])])},H=[],$={title:"About the shelter “Cozy House”",descriptionFirstBlock:"Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.",descriptionSecondBlock:"We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.",image:i("b62e"),imageAlternative:"Cat & Dog"},F=$,M={data:function(){return{aboutShelter:F}}},J=M,q=(i("8058"),Object(l["a"])(J,B,H,!1,null,"00030878",null)),Q=q.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"friends"},[t._m(0),i("div",{staticClass:"carousel-wrapper"},[i("div",{staticClass:"friends__carousel",attrs:{id:"carousel"}},[i("ul",{staticClass:"friends__list"},t._l(t.pets,(function(e){return i("li",{key:e.id,staticClass:"friends__item",style:{"margin-left":"-"+t.currentSlideIndex+"px"}},[i("a",{staticClass:"item-link",on:{click:function(){return e.active="active"}}},[i("img",{attrs:{src:e.img,alt:e.name+" "+e.type}}),i("p",[t._v(t._s(e.name))]),i("button",{attrs:{type:"button"}},[t._v("Learn more")])]),i("div",{class:e.active},[i("div",{attrs:{id:"overlay"},on:{click:function(e){return t.clearAll()}}}),i("div",{staticClass:"wrapper"},[i("button",{attrs:{id:"close-popup",value:"close"},on:{click:function(e){return t.clearAll()}}}),i("img",{attrs:{src:e.img,alt:e.name+" "+e.type}}),i("div",[i("h2",{staticClass:"title"},[t._v(t._s(e.name))]),i("p",{staticClass:"type"},[t._v(t._s(e.type)+" - "+t._s(e.breed))]),i("ul",[i("li",[t._v("Age: "+t._s(e.age))]),i("li",[t._v(" Inoculations: "),i("span",[t._v(t._s(e.inoculations.join(", ")))])]),i("li",[t._v(" Diseases: "),i("span",[t._v(t._s(e.diseases.join(", ")))])]),i("li",[t._v(" Parasites: "),i("span",[t._v(t._s(e.parasites.join(", "))+" ")])])])]),i("p",{staticClass:"description"},[t._v(t._s(e.description))])])])])})),0)]),i("button",{staticClass:"friends__scroll-button friends__scroll-button--left",class:t.buttonPrevStatus,attrs:{type:"button"},on:{click:t.prevSlide}},[t._v("←")]),i("button",{staticClass:"friends__scroll-button friends__scroll-button--right",class:t.buttonNextStatus,attrs:{type:"button"},on:{click:t.nextSlide}},[t._v("→")])]),i("a",{staticClass:"friends__toggle-link",attrs:{href:"/our-pets"}},[t._v("Get to know the rest")])])},K=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"friends__title"},[i("span",[t._v("Our friends who")]),i("span",[t._v("are looking for a house")])])}],R=i("ed26"),G={data:function(){return{pets:R["a"],currentSlideIndex:0,buttonPrevStatus:"button-noactive",buttonNextStatus:"button-active",carouselWidthWatch:360*R["a"].length-1080}},methods:{prevSlide:function(){this.whatcQuerry(),this.currentSlideIndex>0&&(this.currentSlideIndex-=360,this.buttonPrevStatus="button-active",this.buttonNextStatus="button-active"),0===this.currentSlideIndex&&(this.buttonPrevStatus="button-noactive",this.buttonNextStatus="button-active")},nextSlide:function(){this.whatcQuerry(),this.currentSlideIndex<this.carouselWidthWatch&&(this.currentSlideIndex+=360,this.buttonNextStatus="button-active",this.buttonPrevStatus="button-active"),this.currentSlideIndex===this.carouselWidthWatch&&(this.buttonNextStatus="button-noactive",this.buttonPrevStatus="button-active")},whatcQuerry:function(){document.documentElement.clientWidth<1220&&(this.carouselWidthWatch=360*R["a"].length-720),document.documentElement.clientWidth<850&&(this.carouselWidthWatch=360*R["a"].length-360),document.documentElement.clientWidth>1220&&(this.carouselWidthWatch=360*R["a"].length-1080)},clearAll:function(){for(var t=0;t<this.pets.length;t+=1)this.pets[t].active="noactive"}}},V=G,U=(i("8cfc"),Object(l["a"])(V,z,K,!1,null,"81a520ec",null)),Y=U.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"help"},[i("h2",{staticClass:"help__title"},[t._v(t._s(t.helpShelter.title))]),i("ul",{staticClass:"help__list"},t._l(t.helpShelter.helpList,(function(e){return i("li",{key:e.id,staticClass:"help__item"},[i("img",{attrs:{src:e.icon,alt:e.description}}),i("span",[t._v(t._s(e.description))])])})),0),i("div",{class:t.button.status,on:{click:function(e){return t.showAll()}}},[t._v(t._s(t.button.text))])])},Z=[],tt=(i("fb6a"),{title:"How you can help our shelter",helpList:[{id:1,icon:i("e455"),description:"Pet food"},{id:2,icon:i("4a39"),description:"Transportation"},{id:3,icon:i("e07f"),description:"Toys"},{id:4,icon:i("0de2"),description:"Bowls and cups"},{id:5,icon:i("6483"),description:"Shampoos"},{id:6,icon:i("18f4"),description:"Vitamins"},{id:7,icon:i("ea39"),description:"Medicines"},{id:8,icon:i("6526"),description:"Collars / leashes"},{id:9,icon:i("53a3"),description:"Sleeping areas"}]}),et=tt,it={data:function(){return{helpShelter:et,helpList:et.helpList,button:{status:"noactive",text:"Show all..."}}},methods:{whatcQuerry:function(){document.documentElement.clientWidth>525&&(this.button.status="noactive"),document.documentElement.clientWidth<525&&(this.button.status="active",this.helpShelter.helpList=this.helpShelter.helpList.slice(0,2)),document.documentElement.clientWidth<370&&(this.helpShelter.helpList=this.helpShelter.helpList.slice(0,1))},showAll:function(){this.helpShelter.helpList=this.helpList,this.button.status="noactive"}},mounted:function(){this.whatcQuerry()}},nt=it,at=(i("d206"),Object(l["a"])(nt,X,Z,!1,null,"287b56fc",null)),st=at.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"additional"},[i("img",{staticClass:"additional__image",attrs:{src:t.additional.image,alt:t.additional.imageAlternative}}),i("div",{staticClass:"additional-wrapper"},[i("h2",{staticClass:"additional__title"},[t._v(t._s(t.additional.title))]),i("span",{staticClass:"additional__sub-title"},[t._v(t._s(t.additional.subTitle))]),i("a",{staticClass:"additional__link",attrs:{href:t.additional.linkAddress}},[i("img",{attrs:{src:t.additional.linkImage,alt:""}}),t._v(" "+t._s(t.additional.link)+" ")]),i("p",{staticClass:"additional__description"},[t._v(t._s(t.additional.description))])])])},rt=[],lt={image:i("f16a"),imageAlternative:"Dog picture",title:"You can also make a donation",subTitle:"Name of the bank / Type of bank account",link:"8380 2880 8028 8791 7435",linkAddress:"#",linkImage:i("98dc"),linkImageAlternative:"card icon",description:"Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum atlibero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum etmalesuada fames ac ante ipsum primis in faucibus."},ct=lt,ut={data:function(){return{additional:ct}}},dt=ut,pt=(i("b5f1"),Object(l["a"])(dt,ot,rt,!1,null,"e22fd786",null)),ht=pt.exports,ft=i("fd2d"),mt={components:{TopWrapper:N,About:Q,Friends:Y,HelpShelter:st,Additional:ht,Footer:ft["a"]},data:function(){return{mainNav:y["a"]}},methods:{actualPage:function(){this.mainNav.map((function(t){return t.active=""})),this.mainNav[0].active="active"}},mounted:function(){this.actualPage()}},gt=mt,vt=Object(l["a"])(gt,f,m,!1,null,null,null),bt=vt.exports;n["a"].use(h["a"]);var _t=new h["a"]({mode:"history",routes:[{path:"/",component:bt},{path:"/our-pets",component:function(){return i.e("chunk-1b8f8aae").then(i.bind(null,"0722"))}},{path:"/help-us",component:function(){return i.e("chunk-10c21efc").then(i.bind(null,"540d"))}},{path:"/contacts",component:function(){return i.e("chunk-02a2ebb3").then(i.bind(null,"c93c"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:_t,store:p,render:function(t){return t(u)}}).$mount("#app")},"59df":function(t,e,i){"use strict";i("29f7")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"5c23":function(t,e,i){},6262:function(t,e,i){t.exports=i.p+"img/pets-charly.a16da667.png"},6483:function(t,e,i){t.exports=i.p+"img/shampoos.3262daf1.svg"},6526:function(t,e,i){t.exports=i.p+"img/collars-or-leashes.90d1c318.svg"},"6b0b":function(t,e,i){},"6e03":function(t,e,i){t.exports=i.p+"img/footer-puppy.ff7a5cbe.png"},"6e42":function(t,e,i){},"7ff3":function(t,e,i){},8058:function(t,e,i){"use strict";i("7ff3")},"862b":function(t,e,i){t.exports=i.p+"img/pin.1b304b81.svg"},"8cfc":function(t,e,i){"use strict";i("5c23")},"98dc":function(t,e,i){t.exports=i.p+"img/credit-card.2f7d3a28.svg"},"9b65":function(t,e,i){},"9ba9":function(t,e,i){t.exports=i.p+"img/pets-katrine.ed34221a.png"},"9c0c":function(t,e,i){},a5c6:function(t,e,i){t.exports=i.p+"img/jennifer-photo.72029067.png"},af29:function(t,e,i){t.exports=i.p+"img/pets-freddie.ae446f38.png"},b5f1:function(t,e,i){"use strict";i("6e42")},b62e:function(t,e,i){t.exports=i.p+"img/about-pets.6410e4c6.png"},c3bb:function(t,e,i){t.exports=i.p+"img/phone.eac991b9.svg"},d206:function(t,e,i){"use strict";i("6b0b")},d559:function(t,e,i){t.exports=i.p+"img/start-screen-puppy.526a4dcb.png"},d87a:function(t,e,i){"use strict";var n=[{id:1,title:"About the shelter",url:"/",active:""},{id:2,title:"Our pets",url:"/our-pets",active:""},{id:3,title:"Help the shelter",url:"/help-us",active:""},{id:4,title:"Contacts",url:"/contacts",active:""}];e["a"]=n},de0a:function(t,e,i){t.exports=i.p+"img/pets-timmy.24fada17.png"},de93:function(t,e,i){"use strict";i("9b65")},e07f:function(t,e,i){t.exports=i.p+"img/toys.f31e7e29.svg"},e42c:function(t,e,i){"use strict";i("f530")},e455:function(t,e,i){t.exports=i.p+"img/Vector.7e12ff7b.svg"},e4b4:function(t,e,i){t.exports=i.p+"img/start-screen-puppy-mobile.423d2e21.png"},ea39:function(t,e,i){t.exports=i.p+"img/medicines.972fb3d8.svg"},ed26:function(t,e,i){"use strict";var n=[{id:1,name:"Katrine",img:i("9ba9"),type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"],active:"noactive"},{id:2,name:"Jennifer",img:i("a5c6"),type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"],active:"noactive"},{id:3,name:"Woody",img:i("2167"),type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"],active:"noactive"},{id:4,name:"Sophia",img:i("2327"),type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"],active:"noactive"},{id:5,name:"Scarlett",img:i("0519"),type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"],active:"noactive"},{id:6,name:"Timmy",img:i("de0a"),type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"],active:"noactive"},{id:7,name:"Freddie",img:i("af29"),type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"],active:"noactive"},{id:8,name:"Charly",img:i("6262"),type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"],active:"noactive"}];e["a"]=n},f16a:function(t,e,i){t.exports=i.p+"img/donation-dog.180241fc.png"},f530:function(t,e,i){},f94c:function(t,e,i){"use strict";i("1036")},fc42:function(t,e,i){t.exports=i.p+"img/footer-puppy-mobile.4f655f54.png"},fd2d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"footer__contacts"},[i("h3",[t._v(t._s(t.footerData.contacts.title))]),i("ul",t._l(t.footerData.contacts.list,(function(e){return i("li",{key:e.id},[i("a",{attrs:{href:e.url}},[i("img",{attrs:{src:e.image,alt:e.imageAlternative}}),t._v(" "+t._s(e.text)+" ")])])})),0)]),i("div",{staticClass:"footer__address"},[i("h3",[t._v(t._s(t.footerData.address.title))]),i("ul",t._l(t.footerData.address.list,(function(e){return i("li",{key:e.id},[i("a",{attrs:{href:e.url}},[i("img",{attrs:{src:e.image,alt:e.imageAlternative}}),t._v(" "+t._s(e.text)+" ")])])})),0)]),i("picture",[i("source",{attrs:{media:"(min-width: 768px)",srcset:t.footerData.image.desktop}}),i("img",{staticClass:"footer__image",attrs:{src:t.footerData.image.mobile,alt:t.footerData.image.alternative}})])])},a=[],s={contacts:{title:"For questions and suggestions",list:[{id:1,type:"email",text:"email@shelter.com",image:i("3ae9"),imageAlternative:"Mail icon",url:"mailto: email@shelter.com"},{id:2,type:"tel",text:"+13 674 567 75 54",image:i("c3bb"),imageAlternative:"Phone icon",url:"tel: +136745677554"}]},address:{title:"We are waiting for your visit",list:[{id:1,type:"address",text:"1 Central Street, Boston (entrance from the store)",image:i("862b"),imageAlternative:"Pin icon",url:"#"},{id:2,type:"address",text:"18 South Park, London",image:i("862b"),imageAlternative:"Pin icon",url:"#"}]},image:{mobile:i("fc42"),desktop:i("6e03"),alternative:"Puppy"}},o=s,r={data:function(){return{footerData:o}}},l=r,c=(i("59df"),i("2877")),u=Object(c["a"])(l,n,a,!1,null,"53d455b8",null);e["a"]=u.exports}});
//# sourceMappingURL=app.864d2848.js.map