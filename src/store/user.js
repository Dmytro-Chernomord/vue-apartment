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
    }
  }
};
