import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './firebase/index.js';
import './style/main.scss';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import vueg from 'vueg';
import vueScrollBehavior from 'vue-scroll-behavior'
import * as vuei18n from './i18n-setup';
import vueTouch2 from 'vue2-touch-events'
import SocialSharing from 'vue-social-sharing';
Vue.use(SocialSharing);
Vue.use(vueTouch2)

// to save scrolling position
Vue.use(vueScrollBehavior, {
    router: router,
    maxLength: 100
})

// TEST MODE
import VueAnimate from 'vue-animate-scroll'

Vue.use(VueAnimate)

// for vueg for page transition
const options = {
    duration: '0.4',
    firstEntryDisable: false,
    firstEntryDuration: '.1',
    forwardAnim: 'bounceInLeft',
    backAnim: 'fadeIn',
    sameDepthDisable: true,
    shadow: true,
    disable: false,
    nuxt: false,
};
Vue.use(vueg, router, options);

Vue.config.productionTip = false;

const i18n = vuei18n.i18n;

new Vue({
    vuetify,
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app');