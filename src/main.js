import '@babel/polyfill'
import Vue from 'vue'
import router from './routes/router'
import './plugins/vuetify'
import App from './App.vue'

import {store} from './store.js'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


