<template>
  <ul class="todo-main">
    <MyItem v-for='todo in todoList' :key='todo.id' 
    :todoObj = 'todo' :checkHandle='checkHandle' :deleteHander='deleteHander'/>
  </ul>
</template>

<script>
import MyItem from "./MyItem";
export default {
  name: "MyList",
  components:{
    MyItem,
  },
  props:['todoList','checkHandle','deleteHander']
};
</script>

<style scoped>
 /*main*/
    .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    }

    .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    }
</style>