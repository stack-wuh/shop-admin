export const state = {
  list: [],
  total: 0,
  currPageNo: 1,
  info: {},
}

export const mutations = {
  SET_SHOP_STORE: (state, data) => {
    state.list = data.list
    state.total = data.total
    state.currPageNo = data.pageNum
  },
  SET_SHOP_DETAIL: (state, data) => {
    state.info = data
  }
}

export const actions = {}

export const getters = {}
