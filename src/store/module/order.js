import {
  getOrderListByParams,
  getOwnOrderById,
} from '@/api/order'

const state = {}

const mutations = {}

const actions = {
  /**
   * [GetOrderListByParams 订单管理 -- 根据条件获取订单]
   * @method GetOrderListByParams
   * @param  {[type]}             commit [description]
   * @param  {[type]}             params [description]
   * @return {Promise}                   [description]
   */
  async GetOrderListByParams({commit, getters, rootState}, params){
    const response = await getOrderListByParams({...params, ...rootState.search})
    commit('SET_SHOP_STORE', getters.FORMAT_ORDER_STATUS(response.data))
    return Promise.resolve(response)
  },

  /**
   * [GetOwnOrderById 订单管理 -- 根据id获取订单管理详情]
   * @method GetOwnOrderById
   * @return {Promise}       [description]
   */
  async GetOwnOrderById({commit}, id){
    const response = await getOwnOrderById(id)
    commit('SET_SHOP_DETAIL', response.data)
  }
}

const getters = {
  /**
   * [FORMAT_ORDER_STATUS 过滤订单中的status]
   * @method FORMAT_ORDER_STATUS
   * @param  {[type]}            state [description]
   */
  FORMAT_ORDER_STATUS: state => data => {
    let _obj  = {
      0: 0, // 取消
      5: 1, // 删除,
      10: 2, //未付款,
      20: 3, // 已付款
      40: 4, //已发货
      50: 5, //交易成功
      60: 6, //交易关闭
    }
    data.list.map(k => {
      return k = Object.assign(k, {reStatus: _obj[k.status]})
    })
    return data
  }
}

export default {
  state, mutations, actions, getters
}
