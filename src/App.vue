<template>
  <div id="app">
    <!-- <md-app md-mode="reveal"> -->
    <Navbar :menu="menu" :activePage="activePage" :go="go" />
    <router-view :go="go"></router-view>
    <Footer />
    <!-- </md-app> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    menu: [
      { to: "/", page: "home" },
      { to: "/about", page: "about" },
      { to: "/contact", page: "contact" },
      { to: "/sell", page: "sell" }
    ],
    activePage: ""
  }),
  created() {
    switch (this.$route.path) {
      case "/":
        this.activePage = "home";
        break;
      case "/about":
        this.activePage = "about";
        break;
      case "/contact":
        this.activePage = "contact";
        break;
      case "/sell":
        this.activePage = "sell";
        break;
      default:
        this.activePage = "";
        break;
    }
  },
  methods: {
    go(to, page) {
      this.$router.push(to);
      this.activePage = page;
    }
  }
};
</script>

<style lang="scss">
// Global Styles
.txt-center {
  text-align: center;
}
</style>

