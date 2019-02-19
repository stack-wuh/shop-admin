import  request from '@/utils/request'

export function signinByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/portalLogin/login.do',
    method: 'post',
    data
  })
}
