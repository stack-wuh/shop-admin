import {
  signinByUsername,
} from '@/api/user'

const state = {
  name: 'shadow'
}

const mutations = {}

const actions = {
  async SigninByUsername({commit}, {
    username: name,
    password: pwd
  }){
    const username = name.trim()
    let response = await signinByUsername(username, pwd)
    console.log(response)
  }
}

const getters = {}

export default {
  state, mutations, actions, getters
}
