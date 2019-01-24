import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  state, mutations, actions, getters
} from '@/store/index'

import Use from '@/store/module/use'

export default new Vuex.Store({
  state, mutations, actions, getters,
  modules: {
    Use
  }
})
