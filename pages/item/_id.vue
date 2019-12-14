<template>
  <div class="show">
    <img :src="showItem.url">
    <div class="show-info">
      <h3>{{ showItem.title }}</h3>
      <hr>
      <div>
        <p>¥{{ showItem.price }}</p>
        <v-btn v-if="$store.state.other.isLogin === true" @click="$store.dispatch('cart/addCart', showItem)">
          カートに追加する
        </v-btn>
        <v-btn v-else disabled>
          カートに追加する
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.show {
  display:flex;
  height:600px;
  padding-top:40px;
  img {
    width:300px;
    height:350px;
  }
  &-info {
    width:55%;
    height:400px;
    margin-left:40px;
    position:relative;
    h3 {
      padding-bottom:10px;
    }
    > div {
      position: absolute;
      right:0;
      bottom:0;
      p {
        font-size:24px;
        font-weight:600;
        margin-bottom:20px;
      }
    }
  }
}

</style>

<script>
export default {
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
  }
}
</script>
