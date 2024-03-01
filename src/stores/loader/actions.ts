import { ActionTree } from 'vuex';
import { RootState } from '@/stores/types';
import { LoaderState } from './types';
import { TOGGLE_LOADER } from '@/stores/mutations';

const actions: ActionTree<LoaderState, RootState> = {
  toggleLoader({ commit }, isLoader: boolean) {
    commit(TOGGLE_LOADER, isLoader);
  },
};

export default actions;
