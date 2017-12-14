// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import {Lazyload} from 'mint-ui'


Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Lazyload)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
