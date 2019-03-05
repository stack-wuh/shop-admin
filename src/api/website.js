import request from '@/utils/request'

export const getWebBannerOrAd = (
  status = 0
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

export const getNoticeListByStatus = () =>
  request({
    method: 'post',
    url: '/web/checkAn.do',
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

export const getAgreementContent = () =>
  request({
    method: 'get',
    url: '/web/getAgreementManager.do'
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


export const postNoticeListByParams = (data) =>
  request({
    method: 'post',
    url: '/web/addAn.do',
    data
  })

export const delNoticeById = id =>
  request({
    method: 'post',
    url: '/web/deleteAn.do',
    data: {
      id
    }
  })


export const updateClassifyByParams = ({
  name,
  id,
  funcId
}) =>
  request({
    method: 'post',
    url: '/web/addCategory.do',
    data: {
      name,
      id,
      funcId
    }
  })

export const setClassifyStatusById = ({
  id,
  name
}) =>
  request({
    method: 'post',
    url: '/web/updateCategory.do',
    data:{
      id,
      name
    }
  })

export const delNewsListById = id =>
  request({
    method: 'post',
    url: '/web/deleteNewsManager.do',
    params: {
      id
    }
  })

export const updateNewsListByParams = ({
  belongId = 0,
  name,
  content
}) =>
  request({
    method: 'post',
    url: '/web/addNewsManager.do',
    data: {
      belongId,
      name,
      content
    }
  })

export const getNewsChildInfoById = id =>
  request({
    method: 'post',
    url: '/web/checkNewsManagerId.do',
    data: {
      id
    }
  })

export const updateScoerInfoByParams = data =>
  request({
    method: 'post',
    url: '/web/updateSocerManager.do',
    data
  })
