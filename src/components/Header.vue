<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b">
    <el-menu-item v-for="(item,index) of menu_arr" :key="index" :index="item.router">{{item.name}}</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        activeIndex:'/',
        menu_arr:[{
          name:'首页',
          router:'/',
        },{
          name:'学无止境',
          router:'/Study',
        },{
          name:'个人介绍',
          router:'/Self_Introduction',
        },{
          name:'留言板',
          router:'/Message_Board',
        }]
      }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>