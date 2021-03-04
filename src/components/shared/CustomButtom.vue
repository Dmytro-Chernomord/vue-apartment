<template>
  <button class="btn">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "CustomButtom",
  props: {
    title: {
      type: String,
      default: "Button"
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 11px 0;
  min-width: 159px;
  background: orange;
  color: #fff;
  border: 1px solid orange;
  transition: all 300ms;
}
.btn:hover {
  background: #fff;
  color: orange;
}
</style>
