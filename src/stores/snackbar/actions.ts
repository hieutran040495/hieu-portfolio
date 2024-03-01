import { ActionTree } from 'vuex';
import { RootState } from '@/stores/types';
import { SET_SUCCESS, SET_ERROR, SET_INFO, CLOSE_NOTIFY } from '@/stores/mutations';

const actions: ActionTree<any, RootState> = {
  closeNotify({ commit }) {
    commit(CLOSE_NOTIFY);
  },
  success({ commit }, notifyText: string) {
    commit(SET_SUCCESS, notifyText);
  },
  error({ commit }, notify: any) {
    if (typeof notify === 'object') {
      commit(SET_ERROR, notify.message);
    } else {
      commit(SET_ERROR, notify);
    }
  },
  info({ commit }, notifyText: string) {
    commit(SET_INFO, notifyText);
  },
};

export default actions;
