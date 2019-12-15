import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore().collection('items')
const storage = firebase.storage()

export const state = {
  items: [],
  item: []
}

export const mutations = {
  addItem (state, payload) {
    state.items.push(payload)
  },
  showInit (state, payload) {
    state.item = payload
  }
}

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('items', db)
  }),
  show ({ commit, context }, payload) {
    db.doc(payload).get().then(function (doc) {
      const item = {
        title: doc.data().title,
        price: doc.data().price,
        description: doc.data().description,
        author: doc.data().author,
        page: doc.data().page,
        url: doc.data().url
      }
      commit('showInit', item)
    })
  },
  addItem: firestoreAction((context, payload) => {
    db.add({
      title: payload.title,
      price: payload.price,
      description: payload.description,
      author: payload.author,
      page: payload.page,
      url: payload.url
    })
  }),
  remove: firestoreAction((context, id) => {
    if (confirm('削除してもよろしいですか？')) {
      db.doc(id).delete()
    }
  }),
  upImage (context, payload) {
    const ref = payload.name
    return new Promise((resolve, reject) => {
      storage.ref('image/' + ref).put(payload)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            resolve(url)
          })
        })
    })
  }
}
