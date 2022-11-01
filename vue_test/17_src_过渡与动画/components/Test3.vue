<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition-group appear 
     name="animate__animated animate__bounce"
      enter-active-class="animated swing"
      leave-active-class="animated bounceOut"
    >
      <!-- <h1 v-show='!isShow' key="1">shangg</h1> -->
      <h1 v-show='isShow' key="12">suiyu</h1>
    </transition-group>
    
  </div>
</template>

<script>
import 'animate.css'
export default {
  name:'test3',
  data() {
    return {
      isShow:true
    }
  },
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }
  
 

  
</style>