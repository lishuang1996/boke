import Vue from 'vue'
export default {
  //单输入框
  Input_: (data) => {
    return new Promise((resolve, reject) => {
      Vue.component("mydiv", {
        functional: true,
        render: function (createElement) {
          return createElement("div", {}, [
            createElement("el-input", {
              props: {
                value: data.form[data.prop],
                disabled: data.disabled ? data.disabled : false,
                placeholder: data.placeholder ? data.placeholder : ''
              },
              on: {
                input: (event) => {
                  data.form[data.prop] = data.tan?'':event
                  resolve({
                    data: data.form[data.prop],
                    type: 'change'
                  })
                },
                blur: (event) => {
                  resolve({
                    data: data.form[data.prop],
                    type: 'blur'
                  })
                },
                focus: (event) => {
                  console.log(123)
                  resolve({
                    data: data.form[data.prop],
                    type: 'focus'
                  })
                }
              }
            }, [
              data.append ? createElement("template", {
                slot: 'append'
              }, data.append) : ''
            ]),
            // createElement("div", {},123)
          ]);
        }
      });
    })
  },
  //下拉框
  Select_: (data) => {
    return new Promise((resolve, reject) => {
      Vue.component("mydiv", {
        functional: true,
        render: function (createElement) {
          return createElement("div", {

          }, [
            createElement("el-select", {
              props: {
                value: data.form[data.prop],
                placeholder: data.placeholder ? data.placeholder : '',
                disabled: data.disabled ? data.disabled : false,
              },
              on: {
                change: (event) => {
                  data.form[data.prop] = event;
                  resolve({
                    data: data.form[data.prop],
                    type: 'change'
                  })
                }
              }
            }, data.options.map(item => {
              return createElement("el-option", {
                props: {
                  value: item.value,
                  label: item.label,
                  disabled: item.disabled ? item.disabled : false,
                }
              });
            }))
          ]);
        }
      });
    })
  },
  //多选
  Checkbox_: (data) => {
    return new Promise((resolve, reject) => {
      Vue.component("mydiv", {
        functional: true,
        render: function (createElement) {
          return createElement("div", {

          }, [
            createElement("el-checkbox-group", {
              props: {
                value: data.form[data.prop],
                disabled: data.disabled ? data.disabled : false,
              },
              on: {
                input: (event) => {
                  data.form[data.prop] = event;
                },
                change: (event) => {
                  resolve({
                    data: data.form[data.prop],
                    type: 'change'
                  })
                },
              }
            }, data.checkbox.map(item => {
              return createElement("el-checkbox", {
                props: {
                  label: item.label,
                  disabled: item.disabled ? item.disabled : false,
                }
              }, item.value);
            }))
          ]);
        }
      });
    })
  },
  //开关
  Switch_: (data) => {
    return new Promise((resolve, reject) => {
      Vue.component("mydiv", {
        functional: true,
        render: function (createElement) {
          return createElement("div", {

          }, [
            createElement("el-switch", {
              props: {
                value: data.form[data.prop],
                "active-color": "#13ce66",
                "inactive-color": "#ff4949",
                disabled: data.disabled ? data.disabled : false,
              },
              on: {
                change: (event) => {
                  data.form[data.prop] = event;
                  resolve({
                    data: data.form[data.prop],
                    type: 'change'
                  })
                }
              }
            })
          ]);
        }
      });
    })
  },
  //时间选择
  Date_: (data) => {
    return new Promise((resolve, reject) => {
      Vue.component("mydiv", {
        functional: true,
        render: function (createElement) {
          return createElement("div", {},[
            createElement("el-date-picker", {
              props: {
                value: data.form[data.prop],
                disabled: data.disabled ? data.disabled : false,
                placeholder: data.placeholder ? data.placeholder : '',
                type: data.type ? data.type : 'date',
                'value-format': data.format ? data.format : "yyyy-MM-dd",
              },
              on: {
                input: (event) => {
                  data.form[data.prop] = event;
                },
                change: (event) => {
                  resolve({
                    data: data.form[data.prop],
                    type: 'change'
                  })
                },
              }
            })
          ]);
        }
      });
    })
  },
}