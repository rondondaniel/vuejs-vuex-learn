const actions = {
  increase ({ commit }) {
    commit('INCREMENT')
  },

  decrease ({ commit }) {
    commit('DECREMENT')
  }
}

export default actions;