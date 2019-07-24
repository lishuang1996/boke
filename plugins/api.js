import Api from '@/../plugins/axios.js';
export const login = async data => Api.post('/login', data);