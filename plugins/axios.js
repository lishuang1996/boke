import axios from 'axios';

let http = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params) {
  return new Promise((resolve, reject)=>{
    http({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
      console.log(res)
      resolve(res.data);
    }).catch(function (err) {
      reject(err);
    })
  })
  
}

export default {
  get: function (url, params) {
    return new Promise((resolve, reject)=>{
      apiAxios('GET', url, params)
      .then(res=>{
        console.log(res)
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  },
  post: function (url, params) {
    return new Promise((resolve, reject)=>{
      apiAxios('POST', url, params)
      .then(res=>{
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  },
  put: function (url, params) {
    return new Promise((resolve, reject)=>{
      apiAxios('PUT', url, params)
      .then(res=>{
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  },
  delete: function (url, params) {
    return new Promise((resolve, reject)=>{
      apiAxios('DELETE', url, params)
      .then(res=>{
        resolve(res)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }
}