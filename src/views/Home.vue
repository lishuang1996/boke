<template>
  <div class="Home_Page">
    <MyTable :tableHeader="tableHeader"></MyTable>
  </div>
</template>

<script>
// @ is an alias to /src
import {login} from '@/../plugins/api.js'
import Vue from "vue";
import MyTable from '@/components/table.vue'
export default {
  name: 'Home',
  data(){
    return{
      aaa:'',
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
          prop: "address",
          label: "地址",
          width: ""
        },
        {
          prop: "zip",
          label: "邮编",
          width: ""
        },
        {
          prop: "jy",
          label: "是否禁用",
          width: "",
          render: (row) => {
            let that = this
            Vue.component("mydiv", {
              functional: true,
              render: function(createElement) {
                return createElement("el-switch", {
                  props: {
                    value: row.jy,
                    "active-color": "#13ce66",
                    "inactive-color": "#ff4949"
                  },
                  on: {
                    change: () => {
                      that.aa(row)
                      row.jy = !row.jy;
                    }
                  }
                });
              }
            });
          }
        }
      ],
    }
  },
  components: {
    MyTable
  },
  created(){

  },
  methods:{
    log(){
      let form={
        User_Name:'admin',
        Password:'123456',
      }
      login(form).then(res=>{
        this.aaa = res
      })
    },
    aa(row){
      console.log(row)
    }
  }
}
</script>
<style lang="scss" scoped>


</style>

