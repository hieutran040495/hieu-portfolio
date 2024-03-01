import Vue from 'vue';
import App from '@/layouts/index.vue';
import store from '@/stores';
import router from '@/routers';
import {
  vuetify,
} from '@/shared/plugins/index';

import '@/registerServiceWorker';
import '@/styles/index.scss';
import '@/assets/fonts/_fonts.scss';

Vue.config.productionTip = !!process.env.VUE_APP_PRODUCTION;

new Vue({
  router,
  store,
  // @ts-ignore
  vuetify,
  render: (h) => h(App),
}).$mount('#app');


