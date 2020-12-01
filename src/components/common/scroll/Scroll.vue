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
            console.log(position);
        })
    }
}
</script>
<style>
    .wrapper{
        overflow: hidden;
    }
</style>