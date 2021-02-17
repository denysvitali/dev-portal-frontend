<template>
    <el-button type="primary" plain>Primary</el-button>
    <topic-list v-bind:topics="this.topics"/>
</template>

<style lang="scss">
h2 {
    margin-top: 0;
    margin-bottom: 1em;
}
</style>

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
      try {
        const req = new Request("http://127.0.0.1:8080/api/v1/topics/");
        const res = await fetch(req);
        this.$data.topics = await res.json() as Array<Topic>;
      } catch(e) {
          console.warn(`Unable to load topics: ${e}`);
      }
  }
});
</script>
