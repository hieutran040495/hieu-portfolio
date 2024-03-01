import { Module } from 'vuex';
import { RootState } from '@/stores/types';

import actions from './actions';
import mutations from './mutations';
import { UserState } from './types';

const state: UserState = {
  token: '',
};

const namespaced: boolean = true;

const AuthModule: Module<UserState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
};

export default AuthModule;
