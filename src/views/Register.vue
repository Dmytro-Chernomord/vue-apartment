<template>
  <div class="login">
    <!-- <AuthContainer :inputs="inputs" header="Registration" /> -->
    <CustomForm :inputs="inputs" header="Registration" :submit="submitForm" />
  </div>
</template>

<script>
// import AuthContainer from "../components/shared/AuthContainer";
import CustomForm from "../components/shared/CustomForm.vue";
import { mapActions } from "vuex";
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
  }),
  methods: {
    ...mapActions("user", ["register"]),
    async submitForm(req) {
      try {
        delete req["confirm password"];
        await this.register(req);
        this.$notify({
          title: "Congratulations",
          text: "You successfully registered",
          type: "success"
        });
        this.$router.push("/");
      } catch (error) {
        this.$notify({
          title: "Password or Email is incorrect",
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 200px;
}
</style>
