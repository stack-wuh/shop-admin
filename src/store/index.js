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

  dialogInfo: { // 对话框内存对象
    title: '编辑内容', // dialog -- title
    isShowDialog: false, // dialog -- visible

    form: {}
  }
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
  /**
   * [CLEAR_SEARCH_FORM 清空search搜索表单]
   * @method CLEAR_SEARCH_FORM
   * @param  {[type]}          state [description]
   */
  CLEAR_SEARCH_FORM: state => {
    state.search = {}
  },

  /**
   * [SET_DIALOG_INFO 设置dialog对话框内对象]
   * @method SET_DIALOG_INFO
   * @param  {[type]}        state  [description]
   * @param  {[type]}        params [description]
   */
  SET_DIALOG_INFO: (state, params) => {
    console.log(params)
    let {isShowDialog} = params
    state.dialogInfo = {
      ...state.dialogInfo,
      ...params,
    }
    if(!isShowDialog) {
      state.dialogInfo.form = {}
    }
  },

  /**
   * [CLEAR_DIALOG_INFO 清空dialog中的表单内容]
   * @method CLEAR_DIALOG_INFO
   * @param  {[type]}          state [description]
   */
  CLEAR_DIALOG_INFO: state => {
    state.dialogInfo.form = {}
    state.dialogInfo.isShowDialog = false
  }
}

export const actions = {
  /**
   * [ClearDialogInfo 异步清空dialog中的表单]
   * @method ClearDialogInfo
   * @param  {[type]}        commit [description]
   */
  ClearDialogInfoAsync({commit}){
    commit('CLEAR_DIALOG_INFO')
  }
}

export const getters = {}
