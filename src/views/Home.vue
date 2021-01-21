<template>
    <topic-list v-bind:topics="this.topics"/>
</template>

<script lang="ts">
import TopicList from '@/components/TopicList.vue';
import { Topic } from '@/models/topic';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TopicList },
  data(){
      return { topics: [] as Array<Topic> }
  },
  async mounted(){
      const req = new Request("http://127.0.0.1:8081/api/v1/topics/");
      const res = await fetch(req);
      this.$data.topics = await res.json() as Array<Topic>;
  }
});
</script>
