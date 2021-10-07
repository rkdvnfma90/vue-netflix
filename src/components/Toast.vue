<template>
  <div class="toast">
    <div class="toast__inner">{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    errorMessage() {
      return this.$store.state.movie.error.errorMessage;
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30px;
  left: 50%;
  width: 300px;
  background-color: red;
  transform: translateX(-50%) translateY(-200%);
  color: $color-font;
  transition: transform 0.5s;
  z-index: 9;

  &.active {
    transform: translateX(-50%) translateY(0);
  }

  .toast__inner {
    padding: 20px;
  }
}
</style>
