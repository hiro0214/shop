<template>
  <div class="default">
    <flashMessage />
    <v-app-bar :color="this.$vuetify.theme.themes.dark.primary">
      <div class="header-nav">
        <v-app-bar-nav-icon @click="$store.dispatch('other/toggleSide')" class="header-icon" />
        <nuxt-link to="/">
          <v-toolbar-title>
            <span class="title">Good Shop</span>
          </v-toolbar-title>
        </nuxt-link>
      </div>

      <v-spacer>
        <form>
          <input type="text" placeholder="何をお探しですか">
          <v-btn :color="this.$vuetify.theme.themes.dark.warning">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </form>
      </v-spacer>

      <div v-if="$store.state.other.isLogin === false" class="header-menu">
        <nuxt-link to="/signup">
          <v-btn>
            <span>新規登録</span>
          </v-btn>
        </nuxt-link>

        <nuxt-link to="/signin">
          <v-btn>
            <span>ログイン</span>
          </v-btn>
        </nuxt-link>
      </div>

      <div v-else class="header-menu">
        <nuxt-link to="/user">
          <v-btn>
            <mq-layout mq="sl+">マイページ</mq-layout>
            <mq-layout mq="sm"><v-icon>person</v-icon></mq-layout>
          </v-btn>
        </nuxt-link>
        <nuxt-link to="/cart">
          <v-btn class="cart-btn">
            <v-icon>shopping_cart</v-icon>
            <span>{{ $store.state.cart.cart.length }}</span>
          </v-btn>
        </nuxt-link>
      </div>
    </v-app-bar>

    <transition name="fade">
      <div v-show="$store.state.cart.info" class="cart-info">
        <p>カートに追加しました</p>
      </div>
    </transition>

    <sideBar />

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

html {
  font-size:62.5%;
  font-family: Arial, 游ゴシック体, YuGothic, メイリオ, Meiryo, sans-serif;
}

ul {
  list-style: none;
}

body {
  width:100vw;
  height:100vh;
  background:rgb(240, 240, 240);
}

.header {
  &-icon {
    color:#fff !important;
  }
  &-nav {
    display:flex;
  }
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
  + div {
    margin-right:30px;
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
  z-index:80;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

section {
  width:60vw;
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
import flashMessage from '~/components/flashMessage.vue'
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
    flashMessage,
    sideBar
  },
  data () {
    return {
      drawer: false
    }
  }
}

</script>
