/**
 * api管理
 */

import request from "@/utils/request";
export default {
  /**
   * 登录接口
   * @param {*} params 
   * @returns 
   */
  login(params: any) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
      mock: false
    })
  },
  /**
   * 
   * @param params 注册
   * @returns 
   */
  sign(params: any) {
    return request({
      url: '/users/sign',
      method: 'post',
      data: params,
      mock: false
    })
  },
  /**
   * 
   * @param params 登出
   * @returns 
   */
  logout(params: any) {
    return request({
      url: '/users/logout',
      method: 'post',
      data: params,
      mock: false
    })
  },
  /**
   * 获取所有民宿信息
   * @param params
   * @returns 
   */
  house() {
    return request({
      url: '/house/all',
      method: 'get',
      data: {},
      mock: false
    })
  },
}