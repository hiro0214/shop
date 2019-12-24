import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 479,
    sl: 599,
    tb: 959,
    ps: 1279,
    lg: 1280
  }
})
