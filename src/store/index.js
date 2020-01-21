import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

import testState from './modules/testSubmodule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    testState
  },
  state: {
    foo: 'bar'
  },
  getters,
  mutations,
  actions
})
