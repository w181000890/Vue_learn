<template>
  <div class='app'>
    <h1>{{msg}}，学生姓名是{{studentname}}</h1>
    <Student></Student>
    <br/>
    <!-- <School :getSchoolName='getSchoolName' ></School> -->
    <School ></School>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'
export default {
  name:'App',
  components:{
    School,
    Student
  },
  data() {
    return {
      msg:'你好啊',
      studentname:''

    }
  },
}
</script>
<style>
.app{
  background-color:purple
}
</style>

