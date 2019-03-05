import request from '@/utils/request';

export function getShopInfo({
  status,
  commitStartDate,
  commitEndDate,
  authenticationStartTime,
  authenticationEndTime,
  userName,
  name,
  processStatus,
  spotGoodsStatus,
  currPageNo = 1
}){
  let data = {
    status,
    commitStartDate,
    commitEndDate,
    authenticationStartTime,
    authenticationEndTime,
    userName,
    name,
    processStatus,
    spotGoodsStatus,
    currPageNo
  }
  data.processStatus = data.processStatus == 0 ? '' : data.processStatus
  data.spotGoodsStatus = data.spotGoodsStatus == 0 ? '' : data.spotGoodsStatus
  return request({
    method: 'post',
    url: '/backendMerchant/checkBackendMerchant.do?',
    data
  })
}

export function getShopSearchOneById(data){
  return request({
    method: 'post',
    url: '/backendMerchant/checkGoodsById.do',
    data
  })
}

export function getShopSearchInfo({
  status,
  startDate,
  endDate,
  productCode,
  merchantName,
  topName,
  goodName,
  materials,
  currPageNo = 1
}){
  return request({
    method: 'post',
    url: '/backendMerchant/checkGoods.do',
    data: {
      status,
      startDate,
      endDate,
      productCode,
      merchantName,
      topName,
      goodName,
      materials,
      currPageNo
    }
  })
}

export function getShopOneById(data){
  return request({
    method: 'post',
    url: '/backendMerchant/updateStatus.do',
    data
  })
}
