<template>
  <div>
    <div>
      <div v-for="(item,index) of suduData" :key="index">
        <span>
          <el-input :maxlength="1" v-for="(item_,index_) of item" :key="index_" v-model="suduData[index][index_]" style="width:42px"></el-input>
        </span>
        
      </div>
      
    </div>
    <div>数独阶数<el-input v-model="jieshu" style="width:42px"></el-input><el-button>生成</el-button></div>
    <div><el-button @click="send">填入默认数据后计算</el-button></div>
    
  </div>
</template>

<script>
  export default {
    data(){
      return {
        jieshu:4,
        suduData:[],
        mydata:[]
      }
    },
    created(){
      this.InfoTable()
    },
    methods:{
      //通过当前阶数生成表格
      InfoTable(){
        this.mydata = []
        this.suduData = []
        for(let i = 1;i<=this.jieshu;i++){
          this.mydata.push(String(i))
          this.suduData.push([])
          for(let a = 1;a<=this.jieshu;a++){
            this.suduData[i-1].push('')
          }
        }
      },
      send(){
        let NewsuduData = JSON.parse(JSON.stringify(this.suduData))
        NewsuduData.forEach((item,index_a)=>{
          console.log(index_a)
          item.forEach((item_,index)=>{
            if(!item_){
              for(let a=0;a<this.mydata.length;a++){
                let key = true
                for(let i = 0;i<this.jieshu;i++){
                  if(NewsuduData[index_a][i]==this.mydata[a]){
                    key = false
                  }
                }
                for(let i = 0;i<this.jieshu;i++){
                  if(NewsuduData[i][index]==this.mydata[a]){
                    key = false
                  }
                }
                if(key){
                  item.splice(index,1,this.mydata[a])
                }else{
                  
                }
              }
            }
          })
        })
        let newKey = true
        NewsuduData.forEach((item,index_a)=>{
          item.forEach((item_,index)=>{
            if(!item_){
              newKey =false
            }
          })
        })
        console.log(newKey)
        if(newKey){
          this.suduData =  NewsuduData
        }else{
          NewsuduData = []
          let Newmydata  = JSON.parse(JSON.stringify(this.mydata))
          this.mydata.splice(0,1)
          this.mydata.push(Newmydata[0])
          // this.send()
        }
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>