<template>
  <div class="Home_Page">
    <MyTable :tableHeader="tableHeader"></MyTable>
  </div>
</template>

<script>
// @ is an alias to /src
import { login } from "@/../plugins/api.js";
import Vue from "vue";
import MyTable from "@/components/Table.vue";
import Myitem from "@/assets/js/item.js";
export default {
  name: "Home",
  data() {
    return {
      tableHeader: [
        {
          prop: "date",
          label: "日期",
          width: ""
        },
        {
          prop: "name",
          label: "姓名",
          width: ""
        },
        {
          prop: "province",
          label: "省份",
          width: ""
        },
        {
          prop: "city",
          label: "市区",
          width: ""
        },
        {
          prop: "checkbox",
          label: "地址",
          width: "200",
          render: row => {
            Myitem.Checkbox_({
              form: row,
              prop: "checkbox",
              checkbox:[
                {
                  value: "黄金糕",
                  label: "选项1"
                },
                {
                  value: "双皮奶",
                  label: "选项2",
                  disabled: true
                },
              ]
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          prop: "zip",
          label: "邮编",
          width: "250",
          render: row => {
            Myitem.Date_({
              form: row,
              prop: "time"
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          prop: "jy",
          label: "是否禁用",
          width: "",
          render: row => {
            Myitem.Switch_({
              form: row,
              prop: "jy"
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          prop: "zip",
          label: "姓名",
          width: "200",
          render: row => {
            Myitem.Input_({
              form: row,
              prop: "city",
              append:'元'
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          prop: "jy",
          label: "姓名",
          width: "200",
          render: row => {
            Myitem.Select_({
              form: row,
              prop: "city",
              options: [
                {
                  value: "选项1",
                  label: "黄金糕"
                },
                {
                  value: "选项2",
                  label: "双皮奶",
                  disabled: true
                },
                {
                  value: "选项3",
                  label: "蚵仔煎"
                },
                {
                  value: "选项4",
                  label: "龙须面"
                },
                {
                  value: "选项5",
                  label: "北京烤鸭"
                }
              ]
            }).then(res => {
              console.log(res);
            });
          }
        }
      ]
    };
  },
  components: {
    MyTable
  },
  created() {},
  methods: {
    aa(row) {
      console.log(row);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

