<template>
  <div id="plan" class="planBoard__lines">
    <div class="planBoard__lines--container">
      <div class="planBoard__lines--lines">
        <LineFull v-for="line in lines" :lineData="line" v-bind:key="line.title"/>
      </div>
      <div class="planBoard__lines--water"></div>
    </div>
  </div>
</template>

<script>
import LineFull from "./LineFull";
export default {
  name: "Plan",
  components: {
    LineFull
  },
  data() {
    return {
      lines: [
        {
          title: "Présentation",
          color: "#C5A3CD",
          path:
            "M396.5,9 C305.166667,33.6666667 234.333333,75.3452444 184,134.035733 C158.769256,163.455695 155.072936,198.823635 119.5,241.352 C79.674,288.965013 49.692828,302.161718 72,330.520853 C96.688,361.906738 126.188,373.468053 160.5,365.2048",
          stations: [
            {
              title: "station 1",
              position: [431, 23]
            },
            {
              title: "station 2",
              position: [223, 142]
            },
            {
              title: "station 3",
              position: [150, 261]
            },
            {
              title: "station 4",
              position: [115, 352]
            },
            {
              title: "station 5",
              position: [205, 374]
            }
          ]
        },
        {
          title: "Expériences",
          color: "#BB4A9B",
          path:
            "M111,0.446153846 C169.333333,21.0453579 206.666667,34.89664 223,42 C234.485458,46.995021 273.129609,80.5665428 317,96.32288 C376.5,117.692693 410.028069,123.339033 436,132.40864 C485.797811,149.798436 480.797811,193.026596 421,262.09312",
          stations: [
            {
              title: "station 1",
              position: [149, 14]
            },
            {
              title: "station 2",
              position: [261, 59]
            },
            {
              title: "station 3",
              position: [368, 115]
            },
            {
              title: "station 4",
              position: [495, 160]
            },
            {
              title: "station 5",
              position: [449, 279]
            }
          ]
        },
        {
          title: "Projets",
          color: "#CEC92B",
          path:
            "M0,32.09248 C59.2116337,38.5683954 90.2116337,52.3529534 93,73.4461538 C99,118.834453 63.5,125.648533 74.5,164 C89.5936164,216.623848 183,177 220.5,199.006187 C241.23986,211.176993 234,266.735253 261.5,283.373547 C289,300.01184 327,277.930987 325.5,311 C323.006035,365.981975 400,372 415,372 C428.332277,372 450.332277,348.668053 481,302.00416",
          stations: [
            {
              title: "station 1",
              position: [39, 45]
            },
            {
              title: "station 2",
              position: [126, 104]
            },
            {
              title: "station 3",
              position: [133, 200]
            },
            {
              title: "station 4",
              position: [264, 225]
            },
            {
              title: "station 5",
              position: [301, 297]
            },
            {
              title: "station 6",
              position: [364, 344]
            },
            {
              title: "station 7",
              position: [456, 381]
            },
            {
              title: "station 8",
              position: [520, 311]
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    this.getStations();
  },
  methods: {
    getStations: function() {
      var stations = document.querySelectorAll(".StationItem");
      console.log(stations);
    }
  }
};
</script>

<style>
#plan {
  grid-column: 4/13;
  grid-row: 1/13;
  display: grid;
  background-color: #A9FFE3;
  position: relative;
}

.planBoard__lines--water {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
}

.planBoard__lines--lines {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>