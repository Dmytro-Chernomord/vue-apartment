<template>
  <div class="form-container">
    <h2 class="form-container-header">{{ header }}</h2>
    <form @submit.prevent="handlerSubmit" class="form-container-form">
      <div v-for="el in inputs" :key="el.name" class="cotantainer-input">
        <input
          :type="el.type"
          :name="el.name"
          :placeholder="el.name"
          v-model="inputValues[el.name]"
          @blur="validate(el.name)"
          @keypress="validate(el.name)"
        />
        <div class="errors">{{ inputErrors[el.name] }}</div>
      </div>

      <button class="form-container-btn" type="submit">{{ header }}</button>
    </form>
  </div>
</template>

<script>
import { object, string } from "yup";
export default {
  name: "CustomForm",
  data: () => ({
    inputValues: {},
    inputErrors: {},
    object,
    string,
    loginFormSchema: {}
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
  computed: {
    // errors() {
    //   return this.inputErrors.name;
    // }
  },
  methods: {
    resetForm() {
      this.inputValues = {};
    },
    async validate(e) {
      return await this.loginFormSchema
        .validateAt(e, this.inputValues)
        .then(() => {
          this.inputErrors = { ...this.inputErrors, [e]: "" };
          return true;
        })
        .catch(err => {
          this.inputErrors = {
            ...this.inputErrors,
            [err.params.path]: err.errors[0]
          };
        });
    },
    async handlerSubmit() {
      const validateAll = this.inputs.map(el => this.validate(el.name));
      const result = await Promise.all(validateAll);
      const isAllValid = result.some(el => !el);
      if (!isAllValid) {
        const submitResult = await this.submit(this.inputValues);
        if (submitResult) {
          this.resetForm();
        }
      }
    }
  },
  created() {
    const keys = {};
    this.inputs.map(el => {
      this.inputErrors[el.name] = "";
      this.inputValues[el.name] = "";
      if (el.name === "email") {
        keys[el.name] = this.string()
          .required()
          .email();
      } else keys[el.name] = this.string().required();
    });
    this.loginFormSchema = object().shape(keys);
  }
};
</script>

<style lang="scss" scoped>
.form-container {
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
  &-form > div {
    width: 100%;
    margin-top: 25px;
  }
  &-form > div > input {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 0;
    text-align: center;
    border: 1px solid orange;
  }

  &-form > div > input::placeholder {
    color: #000000;
  }
  &-btn {
    padding: 11px 0;
    margin: 25px;
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
  .errors {
    color: red;
    position: absolute;
    font-size: 12px;
  }
}
</style>
