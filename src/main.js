import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from "vue-lazyload"
import store from "./store"

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
