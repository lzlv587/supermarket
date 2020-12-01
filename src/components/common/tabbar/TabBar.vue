<template>

    <div id="tab_bar">
        <slot></slot>
    </div>

</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>

#tab_bar{
  display: flex;
  height: 49px;
  background-color: #efefef;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -3px #d5d3d3;
  /* box-shadow: 0 -3px -3px beige; */
}
</style>
