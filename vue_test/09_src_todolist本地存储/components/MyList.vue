<template>
  <ul class="todo-main">
    <MyItems v-for="val of todos" :key="val.id" :val='val' :deleteItem='deleteItem'
    :changeChecked='changeChecked'></MyItems>
  </ul>
</template>

<script>
import MyItems from './MyItems'
export default {
  name:'MyList',
  components:{
    MyItems:MyItems
  },
  props:['todos','changeChecked','deleteItem']
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