<template>
  <div>
    <h2 @click='showName'>学生姓名：{{name}}</h2>
    <h2>学生年纪：{{age}}</h2>
  </div>
</template>

<script>
import {mixin,mixin1} from '../mixin'
export default {
  name:"Student",
  data() {
    return {
      name:"小红",
      age:18
    }
  },
//  mixins:[mixin,mixin1]

}
</script>

