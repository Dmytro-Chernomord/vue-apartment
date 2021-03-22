<template>
  <div class="form">
    <h1 class="header">Review</h1>
    <form>
      <input
        @onSubmit="onHandleAuthor"
        placeholder="Author"
        type="text"
        class="inputMargin"
      />
      <textarea
        v-model="content"
        name="review"
        placeholder="Your Review"
        id="3"
        cols="30"
        rows="10"
        class="inputMargin text-aria-decoration"
      ></textarea>
      <input
        @onSubmit="onHandleRating"
        placeholder="Rating"
        type="number"
        class="inputMargin"
        :rules="isValidRating"
      />
      <button type="submit" @click.native.prevent="postReview">
        Send Review
      </button>
    </form>
  </div>
</template>

<script>
import { string, number } from "yup";
import { mapActions } from "vuex";
export default {
  name: "ReviewsForm",
  data: () => ({
    author: "",
    content: "",
    rating: "",
    isValidAuthor: string().required(),
    isValidRating: number()
      .required()
      .max(5)
  }),
  computed: {
    onHandleContent() {
      return this.content;
    }
  },
  methods: {
    ...mapActions("modal", ["toPostReview", "toggleModalWindow"]),
    onHandleAuthor(author) {
      this.author = author;
    },

    onHandleRating(rating) {
      this.rating = rating;
    },
    async postReview() {
      try {
        const reviewObj = {
          id: this.$route.params.id,
          reviewBody: {
            author: this.author,
            content: this.content,
            rating: this.rating
          }
        };
        await this.toPostReview(reviewObj);
        this.$notify({
          group: "foo",
          text: "Your review was successfully added",
          title: "Hurrah...",
          type: "success"
        });
        this.toggleModalWindow(false);
      } catch (error) {
        this.$notify({
          group: "foo",
          title: "Something went wrong",
          text: error,
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  text-align: center;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #ffffff;
}
.header {
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
}
.inputMargin {
  margin-bottom: 20px;
}
.text-aria-decoration {
  width: 100%;
  border-color: #ff662d;
}
</style>
