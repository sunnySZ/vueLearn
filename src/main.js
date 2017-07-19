import Vue from 'vue'
import App from './App.vue'
import routers from './routerConfig.js'
import Mint from 'mint-ui'
import Axios from 'axios'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.prototype.$http = Axios
new Vue({
    router: routers,
    el: '#app',
    render: h => h(App)
})


/*
var f = v => v;
//等同于
var f = function (v) {
    return v;
}

var render = function (h) {
    return h(App)
}*/
