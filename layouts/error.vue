<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      <div class="error-info">
        <v-icon>error</v-icon>
        <h2>Page Not Found!</h2>
        <h3>お探しのページは見つかりませんでした</h3>
        <h4>URLに間違いがないか確認をしてください</h4>
      </div>
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped lang='scss'>

.error-info {
  height:500px;
  text-align:center;
  color:rgb(179, 179, 179);
  i {
    font-size:200px;
  }
  h2 {
    margin:20px 0px;
  }
}
</style>
