(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2afaa23d"],{"04d1":function(e,t,n){var r=n("342f"),c=r.match(/firefox\/(\d+)/i);e.exports=!!c&&+c[1]},2532:function(e,t,n){"use strict";var r=n("23e7"),c=n("e330"),o=n("5a34"),a=n("1d80"),i=n("577e"),u=n("ab13"),s=c("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~s(i(a(this)),i(o(e)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),o=n("b622"),a=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==c(e))}},"4e82":function(e,t,n){"use strict";var r=n("23e7"),c=n("e330"),o=n("59ed"),a=n("7b0b"),i=n("07fa"),u=n("577e"),s=n("d039"),d=n("addb"),f=n("a640"),l=n("04d1"),g=n("d998"),h=n("2d00"),p=n("512c"),b=[],v=c(b.sort),m=c(b.push),j=s((function(){b.sort(void 0)})),O=s((function(){b.sort(null)})),y=f("sort"),M=!s((function(){if(h)return h<70;if(!(l&&l>3)){if(g)return!0;if(p)return p<603;var e,t,n,r,c="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)b.push({k:t+r,v:n})}for(b.sort((function(e,t){return t.v-e.v})),r=0;r<b.length;r++)t=b[r].k.charAt(0),c.charAt(c.length-1)!==t&&(c+=t);return"DGBEFHACIJK"!==c}})),S=j||!O||!y||!M,R=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:u(t)>u(n)?1:-1}};r({target:"Array",proto:!0,forced:S},{sort:function(e){void 0!==e&&o(e);var t=a(this);if(M)return void 0===e?v(t):v(t,e);var n,r,c=[],u=i(t);for(r=0;r<u;r++)r in t&&m(c,t[r]);d(c,R(e)),n=c.length,r=0;while(r<n)t[r]=c[r++];while(r<u)delete t[r++];return t}})},"512c":function(e,t,n){var r=n("342f"),c=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!c&&+c[1]},"5a34":function(e,t,n){var r=n("da84"),c=n("44e7"),o=r.TypeError;e.exports=function(e){if(c(e))throw o("The method doesn't accept regular expressions");return e}},"5cb1":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),c=function(e){return Object(r["B"])("data-v-f80cf2f8"),e=e(),Object(r["z"])(),e},o={class:"SubjectHome"},a={key:0,class:"content"},i=c((function(){return Object(r["j"])("p",null," Vous pourrez retrouver ici les documents mis en ligne par votre professeur(e), comme les devoirs, cours PDF, vidéos de cours, etc. ",-1)})),u=c((function(){return Object(r["j"])("p",null," Pour contacter le(s) professeur(s) : ",-1)})),s=["innerHTML"];function d(e,t,n,c,d,f){return Object(r["y"])(),Object(r["i"])("div",o,[d.showDefaultPage?(Object(r["y"])(),Object(r["i"])("div",a,[Object(r["j"])("h1",null,Object(r["K"])(e.getGroup.name),1),Object(r["j"])("h3",null,"Bienvenue dans votre cours de "+Object(r["K"])(e.getGroup.name),1),i,u,Object(r["j"])("ul",null,[(Object(r["y"])(!0),Object(r["i"])(r["a"],null,Object(r["E"])(e.getGroup.roles[0].users,(function(e){return Object(r["y"])(),Object(r["i"])("li",{key:e.id},[Object(r["j"])("em",null,[Object(r["j"])("strong",null,Object(r["K"])(e.mail),1)])])})),128))])])):(Object(r["y"])(),Object(r["i"])("div",{key:1,class:"content",innerHTML:d.content},null,8,s))])}var f=n("5530"),l=(n("99af"),n("d3b7"),n("159b"),n("4e82"),n("caad"),n("2532"),n("5502")),g=n("bc3a"),h=n.n(g),p=n("0e54"),b=n.n(p),v={name:"SubjectHome",data:function(){return{content:"",showDefaultPage:!1,rights:{canSendMessage:!1,canReadMessage:!1,canChangeGroup:!1,canModifyRoom:!1,canModifyNotes:!1,canStream:!1}}},beforeRouteUpdate:function(){var e=this;h.a.get("/common/groups/".concat(this.getGroup.groups_id,"/cours.md")).then((function(t){e.content=b()(t.data)})).catch((function(){console.log("IMPOSSIBLE DE CHARGER LE MARKDOWN DU COURS"),e.showDefaultPage=!0})),h.a.get("/api/groups/getRoleByGroupAndUser?user_id=".concat(this.getUser.id,"&group_id=").concat(this.getGroup.groups_id)).then((function(t){var n=!1;if(t.data.forEach((function(e){"*"===e.rights&&(n=!0)})),n)e.rights={canSendMessage:!0,canReadMessage:!0,canChangeGroup:!0,canModifyRoom:!0,canModifyNotes:!0,canStream:!0};else{t.data.sort((function(e,t){return e.rights.length-t.rights.length}));var r=t.data[t.data.length-1].rights;e.rights={canSendMessage:r.includes("s"),canReadMessage:r.includes("r"),canChangeGroup:r.includes("p"),canModifyRoom:r.includes("c"),canModifyNotes:r.includes("n"),canStream:r.includes("l")}}}))},mounted:function(){var e=this;h.a.get("/common/groups/".concat(this.getGroup.groups_id,"/cours.md")).then((function(t){e.content=b()(t.data)})).catch((function(){console.log("IMPOSSIBLE DE CHARGER LE MARKDOWN DU COURS"),e.showDefaultPage=!0})),h.a.get("/api/groups/getRoleByGroupAndUser?user_id=".concat(this.getUser.id,"&group_id=").concat(this.getGroup.groups_id)).then((function(t){var n=!1;if(t.data.forEach((function(e){"*"===e.rights&&(n=!0)})),n)e.rights={canSendMessage:!0,canReadMessage:!0,canChangeGroup:!0,canModifyRoom:!0,canModifyNotes:!0,canStream:!0};else{t.data.sort((function(e,t){return e.rights.length-t.rights.length}));var r=t.data[t.data.length-1].rights;e.rights={canSendMessage:r.includes("s"),canReadMessage:r.includes("r"),canChangeGroup:r.includes("p"),canModifyRoom:r.includes("c"),canModifyNotes:r.includes("n"),canStream:r.includes("l")}}}))},computed:Object(f["a"])({},Object(l["c"])(["getGroup","getUser"]))},m=(n("e28b"),n("6b0d")),j=n.n(m);const O=j()(v,[["render",d],["__scopeId","data-v-f80cf2f8"]]);t["default"]=O},"99af":function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),o=n("d039"),a=n("e8b5"),i=n("861d"),u=n("7b0b"),s=n("07fa"),d=n("8418"),f=n("65f0"),l=n("1dde"),g=n("b622"),h=n("2d00"),p=g("isConcatSpreadable"),b=9007199254740991,v="Maximum allowed index exceeded",m=c.TypeError,j=h>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),O=l("concat"),y=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:a(e)},M=!j||!O;r({target:"Array",proto:!0,forced:M},{concat:function(e){var t,n,r,c,o,a=u(this),i=f(a,0),l=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?a:arguments[t],y(o)){if(c=s(o),l+c>b)throw m(v);for(n=0;n<c;n++,l++)n in o&&d(i,l,o[n])}else{if(l>=b)throw m(v);d(i,l++,o)}return i.length=l,i}})},ab13:function(e,t,n){var r=n("b622"),c=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(r){}}return!1}},addb:function(e,t,n){var r=n("4dae"),c=Math.floor,o=function(e,t){var n=e.length,u=c(n/2);return n<8?a(e,t):i(e,o(r(e,0,u),t),o(r(e,u),t),t)},a=function(e,t){var n,r,c=e.length,o=1;while(o<c){r=o,n=e[o];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==o++&&(e[r]=n)}return e},i=function(e,t,n,r){var c=t.length,o=n.length,a=0,i=0;while(a<c||i<o)e[a+i]=a<c&&i<o?r(t[a],n[i])<=0?t[a++]:n[i++]:a<c?t[a++]:n[i++];return e};e.exports=o},b0c0:function(e,t,n){var r=n("83ab"),c=n("5e77").EXISTS,o=n("e330"),a=n("9bf2").f,i=Function.prototype,u=o(i.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=o(s.exec),f="name";r&&!c&&a(i,f,{configurable:!0,get:function(){try{return d(s,u(this))[1]}catch(e){return""}}})},b19e:function(e,t,n){},caad:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d998:function(e,t,n){var r=n("342f");e.exports=/MSIE|Trident/.test(r)},e28b:function(e,t,n){"use strict";n("b19e")}}]);
//# sourceMappingURL=chunk-2afaa23d.6eed93d5.js.map