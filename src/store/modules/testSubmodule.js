export default {
  namespaced: true,
  state: {
    testStateVariable:0
  },
  mutations: {
    changeTestState (state, payload) {
        state.testStateVariable = payload
    }
  },
  actions: {
    changeTestState (context, payload) {
        context.commit('changeTestState',payload)
    }
  },

  getters: {

  },
};
