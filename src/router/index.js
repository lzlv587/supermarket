import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home/home'
import like from 'views/like/like'
import user from 'views/user/user'
import shop from 'views/shop/shop'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: home
    },
    {
      path:'/like',
      name:"LIKE",
      component:like
    },
    {
      path: '/shop',
      name: 'SHOP',
      component: shop
    },
    {
      path:'/user',
      name:"USER",
      component:user
    },
    {
      path: '/home',
      name: 'HOME',
      component: home
    }
  ]
})
