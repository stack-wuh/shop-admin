import axios from 'axios'
import qs from 'qs'
import {Message, Loading} from 'element-ui'
import _g from '@/utils/global'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5 * 1000
})

const options = {
  lock: true,
  text: 'wait a monment, please...',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, .8)'
}
let loadingInstance = null
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    let {data } = config
    config.data = qs.stringify(data)
    loadingInstance = Loading.service(options)
    return config
  },
  error => {
    // do something with request error
    setTimeout(() => {
      loadingInstance.close()
    })
    console.error(error)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    setTimeout(() => {
      loadingInstance.close()
    }, 1500)
    if(response.status !== 200){
      Message({
        message: res.msg || 'Undefined error messsage, please try agian!',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject('http request is error, please try again!')
    }else {
      res.msg &&  _g._toast({
        msg: res.msg,
        type: res.status === 0 ? 'success' : 'error',
        duration: 3
      })
      return response.data
    }
  },
  error => {
    console.error(error)
    loadingInstance.close()
    Message({
      message: error,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
