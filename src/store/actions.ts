/**
 * actions 业务层数据操作
 *
 */
import { fetchRoomList } from "@/api/home/index";

export default {
  // 操作民宿的数据信息
  saveHouseList({ commit }: any, payload: any) {
    console.log('payload', payload);
    let { pageNum, cityCode } = payload
    let params = {
      pageNum,
      pageSize: 10,
      cityCode
    }
    return new Promise((resolve) => {
      fetchRoomList(params).then(res => {
        console.log('数据结构', res)
        commit('saveHouseList', { ...res.data, payload })
        resolve(true)
      })
    })
  }
}