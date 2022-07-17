/**
 * Mutations 业务层数据提交
 *
 */
import storage from '@/utils/storage'
export default {
  // 保存用户数据信息
  saveUserInfo(state: any, userInfo: any) {
    state.userInfo = userInfo;
    console.log('state.userInfo', state.userInfo)
    storage.setItem('userInfo', userInfo)
  },
  // 保存国际化语言数据信息
  saveLanguage(state: any, language: any) {
    state.language = language;
    storage.setItem('language', language)
  },
  // 保存民宿的数据信息
  saveHouseList(state: any, roomList: any) {
    roomList.forEach((item: any) => {
      state.roomList.push(item);
    });
    storage.setItem('roomList', roomList)
  }
}