<template>
  <section class="introduce__container">
    <h2 class="message">{{ message }}</h2>
  </section>
</template>

<script>
import { mainTextMessages } from '@/utils/datas';

export default {
  computed: {
    message() {
      return this.getRandomMessage();
    },
  },

  methods: {
    getRandomMessage() {
      const randomIndex = Math.floor(Math.random() * mainTextMessages.length);
      return mainTextMessages[randomIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
.introduce__container {
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
    white-space: pre-line;
  }
}
</style>
