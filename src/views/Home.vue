<template>
  <div class="Home_Page">
    自动生成表单
    <div>
      基础选择
      <el-checkbox-group v-model="check" @change="checkChange">
        <el-checkbox :label="1">是否需要label</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="box">
      <div class="boxMin" v-for="(item,index) of form" :key="index">
        <p><span>item {{index+1}}</span><i @click="del(index)" style="margin-left:30px;" class="el-icon-delete"></i></p>
        <el-select v-model="item.type" placeholder="请选择类型">
          <el-option
            v-for="item in ItemType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <hr>
        <el-input v-if="labelShow" v-model="item.label" placeholder="请输入label名称"></el-input>
        <hr>
        <el-input v-model="item.field" placeholder="请输入绑定字段"></el-input>
        <hr>
      </div>
      <div>
        <el-button @click="add" style="height:225px;margin-left:20px;">+</el-button>
      </div>
    </div>
    <el-button @click="look">预览</el-button>
    <el-button>生成</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      value:'',
      check:[1],
      input:'',
      labelShow:true,
      ItemType:[
        {
          value: 1,
          label: '输入框'
        },{
          value: 2,
          label: '下拉框'
        },{
          value: 3,
          label: '多选框'
        },{
          value: 4,
          label: '开关'
        },{
          value: 5,
          label: '日期选择'
        }
      ],
      form:[
        {
          type:'',
          label:'',
          field:''
        }
      ]
    }
  },
  components: {

  },
  created(){
    
  },
  methods:{
    add(){
      this.form.push({
          type:'',
          label:'',
          field:''
        })
    },
    del(index){
      this.form.splice(index,1)
    },
    look(){
      console.log(this.form)
    },
    checkChange(){
      this.check.forEach(item => {
        if(item == 1){
          this.labelShow = true
        }else{
          this.labelShow = false
        }
      });
      if(this.check.length == 0){
        this.labelShow = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.Home_Page{
  width: 100%;
}
.box{
  display: flex;
  flex-wrap:wrap;
}
.boxMin{
  width: 200px;
  margin-left: 20px;
}
</style>

