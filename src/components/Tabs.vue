<template>
  <div class="h100">
    <el-tabs
      class="h100"
      v-model="editableTabsValue"
      type="border-card"
      @tab-remove="removeTab"
      @tab-click="ToPath"
    >
      <el-tab-pane
        v-for="item in TabsArr"
        :key="item.path"
        class="tabs_item"
        :label="item.name"
        :name="item.path"
        :closable="item.closShow"
      >
        <router-view/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "/home"
    };
  },
  computed: {
    TabsArr() {
      return this.$store.state.TabsArr;
    },
    path() {
      return this.$route.path;
    }
  },
  watch: {
    path(a, b) {
      this.ClosShow(a);
      this.editableTabsValue = a;
    }
  },
  created(){
    this.ClosShow(this.$route.path);
    this.editableTabsValue = this.$route.path;
  },
  methods: {
    //移除标签
    removeTab(targetName) {
      this.TabsArr.forEach((item, index) => {
        if (item.path == targetName) {
          let nextTab = this.TabsArr[index + 1] || this.TabsArr[index - 1];
          if (nextTab) {
            this.$router.push(nextTab.path);
          }
          this.$store.commit('RemoveTabs',index)
        }
      });
    },
    //标签切换
    ToPath(e) {
      this.ClosShow(e.name);
      this.$router.push(e.name);
    },
    //标签关闭按钮
    ClosShow(path) {
      this.TabsArr.forEach(item => {
        if (item.path == path && item.name != "首页") {
          item.closShow = true;
        } else {
          item.closShow = false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.el-tabs__header is-top {
  position: fixed;
}
.el-tabs--border-card{
  border: none;
}
</style>