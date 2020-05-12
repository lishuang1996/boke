<template>
  <div>
    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
  export default {
    methods:{
      submit(){
        this.SetStore({name:'SubmitState', data:!this.$store.state.SubmitState})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>