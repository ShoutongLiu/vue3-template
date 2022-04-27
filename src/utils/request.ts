import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'


class Request {
  // axios 实例
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    //全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config)
        return config
      },
      (error) => {
        console.log('全局请求失败拦截', error)
      }
    )
    //全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        //res为AxiosResponse类型，含有config\data\headers\request\status\statusText属性
        console.log(res)
        //改造返回的数据类型，即将AxiosResponse的data返回
        return res.data
      },
      (error) => {
        console.log('全局响应失败拦截')
        console.log(error.request)//
        console.log(error.response)
        return error
      }
    )
  }
  //返回的Promise中结果类型为AxiosResponse<any>
  //加入泛型限定，返回数据类型为T，
  request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

//使用环境配置
const request = new Request({
  baseURL: process.env.VITE_APP_WEB_URL,
  timeout: 10 * 1000,
})

export default request
