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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
  margin-bottom: 65px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.nameNaimate-enter-active,.nameNaimate-leave-active{
    transition:.4s all ease;
    opacity:0.5;
    translate3d:(0,300px,0);
}
.nameNaimate-enter,.nameNaimate-leave{
       opacity:1;
       translate3d:(0,30px,0);
}

</style>
