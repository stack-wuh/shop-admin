import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'

const server = axios.create({
  baseURL: '/',
  timeout: 5000
})
