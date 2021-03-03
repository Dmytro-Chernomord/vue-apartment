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
        this.setToken(data.token);
        return true;
      } catch (error) {
        console.log(error);
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
