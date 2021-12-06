<template>
  <div class="left_box">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="#384150"
      @close="handleClose"
      text-color="#fff"
      :default-active="activeIndex"
      active-text-color="#ffd04b"
      :router="true"
    > 
    <div v-for="(item,index) in menu_arr" :index="item.Name" :key="index">
      <el-submenu v-if="item.Children.length>0" :index="item.Name">
        <template slot="title">
          <!-- <i class="menu_icon " :class="'menu_icon_'+item.FeaturesModuleId"></i> -->
          <span slot="title">{{item.Name}}</span>
        </template>
        <div v-for="(item_,index_) in item.Children"
            :key="index_"
            :index="item_.harf">
          <el-menu-item v-if="item_.Children == 0" :index="item_.harf">{{item_.Name}}</el-menu-item>
          <div v-if="item_.Children > 0">
            <el-submenu>
            <span slot="title">{{item_.Name}}</span>
            <el-menu-item-group v-for="(item_c,index_c) in item_.Children" :index="item_c.Name" :key="index_c">
              <el-menu-item :index="item_c.harf">{{item_c.Name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          </div>
        </div>
      </el-submenu>
      <el-menu-item v-if="item.Children.length==0" :index="item.Name">{{item.Name}}</el-menu-item>
    </div>
      
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_arr: [
        {
          Name: "用户管理",
          harf: "",
          Children: [
            {
              Name: "用户列表",
              harf: "/user",
              Children: []
            }
          ]
        },
        {
          Name: "资讯管理",
          harf: "",
          Children: [
            {
              Name: "资讯列表",
              harf: "/news",
              Children: []
            }
          ]
        },
        {
          Name: "绑定角色管理",
          harf: "",
          Children: [
            {
              Name: "审核列表",
              harf: "/bingrole",
              Children: []
            }
          ]
        },
        {
          Name: "基础数据",
          harf: "",
          Children: [
            {
              Name: "基础数据列表",
              harf: "/baseData",
              Children: []
            }
          ]
        }
      ],
      activeIndex:''
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.activeIndex=key
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
}
li {
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 214px;
  min-height: 400px;
  position: relative;
  left: 1px;
  height: 100%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
}
</style>