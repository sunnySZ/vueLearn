<template>
	<div>
<mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="list"><img slot="icon" src="../assets/logo.png">列表</mt-tab-item>
  <mt-tab-item id="infinite"><img slot="icon" src="../assets/logo.png">loading</mt-tab-item>
  <mt-tab-item id="发现"><img slot="icon" src="../assets/logo.png">发现</mt-tab-item>
  <mt-tab-item id="我的"><img slot="icon" src="../assets/logo.png">我的</mt-tab-item>
</mt-tabbar>
	</div>
</template>
<script>
  export default{
      data(){
          return{
              selected:'list'
          }
      },
      watch:{
          selected(curVal,oldVal){
              this.$router.push({path:'/'+curVal})
          }
      }
  }
</script>