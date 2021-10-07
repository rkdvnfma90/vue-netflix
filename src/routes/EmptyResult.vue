<template>
  <section class="empty__container">
    <h2 class="message">
      {{ message }}
    </h2>
  </section>
</template>

<script>
import { MSG_EMPTY_RESULT } from '@/utils/constant';
export default {
  data() {
    return {
      message: MSG_EMPTY_RESULT,
    };
  },
};
</script>

<style lang="scss" scoped>
.empty__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  .message {
    color: $color-font;
    font-size: 48px;
    text-align: center;
    line-height: 1.4;
    flex-shrink: 0;
    user-select: none;
  }
}
</style>
