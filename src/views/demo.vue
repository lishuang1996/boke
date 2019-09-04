<template>
  <div>
    <div v-for="(item,index) of arr" :key="index">
      <mydiv v-if="item.show==false?false:true">{{item.render(form)}}</mydiv>
    </div>
  </div>
</template>

<script>
import Myitem from "@/assets/js/item.js";
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        checkbox: [],
        time: "",
        jy: false,
        city: "",
        city1: ""
      },
      arr: [
        {
          render: form => {
            Myitem.Checkbox_({
              form: form,
              prop: "checkbox",
              checkbox: [
                {
                  value: "黄金糕",
                  label: "选项1"
                },
                {
                  value: "双皮奶",
                  label: "选项2",
                  disabled: true
                }
              ]
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          show: false,
          render: form => {
            Myitem.Date_({
              form: form,
              prop: "time"
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          render: form => {
            Myitem.Switch_({
              form: form,
              prop: "jy"
            }).then(res => {
              this.arr[1].show = res.data;
            });
          }
        },
        {
          render: form => {
            Myitem.Input_({
              form: form,
              prop: "city",
            }).then(res => {

            });
          }
        },
        {
          render: form => {
            Myitem.Select_({
              form: form,
              prop: "city1",
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
              this.form.city = 123;
            });
          }
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>