
import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: '/api', // api base_url
  timeout: 30000, // 请求超时时间
})

interface IResponse<T = any> {
  msg: string
  data: T
}

export const request = async <T>(
  config: AxiosRequestConfig
): Promise<IResponse<T>> => {
  const { data } = await instance.request<IResponse<T>>(config)
  // data.code === 0
  //   ? console.log(data?.msg) // 成功消息提示
  //   : console.error(data?.msg) // 失败消息提示
  return data
}

// 请求拦截
instance.interceptors.request.use((config) => {
  return config
})

// 返回拦截
instance.interceptors.response.use((response) => {
  response
  return response
})

// export default request
