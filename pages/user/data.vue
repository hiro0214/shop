<template>
  <div class="user-data">
    <h3>購入履歴</h3>
    <hr>

    <div>
      <ul class="data-history">
        <li v-for="data in $store.state.other.datas" :key="data.title">
          <p>{{ data.date.toDate() | format-date }}の注文</p>

          <ul class="data-list">
            <li v-for="dat in data.data" :key="dat.title">
              <img :src="dat.url">
              <div class="data-list__info">
                <p>{{ dat.title }}</p>
                <span>¥{{ dat.price | format-price }}</span>
              </div>
            </li>
            <p>
              合計金額 : <span>¥{{ Number(data.total) | format-price }}</span>
            </p>
          </ul>

        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">

h3 {
padding-bottom:5px;
}

.data-history {
  > li {
    margin:20px 0 40px;
    border-bottom:solid 1px;
    > p {
      font-weight:600;
    }
  }
}

.data-list {
  > li {
    padding:10px;
    display:flex;
  }
  img {
    width:80px;
    height:110px;
  }
  > p {
    text-align:right;
    margin-bottom:10px;
    > span {
      font-size:20px;
      font-weight:600;
      color:rgb(177, 39, 4);
    }
  }
  &__info {
    width:80%;
    padding-left:20px;
    position:relative;
    > p {
      font-weight:600;
      font-size:15px;
    }
    > span {
      position:absolute;
      right:0;
      bottom:0;
    }
  }
}

</style>

<script>
export default {
  created () {
    this.$store.dispatch('other/dataInit')
    this.$store.dispatch('other/dataShowInit')
  }
}
</script>
