(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c47b9a94"],{"04d1":function(e,t,n){var o=n("342f"),r=o.match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},2532:function(e,t,n){"use strict";var o=n("23e7"),r=n("5a34"),c=n("1d80"),a=n("577e"),i=n("ab13");o({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~a(c(this)).indexOf(a(r(e)),arguments.length>1?arguments[1]:void 0)}})},"38bc":function(e,t,n){"use strict";n("738e")},"44e7":function(e,t,n){var o=n("861d"),r=n("c6b6"),c=n("b622"),a=c("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==r(e))}},"4e82":function(e,t,n){"use strict";var o=n("23e7"),r=n("59ed"),c=n("7b0b"),a=n("50c4"),i=n("577e"),s=n("d039"),u=n("addb"),d=n("a640"),l=n("04d1"),f=n("d998"),h=n("2d00"),g=n("512c"),b=[],m=b.sort,p=s((function(){b.sort(void 0)})),v=s((function(){b.sort(null)})),j=d("sort"),O=!s((function(){if(h)return h<70;if(!(l&&l>3)){if(f)return!0;if(g)return g<603;var e,t,n,o,r="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(o=0;o<47;o++)b.push({k:t+o,v:n})}for(b.sort((function(e,t){return t.v-e.v})),o=0;o<b.length;o++)t=b[o].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}})),w=p||!v||!j||!O,R=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:i(t)>i(n)?1:-1}};o({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&r(e);var t=c(this);if(O)return void 0===e?m.call(t):m.call(t,e);var n,o,i=[],s=a(t.length);for(o=0;o<s;o++)o in t&&i.push(t[o]);i=u(i,R(e)),n=i.length,o=0;while(o<n)t[o]=i[o++];while(o<s)delete t[o++];return t}})},"512c":function(e,t,n){var o=n("342f"),r=o.match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},"5a34":function(e,t,n){var o=n("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"738e":function(e,t,n){},"99af":function(e,t,n){"use strict";var o=n("23e7"),r=n("d039"),c=n("e8b5"),a=n("861d"),i=n("7b0b"),s=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),h=n("2d00"),g=f("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",p=h>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),v=l("concat"),j=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:c(e)},O=!p||!v;o({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,o,r,c,a=i(this),l=d(a,0),f=0;for(t=-1,o=arguments.length;t<o;t++)if(c=-1===t?a:arguments[t],j(c)){if(r=s(c.length),f+r>b)throw TypeError(m);for(n=0;n<r;n++,f++)n in c&&u(l,f,c[n])}else{if(f>=b)throw TypeError(m);u(l,f++,c)}return l.length=f,l}})},ab13:function(e,t,n){var o=n("b622"),r=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,"/./"[e](t)}catch(o){}}return!1}},addb:function(e,t){var n=Math.floor,o=function(e,t){var a=e.length,i=n(a/2);return a<8?r(e,t):c(o(e.slice(0,i),t),o(e.slice(i),t),t)},r=function(e,t){var n,o,r=e.length,c=1;while(c<r){o=c,n=e[c];while(o&&t(e[o-1],n)>0)e[o]=e[--o];o!==c++&&(e[o]=n)}return e},c=function(e,t,n){var o=e.length,r=t.length,c=0,a=0,i=[];while(c<o||a<r)c<o&&a<r?i.push(n(e[c],t[a])<=0?e[c++]:t[a++]):i.push(c<o?e[c++]:t[a++]);return i};e.exports=o},b0c0:function(e,t,n){var o=n("83ab"),r=n("5e77").EXISTS,c=n("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,u="name";o&&!r&&c(a,u,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},b89f:function(e,t,n){"use strict";n.r(t);n("b0c0"),n("99af");var o=n("7a23"),r=function(e){return Object(o["B"])("data-v-0135b223"),e=e(),Object(o["z"])(),e},c={class:"SubjectChat"},a={class:"rooms-list"},i={class:"server-name"},s={class:"addNewRoom"},u=r((function(){return Object(o["j"])("span",null,"Ajouter un salon :",-1)})),d=Object(o["l"])("Nom de la room :"),l=Object(o["l"])("Ajouter la room"),f=r((function(){return Object(o["j"])("div",{class:"separator"},null,-1)})),h={class:"chat"};function g(e,t,n,r,g,b){var m,p=Object(o["G"])("router-link"),v=Object(o["G"])("w-input"),j=Object(o["G"])("w-button"),O=Object(o["G"])("w-dialog"),w=Object(o["G"])("router-view");return Object(o["y"])(),Object(o["i"])("div",c,[Object(o["j"])("div",a,[Object(o["j"])("div",i,Object(o["K"])(null===(m=e.getGroup.server)||void 0===m?void 0:m.name),1),(Object(o["y"])(!0),Object(o["i"])(o["a"],null,Object(o["E"])(e.getGroup.server.rooms,(function(t){return Object(o["y"])(),Object(o["g"])(p,{onClick:function(n){return e.setConvUUID(t.room_id)},to:"/groupes/subject/".concat(e.getGroup.groups_id,"/discussion/").concat(t.room_id,"?name=").concat(t.room_name),class:"room",key:t.room_id},{default:Object(o["R"])((function(){return[Object(o["l"])(" # "+Object(o["K"])(t.room_name),1)]})),_:2},1032,["onClick","to"])})),128)),g.rights.canModifyRoom?(Object(o["y"])(),Object(o["i"])("button",{key:0,class:"addRoom",onClick:t[0]||(t[0]=function(e){return g.showAddRoom=!0})}," + ")):Object(o["h"])("",!0),Object(o["m"])(O,{modelValue:g.showAddRoom,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.showAddRoom=e}),width:400},{default:Object(o["R"])((function(){return[Object(o["j"])("div",s,[u,Object(o["m"])(v,{autocomplete:"off",modelValue:g.newRoomName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.newRoomName=e})},{default:Object(o["R"])((function(){return[d]})),_:1},8,["modelValue"]),Object(o["m"])(j,{class:"ma1","bg-color":"success",onClick:b.createNewRoom},{default:Object(o["R"])((function(){return[l]})),_:1},8,["onClick"])])]})),_:1},8,["modelValue"])]),f,Object(o["j"])("div",h,[Object(o["m"])(w)])])}var b=n("5530"),m=(n("159b"),n("4e82"),n("caad"),n("2532"),n("5502")),p=n("bc3a"),v=n.n(p),j={name:"SubjectChat",computed:Object(b["a"])({},Object(m["c"])(["getGroup","getUser"])),methods:Object(b["a"])(Object(b["a"])({},Object(m["b"])(["setConvUUID"])),{},{createNewRoom:function(){var e=this;""!==this.newRoomName&&v.a.post("http://localhost:8080/api/server/addRoom?server_id=".concat(this.getGroup.server.server_id,"&name=").concat(this.newRoomName)).then((function(t){e.getGroup.server.rooms.push(t.data),e.newRoomName="",e.showAddRoom=!1}))}}),data:function(){return{rights:{canSendMessage:!1,canReadMessage:!1,canChangeGroup:!1,canModifyRoom:!1,canModifyNotes:!1,canStream:!1},showAddRoom:!1,newRoomName:""}},beforeRouteUpdate:function(){var e=this;v.a.get("http://localhost:8080/api/groups/getRoleByGroupAndUser?user_id=".concat(this.getUser.id,"&group_id=").concat(this.getGroup.groups_id)).then((function(t){var n=!1;if(t.data.forEach((function(e){"*"===e.rights&&(n=!0)})),n)e.rights={canSendMessage:!0,canReadMessage:!0,canChangeGroup:!0,canModifyRoom:!0,canModifyNotes:!0,canStream:!0};else{t.data.sort((function(e,t){return e.rights.length-t.rights.length}));var o=t.data[t.data.length-1].rights;e.rights={canSendMessage:o.includes("s"),canReadMessage:o.includes("r"),canChangeGroup:o.includes("p"),canModifyRoom:o.includes("c"),canModifyNotes:o.includes("n"),canStream:o.includes("l")}}}))},mounted:function(){var e=this;v.a.get("http://localhost:8080/api/groups/getRoleByGroupAndUser?user_id=".concat(this.getUser.id,"&group_id=").concat(this.getGroup.groups_id)).then((function(t){var n=!1;if(t.data.forEach((function(e){"*"===e.rights&&(n=!0)})),n)e.rights={canSendMessage:!0,canReadMessage:!0,canChangeGroup:!0,canModifyRoom:!0,canModifyNotes:!0,canStream:!0};else{t.data.sort((function(e,t){return e.rights.length-t.rights.length}));var o=t.data[t.data.length-1].rights;e.rights={canSendMessage:o.includes("s"),canReadMessage:o.includes("r"),canChangeGroup:o.includes("p"),canModifyRoom:o.includes("c"),canModifyNotes:o.includes("n"),canStream:o.includes("l")}}}))}},O=(n("38bc"),n("6b0d")),w=n.n(O);const R=w()(j,[["render",g],["__scopeId","data-v-0135b223"]]);t["default"]=R},caad:function(e,t,n){"use strict";var o=n("23e7"),r=n("4d64").includes,c=n("44d2");o({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d998:function(e,t,n){var o=n("342f");e.exports=/MSIE|Trident/.test(o)}}]);
//# sourceMappingURL=chunk-c47b9a94.f8c7bd58.js.map