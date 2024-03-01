import { MutationTree } from 'vuex';
import { SET_SUCCESS, SET_ERROR, SET_INFO, CLOSE_NOTIFY } from '@/stores/mutations';
import { SnackBarInput } from '@/stores/snackbar/types';

import Color from 'vuetify/lib/util/colors';

const mutations: MutationTree<SnackBarInput> = {
  [SET_SUCCESS](state: SnackBarInput, notifyText: string) {
    state.icon = 'mdi-checkbox-marked-circle';
    state.snackbar = true;
    state.color = Color.green.base;
    state.text = notifyText;
  },
  [SET_ERROR](state: SnackBarInput, notifyText: string) {
    state.icon = 'mdi-close-circle';
    state.snackbar = true;
    state.color = Color.red.accent2;
    state.text = notifyText;
  },
  [SET_INFO](state: SnackBarInput, notifyText: string) {
    state.icon = 'mdi-information';
    state.snackbar = true;
    state.color = Color.lightBlue.accent2;
    state.text = notifyText;
  },
  [CLOSE_NOTIFY](state: SnackBarInput) {
    state.snackbar = false;
  },
};

export default mutations;
