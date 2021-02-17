<template>
	<div class="search-bar">
    <input class="search-input" type="text" placeholder="Search for topics, comments, users, ..."/>
    <div class="search-icon">
      <i class="el-icon-search"></i>
    </div>
	</div>
</template>

<style lang="scss">
$searchBarHeight: 50px;
$searchInputHeight: 40px;

$searchBarWidth: 600px;
$searchBarInputWidth: 600px;

div.search-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  position: relative;
  box-shadow: 0px 2px 10px #CCC;
  background-color: #ECECEC;
  border-radius: 5px;
  height: $searchBarHeight;

  $paddingLeft: 20px;
  padding: 0px $paddingLeft 0px $paddingLeft;

  $marginTop: ($searchBarHeight - $searchInputHeight)/2;
  input.search-input {
    flex-grow: 1;
    color: #333;
    background-color: transparent;
    border: none;
    height: $searchInputHeight;
  }

  div.search-icon {
    cursor: pointer;
    display: flex;
    position: absolute;
    align-items: center;
    right: 20px;
    height: $searchInputHeight;
    top: $marginTop;
  }
}

</style>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  data() {
    return {};
  },
  props: {
    
  }
});
</script>
