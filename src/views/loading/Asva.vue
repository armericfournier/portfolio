<template>
  <section class="asva">
    <div class="asva__container">
      <div class="asva__header">
        <div class="logo"></div>
        <span class="sitename">Méric Fournier</span>
      </div>
      <div class="lineHeader"></div>
      <div class="asva__content">
        <span class="depart">Prochain départ :</span>
        <div class="timer">
          <div class="timer__item" v-for="(item,index) in timeritems[0]" :key="index">
            <div class="line" v-for="(item,index) in timeritems[1]" :key="index">
              <div class="bulb" v-for="(item,index) in timeritems[2]" :key="index"></div>
            </div>
          </div>
          <span>mn</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AsvaModel from "./Asva.js";
export default {
  name: "Asva",
  components: {},

  data() {
    return {
      timeritems: [2, 7, 5]
    };
  },
  mounted: function() {
    var asvacontroller = new AsvaModel();
    asvacontroller.off();
    asvacontroller.show(0);
    var count = 0;
    for (var i = 1; i < 10; i++) {
     
    window.setTimeout(function() { asvacontroller.show(Math.round(Math.random()*i)) }, 1000*i);
      
    }
  }
};
</script>

<style lang="scss" scoped>
.asva {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: grid;
  display: flex;
  align-items: center;
  justify-content: center;
}

.asva__container {
  width: 408px;
  height: auto;
  display: grid;
  grid-template-rows: repeat(4, 18px) 3px repeat(5, 18px);
  grid-template-columns: repeat(2, 18px) 1fr 18px 1fr repeat(2, 18px);
  overflow: hidden;
  background-color: white;
  border-bottom: 38px solid #FFCF00;
  border-radius: 13px;
}

.asva__header {
  grid-column: 3/6;
  grid-row: 2/4;
  display: flex;
  align-items: center;

  .sitename {
    margin-left: 18px;
  }
}

.lineHeader {
  background-color: #13154D;
  grid-column: 2/7;
  grid-row: 5/5;
}

.asva__content {
  grid-row: 7/10;
  grid-column: 3/6;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .timer {
    height: 100%;
    width: 126px;
    height: auto;
    background-color: #454141;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 5px;

    span {
      color: white;
      font-weight: bold;
    }

    .timer__item {
      width: 35px;
      height: 50px;
      background: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .line {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .bulb {
          min-width: 5px;
          min-height: 5px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #5C5454;
          &.active {
            background-color: yellow;
          }
        }
      }
    }
  }
  .depart {
    display: block;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: -36px;
      transform: translateY(-50%);
      width: 1px;
      height: 1px;
      border-top: 10px solid transparent;
      border-left: 20px solid #454141;
      border-bottom: 10px solid transparent;
    }
  }
}
</style>