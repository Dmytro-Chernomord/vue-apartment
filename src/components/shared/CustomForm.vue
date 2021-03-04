<template>
  <div class="auth-container">
    <h2 class="auth-container-header">{{ header }}</h2>
    <form @submit.prevent="handlerSubmit" class="auth-container-form">
      <input
        v-for="el in inputs"
        :type="el.type"
        :name="el.name"
        :key="el.name"
        :placeholder="el.name"
        v-model="inputValues[el.name]"
      />
      <button class="auth-container-btn" type="submit">{{ header }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CustomForm",
  data: () => ({
    inputValues: {}
  }),
  props: {
    inputs: {
      type: Array,
      default: () => []
    },
    header: {
      type: String,
      default: "Title"
    },
    submit: {
      type: Function
    }
  },
  methods: {
    resetForm() {
      this.inputValues = {};
    },
    async handlerSubmit() {
      console.log(this.inputValues);
      const submitResult = await this.submit(this.inputValues);
      if (submitResult) {
        this.resetForm();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-container {
  background-color: #fff;
  padding: 20px;
  @media screen and (min-width: 767px) {
    width: 50%;
  }
  margin: auto;
  border: 1px solid #000000;
  box-shadow: 1px 1px 20px rgba(#000000, 0.8);
  &-header {
    text-align: center;
    text-transform: capitalize;
  }
  &-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  &-form > input {
    width: 100%;
    font-size: 18px;
    margin-top: 20px;
    font-weight: 500;
    padding: 10px 0;
    text-align: center;
    border: 1px solid orange;
  }

  &-form > input::placeholder {
    color: #000000;
  }
  &-btn {
    padding: 11px 0;
    margin: 15px;
    width: 100%;
    background: orange;
    color: #fff;
    border: 1px solid orange;
    transition: all 300ms;
  }
  &-btn:hover {
    background: #fff;
    color: orange;
  }
}
</style>
