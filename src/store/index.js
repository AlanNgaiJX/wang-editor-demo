import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    content: "",
  },
  mutations: {
    setContent(state, { content }) {
      state.content = content;
    },
  },
  actions: {},
  modules: {},
});
