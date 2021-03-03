<template>
  <div class="header">
    <header class="header-container">
      <img :src="logo" alt="logo" />
      <slot></slot>
      <div class="links">
        <router-link to="/register">register</router-link>
        <router-link to="/login">login</router-link>
      </div>
    </header>
  </div>
</template>

<script>
import logo from "../assets/images/logo.svg";
export default {
  name: "Header",
  data: () => ({ logo })
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
.links > a {
  margin-left: 20px;
  font-size: 1.2em;
  /* color: #fff; */
}
/* .links > a.router-link-exact-active {
  color: #42b983;
} */
</style>
