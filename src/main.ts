import { createSSRApp } from 'vue'
import App from './App.vue'
import { createSSRRouter } from './router/index'
import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import request from './utils/request'
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { createSSRI18n } from "./language/i18n";
import { key, createSSRStore } from '@/store/index';
import api from "@/api/index";
import { sync } from 'vuex-router-sync'

// 导出 createApp封装工厂函数对象 
export function createApp() {

  // 创建app实例
  const app = createSSRApp(App)

  // 创建vuex实例
  const store = createSSRStore()

  // 创建路由实例
  const router = createSSRRouter()

  // 创建i18n语言包实例
  const i18n = createSSRI18n()

  // 通过store和router数据
  sync(store, router)

  //语言国家化
  app.use(ElementPlus, {
    locale: zhCn,
  })

  // 国家语言插件
  app.use(i18n)

  // 使用ElementPlus组件库
  app.use(ElementPlus)
  app.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })


  // 全局挂载request
  app.config.globalProperties.$request = request

  // 全局挂载request
  app.config.globalProperties.$api = api

  //全局挂载路由
  app.use(router)

  //全局挂载vuex
  app.use(store, key)

  return { app, router, store }
}

export function asyncDataFilters(components: any, store: any, route: any) {
  return Promise.all(
    components.map((Component: any) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route,
        });
      }
    }),
  )
}