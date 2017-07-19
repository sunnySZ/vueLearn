<template>
	<div>
	   <HeaderView :title="title"></HeaderView>
		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore":bottom-method="loadBottom" :bottom-all-loaded="allLoaded" topLoadingText="我在加载中...">
            <mt-cell  v-for="(item,index) in myData" :key="index" :title="item.title" is-link :to="{ name: 'listDetail',params: { id: item.id }}"></mt-cell>
      </mt-loadmore>
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
		    		title:'首页',
                    myData:[],
                    listLoading:false,//加载中
                    allLoaded:true,//默认下拉数据加载完毕，不调用loadBottom方法
                    params:{
                    	start:0,
                    	count:10
                    },
                    topStatus:''              
			    }
		},
		created(){
			this.$indicator.open('加载中...');

			//初始化刷新请求数据
			this.getData(true)
		},
		methods:{
			getData(isRefresh){  
				//isRefresh,bool==true是下拉刷新，false表示是上拉加载更多
				if(this.listLoading) return;
				this.listLoading=true;
				var url='/lkp/v2/movie/in_theaters?';
				if(isRefresh){ 
					this.params.start=0
				}else{
					this.params.start+=10
				}
				this.$http.get(url, {params:this.params}).then((res)=>{
					this.listLoading=false;
					if(this.params.start>=res.data.total){
                       this.allLoaded=true;
                       this.$toast('没有更多了...')
					}else{
                         this.allLoaded=false;
					}
					if(isRefresh){
						this.myData=res.data.subjects
						this.$indicator.close();//隐藏loading
						this.$refs.loadmore.onTopLoaded();//关闭下拉loading动画
					}else{
						this.myData=this.myData.concat(res.data.subjects)
						this.$refs.loadmore.onBottomLoaded();//关闭上拉loading动画
					}    
				}).catch((err)=>{
                    //上下拉loading动画关闭
                    if(isRefresh){
                        this.$indicator.close();//隐藏loading
						this.$refs.loadmore.onTopLoaded();
					}else{
                    	this.$refs.loadmore.onBottomLoaded();
                    }
					console.log(err)
				});
				
	},
	loadTop(){
		//下拉刷新数据
		 this.getData(true)
	},
	handleTopChange(status){
		this.topStatus = status;
	},
	loadBottom(){
		//上拉加载更多
		console.log(111)
         if(this.listLoading){
         	this.$refs.loadmore.onBottomLoaded();
         }else{
          this.allLoaded=true;
		  this.getData(false)
         }
	}
}
}


</script>
<style>


</style>
