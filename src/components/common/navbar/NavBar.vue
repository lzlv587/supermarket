<template>
    <div class="nav-bar" id="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"NavBar"
}
</script>
<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
        color: white;
    }
    .left, .right{
        width: 50px;
        background-color: rgb(253, 139, 219);
    }
    .center{
        flex:1;
        background-color: rgb(253, 139, 219);
    }
</style>