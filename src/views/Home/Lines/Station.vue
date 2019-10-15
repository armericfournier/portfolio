<template>
  <div class="StationItem" :style="cssVars"></div>
</template>

<script>
export default {
  name: "Station",
  props: {
    position: Array,
    color: String,
    title: String,
  },
  computed: {
    cssVars() {
      return {
        "--top": this.position[1] + "px",
        "--left": this.position[0] + "px",
        "--border-color": this.color
      };
    }
  },
  data() {
    return {};
  },
  
};
</script>

<style scoped>
.StationItem {
  position: absolute;
  top: var(--top);
  left: var(--left);
  border-color: var(--border-color);
  border-width: 5px;
  border-style: solid;
  z-index: 2;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
}
</style>