<template>
  <div id="app">
    <div class="main-wrapper">
      <Dashboard />
      <Footer />
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Dashboard,
    Footer
  },
  created () { },

  methods: {},
  mounted () {
    console.clear();

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
