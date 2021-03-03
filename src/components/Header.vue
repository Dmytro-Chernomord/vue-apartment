<template>
  <div class="header">
    <header class="header-container">
      <slot></slot>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #0f1d2d;
  padding: 30px;
}
.header-container {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
