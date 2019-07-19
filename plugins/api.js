import Api from '@/../plugins/axios.js';
export const login = data => Api.get('/login', data);