<template>
  <v-navigation-drawer v-model="$store.state.other.drawer" absolute temporary>
    <v-list shaped>
      <div v-if="$store.state.other.isLogin">
        <v-subheader>こんにちは、{{ $store.getters['other/userName'] }}さん</v-subheader>
        <v-list-item-group v-model="menu">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="signOut">ログアウト</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="test">test</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>

      <div v-else>
        <v-subheader>ログインしていません</v-subheader>
        <v-list-item-group v-model="menu">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title @click="test">test</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { title: 'ログアウト', methods: 'signOut' },
        { title: 'test', methods: 'test' }
      ]
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('other/signOut')
    },
    test () {
      alert('test')
    }
  }
}
</script>
