//axios引入
// import Api from '@/../plugins/axios.js';
export default {
  methods: {
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