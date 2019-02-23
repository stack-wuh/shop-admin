import request from '@/utils/request'

export const getWebBannerOrAd = (
  status
) => request({
  url: '/web/checkAd.do',
  method: 'post',
  data: {
    status
  }
})

export const getBottomListByStatus = (
  status
) => request({
  url: '/navigationManager/check.do',
  method: 'post',
  data: {
    status
  }
})

export const setBottomItemStatusById = (
  id
) => request({
  url: '/navigationManager/updateStatus.do',
  method: 'post',
  data: {
    id
  }
})

export const getBottomItemById = (id) =>
  request({
    url: '/navigationManager/checkId.do',
    method: 'post',
    data: {
      id
    }
  })

export const setBottomItemInfoByParams = (params) =>
  request({
    method: 'post',
    url: '/navigationManager/update.do',
    params
  })

export const getNoticeListByStatus = (status) =>
  request({
    method: 'post',
    url: '/web/checkAn.do',
    data: {
      status
    }
  })

export const getClassifyByParentId = (id) =>
  request({
    method: 'post',
    url: '/web/checkCategory.do',
    params: {
      parentId: id
    }
  })

export const getIntegralListByStatus = () =>
  request({
    method: 'post',
    url: '/web/checkSocerManager.do',
    data: {
      status
    }
  })

export const setAgreementByContent = (content) =>
  request({
    method: 'post',
    url: '/web/agreementManager.do',
    data: {
      content
    }
  })

export const setIntegralStatusById = id =>
  request({
    method: 'post',
    url: '/web/updateSocerManager.do',
    data: {
      id
    }
  })

export const getNewsListByClassify = id =>
  request({
    method: 'post',
    url: '/web/checkNewsManager.do',
    data: {
      belongId: id
    }
  })

export const getConsumerInfo = () =>
  request({
    method: 'post',
    url: '/web/checkConsumerNews.do',
  })

export const setConsumerStatus = () =>
  request({
    method: 'post',
    url: '/web/updateConsumerNews.do'
  })

export const getNewsList = (belongId) =>
  request({
    method: 'post',
    url: '/web/checkNewsManager.do',
    data: {
      belongId
    }
  })
