export default {
  namespaced: true,
  state: {
    loader: false
  },
  getters: {
    isLoading: ({ loader }) => loader
  },
  mutations: {
    SET_LOADER(state, loader) {
      state.loader = loader;
    }
  },
  actions: {
    setToken({ commit }, loader) {
      commit("SET_LOADER", loader);
    }
  }
};
