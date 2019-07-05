<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-active="'/Self_Introduction'"
      background-color="#384150"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router='false'
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/Study">选项1</el-menu-item>
          <el-menu-item index="/Self_Introduction">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/Home",
      menu_arr: [
        {
          name: "首页",
          router: "/Home"
        },
        {
          name: "学无止境",
          router: "/Study"
        },
        {
          name: "个人介绍",
          router: "/Self_Introduction"
        },
        {
          name: "留言板",
          router: "/Message_Board"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
li{
  text-align: left;
}
.el-menu-item-group li{
  padding-left: 50px !important;
}
.el-submenu div{
  padding-left: 50px !important;
}
</style>