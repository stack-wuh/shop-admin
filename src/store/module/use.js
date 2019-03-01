import {
  signinByUsername,
  getUserIndex,
  getCorporationIndex,
  getUserManagerList,
  updateUserByParams,
  deleteUserById,
  getUserDetailById,
  getCorporationDetailById
} from '@/api/user'
import {
  $to,
} from '@/utils/global'


const state = {
  userInfo: {}, // 缓存用户信息

  list: [],
  userManageInfo: {}, // 用户管理模块的消息缓存
}

const mutations = {
    SET_USERINFO: (state, params) => {
      state.userInfo = params
    },
    SET_USER_LIST: (state, params) => {
      state.list = params
    },
    SET_USER_MANAGE_INFO: (state, params) => {
      state.userManageInfo = params
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
  async GetUserManagerList({commit}) {
    const response  = await getUserManagerList()
    commit('SET_USER_LIST', response.data)
  },

  /**
   * [UpdateUserByParams 更新用户列表]
   * @method UpdateUserByParams
   * @param  {[type]}           commit [description]
   * @param  {[type]}           params [description]
   * @return {Promise}                 [description]
   */
  async UpdateUserByParams({commit, dispatch}, params) {
    const response = await updateUserByParams(params)
    dispatch('GetUserManagerList')
    dispatch('ClearDialogInfoAsync')
  },

  /**
   * [DeleteUserById 根据id删除用户管理的列表项]
   * @method DeleteUserById
   * @param  {[type]}       commit [description]
   * @param  {[type]}       id     [description]
   * @return {Promise}             [description]
   */
  async DeleteUserById({dispatch}, id) {
    const response  = await deleteUserById(id)
    dispatch('GetUserManagerList')
  },

  /**
   * [GetUserDetailById 用户管理 -- 个人管理 -- 根据id获取详情]
   * @method GetUserDetailById
   * @param  {[type]}          dispatch [description]
   * @param  {[type]}          id       [description]
   * @return {Promise}                  [description]
   */
  async GetUserDetailById({dispatch, commit}, id) {
    const response  = await getUserDetailById(id)
    // return Promise.resolve(response)
    commit('SET_USER_MANAGE_INFO', response.data)
  },

  /**
   * [GetCorporationDetailById 用户管理 -- 企业管理 -- 根据id获取详情]
   * @method GetCorporationDetailById
   * @param  {[type]}                 dispatch [description]
   * @param  {[type]}                 id       [description]
   * @return {Promise}                         [description]
   */
  async GetCorporationDetailById({dispatch, commit}, params) {
    const response = await getCorporationDetailById(params)
    commit('SET_USER_MANAGE_INFO', response.data)
  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
