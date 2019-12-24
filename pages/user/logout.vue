<template>
  <div class="user-logout">
    <div class="logout-info">
      <v-btn @click="signOut">ログアウト</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$store.dispatch('other/signOut')
      this.$router.push({ name: 'index' })
      this.$store.dispatch('other/flashMessage', 'ログアウトしました')
    }
  }
}
</script>

<style lang="scss">

.logout-info {
  width:100%;
  height:150px;
  display:flex;
  align-items: center;
  button {
    width:200px;
    margin:0 auto;
  }
}

</style>
