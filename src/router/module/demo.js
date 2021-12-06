export default [
  {
    path: '/home',
    name: 'Home',
    meta:{
      title:'首页'
    },
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/onjob',
    name: 'OnJob',
    meta:{
      title:'在职员工'
    },
    component: () => import('@/views/StaffManagement/OnJob.vue')
  },
  {
    path: '/outjob',
    name: 'OutJob',
    meta:{
      title:'离职员工'
    },
    component: () => import('@/views/StaffManagement/OutJob.vue')
  },
  {
    path: '/addresslist',
    name: 'AddressList',
    meta:{
      title:'企业通讯录'
    },
    component: () => import('@/views/StaffManagement/AddressList.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    meta:{
      title:'from表单'
    },
    component: () => import('@/views/demo.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    meta:{
      title:'聊天室'
    },
    component: () => import('@/views/chat.vue')
  },
  {
    path: '/sudoku',
    name: 'sudoku',
    meta:{
      title:'数独小游戏'
    },
    component: () => import('@/views/sudoku.vue')
  },
  {
    path: '/three',
    name: 'three',
    meta:{
      title:'three.js'
    },
    component: () => import('@/views/threejs.vue')
  },
  {
    path: '/fiveinarow',
    name: 'fiveinarow',
    meta:{
      title:'五子棋'
    },
    component: () => import('@/views/fiveinarow.vue')
  },
  {
    path: '/baseData',
    name: 'baseData',
    meta:{
      title:'基础数据'
    },
    component: () => import('@/views/baseData/index.vue')
  },
  {
    path: '/bingrole',
    name: 'bingrole',
    meta:{
      title:'审核列表'
    },
    component: () => import('@/views/bingrole/index.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta:{
      title:'用户列表'
    },
    component: () => import('@/views/user/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    meta:{
      title:'新闻列表'
    },
    component: () => import('@/views/news/index.vue')
  },
]