import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import lazyLoadService from '@/shared/utils/lazy-load.service';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: {
      template: '<router-view></router-view>',
    },
    meta: {
      isDefaultLayout: false,
    },
    children: [
      {
        path: '',
        name: 'HomePage',
        component: lazyLoadService.loadView('home'),
        meta: {
          isDefaultLayout: true,
        },
      },
      // {
      //   path: 'search',
      //   name: 'SearchPage',
      //   component: lazyLoadService.loadView('search'),
      //   meta: {
      //     isDefaultLayout: false,
      //   },
      // },
      {
        path: 'todo',
        name: 'TodoPage',
        component: lazyLoadService.loadView('todo/index'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: 'todo/create',
        name: 'TodoCEPage',
        component: lazyLoadService.loadView('todo/todo-ce'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: 'job-listings',
        name: 'JobListingPage',
        component: lazyLoadService.loadView('job-listings'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: 'weather',
        name: 'WeatherPage',
        component: lazyLoadService.loadView('weather'),
        meta: {
          isDefaultLayout: false,
        },
      },
      {
        path: '404',
        name: 'NotFoundPage',
        component: lazyLoadService.loadView('404'),
      },
      // {
      //   path: '**',
      //   redirect: {
      //     name: 'HomePage',
      //   },
      // },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    window.scrollTo(0, 0);
  }
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
