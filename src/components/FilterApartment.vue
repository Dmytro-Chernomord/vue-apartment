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
      </div>
      <CustomButtom type="submit" title="Filter" />
    </form>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import CustomButtom from "./shared/CustomButtom.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FilterApartment",
  components: { CustomButtom },
  props: {
    cities: {
      type: Array
    }
  },
  data: () => ({
    city: "",
    price: 0,
    title: "No search query",
    apartments: () => []
  }),
  computed: {
    ...mapGetters("apartments", ["getCities"])
  },
  methods: {
    ...mapActions("apartments", ["setFilter"]),
    submitForm() {
      const { price, city } = this;
      this.setFilter({ price, city });
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
    width: calc(50% - 20px);
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
  }
}
</style>
