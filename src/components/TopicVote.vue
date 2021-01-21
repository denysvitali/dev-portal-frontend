<template>
	<div class="topic--vote">
		<div class="topic--vote--count">{{ topic.likes }}</div>
		<div class="topic--vote--heart" v-bind:class="{ active: topic.liked }">
			<font-awesome-icon :icon="faHeart" />
		</div>
	</div>
</template>

<style lang="scss">
@import "@/variables/_colors.scss";
.topic--vote--heart:not(.active) svg path {
  stroke: $heartDeactivatedColor;
  fill: transparent;
  stroke-width: 50;
  stroke-linecap: butt;
  stroke-dasharray: 0;
}

.topic--vote--heart.active svg path {
  fill: $heartActivatedColor;
}
</style>

<style lang="scss">
div.topic--vote {
  display: block;
  font-size: 1.2em;
  padding: 10px;
  padding-top: 0px;
  width: 48px;
  text-align: center;

  .topic--vote--heart {
    cursor: pointer;
    margin-top: 8px;
  }

  .topic--vote--count {
    cursor: default;
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Topic } from "@/models/topic";

export default defineComponent({
  components: { FontAwesomeIcon },
  data() {
    return {
      faHeart
    };
  },
  props: {
    topic: {
      type: Object as PropType<Topic>
    }
  }
});
</script>
