<template>
  <div id="main-header">
    <div class="logo-section">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.svg"/>
      </router-link>
    </div>

    <search-bar class="search-bar-container"/>

    <div class="header-right">
      <div class="profile-actions">
        <i class="action-icon el-icon-setting"></i>
        <i class="action-icon el-icon-message-solid"></i>
        <img class="profile-picture" src="http://www.gravatar.com/avatar/4c21c276bf3fb11756112acbfa770b2e?s=181"/>
      </div>
    </div>
  </div>
  <el-container v-if="!loading">
    <div id="aside-left">
      <AppMenu />
    </div>
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

$sidebarWidth: 260px;

#app {
  font-family: Arial, Helvetica, sans-serif;
}

#main-header {
  display: flex;
  align-items: center;
  height: 80px;
  $headerPadding: 50px;

  div.logo-section {
    display: flex;
    justify-content: center;
    width: $sidebarWidth;

    img.logo {
      height: 40px;
    }
  }

  div.search-bar-container {
    flex-grow: 1;
  }

  div.header-right {
    display: flex;
    width: $sidebarWidth;
    justify-content: space-around;

    div.profile-actions {
      display: flex;
      $gap: 10px;
      flex-grow: 1;
      
      column-gap: 10px;
      justify-content: center;
      
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
}

#aside-left {
  min-height: 60vh;
  width: $sidebarWidth;
}
</style>
