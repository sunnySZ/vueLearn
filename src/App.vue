<template>
  <div id="app">

   <transition name='nameNaimate'>
     <keep-alive>
     <router-view></router-view>
     </keep-alive>
   </transition>

    <NavView></NavView>
  </div>
</template>

<script>
import NavView from './components/nav.vue'
export default {
  components:{
    NavView
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 50px;
  margin-bottom: 65px;
}
a{ text-decoration: none;}
@media screen and (min-width:320px){html{font-size:10px;}}
@media screen and (min-width:540px){html{font-size:21px;}}
@media screen and (min-width:740px){html{font-size:28px;}}
</style>
