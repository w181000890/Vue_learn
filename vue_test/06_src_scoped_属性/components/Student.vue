<template>
  <div class='demo'>
    <h2>学生姓名:{{name}}</h2>
    <h2 class='atguigu'>学生年纪：{{age}}</h2>
  </div>
</template>
<script>
export default {
  name:'Student',
  data() {
    return {
      name:"小红",
      age:18
    }
  },
}
</script>
<style scoped lang='less'>

  .demo{
    background-color: skyblue;
    .atguigu{
        font-size: 40px;
    }
  }
</style>