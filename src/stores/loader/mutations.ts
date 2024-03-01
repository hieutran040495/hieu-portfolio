import { MutationTree } from 'vuex';
import { LoaderState } from './types';
import { TOGGLE_LOADER } from '@/stores/mutations';

const mutations: MutationTree<LoaderState> = {
  [TOGGLE_LOADER](state, isLoader: boolean) {
    state.loader = isLoader;
  },
};

export default mutations;
