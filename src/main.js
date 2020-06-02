// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios";

Vue.prototype.$axios = Axios;
Axios.defaults.headers.post['Content-Type'] = 'application/json';


import '@/assets/css/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/common.css'
import '@/assets/css/index.css'

Vue.config.productionTip = false



let yumin = '张泽撇';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})