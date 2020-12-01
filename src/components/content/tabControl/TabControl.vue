<template>
    <div class="tabcontrol">
        <div v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}" 
        class="tabcontrol-item" @click="ItemClick(index)">{{item}} </div>
    </div>
</template>
<script>
export default {
    name:"tabcontrol",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        ItemClick(index){
            this.currentIndex=index;
            //子组件传父组件
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style>
    .tabcontrol{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        position: -webkit-sticky; 
        position: sticky; 
        top:0;
    }
    .tabcontrol-item{
        flex:1;

    }
    .active{
        border-bottom: 3px solid rgb(211, 96, 186);
    }
</style>