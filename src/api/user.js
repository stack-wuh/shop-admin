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


export function getUserIndex({
  startDate,
  endDate,
  username,
  status,
  currPageNo = 1
}){
  return request({
    url: '/BackendUser/checkUser.do',
    method: 'post',
    data: {
      startDate,
      endDate,
      username,
      status,
      currPageNo
    }
  })
}

export function getCorporationIndex({
  startDate,
  endDate,
  status,
  userName,
  companyName,
  currPageNo = 1
}){
  return request({
    url: '/BackendUser/checkCompanyCert.do',
    method: 'post',
    data: {
      startDate,
      endDate,
      status,
      userName,
      companyName,
      currPageNo
    }
  })
}

export const getUserManagerList = () =>
  request({
    method: 'post',
    url: '/BackendLoginerController/getbackendLoginerList.do',
  })
