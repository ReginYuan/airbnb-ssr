import { http } from "@/utils/http";
import { IRoomParams, IResult } from "@/interface/index";

/**
 * 获取民列表加分页接口
 */
export function fetchRoomList(params: IRoomParams): Promise<IResult> {
  // return http.httpRequestGet('http://110.42.184.111/api/room/room/getRoomList?pageNo=1&pageSize=3', {})
  return http.httpRequestGet('http://localhost:3000/api/house/all', params)
}

