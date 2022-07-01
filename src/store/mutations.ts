/**
 * Mutations 业务层数据提交
 *
 */
import storage from '@/utils/storage'


export default {
  // 保存数据信息
  saveUserInfo(state: any, userInfo: any) {
    state.userInfo = userInfo;
    storage.setItem('userInfo', userInfo)
  },
  // 保存数据信息
  saveLanguage(state: any, language: any) {
    state.language = language;
    storage.setItem('language', language)
  }
}