<template>
  <div class="menu-item-wrapper" v-bind:class="{'selected': selected}">
      <div class="menu-item-inner">
        <font-awesome-icon :icon="icon" class="menu-icon"/>
        <span class="menu-entry">{{ title }}</span>
      </div>
  </div>
</template>

<style lang="scss" scoped>
div.menu-item-wrapper {    
    cursor: pointer;
    $size: 40px;
    height: $size;
    border-radius: $size;
    color: $menuForegroundColor;
    background-color: $menuBackgroundColor;
    $spacing: 8px;
    margin: $spacing 0px $spacing 0px;

    div.menu-item-inner {
        display: grid;
        grid-template-columns: 20px 1fr;
        column-gap: 8px;
        margin: 0px 20px 0px 20px;
        font-weight: 600;

        .menu-icon {
            height: $size;
            text-align: center;
            font-weight: 600;
        }

        span.menu-entry {
            line-height: $size;
        }
    }
}

div.menu-item-wrapper.selected {    
    color: $menuSelectedForegroundColor;
    background-color: $menuSelectedBackgroundColor;
}
</style>

<script lang="ts">
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/vue-fontawesome";
import { defineComponent, PropType } from "@vue/composition-api";

export default defineComponent({
  components: {FontAwesomeIcon},
  props: {
    title: {
      type: String
    },
    icon: {
      type: Object as PropType<FontAwesomeIconProps>
    },
    selected: {
        type: Boolean,
        default: false,
    }
  },
  computed: {
  }
});
</script>
