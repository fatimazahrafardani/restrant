<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <router-view/>
    <!-- <SingUpForm /> -->
  </div>
</template>

<script>
// import SingUpForm from "./components/SingUpForm.vue";

export default {
  name: "App",
  // components: {
  //   SingUpForm,
  // },
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
