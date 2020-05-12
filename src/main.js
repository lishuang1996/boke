import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {getUser} from '@/../plugins/token'
Vue.use(ElementUI)
Vue.config.productionTip = false
//引入全局less
import './assets/less/main.less'
//全局混合
import mixins from '@/mixins/mixins'
Vue.mixin(mixins)
//from表单规则引入
import Rule from '@/../plugins/rule.js';
Vue.prototype.$rule = Rule;
//全局判断是否登录
if(getUser()){
  store.commit('SetUserData',getUser())
}
router.beforeEach((to,from,next)=>{
    if(!store.state.UserData&&!to.meta.requireAuth){
      next({path:'/'})
      Vue.prototype.$message({
        type: "error",
        message: "身份已过期，请重新登录"
     });
    }else{
      if(!to.meta.requireAuth&&to.name!=null){
        store.commit('AddTabs',to)
      }
      if(to.name!=null){
        next()
      }else{
        next({path:'/404'})
      }
      
    }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
