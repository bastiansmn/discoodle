<template>
   <div class="Courses" v-if="!(JSON.stringify(getUser) === JSON.stringify({}))">
      <div>
         <div class="router">
            <div>
               <router-link :key="group.groups_id" v-for="group in groups"
                            @click="setGroup(group)" :to="group.type === 'SUBJECTS' ? `/groupes/subject/${group.groups_id}/accueil` : `/groupes/subject/${group.groups_id}/discussion`"
                            :class="getGroup.groups_id === group.groups_id && 'router-link-active'"
               >
                  <div class="group">
                     {{ group.description }}
                  </div>
               </router-link>
            </div>
            <JoinGroup v-if="joinGroup" @close="joinGroup = false" @user-entry="addInGroups"/>
            <button class="addGroup" @click="joinGroup = true">
               +
            </button>
         </div>
      </div>
      <router-view @groupAdded="pushInGroups($event);" />
   </div>
   <Account @logSuccess="getRooms(this.getUser.role)  " v-else/>


</template>

<script>
import Account from "@/views/Account";
import {mapActions, mapGetters} from "vuex";
import axios from "axios";
import JoinGroup from "@/components/groups/JoinGroup";

export default {
   name: "Courses",
   components: {JoinGroup, Account},
   computed: {
      ...mapGetters(['getUser', 'getGroup'])
   },
   data() {
      return {
         groups: [],
         joinGroup: false
      }
   },
   methods: {
      getRooms(role) {
         if (role === "STUDENT") {
            axios.get(`${process.env.VUE_APP_API_URL}/api/users/seeAllSubjects?user_id=${this.getUser.id}`).then(response => {
               this.groups = response.data;
            })
         } else {
            axios.get(`${process.env.VUE_APP_API_URL}/api/users/seeAllGroups?user_id=${this.getUser.id}`).then(response => {
               this.groups = response.data;
            })
         }
      },
      ...mapActions(['setGroup']),
      addInGroups(group) {
         if (!Number(group.id))
            return
         if (!this.groups.map(elt => elt.groups_id).includes(Number(group.id))) {
            axios.post(`${process.env.VUE_APP_API_URL}/api/groups/addNewMemberInGroup?group_id=${group.id}&user_id=${this.getUser.id}&token=${group.token}`
            ).then(response => {
               this.groups.push(response.data);
            });
         }
      },
      pushInGroups(group) {
         this.groups.push(group);
      }
   },
   mounted() {
      if (!(JSON.stringify(this.getUser) === JSON.stringify({}))) {
         this.getRooms(this.getUser.role);
      }
   }
}
</script>

<style scoped>
.Courses {
   position: relative;
   width: 100%;
   height: 100%;

   display: flex;
   flex-direction: row;
   align-items: flex-start;
   justify-content: flex-start;
}

.router {
   position: relative;
   width: 150px;
   height: 100vh;
   padding: 50px;

   overflow-y: auto;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
}

.group {
   width: 50px;
   height: 50px;
   margin-bottom: 20px;
   border-radius: 9px;
   background-color: #454150;

   display: flex;
   align-items: center;
   justify-content: center;

   color: #F4F4F4;
   font-size: 17px;
   font-weight: 600;
   z-index: 500;
}

.group:hover {
   border-radius: 8px;
}

.router-link-active > .group {
   position: relative;
   background-color: #E85C5C !important;
}

.addGroup {
   background-color: #F4F4F4;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 40px;
   font-weight: 600;
   color: #454150;
   cursor: pointer;
   width: 50px;
   height: 50px;
   border: none;
   outline: none;
   border-radius: 50%;
}

.dialog > button {
   width: 230px;
   height: 300px;
   cursor: pointer;
   border: none;
   outline: none;
   border-radius: 6px;
   background-color: #8F8F8F;
}
</style>