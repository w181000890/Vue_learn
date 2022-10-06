<template>
  <div>
    <h2>学校名称:{{name | mySlice}}</h2>
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

