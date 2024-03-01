import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import createPersistedState from 'vuex-persistedstate';
import Secure from '@/shared/utils/secure-ls';

import Snackbar from '@/stores/snackbar';
import AuthModule from '@/stores/auth';
import LoaderModule from '@/stores/loader';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    Snackbar,
    AuthModule,
    LoaderModule,
  },

  plugins: [
    createPersistedState({
      key: process.env.VUE_APP_LOCALSTORAGE_NAME,
      paths: [
        'AuthModule',
      ],
      storage: {
        getItem: (key: string) => Secure.get(key),
        setItem: (key: string, value: string) => Secure.set(key, value),
        removeItem: (key: string) => Secure.remove(key),
      },
    }),
  ],
  getters: {},
  actions: {},
  mutations: {},
};

export default new Vuex.Store<RootState>(store);
