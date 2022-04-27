import request from '../utils/request'

export const login = <T>(data: T): Promise<T> => {
  return request.request({
    method: 'post',
    data
  })
}