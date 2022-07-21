/**
 * Mutations 业务层数据提交
 *
 */
import storage from '@/utils/storage'
export default {
  // 保存用户数据信息
  saveUserInfo(state: any, userInfo: any) {
    state.userInfo = userInfo;
    storage.setItem('userInfo', userInfo)
  },
  // 保存国际化语言数据信息
  saveLanguage(state: any, language: any) {
    state.language = language;
    storage.setItem('language', language)
  },
  // 保存民宿的数据信息
  saveHouseList(state: any, data: any) {
    state.roomList = []
    const { pageNum, cityCode } = data.payload
    data.list.forEach((item: any) => {
      state.roomList.push(item);
    });
    state.total = data.page.total
    state.pageNum = pageNum
    state.cityCode = cityCode
    storage.setItem('roomList', data)
  },
  // 保存房屋详情信息
  saveHouseDetail(state: any, data: any) {
    const { detail, title, price, pictureUrl } = data
    state.roomDetail = { ...detail, title, price, pictureUrl }
    storage.setItem('roomDetail', data)
  },
  // 保存房屋id
  saveRoomId(state: any, payload: any) {
    state.roomId = payload.id
  },
  // 保存订单状态
  saveOrderStatus(state: any) {
    state.orderStatus = !state.orderStatus
  }
}