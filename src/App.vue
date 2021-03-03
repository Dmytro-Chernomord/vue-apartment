<template>
  <div id="app">
    <Header>
      <router-link to="/register">register</router-link> |
      <router-link to="/login">login</router-link>
    </Header>
    <Layout :background="isAuth ? '' : background">
      <router-view />
    </Layout>
    <Footer />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import background from "./assets/images/Background.jpg";
export default {
  data: () => ({
    isAuth: false,
    background
  }),
  components: { Layout, Header, Footer }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
