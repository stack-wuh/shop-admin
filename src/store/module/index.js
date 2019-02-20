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

  async GetIndexStatistic({commit}, {
    page = 1,
    timeState = 0,
    startTime,
    endTime,
    orderCode,
    merchantName
  }){
    let response = await getIndexStatistic({
      page,
      timeState,
      startTime,
      endTime,
      orderCode,
      merchantName
    })


  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
