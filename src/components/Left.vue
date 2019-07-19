<template>
  <div>
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" background-color="#384150" @close="handleClose" text-color="#fff" active-text-color="#ffd04b" :router="true">
			<el-submenu v-for="(item,index) in menu_arr" :index="item.Name" :key="index">
				<template slot="title">
					<!-- <i class="menu_icon " :class="'menu_icon_'+item.FeaturesModuleId"></i> -->
					<span slot="title">{{item.Name}}</span>
				</template>
				<el-menu-item-group v-for="(item_,index_) in item.Children" :key="index_" v-if="item_.Children.length==0">
					<el-menu-item :index="item_.harf">{{item_.Name}}</el-menu-item>
				</el-menu-item-group>
				<el-submenu :index="item_.Name" v-for="(item_,index_) in item.Children" :key="index_" v-if="item_.Children.length>0">
					<span slot="title">{{item_.Name}}</span>
					<el-menu-item-group v-for="(item_c,index_c) in item_.Children" :key="index_c">
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
          Name:'员工管理',
          harf:'',
          Children:[
            {
              Name:'在职员工',
              harf:'/Study',
              Children:[]
            },
            {
              Name:'离职员工',
              harf:'1-2',
              Children:[{
                  Name:'在职员工',
                  harf:'2-1',
                  Children:[]
                },
                {
                  Name:'离职员工',
                  harf:'2-2',
                  Children:[]
                },]
            },
            {
              Name:'企业通讯录',
              harf:'2',
              Children:[]
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 214px;
		min-height: 400px;
		position: relative;
		left: 1px;
		height: 100%;
		overflow: scroll;
	}
	
	::-webkit-scrollbar {
		/*隐藏滚轮*/
		display: none;
	}
</style>