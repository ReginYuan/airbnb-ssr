import { http } from "@/utils/http";
import { IRoomParams, IRoomDetailParams, IResult } from "@/interface/index";

/**
 * 获取民宿列表加分页接口
 */
export function fetchRoomList(params: IRoomParams): Promise<IResult> {
  // return http.httpRequestGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
  return http.httpRequestGet('/api/house/all', params)
}

/**
 * 获取民宿详情
 */
export function fetchRoomDetail(params: IRoomDetailParams): Promise<IResult> {
  // return http.httpRequestGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
  return http.httpRequestGet('/api/house/detail', params)
}
