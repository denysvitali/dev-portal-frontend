<template>
  <div id="main-header">
    <router-link to="/">
      <img class="logo" src="@/assets/logo.svg"/>
    </router-link>

    <search-bar/>

    <div class="profile-actions">
      <i class="action-icon el-icon-setting"></i>
      <i class="action-icon el-icon-message-solid"></i>
      <img class="profile-picture" src="http://www.gravatar.com/avatar/4c21c276bf3fb11756112acbfa770b2e?s=181"/>
    </div>
  </div>
  <el-container v-if="!loading">
    <el-aside id="aside-left">
      <AppMenu />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  <el-footer> </el-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMenu from "@/components/AppMenu.vue";
import SearchBar from "@/components/SearchBar.vue";

export default defineComponent({
  components: { AppMenu, SearchBar },
  data() {
    return {
      loading: true
    };
  },

  mounted() {
    const req = new Request("/config.json");
    fetch(req).then(async resp => {
      try {
        const json = await resp.json();
        console.log(json);
      } catch(e) {
        console.error(`Unable to load config: ${e}`);
      }
      this.$data.loading = false;
      
    });
  }
});
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
}

#main-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  $headerPadding: 50px;

  padding: 0 $headerPadding 0 $headerPadding;

  img.logo {
    height: 40px;
  }

  div.profile-actions {
    display: flex;
    $gap: 8px;

    column-gap: $gap;
    justify-content: space-evenly;
    align-items: center;
    color: #AAA;
    i.action-icon {
      cursor: pointer;
      font-size: 20px;
      $spacing: 8px;
      margin: 0px $spacing 0px $spacing;
    }

    img.profile-picture {
      $height: 45px;
      border-radius: $height;
      height: $height;
      width: $height;
      margin-left: 2*$gap;
    }
  }
}

#aside-left {
  min-height: 60vh;
}
</style>
