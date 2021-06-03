<template>
  <div class="index-page">
    <div class="wang-editor" ref="editor"></div>
    <button @click="save">保存</button>
    <div class="tv" v-html="content"></div>
  </div>
</template>

<script>
import Editor from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editor: null,
      content: ""
    };
  },
  methods: {
    init() {
      this.editor = new Editor(this.$refs["editor"]);
      this.editor.create();
    },
    save() {
      // this.$store.commit("setContent", { content: this.editor.txt.html() });
      // this.$router.push({
      //   path:"/tv"
      // })
      this.content = this.editor.txt.html();
      console.log(this.content);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss">
.index-page {
  padding: 30px;
}
</style>
