export const state = {
  cart: [],
  info: false
}

export const mutations = {
  addCart (state, payload) {
    state.cart.push(payload)
    state.info = true
  },
  removeCart (state, payload) {
    state.cart.splice(payload, 1)
  },
  buyAfter (state) {
    state.cart = []
  },
  cartInfo (state) {
    state.info = false
  }
}

export const actions = {
  addCart ({ commit }, payload) {
    commit('addCart', payload)
    setTimeout(function () {
      commit('cartInfo')
    }, 3000)
  },
  removeCart ({ commit }, payload) {
    commit('removeCart', payload)
  },
  buyAfter ({ commit }) {
    commit('buyAfter')
  }
}
