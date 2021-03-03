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
        @input="inputHandler"
        :value="inputsValue[el.name]"
      />
      <button class="auth-container-btn" type="submit">{{ header }}</button>
      <p>{{ inputsValue }}</p>
    </form>
    <form @submit.prevent="modelSubmit">
      <input
        v-for="el in inputs"
        :type="el.type"
        :name="el.name"
        :key="el.name"
        :placeholder="el.name"
        v-model="inputName[el.name]"
      />
      <button class="auth-container-btn" type="submit">{{ header }}</button>
    </form>
    <p>{{ inputName }}{{ inputModel }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputsValue: {},
    inputName: {}
  }),
  computed: {
    inputModel() {
      return this.inputsValue;
    }
  },
  props: {
    inputs: {
      type: Array,
      default: () => []
    },
    header: {
      type: String,
      default: "Title"
    }
  },
  methods: {
    inputHandler(e) {
      const { value, name } = e.target;
      this.inputsValue = { ...this.inputsValue, [name]: value };
    },
    resetForm() {
      this.inputsValue = {};
    },
    handlerSubmit() {
      this.resetForm();
    },
    modelSubmit() {
      console.log(this.inputName);
      this.inputName = {};
    }
  }
  //   created() {
  // const obj = this.inputs.reduce((acc, el) => {
  //   acc[el.name] = "";
  //   return acc;
  // }, {});
  // this.inputName = obj;
  //   }
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
