import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
// import OurPets from '@/views/OurPets'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/our-pets',
            component: () => import('./views/OurPets.vue')
        }
    ]
})
