import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/Study',
      name: 'Study',
      component: () => import('@/views/Study.vue')
    },
    {
      path: '/Self_Introduction',
      name: 'Self_Introduction',
      component: () => import('@/views/Self_Introduction.vue')
    },
    {
      path: '/Message_Board',
      name: 'Message_Board',
      component: () => import('@/views/Message_Board.vue')
    }
  ]
})
