<template>
  <div class="tv" v-html="content"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tv",
  computed: {
    ...mapState(["content"]),
  },
};
</script>
