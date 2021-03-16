<template>
  <div id="app">
    <ModalWindow v-if="isModal" />
    <Loader v-if="load" />
    <notifications width="30%" />
    <Header />
    <Layout :background="needBackground ? background : ''">
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
import { mapGetters } from "vuex";
import Loader from "./components/shared/Loader.vue";
import ModalWindow from "./components/shared/ModalWindow.vue";
export default {
  name: "App",
  components: {
    Layout,
    Header,
    Footer,
    Loader,
    ModalWindow
    // Home
  },
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
    needBackground() {
      if (this.$route.name === "Login" || this.$route.name === "Register") {
        return true;
      }
      return false;
    },
    ...mapGetters("loader", ["isLoading"]),
    ...mapGetters("modal", ["isModal"]),
    ...mapGetters("user", ["isAuth"])
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
