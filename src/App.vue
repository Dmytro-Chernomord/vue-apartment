<template>
  <div id="app">
    <Loader v-if="load" />
    <notifications width="30%" />
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
import Loader from "./components/shared/Loader.vue";
// import Home from "./views/Home.vue";
export default {
  data: () => ({
    background
  }),
  computed: {
    load() {
      if (this.isLoading) {
        document.documentElement.style.overflow = "hidden";
        return true;
      }
      document.documentElement.style.overflow = "auto";
      return false;
    },
    ...mapGetters("loader", ["isLoading"]),
    ...mapGetters("user", ["isAuth"])
  },
  components: {
    Layout,
    Header,
    Footer,
    Loader
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
.notification {
  width: 100%;
  height: 100%;
  font-size: 30px;
}
</style>
