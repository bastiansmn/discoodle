(function(e){function t(t){for(var c,o,a=t[0],u=t[1],i=t[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(c=!1)}c&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},o={app:0},r={app:0},s=[];function a(e){return u.p+"js/"+({"account/infos":"account/infos",account:"account",courses:"courses",messages:"messages","messages/:id":"messages/:id","courses/subject":"courses/subject","messages/friends":"messages/friends"}[e]||e)+"."+{"account/infos":"d7f073f6","chunk-0389b4ab":"4140218e",account:"632f907d",courses:"6eba7bae",messages:"a059a5a1","chunk-00f51be6":"15af3186","chunk-5315aee9":"2f07e246","chunk-2d0af48a":"79e1245a","chunk-5dc408ac":"6d0f0df5","chunk-f95894d6":"f5efb160","messages/:id":"9a29a312","chunk-75f7783e":"1cd28bce","courses/subject":"10c19057","chunk-775b15ac":"7bb05d29","chunk-9a171d52":"9ab0e8fb","chunk-c47b9a94":"f8c7bd58","messages/friends":"85ebec73"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"account/infos":1,account:1,courses:1,messages:1,"chunk-00f51be6":1,"chunk-5dc408ac":1,"chunk-f95894d6":1,"messages/:id":1,"chunk-75f7783e":1,"courses/subject":1,"chunk-775b15ac":1,"chunk-9a171d52":1,"chunk-c47b9a94":1,"messages/friends":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({"account/infos":"account/infos",account:"account",courses:"courses",messages:"messages","messages/:id":"messages/:id","courses/subject":"courses/subject","messages/friends":"messages/friends"}[e]||e)+"."+{"account/infos":"cfd9a150","chunk-0389b4ab":"31d6cfe0",account:"33346e88",courses:"798d9831",messages:"b5c1176c","chunk-00f51be6":"976bf96e","chunk-5315aee9":"31d6cfe0","chunk-2d0af48a":"31d6cfe0","chunk-5dc408ac":"171acfd5","chunk-f95894d6":"8fa95034","messages/:id":"4cb0d7c5","chunk-75f7783e":"bd1f6ff9","courses/subject":"e753dbe7","chunk-775b15ac":"db523fdc","chunk-9a171d52":"8d12c265","chunk-c47b9a94":"077f4faa","messages/friends":"282437df"}[e]+".css",r=u.p+c,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var i=s[a],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===c||l===r))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){i=d[a],l=i.getAttribute("data-href");if(l===c||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",d.name="ChunkLoadError",d.type=c,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0173":function(e,t,n){},"1bf7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=function(e){return Object(c["B"])("data-v-c9f6ca66"),e=e(),Object(c["z"])(),e},r={id:"nav"},s={class:"navbar-visible-box"},a={class:"navbar-content-box"},u={class:"menu"},i=o((function(){return Object(c["j"])("span",{class:"headerNavbar"},"MENU",-1)})),l={class:"links"},d=o((function(){return Object(c["j"])("div",{class:"navbar-icon"},[Object(c["j"])("img",{src:"assets/home.png",alt:"Home"})],-1)})),f=o((function(){return Object(c["j"])("div",{class:"navbar-icon"},[Object(c["j"])("img",{src:"assets/courses.png",alt:"Courses"})],-1)})),b=o((function(){return Object(c["j"])("div",{class:"navbar-icon"},[Object(c["j"])("img",{src:"assets/messages.png",alt:"Messages"})],-1)})),m=o((function(){return Object(c["j"])("div",{class:"navbar-icon"},[Object(c["j"])("img",{src:"assets/account.png",alt:"Account"})],-1)})),h={id:"content"};function p(e,t,n,o,p,j){var g=Object(c["G"])("router-link"),v=Object(c["G"])("router-view"),O=Object(c["G"])("w-app");return Object(c["y"])(),Object(c["g"])(O,null,{default:Object(c["R"])((function(){return[Object(c["j"])("div",{id:"root",style:Object(c["u"])({backgroundColor:e.getColors.color1})},[Object(c["j"])("div",r,[Object(c["j"])("div",{class:"discoodle-title",style:Object(c["u"])({color:e.getColors.color5})}," Discoodle ",4),Object(c["j"])("div",s,[Object(c["j"])("div",a,[Object(c["j"])("div",u,[i,Object(c["j"])("div",l,[Object(c["m"])(g,{to:"/accueil"},{default:Object(c["R"])((function(){return[d,Object(c["j"])("span",{style:Object(c["u"])({color:e.getColors.color5})},"ACCUEIL",4)]})),_:1}),Object(c["m"])(g,{to:"/groupes",onClick:t[0]||(t[0]=function(t){return e.setGroup({})})},{default:Object(c["R"])((function(){return[f,Object(c["j"])("span",{style:Object(c["u"])({color:e.getColors.color5})},"COURS",4)]})),_:1}),Object(c["m"])(g,{to:"/messages"},{default:Object(c["R"])((function(){return[b,Object(c["j"])("span",{style:Object(c["u"])({color:e.getColors.color5})},"MESSAGES",4)]})),_:1}),Object(c["m"])(g,{to:"/compte"},{default:Object(c["R"])((function(){return[m,Object(c["j"])("span",{style:Object(c["u"])({color:e.getColors.color5})},"COMPTE",4)]})),_:1})])])])])]),Object(c["j"])("div",h,[Object(c["m"])(v)])],4)]})),_:1})}var j=n("5530"),g=n("5502"),v=n("00e7"),O=n.n(v),k=n("bc3a"),y=n.n(k),S={name:"App",components:{},methods:Object(j["a"])({},Object(g["b"])(["setUser","setGroup"])),computed:Object(j["a"])({},Object(g["c"])(["getColors"])),mounted:function(){var e=this;null!==O.a.get("username")&&""!==O.a.get("username")&&y.a.get("http://localhost:8080/api/users/findByUserName?username=".concat(O.a.get("username"))).then((function(t){var n=t.data;n.locked||e.setUser(n)}))}},C=(n("570d"),n("6b0d")),P=n.n(C);const _=P()(S,[["render",p],["__scopeId","data-v-c9f6ca66"]]);var w=_,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),T=n("bb51"),D=[{path:"/",name:"Default",redirect:"/accueil",component:T["default"]},{path:"/accueil",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"bb51"))}},{path:"/groupes",name:"Cours",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("account"),n.e("courses")]).then(n.bind(null,"1a2f"))},children:[{path:"",name:"DefaultCourses",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("courses/subject")]).then(n.bind(null,"a4c0"))}},{path:"subject/:id",name:"Subjects",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("courses/subject")]).then(n.bind(null,"a4c0"))},children:[{path:"",name:"Default Subjects",redirect:{name:"Home Subjects"}},{path:"accueil",name:"Home Subjects",component:function(){return Promise.all([n.e("chunk-2d0af48a"),n.e("chunk-775b15ac")]).then(n.bind(null,"5cb1"))}},{path:"cours",name:"Course Subjects",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("chunk-5315aee9"),n.e("chunk-75f7783e")]).then(n.bind(null,"0724"))}},{path:"discussion",name:"Server Subjects",component:function(){return n.e("chunk-c47b9a94").then(n.bind(null,"b89f"))},children:[{path:":room_id",name:"Channel",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("chunk-5315aee9"),n.e("chunk-2d0af48a"),n.e("chunk-5dc408ac"),n.e("chunk-f95894d6")]).then(n.bind(null,"a3ab"))}}]},{path:"notes",name:"Notes Subjects",component:function(){return n.e("chunk-9a171d52").then(n.bind(null,"a18b"))}},{path:"parametres",name:"Settings Subjects",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("chunk-00f51be6")]).then(n.bind(null,"844e"))}}]},{path:":id",name:"Group",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("courses/subject")]).then(n.bind(null,"a4c0"))},children:[{path:"",name:"Default Subjects",redirect:{name:"Group chat"}},{path:"discussion",name:"Group chat",component:function(){return n.e("chunk-c47b9a94").then(n.bind(null,"b89f"))}},{path:"parametres",name:"Group settings",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("chunk-00f51be6")]).then(n.bind(null,"844e"))}}]}]},{path:"/messages",name:"Messages",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("account"),n.e("messages")]).then(n.bind(null,"eaad"))},children:[{path:"",component:function(){return n.e("messages/friends").then(n.bind(null,"c421"))}},{path:":id",name:"Discussion",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("chunk-5315aee9"),n.e("chunk-2d0af48a"),n.e("chunk-5dc408ac"),n.e("messages/:id")]).then(n.bind(null,"9050"))}}]},{path:"/compte",name:"Compte",component:function(){return Promise.all([n.e("chunk-0389b4ab"),n.e("account")]).then(n.bind(null,"77be"))},children:[{path:"infos",component:function(){return n.e("account/infos").then(n.bind(null,"7e56"))}},{path:"settings",component:function(){return n.e("account/infos").then(n.bind(null,"7e56"))}},{path:"home-set",component:function(){return n.e("account/infos").then(n.bind(null,"7e56"))}}]}],A=Object(E["a"])({history:Object(E["b"])(),routes:D}),F=A,N=Object(g["a"])({state:{messages:{currentConvShown:""},user:{},friends:[],groups:{},night:{color1:"#13111A",color2:"#454150",color3:"#909090",color4:"#E85C5C",color5:"#F4F4F4",color6:"#FFFFFF"},webRTC:{mainStream:null,waiting:[],showPIP:!1}},mutations:{SET_CONV_UUID:function(e,t){e.messages.currentConvShown=t},SET_USER:function(e,t){e.user=t},ADD_FRIEND:function(e,t){e.friends.push(t)},SET_GROUP:function(e,t){e.groups=t},SET_FRIENDS:function(e,t){e.friends=t},SET_LINK_TO_AVATAR:function(e,t){e.user.link_to_avatar=t}},actions:{setConvUUID:function(e,t){e.commit("SET_CONV_UUID",t)},setUser:function(e,t){e.commit("SET_USER",t)},addUser:function(e,t){e.commit("ADD_FRIEND",t)},setGroup:function(e,t){e.commit("SET_GROUP",t)},setFriends:function(e,t){e.commit("SET_FRIENDS",t)},setLinkToAvatar:function(e,t){e.commit("SET_LINK_TO_AVATAR",t)}},getters:{getColors:function(e){return e.night},getCurrentConv:function(e){return e.messages.currentConvShown},getUser:function(e){return e.user},getFriends:function(e){return e.friends},getGroup:function(e){return e.groups}},modules:{}}),U=n("0eb4"),x=(n("4eb4"),Object(c["f"])(w));new U["a"](x,{}),x.use(N).use(F).mount("#app")},"570d":function(e,t,n){"use strict";n("1bf7")},acb3:function(e,t,n){"use strict";n("ff2d")},bb51:function(e,t,n){"use strict";n.r(t);n("fb6a"),n("a4d3"),n("e01a"),n("9911");var c=n("7a23"),o=function(e){return Object(c["B"])("data-v-02439dff"),e=e(),Object(c["z"])(),e},r={class:"Home"},s={class:"home-content"},a=o((function(){return Object(c["j"])("div",{class:"welcome-discoodle"}," Bienvenue sur Discoodle ! ",-1)})),u={class:"posts-content"},i={key:0,style:{color:"#F4F4F4","font-size":"20px",display:"flex","align-items":"center","justify-content":"center"}},l=Object(c["l"])(" Votre fil d'actualité est vide :( "),d=o((function(){return Object(c["j"])("br",null,null,-1)})),f=Object(c["l"])(" Vérifiez vos paramètres pour arranger ça ! "),b=[l,d,f];function m(e,t,n,o,l,d){var f=Object(c["G"])("Post");return Object(c["y"])(),Object(c["i"])("div",r,[Object(c["j"])("div",{onScroll:t[0]||(t[0]=function(){return d.loadPosts&&d.loadPosts.apply(d,arguments)})},[Object(c["j"])("div",s,[Object(c["j"])("div",null,[a,Object(c["j"])("div",u,[0===l.posts.length?(Object(c["y"])(),Object(c["i"])("div",i,b)):Object(c["h"])("",!0),(Object(c["y"])(!0),Object(c["i"])(c["a"],null,Object(c["E"])(l.posts.slice(l.fromPost,l.toPost),(function(e){return Object(c["y"])(),Object(c["g"])(f,{key:e,title:e.title,content:e.description,link:e.link,"post-type":e.type,"user-name":e.user},null,8,["title","content","link","post-type","user-name"])})),128))])])])],32)])}var h=n("5530"),p=(n("159b"),n("ac1f"),n("5319"),n("bc3a")),j=n.n(p),g=["href"],v={style:{"font-size":"20px",width:"100%","font-weight":"600","text-overflow":"ellipsis"}},O={style:{"word-break":"break-word"}};function k(e,t,n,o,r,s){return"RSS"===n.postType?(Object(c["y"])(),Object(c["i"])("a",{key:0,class:"Post",href:n.link,target:"_blank"},[Object(c["j"])("span",{style:Object(c["u"])([{color:r.colors[s.rand(r.colors.length)]},{"font-size":"25px",width:"100%","font-weight":"600","text-transform":"uppercase"}])},Object(c["K"])(n.userName),5),Object(c["j"])("span",v,Object(c["K"])(n.title),1),Object(c["j"])("div",O,Object(c["K"])(n.content),1)],8,g)):Object(c["h"])("",!0)}var y={name:"Post",props:{title:{type:String},link:{type:String},content:{type:String},userName:{type:String},userPseudo:{type:String},postType:{type:String,required:!0}},data:function(){return{colors:["#5CE8AD","#785CE8","#E85C5C","#5CCFE8","#e8b55c","#E85CC9"]}},methods:{rand:function(e){return Math.floor(Math.random()*Math.floor(e))}}},S=(n("dd0d"),n("6b0d")),C=n.n(S);const P=C()(y,[["render",k],["__scopeId","data-v-a06eb928"]]);var _=P,w=n("5502"),E={name:"Home",components:{Post:_},data:function(){return{posts:[],fullscreenPost:void 0,rssFeed:["https://www.letudiant.fr/rss/metiers.html","https://www.letudiant.fr/rss.html","https://jobs-stages.letudiant.fr/stages-etudiants/rss.xml","https://jobs-stages.letudiant.fr/jobs-etudiants/rss.xml"],fromPost:0,toPost:20}},mounted:function(){var e=this;this.rssFeed.forEach((function(t){j.a.get(t).then((function(t){var n=(new DOMParser).parseFromString(t.data,"text/xml"),c=n.getElementsByTagName("item");c.forEach((function(t){var c,o,r,s,a=t.children;if("title"===(null===(c=a[0])||void 0===c?void 0:c.tagName)&&"link"===(null===(o=a[1])||void 0===o?void 0:o.tagName)&&"description"===(null===(r=a[2])||void 0===r?void 0:r.tagName)&&"pubDate"===(null===(s=a[4])||void 0===s?void 0:s.tagName)){var u={title:a[0].innerHTML.replace("<![CDATA[","").replace("]]>",""),link:a[1].innerHTML.replace("<![CDATA[","").replace("]]>",""),description:a[2].innerHTML.replace("<![CDATA[","").replace("]]>",""),type:"RSS",user:n.querySelector("channel > title").innerHTML,pubDate:new Date(Date.parse(a[4].textContent))};u.pubDate.getFullYear()>(new Date).getFullYear()-1&&e.posts.push(u)}}))}))}))},methods:{rand:function(e){return Math.floor(Math.random()*Math.floor(e))},loadPosts:function(){var e=document.querySelector(".Home > div");if(e.scrollTop/e.scrollHeight>3/4){if(this.toPost+10>this.posts.length)return;this.toPost+=10,this.fromPost+=10}}},computed:Object(h["a"])({},Object(w["c"])(["getUser"]))};n("acb3");const T=C()(E,[["render",m],["__scopeId","data-v-02439dff"]]);t["default"]=T},dd0d:function(e,t,n){"use strict";n("0173")},ff2d:function(e,t,n){}});
//# sourceMappingURL=app.7a0d9025.js.map