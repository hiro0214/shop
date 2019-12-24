<template>
  <div class="user-pay">
    <h3>支払い方法</h3>
    <hr>
    <div class="pay-info">
      <h5>ご登録のクレジットカード</h5>
        <v-text-field label="カード番号" placeholder="*********1234" disabled/>
      <h5>新しいクレジットカード</h5>
        <v-text-field label="カード番号" placeholder=" " disabled/>
        <v-btn disabled>登録</v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">

h3 {
padding-bottom:5px;
}

.pay-info {
  width:60%;
  margin-left:50px;
  h5 {
    margin-top:30px;
  }
  button {
    margin-left:auto;
    display:block;
  }
}

</style>
