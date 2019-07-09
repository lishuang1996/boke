import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserData:undefined
  },
  mutations: {
    SetUserData(state,data){
      state.UserData = data
    },
    DelUserData(state){
      state.UserData = undefined
    },
  },
  actions: {

  }
})
