<template>
  <div id="board" class="planBoard">
    <div class="planBoard__header">
      <a class="planBoard__logo" href="#">
        <span class="logo"></span>
      </a>
      <span class="planBoard__title">Select a line or a station</span>
    </div>
    <div class="planBoard__content">
      <Menu/>
      <Plan/>
    </div>
  </div>
</template>

<script>
import Plan from "../Lines/PlanLines";
import Menu from "../Menu/SideMenu";
export default {
  name: "Board",
  components: {
    Plan,
    Menu
  },

  data() {
    return {};
  }
};
</script>

<style>
#board {
  grid-column: 2 / 12;
  grid-row: 3/11;
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 62px -27px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 62px -27px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 62px -27px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-gap: 0px;
  background-color: white;
  overflow: hidden;
}

.planBoard__header {
  grid-column: 1 / 13;
  grid-row: 1/3;
  display: grid;
  align-items: center;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

.planBoard__logo {
  grid-column: 2 / 3;
}

.logo {
  width: 50px;
  height: 50px;
  background: url(http://servmflv.altervista.org/Metro-M.svg);
  background-size: 50px 50px;
  display: block;
}

.planBoard__title {
  grid-column: 4 / 13;
  text-align: left;
  color: #01B59B;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}

.planBoard__content {
  grid-column: 1 / 13;
  grid-row: 3/13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
</style>