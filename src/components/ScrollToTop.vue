<template>
  <button class="scroll-top" @click="onClick">
    <i class="fas fa-angle-double-up"></i>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  bottom: 50px;
  right: 50px;
  color: $color-font;
  background-color: $color-background;
  border: 1px solid $color-border;
  border-radius: 4px;
  outline: none;
  transition: background-color 0.5s, transform 0.3s;
  transform: translateY(200%);

  &:hover {
    background-color: $color-border;
  }

  &.active {
    transform: translateY(0);
  }
}
</style>
