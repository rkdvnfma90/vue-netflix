<template>
  <img
    v-if="movie.Poster === 'N/A'"
    class="poster"
    src="https://analyticsindiamag.com/wp-content/uploads/2019/04/ntflxx.png"
    alt="poster"
  />

  <img v-else class="poster" :src="movie.Poster" alt="poster" />

  <section class="title-description">
    <span class="title">
      {{ movie.Title }}
    </span>
    <span class="runtime">
      {{ movie.Runtime }}
    </span>
  </section>

  <span class="plot">
    {{ movie.Plot }}
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },

  computed: {
    movie() {
      return this.$store.state.movie.movie;
    },

    isLoading() {
      return this.$store.state.movie.isLoading;
    },
  },

  created() {
    this.getMovie();
  },

  methods: {
    async getMovie() {
      await this.$store.dispatch('movie/getMovie', {
        id: this.id,
        plot: 'short',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 200px;
  object-fit: cover;
  opacity: 0.3;
  object-position: 50% 20%;
}

.title-description {
  display: flex;
  align-items: center;
  width: 100%;
  transform: translateY(-150%);

  .title {
    height: 25px;
    font-weight: 700;
    font-size: 20px;
    padding-left: 20px;
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .runtime {
    min-width: 70px;
    color: gray;
  }
}

.plot {
  line-height: 1.4;
}
</style>
