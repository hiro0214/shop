<template>
  <div class="add">
    登録ページ(管理者用)
    <v-flex xs5 mt-5>
      <v-card>
        <v-card-text>
          <v-form>
            <v-text-field v-model="item.title" label="商品名" />
            <v-text-field v-model="item.price" label="金額" />
            <v-text-field v-model="item.description" label="説明文" />
            <v-text-field v-model="item.author" label="著者" />
            <v-text-field v-model="item.page" label="ページ数" />
            <v-file-input v-model="item.img" @change="upImage" label="画像ファイル" />
            <v-btn :color="this.$vuetify.theme.themes.dark.info" @click="submit">
              保存
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {}
    }
  },
  methods: {
    upImage () {
      if (this.item.img) {
        this.$store.dispatch('item/upImage', this.item.img)
          .then((url) => { this.item.url = url })
      }
    },
    submit () {
      this.$store.dispatch('item/addItem', this.item)
      this.item = ''
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
