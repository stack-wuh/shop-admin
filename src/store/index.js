export const state = {
  list: [],
  total: 0,
  currPageNo: 1,
  info: {},

  schemaHeaderCurrent: {
    index: 0,
    item: {
      name: '全部'
    }
  },

  search: {}, // 搜索条件缓存
}

export const mutations = {
  SET_SHOP_STORE: (state, data) => {
    state.list = data.list
    state.total = data.total
    state.currPageNo = data.pageNum
  },
  SET_SHOP_DETAIL: (state, data) => {
    state.info = data
  },

  /**
   * [SET_SCHEMA_HEADER_CURRENT 设置shcame组件中header的当前位置]
   * @method SET_SCHEMA_HEADER_CURRENT
   * @param  {[type]}                  state [description]
   * @param  {[type]}                  data  [description]
   */
  SET_SCHEMA_HEADER_CURRENT: (state, data) => {
    const {item, index, crumbs} = data
    state.schemaHeaderCurrent = {
      item,
      index: index || 0,
      crumbs
    }
  },

  /**
   * [SET_SEARCH_FORM 缓存搜索表单]
   * @method SET_SEARCH_FORM
   * @param  {[type]}        state  [description]
   * @param  {[type]}        params [description]
   */
  SET_SEARCH_FORM: (state, params) => {
    state.search = params
  },

  CLEAR_SEARCH_FORM: state => {
    state.search = {}
  }
}

export const actions = {}

export const getters = {}
