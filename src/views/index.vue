<template>
  <el-container class="h100" style="background-color: #eee">
    <el-header>
      <MyHeader></MyHeader>
    </el-header>
    <el-container class="h100">
      <el-aside width="215px">
        <MyLeft></MyLeft>
      </el-aside>
      <el-container>
        <el-main>
          <MyTabs></MyTabs>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from '@/components/Header.vue'
import MyLeft from '@/components/Left.vue'
import MyTabs from '@/components/Tabs.vue'
import {getUser} from '@/../plugins/token'
export default {
  components:{
    MyHeader,
    MyLeft,
    MyTabs
  },
  created(){
    this.RecordLogin()
  },
  methods:{
    //vuex记录登录状态
    RecordLogin(){
      if(!this.GetStoreState('UserData')){
        if(getUser()){
          this.SetStore('SetUserData',getUser())
        }else{
          this.$router.push('/')
        }
      }
    }
  },
}
</script>

<style lang="less" scoped>
.el-header{
  background-color: #262a35;
}
.el-aside{
  height: 100%;
  background-color: #384150;
}
.el-main{
  background-color: #fff;
  margin: 20px;
  padding: 0;
}
.el-footer{
  background-color: #fff;
}
.el-aside::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>