<template>
  <div class="form">
    <h1 class="header">Please choose date:</h1>
    <form>
      <input
        type="date"
        placeholder="DD.MM.YYYY"
        class="input"
        v-model="selectedDate"
      />

      <CustomButtom type="submit" @click.native.prevent="postOrder"
        >confirm</CustomButtom
      >
    </form>
  </div>
</template>

<script>
import { string } from "yup";
import { mapActions } from "vuex";
import CustomButtom from "./shared/CustomButtom.vue";
export default {
  name: "BookApartmentForm",
  components: { CustomButtom },
  data: () => ({
    validDate: string().required(),
    selectedDate: ""
  }),
  methods: {
    ...mapActions(["toOrdersApartment"]),
    ...mapActions("modal", ["toggleModalWindow"]),

    onHandleDate(date) {
      console.log(date);
      this.selectedDate = date;
    },
    async postOrder() {
      try {
        const orderObj = {
          date: this.selectedDate,
          apartmentId: this.$route.params.id
        };
        console.log(orderObj);
        await this.toOrdersApartment(orderObj);
        await this.$store.dispatch("fetchOrders");
        this.$notify({
          group: "foo",
          text: "Your order was successfully added",
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
  top: 30%;
  position: relative;
  text-align: center;
  padding: 20px;
  width: 100%;
  background-color: #ffffff;
}
.header {
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
}
.input {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 70%;
}
</style>
