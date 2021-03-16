<template>
  <form class="order-form">
    <input
      class="order-form-input"
      type="date"
      name="trip-start"
      :value="Date()"
      :min="Date()"
    />
    <CustomButtom class="order-form-button" title="Book now" />
  </form>
</template>

<script>
import CustomButtom from "./CustomButtom.vue";
console.log(Date());
export default {
  components: { CustomButtom },
  name: "OrderForm"
};
</script>
<style lang="scss" scoped>
.order-form {
  background-color: #fff;
  width: 40%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &-button {
    margin-top: 10px;
    width: 80%;
  }
  &-input {
    width: 80%;
    padding: 7px;
  }
}
</style>
