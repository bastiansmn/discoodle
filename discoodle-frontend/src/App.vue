<template>
   <w-app>
      <div id="root" :style="{ backgroundColor: getColors.color1 }">
         <div id="nav">
            <div class="discoodle-title" :style="{ color: getColors.color5 }">
               Discoodle
            </div>
            <div class="navbar-visible-box">
               <div class="navbar-content-box">
                  <div class="menu">
                     <span class="headerNavbar">MENU</span>
                     <div class="links">
                        <router-link to="/accueil">
                           <div class="navbar-icon"><img src=/assets/home.png alt="Home"></div>
                           <span :style="{ color: getColors.color5 }">ACCUEIL</span></router-link>
                        <router-link to="/groupes" @click="setGroup({})">
                           <div class="navbar-icon"><img src="/assets/courses.png" alt="Courses"></div>
                           <span :style="{ color: getColors.color5 }">COURS</span></router-link>
                        <router-link to="/messages">
                           <div class="navbar-icon"><img src="/assets/messages.png" alt="Messages"></div>
                           <span :style="{ color: getColors.color5 }">MESSAGES</span></router-link>
                        <router-link to="/compte">
                           <div class="navbar-icon"><img src="/assets/account.png" alt="Account"></div>
                           <span :style="{ color: getColors.color5 }">COMPTE</span></router-link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="content">
            <router-view />
         </div>
      </div>

      <w-dialog
         v-model="showPopUp"
         title="Annonce"
         :width="500"
      >
         <p>
            Discoodle est un projet étudiant visant à aider les établissement pour les enseignements à distance. Il permet d'envoyer des messages, de partager son écran dans un cours intéractif, de poster des notes en lignes, avoir un serveur de discussion pour un cours ou entre enseignants...
         </p>
         <p>
            Ce projet est un projet vitrine, il n'est pas dedié à un usage intensif.
            Il possède surement des bugs car il n'est plus maintenu à jour.
         </p>
         <br>
         <span><strong>Bugs fréquents :</strong></span>
         <ul>
            <li>- Le host de la base de donnée peut parfois empêcher les requêtes distantes (peut-être si vous visitez le site depuis un réseau public)</li>
            <li>- Le WebRTC (partage d'écran/webcam en ligne) ne fonctionne plus à cause de la dépendances Firebase pas mise à jour. Ainsi, le quiz interactif lié n'est plus fonctionnel (ces fonctionnalités étaient des points supplémentaires qu'il ne nous était pas demandé d'implémenter.</li>
            <li>- Le serveur ne permet pas le rechargement de la page (le routing n'est pas géré côté serveur)</li>
            <li>- Le site n'est absolument pas responsive</li>
         </ul>
         <p>
            Si vous rencontrez des problèmes non mentionnés, n'hésitez pas à ouvrir une issue sur <a target="_blank" href="https://github.com/bastiansmn/discoodle">le repository</a>
         </p>
         <br>
         <span><strong>Nous contacter :</strong></span>
         <ul>
            <li><a target="_blank" href="mailto:bastian.somon@gmail.com">bastian.somon@gmail.com</a></li>
            <li><a target="_blank" href="mailto:elymo.mc@gmail.com">elymo.mc@gmail.com</a></li>
            <li><a target="_blank" href="mailto:dylan_alexandre@outlook.fr">dylan_alexandre@outlook.fr</a></li>
            <li><a target="_blank" href="mailto:jylanpayet@gmail.com">jylanpayet@gmail.com</a></li>
         </ul>
      </w-dialog>
   </w-app>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import vueCookie from "vue-cookie"
import axios from "axios";

export default {
   name: "App",
   components: {

   },
   methods: {
      ...mapActions(['setUser', 'setGroup']),
   },
   computed: {
      ...mapGetters(['getColors'])
   },
   data() {
      return {
         showPopUp: true
      }
   },
   mounted() {
      if (vueCookie.get("username") !== null && vueCookie.get("username") !== "") {
         axios.get(`${process.env.VUE_APP_API_URL}/api/users/findByUserName?username=${vueCookie.get("username")}`).then(response => {
            const user = response.data;
            if (!user.locked)
               this.setUser(user);
         });
      }
   }
}
</script>

<style scoped>
#root {
   height: 100vh;
   width: 100vw;

   display: flex;
   flex-direction: row;

   overflow-x: hidden;
   overflow-y: hidden;

}

#nav {
   width: 20%;
   min-width: 220px;
   max-width: 300px;
   height: 100%;
}

.discoodle-title {
   width: 100%;
   height: 120px;
   display: flex;
   justify-content: center;
   align-items: center;

   color: #F4F4F4;
   font-weight: 600;
   font-size: 36px;
}

.navbar-visible-box {
   display: flex;
   justify-content: center;
   align-items: flex-start;

   margin-top: 30px;
   margin-bottom: 30px;

   overflow-y: auto;

   width: 100%;
   height: calc(100% - 260px);
}

.navbar-content-box {
   margin-top: 20px;
   margin-left: 15px;
   width: 100%;
}

.navbar-content-box > div > * {
   margin-left: 30px;
}

.navbar-content-box > div {
   margin-bottom: 40px;
}

.headerNavbar {
   text-transform: uppercase;
   color: #909090;
   font-weight: 600;
   font-size: 14px;
}

.navbar-icon {
   background-color: #454150;
   width: 30px;
   height: 30px;
   border-radius: 12px;
   margin-left: 7px;
   margin-right: 20px;
}

.menu > .links > .router-link-active .navbar-icon {
   background-color: #e85c5c;
}

.router-link-active .navbar-icon > img {
   opacity: 1;
}

.links {
   display: flex;
   margin-top: 20px;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
}

.links > a {
   height: 70px;
   width: 100%;
   text-decoration: none;
   color: #F4F4F4;

   display: flex;
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
}

.links > a:hover .navbar-icon {
   background-color: #e85c5c;
}

.navbar-icon > img {
   opacity: 0.6;
}

.links > a:hover .navbar-icon > img {
   opacity: 1;
}

.links > a > span {
   font-size: 19px;
   font-weight: 600;
}


.theme-switcher {
   position: relative;
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 80px;
   align-items: center;
}

.theme-switcher::before {
   content: "";
   margin: 0 auto 0 auto;
   width: 70%;
   height: 1px;
   background-color: #909090;
}

.theme-switcher > div {
   display: flex;
   flex-direction: row;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;
}

#switch[type=checkbox] {
   height: 0;
   width: 0;
   visibility: hidden;
}

label[for="switch"] {
   cursor: pointer;
   text-indent: -9999px;
   width: 40px;
   height: 20px;
   background: #909090;
   display: block;
   border-radius: 100px;
   position: relative;
}

label[for="switch"]:after {
   content: "";
   position: absolute;
   top: 2px;
   left: 2px;
   width: 16px;
   height: 16px;
   background: #F4F4F4;
   border-radius: 90px;
   transition: 0.3s;
}

#switch:checked + label[for="switch"] {
   background: #454150;
}

#switch:checked + label[for="switch"]:after {
   left: calc(100% - 3px);
   transform: translateX(-100%);
}


#content {
   max-width: calc(100% - 220px);
   width: 80%;
   min-width: calc(100% - 300px);
   height: 100%;
}

a {
   color: #5cb0e8;
}

ul {
   list-style: none;
}
</style>
