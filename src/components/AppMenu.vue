<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <template #title>
          <i class="el-icon-s-home"></i>
          <span>Home</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-data"></i>
        <span>Trending</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-chat-round"></i>
        <span>Most discussed</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-trophy"></i>
        <span>Most Upvoted</span>
      </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
      return {};
  }
});
</script>