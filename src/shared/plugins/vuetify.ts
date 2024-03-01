import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import Color from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#c28566',
        secondary: '#333',
        accent: '#FCF8F2',
        error: Color.red.accent2,
        info: '#585147',
        success: Color.green.base,
        warning: Color.yellow.base,
        checkboxStyle: '#307AD3',
        pink: '#d33330',
        black: '#394149',
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});
