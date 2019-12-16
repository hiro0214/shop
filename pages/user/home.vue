<template>
  <div class="user-home">
    <h3>{{ $store.getters['other/userName'] }}のプロフィール</h3>
    <hr>
    <v-form class="home-form">
      <v-text-field label="ニックネーム" v-model="nickname" disabled />
      <v-text-field label="メールアドレス" v-model="email" disabled />
      <v-text-field label="パスワード" placeholder="********" disabled />
      <p>登録日 : {{ date | format-date }}</p>
      <v-btn disabled>
        登録
      </v-btn>
    </v-form>

  </div>
</template>

<style scoped lang="scss">

h3 {
padding-bottom:5px;
}

.home-form {
  width:60%;
  margin-top:30px;
  margin-left:50px;
  button {
    float:right;
  }
}

</style>

<script>
export default {
  data () {
    return {
      nickname: this.$store.getters['other/userName'],
      email: this.$store.getters['other/userEmail'],
      date: this.$store.getters['other/userDate']
    }
  }
}
</script>
