<template>
  <div>
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ adress }}</h2>
  </div>
</template>

<script>
import {mixin,mixin1} from '../mixin'
export default {
  name:'School',
  data(){
    return{
        name:"山硅谷",
        adress:'北京'
    }
    
  },
  // mixins:[mixin,mixin1]
}
</script>

