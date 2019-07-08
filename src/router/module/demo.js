export default [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Study',
    name: 'Study',
    meta:{
      requireAuth:true
    },
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