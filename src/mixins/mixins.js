//axios引入
import Api from '@/../plugins/axios.js';
export default {
  methods: {
    //请求处理
    HttpBack(type,url,params){
      return new Promise((resolve, reject)=>{
        Api[type](url,params,res=>{
          if(res.msg == 'ok'){
            resolve(res.date)
          }else{
            reject (res)
          }
        })
      })
    },
    //表单提交处理
    submitForm(formName) {
      return new Promise((resolve, reject)=>{
        this.$refs[formName].validate(valid => {
          if (valid) {
            resolve()
          } else {
            return false;
          }
        });
      })
    }
  },
}