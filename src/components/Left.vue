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
      <el-submenu v-for="(item,index) in menu_arr" :index="item.Name" :key="index">
        <template slot="title">
          <!-- <i class="menu_icon " :class="'menu_icon_'+item.FeaturesModuleId"></i> -->
          <span slot="title">{{item.Name}}</span>
        </template>
        <el-menu-item-group
          v-for="(item_,index_) in item.Children"
          :key="index_"
          :index="item_.Name"
          v-if="item_.Children.length==0"
        >
          <el-menu-item :index="item_.harf">{{item_.Name}}</el-menu-item>
        </el-menu-item-group>
        <el-submenu
          v-for="(item_,index_) in item.Children"
          :index="item_.Name"
          :key="index_"
          v-if="item_.Children.length>0"
        >
          <span slot="title">{{item_.Name}}</span>
          <el-menu-item-group v-for="(item_c,index_c) in item_.Children" :index="item_c.Name" :key="index_c">
            <el-menu-item :index="item_c.harf">{{item_c.Name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_arr: [
        {
          Name: "常用功能",
          harf: "",
          Children: [
            {
              Name: "我的审批",
              harf: "/Study",
              Children: []
            },
            {
              Name: "借还记录",
              harf: "/demo",
              Children: []
            }
          ]
        },
        {
          Name: "员工管理",
          harf: "",
          Children: [
            {
              Name: "在职员工",
              harf: "/onjob",
              Children: []
            },
            {
              Name: "离职员工",
              harf: "outjob",
              Children: []
            },
            {
              Name: "企业通讯录",
              harf: "addresslist",
              Children: []
            }
          ]
        },
        {
          Name: "证书管理",
          harf: "",
          Children: [
            {
              Name: "企业证书",
              harf: "/Study",
              Children: []
            },
            {
              Name: "数字证书",
              harf: "2-2",
              Children: []
            },
            {
              Name: "人员证书",
              harf: "2-3",
              Children: []
            },
            {
              Name: "证书文件柜",
              harf: "2-4",
              Children: []
            },
            {
              Name: "考试管理",
              harf: "2-5",
              Children: []
            },
            {
              Name: "职能匹配",
              harf: "2-6",
              Children: [
                {
                  Name: "人员智能匹配",
                  harf: "2-6-1",
                  Children: []
                },
                {
                  Name: "人员匹配",
                  harf: "2-6-2",
                  Children: []
                }
              ]
            }
          ]
        },
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