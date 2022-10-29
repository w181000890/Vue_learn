<template>
  <div class='demo'>
    <h2>学生姓名:{{name}}</h2>
    <h2>number值：{{number}}</h2>
    <button @click='demo'>点击我想school发送姓名</button>
  </div>
</template>
<script>
export default {
  name:'Student',
  data() {
    return {
      name:"小红",
      age:18,
      number:1
    }
  },
  methods:{
    demo(){
      this.$bus.$emit('hello',this.name)

    }
  }
}
</script>
<style scoped lang='less'>

  .demo{
    background-color: skyblue;

    padding: 20px;
    .atguigu{
        font-size: 40px;
        
    }
  }
</style>