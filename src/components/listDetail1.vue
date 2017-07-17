<template>
<div>
 <HeaderView></HeaderView>
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
		created(){
              this.getData()
		},
		methods:{
			getData(){
				this.$indicator.open()
				this.id=this.$route.query.id;
				var url='/lkp/v2/movie/subject/'+this.id;
            this.$http.get(url).then((res)=>{
            	var data=res.data;
            	this.details=data;
            	this.$indicator.close();
            }).catch((err)=>{
            	console.log(err)
            })
			}


		}
	}
</script>