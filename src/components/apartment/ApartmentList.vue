<template>
  <div class="apartments-list">
    <ApartmentsItem
      v-for="{ id, descr, price, rating, title, imgUrl } in items"
      :key="id"
      :urlId="id"
      :descr="descr"
      :price="price"
      :rating="rating"
      :title="title"
      :imgSrc="imgUrl"
      class="apartments-list__item"
    />
  </div>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem";
export default {
  name: "ApartmentList",
  components: {
    ApartmentsItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  /* width: calc(100% - 15px * 2); */
  /* width: 100%; */
  /* margin-left: -15px;
  margin-right: -15px; */
  &__item {
    margin-bottom: 30px;
  }
}
</style>
