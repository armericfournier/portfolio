<template>
  <section class="loading">
    <Asva/>
    <div class="background"></div>
    <div class="dayNight"></div>
  </section>
</template>

<script>
import Asva from "./Asva";
export default {
  name: "Loader",
  components: {
    Asva
  },

  data() {
    return {};
  }
};
</script>

<style>
.loading {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 999;
  position:relative;
}
</style>