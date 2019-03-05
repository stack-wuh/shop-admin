import {
  getWebBannerOrAd,
  getBottomListByStatus,
  setBottomItemStatusById,
  getBottomItemById,
  setBottomItemInfoByParams,
  getNoticeListByStatus,
  getClassifyByParentId,
  getIntegralListByStatus,
  setAgreementByContent,
  setIntegralStatusById,
  getNewsListByClassify,
  getConsumerInfo,
  getNewsList,
  setConsumerStatus,
  postNoticeListByParams,
  delNoticeById,
  updateClassifyByParams,
  setClassifyStatusById,
  getAgreementContent,
  getStoreInfoById
} from '@/api/website'

const state = {
  info: {},

  list: [],
}

const mutations = {
  SET_WEB_INFO: (state, params) => {
    state.info = params
  },

  SET_WEB_LIST: (state, params) => {
    state.list = params.data
  }
}

const actions = {
  /**
   * [GetWebBannerOrAd 网站管理 -- 图片管理]
   * @method GetWebBannerOrAd
   * @param  {[type]}         commit [description]
   * @param  {[type]}         status [0: 广告位管理, 1: banner 管理]
   * @return {Promise}               [description]
   */
  async GetWebBannerOrAd({commit}){
    const response  = await getWebBannerOrAd()
    commit('SET_WEB_INFO', response.data)
    Promise.resolve(response.data)
    return response
  },

  /**
   * [GetBottomListByStatus 网站管理 -- 底部导航栏管理 -- 获取列表]
   * @method GetBottomListByStatus
   * @param  {[type]}              commit     [description]
   * @param  {Number}              [status=0] [description]
   * @return {Promise}                        [description]
   */
  async GetBottomListByStatus({commit}, status = 0) {
    const response = await getBottomListByStatus(status)
    commit('SET_WEB_LIST', response)
    return response
  },

  /**
   * [SetBottomItemStatusById 网站管理 -- 底部导航栏 -- 切换状态]
   * @method SetBottomItemStatusById
   * @param  {[type]}                commit [description]
   * @param  {[type]}                id     [description]
   * @return {Promise}                      [description]
   */
  async SetBottomItemStatusById({commit, rootState, dispatch}, id) {
    const response = await setBottomItemStatusById(id)
    setTimeout(() => {
      dispatch('GetBottomListByStatus', rootState.schemaHeaderCurrent.index)
    }, 3000)
  },

  /**
   * [GetBottomItemById 网站管理 -- 底部导航栏 -- 根据id获取详情]
   * @method GetBottomItemById
   * @param  {[type]}          commit [description]
   * @param  {[type]}          id     [description]
   * @return {Promise}                [description]
   */
  async GetBottomItemById({commit}, id) {
    const response  = await getBottomItemById(id)
    return Promise.resolve(response)
  },

  /**
   * [SetBottomItemInfoByParams 网站管理 -- 底部导航栏 -- 根据id 设置内容]
   * @method SetBottomItemInfoByParams
   * @param  {[type]}                  commit [description]
   * @param  {[type]}                  params [description]
   * @return {Promise}                        [description]
   */
  async SetBottomItemInfoByParams({commit}, params) {
    const response = await setBottomItemInfoByParams(params)
    return Promise.resolve(response)
  },

  /**
   * [GetNoticeListByStatus 网站管理 -- 公告管理 -- 获取公告列表]
   * @method GetNoticeListByStatus
   * @param  {[type]}              commit [description]
   * @param  {[type]}              status [description]
   * @return {Promise}                    [description]
   */
  async GetNoticeListByStatus({commit}) {
    const response = await getNoticeListByStatus()
    commit('SET_WEB_LIST', response)
    return Promise.resolve(response)
  },

  /**
   * [PostNoticeListByParams 网站管理 -- 添加公告管理]
   * @method PostNoticeListByParams
   * @param  {[type]}               dispatch [description]
   * @param  {[type]}               params   [description]
   * @return {Promise}                       [description]
   */
  async PostNoticeListByParams({dispatch}, params) {
    const response  = await postNoticeListByParams(params)
    setTimeout(() => {
      dispatch('GetNoticeListByStatus')
      dispatch('ClearDialogInfoAsync')
    }, 1500)
  },

  /**
   * [DelNoticeById 网站管理 -- 根据id删除]
   * @method DelNoticeById
   * @param  {[type]}      dispatch [description]
   * @param  {[type]}      id       [description]
   * @return {Promise}              [description]
   */
  async DelNoticeById({dispatch}, id) {
    const response = await delNoticeById(id)
    setTimeout(() => {
      dispatch('GetNoticeListByStatus')
    }, 1000)
  },
  /**
   * [GetClassifyByParentId 网站管理 -- 分类管理 -- 根据status 获取列表]
   * @method GetClassifyByParentId
   * @param  {[type]}              commit     [description]
   * @param  {Number}              [status=1] [description]
   * @return {Promise}                        [description]
   */
  async GetClassifyByParentId({commit}, status = 1) {
    const response = await getClassifyByParentId(status)
    commit('SET_WEB_LIST', response)
  },

  /**
   * [updateClassifyByParams 网站管理 -- 分类管理 -- 根据params添加分类]
   * @method updateClassifyByParams
   * @param  {[type]}               dispatch [description]
   * @param  {[type]}               params   [description]
   * @return {Promise}                       [description]
   */
  async UpdateClassifyByParams({dispatch, rootState}, params) {
    let {type} = rootState.dialogInfo
    let response  = null
    if(type == 'add') {
        response = await updateClassifyByParams(params)
    }else {
        response = await setClassifyStatusById(params)
    }
    setTimeout(() => {
      dispatch('GetClassifyByParentId')
      dispatch('ClearDialogInfoAsync')
    }, 1500)
  },

  /**
   * [GetIntegralListByStatus 网站管理 -- 获取积分列表]
   * @method GetIntegralListByStatus
   * @param  {[type]}                commit [description]
   * @return {Promise}                      [description]
   */
  async GetIntegralListByStatus({commit}) {
    const response = await getIntegralListByStatus()
    commit('SET_WEB_LIST', response)
  },

  /**
   * [GetAgreementContent 网站管理 -- 获取协议管理]
   * @method GetAgreementContent
   * @param  {[type]}            commit [description]
   * @return {Promise}                  [description]
   */
  async GetAgreementContent({commit}) {
    const response  = await getAgreementContent()
    return Promise.resolve(response)
  },

  /**
   * [SetAgreementByContent 网站管理 -- 协议管理]
   * @method SetAgreementByContent
   * @param  {[type]}              commit  [description]
   * @param  {[type]}              content [description]
   * @return {Promise}                     [description]
   */
  async SetAgreementByContent({commit}, content) {
    const response = await setAgreementByContent(content)
    return Promise.resolve(response)
  },

  /**
   * [setIntegralStatusById 网站管理 -- 积分管理 -- 根据id切换状态]
   * @method setIntegralStatusById
   * @param  {[type]}              commit [description]
   * @param  {[type]}              id     [description]
   * @return {Promise}                    [description]
   */
  async SetIntegralStatusById({commit, dispatch}, id) {
    const response = await setIntegralStatusById(id)
    setTimeout(() => {
      dispatch('GetIntegralListByStatus')
    }, 3000)
  },

  /**
   * [GetConsumerInfo 网站管理 -- 商家信息管理]
   * @method GetConsumerInfo
   * @param  {[type]}        commit [description]
   * @return {Promise}              [description]
   */
  async GetConsumerInfo({commit}) {
    const response = await getConsumerInfo()
    commit('SET_WEB_INFO', response.data)
  },

  /**
   * [GetNewsList 网站管理 -- 新闻中心 -- 根据belongId获取新闻列表]
   * @method GetNewsList
   * @param  {[type]}    commit   [description]
   * @param  {[type]}    belongId [description]
   * @return {Promise}            [description]
   */
  async GetNewsList({commit}, belongId = 0) {
    const response = await getNewsList(belongId)
    commit('SET_WEB_LIST', response)
  },

  /**
   * [SetConsumerStatus 网站管理 -- 商家信息管理 -- 状态切换]
   * @method SetConsumerStatus
   * @param  {[type]}          dispatch [description]
   * @return {Promise}                  [description]
   */
  async SetConsumerStatus({dispatch}) {
    const response = await setConsumerStatus()
    setTimeout(() => {
      dispatch('GetConsumerInfo')
    }, 1000)
  },
}

const getters = {}

export default {
  state, mutations, actions, getters
}
