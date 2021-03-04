<template>
  <div class="login">
    <!-- <AuthContainer :inputs="inputs" header="Login" /> -->
    <CustomForm :inputs="inputs" header="Login" :submit="submitForm" />
  </div>
</template>

<script>
// import AuthContainer from "../components/shared/AuthContainer";
import CustomForm from "../components/shared/CustomForm.vue";
import axios from "../utils/axios";
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: { CustomForm },
  data: () => ({
    inputs: [
      { type: "text", name: "email" },
      { type: "password", name: "password" }
    ]
  }),
  methods: {
    ...mapActions("user", ["setToken"]),
    async submitForm(req) {
      try {
        const { data } = await axios.post("/users/login", req);
        this.$notify({
          title: "Congratulations",
          text: "You successfully loged",
          type: "success"
        });
        this.setToken(data.token);
        this.$router.push("/");
        return true;
      } catch (error) {
        this.$notify({
          title: "Password or Email is incorrect",
          type: "error"
        });
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding-top: 200px;
  /* align-content: ; */
}
</style>
