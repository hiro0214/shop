<template>
  <v-navigation-drawer v-model="$store.state.other.drawer" absolute temporary>
    <v-list shaped>
      <div v-if="$store.state.other.isLogin">
        <v-subheader>こんにちは、{{ $store.getters['other/userName'] }}さん</v-subheader>
        <v-list-item-group v-model="menu">
          <v-list-item v-for="menu in loginMenus" :key="menu.title" :to="menu.link">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>
                  {{ menu.icon }}
                </v-icon>
                {{ menu.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>

      <div v-else>
        <v-subheader>ログインしていません</v-subheader>
        <v-list-item-group v-model="menu">
          <v-list-item v-for="menu in logoutMenus" :key="menu.title" :to="menu.link">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>
                  {{ menu.icon }}
                </v-icon>
                {{ menu.title }}
              </v-list-item-title>
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
        { title: 'マイページ', icon: 'person', link: { name: 'user' } },
        { title: 'カート', icon: 'shopping_cart', link: { name: 'cart' } },
        { title: 'このサイトについて', icon: 'info', link: { name: 'info' } }
      ],
      logoutMenus: [
        { title: '新規登録', icon: 'supervisor_account', link: { name: 'signUp' } },
        { title: 'ログイン', icon: 'how_to_reg', link: { name: 'signIn' } },
        { title: 'このサイトについて', icon: 'info', link: { name: 'info' } }
      ]
    }
  }
}
</script>
