(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8854e13c"],{2022:function(e,t,n){"use strict";n("dcb1")},a3ab:function(e,t,n){"use strict";n.r(t);n("b0c0");var s=n("7a23"),i=function(e){return Object(s["B"])("data-v-8ed8cba4"),e=e(),Object(s["z"])(),e},o={class:"Channel"},a={class:"infos"},r={class:"name",style:{color:"#F4F4F4"}},c={class:"buttons"},u=i((function(){return Object(s["j"])("img",{src:"/assets/pin.png",alt:""},null,-1)})),d=[u],g=i((function(){return Object(s["j"])("img",{src:"/assets/user.svg",alt:""},null,-1)})),l=[g],m={class:"user-list"},h=i((function(){return Object(s["j"])("span",{style:{"font-size":"18px",color:"#F4F4F4","font-weight":"600","margin-bottom":"30px"}},"Utilisateur(s) de la room :",-1)})),f={key:0,src:"../../../../assets/crown.svg",style:{height:"80%","margin-right":"10px"},alt:""},p={style:{"max-height":"70vh"}},j={style:{"margin-bottom":"10px"}},b={style:{"text-decoration":"underline"}},v=Object(s["l"])(" : "),O=i((function(){return Object(s["j"])("br",null,null,-1)})),y=i((function(){return Object(s["j"])("br",null,null,-1)})),_=["onClick"],C={key:0,class:"conv-messages"},w={key:0,style:{"align-self":"center","font-size":"15px","font-weight":"500",color:"#F4F4F4"}},E={key:1,class:"conv-messages"},M=i((function(){return Object(s["j"])("span",{style:{"align-self":"center","font-size":"17px","font-weight":"600",color:"#F4F4F4"}},"Vous n'avez pas la permission de lire les messages.",-1)})),U=[M],S={class:"conv-input"},N={key:0},R=["placeholder"],k={class:"right-side-input"},D=i((function(){return Object(s["j"])("img",{src:"../../../../assets/happy.svg",alt:"Smiley",style:{width:"100%"}},null,-1)})),I=[D],x={class:"submit-file",style:{cursor:"pointer"}},A=Object(s["l"])(" + "),G={key:1,style:{"font-size":"17px","font-weight":"600"}};function F(e,t,n,i,u,g){var M=Object(s["G"])("w-drawer"),D=Object(s["G"])("w-divider"),F=Object(s["G"])("w-dialog"),P=Object(s["G"])("Message"),J=Object(s["G"])("EmojiPicker");return Object(s["y"])(),Object(s["i"])("div",o,[Object(s["j"])("div",a,[Object(s["j"])("div",null,[Object(s["j"])("h2",r,Object(s["K"])(u.room.room_name),1),Object(s["j"])("div",c,[Object(s["j"])("button",{style:Object(s["u"])([u.pinAdd?{animation:""}:{animation:"none"},{height:"100%"}]),onClick:t[0]||(t[0]=function(e){u.showPinned=!u.showPinned})},d,4),Object(s["j"])("button",{style:{cursor:"pointer"},onClick:t[1]||(t[1]=function(e){u.showUserList=!0})},l),Object(s["m"])(M,{modelValue:u.showUserList,"onUpdate:modelValue":t[2]||(t[2]=function(e){return u.showUserList=e}),right:"",width:"350px","bg-color":"grey-dark5",style:{"z-index":"550"}},{default:Object(s["R"])((function(){return[Object(s["j"])("div",m,[h,(Object(s["y"])(!0),Object(s["i"])(s["a"],null,Object(s["E"])(e.getGroup.roles,(function(e){return Object(s["y"])(),Object(s["i"])("div",{class:"role",key:e.id},[Object(s["j"])("span",null,Object(s["K"])(e.name)+" - "+Object(s["K"])(e.users.length),1),(Object(s["y"])(!0),Object(s["i"])(s["a"],null,Object(s["E"])(e.users,(function(e){return Object(s["y"])(),Object(s["i"])("div",{key:e.id,class:"user"},[e.id===u.room.room_admin?(Object(s["y"])(),Object(s["i"])("img",f)):Object(s["h"])("",!0),Object(s["l"])(" "+Object(s["K"])(e.name)+" "+Object(s["K"])(e.last_name.toUpperCase()),1)])})),128))])})),128))])]})),_:1},8,["modelValue"])]),Object(s["m"])(F,{width:500,modelValue:u.showPinned,"onUpdate:modelValue":t[3]||(t[3]=function(e){return u.showPinned=e}),style:{"overflow-y":"auto"}},{default:Object(s["R"])((function(){return[Object(s["j"])("div",p,[Object(s["j"])("h3",j,Object(s["K"])(0===u.pinned.length?"Aucun message épinglé":"Liste des messages épinglés :"),1),Object(s["m"])(D,{style:{"margin-bottom":"10px"}}),(Object(s["y"])(!0),Object(s["i"])(s["a"],null,Object(s["E"])(u.pinned,(function(e){return Object(s["y"])(),Object(s["i"])("div",{key:e,class:"message-pinned"},[Object(s["j"])("div",null,[Object(s["j"])("strong",b,Object(s["K"])(e.sender),1),v,O,Object(s["l"])(" "+Object(s["K"])(e.content)+" - "+Object(s["K"])(new Date(e.message_date).toLocaleDateString())+" ",1),y]),u.rights.canModifyRoom?(Object(s["y"])(),Object(s["i"])("button",{key:0,class:"unpin-message",onClick:function(t){return g.unpinMessage(e.message_id)}}," X ",8,_)):Object(s["h"])("",!0)])})),128))])]})),_:1},8,["modelValue"])])]),u.rights.canReadMessage?(Object(s["y"])(),Object(s["i"])("div",C,[0===u.messages.length?(Object(s["y"])(),Object(s["i"])("span",w," Soyez le premier à envoyer un message à "+Object(s["K"])(e.$route.query.name),1)):Object(s["h"])("",!0),(Object(s["y"])(!0),Object(s["i"])(s["a"],null,Object(s["E"])(u.messages,(function(t){return Object(s["y"])(),Object(s["g"])(P,{key:t,content:t.content,sender:t.sender,belong_to_myself:t.sender===e.getUser.username,message_date:t.message_date,message_id:t.message_id,edited:t.edited,"can-pin":u.rights.canModifyRoom,"can-remove":u.rights.canModifyRoom,onPinnedMessage:g.pinnedMessage,onDeletedMessage:g.deletedMessage,onEditedMessage:g.editedMessage},null,8,["content","sender","belong_to_myself","message_date","message_id","edited","can-pin","can-remove","onPinnedMessage","onDeletedMessage","onEditedMessage"])})),128))])):(Object(s["y"])(),Object(s["i"])("div",E,U)),Object(s["j"])("div",S,[Object(s["j"])("span",null,Object(s["K"])(g.getWritersAsText()),1),u.rights.canSendMessage?(Object(s["y"])(),Object(s["i"])("div",N,[Object(s["j"])("input",{type:"text",autocomplete:"off",placeholder:"Envoyer un message à ".concat(e.$route.query.name),onKeydown:t[4]||(t[4]=function(){return g.actionInput&&g.actionInput.apply(g,arguments)})},null,40,R),Object(s["j"])("div",k,[u.showEmoji?(Object(s["y"])(),Object(s["g"])(J,{key:0,onSelectedEmoji:g.insertEmoji,onCloseEmoji:t[5]||(t[5]=function(e){return u.showEmoji=!1}),class:"emojiPicker"},null,8,["onSelectedEmoji"])):Object(s["h"])("",!0),Object(s["j"])("button",{style:{height:"28px",width:"28px"},onClick:t[6]||(t[6]=function(e){return u.showEmoji=!u.showEmoji})},I),Object(s["j"])("label",x,[A,Object(s["j"])("input",{type:"file",ref:"uploadImage",onChange:t[7]||(t[7]=function(e){return g.uploadImage()}),style:{height:"0",width:"0"}},null,544)])])])):(Object(s["y"])(),Object(s["i"])("span",G," Vous n'avez pas la permission d'envoyer des messages. "))])])}var P=n("2909"),J=n("b85c"),T=n("1da1"),K=n("5530"),z=(n("96cf"),n("caad"),n("2532"),n("d3b7"),n("159b"),n("4de4"),n("ac1f"),n("5319"),n("e9c4"),n("99af"),n("a434"),n("a1f0"),n("5b81"),n("4e82"),n("bc3a")),V=n.n(z),B=n("5502"),L=n("0e54"),q=n.n(L),W=n("cc7d"),$=n.n(W),H=n("74d1"),Z=n.n(H),X=n("4bdc"),Q=n("d99d"),Y=n("a289"),ee=null,te={name:"Channel",components:{EmojiPicker:Y["a"],Message:Q["a"]},computed:Object(K["a"])({},Object(B["c"])(["getCurrentConv","getUser","getFriends","getGroup"])),data:function(){return{room:{},writers:[],messages:[],pinned:[],showUserList:!1,pinAdd:!1,showPinned:!1,showEmoji:!1,rights:{canSendMessage:!1,canReadMessage:!1,canChangeGroup:!1,canModifyRoom:!1,canModifyNotes:!1,canStream:!1}}},methods:{connect:function(){var e=this,t=new $.a("/ws");ee=Z.a.over(t),ee.debug=null,ee.connect({},(function(){ee.subscribe("/conversations/rooms/".concat(e.getCurrentConv),(function(t){e.onMessageReceived(t)}))}),this.errorCallBack)},disconnect:function(){null!==ee&&ee.disconnect()},errorCallBack:function(){var e=this;setTimeout((function(){e.connect()}),5e3)},onMessageReceived:function(e){var t=this,n=JSON.parse(e.body);n.sender!==this.getUser.username&&("MESSAGE"===n.type?this.messages.unshift({convUUID:n.convUUID,message_id:n.message_id,content:n.content,sender:n.sender,message_date:n.message_date,pinned:n.pinned,edited:!1}):"WRITING"===n.type?this.writers.includes(n.sender)||(this.writers.push(n.sender),setTimeout((function(){t.writers.pop(n.sender)}),5e3)):"PINNED"===n.type?this.messages.forEach((function(e){e.message_id!==n.message_id||t.pinned.includes(e)||t.pinned.push(e)})):"UNPINNED"===n.type?this.pinned=this.pinned.filter((function(e){return e.message_id!==n.message_id})):"DELETED"===n.type?(this.messages=this.messages.filter((function(e){return e.message_id!==n.message_id})),this.pinned=this.pinned.filter((function(e){return e.message_id!==n.message_id}))):"EDITED"===n.type?(this.messages.forEach((function(e){e.message_id===n.message_id&&(e.content=n.content,e.edited=!0)})),this.pinned.forEach((function(e){e.message_id===n.message_id&&(e.content=n.content,e.edited=!0)}))):"USERS_ADDED"===n.type?(n.users.forEach((function(e){t.containUsername(e)&&V.a.get("/api/users/findByUserName?username=".concat(e)).then((function(e){t.users.push(e.data)}))})),setTimeout((function(){t.getUserOfRoom()}),500)):"USER_REMOVED"===n.type?(this.users=this.users.filter((function(e){return e.id!==n.user_id})),setTimeout((function(){t.getUserOfRoom()}),500),n.user_id===this.getUser.id&&location.replace("/messages")):"CHANGE_ADMIN"===n.type&&(this.roomAdminID=n.user_id))},send:function(){var e=this,t=document.querySelector(".conv-input > div > input");t&&ee&&V.a.post("/api/messages/sendMessage?room_uuid=".concat(this.getCurrentConv),{conv_uuid:this.getCurrentConv,content:t.value,sender:this.getUser.username,message_date:Date.now()}).then((function(n){e.messages.unshift(n.data),ee.send("/conversations/rooms/".concat(e.getCurrentConv),{},JSON.stringify(n.data)),t.value=""}))},writing:function(){this.writers.includes(this.getUser.username)||ee.send("/conversations/rooms/".concat(this.getCurrentConv),{},JSON.stringify({sender:this.getUser.username,type:"WRITING"}))},promoteAdmin:function(e){V.a.put("/api/rooms/changeAdmin?room_id=".concat(this.getCurrentConv,"&admin=").concat(e)),ee.send("/conversations/rooms/".concat(this.getCurrentConv),{},JSON.stringify({user_id:e,type:"CHANGE_ADMIN"}))},unpinMessage:function(e){var t=this;V.a.put("/api/messages/unpinMessage?message_id=".concat(e)).then((function(){var n=0;t.pinned.forEach((function(s){s.message_id===e&&t.pinned.splice(n,1),n++})),ee.send("/conversations/rooms/".concat(t.getCurrentConv),{},JSON.stringify({message_id:e,type:"UNPINNED"}))}))},pinnedMessage:function(e){var t=this;this.messages.forEach((function(n){n.message_id!==e||t.pinned.includes(n)||(ee.send("/conversations/rooms/".concat(t.getCurrentConv),{},JSON.stringify({message_id:e,type:"PINNED"})),t.pinned.push(n))}))},deletedMessage:function(e){ee.send("/conversations/rooms/".concat(this.getCurrentConv),{},JSON.stringify({message_id:e,type:"DELETED"}))},editedMessage:function(e,t){ee.send("/conversations/rooms/".concat(this.getCurrentConv),{},JSON.stringify({message_id:e,content:t,type:"EDITED"}))},addUsers:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s=Object(J["a"])(e),n.prev=1,s.s();case 3:if((i=s.n()).done){n.next=10;break}if(o=i.value,!t.containUsername(o)){n.next=8;break}return n.next=8,V.a.get("/api/users/findByUserName?username=".concat(o)).then((function(e){V.a.post("/api/rooms/addNewMember?room_id=".concat(t.getCurrentConv,"&user_id=").concat(e.data.id))}));case 8:n.next=3;break;case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](1),s.e(n.t0);case 15:return n.prev=15,s.f(),n.finish(15);case 18:ee.send("/conversations/rooms/".concat(t.getCurrentConv),{},JSON.stringify({users:e,type:"USERS_ADDED"}));case 19:case"end":return n.stop()}}),n,null,[[1,12,15,18]])})))()},removerUser:function(e){V.a.delete("/api/rooms/removeMember?room_id=".concat(this.getCurrentConv,"&user_id=").concat(e)),ee.send("/conversations/rooms/".concat(this.getCurrentConv),{},JSON.stringify({user_id:e,type:"USER_REMOVED"}))},uploadImage:function(){var e=this,t=this.$refs.uploadImage.files[0],n=new FormData;n.append("file",t),V()({url:"/api/uploadfile/uploadImageInChat?room_id=".concat(this.getCurrentConv),method:"POST",data:n,headers:{Accept:"application/json","Content-type":"multipart/form-data"}}).then((function(t){"L'extension n'est pas un fichier jpg ou png, il ne peut donc pas être upload"!==t.data&&"Erreur lors du téléchargement de l'image !"!==t.data&&V.a.post("/api/messages/sendMessage?room_uuid=".concat(e.getCurrentConv),{conv_uuid:e.getCurrentConv,content:"![".concat("Image de "+e.getUser.username,"](").concat(t.data,")"),sender:e.getUser.username,message_date:Date.now()}).then((function(t){e.messages.unshift(t.data),ee.send("/conversations/rooms/".concat(e.getCurrentConv),{},JSON.stringify(t.data))}))}))},insertEmoji:function(e){document.querySelector(".conv-input > div > input").value+=e},filterEmoji:function(e){var t=":[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*:",n=Object(P["a"])(e.matchAll(t));return n&&n.length>0&&n.forEach((function(t){X["a"][t[0].replaceAll(":","")]&&(e=e.replace(t[0],X["a"][t[0].replaceAll(":","")]))})),e},filterMarkdown:function(e){return q()(e)},filterPing:function(e){return e.includes("@".concat(this.getUser.username))?(this.mention=!0,e.replaceAll("@".concat(this.getUser.username),"@".concat(this.getUser.name))):e},displayMessage:function(e,t,n,s){return s&&(e=this.filterPing(e)),n&&(e=this.filterEmoji(e)),t&&(e=this.filterMarkdown(e)),e},getUserOfRoom:function(){var e=this;V.a.get("/api/rooms/findUserOfRoom?room_id=".concat(this.getCurrentConv)).then((function(t){e.room.users=t.data}))},getMessagesFromJSON:function(){var e=this;V.a.get("/api/messages?room_uuid=".concat(this.getCurrentConv)).then((function(t){e.messages=t.data.sort((function(e,t){return t.message_date-e.message_date})),e.pinned=e.messages.filter((function(e){return!0===e.pinned}))}))},actionInput:function(e){if(13===e.keyCode&&""!==document.querySelector(".conv-input > div > input").value)this.send(),this.writers.pop(this.getUser.username);else if(13!==e.keyCode){this.writing();var t=document.querySelector(".conv-input > div > input");t.value=this.displayMessage(t.value,!1,!0,!1)}},getWritersAsText:function(){var e=this;if(0===this.writers.length)return"";if(1===this.writers.length)return"".concat(this.writers[0]," est en train d'écrire...");if(this.writers.length>4)return"Plusieurs personnes sont en train d'écrire";var t="";return this.writers.forEach((function(n){t+=n===e.writers[e.writers.length-1]?"et ".concat(n):"".concat(n).concat(n===e.writers[e.writers.length-2]?"":","," ")})),"".concat(t," sont en train d'écrire...")},containUsername:function(e){var t=!1;return this.getFriends.forEach((function(n){n.username===e&&(t=!0)})),t}},mounted:function(){var e=this;V.a.get("/api/rooms/findRoomByID?room_uuid=".concat(this.getCurrentConv)).then((function(t){e.room=t.data,e.getMessagesFromJSON(),e.connect()})),V.a.get("/api/groups/getRoleByGroupAndUser?user_id=".concat(this.getUser.id,"&group_id=").concat(this.getGroup.groups_id)).then((function(t){var n=!1;if(t.data.forEach((function(e){"*"===e.rights&&(n=!0)})),n)e.rights={canSendMessage:!0,canReadMessage:!0,canChangeGroup:!0,canModifyRoom:!0,canModifyNotes:!0,canStream:!0};else{t.data.sort((function(e,t){return e.rights.length-t.rights.length}));var s=t.data[t.data.length-1].rights;e.rights={canSendMessage:s.includes("s"),canReadMessage:s.includes("r"),canChangeGroup:s.includes("p"),canModifyRoom:s.includes("c"),canModifyNotes:s.includes("n"),canStream:s.includes("l")}}}))},beforeRouteUpdate:function(){var e=this;this.disconnect(),V.a.get("/api/rooms/findRoomByID?room_uuid=".concat(this.getCurrentConv)).then((function(t){e.room=t.data,e.getMessagesFromJSON()})),this.connect(),V.a.get("/api/groups/getRoleByGroupAndUser?user_id=".concat(this.getUser.id,"&group_id=").concat(this.getGroup.groups_id)).then((function(t){var n=!1;if(t.data.forEach((function(e){"*"===e.rights&&(n=!0)})),n)e.rights={canSendMessage:!0,canReadMessage:!0,canChangeGroup:!0,canModifyRoom:!0,canModifyNotes:!0,canStream:!0};else{t.data.sort((function(e,t){return e.rights.length-t.rights.length}));var s=t.data[t.data.length-1].rights;e.rights={canSendMessage:s.includes("s"),canReadMessage:s.includes("r"),canChangeGroup:s.includes("p"),canModifyRoom:s.includes("c"),canModifyNotes:s.includes("n"),canStream:s.includes("l")}}}))},unmounted:function(){this.disconnect()}},ne=(n("2022"),n("6b0d")),se=n.n(ne);const ie=se()(te,[["render",F],["__scopeId","data-v-8ed8cba4"]]);t["default"]=ie},dcb1:function(e,t,n){}}]);
//# sourceMappingURL=chunk-8854e13c.3051b08a.js.map