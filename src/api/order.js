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
}) =>
  request({
    method: 'post',
    url: '/BackendOrder/checkOrderList.do',
    data: {
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
  })


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
