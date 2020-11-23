<template>
    <div class="tab_bar_item" @click="item_click()">
        <div v-if="isActive">
            <slot name="item-icon-act"></slot>
        </div>
        <div v-else>
            <slot name="item-icon"></slot>
        </div>
        <div :class="{active:isActive}" >
            <slot name="item-title"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
      path:String
  },
  data(){
      return{
        //   isActive:false
      }
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path)!=-1
      }
  },
  methods:{
      item_click(){
        //   console.log(this.path)
          this.$router.replace(this.path)
      }
  }
}
</script>

<style>


.tab_bar_item{
  flex:1;
  text-align: center;
}
.tab_bar_item img{
    
}
.tab_bar_item div{
    font-size: 10px;
}
.active{
    color: #d4237a;
}
</style>
