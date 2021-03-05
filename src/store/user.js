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
    async logout({ commit, dispatch }) {
      try {
        dispatch("loader/setToken", true, { root: true });
        await axios.post("/users/logout");
        commit("SET_TOKEN", null);
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    },
    async register({ commit, dispatch }, req) {
      try {
        dispatch("loader/setToken", true, { root: true });

        const { data } = await axios.post("/users/register", req);
        commit("SET_TOKEN", data.token);

        return true;
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    },
    async login({ commit, dispatch }, req) {
      try {
        dispatch("loader/setToken", true, { root: true });

        const { data } = await axios.post("/users/login", req);
        commit("SET_TOKEN", data.token);

        return true;
      } catch (error) {
        throw new Error(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    }
  }
};
