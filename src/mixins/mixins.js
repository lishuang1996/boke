export default {
  methods: {
    HttpBack(type,url,params){
      return new Promise((resolve, reject)=>{
        this.$api[type](url,params,res=>{
          if(res.msg == 'ok'){
            resolve(res.date)
          }else{
            reject (res)
          }
        })
      })
    }
  },
}