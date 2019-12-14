<template>
  <div>
    <ul>
      <li v-for="item in $store.state.item.items" :key="item.id">
        <div class="item">
          <!-- <img :src="img_src"> -->
          <div class="item-info">
            <p>{{ item.title }}</p>
            <span>¥{{ item.price }}</span>
          </div>
          <div class="btn-list">
            <v-btn>
              編集
            </v-btn>
            <v-btn @click="remove(item.id)">
              削除
            </v-btn>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('item/init')
  },
  methods: {
    remove (id) {
      this.$store.dispatch('item/remove', id)
    }
  }
}
</script>

<style lang="scss">

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
    > span {
      font-size:24px;
      font-weight:600;
      position:absolute;
      right:0;
      bottom:0;
    }
  }
}

.btn-list {
  margin-left:20px;
}

</style>
