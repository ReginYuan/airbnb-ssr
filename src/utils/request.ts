/**
 * axios二次封装
*/

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from 'element-plus';
import router from './../router/index'
import config from './../config/index'

//设置自定义报错
const TOKEN_INVALID = 'Token认证失败,请重新登陆'
const NETWORK_ERROR = '网络请求异常,请稍后重试'

// 创建axios实例对象,添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截

service.interceptors.request.use((req: AxiosRequestConfig) => {
  //TO-DO
  const headers: any = req.headers;
  if (!headers.Authorization) headers.Authorization = "ReginYuan"
  return req;
})

// 响应拦截

service.interceptors.response.use((res: AxiosResponse) => {
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else if (code === 40001) {
    // 提示异常
    ElMessage.error(TOKEN_INVALID)
    // 跳转到登录页面
    setTimeout(() => {
      router.push('/login')
    }, 15000)
    // 向控制台抛出异常
    return Promise.reject(TOKEN_INVALID)
  } else {
    // 提示异常
    ElMessage.error(msg || NETWORK_ERROR)
    // 向控制台抛出异常
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options: any) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    // 转换类型
    options.params = options.data;
  }
  if (typeof options.mock !== 'undefined') {
    config.mock = options.mock
  }
  // 如果是生产环境
  if (config.env === 'prod') {
    // 就将baseApi指向config.baseApi 线上地址
    service.defaults.baseURL = config.baseApi
  } else {
    // 如果开启mock 就启用 config.mockApi 如果没开启mock就启用config.baseApi
    // service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
        service.defaults.baseURL = config.mock ? 'https://www.fastmock.site/mock/d219c21f5eb0aed28d349a9424f6ab96/api' : '/'
  }
  return service(options)
}

// 封装请求方式
['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  (request as any)[item] = (url: string, data: any, options: any) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    })
  }
})


export default request