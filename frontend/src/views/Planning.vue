<template>
   <div class="Planning">
      <SearchBar/>
   </div>
</template>

<script>
import SearchBar from "@/components/common/SearchBar";
import vueCookie from "vue-cookie";

export default {
   name: "Planning",
   components: {
      SearchBar
   },
   mounted() {
      const cookie = vueCookie.get("fastAccess");

      if (cookie !== null) {
         if (!cookie.includes("Planning|/planning;")) {
            vueCookie.set("fastAccess", `Planning|/planning;${cookie}`, {expires: '1Y'});
         }
      } else {
         vueCookie.set("fastAccess", "Planning|/planning;", {expires: '1Y'});
      }
   }
}
</script>

<style scoped>

</style>
