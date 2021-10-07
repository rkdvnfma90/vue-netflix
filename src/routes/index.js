import { createRouter, createWebHistory } from 'vue-router';
import MovieList from './MovieList';
import EmptyResult from './EmptyResult';
import Introduce from './Introduce';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce,
    },
    {
      path: '/movielist',
      name: 'MovieList',
      component: MovieList,
    },
    {
      path: '/emptyresult',
      name: 'EmptyResult',
      component: EmptyResult,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
