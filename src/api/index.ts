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
      url: '/api/users/login',
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
      url: '/api/users/sign',
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
      url: '/api/users/logout',
      method: 'post',
      data: params,
      mock: false
    })
  },
  /**
   * 新增民宿订单信息
   * @param params
   * @returns 
   */
  saveOrder(params: any) {
    return request({
      url: '/api/order/add',
      method: 'post',
      data: params,
      mock: false
    })
  },
  /**
 * 获取民宿订单信息
 * @param params
 * @returns 
 */
  getOrderList() {
    return request({
      url: '/api/order/list',
      method: 'get',
      data: {},
      mock: false
    })
  },
}