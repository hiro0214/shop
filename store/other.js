import firebase from '~/plugins/firebase'

export const state = {
  userName: '',
  errorMessage: '',
  isLogin: false,
  drawer: false
}

export const mutations = {
  toggleSide (state) {
    state.drawer = !state.drawer
  },
  setLogin (state, payload) {
    state.isLogin = payload
  },
  setName (state, payload) {
    state.userName = payload
  },
  init (state) {
    state.errorMessage = ''
  },
  errorMessage (state, payload) {
    state.errorMessage = payload
  }
}

export const actions = {
  toggleSide ({ commit }) {
    commit('toggleSide')
  },
  signUp ({ commit, dispatch }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const user = firebase.auth().currentUser
        user.updateProfile({
          displayName: payload.nickname
        })
        alert('登録が完了しました。')
        commit('setName', payload.nickname)
        dispatch('init')
      })
      .catch((error) => {
        dispatch('missAlert', error.message)
      })
  },
  signIn ({ commit, dispatch }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const user = firebase.auth().currentUser
        commit('setName', user.displayName)
        dispatch('init')
      })
      .catch((error) => {
        dispatch('missAlert', error.message)
      })
  },
  signOut ({ commit }) {
    firebase.auth().signOut()
      .then(() => {
        commit('setLogin', false)
      })
  },
  init ({ commit }) {
    commit('setLogin', true)
    commit('init')
    this.$router.push({ name: 'index' })
  },
  missAlert ({ commit }, payload) {
    commit('setLogin', false)
    commit('errorMessage', payload)
  }
}

export const getters = {
  userId () {
    const user = firebase.auth().currentUser
    return user.uid
  }
}
