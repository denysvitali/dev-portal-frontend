<template>
  <el-header id="main-header">
    <router-link to="/">
      <div class="site-title">DevPortal</div>
    </router-link>
  </el-header>
  <el-container>
    <el-aside id="aside-left">
      <AppMenu/>
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

export default defineComponent({
  components: { AppMenu }
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
  background-color: #80CBC4;

  div.site-title {
    color: #000;
    height: 100%;
    font-weight: 500;
    line-height: 60px;
  }
}

#aside-left {
  min-height: 60vh;
}
</style>
