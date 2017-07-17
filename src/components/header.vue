<template>
	<div>
		 <mt-header fixed :title="title">
	       <mt-button icon="back" v-if="left==='back'" @click="backFn" slot="left">返回</mt-button>
	       <mt-button icon="more" v-if="right==='set'" slot="right"></mt-button>
		 </mt-header>
	</div>
</template>
<script>
	export default{
		props:['left','title','right'],
		methods:{
			backFn(){
				window.history.back()
			}
		}
	}
</script>