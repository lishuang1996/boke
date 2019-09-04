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
      title:'企业通讯录'
    },
    component: () => import('@/views/demo.vue')
  }
]