<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './School'
import Student from './Student.vue'
export default { 
  name:"App",
  components:{
    School,
    Student
  }

}
</script>

npm config set registry https://registry.npm.taobao.org