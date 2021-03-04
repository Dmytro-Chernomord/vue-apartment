import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import apartments from "./apartments";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const persistedState = new createPersistedState({
  paths: ["user.token"]
});
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, apartments },
  plugins: [persistedState]
});
