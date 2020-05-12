<template>
  <div class="w500">
    <el-form ref="form" :rules="formrule" :model="form" label-width="150px">
      <el-form-item v-for="(item,index) of FormArr" :key="index" :label="item.label" :prop="item.group?'':item.prop">
        <div v-if="item.group"  class="flex_w_j">
          <div v-for="(item_,index_) of item.group" :key="index_">
            <el-form-item :label="item_.label" :prop="item_.prop" v-if="item_.show==false?false:true">
              <mydiv>
                {{item_.render(form)}}
              </mydiv>
            </el-form-item>
          </div>
        </div>
        <div v-else>
          <div v-if="item.show==false?false:true">
            <mydiv >
              {{item.render(form)}}
            </mydiv>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        formrule:{
        },
      }
    },
    created(){
      this.InfoRule()
    },
    computed:{
      SubmitState(){
        return this.$store.state.SubmitState
      }
    },
    watch:{
      SubmitState(){
        console.log(123)
        this.submitForm()
      }
    },
    props:{
      FormArr:{
        type: Array,
        default: []
      },
      form:{
        type:Object,
        default:{}
      }
    },
    methods:{
      // 初始化表单规则
      InfoRule(){
        this.FormArr.forEach(item=>{
          if(item.group){
            item.group.forEach(item_=>{
              if(item_.rule){
                this.formrule[item_.prop] = item_.rule
              }
            })
          }else if(item.rule){
            this.formrule[item.prop] = item.rule
          }
        })
      },
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert(JSON.stringify(this.form));
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>