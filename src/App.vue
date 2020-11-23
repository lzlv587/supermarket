<template>
  <div id="app">
    <router-view/>
    <tabbar/>
  </div>
</template>

<script>
import tabbar from '@/components/content/tabbar'
export default {
  name: 'App',
  components:{
    tabbar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
