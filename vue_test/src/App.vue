<template>
  <div>
    <h1 v-text='msg'></h1>
    <School/>
  
  </div>
</template>

<script>
import School from './components/School'
export default {
  name:"App",
  data() {
    return {
      msg:"欢迎学习vue"
    }
  },
  components:{
    School,
  }
}
</script>

