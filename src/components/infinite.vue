<template>
    <div>
        <HeaderView></HeaderView>
        <ul v-infinite-scroll="getData" infinite-scroll-disabled="allLoaded" infinite-scroll-distance="50"  class="list_view">
            <li v-for="item in myData">
                <router-link :to="{ name: 'listDetail',params: { id: item.id }}">
                    <img :src="item.images.medium"/>
                    <div class="movie_title"> {{ item.title }}</div>
                    <div class="movie_star"><span
                            :class="'rating-star allstar'+ item.rating.stars"></span>{{item.rating.average}}
                    </div>
                </router-link>
            </li>
        </ul>
        <p v-show="listLoading">loading...</p>
    </div>
</template>
<script>
    import HeaderView from './header.vue'
    export default{
        components: {
            HeaderView
        },
        data(){
            return {
                myData: [],
                listLoading: false,//加载中
                allLoaded: false,//默认下拉数据加载完毕，不调用loadBottom方法
                url: this.$route.params.url,
                params: {
                    start: 0,
                    count: 10
                }
            }
        },
        created(){
            //this.$indicator.open('加载中...');
            this.getData()
        },
        methods: {
            getData(){
                //isRefresh,bool==true是下拉刷新，false表示是上拉加载更多
                if (this.listLoading) return;
                this.listLoading = true;
                //	var url='/lkp/v2/movie/in_theaters?';
                this.$http.get(this.url, {params: this.params}).then((res) => {
                    //	this.$indicator.close();//隐藏loading
                    this.listLoading = false;
                    this.params.start += 10
                    if (this.params.start >= res.data.total) {
                        this.allLoaded = true;
                        this.$toast('没有更多了...')
                    }
                    this.myData = this.myData.concat(res.data.subjects)
                }).catch((err) => {
                    //上下拉loading动画关闭
                    //   this.$indicator.close();//隐藏loading
                    this.listLoading = true;
                    console.log(err)
                });
            }
        }
    }
</script>
<style lang="less">
    .list_view { padding: 0; margin: 0;}
    .list_view li{ width: 33.33%;  height:16rem; list-style: none; display: inline-block;}
    .list_view li img {
        width: 100%;
        height: 12rem;
    }


</style>
