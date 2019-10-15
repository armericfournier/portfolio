<template>
  <div class="containerFluid" id="home">
    <div id="home__content" class="containerRoot">
      <Board/>
    </div>
  </div>
</template>

<script>
import Board from "./Board/Board";

export default {
  name: "Home",
  components: {
    Board
  },

  data() {
    return {};
  }
};
</script>

<style>
.containerRoot {
  width: 100vw;
  height: 100vh;
}
#home {
  width: 100vw;
  height: 100vh;
  background: url(http://servmflv.altervista.org/tuile4.svg);
  background-size: 50px;
}

#home__content {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
  grid-template-rows: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  margin-left: 10px;
  margin-right: 10px;
  max-width: 960px;
  margin: 0 auto;
}

.containerFluid__home {
}
</style>