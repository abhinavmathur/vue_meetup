import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import router from './router/router'
import { store } from './store/store'

//Settings for Axios
//----------------------------------------------------------------------
let token = document.head.querySelector("meta[name=csrf-token]").content;
axios.defaults.headers.common['X-CSRF-Token'] = token;
axios.defaults.headers.common['Accept'] = 'application/json';
//----------------------------------------------------------------------

//Config
//----------------------------------------------------------------------
Vue.config.productionTip = false;
//----------------------------------------------------------------------

//Usage
//----------------------------------------------------------------------
Vue.use(VeeValidate);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuetify);
//----------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#vue_container',
        router, store,
        render: h => h(App)
    })
});