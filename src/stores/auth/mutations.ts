import { MutationTree } from 'vuex';
import { UserState } from './types';
import { SAVE_TOKEN, REMOVE_TOKEN } from '@/stores/mutations';
import Secure from '@/shared/utils/secure-ls';
import HttpService from '@/shared/http-services/api.service';

const mutations: MutationTree<UserState> = {
  [SAVE_TOKEN](state, token: string) {
    HttpService.setAuthorizationToken(token);
    state.token = token;
  },

  [REMOVE_TOKEN](state) {
    state.token = '';
    Secure.remove('token');
  },
};

export default mutations;
