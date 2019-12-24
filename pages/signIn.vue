<template>
  <div class="sign">
    <h1>ログイン</h1>
    <v-flex class="sign-form">
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field v-model="email" label="メールアドレス" />
            <v-text-field :type="show2 ? 'text' : 'password'" v-model="password" label="パスワード" />
            <v-btn @click="signIn">
              ログイン
            </v-btn>
          </v-form>
        </v-card-text>
        <p class="sign-link">新規登録がまだの方は
          <nuxt-link to="/signUp">
            <span>こちら</span>
          </nuxt-link>
        </p>
      </v-card>
    </v-flex>
    <p class="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    signIn () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('other/signIn', data)
    }
  }
}
</script>
