import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Infinite from './components/infinite.vue'
import List from './components/list.vue'
import ListDetail from './components/listDetail.vue'

/*const my_routes = [
    {name: 'home', path: '/', component: List},
    {name: 'infinite', path: '/infinite', component: Infinite},
    {name: 'list', path: '/list', component: List},
    {name: 'listDetail', path: '/listDetail', component: ListDetail}
]

export default new VueRouter({
    routes: my_routes //routes:routes，注意当键和值相同时，按照es6语法可以简写成routes,
})*/

 const router = new VueRouter({
 routes :[
 {name:'home', path: '/', component: List },
 {name:'infinite', path: '/infinite', component: Infinite },
 {name:'list', path: '/list', component: List },
 {name:'listDetail', path: '/listDetail/:id', component: ListDetail }
 ]
 })

 export default router
