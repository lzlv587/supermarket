<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <TabBar>
      <TabBarItem path="/home">
        <img src="~assets/img/tabbar/home.png" slot="item-icon" >
        <img src="~assets/img/tabbar/home_act.png" slot="item-icon-act">
        <div slot="item-title">主页</div>
      </TabBarItem>
      <TabBarItem path="/user">
        <img src="~assets/img/tabbar/user.png" slot="item-icon">
        <img src="~assets/img/tabbar/user_act.png" slot="item-icon-act">
        <div slot="item-title">用户</div>
      </TabBarItem>
      <TabBarItem path="/shop">
        <img src="~assets/img/tabbar/shop.png" slot="item-icon">
        <img src="~assets/img/tabbar/shop_act.png" slot="item-icon-act">
        <div slot="item-title">商店</div>
      </TabBarItem>
      <TabBarItem path="/like">
        <img src="~assets/img/tabbar/like.png" slot="item-icon">
        <img src="~assets/img/tabbar/like_act.png" slot="item-icon-act">
        <div slot="item-title">喜欢</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import {TabBar,TabBarItem} from 'components/common/tabbar'

export default {
  name: 'tabbar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
/* @import "assets/css/base.css"; */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
