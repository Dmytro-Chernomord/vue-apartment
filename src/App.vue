<template>
  <div id="app">
    <Header />
    <Layout :background="isAuth ? '' : background">
      <router-view />
    </Layout>
    <!-- <Home /> -->
    <Footer />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import background from "./assets/images/Background.jpg";
import { mapGetters } from "vuex";
// import Home from "./views/Home.vue";
export default {
  data: () => ({
    ...mapGetters("user", ["isAuth"]),
    background
  }),
  components: {
    Layout,
    Header,
    Footer
    // Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
