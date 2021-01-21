<template>
  <topic-detail-view v-if="topic != null" :topic="topic" />
</template>

<script lang="ts">
import TopicDetailView from "@/components/TopicDetailView.vue";
import { Topic } from "@/models/topic";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: { TopicDetailView },
  data() {
    return { topic: Object as PropType<Topic>| undefined };
  },
  async beforeMount() {
		this.$data.topic = undefined;
    const req = new Request(`http://127.0.0.1:8081/api/v1/topics/${this.$route.params.topic_id}`);
    const res = await fetch(req);
    this.$data.topic = (await res.json()) as PropType<Topic>;
  },
});
</script>
