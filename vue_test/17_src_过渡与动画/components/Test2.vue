<template>
  <div>
    <button @click='isShow=!isShow'>显示/隐藏</button>
    <transition-group appear name='hello'>
      <h1 v-show='!isShow' key="1">你好啊</h1>
      <h1 v-show='isShow' key="12">尚硅谷</h1>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  name:'test2',
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
  
  .hello-enter{
    transform:translateX(-100%);
  }
  .hello-enter-to{
    transform:translateX(0);
  }
  .hello-leave{
    transform: translateX(0);
  }
  .hello-leave-to{
    transform: translateX(-100%);
  }
  .hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
  }

  
</style>