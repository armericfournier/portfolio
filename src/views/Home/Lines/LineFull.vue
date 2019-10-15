<template>
  <div class="lineFull">
    <Station
      v-for="station in lineData.stations"
      :title="station.title"
      :position="station.position"
      :color="lineData.color"
      v-bind:key="station.title"
    />
    <LinePath
      :path="lineData.path"
      :position="lineData.stations[0].position"
      :color="lineData.color"
    />
  </div>
</template>

<script>
import LinePath from "./Line";
import Station from "./Station";
export default {
  name: "LineFull",
  components: {
    LinePath,
    Station
  },
  props: {
    lineData: Object
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>