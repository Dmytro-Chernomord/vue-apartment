<template>
  <div class="filter-container">
    <form @submit.prevent="submitForm" class="filter-settings">
      <div>
        <select v-model="city" class="filter-select">
          <option value="">All Cities</option>
          <option v-for="el of getCities" :key="el" :value="el">{{
            el
          }}</option>
        </select>
        <input
          class="filter-input"
          type="text"
          placeholder="Price"
          v-model="price"
        />
        <div v-if="isFilter" class="filters">
          {{ getFilters.price }} euro {{ getFilters.city }}
          <img @click="resetFilter" :src="close" alt="close button" />
        </div>
      </div>
      <CustomButtom type="submit" title="Filter" />
    </form>
    <!-- <p :style="title ? 'color:black;' : ''">Filter Result</p> -->
  </div>
</template>

<script>
import CustomButtom from "./shared/CustomButtom.vue";
import { mapGetters, mapActions } from "vuex";
import close from "../assets/images/close.svg";
export default {
  name: "FilterApartment",
  components: { CustomButtom },
  props: {
    cities: {
      type: Array
    }
  },
  data: () => ({
    range: 0,
    city: "",
    price: 0,
    apartments: () => [],
    close
  }),
  computed: {
    ...mapGetters("apartments", ["getCities", "getFilters", "getApartments"]),
    isFilter() {
      if (this.getFilters.price || this.getFilters.city) {
        return true;
      }
      return false;
    },
    title() {
      console.log(this.getFilters.city, this.getFilters.price, "getFilt");
      console.log(this.getApartments.length, "getFilt");
      if (
        this.getFilters.city &&
        this.getFilters.price &&
        this.getApartments.length
      ) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions("apartments", ["setFilter"]),
    submitForm() {
      const { price, city } = this;
      this.setFilter({ price, city });
    },
    resetFilter() {
      this.setFilter({ price: "", city: "" });
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  &-container {
    padding-top: 20px;
  }
  &-select,
  &-input {
    min-height: 40px;
    /* width: calc(50% - 20px); */
    margin-right: 20px;
    border-color: orange;
    padding: 2px 4px;
  }
  &-input::placeholder {
    color: #000000;
  }
  &-settings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
}
.filters {
  background-color: grey;
  border-radius: 10px;
  display: inline-block;
  padding: 10px 20px;
}
.filters > img {
  vertical-align: bottom;
}
.filters > img:hover {
  background-color: #fff;
}
</style>
