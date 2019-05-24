import Vue from 'vue';
import Vuetify, {VBtn, VIcon, VSpeedDial} from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use (Vuetify, {
  components: {
    VBtn,
    VIcon,
    VSpeedDial,
  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    my_own: '#00fbbd',
    passion_c: '#f6c180',
  },
  customProperties: true,
  iconfont: 'mdi',
});
