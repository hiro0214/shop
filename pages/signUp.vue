<template>
  <div class="sign">
    <h1>ユーザー新規登録</h1>
    <v-flex class="sign-form">
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field v-model="nickname" label="ニックネーム" />
            <v-text-field v-model="email" label="メールアドレス" placeholder=" 例) hoge@fuga.com"/>
            <v-text-field :type="show2 ? 'text' : 'password'" v-model="password" label="パスワード" placeholder="6文字以上"/>
            <v-btn @click="signUp">
              登録
            </v-btn>
          </v-form>
        </v-card-text>
        <p class="sign-link">ログインページは
          <nuxt-link to="/signIn">
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

<style lang="scss">

.sign {
  padding-bottom:60px;
  button {
    float:right;
  }
}

.sign-form {
  width:60%;
  padding-top:20px;
  margin:0 auto;
}

.sign-link {
  text-align:right;
  font-size:14px;
  margin-top:30px;
  padding:10px 20px;
  span {
    color: rgb(0, 149,238);
    font-weight:600;
  }
}

.errorMessage {
  color:red;
  margin-top:10px;
}

</style>
