<template>
  <div id="menu">
    <LineItem/>
    <LineItem/>
    <LineItem/>
  </div>
</template>

<script>
import LineItem from "./Line";
export default {
  name: "Menu",
  components: {
    LineItem
  },
  data() {
    return {};
  }
};
</script>

<style>
#menu {
  grid-column: 1/4;
  grid-row: 1/13;
  background-color: #50E3C2;
  display: grid;
  align-items: center;
  justify-content: center;
}

#menu .line {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>