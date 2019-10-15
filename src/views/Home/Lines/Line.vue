<template>
  <svg
    class="path"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="597px"
    height="430px"
  >
    <g
      id="Group-2"
      transform="translate(50.000000, 28.000000)"
      v-bind:stroke="color"
      stroke-width="10"
    >
      <g id="lignes">
        <path class="path-line" v-bind:d="path" fill="none"></path>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "LinePath",
  props: {
    path: String,
    position: Array,
    color: String
  },
  computed: {
    cssVars() {
      return {
        "--top": this.position[1] + "px",
        "--left": this.position[0] + "px"
      };
    }
  },
  data() {
    return {
      test: "test"
    };
  }
};
</script>

<style scoped>
.path {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
}
.path-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: 2s ease-in all;
}

.path-line.active {
  stroke-dashoffset: 0;
  transition: 2s ease-in all;
}
</style>