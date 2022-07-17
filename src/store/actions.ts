/**
 * actions 业务层数据操作
 *
 */
import api from "@/api/index";

export default {
  // 操作民宿的数据信息
  saveHouseList({ commit }: any) {
    return new Promise((resolve) => {
      api.fetchRoomList().then(res => {
        commit('saveHouseList', res.data)
        resolve(true)
      })
    })
  }
}