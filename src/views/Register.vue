<template>
  <div class="login">
    <!-- <AuthContainer :inputs="inputs" header="Registration" /> -->
    <CustomForm :inputs="inputs" header="Registration" />
  </div>
</template>

<script>
// import AuthContainer from "../components/shared/AuthContainer";
import CustomForm from "../components/shared/CustomForm.vue";

export default {
  name: "Register",
  components: { CustomForm },
  data: () => ({
    inputs: [
      { type: "text", name: "name" },
      { type: "text", name: "email" },
      { type: "password", name: "password" },
      { type: "password", name: "confirm password" }
    ]
  })
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 200px;
}
</style>
