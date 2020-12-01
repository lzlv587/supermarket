<template>
<!-- 
     ref若绑定在组件上，拿到的就是组件
     ref绑定在元素上，则拿到的是元素
     在vue中尽量使用ref获取指定元素
     而不要使用 querySelector 这种方法
 -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'scroll',
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    mounted(){
        // this.scroll=new BScroll(document.querySelector('.wrapper'))
        /*
                ref若绑定在组件上，拿到的就是组件
                ref绑定在元素上，则拿到的是元素
                在vue中尽量使用ref获取指定元素
                而不要使用 querySelector 这种方法
        */ 
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:true,
            click:true
        })
        this.scroll.on('scroll',(position)=>{
            // console.log(position);
        })
        this.scroll.on('pullingUp',()=>{
            console.log('到底了')
            this.$emit('ShowMore',this.scroll)
        })
        this.$emit('TransScroll',this.scroll)
    },
    methods:{
        refresh(){
            console.log(this.scroll)
            console.log('开始处理刷新scroll')
            this.scroll.refresh();
        },
        finishPullUp(){
            console.log('完成了加载更多')
            this.scroll.finishPullUp();
        }
    }
}
</script>
<style>
    .wrapper{
        overflow: hidden;
    }
</style>