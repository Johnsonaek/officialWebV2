/*
 * @Descripttion: 
 * @version: 
 * @Author: JohnsonZzp
 * @Date: 2020-06-01 11:30:23
 * @LastEditors: JohnsonZzp
 * @LastEditTime: 2020-06-11 15:56:15
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import im from '@/page/IM'
import zhibo from '@/page/zhibo'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/IM',
            name: 'IM',
            component: im
        },
        {
            path: '/zhibo',
            name: 'zhibo',
            component: zhibo
        }
    ]
})