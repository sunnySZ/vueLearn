import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Infinite from './components/infinite.vue'
import List from './components/list.vue'
import ListDetail from './components/listDetail.vue'
const router = new VueRouter({
  routes :[
    {name:'home', path: '/', component: List },
	{name:'infinite', path: '/infinite', component: Infinite },
	{name:'list', path: '/list', component: List },
	{name:'listDetail', path: '/listDetail', component: ListDetail }
]
})

export default router