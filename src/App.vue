<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      searchTerm: "",
      results: [],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");
@import "~normalize.css";

#app {
  font-family: "Poppins", sans-serif;
  position: relative;
}

#app,
.navbar {
  width: 80%;
  max-width: 2100px;
  margin: 0 auto;
  min-width: 375px;
}

@media (max-width: 1300px) {
  #app,
  .navbar {
    width: 85%;
    margin: 0 auto;
  }
}
</style>
