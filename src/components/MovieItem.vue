<template>
  <article class="movie-item" @click="onMovieClick">
    <img
      v-if="movie.Poster === 'N/A'"
      class="movie-poster"
      src="https://user-images.githubusercontent.com/52060742/136052680-4e27b04c-25d0-4bbb-81ce-c704bd619e31.png"
      alt="poster"
    />
    <img v-else class="movie-poster" :src="movie.Poster" alt="poster" />
    <h2 class="movie-title">{{ movie.Title }}</h2>
    <Modal v-if="isShow" v-model="isShow">
      <MovieDetail :id="movie.imdbID" />
    </Modal>
  </article>
</template>

<script>
import MovieDetail from '@/components/MovieDetail';

export default {
  components: {
    MovieDetail,
  },

  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    onMovieClick() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-item {
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $color-font;
  background-color: $color-movie-item-background;
  border-radius: 10px;
  box-shadow: 3px 3px 15px rgba($color-movie-item-background, 1);

  .movie-poster {
    width: 100%;
    height: 400px;
    max-width: 320px;

    @include media(lg) {
      height: 350px;
    }

    @include media(md) {
      height: 300px;
    }

    @include media(sm) {
      height: 400px;
    }
  }

  .movie-title {
    font-size: 20px;
    padding-top: 20px;
    text-align: center;
  }
}
</style>
