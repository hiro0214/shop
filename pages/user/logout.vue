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
  height:200px;
  position:relative;
  button {
    width:200px;
    position:absolute;
    top:50%;
    left:30%;
  }
}

</style>
