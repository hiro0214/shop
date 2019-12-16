<template>
  <div class="user-logout">
    <v-btn @click="signOut">ログアウト</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$store.dispatch('other/signOut')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
