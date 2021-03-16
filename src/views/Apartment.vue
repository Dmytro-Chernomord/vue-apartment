<template>
  <div v-if="Object.keys(this.apartment).length" class="apartment">
    <div class="apartment-title">
      <h1>{{ apartment.title }} {{ apartment.rating }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img
      class="apartment-image"
      :src="apartment.imgUrl"
      alt="Apartment image"
    />
    <div class="apartment-info">
      <div v-if="apartment.owner" class="apartment-owner">
        <h3 class="apartment-info-subtitle">Owner info:</h3>
        <ul>
          <li>Name: {{ apartment.owner.name }}</li>
          <li>Phone: {{ apartment.owner.phone }}</li>
          <li>Email: {{ apartment.owner.email }}</li>
        </ul>
      </div>
      <div class="apartment-price">Preis: {{ priceToLocale }}</div>
      <div class="apartment-reviews">
        <h3>Reviews:</h3>
        <ul v-if="apartment.reviews && apartment.reviews.length">
          <li
            class="apartment-review"
            v-for="el of apartment.reviews"
            :key="el.id"
          >
            <!-- {{ apartment.reviews }} -->
            <h4 class="author">{{ el.author }}</h4>
            <p class="author">{{ el.content }}</p>
          </li>
        </ul>
        <p v-else>No reviews</p>
      </div>
    </div>
    <div class="apartment-description">
      <h2>Description</h2>
      <span class="apartment-description-text">{{ apartment.descr }}</span>
      <CustomButtom
        @click.native="bookAparment"
        class="apartment-description-button"
        title="Book Apartment"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CustomButtom from "../components/shared/CustomButtom.vue";
import StarRating from "../components/shared/StarRating.vue";
export default {
  components: { StarRating, CustomButtom },
  name: "Apartment",
  data: () => ({
    apartment: {}
  }),
  computed: {
    priceToLocale() {
      return Number(this.apartment.price).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      });
    }
  },
  async created() {
    const id = this.$route.params.id;
    const apartment = await this.fetchOneApartment(id);
    this.apartment = apartment;
  },
  methods: {
    bookAparment() {
      console.log("book");
      this.setModal("order");
    },
    ...mapActions("apartments", ["fetchOneApartment"]),
    ...mapActions("modal", ["setModal"])
  }
};
</script>

<style lang="scss" scoped>
.apartment {
  display: flex;
  flex-wrap: wrap;
  &-image {
    width: 70%;
    height: 100%;
  }
  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
  }
  &-info {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding-left: 20px;
    &-subtitle {
      text-align: center;
      font-weight: bold;
    }
  }
  &-owner {
    background-color: #e1efff;
    display: flex;
    flex-direction: column;
    padding: 25px 10px;
  }
  &-owner > ul > li:not(:last-child) {
    margin-bottom: 10px;
  }
  &-price,
  &-reviews {
    padding: 25px 10px;
    background-color: #e1efff;
    margin-top: 20px;
  }
  &-description {
    width: 70%;
    font-size: 18px;
    &-text {
      display: block;
      margin-bottom: 20px;
    }
    &-button {
      margin: auto;
      display: flex;
      padding: 10px 10px;
      border-radius: 10px;
    }
  }
  &-review {
    border: 1px solid green;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }
  &-review:last-child {
    margin-bottom: 0;
  }
}
</style>
