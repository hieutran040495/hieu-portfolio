import { Module } from 'vuex';
import { RootState } from '@/stores/types';
import { SnackBarInput } from '@/stores/snackbar/types';

import getters from '@/stores/snackbar/getters';
import actions from '@/stores/snackbar/actions';
import mutations from '@/stores/snackbar/mutations';

const state: SnackBarInput = {
  icon: '',
  snackbar: false,
  text: '',
  color: '',
  timeout: 3000,
};

const namespaced: boolean = true;

const Snackbar: Module<SnackBarInput, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default Snackbar;
