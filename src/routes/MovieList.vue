<template>
  <section class="movielist__container">
    <template v-if="movieList?.length > 0">
      <MovieItem
        v-for="(movie, index) in movieList"
        :key="index"
        :movie="movie"
      />
    </template>
  </section>
  <div ref="target" class="infinite-scroll-target"></div>
</template>

<script>
import MovieItem from '@/components/MovieItem';

export default {
  components: {
    MovieItem,
  },

  computed: {
    movieList() {
      return this.$store.state.movie.movieList;
    },

    isLoading() {
      return this.$store.state.movie.isLoading;
    },

    searchTitle() {
      return this.$store.state.movie.searchTitle;
    },

    searchYear() {
      return this.$store.state.movie.searchYear;
    },

    totalResults() {
      return this.$store.state.movie.totalResults;
    },

    nowPage() {
      return this.$store.state.movie.nowPage;
    },

    observer() {
      const io = new IntersectionObserver((entries) => {
        const isLast =
          this.totalResults <= 10 ||
          parseInt(this.totalResults / this.nowPage, 10) <= 10
            ? true
            : false;

        if (!isLast && !this.isLoading && entries[0].isIntersecting) {
          this.getMovieListMore();
        }
      });
      return io;
    },
  },

  created() {
    if (!this.movieList || this.movieList.length === 0) {
      this.$router.push({
        name: 'Introduce',
      });

      return;
    }
  },

  mounted() {
    this.observer.observe(this.$refs.target);
  },

  methods: {
    async getMovieListMore() {
      this.$store.dispatch('movie/getMovieListMore', {
        searchTitle: this.searchTitle,
        searchYear: this.searchYear,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movielist__container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(100px, 300px));
  gap: 50px 30px;
  color: white;

  @include media(lg) {
    grid-template-columns: repeat(3, minmax(100px, 250px));
  }

  @include media(md) {
    grid-template-columns: repeat(2, minmax(100px, 250px));
  }

  @include media(sm) {
    grid-template-columns: repeat(1, minmax(100px, 300px));
  }
}

.infinite-scroll-target {
  width: 100px;
  height: 50px;
}
</style>
