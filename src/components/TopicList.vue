<template>
  <div class="topics--container">
    <div class="topics--entry" v-for="(item, idx) in this.topics" v-bind:key="idx">
      <topic-entry v-bind:key="idx" v-bind:topic="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Topic } from "@/models/topic";
import { PropType } from "@vue/composition-api";
import { defineComponent } from "vue";
import TopicEntry from "./TopicEntry.vue";

export default defineComponent({
  components: { TopicEntry },
  props: {
    topics: {
      type: Object as PropType<Array<Topic>>,
      default: []
    }
  }
});
</script>
