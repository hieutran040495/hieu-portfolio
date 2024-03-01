import { Module } from 'vuex';
import { RootState } from '@/stores/types';

import actions from './actions';
import mutations from './mutations';
import { LoaderState } from './types';

const state: LoaderState = {
  loader: false,
};

const namespaced: boolean = true;

const LoaderModule: Module<LoaderState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

export default LoaderModule;
