import Vue from 'vue'

Vue.filter('format-price', function (value) {
  return `${value.toLocaleString()}`
})
