<template>
  <div class="apartments">
    <div class="apartments__inner">
      <router-link @click.native="notify" :to="{ path: `apartment/${urlId}` }">
        <!-- <router-link @click.native="notify" :to="{ path: dinamicPath(urlId) }"> -->
        <img :src="imgSrc" alt="Apartment image" class="apartments__photo" />
        <div class="apartments__content">
          <p class="apartments__description">{{ descr }}</p>
          <div class="apartments__rating">
            <StarRating :rating="rating" />
          </div>
          <div class="apartments__price">{{ priceToLocale }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import StarRating from "../shared/StarRating";
import { mapGetters } from "vuex";
export default {
  components: {
    StarRating
  },
  name: "ApartmentsItem",
  props: {
    descr: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    price: { type: Number, reqiered: true },
    imgSrc: { type: String, default: "" },
    urlId: { type: String, default: "" }
  },
  computed: {
    ...mapGetters("user", ["isAuth"]),
    priceToLocale() {
      return Number(this.price).toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR"
      });
    }
  },
  methods: {
    // dinamicPath(id) {
    //   if (this.isAuth) {
    //     return `apartment/${id}`;
    //   }

    //   return `/login`;
    // },
    notify() {
      if (!this.isAuth) {
        this.$notify({
          title: "Please login oder register",
          type: "warn"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.apartments {
  position: relative;
  width: calc((100% - 30px * 2) / 3);
  margin-right: 30px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    cursor: pointer;
    z-index: 1;
    line-height: 1.4;
    &:hover {
      opacity: 1;
    }
  }
  &__inner {
    position: relative;
  }
  &__rating {
    margin-bottom: 20px;
  }
  &__description {
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
    margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }
  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
