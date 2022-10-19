<template>
  <div class="todo-header">
    <input type="text" v-model= 'title' placeholder="请输入你的任务名称，按回车键确认" @keyup.enter='add' />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",
  props:['addList'],
  data() {
    return {
      title:'',
    }
  },
  methods:{
    add(){
      if(!this.title.trim())return alert('输入不能为空')
      //回车后输入框置空
      // this.addList({id:nanoid(),title:e.target.value,todo:false})
      // e.target.value=''
      this.addList({id:nanoid(),title:this.title,todo:false})
      this.title=''
      
    }
  }
};
</script>

<style scoped>
 /*header*/
    .todo-header input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
    }

    .todo-header input:focus {
      outline: none;
      border-color: rgba(82, 168, 236, 0.8);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>