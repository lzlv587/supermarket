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
    }
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