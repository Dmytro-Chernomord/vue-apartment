<template>
  <div v-if="fullScreen" class="backdrop">
    <div
      :style="`width:${width * 4}px; height:${height * 4}px;`"
      class="loader-container"
    >
      <div
        :style="`width:${width}px; height:${height}px;`"
        class="loader"
      ></div>
    </div>
  </div>
  <div
    v-else
    :style="`width:${width * 2}px; height:${height * 2}px;`"
    class="loader-container"
  >
    <div :style="`width:${width}px; height:${height}px;`" class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    },
    fullScreen: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
@keyframes pulse {
  0% {
    transform: scale(2);
  }
  /* 25% {
    transform: scale(1);
  } */
  50% {
    transform: scale(0.1);
  }
  /* 75% {
    transform: scale(1);
  } */
  100% {
    transform: scale(2);
  }
}
.loader {
  border-radius: 50%;
  margin: auto;
  background-color: orange;
  animation-name: pulse;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  &-container {
    background-color: rgba(226, 208, 71, 0.598);
    border-radius: 50%;
    display: flex;
    z-index: 999;
  }
}
.backdrop {
  background-color: rgba(65, 62, 62, 0.276);
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* overflow: hidden; */
}
/* body {
  height: 100vh;
  width: 100vh;
  position: relative;
  overflow: hidden;
} */
</style>
