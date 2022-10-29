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
  mounted() {
    this.$bus.$on('hello',(data)=>{
      console.log("school中输出学生姓名：",data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  },
}
</script>
<style scoped lang='css'>
  .demo{
    background-color: pink;
    padding: 10px;

  }
</style>

