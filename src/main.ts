import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import request from './utils/request'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import i18n from "./language/i18n";
import store from '@/store/index'
import api from "@/api/index";

// 创建app实例
const app = createApp(App)

//语言国家化
app.use(ElementPlus, {
  locale: zhCn,
})

// 国家语言插件
app.use(i18n)

// 使用ElementPlus组件库
app.use(ElementPlus)

// 现在获取环境变量的方式
console.log("环境变量=>", import.meta.env)
// 全局挂载request
app.config.globalProperties.$request = request

// 全局挂载request
app.config.globalProperties.$api = api

app.use(router).use(store).mount('#app')