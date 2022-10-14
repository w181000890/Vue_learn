<template>
  <div class='demo'>
    <h2>学校名称:{{name}}</h2>
    <h2>学生地址：{{adress}}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name:"尚硅谷atguigu",
      adress:'北京'
    }
  },
}
</script>
<style scoped lang='css'>
  .demo{
    background-color: pink;
  }
</style>

