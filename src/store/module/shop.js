import {
  getShopInfo,
  getShopSearchInfo,
  getShopSearchOneById,
  getShopOneById,
} from '@/api/shop'

const state = {

}

const mutations = {

}

const actions = {
  /**
   * [GetShopInfo 店铺管理 -- 店铺管理 -- 首页]
   * @method GetShopInfo
   * @param  {[type]}    commit    [description]
   * @param  {[type]}    rootState [description]
   * @param  {[type]}    params    [description]
   * @return {Promise}             [description]
   */
  async GetShopInfo({commit, rootState}, params){
    const response = await getShopInfo({...params, ...rootState.search})
    commit('SET_SHOP_STORE', response.data)
    // Promise.resolve(response)
    // return response
  },

  /**
   * [GetShopOneById 店铺管理 -- 商品查询 -- 详情]
   * 根据id获取单个店铺的详情
   * @method GetShopOneById
   * @param  {[type]}       commit [description]
   * @param  {[type]}       id     [description]
   * @return {Promise}             [description]
   */
  async GetShopSearchOneById({commit}, params){
    const response  = await getShopSearchOneById(params)
    commit('SET_SHOP_DETAIL', response.data)
    return response
  },

  /**
   * [GetShopSearchInfo 店铺管理 -- 商品查询 -- 首页]
   * @method GetShopSearchInfo
   * @param  {[type]}          commit [description]
   * @param  {[type]}          params [description]
   * @return {Promise}                [description]
   */
  async GetShopSearchInfo({commit, rootState}, params){
    const response = await getShopSearchInfo({...params, ...rootState.search})
    commit('SET_SHOP_STORE', response.data)
    return response
  },

  /**
   * [GetShopSearchById 店铺管理 -- 店铺管理 -- 详情/状态修改]
   * @method GetShopSearchById
   * @param  {[type]}          commit [description]
   * @param  {[type]}          params [description]
   * @return {Promise}                [description]
   */
  async GetShopOneById({commit}, params) {
    const response  = await getShopOneById(params)
    commit('SET_SHOP_DETAIL', response.data)
    return response
  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
