import Vue from 'vue'
export default{
  Input_:(data)=>{
    let name = 'my-'+ data.field
    Vue.component(name, {
      render: function (createElement) {
        var self = this
        return createElement(
          'el-input',{
            domProps: {
              value: self.FormData[data.field]
            },
            on:{
              'el-input': function (event) {
                console.log(event)
                self.$emit('el-input', event.target.value)
              }
            }
          },
          []
        )
      },
      props:{
        FormData:''
      }
    })
  },
  Select_:{},
  Checkbox_:{},
  Switch_:{},
  Date_:{},
}