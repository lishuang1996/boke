//axios引入
import API from '@/../plugins/api.js';
export default {
  methods: {
    //全局接口调用
    async httpBack(name,data){
      let data_ = await API[name](data)
      if (data_.code == 10000) {
        return data_
      } else {
        this.$message.error(data_.msg);
      }
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
    },
    //设置vuex数据
    SetStore(data){
      if(data){
        this.$store.commit('SetData',data)
      }else{
        this.$store.commit('SetData')
      }
    },
    //获取vuex数据
    GetStoreState(name){
      return this.$store.state[name]
    }
  },
}