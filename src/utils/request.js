import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5 * 1000
})


// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    let {data } = config
    config.data = qs.stringify(data)
    return config
  },
  error => {
    // do something with request error
    console.error(error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code !== 200){
      Message({
        message: res.msg,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject('http request is error, please try again!')
    }else {
      return response.data
    }
  },
  error => {
    console.error(error)
    Message({
      message: error,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
