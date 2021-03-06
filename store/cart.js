import firebase from '~/plugins/firebase'

export const state = {
  cart: [],
  info: false
}

export const mutations = {
  addCart (state, payload) {
    state.cart.push(payload)
  },
  removeCart (state, payload) {
    state.cart.splice(payload, 1)
  },
  buyAfter (state) {
    state.cart = []
  },
  cartInfo (state) {
    state.info = true
  },
  init (state) {
    state.info = false
  }
}

export const actions = {
  addCart ({ commit }, payload) {
    commit('addCart', payload)
    commit('cartInfo')
    setTimeout(function () {
      commit('init')
    }, 3000)
  },
  removeCart ({ commit }, payload) {
    commit('removeCart', payload)
  },
  buy ({ commit, getters }, payload) {
    const db = firebase.firestore().collection(`cart/${getters.uid}/data`)
    let total = 0
    payload.forEach((num) => {
      total += Number(num.price)
    })
    const buyData = {
      date: new Date(),
      total: String(total),
      data: payload
    }
    db.add({ buyData })
      .then(() => {
        commit('buyAfter')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const getters = {
  uid () {
    const user = firebase.auth().currentUser
    return user.uid
  }
}
