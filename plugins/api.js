import apiAxios from '@/../plugins/axios.js';
export default {
  login:async data => apiAxios('POST','/api/login', data),
  GetKey:async data => apiAxios('GET','/api/GetKey', data),
  hello:async data => apiAxios('GET','/api/hello', data),
  AdminRoleBindList:async data => apiAxios('GET','/api/AdminRoleBindList', data),
  AdminRoleBindEdit:async data => apiAxios('POST','/api/AdminRoleBindEdit', data),
  AdminUserList:async data => apiAxios('GET','/api/AdminUserList', data),
  NewsAdd:async data => apiAxios('POST','/api/NewsAdd', data),
  NewsDel:async data => apiAxios('POST','/api/NewsDel', data),
  NewsEdit:async data => apiAxios('POST','/api/NewsEdit', data),
  AdminNewsList:async data => apiAxios('GET','/api/AdminNewsList', data),
  GetSelAdminList:async data => apiAxios('GET','/api/GetSelAdminList', data),
  SelAdd:async data => apiAxios('POST','/api/SelAdd', data),
  SelDel:async data => apiAxios('POST','/api/SelDel', data),
  SelEdit:async data => apiAxios('POST','/api/SelEdit', data),
}