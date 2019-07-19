<template>
  <div class="flex_worp_justify_align">
    <div class="logo">
      logo
    </div>
    <div class="user flex_worp_justify_align">
      <div class="headerimg"></div>
      <el-dropdown trigger="click" class="user_name" @command="MenuClick">
        <span class="el-dropdown-link">
          猪儿子虫<i class="el-icon-arrow-down el-icon--right"></i>
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
    methods:{
      MenuClick(name){
        console.log(name)
        if(name == 'loginout'){
          clearUser()
          this.SetStore('DelUserData',123)
          this.$router.push('/Home')
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
.flex_worp_justify_align{
  height: 100%;
}
</style>