import request from '../../config/request'
//接口
const baseURL='http://127.0.0.1:4523/m1/857377-0-default';
export async function requestList(params) {
  return request({ url: `${baseURL}/test1`, data: params ,method:'GET'});
}
export async function getFeatureList(params) {
  return request({ url: `${baseURL}/getFeatureList`, data: params ,method:'GET'});
}
