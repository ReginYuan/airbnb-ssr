/**
 * Vuex 状态管理
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import mutations from '@/store/mutations'
import storage from '@/utils/storage'
import { InjectionKey } from 'vue'
import createPersistedState from "vuex-persistedstate";
import actions from "@/store/actions";
import { AllStateTypes } from "@/interface/index";


// 定义 InjectionKey  key
export const key: InjectionKey<Store<AllStateTypes>> = Symbol('storekey')


// 封装useStore传递key
export function useStore() {
  return baseUseStore(key)
}

// 实力一个createStore
export function createSSRStore() {
  return createStore<AllStateTypes>({
    state: {
      userInfo: storage.getItem("userInfo") || {},// 存储用户信息
      language: storage.getItem('language') || {}, //存储国际化语言
      roomList: storage.getItem('roomList') || [],//存储房间信息
      pageNum: 1, //页数
      pageSize: 10, //每页条数
      total: 0, //总条数
      cityCode: 'hz' //城市id
    },
    actions,
    mutations,
    //默认存储到cookies
    plugins: [createPersistedState({ storage: storage })],
  })
}
