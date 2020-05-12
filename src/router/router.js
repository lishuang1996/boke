import Vue from 'vue'
import Router from 'vue-router'
import demo from './module/demo'
Vue.use(Router)

export default new Router({
 
  routes: [
    {
      path: '/home',
      name: 'Index',
      meta:{
        title:'首页'
      },
      component: () => import('@/views/index.vue'),
      children: [
          ...demo
      ]
    },
    {
      path: '/',
      name: 'login',
      meta:{
        requireAuth:true
      },
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta:{
        requireAuth:true
      },
      component: () => import('@/views/login/register.vue')
    },
    {
      path: '/401',
      name: '401',
      meta:{
        requireAuth:true
      },
      component: () => import('@/views/error/401.vue')
    },
    {
      path: '/404',
      name: '404',
      meta:{
        requireAuth:true
      },
      component: () => import('@/views/error/404.vue')
    },
    {
      path: '/500',
      name: '500',
      meta:{
        requireAuth:true
      },
      component: () => import('@/views/error/500.vue')
    },
  ]
})
