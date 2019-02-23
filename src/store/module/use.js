import {
  signinByUsername,
  getUserIndex,
  getCorporationIndex,
  getUserManagerList,
} from '@/api/user'
import {
  $to,
} from '@/utils/global'


const state = {
  userInfo: {}, // 缓存用户信息

  list: [],
}

const mutations = {
    SET_USERINFO: (state, params) => {
      state.userInfo = params
    },
    SET_USER_LIST: (state, params) => {
      state.list = params
    }
}

const actions = {
  /**
   * [SigninByUsername 用户名登录]
   * @method SigninByUsername
   * @param  {[type]}         commit   [description]
   * @param  {[type]}         username [description]
   * @param  {[type]}         password [description]
   * @return {Promise}                 [description]
   */
  async SigninByUsername({commit}, {
    username: name,
    password: pwd
  }){
    const username = name.trim()
    let response = await signinByUsername(username, pwd)
    if(!response.status){
      commit('SET_USERINFO', response.data)
      $to({path: '/index/dashboard', query: {}}, 1)
    }
    return Promise.resolve(response)
  },

  /**
   * [GetUserIndex 用户管理 -- 个人管理 -- 首页]
   * @method GetUserIndex
   * @param  {[type]}     commit [description]
   * @param  {[type]}     params [description]
   * @return {Promise}           [description]
   */
  async GetUserIndex({commit, rootState}, params){
    const response = await getUserIndex({...params, ...rootState.search})
    commit('SET_SHOP_STORE', response.data)
    return response
  },

  /**
   * [GetCorporationIndex 用户管理 -- 企业管理 -- 首页]
   * @method GetCorporationIndex
   * @param  {[type]}            commit [description]
   * @param  {[type]}            params [description]
   * @return {Promise}                  [description]
   */
  async GetCorporationIndex({commit, rootState}, params){
    console.log(params, rootState.search)
    const response = await getCorporationIndex({...params, ...rootState.search})
    commit('SET_SHOP_STORE', response.data)
    return response
  },

  /**
   * [getUserManagerList 账号管理 -- 获取全部的管理员账号]
   * @method getUserManagerList
   * @param  {[type]}           commit [description]
   * @return {Promise}                 [description]
   */
  async getUserManagerList({commit}) {
    const response  = await getUserManagerList()
    commit('SET_USER_LIST', response.data)
  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
