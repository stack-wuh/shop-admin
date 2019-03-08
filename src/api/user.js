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
  username,
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
      username,
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


export const updateUserByParams = ({
  id,
  realName,
  userName,
  password
}) =>
  request({
    method: 'post',
    url: '/BackendLoginerController/addLoginer.do',
    data: {
      id,
      realName,
      userName,
      password
    }
  })

export const deleteUserById = (id) =>
  request({
    method: 'post',
    url: '/BackendLoginerController/deleteLoginer.do',
    params: {
      id
    }
  })


export const getUserDetailById = id =>
  request({
    method: 'post',
    url: '/BackendUser/checkUserId.do',
    data: {
      id
    }
  })

export const getCorporationDetailById = (
  {
    id,
    status
  }
) =>
  request({
    method: 'post',
    url: '/BackendUser/checkCompanyCertId.do',
    data: {
      id,
      status
    }
  })
