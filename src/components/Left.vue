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
      :router='true'
    >
      <!-- <component v-for="(item,index) of menu_arr" :key="index" :index="item.src" :is="item.ItemType==1?'el-submenu':'el-menu-item'">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.Name}}</span>
        </template>
        <component v-if="item.ItemType == 1" v-for="(item_a,index_a) of item.Children" :index="item_a.src" :key="index_a" :is="item_a.ItemType==1?'el-submenu':'el-menu-item-group'">
          <div>
            <el-menu-item v-if="item_a.ItemType == 2" :index="item_a.src">{{item_a.Name}}</el-menu-item>
          </div>
          <template v-if="item_a.ItemType == 1" slot="title">
            <span>{{item_a.Name}}</span>
          </template>
          
          <el-menu-item v-for="(item_b,index_b) of item_a.Children" :index="item_b.src" :key="index_b">{{item_b.Name}}</el-menu-item>
        </component>
      </component> -->
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
      menu_arr: [
        {
          Name:'员工管理',
          ItemType:'1',
          src:'1',
          Children:[
            {
              Name:'在职员工',
              ItemType:'2',
              src:'1-1'
            },
            {
              Name:'离职员工',
              ItemType:'2',
              src:'1-2'
            },
            {
              Name:'企业通讯录',
              ItemType:'1',
              src:'2',
              children:[
                {
                  Name:'在职员工',
                  ItemType:'2',
                  src:'4'
                }
              ]
            }
          ]
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

</style>