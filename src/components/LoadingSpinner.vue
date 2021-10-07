<template>
  <div class="loader">
    <div class="loader__inner"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba($color-white, 0.3);

  &.active {
    display: flex;
  }

  &__inner {
    @include spinner();
  }
}
</style>
