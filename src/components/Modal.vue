<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>

  <teleport to="body">
    <template v-if="modelValue">
      <div class="modal" @click="offModal">
        <div class="modal__inner" :class="{ active: isDisplay }" @click.stop>
          <button v-if="closeable" class="close" @click="offModal">x</button>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },

    width: {
      type: [String, Number],
      default: 400,
    },

    closeable: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      isDisplay: false,
    };
  },

  computed: {
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
  },

  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener('keyup', this.keyupHandler);
      } else {
        window.removeEventListener('keyup', this.keyupHandler);
      }
    },

    isLoading(newValue) {
      if (!newValue) {
        this.isDisplay = true;
      } else {
        this.isDisplay = false;
      }
    },
  },

  methods: {
    onModal() {
      this.$emit('update:modelValue', true);
    },
    offModal() {
      this.$emit('update:modelValue', false);
    },
    keyupHandler(event) {
      if (event.key === 'Escape') {
        this.offModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color-white, 0.3);

  &__inner {
    @include custom-scrollbar();

    display: none;
    flex-direction: column;
    align-items: center;
    width: 700px;
    max-height: 700px;
    box-sizing: border-box;
    background-color: $color-background;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 10px 10px rgba($color-white, 0.3);
    overflow-y: auto;
    color: $color-font;

    button.close {
      float: right;
    }

    &.active {
      display: flex;
    }
  }
}
</style>
