/**
 * actions 业务层数据操作
 *
 */
import { fetchRoomDetail, fetchRoomList } from "@/api/home/index";

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
        commit('saveHouseList', { ...res.data, payload })
        resolve(true)
      })
    })
  },
  // 操作民宿详情的数据信息
  saveHouseDetail({ commit }: any, payload: any) {
    console.log('payload', payload);
    let { id } = payload
    let params = {
      id
    }
    return new Promise((resolve) => {
      fetchRoomDetail(params).then(res => {
        console.log('数据结构', res)
        commit('saveHouseDetail', { ...res.data[0] })
        resolve(true)
      })
    })
  }
}