<template>
  <div class="line">
    <span class="line__icon">
      A
    </span>
    <span class="line__title">
      Expériences
    </span>
  </div>
</template>

<script>
export default {
  name: "LineItem",

  data() {
    return {};
  }
};
</script>

<style>



.line__icon {

 background-color: white;
 width: 40px;
 height: 40px;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 50%;
 font-size: 24px;
 font-weight: bold;
 border: 4px solid black;
}

.line__title {
background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 /* border-radius: 50%; */
 font-size: 14px;
 font-weight: bold;
 padding: 5px;
 text-transform: uppercase;
 letter-spacing: 2px;
}
</style>