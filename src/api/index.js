import request from '@/utils/request';

export function getIndexView(){
  return request({
    method: 'post',
    url: '/home/homeTotal.do'
  })
}


export function getIndexStatistic({
  timeState = 3,
  startTime,
  endTime,
  orderCode,
  merchantName,
  currPageNo = 1
}){
  return request({
    method: 'post',
    url: '/home/revenueStatistics.do',
    data: {
      timeState,
      startTime,
      endTime,
      orderCode,
      merchantName,
      currPageNo
    }
  })
}
