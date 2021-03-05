import axios from "../utils/axios";

export default {
  namespaced: true,
  state: {
    apartments: [],
    cities: [],
    filteredApartments: [],
    search: {
      city: "",
      price: 0
    }
  },
  getters: {
    getFilters: state => {
      return state.search;
    },
    getApartments: state => {
      const { city, price } = state.search;
      if (!city && !price) {
        return state.apartments;
      }
      if (city && price) {
        return state.apartments.filter(
          el => el.price <= price && el.location.city === city
        );
      }
      // if (city) {
      return state.apartments.filter(
        el => el.location.city === city || el.price <= price
      );
      // }
      // if (price) {
      //   return state.apartments.filter(el => el.price <= price);
      // }
    },
    getCities: state => {
      return state.cities;
    }
  },
  mutations: {
    SET_APARTMENTS(state, apartments) {
      state.apartments = apartments;
    },
    SET_CITIES(state, data) {
      state.cities = data;
    },
    SET_FILTER(state, value) {
      state.search = { ...value };
    }
  },
  actions: {
    setApartment({ commit }, apartments) {
      commit("SET_APARTMENTS", apartments);
    },
    async fetchApartments({ commit, dispatch }) {
      try {
        dispatch("loader/setToken", true, { root: true });

        const apartments = await axios.get("/apartments");

        commit("SET_APARTMENTS", apartments.data);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    },
    async fetchOneApartment({ dispatch }, id) {
      try {
        dispatch("loader/setToken", true, { root: true });
        const apartments = await axios.get(`/apartments/${id}`);
        return apartments.data;
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    },
    async fetchCities({ commit, dispatch }) {
      try {
        dispatch("loader/setToken", true, { root: true });

        const cities = await axios.get(`/cities`);

        commit("SET_CITIES", cities.data);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("loader/setToken", false, { root: true });
      }
    },
    setFilter({ commit }, filterValue) {
      commit("SET_FILTER", filterValue);
    }
  }
};
