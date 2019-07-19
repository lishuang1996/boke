<template>
  <div class="login_box">
    <el-form ref="form" class="login_from" :model="form">
      <el-form-item>
        <el-input v-model="form.UserName" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.PassWord" type="password" placeholder="请输密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="FromDispose">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {setUser,getUser} from '@/../plugins/token'
export default {
  data() {
    return {
      form: {
        UserName: "",
        PassWord: ""
      }
    };
  },
  created(){
    this.ExistCookies()
  },
  methods: {
    //判断是否是否存在cookies
    ExistCookies(){
      if(this.$store.state.UserData){
        this.$router.push('/Home')
      }
    },
    //登录
    FromDispose(){
      this.submitForm('form').then(res=>{
        if(this.form.UserName == 'admin'&&this.form.PassWord=='123456'){
          setUser(123)
          this.SetStore('SetUserData',123)
          this.$router.push('/Home')
          this.$message.success('登录成功');
        }else{
          this.$message.error('账号或密码错误');
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login_box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_from {
  width: 400px;
}
</style>