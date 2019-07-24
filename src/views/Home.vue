<template>
  <div class="Home_Page">
    <button @click="log">123</button>
    {{aaa}}
  </div>
</template>

<script>
// @ is an alias to /src
import {login} from '@/../plugins/api.js'
export default {
  name: 'Home',
  data(){
    return{
      aaa:''
    }
  },
  components: {
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
    }
  }
}
</script>
<style lang="scss" scoped>


</style>

