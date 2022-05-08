import request from '../utils/request'

const login = <T>(data: T): Promise<T> => {
  return request.request({
    method: 'post',
    data
  })
}

export default { login }
