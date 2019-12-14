<template>
  <div class="signup">
    <h1>ユーザー新規登録</h1>
    <v-flex xs5 mt-5>
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field v-model="nickname" label="ニックネーム" />
            <v-text-field v-model="email" label="メールアドレス" />
            <v-text-field v-model="password" label="パスワード" />
            <v-btn @click="signUp">
              登録
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: '',
      email: '',
      password: ''
    }
  },
  computed: {
    errorMessage () {
      return this.$store.state.other.errorMessage
    }
  },
  created () {
    this.$store.commit('other/init')
  },
  methods: {
    signUp () {
      const data = {
        nickname: this.nickname,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('other/signUp', data)
    }
  }
}
</script>
