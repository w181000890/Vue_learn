<template>
  <li>
    <label>
      <input type="checkbox" :checked="val.todo" @change="checkTodo(val.id)" />
      <span>{{ val.title }}</span>
    </label>
    <button class="btn btn-danger" @click='btndel(val.id)'>删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItems",
  props: ["val",'deltodo','checkedth'],
  methods:{
    btndel(id){
      // console.log(id)
      this.deltodo(id)
    },
    //选中
    checkTodo(id){
      this.checkedth(id)
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover button {
  display: block;
}
</style>