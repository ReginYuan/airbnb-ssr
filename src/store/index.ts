/**
 * Vuex 状态管理
 */
import { createStore } from 'vuex'
import mutations from '@/store/mutations'
import storage from '@/utils/storage'

const state = {
  userInfo: storage.getItem("userInfo") || {},// 获取用户信息
  language: storage.getItem('language') || {},
  menuList: storage.getItem("menuList") || [],// 获取菜单列表信息
  actionList: storage.getItem("actionList") || [],//获取按钮列表信息
}
export default createStore({
  state,
  mutations
})