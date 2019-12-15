<template>
  <v-navigation-drawer v-model="$store.state.other.drawer" absolute temporary>
    <v-list shaped>
      <div v-if="$store.state.other.isLogin">
        <v-subheader>こんにちは、{{ $store.getters['other/userName'] }}さん</v-subheader>
        <v-list-item-group v-model="menu">
          <v-list-item v-for="menu in loginMenus" :key="menu.title" :to="menu.link">
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>

      <div v-else>
        <v-subheader>ログインしていません</v-subheader>
        <v-list-item-group v-model="menu">
          <v-list-item v-for="menu in logoutMenus" :key="menu.title" :to="menu.link">
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
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
      loginMenus: [
        { title: 'マイページ', link: { name: 'user' } },
        { title: 'カート', link: { name: 'cart' } }
      ],
      logoutMenus: [
        { title: '新規登録', link: { name: 'signUp' } },
        { title: 'ログイン', link: { name: 'signIn' } }
      ]
    }
  }
}
</script>
