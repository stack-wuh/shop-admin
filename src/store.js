import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  state, mutations, actions, getters
} from '@/store/index'

import User from '@/store/module/use'
import Index from '@/store/module/index'
import Shop from '@/store/module/shop'
import Website from '@/store/module/website'

export default new Vuex.Store({
  state, mutations, actions, getters,
  modules: {
    User,
    Index,
    Shop,
    Website
  }
})
