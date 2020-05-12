import apiAxios from '@/../plugins/axios.js';
export default {
  login:async data => apiAxios('POST','/api/login', data),
  GetKey:async data => apiAxios('GET','/api/GetKey', data),
  hello:async data => apiAxios('GET','/api/hello', data),
}