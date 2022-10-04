<template>
  <div>
    <img src="./asset/logo.png" alt="logo">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default { 
  name:"App",
  components:{
    School,
    Student
  }

}
</script>

// npm config set registry https://registry.npm.taobao.org