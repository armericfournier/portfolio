<template>
  <div id="app">
    <Loader/>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from "./views/loading/Loader";
import Index from "./views/Index";

export default {
  name: "App",
  components: {
    Index,
    Loader
  }
};
</script>

<style>
</style>
