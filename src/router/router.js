import Vue from 'vue'
import Router from 'vue-router'
import demo from './module/demo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      name: 'Index',
      meta:{
        requireAuth:true
      },
      component: () => import('@/views/index.vue'),
      children: [
          ...demo
      ]
    },
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/login/register.vue')
    },
    {
      path: '/401',
      name: '401',
      component: () => import('@/views/error/401.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/404.vue')
    },
    {
      path: '/500',
      name: '500',
      component: () => import('@/views/error/500.vue')
    },
  ]
})
