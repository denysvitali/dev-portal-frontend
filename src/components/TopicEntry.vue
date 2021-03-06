<template>
  <div class="topic-entry">
    <div class="topic--left">
      <div class="topic--author">
        <img src="https://picsum.photos/200" class="profile-picture"/>
        <div class="full-name">{{ formatAuthorName }}</div>
        <div class="department">{{ department }}</div>
      </div>
    </div>

    <div class="topic--right">
      <div class="topic--main">
        <div class="topic--title">
          <router-link :to="'/topics/' + topic.id">{{ topic.title }}</router-link>
        </div>
        <div class="topic--content">{{ topic.body }}</div>
      </div>

      <div class="topic--footer">
        <div class="topic--posted-on">{{ createdAt }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.topic--author {
  width: 100px;
  text-align: center;

  img.profile-picture {
    $size: 60px;
    width: $size;
    height: $size;
    margin-bottom: 4px;
    border-radius: $size;
  }

  div.full-name {
    color: $profileNameColor;
    font-weight: 500;
    font-size: 0.8em;
  }
}

div.topic-entry {
  display: flex;
  border-bottom: 1px solid $lightBorderColor;
  margin-bottom: 25px;

  div.topic--right {
    margin-left: 10px;
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
  components: { },
  props: {
    topic: {
      type: Object as PropType<Topic>
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
