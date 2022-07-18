import { AxiosRequestConfig } from "axios";

//为store state 声明类型
export interface AllStateTypes {
  userInfo: object,
  language: object,
  roomList: Array<any>,
  pageNum: number,
  pageSize: number,
  total: number,
  cityCode: string
}

// 接口返回类型
export interface IResult {
  code: number;
  data: object;
  msg: string
}

// 民宿分页传值类型
export interface IRoomListParams {
  pageNum: number;
  cityCode: string;
}

// 民宿分页接口传值类型 并继承axios中的AxiosRequestConfig
export interface IRoomParams extends AxiosRequestConfig {
  pageNum: number;
  pageSize: number;
  cityCode: string;
}

// 登录注册表单类型
export interface IRuleForm {
  mobile: string;
  password: string;
}
