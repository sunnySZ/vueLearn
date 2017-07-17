import Vue from 'vue'
import App from './App.vue'
import routers from './routerConfig.js'
import Mint from 'mint-ui'
import Axios from 'axios'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.prototype.$http=Axios
new Vue({
  router:routers,
  el: '#app',
  render: h => h(App)
})
	