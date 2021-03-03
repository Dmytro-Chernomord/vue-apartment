<template>
  <div class="layout" :style="`background-image:url(${background})`">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    background: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 108px);
  height: 100%;
}
.content {
  max-width: 1110px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>
