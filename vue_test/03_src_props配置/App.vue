<template>
<div>
  
  <student name='tom' sex="男" sex:{
        type:String,
        required:true
    }/>
</div>
  
</template>

<script>
import Student from './components/Student'
export default {
  // name:'App',
  components:{
    Student,
  }
}
</script>

