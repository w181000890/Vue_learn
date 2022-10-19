<template>
  <ul class="todo-main">
    <MyItems v-for="val in todoList" :key="val.id"
    :val="val" :deltodo='deltodo' :checkedth="checkedth"></MyItems>
  </ul>
</template>

<script>
import MyItems from "./MyItems";
export default {
  name: "MyList",
  components: {
    MyItems,
  },
  props:['todoList','deltodo','checkedth']
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