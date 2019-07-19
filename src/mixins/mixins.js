//axios引入
// import Api from '@/../plugins/axios.js';
import {getUser,setUser,clearUser} from '@/../plugins/token'
export default {
  methods: {
    // //请求处理
    // HttpBack(type,url,params){
    //   return new Promise((resolve, reject)=>{
    //     Api[type](url,params,res=>{
    //       if(res.msg == 'ok'){
    //         resolve(res)
    //       }else{
    //         reject (res)
    //       }
    //     })
    //   })
    // },
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
    },
    //设置vuex数据
    SetStore(name,data){
      if(data){
        this.$store.commit(name,data)
      }else{
        this.$store.commit(name)
      }
    },
    //获取vuex数据
    GetStoreState(name){
      return this.$store.state[name]
    }
  },
}