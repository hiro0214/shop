import firebase from '~/plugins/firebase'

export const state = {
  datas: [],
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
  init (state) {
    state.errorMessage = ''
  },
  errorMessage (state, payload) {
    state.errorMessage = payload
  },
  dataInit (state) {
    state.datas = []
  },
  dataShowInit (state, payload) {
    state.datas.push(payload)
  }
}

export const actions = {
  toggleSide ({ commit }) {
    commit('toggleSide')
  },
  signUp ({ dispatch }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const user = firebase.auth().currentUser
        user.updateProfile({
          displayName: payload.nickname
        })
        alert('登録が完了しました。')
        dispatch('signOut')
        dispatch('signIn', payload)
      })
      .catch((error) => {
        dispatch('missAlert', error.message)
      })
  },
  signIn ({ dispatch }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        this.$router.push({ name: 'index' })
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
  },
  missAlert ({ commit }, payload) {
    commit('setLogin', false)
    commit('errorMessage', payload)
  },
  dataInit ({ commit }) {
    commit('dataInit')
  },
  dataShowInit ({ commit, getters }) {
    firebase.firestore().collection(`cart/${getters.userId}/data`).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const cartData = doc.data().buyData
        commit('dataShowInit', cartData)
      })
    })
  }
}

export const getters = {
  userId () {
    const user = firebase.auth().currentUser
    return user.uid
  },
  userName () {
    const user = firebase.auth().currentUser
    return user.displayName
  },
  userEmail () {
    const user = firebase.auth().currentUser
    return user.email
  },
  userDate () {
    const user = firebase.auth().currentUser
    return user.metadata.creationTime
  }
}
