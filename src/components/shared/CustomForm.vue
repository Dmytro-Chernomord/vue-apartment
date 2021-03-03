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
  /* height: 270px; */
  width: 410px;
  margin: auto;
  &-header {
    text-align: center;
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
    margin-top: 20px;
    padding: 5px;
    text-align: center;
  }
  &-btn {
    padding: 11px 0;
    margin: 15px;
    width: 100%;
  }
}
</style>
