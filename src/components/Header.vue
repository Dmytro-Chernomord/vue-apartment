<template>
  <div class="header">
    <header class="header-container">
      <router-link to="/"><img :src="logo" alt="logo"/></router-link>
      <slot></slot>
      <div class="links">
        <template v-if="!logged">
          <router-link to="/register">register</router-link>
          <router-link to="/login">Login</router-link>
        </template>
        <template v-else>
          <router-link to="/">home</router-link>
          <img class="user-logo" :src="user" alt="user logo" />
          <span class="profile">Profile</span>\
          <CustomButtom
            class="btn-header"
            title="Logout"
            style="width: 80px; border-radius: 20px; padding: 5px; min-width: 0px;"
            @click.native="handlerLogout"
          />
        </template>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.svg";
import CustomButtom from "./shared/CustomButtom.vue";

export default {
  components: { CustomButtom },
  name: "Header",
  data: () => ({ logo, user }),
  computed: {
    ...mapGetters("user", ["isAuth"]),
    logged() {
      return this.isAuth;
    }
  },
  methods: {
    ...mapActions("user", ["logout"]),
    async handlerLogout() {
      try {
        await this.logout();
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
        this.$notify({
          title: "Something wrong. Try moretime in few minute",
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #0f1d2d;
  padding: 30px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  margin: 0 auto;
}
.links a {
  margin-left: 20px;
  font-size: 1.2em;
  text-transform: capitalize;
  /* color: #fff; */
}
.profile {
  color: #fff;
  margin-left: 5px;
  text-transform: capitalize;
  font-size: 1.2em;
}
.user-logo {
  margin-left: 10px;
}
.btn-header {
  &:active {
    /* outline: 1px solid red; */
    /* outline-offset: 20px; */
  }
  &:hover {
  }
}
</style>
