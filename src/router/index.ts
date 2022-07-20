import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: false,
    },
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    meta: {
      title: '欢迎页',
      keepAlive: false,
    },
    component: () => import('../views/welcome/welcome.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页',
      keepAlive: false,
    },
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      title: '房屋详情页',
      keepAlive: false,
    },
    component: () => import('../views/detail/detail.vue'),
  }
]

export function createSSRRouter() {
  return createRouter({
    // 设置为哈西路由
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    // 加载路由数据
    routes
  })
}