<template>
	<div class="search-bar">
    <input class="search-input" type="text" placeholder="Search for topics, comments, users, ..."/>
	</div>
</template>

<style lang="scss">
@import "@/variables/_colors.scss";

$searchBarHeight: 50px;
$searchInputHeight: 40px;

$searchBarWidth: 600px;
$searchBarInputWidth: 600px;

div.search-bar {
  box-shadow: 0px 2px 10px #CCC;
  background-color: #ECECEC;
  border-radius: 5px;
  width: $searchBarWidth;
  height: $searchBarHeight;

  input.search-input {
    background-color: transparent;
    border: none;
    $paddingLeft: 20px;
    width: $searchBarInputWidth - $paddingLeft*2;
    height: $searchInputHeight; 
    $marginTop: ($searchBarHeight - $searchInputHeight)/2;
    $marginLeft: 0px;
    margin: $marginTop $marginLeft $marginTop $marginLeft;
    padding: 0px $paddingLeft 0px $paddingLeft;
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
