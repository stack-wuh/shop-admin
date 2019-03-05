import request from '@/utils/request'

export const getOrderListByParams = ({
  orderStates,
  startDate,
  endDate,
  orderNo,
  realName,
  gooodsStatus,
  processStatus,
  spotGoodsStatus,
  merchantName,
  currPageNo = 1
}) => {
  let data = {
    orderStates,
    startDate,
    endDate,
    orderNo,
    realName,
    gooodsStatus,
    processStatus,
    spotGoodsStatus,
    merchantName,
    currPageNo
  }
  data.processStatus = data.processStatus == 0 ? '' : data.processStatus
  data.spotGoodsStatus = data.spotGoodsStatus == 0 ? '' : data.spotGoodsStatus
  return  request({
    method: 'post',
    url: '/BackendOrder/checkOrderList.do',
    data
  })
}

export const getOwnOrderById = ({
  id,
}) =>
  request({
    method: 'post',
    url: '/BackendOrder/checkOrderListById.do',
    data: {
      id
    }
  })
