<template>
  <div class="topic-detail">
    <div class="topic-detail--left">
      <div class="topic-detail--vote-container">
        <topic-vote :topic="topic"/>
      </div>
    </div>
    <div class="topic-detail--right">
      <h2 class="topic-title">{{ topic.title }}</h2>
      <div class="topic-content">
        {{ topic.body }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/variables/_colors.scss";

div.topic-detail {
  display: flex;
  border-bottom: 1px solid $lightBorderColor;
  margin-bottom: 25px;

  div.topic-detail--left {
    div.topic-detail--vote-container {
      margin-top: 10px;
    }
  }

  div.topic-detail--right {
    margin-left: 10px;

    h2.topic-title {
      margin-top: 0;
    }

    div.topic--main {
      div.topic--title {
        font-size: 1em;
        font-weight: bold;

        a {
          color: $linkColor;
          text-decoration: none;
        }
      }

      div.topic--content {
        color: $secondaryTextColor;
        margin-top: 0.5em;
      }
    }

    div.topic--footer {
      display: flex;
      gap: 10px;
      color: $secondaryTextColor;
      font-size: 0.8em;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Topic } from "@/models/topic";
import TopicVote from "@/components/TopicVote.vue";

import moment from "moment";

export default defineComponent({
  components: { TopicVote },
  props: {
    topic: {
      type: Object as PropType<Topic>,
    }
  },
  computed: {
    createdAt(): string {
      if (this.topic != null) {
        return moment(this.topic.createdAt).fromNow();
      }
      return "";
    },

    formatAuthorName(): string {
      if (this.topic == null) {
        return "";
      }

      if (this.topic.author == null) {
        return "Unknown";
      }

      if (this.topic.author.details == null || this.topic.author.details.department == null) {
        return `${this.topic.author.givenName} ${this.topic.author.lastName}`;
      }

      return `${this.topic.author.givenName} ${this.topic.author.lastName} (${this.topic.author.details.department})`
    }
  }
});
</script>
