import Vue from 'vue';
import Vuetify, { VBtn, VSpeedDial, VIcon } from 'vuetify/lib';

Vue.use(Vuetify, {
    components: { VBtn, VIcon, VSpeedDial },
});

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        options: {
            customProperties: true,
        },
        dark: false,
        themes: {
            light: {
                primary: '#ee44aa',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                my_own: '#FFCE6D',
                passion_c: '#f6c180',
            },
        }
    }
});