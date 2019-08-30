import apiAxios from '@/../plugins/axios.js';
export const login = async data => apiAxios('POST','/api/login', data);