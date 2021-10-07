<template>
  <header>
    <div class="logo__container">
      <img
        class="logo"
        src="../../static/logo.png"
        alt="logo"
        @click="onClick"
      />
    </div>

    <div class="search__container">
      <i class="fas fa-video search-icon"></i>
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="Search"
        @keyup.enter="submit"
      />
      <div class="vertical-divider"></div>
      <select v-model="selectedYear">
        <option value="">연도</option>
        <option v-for="(year, index) in yearList" :key="index" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
  </header>
</template>

<script>
import { years } from '@/utils/datas';
import { MSG_TITLE_IS_REQUIRE } from '@/utils/constant';

export default {
  data() {
    return {
      selectedYear: '',
      searchKeyword: '',
    };
  },

  computed: {
    yearList() {
      return years;
    },
  },

  methods: {
    async submit(e) {
      if (!this.searchKeyword) {
        this.disatchError();
        return;
      }
      e.target.blur();

      await this.dispatchGetMovieList();
    },

    dispatchGetMovieList() {
      this.$store.dispatch('movie/getMovieList', {
        searchTitle: this.searchKeyword,
        searchYear: this.selectedYear,
      });
    },

    disatchError() {
      this.$store.commit('movie/assignState', {
        error: {
          isError: true,
          errorMessage: MSG_TITLE_IS_REQUIRE,
        },
      });

      setTimeout(() => {
        this.$store.commit('movie/assignState', {
          error: { isError: false, errorMessage: '' },
        });
      }, 2000);
    },

    onClick() {
      this.$router.push({
        name: 'Introduce',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: $header-height;

  .logo__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url('https://analyticsindiamag.com/wp-content/uploads/2019/04/ntflxx.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $color-background;
      content: '';
      opacity: 0.6;
    }

    .logo {
      cursor: pointer;
      width: 400px;
      height: 150px;
      z-index: 1;
    }
  }

  .search__container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 30%; */
    transform: translateY(-50%);
    background-color: $color-white;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 15px 15px rgba($color-font, 0.2);
    padding-right: 8px;

    input {
      box-sizing: border-box;
      width: 100%;
      height: 60px;
      border: none;
      outline: none;
      font-size: 24px;
      padding: 8px 16px;
    }

    select {
      width: 100px;
      height: 100%;
      border: none;
      outline: none;
    }

    .vertical-divider {
      height: 60%;
      margin: 0 24px;
      border-left: 1px solid rgba($color-border, 0.2);
    }

    .search-icon {
      padding-left: 20px;
      font-size: 28px;
      color: gray;
    }
  }
}
</style>
