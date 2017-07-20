<template>
    <div>
        <HeaderView :title="title"></HeaderView>
        <mt-cell title="近期上映" is-link value="更多"></mt-cell>
        <!--<mt-swipe :auto="4000">
            <mt-swipe-item class="slide1">1</mt-swipe-item>
            <mt-swipe-item class="slide2">2</mt-swipe-item>
            <mt-swipe-item class="slide3">3</mt-swipe-item>
        </mt-swipe>-->

        <swiper :options="swiperOption" class="silderdata">
            <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
        </swiper>


        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore"
                     :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" topLoadingText="我在加载中...">
            <mt-cell v-for="(item,index) in myData" :key="index" :title="item.title" is-link
                     :to="{ name: 'listDetail',params: { id: item.id }}"></mt-cell>
        </mt-loadmore>
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
                swiperSlides: [1, 2, 3, 4, 5, 6, 7]
            }
        },
        created(){
            this.$indicator.open('加载中...');

            //初始化刷新请求数据
            this.getData(true)
        },
        methods: {
            getData(isRefresh){
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
            }
        }
    }


</script>
<style lang="less">
    #app {
        .silderdata {
            height: 120px;
            background-color: red;
        }
        .swiper-slide {
            background-color: green;
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
