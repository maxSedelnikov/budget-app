import Vue from "vue";
import Vuex from "vuex";
import budget from "./modules/budget";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    budget,
  },
});
