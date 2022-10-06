<template>
  <div class='student'>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年纪：{{myAge+1}}</h2>
    <button @click="addAge">点我年纪加一</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      msg:'我是尚硅谷的一个学生',  
      myAge:this.age 
    }
  },
  methods:{
    addAge(){
      this.myAge++
    }
  },
  // props:['name','age','sex']
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  props:{
    age:{
      type:Number,
      default:99
    },
    sex:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
  }
}
</script>

<style>
  .student{
    background-color: pink;
  }
</style>