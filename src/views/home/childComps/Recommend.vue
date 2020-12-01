<template>
    <div class="recommend">
        <div v-for="recommend in recommends" :key="recommend.sort" class="recommend-item">
            <a :href="recommend.link">
                <img :src="recommend.image"/>
                <p>{{recommend.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"recommend",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style>
    .recommend{
        display:flex;
        text-align: center;
        width: 100%;
        border-bottom:8px solid #d8d8d8;
        margin-top: 2px;
        margin-bottom: 2px;
    }
    .recommend-item{
        flex:1;
    }
    .recommend img{
        width: 80px;
        height: 80px;
    }
    .recommend p{
        margin-top: 0%;
        margin-bottom: 0%;
        color: rgb(94, 94, 93);
        font-size: 12px;
    }
    .recommend a{
        text-decoration: none;
    }
</style>