<template>
  <div id="backdrop" @click="closeOnBackdropClick" class="backdrop">
    <OrderForm v-if="isModal === 'order'" />
    <slot></slot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import OrderForm from "./OrderForm.vue";
export default {
  components: { OrderForm },
  name: "ModalWindow",
  methods: {
    ...mapActions("modal", ["setModal"]),
    onEspcapeClose(e) {
      if (e.key === "Escape") {
        this.setModal(false);
      }
    },
    closeOnBackdropClick(e) {
      if (e.target.id === "backdrop") {
        this.setModal(false);
      }
    }
  },
  computed: {
    ...mapGetters("modal", ["isModal"])
  },
  created() {
    document.body.addEventListener("keydown", this.onEspcapeClose);
  },
  destroyed() {
    document.body.removeEventListener("keydown", this.onEspcapeClose);
  }
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.651);
}
</style>
