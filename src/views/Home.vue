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
      login().then(res=>{
        this.aaa = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>


</style>

