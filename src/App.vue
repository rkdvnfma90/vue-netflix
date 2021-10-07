<template>
  <div class="app__container">
    <Header />

    <main class="page__container">
      <RouterView />
    </main>

    <ScrolltoTop :class="{ active: isShowScrollTop }" />
    <LoadingSpinner :class="{ active: isLoading }" />
    <Toast :class="{ active: error.isError }" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import { throttle } from '@/utils/functions';

export default {
  components: {
    Header,
  },

  data() {
    return {
      isShowScrollTop: false,
    };
  },

  computed: {
    movieList() {
      return this.$store.state.movie.movieList;
    },

    isLoading() {
      return this.$store.state.movie.isLoading;
    },

    error() {
      return this.$store.state.movie.error;
    },
  },

  created() {
    window.addEventListener(
      'scroll',
      throttle(() => {
        if (window.scrollY > 200) {
          this.isShowScrollTop = true;
        } else {
          this.isShowScrollTop = false;
        }
      }, 500),
    );
  },

  unmounted() {
    window.removeEventListener('scroll');
  },
};
</script>

<style lang="scss">
* {
  @include custom-scrollbar();
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
}

.app__container {
  position: relative;
  height: 100vh;
  background-color: $color-background;
}

.page__container {
  padding: 36px 10%;
  width: 100%;
  background-color: $color-background;
}
</style>
