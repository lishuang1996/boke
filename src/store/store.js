import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserData:undefined,
    TabsArr:[],
    SubmitState:true
  },
  mutations: {
    SetUserData(state,data){
      state.UserData = data
    },
    DelUserData(state){
      state.UserData = undefined
    },
    SetData(state,data){
      state[data.name] = data.data
    },
    AddTabs(state,data){
      state.TabsArr = []
      let sessionTabsArr = sessionStorage.getItem('TabsArr')
      if(sessionTabsArr){
        state.TabsArr = JSON.parse(sessionTabsArr)
      }else{
        state.TabsArr.push({
          name:'首页',
          path:'/home'
        })
      }
      let data_ = {
        name:data.meta.title,
        path:data.path,
        closShow:false
      }
      let key = true
      state.TabsArr.forEach(item=>{
        if(data.path == item.path||data.path=='/home'){
          key = false
        }
      })
      if(key){
        state.TabsArr.push(data_)
      }
      sessionStorage.setItem('TabsArr',JSON.stringify(state.TabsArr))
    },
    RemoveTabs(state,index){
      state.TabsArr.splice(index,1)
      sessionStorage.setItem('TabsArr',JSON.stringify(state.TabsArr))
    }
  },
  actions: {

  }
})
