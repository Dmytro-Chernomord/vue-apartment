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
import axios from "../utils/axios";
const modalWindow = {
  namespaced: true,
  state: {
    showModal: false,
    modalRes: {}
  },
  getters: {
    isModal: ({ showModal }) => showModal,
    getResponse: ({ modalRes }) => modalRes
  },
  mutations: {
    SET_MODAL_WINDOW(state, bool) {
      state.showModal = bool;
    },
    SET_RESPONSE(state, response) {
      state.modalRes = response;
    }
  },
  actions: {
    toggleModalWindow({ commit }, bool) {
      commit("SET_MODAL_WINDOW", bool);
    },
    setModalRes({ commit }, res) {
      commit("SET_RESPONSE", res);
    },
    async toPostReview({ dispatch }, { id, reviewBody }) {
      try {
        dispatch("loader/setToken", true, { root: true });
        const responce = await axios.post(
          `/apartments/${id}/reviews`,
          reviewBody
        );
        dispatch("setModalRes", responce.data);
        console.log(responce);
        return reviewBody;
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    }
  }
};

export default modalWindow;
