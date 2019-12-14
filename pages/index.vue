<template>
  <div class="home">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="item in $store.state.item.items" :key="item.id">
        <router-link :to="{ name: 'item-id', params: { id: item.id} }">
          <div class="item">
            <img :src="item.url">
            <div class="item-info">
              <p>{{ item.title }}</p>
              <span>¥{{ item.price }}</span>
              <!-- フィルターでカンマをいれる -->
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created () {
    this.$store.dispatch('item/init')
  }
}
</script>

<style lang="scss">

h1 {
  border-bottom:solid 4px #ddd;
  padding-bottom: 0.5em;
  margin-bottom:20px;
  position:relative;
  &:after {
    position: absolute;
    content: "";
    border-bottom: solid 4px #446689;
    bottom: -4px;
    width:10%;
    display: block;
  }
}

.item {
  margin: 20px 0;
  padding-bottom:20px;
  color:#000;
  border-bottom:solid 2px rgb(216, 216, 216);
  display:flex;
  > img {
    width:200px;
    height:auto;
  }
  &-info {
    width:70%;
    margin-left:40px;
    position:relative;
    > p {
      width:85%;
      word-wrap: break-word;
    }
    > span {
      font-size:24px;
      font-weight:600;
      position:absolute;
      right:0;
      bottom:0;
    }
  }
}

</style>
