export default {
  namespaced: true,
  state: {
    modal: false
  },
  getters: {
    isModal: ({ modal }) => modal
  },
  mutations: {
    SET_MODAL(state, modal) {
      state.modal = modal;
    }
  },
  actions: {
    setModal({ commit }, modal) {
      commit("SET_MODAL", modal);
    }
  }
};
