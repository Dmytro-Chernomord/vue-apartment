<template>
  <div class="home">
    <FilterApartment></FilterApartment>
    <ApartmentList :items="getApartments()" />
  </div>
</template>

<script>
import FilterApartment from "../components/FilterApartment";
import { mapActions, mapGetters } from "vuex";
import ApartmentList from "../components/apartment/ApartmentList.vue";
export default {
  name: "Home",
  components: { FilterApartment, ApartmentList },
  data: () => ({
    ...mapGetters("apartments", ["getApartments"])
  }),
  async created() {
    try {
      await this.fetchApartments();
      await this.fetchCities();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    ...mapActions("apartments", ["fetchApartments", "fetchCities"])
  }
};
</script>
