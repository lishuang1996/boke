export default {
  methods: {
    HttpBack(type,url,params,response){
      this.$api[type](url,params,res=>{
        if(res.msg == 'ok'){
          response(res)
        }else{}
      })
    }
  },
}