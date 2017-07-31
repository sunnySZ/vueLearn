<template>
	<div>
<mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="list"><img slot="icon" src="../assets/logo.png">List</mt-tab-item>
<!--  <mt-tab-item id="infinite"><img slot="icon" src="../assets/logo.png">Infinite</mt-tab-item>-->
  <mt-tab-item id="my"><img slot="icon" src="../assets/logo.png">我的</mt-tab-item>
</mt-tabbar>
	</div>
</template>
<script>
  export default{
      data(){
          return{
              selected:this.$route.name
          }
      },
      watch:{
          selected(curVal,oldVal){
              console.log(curVal)
                 this.$router.push({path:'/'+curVal})
          }
      }
  }
</script>