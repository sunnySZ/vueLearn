<template>
<div>
 <HeaderView left="back" right="set" :title="title"></HeaderView>
	<div v-if='details'>
	{{details.summary}}</div>
</div>	
</template>
<script>
import HeaderView from './header.vue'
	export default{
		components:{
			HeaderView
		},
		data(){
			return {
				title:'详情',
				id:null,
				details:null
			}
		},
		methods:{
			getData(){
				this.$indicator.open()
				this.id=this.$route.params.id;
				console.log(this.$route)
				//this.id=this.$route.path
				var url='v2/movie/subject/'+this.id;
            this.$http.get(url).then((res)=>{
            	var data=res.data;
            	this.details=data;
            	this.$indicator.close();
            }).catch((err)=>{
            	console.log(err)
            })
			}
		},
		beforeRouteEnter(route,from,next){
			next(vm=>{
				vm.getData()
			})
		},
		beforeRouteLeave(route,from,next){
			this.details=null;
			next()
		}
	}
</script>