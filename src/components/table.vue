<template>
  <el-table :data="tableData" border style="width: 100%" v-if="tableHeader">
    <el-table-column fixed type="index" width="50" label="序号" align="center"></el-table-column>
    <el-table-column
      v-for="(item,index) of tableHeader"
      :key="index"
      :label="item.label"
      :width="item.width"
      align="center"
    >
      <template slot-scope="scope">
        <mydiv v-if="item.render">{{item.render(scope.row)}}</mydiv>
        <div v-else>{{scope.row[item.prop]}}</div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" align="center" min-width="230">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row,'look')" type="primary" size="small">查看</el-button>
        <el-button @click="handleClick(scope.row,'edit')" type="success" size="small">编辑</el-button>
        <el-button @click="handleClick(scope.row,'del')" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          jy: true
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          jy: false
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          jy: true
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          jy: false
        }
      ]
    };
  },
  props:{
    tableHeader:''
  },
  created(){
    console.log(this.tableHeader)
  },
  methods: {
    handleClick(row, type) {
      console.log(row);
      console.log(type);
    },
    goDetails(value) {
      console.log(value);
    },
    render(row,render) {
      let that = this;
      
    }
  }
};
</script>

<style lang="scss" scoped>
</style>