import { ActionTree } from 'vuex';
import { RootState } from '@/stores/types';
import { UserState } from './types';
import { SAVE_TOKEN, REMOVE_TOKEN } from '@/stores/mutations';

const actions: ActionTree<UserState, RootState> = {
  saveToken({ commit }, token: string) {
    commit(SAVE_TOKEN, token);
  },
  removeToken({ commit }) {
    commit(REMOVE_TOKEN);
  },
};

export default actions;
