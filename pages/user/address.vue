<template>
  <div class="user-address">
    <h3>配送先の情報</h3>
    <hr>
      <v-form class="address-form">
        <v-text-field label="郵便番号" placeholder="〒123-4567" disabled/>
        <v-text-field label="都道府県" placeholder="東京都" disabled/>
        <v-text-field label="市区町村" placeholder="渋谷区" disabled/>
        <v-text-field label="番地" placeholder="〇〇-△△" disabled/>
        <v-text-field label="建物" placeholder="●●ビル" disabled/>
        <v-btn disabled>
          登録
        </v-btn>
    </v-form>
  </div>
</template>

<style scoped lang="scss">

h3 {
padding-bottom:5px;
}

.address-form {
  width:60%;
  margin-top:30px;
  margin-left:50px;
  button {
    margin-left:auto;
    display:block;
  }
}

</style>
