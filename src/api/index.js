import request from '@/utils/request';

export function getIndexView(){
  return request({
    method: 'post',
    url: '/home/homeTotal.do'
  })
}


export function getIndexStatistic(data){
  return request({
    method: 'post',
    url: '/home/revenueStatistics.do',
    data
  })
}
