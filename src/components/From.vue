<template>
  <el-dialog title="表单预览" :visible.sync="visible" width="500px" show-close append-to-body>
		<component v-for="(item,index) of form" :key="index" v-bind:is="'my-'+ item.field" :FormData='FormData'></component>
	</el-dialog>
</template>

<script>
import itemFn from '@/assets/js/item.js'
  export default {
    data(){
      return {
        visible:false, 
        FormData:{

        }
      }
    },
    props:{
      form:''
    },
    created(){
      console.log(12313)
      
    },
    watch:{
      visible(a,b){
        if(a){
          this.InfoForm()
        }
      }
    },
    methods:{
      //生成表单
      InfoForm(){
        this.form.forEach(item => {
          this.FormData[item.field] = ''
          if(item.type == 1){
            itemFn.Input_(item,this)
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>