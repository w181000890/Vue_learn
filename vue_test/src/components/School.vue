<template>
  <div class=school>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
  </div>
</template>

<script>
export default {
  name:"School",
  data(){
    return{
      name:"尚硅谷",
    adress:"北京"
    }
    
  }
}
</script>

<style>
  .school{
    background-color: orange;
  }
</style>