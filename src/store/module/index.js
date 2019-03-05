import {
  getIndexView,
  getIndexStatistic
} from '@/api/index'


const state = {
  info: {},
  search: {},
}

const mutations = {
  SET_STATE_INFO: (state, params) => {
    state.info = params
  }
}

const actions = {
  /**
   * [GetIndexView 首页 -- 平台纵览]
   * @method GetIndexView
   * @param  {[type]}     commit [description]
   * @return {Promise}           [description]
   */
  async GetIndexView({commit}){
    let response = await getIndexView()
    commit('SET_STATE_INFO', response.data)
    return Promise.resolve(response)
  },

  /**
   * [GetIndexStatistic 首页 -- 营收统计]
   * @method GetIndexStatistic
   * @param  {[type]}          commit        [description]
   * @param  {Number}          [page=1]      [description]
   * @param  {Number}          [timeState=0] [description]
   * @param  {[type]}          startTime     [description]
   * @param  {[type]}          endTime       [description]
   * @param  {[type]}          orderCode     [description]
   * @param  {[type]}          merchantName  [description]
   * @return {Promise}                       [description]
   */
  async GetIndexStatistic({commit, rootState}, {
    currPageNo,
    timeState,
    startTime,
    endTime,
    orderCode,
    merchantName
  }){
    let response = await getIndexStatistic({
      currPageNo,
      timeState,
      startTime,
      endTime,
      orderCode,
      merchantName,
      ...rootState.search
    })
    commit('SET_SHOP_STORE', response.data)
    Promise.resolve(response)
    return response
  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
