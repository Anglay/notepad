import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'

import All from '@/components/all'
import Over from '@/components/over'
import Untreated from '@/components/untreated'
import Edite from '@/components/edite'

Vue.use(Router)

var router = new Router({
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'Main',
        component: Main,
        redirect: '/all',
        children: [{
            path: '/all',
            name: 'All',
            component: All
        }, {
            path: "/over",
            name: "Untreated",
            component: Over
        }, {
            path: "/untreated",
            name: "untreated",
            component: Untreated
        }, {
            path: "/add",
            name: "add",
            component: Edite
        }, {
            path: "/edite",
            name: "edite",
            component: Edite
        }]
    }]
})


router.beforeEach((to, from, next) => {
    if (router.app.$store) {
        router.app.$store.state.detail = {};
        router.app.$store.state.isShow = false;
    }
    next();

})

export default router