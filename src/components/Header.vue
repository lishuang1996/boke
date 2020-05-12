<template>
  <div class="flex_w_j_a">
    <div class="logo">
      logo
    </div>
    <div class="user flex_w_j_a">
      <div class="headerimg"></div>
      <el-dropdown trigger="click" class="user_name" @command="MenuClick">
        <span class="el-dropdown-link">
          {{UserData.Name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">个人中心</el-dropdown-item>
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {setUser,getUser,clearUser} from '@/../plugins/token'
  export default {
    data(){
      return{}
    },
    computed: {
      UserData(){
        return this.$store.state.UserData
      }
    },
    methods:{
      MenuClick(name){
        if(name == 'loginout'){
          clearUser()
          sessionStorage.setItem('TabsArr','')
          this.SetStore({
            name:'UserData',
            data:undefined
          })
          this.$router.push('/')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.logo{
  width: 100px;
  height: 50px;
  background-color: #fff;
}
.user{
  .headerimg{
    height: 45px;
    width: 45px;
    border-radius: 45px;
    background-color: #fff;
    margin-right: 15px;
  }
  .user_name{
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
}
.flex_w_j_a{
  height: 100%;
}
</style>