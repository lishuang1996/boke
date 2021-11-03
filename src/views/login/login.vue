<template>
  <div class="login_box">
    <el-form ref="form" class="login_from" :model="form">
      <el-form-item>
        <el-input v-model="form.User_Name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.Password" type="password" placeholder="请输密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="FromDispose">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    setUser,
    getUser
  } from "@/../plugins/token";
  import {
    async
  } from "q";
  export default {
    data() {
      return {
        form: {
          User_Name: "",
          Password: ""
        }
      };
    },
    created() {
      this.ExistCookies();
    },
    methods: {
      //判断是否是否存在cookies
      ExistCookies() {
        if (this.$store.state.UserData) {
          this.$router.push("/home");
        }
      },
      //登录
      FromDispose() {
        this.submitForm("form").then(async res => {
          setUser({
            name: 123
          });
          this.SetStore({
            name: "UserData",
            data: {
              name: 123
            }
          });
          this.$router.push("/home");
          this.$message.success(data.msg);
          // let data = await this.httpBack("login", this.form);
          // if(data){
          //   setUser(data.data);
          //   this.SetStore({
          //     name: "UserData",
          //     data: {}
          //   });
          //   this.$router.push("/home");
          //   this.$message.success(data.msg);
          // }
        });
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