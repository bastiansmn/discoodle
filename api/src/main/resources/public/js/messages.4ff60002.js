(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["messages"],{"20a3":function(t,e,n){},"3a60":function(t,e,n){},"45aa":function(t,e,n){"use strict";n("20a3")},eaad:function(t,e,n){"use strict";n.r(e);n("e9c4"),n("99af");var o=n("7a23"),i=function(t){return Object(o["B"])("data-v-16f52ff4"),t=t(),Object(o["z"])(),t},c={key:0,class:"Messages"},s={class:"left-pannel"},r={class:"settings-box"},a=i((function(){return Object(o["j"])("img",{src:"../assets/settings.png",alt:"Settings",style:{height:"100%",width:"100%"}},null,-1)})),u=[a],d=i((function(){return Object(o["j"])("img",{src:"../assets/arrow.svg",alt:"",style:{width:"70%"}},null,-1)})),l={class:"convs-list"},m={class:"link-content"},b={class:"user-logo"},p=["src"],f={key:1,src:"../assets/group.svg",alt:"",style:{width:"65%"}},j={key:2},g={class:"conv-name"},O=["onClick"],v=i((function(){return Object(o["j"])("img",{src:"../assets/pen.svg",alt:"",style:{width:"60%"}},null,-1)})),y=[v],h=i((function(){return Object(o["j"])("span",{style:{"margin-bottom":"10px","font-size":"19px","font-weight":"600",color:"#454150"}},"Modifier la discussion :",-1)})),_=Object(o["l"])("Modifier le nom de la room."),w={style:{display:"flex","flex-direction":"column","justify-content":"space-between","margin-top":"10px"}},k={class:"right-pannel"};function C(t,e,n,i,a,v){var C=Object(o["G"])("AddConversation"),R=Object(o["G"])("router-link"),U=Object(o["G"])("w-input"),E=Object(o["G"])("w-dialog"),x=Object(o["G"])("router-view"),A=Object(o["G"])("Account");return JSON.stringify(t.getUser)!==JSON.stringify({})?(Object(o["y"])(),Object(o["i"])("div",c,[Object(o["j"])("div",s,[Object(o["j"])("div",r,[Object(o["j"])("div",null,[Object(o["j"])("div",{class:"add-conversation",onClick:e[0]||(e[0]=function(t){return a.showPopUp=!0})}," + "),a.showPopUp?(Object(o["y"])(),Object(o["g"])(C,{key:0,onGroupAdded:v.addNewRoom,onDesactivatePopUp:e[1]||(e[1]=function(t){return a.showPopUp=!1})},null,8,["onGroupAdded"])):Object(o["h"])("",!0),JSON.stringify(t.$route.params)===JSON.stringify({})?(Object(o["y"])(),Object(o["i"])("a",{key:1,class:"settings",style:Object(o["u"])(a.modifying?{animation:"10s cubic-bezier(.11, 0, .09, 1) settingsRoll"}:{}),href:"#/messages",onClick:e[2]||(e[2]=function(t){a.modifying=!a.modifying})},u,4)):(Object(o["y"])(),Object(o["g"])(R,{key:2,to:"/messages",style:{width:"40px",height:"40px",display:"flex","align-items":"center","justify-content":"center","background-color":"transparent !important"}},{default:Object(o["Q"])((function(){return[d]})),_:1}))])]),Object(o["j"])("div",l,[(Object(o["y"])(!0),Object(o["i"])(o["a"],null,Object(o["E"])(a.convList,(function(n){return Object(o["y"])(),Object(o["g"])(R,{key:n.room_id,to:a.modifying?"/messages":"/messages/".concat(n.room_id,"?name=").concat(n.room_name),onClick:function(e){return a.modifying?"":t.setConvUUID(n.room_id)},style:Object(o["u"])(a.modifying?{backgroundColor:"#15131c !important"}:{})},{default:Object(o["Q"])((function(){return[Object(o["j"])("div",m,[Object(o["j"])("div",b,[null!==n.link_picture?(Object(o["y"])(),Object(o["i"])("img",{key:0,src:n.link_picture,alt:""},null,8,p)):n.users.length>2?(Object(o["y"])(),Object(o["i"])("img",f)):(Object(o["y"])(),Object(o["i"])("span",j,Object(o["K"])(n.room_name.charAt(0).toUpperCase()),1))]),Object(o["j"])("div",g,Object(o["K"])(n.room_name),1),a.modifying?(Object(o["y"])(),Object(o["i"])("button",{key:0,class:"edit-button",onClick:function(e){a.editRoom.show=!a.editRoom.show,a.new_name="",t.setConvUUID(n.room_id)}},y,8,O)):Object(o["h"])("",!0),Object(o["m"])(E,{modelValue:a.editRoom.show,"onUpdate:modelValue":e[7]||(e[7]=function(t){return a.editRoom.show=t}),fullscreen:a.editRoom.fullscreen,width:a.editRoom.width,persistent:a.editRoom.persistent,"persistent-no-animation":a.editRoom.persistentNoAnimation},{default:Object(o["Q"])((function(){return[Object(o["j"])("div",null,[h,Object(o["m"])(U,{color:"primary-dark2",minlength:1,modelValue:a.new_name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return a.new_name=t})},{default:Object(o["Q"])((function(){return[_]})),_:1},8,["modelValue"]),Object(o["j"])("div",w,[Object(o["j"])("button",{class:"submit",onClick:e[4]||(e[4]=function(){return v.deleteRoom&&v.deleteRoom.apply(v,arguments)}),style:{"background-color":"#E85C5C !important"}}," Supprimer "),Object(o["j"])("button",{class:"submit",onClick:e[5]||(e[5]=function(){return v.exitRoom&&v.exitRoom.apply(v,arguments)}),style:{"background-color":"#E85C5C !important"}}," Quitter la conversation "),Object(o["j"])("button",{class:"submit",onClick:e[6]||(e[6]=function(){return v.roomEdit&&v.roomEdit.apply(v,arguments)})}," Enregistrer ")])])]})),_:1},8,["modelValue","fullscreen","width","persistent","persistent-no-animation"])])]})),_:2},1032,["to","onClick","style"])})),128))])]),Object(o["j"])("div",k,[Object(o["m"])(x,{onUserChanged:v.getRoomsFromDB},null,8,["onUserChanged"])])])):(Object(o["y"])(),Object(o["g"])(A,{key:1,onLogSuccess:v.getRoomsFromDB},null,8,["onLogSuccess"]))}var R=n("5530"),U=(n("d81d"),n("4de4"),n("d3b7"),n("5502")),E=n("bc3a"),x=n.n(E),A=n("77be"),N={class:"add-conv-box"},S=Object(o["l"])(" Créer une nouvelle discussion ici : ");function L(t,e,n,i,c,s){return Object(o["y"])(),Object(o["i"])("div",{class:"AddConversation",onClick:e[3]||(e[3]=function(){return s.clickEvent&&s.clickEvent.apply(s,arguments)})},[Object(o["j"])("div",N,[S,Object(o["j"])("div",null,[Object(o["j"])("input",{type:"text",placeholder:"Entrez un nom de conversation...",autocomplete:"off",name:"name_room",onKeypress:e[0]||(e[0]=function(){return s.isEnter&&s.isEnter.apply(s,arguments)})},null,32),Object(o["j"])("button",{onClick:e[1]||(e[1]=function(){return s.isEnter&&s.isEnter.apply(s,arguments)})}," + ")]),Object(o["j"])("button",{class:"closePopUp",onClick:e[2]||(e[2]=function(e){return t.$emit("desactivatePopUp")})}," X ")])])}var P={name:"AddConversation",computed:Object(R["a"])({},Object(U["c"])(["getUser"])),methods:{isEnter:function(t){var e=document.querySelector("input[name=name_room]").value;(13===t.keyCode&&""!==e.value||"click"===t.type)&&this.addRoom(name)},clickEvent:function(t){"AddConversation"===t.target.className&&this.$emit("desactivatePopUp")},addRoom:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.querySelector(".add-conv-box > div > input").value;x.a.post("/api/rooms/addNewRoom",{room_name:n,room_members:[this.getUser.id],link_picture:null}).then((function(t){e.$emit("groupAdded",t.data),e.$emit("desactivatePopUp")})).catch((function(t){console.log(t.response),e.$emit("desactivatePopUp")}))}}},D=(n("f90d"),n("6b0d")),G=n.n(D);const J=G()(P,[["render",L],["__scopeId","data-v-99bf6c72"]]);var V=J,$={name:"Messages",components:{AddConversation:V,Account:A["default"]},computed:Object(R["a"])({},Object(U["c"])(["getColors","getUser","getCurrentConv"])),methods:Object(R["a"])(Object(R["a"])({},Object(U["b"])(["setConvUUID"])),{},{getRoomsFromDB:function(){var t=this;x.a.get("/api/users/seeAllRooms?user_id=".concat(this.getUser.id)).then((function(e){t.convList=e.data}))},addNewRoom:function(t){this.convList.unshift({link_picture:t.link_picture,room_name:t.room_name,room_id:t.room_id,users:t.users})},roomEdit:function(){var t=this;if(""!==this.new_name){var e=this.getCurrentConv;x.a.put("/api/rooms/renameRoom?room_id=".concat(e,"&new_name=").concat(this.new_name)).then((function(){t.convList.filter((function(t){return t.room_id===e})).map((function(e){return e.room_name=t.new_name})),t.editRoom.show=!1,t.modifying=!1}))}},deleteRoom:function(){var t=this,e=this.getCurrentConv;x.a.delete("/api/rooms/removeRoom?room_id=".concat(e)).then((function(){t.convList=t.convList.filter((function(t){return t.room_id!==e})),t.editRoom.show=!1,t.modifying=!1}))},exitRoom:function(){var t=this,e=this.getCurrentConv;x.a.delete("/api/rooms/removeMember?room_id=".concat(e,"&user_id=").concat(this.getUser.id)).then((function(){t.convList=t.convList.filter((function(t){return t.room_id!==e})),t.editRoom.show=!1,t.modifying=!1}))}}),data:function(){return{convList:[],displayConversationPopUp:!1,showPopUp:!1,modifying:!1,editRoom:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},new_name:""}},mounted:function(){JSON.stringify(this.getUser)!==JSON.stringify({})&&this.getRoomsFromDB()}};n("45aa");const B=G()($,[["render",C],["__scopeId","data-v-16f52ff4"]]);e["default"]=B},f90d:function(t,e,n){"use strict";n("3a60")}}]);
//# sourceMappingURL=messages.4ff60002.js.map