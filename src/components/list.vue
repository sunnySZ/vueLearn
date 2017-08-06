<template>
    <div>
        <HeaderView :title="title"></HeaderView>
        <mt-cell title="正在热映" is-link :to="{ name:'infinite', params: { url: '/lkp/v2/movie/in_theaters?' }}" value="更多"></mt-cell>
        <!--<mt-swipe :auto="4000">
            <mt-swipe-item class="slide1">1</mt-swipe-item>
            <mt-swipe-item class="slide2">2</mt-swipe-item>
            <mt-swipe-item class="slide3">3</mt-swipe-item>
        </mt-swipe>-->

        <!--<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore"
                     :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" topLoadingText="我在加载中...">
            <mt-cell v-for="(item,index) in myData" :key="index" :title="item.title" is-link
                     :to="{ name: 'listDetail',params: { id: item.id }}"></mt-cell>
        </mt-loadmore>-->
        <swiper :options="swiperOption" class="silderdata">
            <swiper-slide v-for="(item,index) in myData">
                <router-link :to="{ name: 'listDetail',params: { id: item.id }}">
                <img :src="item.images.medium"  />
                <div class="movie_title"> {{ item.title }}</div>
                <div class="movie_star"><span
                        :class="'rating-star allstar'+ item.rating.stars"></span>{{item.rating.average}}
                </div>
                </router-link>
            </swiper-slide>
        </swiper>
        <mt-cell title="即将上映" is-link :to="{ name:'infinite', params: { url: '/lkp/v2/movie/coming_soon?' }}" value="更多"></mt-cell>
        <mt-cell title="Top250" is-link :to="{ name:'infinite', params: { url: '/lkp/v2/movie/top250?' }}" value="更多"></mt-cell>
        <mt-cell title="口碑榜" is-link :to="{ name:'infinite', params: { url: '/lkp/v2/movie/weekly?' }}" value="更多"></mt-cell>
    </div>
</template>
<script>
    import HeaderView from './header.vue'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default{
        components: {
            HeaderView,
            swiper,
            swiperSlide
        },
        data(){
            return {
                title: '首页',
                myData: [],
                id:'',
                listLoading: false,//加载中
                allLoaded: true,//默认下拉数据加载完毕，不调用loadBottom方法
                params: {
                    start: 0,
                    count: 10
                },
                topStatus: '',
                swiperOption: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
            }
        },
        created(){
            this.$indicator.open('加载中...');
            this.getlistData();
            //初始化刷新请求数据
            // this.getData(true)
        },
        methods: {
            getlistData(){
                var url = 'v2/movie/in_theaters?';
                this.$http.get(url, {params: this.params}).then((res) => {
                    this.myData = res.data.subjects
                    this.$indicator.close();//隐藏loading
                }).catch((err) => {

                });
            }
            /*getData(isRefresh){
             //isRefresh,bool==true是下拉刷新，false表示是上拉加载更多
             if (this.listLoading) return;
             this.listLoading = true;
             var url = '/lkp/v2/movie/in_theaters?';
             if (isRefresh) {
             this.params.start = 0
             } else {
             this.params.start += 10
             }
             this.$http.get(url, {params: this.params}).then((res) => {
             this.listLoading = false;
             if (this.params.start >= res.data.total) {
             this.allLoaded = true;
             this.$toast('没有更多了...')
             } else {
             this.allLoaded = false;
             }
             if (isRefresh) {
             this.myData = res.data.subjects
             this.$indicator.close();//隐藏loading
             this.$refs.loadmore.onTopLoaded();//关闭下拉loading动画
             } else {
             this.myData = this.myData.concat(res.data.subjects)
             this.$refs.loadmore.onBottomLoaded();//关闭上拉loading动画
             }
             }).catch((err) => {
             //上下拉loading动画关闭
             if (isRefresh) {
             this.$indicator.close();//隐藏loading
             this.$refs.loadmore.onTopLoaded();
             } else {
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
             if (this.listLoading) {
             this.$refs.loadmore.onBottomLoaded();
             } else {
             this.allLoaded = true;
             this.getData(false)
             }
             }*/


        }
    }


</script>
<style lang="less">
    #app {
        .swiper-slide {
            height: 16rem;
        }
        .swiper-slide img {
            width: 100%;
            height: 12rem;
        }
        .movie_title {
            font-size: 1.2rem;
            white-space: nowrap;
            height: 2rem;
            overflow: hidden;
            color: #444444;
        }
        .movie_star {
            font-size: 1.2rem;
            color: gray;
        }
        .rating-star {
            background: url("../assets/ic_rating_s.png") no-repeat;
            height: 11px;
            width: 55px;
            display: inline-block;
        }
        .allstar50 {
            background-position: 0 0;
        }
        .allstar45 {
            background-position: 0 10%;
        }
        .allstar40 {
            background-position: 0 20%;
        }
        .allstar35 {
            background-position: 0 30%;
        }
        .allstar30 {
            background-position: 0 40%;
        }
        .allstar25 {
            background-position: 0 50%;
        }
        .allstar20 {
            background-position: 0 60%;
        }
        .allstar15 {
            background-position: 0 70%;
        }
        .allstar10 {
            background-position: 0 80%;
        }
        .allstar05 {
            background-position: 0 90%;
        }
        .allstar00 {
            background-position: 0 100%;
        }
        .mint-cell-title {
            border-left: 0.3rem solid green;
            padding-left: 0.5rem;
            font-size: 1.4rem;
        }
        .mint-cell-wrapper {
            font-size: 1.2rem;
            background-image: none;
            padding: 0;
        }
        .mint-cell-value.is-link {
            color: green;
            margin-right: 1.2rem;
        }
        .mint-cell-allow-right::after {
            right: 0.5rem;
        }

        /* .mint-swipe {
             height: 200px;
             color: #fff;
             font-size: 30px;
             text-align: center;
             margin-bottom: 20px;
         }

         .mint-swipe-item {
             line-height: 200px;
         }

         .slide1 {
             background-color: #0089dc;
             color: #fff;
         }

         .slide2 {
             background-color: #ffd705;
             color: #000;
         }

         .slide3 {
             background-color: #ff2d4b;
             color: #fff;
         }*/
    }
</style>
