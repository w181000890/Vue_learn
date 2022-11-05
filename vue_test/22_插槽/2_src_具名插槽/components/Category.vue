<template>
  <div id='root'>
    <h1>{{title}}分类</h1>
    <slot name='center'></slot>
    <slot name='footer'></slot>
    
  </div>
</template>
// https://s3.ax1x.com/2021/01/16/srJlq0.jpg
// http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 
<script>
export default {
  name:'Category',
  props:['title']

}
</script>

<style>
  #root{
    background-color: skyblue;
    height: 300px;
    width: 200px;
  }
  h1{
    background-color: orange;
    text-align: center;
  }
</style>