import axios from "../utils/axios";

export default {
  namespaced: true,
  state: {
    token: null
  },
  getters: {
    isAuth: ({ token }) => token
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    async logout({ commit }) {
      try {
        await axios.post("/users/logout");
        commit("SET_TOKEN", null);
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};
