<template>
  <div class="cart">
    <h1>カートの商品一覧</h1>
    <ul v-if="$store.state.cart.cart.length">
      <li v-for="(item, index) in $store.state.cart.cart" :key="item.id">
        <div class="item">
          <img :src="item.url">
          <div class="item-info">
            <p>{{ item.title }}</p>
            <span>¥{{ item.price | format-price }}</span>
          </div>
          <v-btn :color="$vuetify.theme.themes.dark.accent" @click="removeCart(index)">
            削除する
          </v-btn>
        </div>
      </li>
      <div class="buy-info">
        <span>小計({{ $store.state.cart.cart.length }}点): <span class="total">¥{{ totalPrice | format-price }}</span></span>
        <v-btn :color="$vuetify.theme.themes.dark.secondary" @click.stop="dialog = true">
          購入する
        </v-btn>
      </div>

      <v-app class="dialog">
        <v-dialog v-model="dialog" max-width="350">
          <v-card>
            <v-card-title class="headline">カートの商品を購入しても<br>よろしいですか？</v-card-title>
            <v-card-actions>
              <v-btn @click="dialog = false">
                キャンセル
              </v-btn>
              <v-btn @click="buyItem">
                購入する
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-app>

    </ul>
    <p v-else>
      お客様のカートに商品がありません。<br>商品ページからカートに追加してください。
    </p>
  </div>
</template>

<style lang="scss">

.cart {
  min-height:500px;
  .item .v-btn__content {
    color:rgb(241, 241, 241);
    font-weight:600;
  }
}

.buy-info {
  text-align:right;
  .total {
    color:rgb(177, 39, 4);
    font-size:24px;
    font-weight:600;
  }
  button {
    margin:0 20px;
    position:relative;
    bottom:10px;
    font-weight:600;
  }
}

.dialog {
  position:absolute;
  .headline {
    font-size:16px !important;
  }
  .v-card__actions {
    width:250px;
    margin:0 auto;
    padding-bottom:20px;
    > button {
      width:100px;
      margin: 0 10px;
    }
  }
}

</style>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.$store.state.cart.cart.forEach((item) => {
        total += item.price
      })
      return total
    }
  },
  methods: {
    removeCart (index) {
      this.$store.dispatch('cart/removeCart', index)
    },
    buyItem () {
      const data = this.$store.state.cart.cart.map((ele) => {
        return {
          title: ele.title,
          price: ele.price,
          url: ele.url
        }
      })
      this.$store.dispatch('cart/buy', data)
        .then(() => {
          this.$router.push({ name: 'index' })
          this.$store.dispatch('other/flashMessage', '購入が終了しました')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
