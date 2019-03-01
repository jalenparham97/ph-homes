import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import store from './store'
import 'tachyons'
import 'vue-material/dist/vue-material.min.css'
import './assets/theme/theme.scss'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
