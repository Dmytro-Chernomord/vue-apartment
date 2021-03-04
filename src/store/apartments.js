import axios from "../utils/axios";

export default {
  namespaced: true,
  state: {
    apartments: [],
    cities: [],
    filteredApartments: [],
    search: {
      city: "",
      price: 300
    }
  },
  getters: {
    // getApartments: state => {
    //   return state.apartments;
    // },
    getApartments: state => {
      const { city, price } = state.search;
      if (!city && !price) {
        return state.apartments;
      }
      if (city && price) {
        return state.apartments.filter(
          el => el.price >= price && el.location.city === city
        );
      }
      if (city) {
        return state.apartments.filter(el => el.location.city === city);
      }
      if (price) {
        return state.apartments.filter(el => el.price >= price);
      }
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
    async fetchApartments({ commit }) {
      const apartments = await axios.get("/apartments");

      commit("SET_APARTMENTS", apartments.data);
    },
    async fetchOneApartment(_, id) {
      const apartments = await axios.get(`/apartments/${id}`);

      return apartments.data;
    },
    async fetchCities({ commit }) {
      const cities = await axios.get(`/cities`);

      commit("SET_CITIES", cities.data);
    },
    setFilter({ commit }, filterValue) {
      commit("SET_FILTER", filterValue);
    }
  }
};
