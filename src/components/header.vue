<template>
	<div>
		<mt-header title="豆瓣评分" fixed>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button slot="right" icon="more"></mt-button>
		</mt-header>

		<!-- <mt-header fixed :title="title">
	       <mt-button icon="back" v-if="left==='back'" @click="backFn" slot="left">返回</mt-button>
	       <mt-button icon="more" v-if="right==='set'" slot="right"></mt-button>
		 </mt-header>-->
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
<style lang="less" scoped>
	.mint-header.is-fixed{z-index: 2;}
	.mint-header{ background-color: green;}
</style>