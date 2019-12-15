<template>
  <div class="user_page">
    <h1>{{ $store.getters['other/userName'] }}のマイページ</h1>
    <v-btn @click="signOut">ログアウト</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$store.dispatch('other/signOut')
    }
  }
}
</script>
