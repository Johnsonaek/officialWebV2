/*
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-01 11:30:23
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-05 10:12:19
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios";


import '@/assets/css/reset.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import http from '../src/assets/js/http'
import * as tool from '../src/assets/js/tool'

import './components/Toast/toast.css';
import Toast from './components/Toast/index';
Vue.use(Toast);

Vue.prototype.$axios = Axios;
Vue.prototype.$http = http;
Vue.prototype.$tool = tool;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})