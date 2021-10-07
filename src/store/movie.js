import { request } from '@/utils/api';
import router from '@/routes';

export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      movie: {},
      isLoading: false,
      error: {
        isError: false,
        errorMessage: '',
      },
      totalResults: 0,
      searchTitle: '',
      searchYear: 0,
      nowPage: 1,
    };
  },

  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },

  actions: {
    async getMovieList({ commit }, payload = {}) {
      const { searchTitle, searchYear } = payload;

      commit('assignState', { isLoading: true });
      commit('assignState', { error: { isError: false, errorMessage: '' } });
      commit('assignState', { searchTitle });
      commit('assignState', { searchYear });

      try {
        const { Search, totalResults } = await request({
          s: searchTitle,
          y: searchYear,
        });

        if (Search) {
          router.push({
            name: 'MovieList',
          });
        } else {
          router.push({
            name: 'EmptyResult',
          });
        }

        commit('assignState', { movieList: Search });
        commit('assignState', { totalResults });
        commit('assignState', { isLoading: false });
      } catch (error) {
        commit('assignState', { isLoading: false });
        commit('assignState', {
          error: { isError: true, errorMessage: error.message },
        });
      }
    },

    async getMovie({ commit }, payload = {}) {
      const { id, plot } = payload;

      commit('assignState', { isLoading: true });
      commit('assignState', { error: { isError: false, errorMessage: '' } });

      try {
        const movie = await request({ i: id, plot });

        commit('assignState', { movie });
        commit('assignState', { isLoading: false });
      } catch (error) {
        commit('assignState', { isLoading: false });
        commit('assignState', {
          error: { isError: true, errorMessage: error.message },
        });
      }
    },

    async getMovieListMore({ commit, rootState }, payload = {}) {
      const { searchTitle, searchYear } = payload;

      commit('assignState', { isLoading: true });
      commit('assignState', { error: { isError: false, errorMessage: '' } });
      commit('assignState', { nowPage: rootState.movie.nowPage + 1 });

      try {
        const { Search } = await request({
          s: searchTitle,
          y: searchYear,
          page: rootState.movie.nowPage,
        });

        commit('assignState', {
          movieList: [...rootState.movie.movieList, ...Search],
        });
        commit('assignState', { isLoading: false });
      } catch (error) {
        commit('assignState', { isLoading: false });
        commit('assignState', {
          error: { isError: true, errorMessage: error.message },
        });
        commit('assignState', { nowPage: rootState.movie.nowPage - 1 });
      }
    },
  },
};
