import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  next()
})
//全局混合
import mixins from '@/mixins/mixins'
Vue.mixin(mixins)
//axios引入
import Api from '@/../plugins/axios.js';
Vue.prototype.$api = Api;
//from表单规则引入
import Rule from '@/../plugins/rule.js';
Vue.prototype.$rule = Rule;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
