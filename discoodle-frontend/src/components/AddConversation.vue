<template>
   <div class="AddConversation" @click="clickEvent">
      <div class="add-conv-box">
         Créer une nouvelle discussion ici :
         <div>
            <input type="text" placeholder="Entrez un nom de conversation..." autocomplete="off" name="name_room" @keypress="isEnter">
            <button @click="isEnter">
               +
            </button>
         </div>
         <button class="closePopUp" @click="$emit('desactivatePopUp')">
            X
         </button>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
   name: "AddConversation",
   computed: {
      ...mapGetters(['getUser'])
   },
   methods: {
      isEnter(event) {
         let inputValue = document.querySelector("input[name=name_room]").value;
         if ((event.keyCode === 13 && inputValue.value !== "") || event.type === "click") {
            this.addRoom(name);
         }
      },
      clickEvent(event) {
         if (event.target.className === "AddConversation")
            this.$emit('desactivatePopUp');
      },
      addRoom(event, name=document.querySelector('.add-conv-box > div > input').value) {
         axios.post(`${process.env.VUE_APP_API_URL}/api/rooms/addNewRoom`, {
            room_name: name,
            room_members: [this.getUser.id],
            link_picture: null
         }).then(response => {
            this.$emit('groupAdded', response.data);
            this.$emit('desactivatePopUp');
         }).catch(error => {
            console.log(error.response);
            this.$emit('desactivatePopUp');
         });
      }
   }
}
</script>

<style scoped>
.AddConversation {
   z-index: 1001;
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 100%;
}

.AddConversation:before {
   z-index: 1000;
   position: absolute;
   content: "";
   width: 100%;
   height: 100%;
   background-image: url("../assets/pop-up-background.png");
}

.add-conv-box {
   z-index: 1002;
   border-radius: 12px;
   background-color: #F4F4F4;

   position: relative;

   font-size: 20px;
   font-weight: 600;

   width: 450px;

   height: 150px;

   padding: 30px;

   animation: 0.7s ease-in-out appear-opacity;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

.add-conv-box > div {
   width: 80%;
   height: 30px;
   margin-top: 20px;

   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
}

.add-conv-box > div > input {
   background-color: #454150;
   color: #F4F4F4;
   outline: none;
   border: none;

   width: 80%;

   height: 100%;

   border-radius: 12px;
   padding-left: 10px;
}

.add-conv-box > div > input::placeholder {
   color: #F4F4F4;
}

.add-conv-box > div > button {
   outline: none;
   border: none;

   width: 30px;
   height: 30px;

   background-color: #E85C5C;
   border-radius: 100px;
   color: #F4F4F4;
   font-size: 25px;
   font-weight: 600;

   cursor: pointer;
}


.closePopUp {
   position: absolute;
   top: 0;
   right: 0;
   width: 25px;
   height: 25px;

   color: #F4F4F4;

   border-radius: 50%;
   background-color: #454150;
   border: none;
   outline: none;

   display: flex;
   align-items: center;
   justify-content: center;

   transform: translateY(-25%) translateX(25%);

   cursor: pointer;
}

.closePopUp:hover {
   background-color: #E85C5C;
}

@keyframes appear-opacity {
   from {
      /* transform: translateX(100%); */
      opacity: 0;
   }
   to {
      /* transform: translateX(0); */
      opacity: 1;
   }
}
</style>
