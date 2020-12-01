<template>
    <div id="home">
        <nav-bar>
            <div slot="center">首页</div>
        </nav-bar>
        <scroll class="scroll" ref="scroll" @ShowMore="ShowMore">
            <carousel :banners="banners"/>
            <recommend :recommends="recommands"/>
            <weekpop/>
            <tabcontrol :titles="titles" @tabClick="tabClick"/>
            <goodlist :items="showgood"/>

        </scroll>
        <pushup @click.native="backtop()"/>
    </div>
</template>
<script>

import NavBar from 'components/common/navbar/NavBar'
//home的子组件
import carousel from './childComps/Carousel'
import recommend from './childComps/Recommend'
import weekpop from './childComps/WeekPop'
import {getHomeMutidata,getDanmu} from 'network/home'
import goodlist from 'components/content/goods/GoodList'

import tabcontrol from 'components/content/tabControl/TabControl'
import scroll from 'components/common/scroll/Scroll'
import pushup from 'components/common/pushup/pushup'
export default {
    name:'Home',
    components:{
        NavBar,
        carousel,
        recommend,
        weekpop,
        tabcontrol,
        goodlist,
        scroll,
        pushup
    },
    data(){
        return{
            banners:[],
            recommands:[],
            main_data:[
                {
                    danmu:{
                        page:2,
                        danmu_data:[]
                    }
                },
                {
                    danmu:{
                        page:4,
                        danmu_data:[]
                    }
                },
                {
                    danmu:{
                        page:4,
                        danmu_data:[]
                    }
                }
            ],
            titles:['流行','新款','古装'],
            currentType:0
        }
    },
    methods:{
        tabClick(index){
            this.currentType=index
        },
        backtop(){
            console.log("回到顶部")
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        ShowMore(){
            console.log("加载更多处理");
            this.getDanmuImp()
        },
        getDanmuImp(){
            console.log("获取数据")
            const page=this.main_data[0].danmu.page
            getDanmu(page).then(res=>{
                this.main_data[0].danmu.danmu_data.push(...res.data);
                this.main_data[0].danmu.page++;
                //完成加载更多
                this.$refs.scroll.finishPullUp()
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    computed:{
        showgood(){
            return this.main_data[this.currentType].danmu.danmu_data
        }
    },
    created(){
        /**
         * 数据网络请求
        */
       //获取推荐数据以及轮播图数据
        getHomeMutidata().then(res=>{
            this.banners=res.data.data.banner.list
            this.recommands=res.data.data.recommend.list
        }).catch(err=>{
            console.log(err)
        })

        const page=this.main_data[0].danmu.page
        getDanmu(this.main_data[0].danmu.page).then(res=>{
            
            this.main_data[0].danmu.danmu_data.push(...res.data)
        }).catch(err=>{
            console.log(err);
        })
        

        this.$bus.$on('GoodLoad',()=>{
            console.log('测试接收事件总线')
            this.$refs.scroll.refresh()
        })
    },
    mounted(){
        // this.$bus.$on('GoodLoad',()=>{
        //     // console.log(this.$refs.scroll)
        //     // this.$refs.scroll.refresh()
        // })
    }
}
</script>
<style scoped>
    /* #home{
        height: 100vh;
    } */
    .scroll{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left:0px;
        right:0px;
        overflow:hidden;
    }
    /* .scroll{
        overflow: hidden;

        height: calc(100% - 93px);
    } */
</style>

