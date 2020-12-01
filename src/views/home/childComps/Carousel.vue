<template>
    <div>
        <el-carousel height="200px">
            <el-carousel-item v-for="banner in banners" :key="banner.image">
                <div style="height:200px">
                    <a :href="banner.link">
                        <img :src="banner.image" style="height:100%"/>
                    </a>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name:"carousel",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>