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


export function getUserIndex(data){
  return request({
    url: '/BackendUser/checkUser.do',
    method: 'post',
    data
  })
}

export function getCorporationIndex(data){
  return request({
    url: '/BackendUser/checkCompanyCert.do?',
    method: 'post',
    data
  })
}
