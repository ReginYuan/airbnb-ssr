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
  sign(params: any) {
    debugger
    return request({
      url: '/users/sign',
      method: 'post',
      data: params,
      mock: false
    })
  },
}