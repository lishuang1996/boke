<template>
  <div>
    <Form :form="form" :FormArr="FormArr"></Form>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Myitem from "@/assets/js/item.js";
import Form from "@/components/Form.vue";
import rule from "@/../plugins/rule.js";
export default {
  data() {
    return {
      form: {
        food: [],
        birthday: "",
        jy: false,
        phone: "",
        phone1: "",
        food1: ""
      },
      FormArr: [
        {
          prop: "food",
          label: "多选",
          render:form => {
            Myitem.Checkbox_({
              form: form,
              prop: "food",
              keyName:'keyone',
              checkbox: []
            }).then(res => {
            });
          }
        },
        {
          prop: "birthday",
          label: "日期选择",
          render: form => {
            Myitem.Date_({
              form: form,
              prop: "birthday"
            }).then(res => {
              console.log(res);
            });
          }
        },
        {
          prop: "jy",
          label: "同组组件",
          group: [
            {
              prop: "birthday",
              label: "",
              render: form => {
                Myitem.Switch_({
                  form: form,
                  prop: "jy"
                }).then(res => {
                  console.log(this.FormArr);
                  this.FormArr[2].group[1].show = res.data;
                });
              }
            },
            {
              prop: "birthday",
              label: "",
              show: false,
              render: form => {
                Myitem.Date_({
                  form: form,
                  prop: "birthday"
                }).then(res => {
                  console.log(res);
                });
              }
            }
          ]
        },
        {
          prop: "phone",
          label: "输入框带验证",
          rule: {
            required: true,
            validator: rule.Phone,
            trigger: "blur"
          },
          render: form => {
            Myitem.Input_({
              form: form,
              prop: "phone"
            }).then(res => {
              console.log(res)
            });
          }
        },
        {
          prop: "phone1",
          label: "输入框触发弹框",
          render: form => {
            Myitem.Input_({
              form: form,
              prop: "phone1",
              selectfn:(res)=>{
                this.dialogVisible = true
              }
            }).then(res => {
              
            });
          }
        },
        {
          prop: "food1",
          label: "下拉框",
          render: form => {
            Myitem.Select_({
              form: form,
              prop: "food1",
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
              this.form.phone = 123;
            });
          }
        }
      ],
      dialogVisible: false
    };
  },
  components: {
    Form
  },
  created(){
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>