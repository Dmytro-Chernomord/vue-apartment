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
import axios from "../utils/axios";
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
    ...mapActions("user", ["setToken"]),
    async submitForm(req) {
      try {
        delete req["confirm password"];
        const { data } = await axios.post("/users/register", req);
        this.$notify({
          title: "Congratulations",
          text: "You successfully registered",
          type: "success"
        });
        this.setToken(data.token);
        this.$router.push("/");

        return true;
      } catch (error) {
        this.$notify({
          title: "Password or Email is incorrect",
          // text: error.message,
          type: "error"
        });
        console.dir(error);
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
