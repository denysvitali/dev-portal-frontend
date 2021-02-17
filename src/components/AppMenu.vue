<template>
  <div class="sidebar">
    <template v-for="menuItem in menuItems" :key="menuItem.title">
      <router-link :to="menuItem.to" custom v-slot="{ navigate }">
        <menu-item 
          :title="menuItem.title" 
          :icon="menuItem.icon"
          :selected="menuItem.to == currentPath"
          @click="navigate" @keypress.enter="navigate" role="link"
        />
      </router-link>
    </template>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    margin: 40px 20px 0px 20px;
  }
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MenuItem from "@/components/MenuItem.vue";

import { faComments, faFireAlt, faListUl, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
  components: { MenuItem },
  data() {
      return {
        menuItems: [
          {title: "New", to: "/new", icon: faComments},
          {title: "Hot", to: "/hot", icon: faFireAlt},
          {title: "Popular", to: "/popular", icon: faThumbsUp},
          {title: "Categories", to: "/categories", icon: faListUl},
        ],
        currentPath: '/',
      };
  },

  watch: {
    $route(to){
      this.currentPath = to.path;
    }
  }
});
</script>