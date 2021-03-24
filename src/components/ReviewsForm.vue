<template>
  <div class="form">
    <h1 class="header">Review</h1>
    <form @submit.prevent="postReview">
      <input
        placeholder="Author"
        type="text"
        class="inputMargin"
        v-model="author"
        required
      />
      <textarea
        v-model="content"
        name="review"
        placeholder="Your Review"
        id="3"
        cols="30"
        rows="10"
        class="inputMargin text-aria-decoration"
        required
      ></textarea>
      <input
        placeholder="Rating"
        type="number"
        class="inputMargin"
        v-model="rating"
        min="0"
        max="5"
        required
      />
      <CustomButtom title="Post" type="submit" class="button" />
    </form>
  </div>
</template>

<script>
import { string, number } from "yup";
import { mapActions } from "vuex";
import CustomButtom from "./shared/CustomButtom.vue";
export default {
  components: { CustomButtom },
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
          text: "Your review was successfully added",
          title: "Hurrah...",
          type: "success"
        });
        this.toggleModalWindow(false);
      } catch (error) {
        this.$notify({
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
  input,
  textarea {
    padding: 10px;
    border-radius: 10px;
    outline: 1px solid transparent;
    border: 1px solid green;
  }
}
.header {
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
}
.inputMargin {
  min-width: 120px;
  margin-bottom: 20px;
}
.button {
  border-radius: 10px;
  margin-left: 10px;
}
.text-aria-decoration {
  width: 100%;
  border-color: #ff662d;
}
</style>
