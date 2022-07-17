/**
 * api管理
 */

import request from "@/utils/request";
import { http } from "@/utils/http";
export default {

  /**
   * 获取真实数据
   */
  fetchRoomList(): Promise<any> {
    // return http.httpRequestGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
    return http.httpRequestGet('http://localhost:3000/api/house/all', {})
  },
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