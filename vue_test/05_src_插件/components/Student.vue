<template>
  <div>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生年纪：{{age}}</h2>
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