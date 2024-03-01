import { GetterTree } from 'vuex';
import { RootState } from '@/stores/types';
import { SnackBarInput } from './types';

const getters: GetterTree<SnackBarInput, RootState> = {
  notify: (state: SnackBarInput) => state,
};

export default getters;
