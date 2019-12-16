<template>
  <div class="user_page">
    <h1>{{ $store.getters['other/userName'] }}のマイページ</h1>
    <div class="user_page__contents">
      <v-list class="user_page__list">
        <v-subheader>
          <v-icon>menu</v-icon>Menu
        </v-subheader>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="menu in menus" :key="menu" :to="menu.link">
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
      </v-list>

      <div class="user-main">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { title: 'プロフィール', icon: 'person', link: { name: 'user-home' } },
        { title: 'アドレス帳', icon: 'room', link: { name: 'user-address' } },
        { title: 'お支払い方法', icon: 'credit_card', link: { name: 'user-pay' } },
        { title: '購入履歴', icon: 'web', link: { name: 'user-data' } },
        { title: 'ログアウト', icon: 'report_off', link: { name: 'user-logout' } }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.user_page {
  min-height:600px;
  &__contents {
    margin-top:30px;
    display:flex;
  }
  &__list {
    width:30%;
    height:305px;
    border:solid 1px rgb(200, 200, 200);
    .v-subheader {
      background:#3949AB;
      color:#fff;
      font-weight:600;
      font-size:17px;
      i {
        color:#fff;
        font-size:20px;
        margin-right:10px;
      }
    }
  }
}

.user-main {
  width:90%;
  margin:0 40px;
}

</style>
