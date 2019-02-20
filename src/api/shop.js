import request from '@/utils/request';

export function getShopInfo(data){
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

export function getShopSearchInfo(data){
  return request({
    method: 'post',
    url: '/backendMerchant/checkGoods.do',
    data
  })
}

export function getShopOneById(data){
  return request({
    method: 'post',
    url: '/backendMerchant/updateStatus.do',
    data
  })
}
