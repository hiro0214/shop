<template>
  <div class="default">
    <v-app-bar :color="this.$vuetify.theme.themes.dark.primary">
      <v-app-bar-nav-icon @click="$store.dispatch('other/toggleSide')" />
      <router-link to="/">
        <v-toolbar-title>
          <span class="title">Good Shop</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer>
        <form>
          <input type="text" placeholder="何をお探しですか">
          <v-btn :color="this.$vuetify.theme.themes.dark.warning">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </form>
      </v-spacer>

      <div v-if="$store.state.other.isLogin === false">
        <router-link to="/signup">
          <v-btn>
            <p>新規登録</p>
          </v-btn>
        </router-link>

        <router-link to="/signin">
          <v-btn>
            <p>ログイン</p>
          </v-btn>
        </router-link>
      </div>

      <div v-else>
        <v-btn>
          <p>マイページ</p>
        </v-btn>
        <router-link to="/cart">
          <v-btn class="cart-btn">
            <v-icon>shopping_cart</v-icon>
            <p>{{ $store.state.cart.cart.length }}</p>
          </v-btn>
        </router-link>
      </div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <sideBar />

    <transition name="fade">
      <div v-show="$store.state.cart.info" class="cart-info">
        <p>カートに追加しました</p>
      </div>
    </transition>

    <section>
      <nuxt />
    </section>
  </div>
</template>

<style lang="scss">

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  text-decoration: none;
}

ul {
  list-style: none;
}

body {
  width:100vw;
  height:100vh;
  background:rgb(240, 240, 240);
}

.title {
  color:#fff;
  font-size:28px;
  font-weight:600;
}

.spacer {
  height:37px;
  line-height:37px;
  margin-left:40px;
  margin-right:120px;
  input {
    width:100%;
    background:#fff;
    border-radius: 5px;
    padding-left:5px;
  }
  button {
    position:absolute;
  }
}

.cart-btn{
  margin:0 10px;
}

.cart-info {
  background:#fff;
  border:solid 1px orange;
  border-radius:5px;
  padding:20px 30px;
  position:absolute;
  top:70px;
  right:20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

section {
  width:70vw;
  padding-top:40px;
  margin:0 auto 60px;
  > div {
    padding:20px 40px;
    background:#fff;
  }
}

</style>

<script>
import firebase from '~/plugins/firebase'
import sideBar from '~/components/sideBar.vue'

export default {
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('other/init')
      }
    })
  },
  components: {
    sideBar
  },
  data () {
    return {
      drawer: false
    }
  }
}

</script>
