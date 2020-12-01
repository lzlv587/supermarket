<template>
    <div>
        <div v-for="(item,index) in items" :key="index" class="danmu-item">{{item.text}}</div>
    </div>
</template>
<script>
export default {
    name:'goodlist',
    props:{
        items:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        goodload(){
            alert("div渲染完成")
        }
    },
    updated(){
        this.$nextTick(function(){
            console.log("测试发送事件总线")
            this.$bus.$emit('GoodLoad')
        })
    },
    
}
</script>
<style scoped>
    .danmu-item{
        background-color: #ddffff !important;
        padding: 18px;
        border-left: 6px solid blue !important;
        margin: 2px 6px 6px;
    }
</style>