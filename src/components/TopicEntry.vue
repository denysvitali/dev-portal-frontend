<template>
  <div class="topic-entry">
    <div class="topic--vote">
      <div class="topic--vote--arrow-up">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div class="topic--vote--count">{{ topic.upvotes + -topic.downvotes }}</div>
      <div class="topic--vote--arrow-down">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="topic--right">
      <div class="topic--title">{{ topic.title }}</div>
      <div class="topic--content">{{ topic.body }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.topic-entry {
  display: flex;

  div.topic--vote {
    display: block;
    font-size: 1.2em;
    padding: 10px;
    padding-top: 0px;
    width: 48px;
    text-align: center;

    .topic--vote--arrow-up,
    .topic--vote--arrow-down {
      cursor: pointer;
    }

    .topic--vote--count {
      cursor: default;
    }
  }

  div.topic--right {
    margin-left: 10px;
    div.topic--title {
      font-size: 1em;
      font-weight: bold;
      padding-top: 4px;
    }

    div.topic--content {
        margin-top: 0.5em;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Topic } from "@/models/topic";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
  components: {},
  data() {
    return {
      arrowUp: faArrowUp,
      arrowDown: faArrowDown
    };
  },
  props: {
    topic: {
      type: Object as PropType<Topic>
    }
  }
});
</script>
