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
    },
    getNowFormatDate(time){//获取当前时间
      var date = new Date(time);
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
      var strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
      var Hours = date.getHours()<10? "0" + date.getHours():date.getHours();
      var Minutes = date.getMinutes()<10? "0" + date.getMinutes():date.getMinutes();
      var Seconds = date.getSeconds()<10? "0" + date.getSeconds():date.getSeconds();
      var currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
          + " "  + Hours + seperator2  + Minutes
          + seperator2 + Seconds;
      return currentdate;
    }
  },
}