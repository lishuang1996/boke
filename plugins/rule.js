//**********************************from表单规则验证****************************//
export default {
  Email: (rule, value, callback) => {
    let email = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    if (!value) {
      return callback(new Error('邮箱不能为空'))
    }
    if (!email.test(value)) {
      return callback(new Error('请填写正确邮箱'))
    } else {
      return callback()
    }
  },
  Tel: (rule, value, callback) => {
    let tel = /^1[345789]\d{9}$/
    if (!value) {
      return callback()
    }
    if (!tel.test(value)) {
      return callback(new Error('请填写正确手机号码'))
    } else {
      return callback()
    }
  },
}