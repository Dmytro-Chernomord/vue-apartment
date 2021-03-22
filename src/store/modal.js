// export default {
//   namespaced: true,
//   state: {
//     modal: false
//   },
//   getters: {
//     isModal: ({ modal }) => modal
//   },
//   mutations: {
//     SET_MODAL(state, modal) {
//       state.modal = modal;
//     }
//   },
//   actions: {
//     setModal({ commit }, modal) {
//       commit("SET_MODAL", modal);
//     }
//   }
// };

const modalWindow = {
  namespaced: true,
  state: {
    showModal: false
  },
  getters: {
    isModal: ({ showModal }) => showModal
  },
  mutations: {
    SET_MODAL_WINDOW(state, bool) {
      state.showModal = bool;
    }
  },
  actions: {
    toggleModalWindow({ commit }, bool) {
      commit("SET_MODAL_WINDOW", bool);
    }
  }
};

export default modalWindow;
