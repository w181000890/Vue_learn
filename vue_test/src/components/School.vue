<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{adress}}</h2>
    <button @click="showName">点我提示学校名字</button>
  </div>
</template>

<script>
const school = Vue.extend({
  name:"School",
  data() {
    return {
      schoolName: "尚硅谷",
      adress: "北京",
    }
  },
  methods:{
    showName(){
      alert(this.showName)
    }
  }
})
// export {school}
export default school
</script>

<style>
 .demo{
  background-color: orange;
 }
</style>