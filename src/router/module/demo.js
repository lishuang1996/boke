export default [
  {
    path: '/Home',
    name: 'Home',
    meta:{
      requireAuth:true
    },
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
    meta:{
      requireAuth:true
    },
    component: () => import('@/views/Self_Introduction.vue')
  },
  {
    path: '/Message_Board',
    name: 'Message_Board',
    meta:{
      requireAuth:true
    },
    component: () => import('@/views/Message_Board.vue')
  }
]