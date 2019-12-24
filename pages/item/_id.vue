<template>
  <div class="show">
    <img :src="showItem.url">
    <div class="show-info">
      <h3>{{ showItem.title }}</h3>
      <div>
        <span>{{ showItem.page }}ページ</span>
        <span>著者 :</span>
        <span>{{ showItem.author }}</span>
      </div>
      <hr>
      <h4>商品説明</h4>
      <p>{{ showItem.description }}</p>
      <div class="show-info__bottom">
        <p>¥{{ Number(showItem.price) | format-price }}</p>
        <v-btn v-if="$store.state.other.isLogin === true" @click="addCart">
          カートに追加する
        </v-btn>

        <div v-else @mouseenter="infoShow" @mouseleave="infoHide">
          <v-btn disabled>
            カートに追加する
          </v-btn>
        </div>
      </div>

      <transition>
        <div v-show="info" class="login-info">
          <p>カートに追加するには<br>ログインが必要です。</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">

.show {
  display:flex;
  min-height:400px;
  padding-top:40px;
  img {
    border:solid 1px rgb(238, 238, 238);
    width:250px;
    height:330px;
  }
  &-info {
    width:55%;
    min-height:400px;
    margin-left:40px;
    position:relative;
    h3 + div {
      text-align:right;
      > span {
        font-size:14px;
        + span + span {
          font-size:16px;
          font-weight:600;
        }
      }
    }
    h4 {
      margin:10px 0;
      color:rgb(30, 30, 30);
    + p {
      color:rgb(40, 40, 40);
      font-size:15px;
    }
    }
    &__bottom {
      width:250px;
      float:right;
      margin-top:20px;
      border:solid 3px rgb(202, 202, 202);
      border-radius:5px;
      padding:10px 20px;
      p {
        color:rgb(177, 39, 4);
        font-size:24px;
        font-weight:600;
        margin-bottom:10px;
      }
    }
  }
}

.login-info {
  width:180px;
  min-height:60px;
  font-size:12px;
  padding:10px;
  border-radius:10px;
  border:solid 1px rgb(156, 156, 156);
  background:#fff;
  position:absolute;
  right:0;
}

.v-enter-active, .v-leave-active {
  transition: opacity .4s;
}

.v-enter, .v-leave-to {
  opacity:0;
}

</style>

<script>
export default {
  data () {
    return {
      info: false
    }
  },
  computed: {
    showItem () {
      return this.$store.state.item.item
    }
  },
  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('item/show', itemId)
  },
  methods: {
    addCart () {
      const item = {
        id: this.$route.params.id,
        title: this.$store.state.item.item.title,
        price: this.$store.state.item.item.price,
        url: this.$store.state.item.item.url
      }
      this.$store.dispatch('cart/addCart', item)
    },
    infoShow () {
      this.info = true
    },
    infoHide () {
      this.info = false
    }
  }
}
</script>
