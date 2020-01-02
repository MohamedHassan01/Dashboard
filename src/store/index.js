import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    minSidebar: false
  },

  mutations: {
    toggleSidebar: state => {
      state.minSidebar = !state.minSidebar;
    }
  },

  actions: {},
  modules: {}
});
