/**
 * 环境配置封装
 */
const env: any = import.meta.env.MODE || 'prod';
const EnvConfig = {
  dev: { //开发环境
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/d219c21f5eb0aed28d349a9424f6ab96/api'
  },
  test: { //测试环境
    baseApi: '//tets.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/d219c21f5eb0aed28d349a9424f6ab96/api'
  },
  prod: { //生产环境
    baseApi: '//futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/d219c21f5eb0aed28d349a9424f6ab96/api'
  }
}
export default {
  env: 'dev',//开发环境
  mock: true, //是否启用mock
  namespace: 'airbnb',//命名空间用于区分storage
  ...EnvConfig[env] //解构出开发环境
}